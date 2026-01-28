import Hero from "@/components/Hero";
import EventCard from "@/components/EventCard";
import { events } from "@/data/events";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function Home() {
  const featuredEvents = events.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      <Hero />

      {/* Featured Events Section */}
      <section className="py-24 bg-black">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Featured Events</h2>
            <p className="mt-4 text-lg leading-8 text-zinc-400">
              Check out some of the highlights of this year's fest.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredEvents.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <Link href="/events">
              <Button variant="outline" size="lg">View All Events</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[var(--dark-frame)] opacity-50 -z-10" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">About SIT Nagpur</h2>
              <p className="text-lg text-zinc-400 mb-6">
                Symbiosis Institute of Technology, Nagpur is a premier engineering institute dedicated to fostering innovation and technical excellence. Our annual Tech Fest brings together the brightest minds from across the country.
              </p>
              <Button variant="default">Learn More</Button>
            </div>
            <div className="relative h-64 lg:h-96 rounded-2xl overflow-hidden glass-panel">
              <img
                src="/images/campus.webp"
                alt="SIT Nagpur Campus"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
