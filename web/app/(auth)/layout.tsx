import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authentication | BPC Drive",
  description:
    "Sign in to BPC Drive - BlindPenguin's secure enterprise cloud storage solution.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center'>
      {children}
    </div>
  );
}
