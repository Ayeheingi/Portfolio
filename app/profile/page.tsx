import { redirect } from "next/navigation";

export default function ProfilePage() {
  redirect(`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/#profile`);
}
