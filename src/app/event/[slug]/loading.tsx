import EventSection from "@/components/sections/event/section";
import Skeleton from "@/components/skeleton/skeleton";

export default function Loading() {
  return (
    <main className="flex flex-col gap-11" role="status" aria-live="polite">
      <section className="relative flex justify-center items-center py-14 md:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="h-full w-full blur-3xl bg-gray-800/40" />
        </div>

        <figure className="relative z-10 gap-6 h-full flex flex-col justify-center items-center gap-x-6 lg:gap-x-16 md:flex-row px-4">
          <div className="w-full max-w-[350px] md:w-[360px]">
            <div className="aspect-[3/2] rounded-xl border-2 border-white/20 overflow-hidden">
              <Skeleton className="h-full w-full rounded-xl md:w-[325px]" />
            </div>
          </div>

          {/* Text block placeholder */}
          <figcaption className="flex flex-col w-full max-w-2xl gap-3">
            {/* date line */}
            <Skeleton width="w-40" className="rounded-sm" />
            {/* title (2 lines for safety) */}
            <Skeleton width="w-1/2" className="rounded-md" />
            {/* organiser */}
            <Skeleton width="w-56" className="rounded-sm" />
            {/* CTA button */}
            <Skeleton
              width="w-[95vw] sm:w-64"
              height="h-11"
              className="rounded-md mt-5"
            />
          </figcaption>
        </figure>
      </section>

      {/* About section */}
      <EventSection title=" ">
        <div className="flex flex-col gap-2 max-w-4xl">
          <Skeleton width="w-44" height="h-5" className="rounded-sm mb-2" />
          {Array.from({ length: 3 }).map((_, i) => (
            <Skeleton key={`about-${i}`} height="h-4" />
          ))}
        </div>
      </EventSection>

      {/* Location section */}
      <EventSection title=" ">
        <div className="flex flex-col gap-2 max-w-4xl">
          <Skeleton width="w-44" height="h-5" className="rounded-sm mb-2" />
          {Array.from({ length: 2 }).map((_, i) => (
            <Skeleton key={`loc-${i}`} height="h-4" />
          ))}
        </div>
      </EventSection>

      <span className="sr-only">Loading event details…</span>
    </main>
  );
}
