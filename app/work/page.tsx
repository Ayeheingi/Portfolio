import { redirect } from "next/navigation";

export default function WorkPage() {
  redirect(`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/#work`);
}
