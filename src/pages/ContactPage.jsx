import { Mail, MapPin, Phone, Send } from "lucide-react";
import ShinyButton from "../components/ui/shiny-button";

const contactCards = [
  {
    icon: MapPin,
    title: "Visit Us",
    value: "Sulaymaniyah City, Iraq",
    detail: "Manufacturing and project coordination headquarters.",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+964 (0) 000 000 0000",
    detail: "Available for project inquiries and production support.",
  },
  {
    icon: Mail,
    title: "Email Us",
    value: "info@modernduct.com",
    detail: "Send drawings, RFQs, or partnership requests anytime.",
  },
];

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 px-4 py-20 text-white md:px-6">
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-full max-w-5xl -translate-x-1/2 rounded-full bg-[#b7a801]/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.38em] text-[#b7a801]">
              Contact Us
            </p>
            <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
              Let&apos;s discuss your next project.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 md:text-lg">
              Whether you need product guidance, engineering support, or export
              coordination, our team is ready to help you build the right
              ventilation solution.
            </p>

            <div className="mt-10 grid gap-4">
              {contactCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.title}
                    className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur-md"
                  >
                    <div className="flex items-start gap-4">
                      <div className="rounded-2xl bg-[#b7a801]/12 p-3 text-[#b7a801]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm uppercase tracking-[0.24em] text-white/45">
                          {card.title}
                        </p>
                        <p className="mt-2 text-lg font-medium text-white">
                          {card.value}
                        </p>
                        <p className="mt-2 text-sm leading-7 text-zinc-400">
                          {card.detail}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.3)] backdrop-blur-xl md:p-8">
            <p className="text-sm uppercase tracking-[0.28em] text-white/45">
              Send an Inquiry
            </p>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <label className="block">
                <span className="text-sm text-white/60">Full Name</span>
                <input
                  type="text"
                  placeholder="Your name"
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-4 text-white outline-none transition placeholder:text-white/25 focus:border-[#b7a801]/40"
                />
              </label>
              <label className="block">
                <span className="text-sm text-white/60">Phone</span>
                <input
                  type="text"
                  placeholder="Your phone number"
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-4 text-white outline-none transition placeholder:text-white/25 focus:border-[#b7a801]/40"
                />
              </label>
              <label className="block md:col-span-2">
                <span className="text-sm text-white/60">Email</span>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-4 text-white outline-none transition placeholder:text-white/25 focus:border-[#b7a801]/40"
                />
              </label>
              <label className="block md:col-span-2">
                <span className="text-sm text-white/60">Project Details</span>
                <textarea
                  rows="6"
                  placeholder="Tell us about your project requirements..."
                  className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-black/20 px-4 py-4 text-white outline-none transition placeholder:text-white/25 focus:border-[#b7a801]/40"
                />
              </label>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-md text-sm leading-7 text-zinc-400">
                Share your project scope, location, or required products and our
                team will respond with the right direction.
              </p>
              <ShinyButton className="px-6 py-3">
                Send Inquiry <Send className="ml-2 h-4 w-4" />
              </ShinyButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
