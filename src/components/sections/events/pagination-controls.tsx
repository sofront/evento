import Button from "@/components/button/button";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import next from "next";
import Link from "next/link";

type PaginationControlsProps = {
  prevPath: string | null;
  nextPath: string | null;
};
export default function PaginationControls({
  prevPath,
  nextPath,
}: PaginationControlsProps) {
  return (
    <nav className="flex items-cente justify-between w-full">
      {prevPath ? (
        <Link href={prevPath}>
          <Button>
            <ArrowLeftIcon /> Previous
          </Button>
        </Link>
      ) : (
        <div></div>
      )}

      {nextPath ? (
        <Link href={nextPath}>
          <Button>
            Next
            <ArrowRightIcon />
          </Button>
        </Link>
      ) : (
        <div></div>
      )}
    </nav>
  );
}
