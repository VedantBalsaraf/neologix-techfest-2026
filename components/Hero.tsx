"use client";

import Link from "next/link";
import { Button } from "./ui/Button";
import DecryptedText from "./DecryptedText";
import LiquidEther from "./LiquidEther";

export default function Hero() {
    return (
        <div className="relative isolate overflow-hidden pt-14 bg-black">
            {/* Liquid Ether Background */}
            <div className="absolute inset-0 -z-10">
                <LiquidEther
                    colors={['#5227FF', '#FF9FFC', '#B19EEF']}
                    mouseForce={20}
                    cursorSize={100}
                    isViscous
                    viscous={30}
                    iterationsViscous={32}
                    iterationsPoisson={32}
                    resolution={0.5}
                    isBounce={false}
                    autoDemo
                    autoSpeed={0.5}
                    autoIntensity={2.2}
                    takeoverDuration={0.25}
                    autoResumeDelay={3000}
                    autoRampDuration={0.6}
                    color0="#5227FF"
                    color1="#FF9FFC"
                    color2="#B19EEF"
                />
            </div>

            <div className="mx-auto max-w-7xl px-6 py-32 sm:py-48 lg:px-8">
                <div className="text-center">
                    <h1 className="text-5xl font-extrabold tracking-tighter text-white sm:text-7xl md:text-8xl mb-4">
                        <DecryptedText
                            text="NEOLOGIX"
                            speed={30}
                            maxIterations={15}
                            animateOn="view"
                            className="text-gradient drop-shadow-[0_0_15px_rgba(0,243,255,0.5)]"
                            encryptedClassName="text-gradient opacity-50"
                        />
                        <br />
                        <span className="text-3xl font-medium tracking-normal text-zinc-300 sm:text-5xl">2026</span>
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-zinc-300">
                        Symbiosis Institute of Technology, Nagpur
                        <br />
                        <span className="text-sm text-zinc-400">Transforming Ideas into Reality</span>
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link href="/register">
                            <Button variant="neon" size="lg">Register Now</Button>
                        </Link>
                        <Link href="/events">
                            <Button variant="outline" size="lg" className="text-white hover:text-[var(--neon-blue)] hover:border-[var(--neon-blue)]">
                                Explore Events
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom Gradient */}
            <div
                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[var(--neon-blue)] to-[var(--neon-purple)] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }}
                />
            </div>
        </div>
    );
}
