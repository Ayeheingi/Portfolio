import { redirect } from "next/navigation";

export default function SkillPage() {
  redirect(`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/#skills`);
}
