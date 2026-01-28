export default function Footer() {
    return (
        <footer className="border-t border-[var(--glass-border)] bg-black py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold tracking-tighter text-white">
                            NEO<span className="text-[var(--neon-blue)]">LOGIX</span>
                        </h3>
                        <p className="text-sm text-zinc-400">
                            Symbiosis Institute of Technology, Nagpur's Annual Technical Festival.
                            Celebrating innovation and technology.
                        </p>
                    </div>

                    <div>
                        <h4 className="mb-4 font-semibold text-white">Quick Links</h4>
                        <ul className="space-y-2 text-sm text-zinc-400">
                            <li><a href="/events" className="hover:text-[var(--neon-blue)]">Events</a></li>
                            <li><a href="/workshops" className="hover:text-[var(--neon-blue)]">Workshops</a></li>
                            <li><a href="/accommodation" className="hover:text-[var(--neon-blue)]">Accommodation</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-4 font-semibold text-white">Contact</h4>
                        <ul className="space-y-2 text-sm text-zinc-400">
                            <li>Nagpur, Maharashtra</li>
                            <li>techfest@sitnagpur.edu.in</li>
                            <li>+91 123 456 7890</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-4 font-semibold text-white">Follow Us</h4>
                        <div className="flex space-x-4">
                            {/* Social Icons would go here */}
                            <a href="#" className="p-2 bg-zinc-900 rounded-full hover:bg-[var(--neon-blue)] hover:text-black transition-colors">IG</a>
                            <a href="#" className="p-2 bg-zinc-900 rounded-full hover:bg-[var(--neon-blue)] hover:text-black transition-colors">LN</a>
                            <a href="#" className="p-2 bg-zinc-900 rounded-full hover:bg-[var(--neon-blue)] hover:text-black transition-colors">X</a>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-[var(--glass-border)] text-center text-sm text-zinc-600">
                    © {new Date().getFullYear()} SIT Nagpur Tech Fest. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
