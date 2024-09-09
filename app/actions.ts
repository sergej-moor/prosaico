"use server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { parseWithZod } from "@conform-to/zod";
import { storySchema } from "./utils/zodSchemas";
import prisma from "./utils/db";

export async function CreateStoryAction(prevState: any, formData: FormData) {
  const { getUser } = getKindeServerSession();

  const user = await getUser();

  if (!user) {
    return redirect("/api/auth/login");
  }

  const submission = parseWithZod(formData, {
    schema: storySchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  const response = await prisma.story.create({
    data: {
      description: submission.value.description,
      name: submission.value.name,
      subdirectory: submission.value.subdirectory,
      userId: user.id,
    },
  });

  return redirect("/dashboard/stories");
}
