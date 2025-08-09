import "server-only";

import { unstable_cache } from "next/cache";
import { notFound } from "next/navigation";
import prisma from "./db";
import { capitalize } from "./utils";

export const fetchEvents = unstable_cache(async (city?: string, page = 1) => {
  const trimmedCity = city?.trim() || "";
  const hasCity = trimmedCity !== "all";

  const whereClause = hasCity ? { city: capitalize(trimmedCity) } : undefined;

  const events = await prisma.eventoEvent.findMany({
    where: {
      city: {
        equals: hasCity ? capitalize(trimmedCity) : undefined,
      },
    },
    orderBy: {
      date: "asc",
    },
    take: 6,
    skip: (page - 1) * 6,
  });

  const totalCount = await prisma.eventoEvent.count({ where: whereClause });
  console.log({ totalCount });
  return { events, totalCount };
});

export const fetchEvent = unstable_cache(async (slug: string) => {
  const event = await prisma.eventoEvent.findUnique({
    where: {
      slug,
    },
  });

  if (!event) {
    return notFound();
  }

  return event;
});
