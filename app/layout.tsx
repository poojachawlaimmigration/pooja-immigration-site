import "./globals.css";

export const metadata = {
  title: "Pooja Chawla Immigration",
  description: "Canadian Immigration Services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}

        {/* Sticky Button */}
        <a
          href="/contact"
          className="fixed bottom-5 right-5 bg-black text-white px-5 py-3 rounded-full shadow-lg z-50"
        >
          Book Consultation
        </a>
      </body>
    </html>
  );
}