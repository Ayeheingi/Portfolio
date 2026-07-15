import { redirect } from "next/navigation";

export default function StrengthsPage() {
  redirect(`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/#strengths`);
}
