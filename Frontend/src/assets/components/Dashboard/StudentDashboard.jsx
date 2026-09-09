import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import {
    LayoutDashboard,
    UserRound,
    Target,
    BookOpen,
    BriefcaseBusiness,
    FolderKanban,
    Clock3,
    Bell,
    Settings,
    LogOut,
    Menu,
    X,
    ChevronRight,
    TrendingUp,
    Award,
    AlertCircle,
    CheckCircle2,
    Code2,
    Cloud,
    Brain,
    // Database,
    // Github,
    ExternalLink,
    Star,
    Building2,
    MapPin,
    CalendarDays,
    MessageSquare,
    ShieldCheck,
    Plus,
    ArrowUpRight,
    GraduationCap,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const skills = [
    {
        name: "React.js",
        level: 85,
        demand: 90,
    },
    {
        name: "JavaScript",
        level: 80,
        demand: 88,
    },
    {
        name: "Node.js",
        level: 72,
        demand: 84,
    },
    {
        name: "MongoDB",
        level: 68,
        demand: 75,
    },
    {
        name: "Git & GitHub",
        level: 78,
        demand: 82,
    },
];

const skillGaps = [
    {
        name: "AWS Cloud",
        priority: "High",
        progress: 30,
        icon: <Cloud size={20} />,
    },
    {
        name: "Python",
        priority: "High",
        progress: 42,
        icon: <Code2 size={20} />,
    },
    {
        name: "Machine Learning",
        priority: "Medium",
        progress: 25,
        icon: <Brain size={20} />,
    },
];

const learning = [
    {
        title: "AWS Cloud Practitioner",
        type: "Certification",
        provider: "AWS",
        duration: "6 Weeks",
        progress: 45,
        icon: <Cloud size={24} />,
    },
    {
        title: "Advanced React Development",
        type: "Course",
        provider: "Industry Academy",
        duration: "4 Weeks",
        progress: 70,
        icon: <Code2 size={24} />,
    },
    {
        title: "Machine Learning Fundamentals",
        type: "Course",
        provider: "AI Learning Hub",
        duration: "8 Weeks",
        progress: 20,
        icon: <Brain size={24} />,
    },
];

const opportunities = [
    {
        company: "TechNova Solutions",
        role: "Frontend Developer Intern",
        location: "Bangalore",
        type: "Internship",
        stipend: "₹25K / month",
        match: 94,
    },
    {
        company: "Innovate Labs",
        role: "Full Stack Developer Intern",
        location: "Remote",
        type: "Industry Project",
        stipend: "Certificate + PPO",
        match: 89,
    },
    {
        company: "DataSphere",
        role: "Software Engineering Intern",
        location: "Hyderabad",
        type: "Internship",
        stipend: "₹30K / month",
        match: 82,
    },
];

const portfolio = [
    {
        title: "EduConnect",
        description:
            "Academia-industry collaboration platform connecting students, institutions and companies.",
        tech: ["React", "Node.js", "MongoDB"],
        stars: 12,
    },
    {
        title: "Mini Hill Climber",
        description:
            "Browser-based game developed using HTML, CSS and GSAP animations.",
        tech: ["HTML", "CSS", "GSAP"],
        stars: 8,
    },
    {
        title: "NotesMaker",
        description:
            "Responsive task management application with local storage support.",
        tech: ["React", "Tailwind", "LocalStorage"],
        stars: 15,
    },
];

const applications = [
    {
        company: "TechNova Solutions",
        role: "Frontend Developer Intern",
        date: "Aug 28, 2026",
        status: "Interview",
    },
    {
        company: "Innovate Labs",
        role: "Full Stack Intern",
        date: "Aug 24, 2026",
        status: "Shortlisted",
    },
    {
        company: "DataSphere",
        role: "Software Engineer Intern",
        date: "Aug 20, 2026",
        status: "Applied",
    },
];

const navItems = [
    {
        id: "dashboard",
        title: "Dashboard",
        icon: <LayoutDashboard size={18} />,
    },
    {
        id: "profile",
        title: "My Profile",
        icon: <UserRound size={18} />,
    },
    {
        id: "skills",
        title: "Skill Profile",
        icon: <Target size={18} />,
    },
    {
        id: "learning",
        title: "Learning",
        icon: <BookOpen size={18} />,
    },
    {
        id: "opportunities",
        title: "Opportunities",
        icon: <BriefcaseBusiness size={18} />,
    },
    {
        id: "portfolio",
        title: "My Portfolio",
        icon: <FolderKanban size={18} />,
    },
    {
        id: "applications",
        title: "Applications",
        icon: <Clock3 size={18} />,
    },
    {
        id: "notifications",
        title: "Notifications",
        icon: <Bell size={18} />,
    },
    {
        id: "settings",
        title: "Settings",
        icon: <Settings size={18} />,
    },
];

export default function StudentDashboard() {
    const navigate = useNavigate();

    const dashboardRef = useRef(null);
    const sidebarRef = useRef(null);
    const headerRef = useRef(null);
    const heroRef = useRef(null);

    const cardsRef = useRef([]);
    const sectionsRef = useRef([]);
    const skillBarsRef = useRef([]);
    const countersRef = useRef([]);

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("dashboard");
    ///

    // const [, set] = useState(second)

    // -----------------------------------------
    // SMOOTH SCROLL
    // -----------------------------------------

    const scrollToSection = (id) => {
        const section = document.getElementById(id);

        if (!section) return;

        setMobileMenuOpen(false);

        gsap.to(window, {
            duration: 1,
            scrollTo: {
                y: section,
                offsetY: 90,
            },
            ease: "power3.inOut",
        });
    };

    // -----------------------------------------
    // PAGE LOAD ANIMATION
    // -----------------------------------------

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            tl.from(sidebarRef.current, {
                x: -280,
                duration: 0.8,
                ease: "power3.out",
            })
                .from(
                    headerRef.current,
                    {
                        y: -80,
                        opacity: 0,
                        duration: 0.6,
                        ease: "power3.out",
                    },
                    "-=0.5"
                )
                .from(
                    heroRef.current,
                    {
                        y: 60,
                        opacity: 0,
                        duration: 0.8,
                        ease: "power3.out",
                    },
                    "-=0.3"
                )
                .from(
                    cardsRef.current,
                    {
                        y: 50,
                        opacity: 0,
                        scale: 0.95,
                        duration: 0.6,
                        stagger: 0.1,
                        ease: "power3.out",
                    },
                    "-=0.4"
                );

            // Section animations
            sectionsRef.current.forEach((section) => {
                if (!section) return;

                gsap.from(section, {
                    scrollTrigger: {
                        trigger: section,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    },
                    y: 50,
                    opacity: 0,
                    duration: 0.7,
                    ease: "power3.out",
                });
            });

            // Skill bars
            skillBarsRef.current.forEach((bar) => {
                if (!bar) return;

                const width = bar.dataset.width;

                gsap.fromTo(
                    bar,
                    {
                        width: "0%",
                    },
                    {
                        width: `${width}%`,
                        duration: 1.2,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: bar,
                            start: "top 90%",
                        },
                    }
                );
            });

            // Counter animation
            countersRef.current.forEach((counter) => {
                if (!counter) return;

                const target = Number(counter.dataset.value);

                gsap.fromTo(
                    counter,
                    {
                        innerText: 0,
                    },
                    {
                        innerText: target,
                        duration: 1.5,
                        snap: {
                            innerText: 1,
                        },
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: counter,
                            start: "top 90%",
                        },
                    }
                );
            });
        }, dashboardRef);

        return () => ctx.revert();
    }, []);

    // -----------------------------------------
    // ACTIVE SIDEBAR ITEM WHILE SCROLLING
    // -----------------------------------------

    useEffect(() => {
        const triggers = [];

        navItems.forEach((item) => {
            const section = document.getElementById(item.id);

            if (!section) return;

            const trigger = ScrollTrigger.create({
                trigger: section,
                start: "top 35%",
                end: "bottom 35%",

                onEnter: () => {
                    setActiveSection(item.id);
                },

                onEnterBack: () => {
                    setActiveSection(item.id);
                },
            });

            triggers.push(trigger);
        });

        return () => {
            triggers.forEach((trigger) => trigger.kill());
        };
    }, []);

    // -----------------------------------------
    // MOBILE MENU
    // -----------------------------------------

    useEffect(() => {
        if (mobileMenuOpen) {
            gsap.fromTo(
                "#mobile-sidebar",
                {
                    x: "-100%",
                },
                {
                    x: 0,
                    duration: 0.4,
                    ease: "power3.out",
                }
            );
        }
    }, [mobileMenuOpen]);

    return (
        <div
            ref={dashboardRef}
            className="min-h-screen bg-[#070b14] text-white"
        >
            {/* =========================================
          DESKTOP SIDEBAR
      ========================================= */}

            <aside
                ref={sidebarRef}
                className="fixed left-0 top-0 z-40 hidden h-screen w-64 border-r border-white/10 bg-[#0b1020] lg:block"
            >
                <Sidebar
                    activeSection={activeSection}
                    scrollToSection={scrollToSection}
                    navigate={navigate}
                />
            </aside>

            {/* =========================================
          MOBILE SIDEBAR
      ========================================= */}

            {mobileMenuOpen && (
                <>
                    <div
                        className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden"
                        onClick={() => setMobileMenuOpen(false)}
                    />

                    <aside
                        id="mobile-sidebar"
                        className="fixed left-0 top-0 z-50 h-screen w-72 border-r border-white/10 bg-[#0b1020] lg:hidden"
                    >
                        <div className="flex items-center justify-between border-b border-white/10 p-5">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600" onClick={() => navigate('/')}>
                                    <GraduationCap size={22} />
                                </div>

                                <div>
                                    <h1 className="font-bold">EduConnect</h1>
                                    <p className="text-xs text-gray-500">Student Portal</p>
                                </div>
                            </div>

                            <button
                                onClick={() => setMobileMenuOpen(false)}
                                className="rounded-lg p-2 text-gray-400 hover:bg-white/10 hover:text-white"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <Sidebar
                            activeSection={activeSection}
                            scrollToSection={scrollToSection}
                            navigate={navigate}
                            mobile
                        />
                    </aside>
                </>
            )}

            {/* =========================================
          MAIN AREA
      ========================================= */}

            <main className="lg:ml-64">
                {/* =====================================
            HEADER
        ===================================== */}

                <header
                    ref={headerRef}
                    className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-white/10 bg-[#070b14]/85 px-4 backdrop-blur-xl sm:px-6 lg:px-8"
                >
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setMobileMenuOpen(true)}
                            className="rounded-xl border border-white/10 bg-white/5 p-2.5 text-gray-300 lg:hidden"
                        >
                            <Menu size={21} />
                        </button>

                        <div>
                            <p className="text-xs text-gray-500">Student Dashboard</p>

                            <h2 className="text-lg font-semibold sm:text-xl">
                                Welcome back, Satyam 👋
                            </h2>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => scrollToSection("notifications")}
                            className="relative rounded-xl border border-white/10 bg-white/5 p-2.5 text-gray-400 transition hover:bg-white/10 hover:text-white"
                        >
                            <Bell size={19} />

                            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-blue-500" />
                        </button>

                        <div className="hidden items-center gap-3 sm:flex">
                            <div className="text-right">
                                <p className="text-sm font-medium">Satyam Kumar</p>
                                <p className="text-xs text-gray-500">Student</p>
                            </div>

                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 font-bold">
                                SK
                            </div>
                        </div>
                    </div>
                </header>

                {/* =====================================
            CONTENT
        ===================================== */}

                <div className="px-4 py-6 sm:px-6 lg:px-8">
                    {/* =================================
              DASHBOARD / HERO
          ================================= */}

                    <section
                        id="dashboard"
                        ref={heroRef}
                        className="scroll-mt-24"
                    >
                        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-blue-600/20 via-[#111827] to-purple-600/10 p-6 sm:p-8">
                            {/* Decorative circles */}

                            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-600/10 blur-3xl" />

                            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-purple-600/10 blur-3xl" />

                            <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_280px] lg:items-center">
                                <div>
                                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1.5 text-xs text-blue-400">
                                        <TrendingUp size={14} />
                                        Career readiness improving
                                    </div>

                                    <h1 className="max-w-2xl text-3xl font-bold leading-tight sm:text-4xl">
                                        Build the skills industry{" "}
                                        <span className="text-blue-400">actually needs.</span>
                                    </h1>

                                    <p className="mt-4 max-w-2xl text-sm leading-6 text-gray-400 sm:text-base">
                                        Track your skills, identify career gaps, discover
                                        opportunities and build a stronger professional profile.
                                    </p>

                                    <div className="mt-6 flex flex-wrap gap-3">
                                        <button
                                            onClick={() => scrollToSection("skills")}
                                            className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold transition hover:bg-blue-500"
                                        >
                                            View Skill Profile
                                            <ArrowUpRight size={16} />
                                        </button>

                                        <button
                                            onClick={() => scrollToSection("opportunities")}
                                            className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-gray-300 transition hover:bg-white/10 hover:text-white"
                                        >
                                            Explore Opportunities
                                        </button>
                                    </div>
                                </div>

                                {/* Readiness Circle */}

                                <div className="mx-auto flex h-52 w-52 items-center justify-center rounded-full border-[12px] border-blue-500/10 bg-[#0b1020] lg:h-60 lg:w-60">
                                    <div className="text-center">
                                        <p className="text-5xl font-bold text-blue-400">
                                            82%
                                        </p>

                                        <p className="mt-1 text-sm text-gray-500">
                                            Skill Readiness
                                        </p>

                                        <div className="mt-3 flex items-center justify-center gap-1 text-xs text-green-400">
                                            <TrendingUp size={13} />
                                            +8% this month
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* =================================
              SUMMARY CARDS
          ================================= */}

                    <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                        <SummaryCard
                            cardRef={(el) => (cardsRef.current[0] = el)}
                            icon={<TrendingUp size={21} />}
                            title="Skill Readiness"
                            value="82%"
                            change="+8%"
                            description="from last month"
                            positive
                        />

                        <SummaryCard
                            cardRef={(el) => (cardsRef.current[1] = el)}
                            icon={<Award size={21} />}
                            title="Skills Acquired"
                            value="12"
                            change="+3"
                            description="this month"
                            positive
                        />

                        <SummaryCard
                            cardRef={(el) => (cardsRef.current[2] = el)}
                            icon={<AlertCircle size={21} />}
                            title="Skill Gaps"
                            value="5"
                            change="-2"
                            description="remaining gaps"
                            positive
                        />

                        <SummaryCard
                            cardRef={(el) => (cardsRef.current[3] = el)}
                            icon={<BriefcaseBusiness size={21} />}
                            title="Active Applications"
                            value="6"
                            change="+2"
                            description="applications"
                            positive
                        />
                    </div>

                    {/* =================================
              PROFILE
          ================================= */}

                    <section
                        id="profile"
                        ref={(el) => (sectionsRef.current[0] = el)}
                        className="mb-10 mt-12 scroll-mt-24"
                    >
                        <SectionHeading
                            icon={<UserRound size={21} />}
                            title="My Profile"
                            description="Your professional identity and academic information"
                        />

                        <div className="grid gap-5 lg:grid-cols-[1fr_320px]">
                            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                                <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                                    <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-2xl font-bold">
                                        SK
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-semibold">
                                            Satyam Kumar
                                        </h3>

                                        <p className="mt-1 text-sm text-gray-400">
                                            Electronics & Communication Engineering
                                        </p>

                                        <p className="mt-1 text-sm text-gray-500">
                                            NIT Agartala • 2nd Year
                                        </p>
                                    </div>

                                    <button className="sm:ml-auto rounded-xl border border-white/10 px-4 py-2 text-sm text-gray-300 transition hover:bg-white/10">
                                        Edit Profile
                                    </button>
                                </div>

                                <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                                    <ProfileItem title="Department" value="ECE" />
                                    <ProfileItem title="Year" value="2nd Year" />
                                    <ProfileItem title="CGPA" value="8.4" />
                                    <ProfileItem title="Location" value="India" />
                                </div>
                            </div>

                            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                                <div className="flex items-center gap-3">
                                    <ShieldCheck className="text-green-400" size={21} />

                                    <div>
                                        <h3 className="font-semibold">Profile Strength</h3>
                                        <p className="text-xs text-gray-500">
                                            Good progress
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
                                    <div
                                        className="h-full rounded-full bg-green-500"
                                        style={{ width: "78%" }}
                                    />
                                </div>

                                <p className="mt-3 text-sm text-gray-400">
                                    Your profile is <span className="text-white">78%</span>{" "}
                                    complete.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* =================================
              SKILLS
          ================================= */}

                    <section
                        id="skills"
                        ref={(el) => (sectionsRef.current[1] = el)}
                        className="mb-10 scroll-mt-24"
                    >
                        <SectionHeading
                            icon={<Target size={21} />}
                            title="My Skill Profile"
                            description="Compare your current skills with industry demand"
                        />

                        <div className="grid gap-6 xl:grid-cols-[1fr_380px]">
                            {/* Skills */}

                            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                                <div className="mb-6 flex items-center justify-between">
                                    <div>
                                        <h3 className="font-semibold">Current Skills</h3>
                                        <p className="mt-1 text-xs text-gray-500">
                                            Your proficiency compared with industry demand
                                        </p>
                                    </div>

                                    <button className="rounded-xl border border-white/10 p-2 text-gray-400 hover:bg-white/10 hover:text-white">
                                        <Plus size={18} />
                                    </button>
                                </div>

                                <div className="space-y-6">
                                    {skills.map((skill, index) => (
                                        <Skill
                                            key={skill.name}
                                            {...skill}
                                            index={index}
                                            skillBarsRef={skillBarsRef}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Skill Gaps */}

                            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                                <div className="mb-6">
                                    <h3 className="font-semibold">High-Priority Skill Gaps</h3>

                                    <p className="mt-1 text-xs text-gray-500">
                                        Skills that can improve your employability
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    {skillGaps.map((gap) => (
                                        <SkillGap key={gap.name} {...gap} />
                                    ))}
                                </div>

                                <button
                                    onClick={() => scrollToSection("learning")}
                                    className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600/10 py-3 text-sm font-medium text-blue-400 transition hover:bg-blue-600/20"
                                >
                                    View Recommended Learning
                                    <ChevronRight size={16} />
                                </button>
                            </div>
                        </div>
                    </section>

                    {/* =================================
              LEARNING
          ================================= */}

                    <section
                        id="learning"
                        ref={(el) => (sectionsRef.current[2] = el)}
                        className="mb-10 scroll-mt-24"
                    >
                        <SectionHeading
                            icon={<BookOpen size={21} />}
                            title="Recommended Learning"
                            description="Courses and certifications selected based on your skill gaps"
                            action="View all"
                        />

                        <div className="grid gap-5 lg:grid-cols-3">
                            {learning.map((item) => (
                                <LearningCard key={item.title} {...item} />
                            ))}
                        </div>
                    </section>

                    {/* =================================
              OPPORTUNITIES
          ================================= */}

                    <section
                        id="opportunities"
                        ref={(el) => (sectionsRef.current[3] = el)}
                        className="mb-10 scroll-mt-24"
                    >
                        <SectionHeading
                            icon={<BriefcaseBusiness size={21} />}
                            title="Recommended Opportunities"
                            description="Internships and industry projects matching your profile"
                            action="View all"
                        />

                        <div className="grid gap-5 lg:grid-cols-3">
                            {opportunities.map((item) => (
                                <OpportunityCard
                                    key={`${item.company}-${item.role}`}
                                    {...item}
                                />
                            ))}
                        </div>
                    </section>

                    {/* =================================
              PORTFOLIO
          ================================= */}

                    <section
                        id="portfolio"
                        ref={(el) => (sectionsRef.current[4] = el)}
                        className="mb-10 scroll-mt-24"
                    >
                        <SectionHeading
                            icon={<FolderKanban size={21} />}
                            title="My Portfolio"
                            description="Projects and achievements that showcase your capabilities"
                            action="Manage portfolio"
                        />

                        <div className="grid gap-5 lg:grid-cols-3">
                            {portfolio.map((item) => (
                                <PortfolioCard key={item.title} {...item} />
                            ))}
                        </div>

                        <div className="mt-5 grid gap-5 md:grid-cols-3">
                            <AchievementCard
                                icon={<Award />}
                                title="Certifications"
                                value="4"
                            />

                            <AchievementCard
                                icon={<ShieldCheck />}
                                title="Verified Skills"
                                value="8"
                            />

                            <AchievementCard
                                icon={<Star />}
                                title="Achievements"
                                value="11"
                            />
                        </div>
                    </section>

                    {/* =================================
              APPLICATIONS
          ================================= */}

                    <section
                        id="applications"
                        ref={(el) => (sectionsRef.current[5] = el)}
                        className="mb-10 scroll-mt-24"
                    >
                        <SectionHeading
                            icon={<Clock3 size={21} />}
                            title="Application Tracker"
                            description="Track your internship and job applications"
                        />

                        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
                            <div className="hidden grid-cols-[1.2fr_1.5fr_1fr_1fr] border-b border-white/10 px-6 py-4 text-xs uppercase tracking-wider text-gray-500 md:grid">
                                <span>Company</span>
                                <span>Position</span>
                                <span>Date</span>
                                <span>Status</span>
                            </div>

                            {applications.map((application) => (
                                <ApplicationRow
                                    key={`${application.company}-${application.role}`}
                                    {...application}
                                />
                            ))}
                        </div>

                        {/* Application pipeline */}

                        <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                            <h3 className="font-semibold">Application Pipeline</h3>

                            <div className="mt-7 flex flex-col gap-6 md:flex-row md:items-center">
                                <ApplicationStep
                                    number="01"
                                    title="Applied"
                                    value="6"
                                    active
                                />

                                <Connector />

                                <ApplicationStep
                                    number="02"
                                    title="Shortlisted"
                                    value="3"
                                    active
                                />

                                <Connector />

                                <ApplicationStep
                                    number="03"
                                    title="Interview"
                                    value="2"
                                    active
                                />

                                <Connector />

                                <ApplicationStep
                                    number="04"
                                    title="Selected"
                                    value="0"
                                />
                            </div>
                        </div>
                    </section>

                    {/* =================================
              NOTIFICATIONS
          ================================= */}

                    <section
                        id="notifications"
                        ref={(el) => (sectionsRef.current[6] = el)}
                        className="mb-10 scroll-mt-24"
                    >
                        <SectionHeading
                            icon={<Bell size={21} />}
                            title="Notifications"
                            description="Recent updates related to your profile and applications"
                        />

                        <div className="space-y-3">
                            <NotificationItem
                                icon={<CheckCircle2 />}
                                title="You have been shortlisted"
                                description="Innovate Labs shortlisted your application."
                                time="2 hours ago"
                            />

                            <NotificationItem
                                icon={<BookOpen />}
                                title="New learning recommendation"
                                description="AWS Cloud Practitioner has been recommended."
                                time="Yesterday"
                            />

                            <NotificationItem
                                icon={<MessageSquare />}
                                title="Industry feedback received"
                                description="TechNova Solutions added feedback to your profile."
                                time="2 days ago"
                            />
                        </div>
                    </section>

                    {/* =================================
              SETTINGS
          ================================= */}

                    <section
                        id="settings"
                        ref={(el) => (sectionsRef.current[7] = el)}
                        className="mb-10 scroll-mt-24"
                    >
                        <SectionHeading
                            icon={<Settings size={21} />}
                            title="Settings"
                            description="Manage your student account preferences"
                        />

                        <div className="rounded-2xl border border-white/10 bg-white/[0.03]">
                            <SettingItem
                                title="Profile visibility"
                                description="Allow companies to discover your profile"
                                enabled
                            />

                            <SettingItem
                                title="Opportunity notifications"
                                description="Receive alerts for relevant internships and jobs"
                                enabled
                            />

                            <SettingItem
                                title="Learning recommendations"
                                description="Receive personalized courses and certifications"
                                enabled
                            />

                            <SettingItem
                                title="Industry messages"
                                description="Allow verified companies to contact you"
                            />
                        </div>
                    </section>

                    {/* =================================
              INDUSTRY FEEDBACK
          ================================= */}

                    <section className="mb-10">
                        <SectionHeading
                            icon={<MessageSquare size={21} />}
                            title="Industry Feedback"
                            description="Feedback received from industry professionals"
                        />

                        <div className="grid gap-5 lg:grid-cols-2">
                            <FeedbackCard
                                company="TechNova Solutions"
                                feedback="Strong frontend fundamentals and good understanding of React. Improve cloud deployment knowledge."
                                liked={["React.js", "JavaScript", "UI Development"]}
                                improve={["AWS", "Deployment"]}
                            />

                            <FeedbackCard
                                company="Innovate Labs"
                                feedback="Good problem-solving approach and strong interest in full-stack development."
                                liked={["Node.js", "Git", "Problem Solving"]}
                                improve={["System Design"]}
                            />
                        </div>
                    </section>

                    {/* =================================
              FINAL CTA
          ================================= */}

                    <section className="mb-10 overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-r from-blue-600/20 to-purple-600/10 p-7 text-center sm:p-10">
                        <div className="mx-auto max-w-2xl">
                            <h2 className="text-2xl font-bold sm:text-3xl">
                                Ready to improve your career readiness?
                            </h2>

                            <p className="mt-3 text-sm leading-6 text-gray-400">
                                Focus on your highest-priority skill gaps and discover
                                opportunities that match your profile.
                            </p>

                            <div className="mt-6 flex flex-wrap justify-center gap-3">
                                <button
                                    onClick={() => scrollToSection("learning")}
                                    className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold transition hover:bg-blue-500"
                                >
                                    Start Learning
                                </button>

                                <button
                                    onClick={() => scrollToSection("opportunities")}
                                    className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-gray-300 transition hover:bg-white/10 hover:text-white"
                                >
                                    Explore Opportunities
                                </button>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}

/* =====================================================
   SIDEBAR
===================================================== */

function Sidebar({
    activeSection,
    scrollToSection,
    navigate,
    mobile = false,
}) {
    return (
        <div className="flex h-full flex-col">
            {!mobile && (
                <div className="border-b border-white/10 p-5">
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600">
                            <GraduationCap size={22} />
                        </div>

                        <div>
                            <h1 className="font-bold">EduConnect</h1>
                            <p className="text-xs text-gray-500">Student Portal</p>
                        </div>
                    </div>
                </div>
            )}

            <nav className="flex-1 overflow-y-auto p-4">
                <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-widest text-gray-600">
                    Main Menu
                </p>

                {navItems.map((item) => (
                    <NavItem
                        key={item.id}
                        icon={item.icon}
                        title={item.title}
                        active={activeSection === item.id}
                        onClick={() => scrollToSection(item.id)}
                    />
                ))}

                <div className="my-5 h-px bg-white/10" />

                <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-widest text-gray-600">
                    Account
                </p>

                <button
                    onClick={() => navigate("/")}
                    className="mb-1 flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm text-gray-400 transition hover:bg-white/5 hover:text-white"
                >
                    <LogOut size={18} />
                    Logout
                </button>
            </nav>

            {/* Sidebar Profile */}

            <div className="border-t border-white/10 p-4">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-xs font-bold">
                            SK
                        </div>

                        <div className="min-w-0">
                            <p className="truncate text-sm font-medium">
                                Satyam Kumar
                            </p>

                            <p className="truncate text-xs text-gray-500">
                                Student
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

/* =====================================================
   NAV ITEM
===================================================== */

function NavItem({ icon, title, active, onClick }) {
    return (
        <button
            onClick={onClick}
            className={`mb-1 flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm transition ${active
                ? "bg-blue-600/15 text-blue-400"
                : "text-gray-400 hover:bg-white/5 hover:text-white"
                }`}
        >
            <span
                className={`${active ? "text-blue-400" : "text-gray-500"
                    }`}
            >
                {icon}
            </span>

            <span>{title}</span>

            {active && (
                <span className="ml-auto h-1.5 w-1.5 rounded-full bg-blue-400" />
            )}
        </button>
    );
}

/* =====================================================
   SUMMARY CARD
===================================================== */

function SummaryCard({
    icon,
    title,
    value,
    change,
    description,
    positive,
    cardRef,
}) {
    return (
        <div
            ref={cardRef}
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-white/[0.05]"
        >
            <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                    {icon}
                </div>

                <span
                    className={`text-xs font-medium ${positive ? "text-green-400" : "text-red-400"
                        }`}
                >
                    {change}
                </span>
            </div>

            <p className="mt-5 text-sm text-gray-500">{title}</p>

            <div className="mt-1 flex items-end gap-2">
                <h3 className="text-3xl font-bold">{value}</h3>

                <span className="mb-1 text-xs text-gray-600">
                    {description}
                </span>
            </div>
        </div>
    );
}

/* =====================================================
   SECTION HEADING
===================================================== */

function SectionHeading({
    icon,
    title,
    description,
    action,
}) {
    return (
        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
                <div className="flex items-center gap-2">
                    <span className="text-blue-400">{icon}</span>

                    <h2 className="text-xl font-bold">{title}</h2>
                </div>

                <p className="mt-1 text-sm text-gray-500">
                    {description}
                </p>
            </div>

            {action && (
                <button className="flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300">
                    {action}
                    <ChevronRight size={16} />
                </button>
            )}
        </div>
    );
}

/* =====================================================
   SKILL
===================================================== */

function Skill({
    name,
    level,
    demand,
    index,
    skillBarsRef,
}) {
    return (
        <div>
            <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-medium">{name}</span>

                <div className="flex items-center gap-4 text-xs">
                    <span className="text-gray-500">
                        You: {level}%
                    </span>

                    <span className="text-blue-400">
                        Industry: {demand}%
                    </span>
                </div>
            </div>

            <div className="relative h-2 overflow-hidden rounded-full bg-white/10">
                {/* Industry Demand */}

                <div
                    className="absolute inset-y-0 left-0 rounded-full bg-blue-500/20"
                    style={{ width: `${demand}%` }}
                />

                {/* Current Skill */}

                <div
                    ref={(el) => (skillBarsRef.current[index] = el)}
                    data-width={level}
                    className="relative h-full rounded-full bg-blue-500"
                    style={{ width: "0%" }}
                />
            </div>
        </div>
    );
}

/* =====================================================
   SKILL GAP
===================================================== */

function SkillGap({
    name,
    priority,
    progress,
    icon,
}) {
    return (
        <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
            <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400">
                    {icon}
                </div>

                <div className="flex-1">
                    <div className="flex items-center justify-between gap-2">
                        <h4 className="text-sm font-medium">{name}</h4>

                        <span
                            className={`rounded-full px-2 py-1 text-[10px] ${priority === "High"
                                ? "bg-red-500/10 text-red-400"
                                : "bg-yellow-500/10 text-yellow-400"
                                }`}
                        >
                            {priority}
                        </span>
                    </div>

                    <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                        <div
                            className="h-full rounded-full bg-orange-400"
                            style={{ width: `${progress}%` }}
                        />
                    </div>

                    <p className="mt-1 text-[10px] text-gray-600">
                        Current proficiency {progress}%
                    </p>
                </div>
            </div>
        </div>
    );
}

/* =====================================================
   LEARNING CARD
===================================================== */

function LearningCard({
    title,
    type,
    provider,
    duration,
    progress,
    icon,
}) {
    return (
        <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:-translate-y-1 hover:border-blue-500/30">
            <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                    {icon}
                </div>

                <span className="rounded-full bg-purple-500/10 px-2.5 py-1 text-[10px] text-purple-400">
                    {type}
                </span>
            </div>

            <h3 className="mt-5 font-semibold">{title}</h3>

            <p className="mt-1 text-xs text-gray-500">{provider}</p>

            <div className="mt-5 flex items-center justify-between text-xs text-gray-500">
                <span>{duration}</span>
                <span>{progress}% complete</span>
            </div>

            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                <div
                    className="h-full rounded-full bg-blue-500"
                    style={{ width: `${progress}%` }}
                />
            </div>

            <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 py-2.5 text-sm text-gray-300 transition hover:bg-white/10 hover:text-white">
                Continue Learning
                <ChevronRight size={15} />
            </button>
        </div>
    );
}

/* =====================================================
   OPPORTUNITY CARD
===================================================== */

function OpportunityCard({
    company,
    role,
    location,
    type,
    stipend,
    match,
}) {
    return (
        <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:-translate-y-1 hover:border-blue-500/30">
            <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-gray-300">
                    <Building2 size={21} />
                </div>

                <div className="rounded-full bg-green-500/10 px-2.5 py-1 text-xs font-medium text-green-400">
                    {match}% match
                </div>
            </div>

            <p className="mt-5 text-xs text-blue-400">{company}</p>

            <h3 className="mt-1 font-semibold">{role}</h3>

            <div className="mt-4 space-y-2 text-xs text-gray-500">
                <div className="flex items-center gap-2">
                    <MapPin size={14} />
                    {location}
                </div>

                <div className="flex items-center gap-2">
                    <BriefcaseBusiness size={14} />
                    {type}
                </div>

                <div className="flex items-center gap-2">
                    <TrendingUp size={14} />
                    {stipend}
                </div>
            </div>

            <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-2.5 text-sm font-medium transition hover:bg-blue-500">
                View Opportunity
                <ExternalLink size={15} />
            </button>
        </div>
    );
}

/* =====================================================
   PORTFOLIO CARD
===================================================== */

function PortfolioCard({
    title,
    description,
    tech,
    stars,
}) {
    return (
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:-translate-y-1 hover:border-blue-500/30">
            <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                    <FolderKanban size={21} />
                </div>

                <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Star size={14} />
                    {stars}
                </div>
            </div>

            <h3 className="mt-5 font-semibold">{title}</h3>

            <p className="mt-2 text-sm leading-6 text-gray-500">
                {description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
                {tech.map((item) => (
                    <span
                        key={item}
                        className="rounded-lg bg-white/5 px-2.5 py-1 text-[10px] text-gray-400"
                    >
                        {item}
                    </span>
                ))}
            </div>

            <button className="mt-5 flex items-center gap-1 text-sm text-blue-400">
                View Project
                <ArrowUpRight size={15} />
            </button>
        </div>
    );
}

/* =====================================================
   ACHIEVEMENT CARD
===================================================== */

function AchievementCard({
    icon,
    title,
    value,
}) {
    return (
        <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-500/10 text-yellow-400">
                {icon}
            </div>

            <div>
                <p className="text-2xl font-bold">{value}</p>
                <p className="text-xs text-gray-500">{title}</p>
            </div>
        </div>
    );
}

/* =====================================================
   APPLICATION ROW
===================================================== */

function ApplicationRow({
    company,
    role,
    date,
    status,
}) {
    const statusStyles = {
        Applied: "bg-blue-500/10 text-blue-400",
        Shortlisted: "bg-purple-500/10 text-purple-400",
        Interview: "bg-yellow-500/10 text-yellow-400",
        Selected: "bg-green-500/10 text-green-400",
        Rejected: "bg-red-500/10 text-red-400",
    };

    return (
        <div className="grid gap-3 border-b border-white/10 px-6 py-5 last:border-0 md:grid-cols-[1.2fr_1.5fr_1fr_1fr] md:items-center">
            <div>
                <p className="text-sm font-medium">{company}</p>

                <p className="mt-1 text-xs text-gray-600 md:hidden">
                    {role}
                </p>
            </div>

            <p className="hidden text-sm text-gray-400 md:block">
                {role}
            </p>

            <div className="flex items-center gap-2 text-xs text-gray-500">
                <CalendarDays size={14} />
                {date}
            </div>

            <div>
                <span
                    className={`rounded-full px-3 py-1.5 text-[10px] font-medium ${statusStyles[status]
                        }`}
                >
                    {status}
                </span>
            </div>
        </div>
    );
}

/* =====================================================
   APPLICATION STEP
===================================================== */

function ApplicationStep({
    number,
    title,
    value,
    active = false,
}) {
    return (
        <div className="flex flex-1 items-center gap-3">
            <div
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border ${active
                    ? "border-blue-500 bg-blue-500/10 text-blue-400"
                    : "border-white/10 text-gray-600"
                    }`}
            >
                <span className="text-xs">{number}</span>
            </div>

            <div>
                <p
                    className={`text-sm font-medium ${active ? "text-white" : "text-gray-600"
                        }`}
                >
                    {title}
                </p>

                <p className="mt-1 text-xs text-gray-500">
                    {value} applications
                </p>
            </div>
        </div>
    );
}

/* =====================================================
   CONNECTOR
===================================================== */

function Connector() {
    return (
        <div className="hidden h-px flex-1 bg-white/10 md:block" />
    );
}

/* =====================================================
   FEEDBACK CARD
===================================================== */

function FeedbackCard({
    company,
    feedback,
    liked,
    improve,
}) {
    return (
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                    <MessageSquare size={19} />
                </div>

                <div>
                    <h3 className="text-sm font-semibold">{company}</h3>

                    <p className="text-xs text-gray-600">
                        Industry feedback
                    </p>
                </div>
            </div>

            <p className="mt-5 text-sm leading-6 text-gray-400">
                "{feedback}"
            </p>

            <div className="mt-5">
                <p className="mb-2 text-xs text-gray-600">
                    Skills employers liked
                </p>

                <div className="flex flex-wrap gap-2">
                    {liked.map((skill) => (
                        <span
                            key={skill}
                            className="rounded-lg bg-green-500/10 px-2.5 py-1 text-[10px] text-green-400"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

            <div className="mt-4">
                <p className="mb-2 text-xs text-gray-600">
                    Skills to improve
                </p>

                <div className="flex flex-wrap gap-2">
                    {improve.map((skill) => (
                        <span
                            key={skill}
                            className="rounded-lg bg-orange-500/10 px-2.5 py-1 text-[10px] text-orange-400"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

/* =====================================================
   NOTIFICATION ITEM
===================================================== */

function NotificationItem({
    icon,
    title,
    description,
    time,
}) {
    return (
        <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:bg-white/[0.05]">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                {icon}
            </div>

            <div className="flex-1">
                <h3 className="text-sm font-medium">{title}</h3>

                <p className="mt-1 text-sm text-gray-500">
                    {description}
                </p>

                <p className="mt-2 text-[10px] text-gray-600">
                    {time}
                </p>
            </div>

            <span className="mt-2 h-2 w-2 rounded-full bg-blue-500" />
        </div>
    );
}

/* =====================================================
   SETTING ITEM
===================================================== */

function SettingItem({
    title,
    description,
    enabled = false,
}) {
    const [active, setActive] = useState(enabled);

    return (
        <div className="flex items-center justify-between gap-5 border-b border-white/10 p-5 last:border-0">
            <div>
                <h3 className="text-sm font-medium">{title}</h3>

                <p className="mt-1 text-xs text-gray-500">
                    {description}
                </p>
            </div>

            <button
                onClick={() => setActive(!active)}
                className={`relative h-6 w-11 shrink-0 rounded-full transition ${active ? "bg-blue-600" : "bg-white/10"
                    }`}
            >
                <span
                    className={`absolute top-1 h-4 w-4 rounded-full bg-white transition ${active ? "left-6" : "left-1"
                        }`}
                />
            </button>
        </div>
    );
}

/* =====================================================
   PROFILE ITEM
===================================================== */

function ProfileItem({ title, value }) {
    return (
        <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
            <p className="text-xs text-gray-600">{title}</p>

            <p className="mt-1 text-sm font-medium text-gray-300">
                {value}
            </p>
        </div>
    );
}