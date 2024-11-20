import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/actions/user.actions";
import Sidebar from "@/components/Sidebar";
import MobileNavigation from "@/components/MobileNavigation";
import Header from "@/components/Header";
import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | IceCapsule",
  description:
    "Access and manage your files securely with IceCapsule. View storage usage, recent uploads, and organize your company documents efficiently.",
  keywords: [
    "file dashboard",
    "document management",
    "storage overview",
    "file organization",
    "recent uploads",
    "storage analytics",
  ],
};

export const dynamic = "force-dynamic";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  if (!currentUser) return redirect("/sign-in");

  return (
    <main className='flex h-screen'>
      <Sidebar {...currentUser} />

      <section className='flex h-full flex-1 flex-col'>
        <MobileNavigation {...currentUser} />

        <Header userId={currentUser.$id} accountId={currentUser.accountId} />

        <div className='main-content'>{children}</div>
      </section>

      <Toaster />
    </main>
  );
}
