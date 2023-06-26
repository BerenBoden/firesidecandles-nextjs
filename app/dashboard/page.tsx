import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";

export default async function page() {
  const session = await getServerSession(authOptions);
  console.log(session);
  if (!session) redirect("/login");
  return <div>page</div>;
}
