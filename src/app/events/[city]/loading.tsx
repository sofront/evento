import Skeleton from "@/components/skeleton/skeleton";

export default async function LoadingEvents() {
  return (
    <section className="max-w-[1100px] w-full flex flex-wrap gap-10 justify-center px-[20px]">
      {Array.from({ length: 6 }).map((_, i) => (
        <Skeleton
          key={i}
          className="rounded-xl mb-2 h-[380px] w-full flex-1 basis-80 max-w-[500px]"
        />
      ))}
    </section>
  );
}
