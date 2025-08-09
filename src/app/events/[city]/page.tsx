import EventoList from "@/components/sections/events/evento-list";
import Typography from "@/components/typography/Typography";
import { capitalize } from "@/lib/utils";
import { Suspense } from "react";
import LoadingEvents from "./loading";
import { Metadata } from "next";
import { z } from "zod";

type EventsPageProps = {
  params: {
    city: string;
  };
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

export const generateMetadata = ({ params }: EventsPageProps): Metadata => {
  const city = params.city.trim();
  const hasSelectedCity = city !== "all";
  const title = hasSelectedCity
    ? `Events in ${capitalize(city)}`
    : "All events";

  return { title };
};

const pageNumberSchema = z.coerce.number().int().positive().optional();

export default async function EventsPage({
  params,
  searchParams,
}: EventsPageProps) {
  const city = params.city.trim();
  const parsedPage = pageNumberSchema.safeParse(searchParams.page);
  if (!parsedPage.success) throw new Error("Invalid page number");

  const hasSelectedCity = city !== "all";
  const pageTitle = hasSelectedCity
    ? `Events in ${capitalize(city)}`
    : "All events";

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <Typography component="h1" variant="display" className="mb-28">
        {pageTitle}
      </Typography>

      <Suspense key={`${city}-${parsedPage.data}`} fallback={<LoadingEvents />}>
        <EventoList city={city} page={parsedPage.data} />
      </Suspense>
    </main>
  );
}
