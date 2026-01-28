"use client";

import { useState } from "react";
import EventCard from "@/components/EventCard";
import { events } from "@/data/events";
import { Button } from "@/components/ui/Button";

export default function EventsPage() {
    const [filter, setFilter] = useState("All");

    const filteredEvents = filter === "All"
        ? events
        : events.filter(e => e.type === filter);

    const categories = ["All", "Workshop", "Competition", "Guest Lecture"];

    return (
        <div className="py-12 bg-black min-h-screen">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold tracking-tight text-white">Events Schedule</h1>
                    <p className="mt-4 text-zinc-400">Browse through our wide range of technical and non-technical events.</p>
                </div>

                {/* Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map(cat => (
                        <Button
                            key={cat}
                            variant={filter === cat ? "neon" : "outline"}
                            onClick={() => setFilter(cat)}
                        >
                            {cat}
                        </Button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredEvents.map(event => (
                        <EventCard key={event.id} event={event} />
                    ))}
                </div>
            </div>
        </div>
    );
}
