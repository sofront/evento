import { cn } from "@/lib/utils";

type SkeletonProps = {
  width?: string;
  height?: string;
  rounded?: string;
  className?: string;
};

export default function Skeleton({
  width = "w-full",
  height = "h-4",
  rounded = "rounded-md",
  className = "",
}: SkeletonProps) {
  return (
    <div
      className={cn(`
        ${width} ${height} ${rounded} ${className}
        animate-pulse bg-gray-300 dark:bg-gray-700
      `)}
    />
  );
}
