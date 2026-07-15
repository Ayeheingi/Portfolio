import { redirect } from "next/navigation";

export default function AboutPage() {
  redirect(`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/#about`);
}
