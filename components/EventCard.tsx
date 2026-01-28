import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/Button";
import { Calendar, MapPin } from "lucide-react";

interface EventProps {
    id: string;
    title: string;
    type: string;
    date: string;
    location: string;
    image: string;
    description: string;
    price: string;
}

export default function EventCard({ event }: { event: EventProps }) {
    return (
        <div className="group relative overflow-hidden rounded-xl border border-[var(--glass-border)] bg-[var(--dark-frame)] transition-all hover:border-[var(--neon-purple)]">
            <div className="aspect-video w-full overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    unoptimized
                />
                <div className="absolute bottom-4 left-4 z-20">
                    <span className="inline-block rounded-full bg-[var(--neon-blue)] px-2 py-0.5 text-xs font-bold text-black mb-2">
                        {event.type}
                    </span>
                    <h3 className="text-xl font-bold text-white">{event.title}</h3>
                </div>
            </div>

            <div className="p-4 space-y-4">
                <p className="line-clamp-2 text-sm text-zinc-400">
                    {event.description}
                </p>

                <div className="flex items-center justify-between text-xs text-zinc-500">
                    <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{event.location}</span>
                    </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-[var(--glass-border)]">
                    <span className="text-lg font-bold text-[var(--neon-green)]">{event.price === "0" ? "Free" : `₹${event.price}`}</span>
                    <Link href={`/register?event=${event.id}`}>
                        <Button size="sm" variant="outline" className="hover:border-[var(--neon-blue)] hover:text-[var(--neon-blue)]">Register</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
