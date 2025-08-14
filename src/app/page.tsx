import SearchFormPage from "@/components/sections/home/search-form";
import Typography from "@/components/typography/Typography";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center pt-36 px-3">
      <Typography component="h1" variant="display">
        Find events around you
      </Typography>

      <p className="mb-12 mt-7 text-2xl lg:text-3xl">
        Browse more than{" "}
        <span className="font-bold italic underline text-accent">10.000</span>{" "}
        events around you
      </p>

      <SearchFormPage />

      <section className="mt-4 flex gap-x-4 text-sm text-white/50">
        <p>Popular:</p>
        <div className="space-x-2 font-semibold">
          <Link href="/events/austin">Austin</Link>
          <Link href="/events/seattle">Seattle</Link>
        </div>
      </section>
    </main>
  );
}
