"use client"; // Error boundaries must be Client Components

import Button from "@/components/button/button";
import Typography from "@/components/typography/Typography";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="w-full flex flex-col items-center gap-6 mt-14">
      <div className="flex flex-col items-center gap-2">
        <Typography variant="title1">Something went wrong!</Typography>
        <Typography variant="body1">{error.message}</Typography>
      </div>
      <Button className="max-w-60" onClick={() => reset()}>
        Try again
      </Button>
    </div>
  );
}
