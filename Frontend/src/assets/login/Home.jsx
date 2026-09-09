import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
    ArrowRight,
    ArrowUpRight,
    BrainCircuit,
    Building2,
    GraduationCap,
    BriefcaseBusiness,
    ChartNoAxesCombined,
    CheckCircle2,
    ChevronDown,
    FileCheck2,
    Handshake,
    Lightbulb,
    Menu,
    Search,
    ShieldCheck,
    Sparkles,
    Target,
    Users,
    X,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

function Home() {
    const navigate = useNavigate();

    const heroRef = useRef(null);
    const navbarRef = useRef(null);
    const heroTitleRef = useRef(null);
    const heroTextRef = useRef(null);
    const heroButtonsRef = useRef(null);
    const heroVisualRef = useRef(null);
    const blob1Ref = useRef(null);
    const blob2Ref = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            /* ================= HERO ANIMATION ================= */

            const heroTimeline = gsap.timeline({
                defaults: {
                    ease: "power3.out",
                },
            });

            heroTimeline
                .from(navbarRef.current, {
                    y: -40,
                    opacity: 0,
                    duration: 0.8,
                })
                .from(
                    heroTitleRef.current.children,
                    {
                        y: 70,
                        opacity: 0,
                        stagger: 0.12,
                        duration: 0.9,
                    },
                    "-=0.3"
                )
                .from(
                    heroTextRef.current,
                    {
                        y: 30,
                        opacity: 0,
                        duration: 0.7,
                    },
                    "-=0.4"
                )
                .from(
                    heroButtonsRef.current.children,
                    {
                        y: 25,
                        opacity: 0,
                        stagger: 0.15,
                        duration: 0.6,
                    },
                    "-=0.3"
                )
                .from(
                    heroVisualRef.current,
                    {
                        x: 100,
                        opacity: 0,
                        scale: 0.9,
                        duration: 1,
                    },
                    "-=0.7"
                );

            /* ================= FLOATING BLOBS ================= */

            gsap.to(blob1Ref.current, {
                x: 80,
                y: 50,
                duration: 5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });

            gsap.to(blob2Ref.current, {
                x: -60,
                y: -40,
                duration: 6,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });

            /* ================= SCROLL ANIMATIONS ================= */

            gsap.utils.toArray(".reveal").forEach((element) => {
                gsap.from(element, {
                    y: 70,
                    opacity: 0,
                    duration: 0.9,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: element,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    },
                });
            });

            gsap.utils.toArray(".feature-card").forEach((element, index) => {
                gsap.from(element, {
                    y: 50,
                    opacity: 0,
                    duration: 0.7,
                    delay: index * 0.08,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: element,
                        start: "top 88%",
                    },
                });
            });

            gsap.from(".step-card", {
                y: 60,
                opacity: 0,
                stagger: 0.2,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".steps-container",
                    start: "top 80%",
                },
            });

            gsap.from(".stat-item", {
                scale: 0.7,
                opacity: 0,
                stagger: 0.15,
                duration: 0.7,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: ".stats-section",
                    start: "top 80%",
                },
            });
        }, heroRef);

        return () => ctx.revert();
    }, []);

    const scrollToFeatures = () => {
        document
            .getElementById("features")
            ?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <main
            ref={heroRef}
            className="min-h-screen overflow-hidden bg-[#050b16] text-white"
        >
            {/* =====================================================
          NAVBAR
      ====================================================== */}

            <Navbar
                ref={navbarRef}
                navigate={navigate}
            />

            {/* =====================================================
          HERO SECTION
      ====================================================== */}

            <section className="relative min-h-[90vh] flex items-center px-5 sm:px-8 lg:px-16 xl:px-24 pt-20">

                {/* Background */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">

                    <div
                        ref={blob1Ref}
                        className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-blue-600/20 blur-[120px]"
                    />

                    <div
                        ref={blob2Ref}
                        className="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[120px]"
                    />

                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.08),transparent_45%)]" />
                </div>

                <div className="relative max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-14 items-center">

                    {/* Hero Text */}
                    <div>

                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-sm mb-7">
                            <Sparkles size={15} />
                            Academia × Industry Collaboration
                        </div>

                        <div
                            ref={heroTitleRef}
                            className="space-y-2"
                        >
                            <h1 className="text-5xl sm:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.05]">
                                Bridge the
                            </h1>

                            <h1 className="text-5xl sm:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.05]">
                                <span className="text-blue-400">
                                    Skill Gap.
                                </span>
                            </h1>

                            <h1 className="text-5xl sm:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.05]">
                                Build the Future.
                            </h1>
                        </div>

                        <p
                            ref={heroTextRef}
                            className="mt-7 max-w-xl text-gray-400 text-lg leading-8"
                        >
                            EduConnect is a centralized platform connecting{" "}
                            <span className="text-white font-medium">
                                students, academicians, institutions and industries
                            </span>{" "}
                            to build skills, discover opportunities and create meaningful
                            collaborations.
                        </p>

                        {/* Buttons */}
                        <div
                            ref={heroButtonsRef}
                            className="flex flex-col sm:flex-row gap-4 mt-9"
                        >

                            <button
                                onClick={() => navigate("/signup")}
                                className="group flex items-center justify-center gap-3 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 transition-all duration-300 font-semibold shadow-xl shadow-blue-600/20"
                            >
                                Get Started

                                <ArrowRight
                                    size={18}
                                    className="group-hover:translate-x-1 transition-transform"
                                />
                            </button>

                            <button
                                onClick={scrollToFeatures}
                                className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all"
                            >
                                Explore Platform

                                <ChevronDown size={18} />
                            </button>

                        </div>

                        {/* Trust */}
                        <div className="flex flex-wrap gap-6 mt-10 text-sm text-gray-500">

                            <div className="flex items-center gap-2">
                                <CheckCircle2 size={16} className="text-blue-400" />
                                Skill-based matching
                            </div>

                            <div className="flex items-center gap-2">
                                <CheckCircle2 size={16} className="text-blue-400" />
                                Verified profiles
                            </div>

                            <div className="flex items-center gap-2">
                                <CheckCircle2 size={16} className="text-blue-400" />
                                Secure platform
                            </div>

                        </div>

                    </div>


                    {/* Hero Visual */}
                    <div
                        ref={heroVisualRef}
                        className="relative hidden lg:block"
                    >

                        <HeroDashboard />

                    </div>

                </div>

            </section>


            {/* =====================================================
          PROBLEM SECTION
      ====================================================== */}

            <section className="px-5 sm:px-8 lg:px-16 py-28">

                <div className="max-w-7xl mx-auto">

                    <div className="reveal max-w-3xl mb-16">

                        <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">
                            The Problem
                        </span>

                        <h2 className="mt-4 text-4xl sm:text-5xl font-bold leading-tight">
                            Education and industry are{" "}
                            <span className="text-blue-400">
                                speaking different languages.
                            </span>
                        </h2>

                        <p className="mt-6 text-gray-400 text-lg leading-8">
                            Students need industry-relevant skills. Industries need
                            skilled talent. Academicians need practical exposure.
                            Institutions need visibility into outcomes.
                        </p>

                    </div>


                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">

                        <ProblemCard
                            icon={<GraduationCap />}
                            title="Students"
                            text="Struggle to identify the skills required for their desired careers."
                        />

                        <ProblemCard
                            icon={<Building2 />}
                            title="Industries"
                            text="Find it difficult to discover candidates with the right skill sets."
                        />

                        <ProblemCard
                            icon={<BriefcaseBusiness />}
                            title="Academicians"
                            text="Have limited visibility into current industry practices and opportunities."
                        />

                        <ProblemCard
                            icon={<ChartNoAxesCombined />}
                            title="Institutions"
                            text="Need better insights into skill development, internships and placements."
                        />

                    </div>

                </div>

            </section>


            {/* =====================================================
          SOLUTION
      ====================================================== */}

            <section
                id="features"
                className="px-5 sm:px-8 lg:px-16 py-28 bg-white/[0.02]"
            >

                <div className="max-w-7xl mx-auto">

                    <div className="reveal text-center max-w-3xl mx-auto">

                        <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">
                            One Platform
                        </span>

                        <h2 className="mt-4 text-4xl sm:text-5xl font-bold">
                            Everything you need to{" "}
                            <span className="text-blue-400">
                                connect, learn and grow.
                            </span>
                        </h2>

                        <p className="mt-6 text-gray-400 text-lg">
                            A unified ecosystem for skill development, internships,
                            placements and academia-industry collaboration.
                        </p>

                    </div>


                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-16">

                        <FeatureCard
                            icon={<BrainCircuit />}
                            title="Skill Assessment"
                            text="Evaluate technical and soft skills through industry-relevant assessments."
                        />

                        <FeatureCard
                            icon={<Target />}
                            title="Intelligent Skill Mapping"
                            text="Identify skill gaps and receive recommendations aligned with career goals."
                        />

                        <FeatureCard
                            icon={<Search />}
                            title="Opportunity Matching"
                            text="Discover internships, projects and jobs based on your skill profile."
                        />

                        <FeatureCard
                            icon={<Lightbulb />}
                            title="Industry Learning"
                            text="Access certifications, workshops, training programs and mentorship."
                        />

                        <FeatureCard
                            icon={<Handshake />}
                            title="Collaboration"
                            text="Connect through mentorships, guest lectures, live projects and research."
                        />

                        <FeatureCard
                            icon={<FileCheck2 />}
                            title="Digital Portfolio"
                            text="Showcase verified skills, certificates, projects, internships and achievements."
                        />

                    </div>

                </div>

            </section>


            {/* =====================================================
          HOW IT WORKS
      ====================================================== */}

            <section className="px-5 sm:px-8 lg:px-16 py-28">

                <div className="max-w-7xl mx-auto">

                    <div className="reveal text-center">

                        <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">
                            How It Works
                        </span>

                        <h2 className="mt-4 text-4xl sm:text-5xl font-bold">
                            From skills to{" "}
                            <span className="text-blue-400">
                                opportunities.
                            </span>
                        </h2>

                    </div>


                    <div className="steps-container grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">

                        <StepCard
                            number="01"
                            icon={<BrainCircuit />}
                            title="Assess"
                            text="Students evaluate their technical and soft skills."
                        />

                        <StepCard
                            number="02"
                            icon={<Target />}
                            title="Map"
                            text="The system identifies skill gaps and career opportunities."
                        />

                        <StepCard
                            number="03"
                            icon={<Search />}
                            title="Match"
                            text="Students receive relevant internships, jobs and learning programs."
                        />

                        <StepCard
                            number="04"
                            icon={<BriefcaseBusiness />}
                            title="Grow"
                            text="Build experience, strengthen skills and become industry-ready."
                        />

                    </div>

                </div>

            </section>


            {/* =====================================================
          COLLABORATION SECTION
      ====================================================== */}

            <section className="px-5 sm:px-8 lg:px-16 py-28">

                <div className="max-w-7xl mx-auto">

                    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-blue-600/10 to-cyan-500/5 p-8 sm:p-12 lg:p-16">

                        <div className="absolute -right-32 -top-32 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl" />

                        <div className="relative grid lg:grid-cols-2 gap-14 items-center">

                            <div className="reveal">

                                <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">
                                    Collaboration Ecosystem
                                </span>

                                <h2 className="mt-4 text-4xl sm:text-5xl font-bold leading-tight">
                                    Connect the people who{" "}
                                    <span className="text-blue-400">
                                        create the future.
                                    </span>
                                </h2>

                                <p className="mt-6 text-gray-400 text-lg leading-8">
                                    Bring students, academicians, institutions and industries
                                    together in one intelligent ecosystem.
                                </p>

                                <button
                                    onClick={() => navigate("/signup")}
                                    className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 transition font-semibold"
                                >
                                    Join EduConnect
                                    <ArrowRight size={18} />
                                </button>

                            </div>


                            <div className="grid grid-cols-2 gap-4">

                                <RoleBox
                                    icon={<GraduationCap />}
                                    title="Students"
                                    text="Learn & grow"
                                />

                                <RoleBox
                                    icon={<BriefcaseBusiness />}
                                    title="Industries"
                                    text="Hire & collaborate"
                                />

                                <RoleBox
                                    icon={<Users />}
                                    title="Academicians"
                                    text="Teach & innovate"
                                />

                                <RoleBox
                                    icon={<Building2 />}
                                    title="Institutions"
                                    text="Monitor & connect"
                                />

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
          STATS
      ====================================================== */}

            <section className="stats-section px-5 sm:px-8 lg:px-16 py-20 border-y border-white/10 bg-white/[0.02]">

                <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-10">

                    <Stat number="4+" text="User Roles" />
                    <Stat number="360°" text="Skill Development" />
                    <Stat number="1" text="Unified Platform" />
                    <Stat number="∞" text="Opportunities" />

                </div>

            </section>


            {/* =====================================================
          CTA
      ====================================================== */}

            <section className="px-5 sm:px-8 lg:px-16 py-32">

                <div className="max-w-4xl mx-auto text-center reveal">

                    <div className="mx-auto w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-400/20 flex items-center justify-center mb-7">
                        <Sparkles className="text-blue-400" size={28} />
                    </div>

                    <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
                        Ready to bridge the gap?
                    </h2>

                    <p className="mt-6 text-gray-400 text-lg">
                        Join EduConnect and become part of a smarter
                        academia-industry ecosystem.
                    </p>

                    <button
                        onClick={() => navigate("/Signup")}
                        className="group mt-9 inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 transition-all font-semibold shadow-xl shadow-blue-600/20"
                    >
                        Get Started

                        <ArrowRight
                            size={19}
                            className="group-hover:translate-x-1 transition-transform"
                        />

                    </button>

                </div>

            </section>


            {/* =====================================================
          FOOTER
      ====================================================== */}

            <footer className="border-t border-white/10 px-5 sm:px-8 lg:px-16 py-8">

                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between gap-5 items-center">

                    <div className="flex items-center gap-3">

                        <span className="text-2xl">
                            📖
                        </span>

                        <div>
                            <p className="font-bold">
                                EduConnect
                            </p>

                            <p className="text-xs text-gray-500">
                                Collaborate. Innovate. Elevate.
                            </p>
                        </div>

                    </div>

                    <p className="text-sm text-gray-500">
                        Academia × Industry Collaboration Portal
                    </p>

                </div>

            </footer>

        </main>
    );
}


/* =========================================================
   NAVBAR
========================================================= */

function Navbar({ navigate, ref }) {
    return (
        <nav
            ref={ref}
            className="absolute top-0 left-0 right-0 z-50 px-5 sm:px-8 lg:px-16 xl:px-24 py-5"
        >

            <div className="max-w-7xl mx-auto flex items-center justify-between">

                {/* Logo */}
                <div className="flex items-center gap-3">

                    <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-400/20 flex items-center justify-center">
                        📖
                    </div>

                    <div>
                        <h2 className="font-bold text-lg">
                            EduConnect
                        </h2>

                        <p className="hidden sm:block text-[10px] text-gray-500">
                            Collaborate. Innovate. Elevate.
                        </p>
                    </div>

                </div>


                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">

                    <a href="#features" className="hover:text-white transition">
                        Features
                    </a>

                    <a href="#features" className="hover:text-white transition">
                        Platform
                    </a>

                    <a href="#how-it-works" className="hover:text-white transition">
                        How it works
                    </a>

                </div>


                {/* Actions */}
                <div className="flex items-center gap-3">

                    <button
                        onClick={() => navigate("/login")}
                        className="px-4 py-2 text-sm text-gray-300 hover:text-white transition"
                    >
                        Login
                    </button>

                    <button
                        onClick={() => navigate("/signup")}
                        className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 transition text-sm font-semibold"
                    >
                        Get Started
                        <ArrowUpRight size={15} />
                    </button>

                </div>

            </div>

        </nav>
    );
}


/* =========================================================
   HERO DASHBOARD
========================================================= */

function HeroDashboard() {
    return (
        <div className="relative">

            {/* Glow */}
            <div className="absolute inset-10 bg-blue-500/20 blur-[100px]" />

            {/* Main Card */}
            <div className="relative rounded-3xl border border-white/10 bg-white/[0.05] backdrop-blur-xl p-5 shadow-2xl">

                {/* Header */}
                <div className="flex items-center justify-between mb-5">

                    <div>
                        <p className="text-xs text-gray-500">
                            Skill Profile
                        </p>

                        <h3 className="text-lg font-semibold">
                            Student Dashboard
                        </h3>
                    </div>

                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                        <BrainCircuit className="text-blue-400" size={20} />
                    </div>

                </div>


                {/* Skill Score */}
                <div className="rounded-2xl bg-black/20 border border-white/10 p-5">

                    <div className="flex justify-between items-center">

                        <div>
                            <p className="text-sm text-gray-500">
                                Industry Readiness
                            </p>

                            <p className="text-3xl font-bold mt-1">
                                82%
                            </p>
                        </div>

                        <div className="w-16 h-16 rounded-full border-4 border-blue-500/30 flex items-center justify-center">
                            <span className="text-sm font-bold">
                                82
                            </span>
                        </div>

                    </div>

                </div>


                {/* Skills */}
                <div className="mt-4 space-y-3">

                    <SkillBar
                        title="React.js"
                        percentage="90%"
                    />

                    <SkillBar
                        title="JavaScript"
                        percentage="82%"
                    />

                    <SkillBar
                        title="Communication"
                        percentage="74%"
                    />

                    <SkillBar
                        title="Problem Solving"
                        percentage="88%"
                    />

                </div>


                {/* Recommendation */}
                <div className="mt-5 flex items-center gap-3 rounded-xl bg-blue-500/10 border border-blue-400/10 p-4">

                    <Target className="text-blue-400 shrink-0" size={20} />

                    <div>
                        <p className="text-xs text-blue-300">
                            Recommended Opportunity
                        </p>

                        <p className="text-sm font-medium mt-1">
                            Frontend Developer Internship
                        </p>
                    </div>

                    <ArrowRight
                        size={17}
                        className="ml-auto text-gray-500"
                    />

                </div>

            </div>


            {/* Floating Card */}
            <div className="absolute -bottom-8 -left-10 hidden xl:flex items-center gap-3 rounded-2xl border border-white/10 bg-[#0b1526]/90 backdrop-blur-xl p-4 shadow-xl">

                <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
                    <CheckCircle2
                        size={20}
                        className="text-green-400"
                    />
                </div>

                <div>
                    <p className="text-xs text-gray-500">
                        Skill Verified
                    </p>

                    <p className="text-sm font-semibold">
                        Profile Complete
                    </p>
                </div>

            </div>

        </div>
    );
}


/* =========================================================
   SKILL BAR
========================================================= */

function SkillBar({ title, percentage }) {
    return (
        <div>

            <div className="flex justify-between text-xs mb-1.5">

                <span className="text-gray-400">
                    {title}
                </span>

                <span className="text-gray-500">
                    {percentage}
                </span>

            </div>

            <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">

                <div
                    className="h-full rounded-full bg-blue-500"
                    style={{ width: percentage }}
                />

            </div>

        </div>
    );
}


/* =========================================================
   PROBLEM CARD
========================================================= */

function ProblemCard({ icon, title, text }) {
    return (
        <div className="reveal rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.06] transition-all duration-300">

            <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
                {icon}
            </div>

            <h3 className="text-xl font-semibold mt-5">
                {title}
            </h3>

            <p className="mt-3 text-gray-500 leading-7 text-sm">
                {text}
            </p>

        </div>
    );
}


/* =========================================================
   FEATURE CARD
========================================================= */

function FeatureCard({ icon, title, text }) {
    return (
        <div className="feature-card group rounded-2xl border border-white/10 bg-[#091321] p-7 hover:border-blue-500/30 hover:-translate-y-1 transition-all duration-300">

            <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center group-hover:bg-blue-500/20 transition">
                {icon}
            </div>

            <h3 className="mt-6 text-xl font-semibold">
                {title}
            </h3>

            <p className="mt-3 text-gray-500 leading-7">
                {text}
            </p>

        </div>
    );
}


/* =========================================================
   STEP CARD
========================================================= */

function StepCard({ number, icon, title, text }) {
    return (
        <div className="step-card relative rounded-2xl border border-white/10 bg-white/[0.03] p-7">

            <div className="flex justify-between items-start">

                <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
                    {icon}
                </div>

                <span className="text-4xl font-bold text-white/5">
                    {number}
                </span>

            </div>

            <h3 className="mt-7 text-xl font-semibold">
                {title}
            </h3>

            <p className="mt-3 text-gray-500 leading-7">
                {text}
            </p>

        </div>
    );
}


/* =========================================================
   ROLE BOX
========================================================= */

function RoleBox({ icon, title, text }) {
    return (
        <div className="rounded-2xl border border-white/10 bg-black/20 p-6 hover:bg-white/[0.05] transition">

            <div className="w-11 h-11 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
                {icon}
            </div>

            <h3 className="mt-5 font-semibold">
                {title}
            </h3>

            <p className="text-sm text-gray-500 mt-1">
                {text}
            </p>

        </div>
    );
}


/* =========================================================
   STAT
========================================================= */

function Stat({ number, text }) {
    return (
        <div className="stat-item text-center">

            <p className="text-4xl sm:text-5xl font-bold text-blue-400">
                {number}
            </p>

            <p className="mt-2 text-sm text-gray-500">
                {text}
            </p>

        </div>
    );
}

export default Home;