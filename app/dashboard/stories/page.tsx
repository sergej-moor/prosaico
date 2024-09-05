import { Button } from "@/components/ui/button";
import { FileIcon, PlusCircleIcon } from "lucide-react";
import Link from "next/link";

export default function StoriesRoute() {
  return (
    <>
      <div className="flex w-full justify-end">
        <Button asChild>
          <Link href={"/dashboard/sites/new"}>
            <PlusCircleIcon className="mr-2 size-4"></PlusCircleIcon>Create
            Story
          </Link>
        </Button>
      </div>

      <div className="flex flex-col items-center justify-center rounded-md border border-dashed p-8 text-center animate-in fade-in-50">
        <div className="flex size-20 items-center justify-center rounded-full bg-primary/10">
          <FileIcon className="size-10 text-primary"></FileIcon>
        </div>
        <h2 className="mt-6 text-xl font-semibold">
          You dont have any Stories created
        </h2>
        <p className="mb-8 mt-2 text-center text-sm leading-6">
          Your posted Stories will show up here.
        </p>
        <Button asChild>
          <Link href={"/dashboard/sites/new"}>
            <PlusCircleIcon className="mr-2 size-4"></PlusCircleIcon>Create
            Story
          </Link>
        </Button>
      </div>
    </>
  );
}
