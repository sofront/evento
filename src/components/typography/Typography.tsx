import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type TypographyProps = {
  children: ReactNode;
  className?: string;
  component?: "h6" | "h5" | "h4" | "h3" | "h2" | "h1" | "p" | "span" | "time";
  variant?:
    | "display"
    | "title1"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "caption1";
};

const variantStyles: Record<NonNullable<TypographyProps["variant"]>, string> = {
  display: "text-5xl lg:text-7xl font-extrabold tracking-tight",
  title1: "text-3xl lg:text-5xl font-bold tracking-tight",
  subtitle1: "text-xl md:text-2xl font-semibold",
  subtitle2: "text-md md:text-xl font-semibold",
  body1: "text-base lg:text-lg text-gray-300",
  caption1: "text-sm text-gray-500",
};

export default function Typography({
  children,
  className,
  component = "p",
  variant = "body1",
}: TypographyProps) {
  const Tag = component;
  return (
    <Tag className={cn(variantStyles[variant], className)}>{children}</Tag>
  );
}
