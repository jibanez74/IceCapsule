import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/actions/user.actions";
import Sidebar from "@/components/Sidebar";
import MobileNavigation from "@/components/MobileNavigation";
import Header from "@/components/Header";
import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | BPC Drive",
  description:
    "Access and manage your files securely with BPC Drive. View storage usage, recent uploads, and organize your company documents efficiently.",
  keywords: [
    "file dashboard",
    "document management",
    "storage overview",
    "file organization",
    "recent uploads",
    "storage analytics",
  ],
  openGraph: {
    title: "BPC Drive Dashboard",
    description:
      "Your secure enterprise file management dashboard. Monitor storage, access recent files, and manage company documents.",
    images: [
      {
        url: "/dashboard-preview.png",
        width: 1200,
        height: 630,
        alt: "BPC Drive Dashboard Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BPC Drive Dashboard",
    description:
      "Your secure enterprise file management dashboard. Monitor storage, access recent files, and manage company documents.",
    images: ["/dashboard-preview.png"],
  },
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
