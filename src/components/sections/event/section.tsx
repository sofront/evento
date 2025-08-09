import Typography from "@/components/typography/Typography";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type EventSectionProps = {
  title?: string;
  children: ReactNode;
  className?: string;
};

export default function EventSection({
  title,
  className,
  children,
}: EventSectionProps) {
  return (
    <section className={cn(`flex flex-col mx-auto px-5 w-full ${className}`)}>
      {!!title && (
        <Typography component="h3" variant="subtitle1">
          Location
        </Typography>
      )}
      {children}
    </section>
  );
}
