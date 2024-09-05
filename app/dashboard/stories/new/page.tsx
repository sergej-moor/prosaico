import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function NewStoryRoute() {
  return (
    <div className="flex flex-col flex-1  ">
      <Card className="max-w-[500px]">
        <CardHeader>
          <CardTitle>Create Story</CardTitle>
          <CardDescription>Write your story!</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-y-6">
            <div className="grid gap-2">
              <Label>Story Name</Label>
              <Input placeholder="Story Name"></Input>
            </div>

            <div className="grid gap-2">
              <Label>Subdirectory</Label>
              <Input placeholder="Subdirectory"></Input>
            </div>

            <div className="grid gap-2">
              <Label>Teaser Text</Label>
              <Textarea placeholder="A short teasing description of your story!"></Textarea>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button>Submit</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
