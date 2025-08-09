import { fetchEvents } from "@/lib/server-utils";
import EventoCard from "./evento-card";
import PaginationControls from "./pagination-controls";

type EventoListProps = {
  city: string;
  page?: number;
};

export default async function EventoList({ city, page = 1 }: EventoListProps) {
  const { events, totalCount } = await fetchEvents(city, page);
  const isFirstPage = page === 1;
  const isLastPage = !(totalCount > 6 * page);
  const prevPath = isFirstPage ? null : `/events/${city}?page=${page - 1}`;
  const nextPath = isLastPage ? null : `/events/${city}?page=${page + 1}`;

  return (
    <section className="max-w-[1100px] flex flex-wrap gap-10 justify-center px-[20px]">
      {events.map((event) => (
        <EventoCard key={event.id} eventoEvent={event} />
      ))}

      <PaginationControls prevPath={prevPath} nextPath={nextPath} />
    </section>
  );
}
