export default function Home() {
  return (
    <main style={{ fontFamily: "Arial", color: "#111" }}>

      {/* HERO */}
      <section style={{
        padding: "100px 20px",
        textAlign: "center",
        background: "linear-gradient(180deg, #ffffff, #f5f7fb)"
      }}>
        <h1 style={{ fontSize: "46px", fontWeight: "bold" }}>
          Pooja Chawla Immigration Consulting Corp.
        </h1>

        <p style={{
          fontSize: "18px",
          maxWidth: "750px",
          margin: "20px auto",
          color: "#555",
          lineHeight: "1.6"
        }}>
          Trusted Canadian Immigration Consultant serving Windsor & Toronto.
          We help clients with Permanent Residency, Express Entry, Work Permits,
          Study Permits, Spousal Sponsorship, and Inadmissibility cases.
        </p>

        <div style={{ marginTop: "30px", display: "flex", gap: "15px", justifyContent: "center", flexWrap: "wrap" }}>
          
          <a href="#contact" style={{
            padding: "12px 22px",
            background: "#000",
            color: "#fff",
            borderRadius: "8px",
            textDecoration: "none"
          }}>
            Book Consultation
          </a>

          <a href="tel:+1XXXXXXXXXX" style={{
            padding: "12px 22px",
            background: "green",
            color: "#fff",
            borderRadius: "8px",
            textDecoration: "none"
          }}>
            Call Now
            <div style={{ marginTop: "40px", padding: "30px", background: "#f9fafb", borderRadius: "10px" }}>
  
  <h2>Contact Us</h2>

  <form style={{
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    maxWidth: "400px",
    margin: "0 auto"
  }}>
    <input placeholder="Name" style={{ padding: "10px" }} />
    <input placeholder="Email" style={{ padding: "10px" }} />
    <textarea placeholder="Message" style={{ padding: "10px" }} />
    
    <button style={{
      padding: "10px",
      background: "black",
      color: "white",
      border: "none",
      borderRadius: "6px"
    }}>
      Send Message
    </button>
  </form>

</div>
          </a>

          <a href="https://wa.me/1XXXXXXXXXX" target="_blank" style={{
            padding: "12px 22px",
            background: "#25D366",
            color: "#fff",
            borderRadius: "8px",
            textDecoration: "none"
          }}>
            WhatsApp
          </a>

        </div>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "70px 20px", maxWidth: "1100px", margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", fontSize: "30px", marginBottom: "40px" }}>
          Immigration Services
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "20px"
        }}>
          {[
            "Express Entry & Permanent Residency",
            "Work Permits & LMIA",
            "Study Permits",
            "Spousal Sponsorship",
            "TRP & Criminal Rehabilitation"
          ].map((item, i) => (
            <div key={i} style={{
              padding: "25px",
              border: "1px solid #e5e7eb",
              borderRadius: "12px",
              background: "#fff",
              textAlign: "center",
              boxShadow: "0 2px 10px rgba(0,0,0,0.04)"
            }}>
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{
        padding: "80px 20px",
        background: "#f9fafb",
        textAlign: "center"
      }}>
        <h2 style={{ fontSize: "30px" }}>Contact Us</h2>

        <p>Email: info@poojachawlaimmigration.ca</p>
        <p>Phone: +1 (XXX) XXX-XXXX</p>

        <div style={{ marginTop: "20px", display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap" }}>
          
          <a href="mailto:info@poojachawlaimmigration.ca" style={{
            padding: "10px 15px",
            background: "black",
            color: "white",
            borderRadius: "6px",
            textDecoration: "none"
          }}>
            Email Us
          </a>

          <a href="tel:+1XXXXXXXXXX" style={{
            padding: "10px 15px",
            background: "green",
            color: "white",
            borderRadius: "6px",
            textDecoration: "none"
          }}>
            Call Now
          </a>

        </div>
      </section>

    </main>
  );
}