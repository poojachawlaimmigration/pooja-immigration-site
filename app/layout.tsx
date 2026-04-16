import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pooja Chawla Immigration Consulting Corp | Windsor & Toronto Immigration Consultant",
  description:
    "Trusted Canadian Immigration Consultant in Windsor and Toronto. Services include Express Entry, PR, Work Permits, Study Permits, Spousal Sponsorship, TRP, and Criminal Rehabilitation.",
  keywords:
    "Immigration consultant Windsor, Immigration consultant Toronto, Canada PR, Express Entry, Work Permit Canada, Study Permit Canada",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}