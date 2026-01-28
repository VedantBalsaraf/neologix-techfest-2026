import { Button } from "@/components/ui/Button";
import { MapPin, Home, Info } from "lucide-react";

export default function AccommodationPage() {
    return (
        <div className="py-12 bg-black min-h-screen">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold tracking-tight text-white">Accommodation</h1>
                    <p className="mt-4 text-zinc-400">Comfortable stay options for outstation participants.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Hostel Info */}
                    <div className="glass-panel rounded-2xl p-8 space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-[var(--neon-blue)] rounded-lg text-black">
                                <Home size={24} />
                            </div>
                            <h2 className="text-2xl font-bold text-white">On-Campus Hostel</h2>
                        </div>

                        <p className="text-zinc-300">
                            Stay within the campus premises in our secure and well-furnished hostels.
                            Separate accommodation available for boys and girls.
                        </p>

                        <ul className="space-y-4 text-zinc-400">
                            <li className="flex items-start gap-2">
                                <Info className="h-5 w-5 text-[var(--neon-blue)] shrink-0" />
                                <span>24/7 Water & Electricity Supply</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Info className="h-5 w-5 text-[var(--neon-blue)] shrink-0" />
                                <span>Wi-Fi Access</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Info className="h-5 w-5 text-[var(--neon-blue)] shrink-0" />
                                <span>Mess Facility Included</span>
                            </li>
                        </ul>

                        <div className="pt-6 border-t border-[var(--glass-border)]">
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-zinc-400">Per Person / Day</span>
                                <span className="text-2xl font-bold text-[var(--neon-green)]">₹500</span>
                            </div>
                            <Button variant="neon" className="w-full">Book Accommodation</Button>
                        </div>
                    </div>

                    {/* Location Map Placeholder */}
                    <div className="space-y-6">
                        <div className="aspect-square w-full bg-zinc-900 rounded-2xl flex items-center justify-center border border-[var(--glass-border)]">
                            <div className="text-center text-zinc-500">
                                <MapPin size={48} className="mx-auto mb-2" />
                                <p>Map Integration Placeholder</p>
                                <p className="text-sm">Symbiosis Institute of Technology, Nagpur</p>
                            </div>
                        </div>

                        <div className="glass-panel p-6 rounded-xl">
                            <h3 className="text-lg font-bold text-white mb-2">Reach Us</h3>
                            <p className="text-sm text-zinc-400">
                                The campus is located 15km from Dr. Babasaheb Ambedkar International Airport.
                                Cab services are readily available.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
