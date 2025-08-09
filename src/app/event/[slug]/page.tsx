import EventSection from "@/components/sections/event/section";
import Typography from "@/components/typography/Typography";
import { fetchEvent } from "@/lib/server-utils";
import { Metadata } from "next";
import Image from "next/image";

type EventPageProps = {
  params: {
    slug: string;
  };
};

export const generateMetadata = async ({
  params,
}: EventPageProps): Promise<Metadata> => {
  const slug = params.slug.trim();
  const event = await fetchEvent(slug);
  return { title: event?.name };
};

export async function generateStaticParams() {
  return [
    {
      slug: "comedy-extravaganza",
    },
    {
      slug: "dj-practice-session",
    },
  ];
}

export default async function EventPage({ params }: EventPageProps) {
  const slug = params.slug;
  const event = await fetchEvent(slug);

  return (
    <main className="flex flex-col gap-11">
      <section className="relative flex justify-center items-center py-14 md:py-20 overflow-hidden">
        <Image
          src={event.imageUrl}
          alt={`Background image of ${event.name}`}
          fill
          quality={20}
          className="object-fit blur-3xl z-0"
          sizes="(max-width: 1280px) 100vw, 1280px"
          priority
        />

        <figure className="z-1 gap-6 h-full relative flex flex-col justify-center items-center gap-x-6 lg:gap-x-16 md:flex-row">
          <Image
            src={event.imageUrl}
            alt={`Image of ${event.name}`}
            className="rounded-xl border-2 border-white/50 object-cover w-full max-w-[350px] sm:max-w-[inherit] sm:w-[inherit]"
            width={300}
            height={201}
            priority
          />
          <figcaption className="flex flex-col h-full">
            <Typography
              variant="caption1"
              className="text-gray-300"
              component="time"
            >
              {new Date(event.date).toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </Typography>

            <Typography variant="title1" component="h1">
              {event.name}
            </Typography>
            <Typography variant="caption1" className="text-gray-300">
              Organised by:{" "}
              <span className="italic">{event.organizerName}</span>
            </Typography>

            <button className="mt-5 bg-white/20 text-lg w-[95vw] sm:w-full py-2 rounded-md border-white/10 border-2 bg-blur state-effects">
              Get tickets
            </button>
          </figcaption>
        </figure>
      </section>

      <EventSection title="About this event">
        <Typography variant="body1" className="leading-6 max-w-4xl">
          {event.description}
        </Typography>
      </EventSection>

      <EventSection title="Location">
        <Typography variant="body1" className="leading-6 max-w-4xl">
          {event.location}
        </Typography>
      </EventSection>
    </main>
  );
}
