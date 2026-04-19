export default function Home() {
  return (
    <main className="flex flex-col items-center text-center px-6 py-16 space-y-24 max-w-6xl mx-auto">

      {/* HERO SECTION */}
      <section className="max-w-3xl space-y-6">
        <h1 className="text-5xl font-bold leading-tight">
          Canadian Immigration Services for Work, Study & Permanent Residency
        </h1>

        <p className="text-lg text-gray-600">
          Personalized immigration guidance to help you navigate Canadian pathways with clarity, strategy, and compliance.
        </p>

        <div className="flex gap-4 justify-center">
          <a href="/contact">
            <button className="bg-black text-white px-6 py-3 rounded-xl">
              Book Consultation
            </button>
          </a>

          <a href="/services">
            <button className="border px-6 py-3 rounded-xl">
              View Services
            </button>
          </a>
        </div>

        <p className="text-sm text-gray-500">
          ✔ Immigration consulting support based in Canada &nbsp; ✔ Step-by-step guidance &nbsp; ✔ Strategy-focused approach
        </p>
      </section>

      {/* SERVICES */}
      <section className="max-w-5xl w-full">
        <h2 className="text-2xl font-semibold mb-6">Our Services</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 border rounded-2xl">
            <h3 className="font-semibold">Permanent Residence</h3>
            <p className="text-sm text-gray-600 mt-2">
              Express Entry, PNPs, and PR pathways tailored to your profile.
            </p>
          </div>

          <div className="p-6 border rounded-2xl">
            <h3 className="font-semibold">Work Permits</h3>
            <p className="text-sm text-gray-600 mt-2">
              LMIA and LMIA-exempt permits with proper strategy.
            </p>
          </div>

          <div className="p-6 border rounded-2xl">
            <h3 className="font-semibold">Refusals</h3>
            <p className="text-sm text-gray-600 mt-2">
              Strong reapplications for previously refused cases.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Start Your Immigration Journey
        </h2>

        <a href="/contact">
          <button className="bg-black text-white px-6 py-3 rounded-xl">
            Book Consultation
          </button>
        </a>
      </section>

    </main>
  );
}