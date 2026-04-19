export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>

        {children}

        {/* Sticky Book Consultation Button */}
        <a
          href="/contact"
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            backgroundColor: "#000",
            color: "#fff",
            padding: "14px 18px",
            borderRadius: "999px",
            textDecoration: "none",
            fontWeight: "bold",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            zIndex: 1000
          }}
        >
          Book Consultation
        </a>

      </body>
    </html>
  );
}