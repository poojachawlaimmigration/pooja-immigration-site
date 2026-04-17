export default function Home() {
  return (
    <main className="flex flex-col items-center text-center px-6 py-12 space-y-16">

      <section className="max-w-3xl space-y-6">
        <h1 className="text-4xl font-bold">
          Canadian Immigration Solutions That Actually Work
        </h1>
        <p className="text-lg text-gray-600">
          Work with a licensed immigration professional providing strategic,
          IRCC-compliant guidance for PR, work permits, study visas, and complex cases.
        </p>

        <div className="flex gap-4 justify-center">
          <a href="/contact">
            <button className="bg-black text-white px-6 py-3 rounded-xl">
              Book a Consultation
            </button>
          </a>
          <button className="border px-6 py-3 rounded-xl">
            Check Eligibility
          </button>
        </div>

        <p className="text-sm text-gray-500">
          ✔ 90+ Five-Star Reviews &nbsp; ✔ Proven Results &nbsp; ✔ Personalized Strategy
        </p>
      </section>

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

      <section className="max-w-3xl space-y-4">
        <h2 className="text-2xl font-semibold">Why Choose Us</h2>
        <p className="text-gray-600">
          We focus on accuracy, strategy, and transparency. Every application is
          carefully prepared to meet current IRCC requirements and minimize risk.
        </p>
      </section>

      <section className="max-w-3xl space-y-6">
        <h2 className="text-2xl font-semibold">What Clients Say</h2>

        <div className="space-y-4 text-gray-600">
          <p>“The process was smooth and stress-free.”</p>
          <p>“Extremely knowledgeable and responsive.”</p>
          <p>“Handled my complex case perfectly.”</p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Start Your Immigration Journey
        </h2>
        <a href="/contact">
          <button className="bg-black text-white px-6 py-3 rounded-xl">
            Book a Consultation
          </button>
        </a>
      </section>

    </main>
  );
}