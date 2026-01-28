"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect, Suspense } from "react";
import { Button } from "@/components/ui/Button";
import { events } from "@/data/events";

function RegistrationForm() {
    const searchParams = useSearchParams();
    const eventId = searchParams.get("event");

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        college: "",
        phone: "",
        event: eventId || "",
    });

    const [selectedEventPrice, setSelectedEventPrice] = useState("0");

    useEffect(() => {
        if (formData.event) {
            const ev = events.find(e => e.id === formData.event);
            if (ev) {
                setSelectedEventPrice(ev.price);
            }
        } else {
            setSelectedEventPrice("0");
        }
    }, [formData.event]);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Registration Successful for ${formData.name}! Payment of ₹${selectedEventPrice} required.`);
    };

    return (
        <div className="py-12 bg-black min-h-screen flex items-center justify-center">
            <div className="w-full max-w-md p-8 glass-panel rounded-2xl">
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold text-white">Event Registration</h1>
                    <p className="text-zinc-400 text-sm">Fill in your details to participate.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-zinc-300 mb-2">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            required
                            className="w-full rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2 text-white focus:border-[var(--neon-blue)] focus:outline-none"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-zinc-300 mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            required
                            className="w-full rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2 text-white focus:border-[var(--neon-blue)] focus:outline-none"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-zinc-300 mb-2">College / Institute</label>
                        <input
                            type="text"
                            name="college"
                            required
                            className="w-full rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2 text-white focus:border-[var(--neon-blue)] focus:outline-none"
                            value={formData.college}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-zinc-300 mb-2">Phone Number</label>
                        <input
                            type="tel"
                            name="phone"
                            required
                            className="w-full rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2 text-white focus:border-[var(--neon-blue)] focus:outline-none"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-zinc-300 mb-2">Select Event</label>
                        <select
                            name="event"
                            required
                            className="w-full rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2 text-white focus:border-[var(--neon-blue)] focus:outline-none"
                            value={formData.event}
                            onChange={handleChange}
                        >
                            <option value="" disabled>-- Choose an Event --</option>
                            {events.map(ev => (
                                <option key={ev.id} value={ev.id}>
                                    {ev.title} ({ev.price === "0" ? "Free" : `₹${ev.price}`})
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="pt-4">
                        <div className="flex justify-between items-center mb-6 text-sm">
                            <span className="text-zinc-400">Total Fee:</span>
                            <span className="text-xl font-bold text-[var(--neon-green)]">
                                {selectedEventPrice === "0" ? "Free" : `₹${selectedEventPrice}`}
                            </span>
                        </div>
                        <Button type="submit" variant="neon" className="w-full">
                            {selectedEventPrice === "0" ? "Register Free" : "Proceed to Payment"}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default function RegisterPage() {
    return (
        <Suspense fallback={<div className="text-white text-center py-20">Loading...</div>}>
            <RegistrationForm />
        </Suspense>
    )
}
