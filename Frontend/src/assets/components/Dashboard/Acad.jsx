import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import {
    LayoutDashboard,
    Users,
    BarChart3,
    Lightbulb,
    Building2,
    FolderKanban,
    GraduationCap,
    Bell,
    Settings,
    LogOut,
    Menu,
    X,
    TrendingUp,
    TrendingDown,
    AlertTriangle,
    CheckCircle2,
    ChevronRight,
    ChevronDown,
    BookOpen,
    Award,
    BriefcaseBusiness,
    Code2,
    Cloud,
    Brain,
    Database,
    ShieldCheck,
    MapPin,
    CalendarDays,
    ExternalLink,
    UserRound,
    MessageSquare,
    Plus,
    ArrowUpRight,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

/* =====================================================
   DATA
===================================================== */

const navItems = [
    {
        id: "dashboard",
        title: "Dashboard",
        icon: <LayoutDashboard size={18} />,
    },
    {
        id: "analytics",
        title: "Student Analytics",
        icon: <BarChart3 size={18} />,
    },
    {
        id: "mentoring",
        title: "Mentoring",
        icon: <Users size={18} />,
    },
    {
        id: "industry",
        title: "Industry Demand",
        icon: <Building2 size={18} />,
    },
    {
        id: "projects",
        title: "Projects & Research",
        icon: <FolderKanban size={18} />,
    },
    {
        id: "learning",
        title: "Learning Programs",
        icon: <GraduationCap size={18} />,
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

const students = [
    {
        name: "Rahul Sharma",
        department: "CSE",
        readiness: 48,
        gap: "Cloud Computing",
        priority: "High",
    },
    {
        name: "Priya Singh",
        department: "ECE",
        readiness: 56,
        gap: "Machine Learning",
        priority: "High",
    },
    {
        name: "Arjun Das",
        department: "ECE",
        readiness: 64,
        gap: "Python",
        priority: "Medium",
    },
    {
        name: "Ananya Roy",
        department: "CSE",
        readiness: 76,
        gap: "System Design",
        priority: "Medium",
    },
];

const weakSkills = [
    {
        name: "AWS / Cloud",
        percentage: 32,
        icon: <Cloud size={18} />,
    },
    {
        name: "Machine Learning",
        percentage: 38,
        icon: <Brain size={18} />,
    },
    {
        name: "System Design",
        percentage: 44,
        icon: <Database size={18} />,
    },
    {
        name: "DevOps",
        percentage: 47,
        icon: <Code2 size={18} />,
    },
];

const strongSkills = [
    {
        name: "JavaScript",
        percentage: 82,
    },
    {
        name: "React.js",
        percentage: 79,
    },
    {
        name: "C / C++",
        percentage: 76,
    },
    {
        name: "Git & GitHub",
        percentage: 73,
    },
];

const industrySkills = [
    {
        name: "Artificial Intelligence",
        demand: 94,
        growth: "+18%",
    },
    {
        name: "Cloud Computing",
        demand: 91,
        growth: "+16%",
    },
    {
        name: "Data Science",
        demand: 87,
        growth: "+14%",
    },
    {
        name: "Cybersecurity",
        demand: 81,
        growth: "+12%",
    },
    {
        name: "Full Stack Development",
        demand: 79,
        growth: "+10%",
    },
];

const emergingTechnologies = [
    "Generative AI",
    "Edge AI",
    "Cloud Native",
    "Digital Twins",
    "IoT",
    "Blockchain",
];

const mentoringRecommendations = [
    {
        student: "Rahul Sharma",
        department: "CSE",
        skill: "Cloud Computing",
        reason: "Readiness below 50%",
        priority: "Critical",
    },
    {
        student: "Priya Singh",
        department: "ECE",
        skill: "Machine Learning",
        reason: "High industry demand",
        priority: "Critical",
    },
    {
        student: "Arjun Das",
        department: "ECE",
        skill: "Python",
        reason: "Required for AI/ML roles",
        priority: "Important",
    },
    {
        student: "Ananya Roy",
        department: "CSE",
        skill: "System Design",
        reason: "Needed for advanced roles",
        priority: "Important",
    },
];

const projects = [
    {
        title: "AI-Based Smart Agriculture",
        organization: "AgriTech Innovations",
        type: "Industry Project",
        students: 6,
        deadline: "30 Sep 2026",
    },
    {
        title: "IoT Predictive Maintenance",
        organization: "Tech Manufacturing Ltd.",
        type: "Research Collaboration",
        students: 4,
        deadline: "15 Oct 2026",
    },
    {
        title: "AI Talent Assessment",
        organization: "SkillTech Labs",
        type: "Faculty-Industry",
        students: 8,
        deadline: "22 Oct 2026",
    },
];

const programs = [
    {
        title: "AI & Machine Learning FDP",
        provider: "AI Research Institute",
        type: "FDP",
        duration: "5 Days",
        date: "18 Sep 2026",
        icon: <Brain size={22} />,
    },
    {
        title: "Cloud Computing Workshop",
        provider: "AWS Academy",
        type: "Workshop",
        duration: "2 Days",
        date: "25 Sep 2026",
        icon: <Cloud size={22} />,
    },
    {
        title: "Industry 4.0 Certification",
        provider: "Industry Skills Hub",
        type: "Certification",
        duration: "6 Weeks",
        date: "01 Oct 2026",
        icon: <Award size={22} />,
    },
];

const notifications = [
    {
        title: "New industry collaboration request",
        description:
            "Tech Manufacturing Ltd. wants to collaborate on an IoT project.",
        time: "2 hours ago",
    },
    {
        title: "Student skill gap detected",
        description:
            "5 students require immediate Cloud Computing mentoring.",
        time: "5 hours ago",
    },
    {
        title: "New FDP available",
        description:
            "AI & Machine Learning Faculty Development Program is now open.",
        time: "Yesterday",
    },
];

/* =====================================================
   MAIN COMPONENT
===================================================== */

export default function Acad() {
    const navigate = useNavigate();

    const pageRef = useRef(null);
    const sidebarRef = useRef(null);
    const headerRef = useRef(null);
    const heroRef = useRef(null);

    const cardsRef = useRef([]);
    const sectionsRef = useRef([]);
    const barsRef = useRef([]);

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("dashboard");

    /* ===================================================
       SMOOTH SCROLL
    =================================================== */

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

    /* ===================================================
       PAGE ANIMATION
    =================================================== */

    useEffect(() => {
        const ctx = gsap.context(() => {
            const timeline = gsap.timeline();

            timeline
                .from(sidebarRef.current, {
                    x: -280,
                    opacity: 0,
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
                        y: 50,
                        opacity: 0,
                        duration: 0.7,
                        ease: "power3.out",
                    },
                    "-=0.3"
                )
                .from(
                    cardsRef.current,
                    {
                        y: 40,
                        opacity: 0,
                        scale: 0.96,
                        duration: 0.5,
                        stagger: 0.1,
                        ease: "power3.out",
                    },
                    "-=0.3"
                );

            /* Section reveal */

            sectionsRef.current.forEach((section) => {
                if (!section) return;

                gsap.from(section, {
                    scrollTrigger: {
                        trigger: section,
                        start: "top 82%",
                        toggleActions: "play none none reverse",
                    },
                    y: 50,
                    opacity: 0,
                    duration: 0.7,
                    ease: "power3.out",
                });
            });

            /* Skill bars */

            barsRef.current.forEach((bar) => {
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
        }, pageRef);

        return () => ctx.revert();
    }, []);

    /* ===================================================
       ACTIVE SIDEBAR SECTION
    =================================================== */

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

    return (
        <div
            ref={pageRef}
            className="min-h-screen bg-[#070b14] text-white"
        >
            {/* =================================================
          DESKTOP SIDEBAR
      ================================================= */}

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

            {/* =================================================
          MOBILE SIDEBAR
      ================================================= */}

            {mobileMenuOpen && (
                <>
                    <div
                        onClick={() => setMobileMenuOpen(false)}
                        className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden"
                    />

                    <aside className="fixed left-0 top-0 z-50 h-screen w-72 border-r border-white/10 bg-[#0b1020] lg:hidden">
                        <div className="flex items-center justify-between border-b border-white/10 p-5">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-600">
                                    <GraduationCap size={21} />
                                </div>

                                <div>
                                    <h1 className="font-bold">EduConnect</h1>
                                    <p className="text-xs text-gray-500">
                                        Academician Portal
                                    </p>
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

            {/* =================================================
          MAIN
      ================================================= */}

            <main className="lg:ml-64">
                {/* =================================================
            HEADER
        ================================================= */}

                <header
                    ref={headerRef}
                    className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-white/10 bg-[#070b14]/85 px-4 backdrop-blur-xl sm:px-6 lg:px-8"
                >
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setMobileMenuOpen(true)}
                            className="rounded-xl border border-white/10 bg-white/5 p-2.5 text-gray-300 lg:hidden"
                        >
                            <Menu size={20} />
                        </button>

                        <div>
                            <p className="text-xs text-gray-500">
                                Academician Dashboard
                            </p>

                            <h2 className="text-lg font-semibold sm:text-xl">
                                Welcome back, Professor 👋
                            </h2>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => scrollToSection("notifications")}
                            className="relative rounded-xl border border-white/10 bg-white/5 p-2.5 text-gray-400 hover:text-white"
                        >
                            <Bell size={19} />

                            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-purple-500" />
                        </button>

                        <div className="hidden items-center gap-3 sm:flex">
                            <div className="text-right">
                                <p className="text-sm font-medium">
                                    Dr. Ananya Sharma
                                </p>

                                <p className="text-xs text-gray-500">
                                    Associate Professor
                                </p>
                            </div>

                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-blue-600 text-sm font-bold">
                                AS
                            </div>
                        </div>
                    </div>
                </header>

                {/* =================================================
            CONTENT
        ================================================= */}

                <div className="px-4 py-6 sm:px-6 lg:px-8">
                    {/* =================================================
              HERO
          ================================================= */}

                    <section
                        id="dashboard"
                        ref={heroRef}
                        className="scroll-mt-24"
                    >
                        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-purple-600/20 via-[#111827] to-blue-600/10 p-6 sm:p-8">
                            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-purple-600/10 blur-3xl" />

                            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />

                            <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_350px] lg:items-center">
                                <div>
                                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/10 px-3 py-1.5 text-xs text-purple-400">
                                        <TrendingUp size={14} />
                                        Industry-aligned mentoring insights
                                    </div>

                                    <h1 className="max-w-3xl text-3xl font-bold leading-tight sm:text-4xl">
                                        Connect{" "}
                                        <span className="text-purple-400">
                                            industry demand
                                        </span>{" "}
                                        with student development.
                                    </h1>

                                    <p className="mt-4 max-w-2xl text-sm leading-6 text-gray-400 sm:text-base">
                                        Understand what companies need, identify where
                                        your students are falling behind, and make
                                        data-driven mentoring decisions.
                                    </p>

                                    <div className="mt-6 flex flex-wrap gap-3">
                                        <button
                                            onClick={() =>
                                                scrollToSection("analytics")
                                            }
                                            className="flex items-center gap-2 rounded-xl bg-purple-600 px-5 py-3 text-sm font-semibold transition hover:bg-purple-500"
                                        >
                                            View Student Analytics
                                            <ArrowUpRight size={16} />
                                        </button>

                                        <button
                                            onClick={() =>
                                                scrollToSection("industry")
                                            }
                                            className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-gray-300 hover:bg-white/10 hover:text-white"
                                        >
                                            Industry Insights
                                        </button>
                                    </div>
                                </div>

                                {/* Unique flow */}

                                <div className="rounded-2xl border border-white/10 bg-black/20 p-5 backdrop-blur">
                                    <p className="text-xs uppercase tracking-widest text-gray-500">
                                        Teaching Intelligence
                                    </p>

                                    <div className="mt-5 space-y-3">
                                        <FlowStep
                                            number="01"
                                            title="Industry Demand"
                                            icon={<Building2 size={17} />}
                                        />

                                        <div className="ml-5 h-5 w-px bg-white/10" />

                                        <FlowStep
                                            number="02"
                                            title="Student Skill Gaps"
                                            icon={<AlertTriangle size={17} />}
                                        />

                                        <div className="ml-5 h-5 w-px bg-white/10" />

                                        <FlowStep
                                            number="03"
                                            title="Mentoring Plan"
                                            icon={<Lightbulb size={17} />}
                                        />

                                        <div className="ml-5 h-5 w-px bg-white/10" />

                                        <FlowStep
                                            number="04"
                                            title="Industry Readiness"
                                            icon={<CheckCircle2 size={17} />}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* =================================================
              SUMMARY CARDS
          ================================================= */}

                    <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                        <SummaryCard
                            cardRef={(el) => (cardsRef.current[0] = el)}
                            icon={<Users size={21} />}
                            title="Students Mentored"
                            value="128"
                            change="+12"
                            description="this semester"
                        />

                        <SummaryCard
                            cardRef={(el) => (cardsRef.current[1] = el)}
                            icon={<TrendingUp size={21} />}
                            title="Average Skill Readiness"
                            value="71%"
                            change="+6%"
                            description="this month"
                        />

                        <SummaryCard
                            cardRef={(el) => (cardsRef.current[2] = el)}
                            icon={<AlertTriangle size={21} />}
                            title="Critical Skill Gaps"
                            value="18"
                            change="-5"
                            description="remaining"
                        />

                        <SummaryCard
                            cardRef={(el) => (cardsRef.current[3] = el)}
                            icon={<Building2 size={21} />}
                            title="Industry Collaborations"
                            value="14"
                            change="+3"
                            description="active"
                        />
                    </div>

                    {/* =================================================
              STUDENT ANALYTICS
          ================================================= */}

                    <section
                        id="analytics"
                        ref={(el) => (sectionsRef.current[0] = el)}
                        className="mb-10 mt-12 scroll-mt-24"
                    >
                        <SectionHeading
                            icon={<BarChart3 size={21} />}
                            title="Student Skill Analytics"
                            description="Understand skill distribution across your students"
                        />

                        <div className="grid gap-6 xl:grid-cols-[1fr_1fr]">
                            {/* Weak skills */}

                            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="font-semibold">
                                            Weak Skills
                                        </h3>

                                        <p className="mt-1 text-xs text-gray-500">
                                            Skills requiring immediate attention
                                        </p>
                                    </div>

                                    <span className="rounded-full bg-red-500/10 px-3 py-1 text-xs text-red-400">
                                        Needs Attention
                                    </span>
                                </div>

                                <div className="mt-6 space-y-5">
                                    {weakSkills.map((skill, index) => (
                                        <SkillDistribution
                                            key={skill.name}
                                            {...skill}
                                            index={index}
                                            barsRef={barsRef}
                                            weak
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Strong skills */}

                            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                                <div>
                                    <h3 className="font-semibold">
                                        Strong Skills
                                    </h3>

                                    <p className="mt-1 text-xs text-gray-500">
                                        Skills where students perform well
                                    </p>
                                </div>

                                <div className="mt-6 space-y-5">
                                    {strongSkills.map((skill, index) => (
                                        <SkillDistribution
                                            key={skill.name}
                                            {...skill}
                                            index={index + weakSkills.length}
                                            barsRef={barsRef}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Department distribution */}

                        <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                                <div>
                                    <h3 className="font-semibold">
                                        Department Skill Distribution
                                    </h3>

                                    <p className="mt-1 text-xs text-gray-500">
                                        Average industry readiness by department
                                    </p>
                                </div>

                                <select className="rounded-xl border border-white/10 bg-[#0b1020] px-4 py-2 text-sm text-gray-300 outline-none">
                                    <option>All Departments</option>
                                    <option>CSE</option>
                                    <option>ECE</option>
                                    <option>EEE</option>
                                    <option>ME</option>
                                </select>
                            </div>

                            <div className="mt-6 grid gap-4 md:grid-cols-4">
                                <DepartmentCard
                                    department="CSE"
                                    students="46"
                                    readiness="78%"
                                />

                                <DepartmentCard
                                    department="ECE"
                                    students="38"
                                    readiness="69%"
                                />

                                <DepartmentCard
                                    department="EEE"
                                    students="25"
                                    readiness="65%"
                                />

                                <DepartmentCard
                                    department="ME"
                                    students="19"
                                    readiness="61%"
                                />
                            </div>
                        </div>
                    </section>

                    {/* =================================================
              MENTORING
          ================================================= */}

                    <section
                        id="mentoring"
                        ref={(el) => (sectionsRef.current[1] = el)}
                        className="mb-10 scroll-mt-24"
                    >
                        <SectionHeading
                            icon={<Lightbulb size={21} />}
                            title="Mentoring Recommendations"
                            description="Students who need your attention based on skill gaps"
                        />

                        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
                            <div className="hidden grid-cols-[1.3fr_0.8fr_1fr_1.2fr_0.8fr] border-b border-white/10 px-6 py-4 text-xs uppercase tracking-wider text-gray-600 md:grid">
                                <span>Student</span>
                                <span>Department</span>
                                <span>Skill Gap</span>
                                <span>Reason</span>
                                <span>Priority</span>
                            </div>

                            {mentoringRecommendations.map((item) => (
                                <MentoringRow
                                    key={item.student}
                                    {...item}
                                />
                            ))}
                        </div>

                        <div className="mt-6 rounded-2xl border border-purple-500/20 bg-purple-500/5 p-6">
                            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                                <div>
                                    <div className="flex items-center gap-2">
                                        <Lightbulb
                                            size={20}
                                            className="text-purple-400"
                                        />

                                        <h3 className="font-semibold">
                                            Recommended Teaching Focus
                                        </h3>
                                    </div>

                                    <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500">
                                        Based on student gaps and current industry demand,
                                        consider prioritizing Cloud Computing, AI/ML and
                                        System Design in your next mentoring sessions.
                                    </p>
                                </div>

                                <button
                                    onClick={() =>
                                        scrollToSection("industry")
                                    }
                                    className="flex shrink-0 items-center justify-center gap-2 rounded-xl bg-purple-600 px-5 py-3 text-sm font-medium hover:bg-purple-500"
                                >
                                    View Industry Demand
                                    <ChevronRight size={16} />
                                </button>
                            </div>
                        </div>
                    </section>

                    {/* =================================================
              INDUSTRY DEMAND
          ================================================= */}

                    <section
                        id="industry"
                        ref={(el) => (sectionsRef.current[2] = el)}
                        className="mb-10 scroll-mt-24"
                    >
                        <SectionHeading
                            icon={<Building2 size={21} />}
                            title="Industry Demand"
                            description="What companies currently need from graduates"
                        />

                        <div className="grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
                            {/* Demand */}

                            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                                <h3 className="font-semibold">
                                    Most Demanded Skills
                                </h3>

                                <p className="mt-1 text-xs text-gray-500">
                                    Based on current industry requirements
                                </p>

                                <div className="mt-6 space-y-5">
                                    {industrySkills.map((skill, index) => (
                                        <IndustryDemand
                                            key={skill.name}
                                            {...skill}
                                            index={index}
                                            barsRef={barsRef}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Emerging tech */}

                            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                                <div className="flex items-center gap-2">
                                    <TrendingUp
                                        size={20}
                                        className="text-green-400"
                                    />

                                    <h3 className="font-semibold">
                                        Emerging Technologies
                                    </h3>
                                </div>

                                <p className="mt-1 text-xs text-gray-500">
                                    Technologies gaining industry attention
                                </p>

                                <div className="mt-6 flex flex-wrap gap-3">
                                    {emergingTechnologies.map((technology) => (
                                        <span
                                            key={technology}
                                            className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-gray-300 transition hover:border-purple-500/30 hover:bg-purple-500/10 hover:text-purple-400"
                                        >
                                            {technology}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-7 rounded-xl border border-green-500/10 bg-green-500/5 p-4">
                                    <p className="text-xs font-medium text-green-400">
                                        Teaching Recommendation
                                    </p>

                                    <p className="mt-2 text-sm leading-6 text-gray-400">
                                        Introduce Generative AI and Cloud Native concepts
                                        through practical projects to improve industry
                                        readiness.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Unique connection */}

                        <div className="mt-6 rounded-2xl border border-white/10 bg-gradient-to-r from-purple-500/10 via-white/[0.02] to-blue-500/10 p-6">
                            <h3 className="text-center font-semibold">
                                Industry → Student → Teaching Intelligence
                            </h3>

                            <div className="mt-6 grid gap-4 md:grid-cols-3">
                                <IntelligenceCard
                                    icon={<Building2 />}
                                    number="94%"
                                    title="Industry Demand"
                                    description="AI / ML is currently highly demanded."
                                />

                                <IntelligenceCard
                                    icon={<AlertTriangle />}
                                    number="38%"
                                    title="Student Proficiency"
                                    description="Only 38% average proficiency."
                                />

                                <IntelligenceCard
                                    icon={<Lightbulb />}
                                    number="01"
                                    title="Teaching Priority"
                                    description="Introduce practical AI/ML modules."
                                />
                            </div>
                        </div>
                    </section>

                    {/* =================================================
              PROJECTS
          ================================================= */}

                    <section
                        id="projects"
                        ref={(el) => (sectionsRef.current[3] = el)}
                        className="mb-10 scroll-mt-24"
                    >
                        <SectionHeading
                            icon={<FolderKanban size={21} />}
                            title="Projects & Research"
                            description="Industry projects and faculty collaboration opportunities"
                            action="Explore all"
                        />

                        <div className="grid gap-5 lg:grid-cols-3">
                            {projects.map((project) => (
                                <ProjectCard
                                    key={project.title}
                                    {...project}
                                />
                            ))}
                        </div>

                        <div className="mt-6 grid gap-5 md:grid-cols-3">
                            <QuickAction
                                icon={<Building2 />}
                                title="Industry Connections"
                                description="18 verified industry partners"
                            />

                            <QuickAction
                                icon={<BriefcaseBusiness />}
                                title="Research Opportunities"
                                description="12 active collaboration calls"
                            />

                            <QuickAction
                                icon={<Users />}
                                title="Faculty Network"
                                description="34 faculty-industry connections"
                            />
                        </div>
                    </section>

                    {/* =================================================
              LEARNING PROGRAMS
          ================================================= */}

                    <section
                        id="learning"
                        ref={(el) => (sectionsRef.current[4] = el)}
                        className="mb-10 scroll-mt-24"
                    >
                        <SectionHeading
                            icon={<GraduationCap size={21} />}
                            title="Learning Programs"
                            description="FDPs, workshops, courses and certifications for faculty"
                            action="View all programs"
                        />

                        <div className="grid gap-5 lg:grid-cols-3">
                            {programs.map((program) => (
                                <ProgramCard
                                    key={program.title}
                                    {...program}
                                />
                            ))}
                        </div>
                    </section>

                    {/* =================================================
              NOTIFICATIONS
          ================================================= */}

                    <section
                        id="notifications"
                        ref={(el) => (sectionsRef.current[5] = el)}
                        className="mb-10 scroll-mt-24"
                    >
                        <SectionHeading
                            icon={<Bell size={21} />}
                            title="Notifications"
                            description="Updates about students, industry and programs"
                        />

                        <div className="space-y-3">
                            {notifications.map((notification) => (
                                <Notification
                                    key={notification.title}
                                    {...notification}
                                />
                            ))}
                        </div>
                    </section>

                    {/* =================================================
              SETTINGS
          ================================================= */}

                    <section
                        id="settings"
                        ref={(el) => (sectionsRef.current[6] = el)}
                        className="mb-10 scroll-mt-24"
                    >
                        <SectionHeading
                            icon={<Settings size={21} />}
                            title="Settings"
                            description="Manage your academician account preferences"
                        />

                        <div className="rounded-2xl border border-white/10 bg-white/[0.03]">
                            <Setting
                                title="Student skill alerts"
                                description="Notify me when students develop critical skill gaps"
                                enabled
                            />

                            <Setting
                                title="Industry collaboration alerts"
                                description="Receive new faculty-industry collaboration requests"
                                enabled
                            />

                            <Setting
                                title="Learning program notifications"
                                description="Receive updates about FDPs and workshops"
                                enabled
                            />

                            <Setting
                                title="Research opportunities"
                                description="Notify me about relevant research collaborations"
                            />
                        </div>
                    </section>

                    {/* =================================================
              FOOTER CTA
          ================================================= */}

                    <section className="mb-10 rounded-3xl border border-purple-500/20 bg-gradient-to-r from-purple-600/15 to-blue-600/10 p-8 text-center sm:p-10">
                        <h2 className="text-2xl font-bold sm:text-3xl">
                            Turn industry data into better mentoring.
                        </h2>

                        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-500">
                            Use industry requirements, student analytics and skill
                            gaps to build a more industry-ready curriculum.
                        </p>

                        <div className="mt-6 flex flex-wrap justify-center gap-3">
                            <button
                                onClick={() =>
                                    scrollToSection("mentoring")
                                }
                                className="rounded-xl bg-purple-600 px-6 py-3 text-sm font-semibold hover:bg-purple-500"
                            >
                                Start Mentoring
                            </button>

                            <button
                                onClick={() =>
                                    scrollToSection("projects")
                                }
                                className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-gray-300 hover:bg-white/10 hover:text-white"
                            >
                                Explore Projects
                            </button>
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
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-600">
                            <GraduationCap size={21} />
                        </div>

                        <div>
                            <h1 className="font-bold">EduConnect</h1>

                            <p className="text-xs text-gray-500">
                                Academician Portal
                            </p>
                        </div>
                    </div>
                </div>
            )}

            <nav className="flex-1 overflow-y-auto p-4">
                <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-widest text-gray-600">
                    Dashboard
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
                    className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm text-gray-400 hover:bg-white/5 hover:text-white"
                >
                    <LogOut size={18} />
                    Logout
                </button>
            </nav>

            <div className="border-t border-white/10 p-4">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-blue-600 text-xs font-bold">
                            AS
                        </div>

                        <div className="min-w-0">
                            <p className="truncate text-sm font-medium">
                                Dr. Ananya Sharma
                            </p>

                            <p className="truncate text-xs text-gray-500">
                                Academician
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

function NavItem({
    icon,
    title,
    active,
    onClick,
}) {
    return (
        <button
            onClick={onClick}
            className={`mb-1 flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm transition ${active
                    ? "bg-purple-600/15 text-purple-400"
                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                }`}
        >
            {icon}

            <span>{title}</span>

            {active && (
                <span className="ml-auto h-1.5 w-1.5 rounded-full bg-purple-400" />
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
    cardRef,
}) {
    return (
        <div
            ref={cardRef}
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:-translate-y-1 hover:border-purple-500/30 hover:bg-white/[0.05]"
        >
            <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                    {icon}
                </div>

                <span className="text-xs font-medium text-green-400">
                    {change}
                </span>
            </div>

            <p className="mt-5 text-sm text-gray-500">
                {title}
            </p>

            <div className="mt-1 flex items-end gap-2">
                <h3 className="text-3xl font-bold">
                    {value}
                </h3>

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
                    <span className="text-purple-400">
                        {icon}
                    </span>

                    <h2 className="text-xl font-bold">
                        {title}
                    </h2>
                </div>

                <p className="mt-1 text-sm text-gray-500">
                    {description}
                </p>
            </div>

            {action && (
                <button className="flex items-center gap-1 text-sm text-purple-400 hover:text-purple-300">
                    {action}
                    <ChevronRight size={16} />
                </button>
            )}
        </div>
    );
}

/* =====================================================
   FLOW STEP
===================================================== */

function FlowStep({
    number,
    title,
    icon,
}) {
    return (
        <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                {icon}
            </div>

            <div>
                <p className="text-[10px] text-gray-600">
                    STEP {number}
                </p>

                <p className="text-sm font-medium">
                    {title}
                </p>
            </div>
        </div>
    );
}

/* =====================================================
   SKILL DISTRIBUTION
===================================================== */

function SkillDistribution({
    name,
    percentage,
    icon,
    index,
    barsRef,
    weak = false,
}) {
    return (
        <div>
            <div className="mb-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    {icon && (
                        <span className="text-gray-500">
                            {icon}
                        </span>
                    )}

                    <span className="text-sm">
                        {name}
                    </span>
                </div>

                <span
                    className={`text-xs ${weak
                            ? "text-red-400"
                            : "text-green-400"
                        }`}
                >
                    {percentage}%
                </span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-white/10">
                <div
                    ref={(el) => (barsRef.current[index] = el)}
                    data-width={percentage}
                    className={`h-full rounded-full ${weak
                            ? "bg-red-500"
                            : "bg-green-500"
                        }`}
                    style={{
                        width: "0%",
                    }}
                />
            </div>
        </div>
    );
}

/* =====================================================
   DEPARTMENT CARD
===================================================== */

function DepartmentCard({
    department,
    students,
    readiness,
}) {
    return (
        <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
            <div className="flex items-center justify-between">
                <span className="text-sm font-semibold">
                    {department}
                </span>

                <Users
                    size={16}
                    className="text-gray-600"
                />
            </div>

            <p className="mt-4 text-2xl font-bold">
                {readiness}
            </p>

            <p className="mt-1 text-xs text-gray-600">
                average readiness
            </p>

            <div className="mt-4 h-1.5 rounded-full bg-white/10">
                <div
                    className="h-full rounded-full bg-purple-500"
                    style={{
                        width: readiness,
                    }}
                />
            </div>

            <p className="mt-3 text-xs text-gray-500">
                {students} students
            </p>
        </div>
    );
}

/* =====================================================
   MENTORING ROW
===================================================== */

function MentoringRow({
    student,
    department,
    skill,
    reason,
    priority,
}) {
    return (
        <div className="grid gap-3 border-b border-white/10 px-6 py-5 last:border-0 md:grid-cols-[1.3fr_0.8fr_1fr_1.2fr_0.8fr] md:items-center">
            <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-purple-500/10 text-xs font-bold text-purple-400">
                    {student
                        .split(" ")
                        .map((x) => x[0])
                        .join("")}
                </div>

                <span className="text-sm font-medium">
                    {student}
                </span>
            </div>

            <span className="text-xs text-gray-500">
                {department}
            </span>

            <span className="text-sm text-gray-300">
                {skill}
            </span>

            <span className="text-xs text-gray-500">
                {reason}
            </span>

            <span
                className={`w-fit rounded-full px-3 py-1 text-[10px] ${priority === "Critical"
                        ? "bg-red-500/10 text-red-400"
                        : "bg-yellow-500/10 text-yellow-400"
                    }`}
            >
                {priority}
            </span>
        </div>
    );
}

/* =====================================================
   INDUSTRY DEMAND
===================================================== */

function IndustryDemand({
    name,
    demand,
    growth,
    index,
    barsRef,
}) {
    return (
        <div>
            <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-medium">
                    {name}
                </span>

                <div className="flex items-center gap-3">
                    <span className="text-xs text-green-400">
                        {growth}
                    </span>

                    <span className="text-xs text-gray-400">
                        {demand}%
                    </span>
                </div>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-white/10">
                <div
                    ref={(el) =>
                        (barsRef.current[index + 10] = el)
                    }
                    data-width={demand}
                    className="h-full rounded-full bg-purple-500"
                    style={{
                        width: "0%",
                    }}
                />
            </div>
        </div>
    );
}

/* =====================================================
   INTELLIGENCE CARD
===================================================== */

function IntelligenceCard({
    icon,
    number,
    title,
    description,
}) {
    return (
        <div className="rounded-xl border border-white/10 bg-black/10 p-5 text-center">
            <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                {icon}
            </div>

            <p className="mt-4 text-2xl font-bold">
                {number}
            </p>

            <p className="mt-1 text-sm font-medium">
                {title}
            </p>

            <p className="mt-2 text-xs leading-5 text-gray-600">
                {description}
            </p>
        </div>
    );
}

/* =====================================================
   PROJECT CARD
===================================================== */

function ProjectCard({
    title,
    organization,
    type,
    students,
    deadline,
}) {
    return (
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:-translate-y-1 hover:border-purple-500/30">
            <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                    <FolderKanban size={21} />
                </div>

                <span className="rounded-full bg-blue-500/10 px-2.5 py-1 text-[10px] text-blue-400">
                    {type}
                </span>
            </div>

            <h3 className="mt-5 font-semibold">
                {title}
            </h3>

            <p className="mt-1 text-xs text-gray-500">
                {organization}
            </p>

            <div className="mt-5 space-y-2 text-xs text-gray-500">
                <div className="flex items-center gap-2">
                    <Users size={14} />
                    {students} students involved
                </div>

                <div className="flex items-center gap-2">
                    <CalendarDays size={14} />
                    Deadline: {deadline}
                </div>
            </div>

            <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 py-2.5 text-sm text-gray-300 hover:bg-white/10">
                View Project
                <ExternalLink size={15} />
            </button>
        </div>
    );
}

/* =====================================================
   QUICK ACTION
===================================================== */

function QuickAction({
    icon,
    title,
    description,
}) {
    return (
        <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:bg-white/[0.05]">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                {icon}
            </div>

            <div>
                <h3 className="text-sm font-semibold">
                    {title}
                </h3>

                <p className="mt-1 text-xs text-gray-600">
                    {description}
                </p>
            </div>

            <ChevronRight
                size={17}
                className="ml-auto text-gray-600"
            />
        </div>
    );
}

/* =====================================================
   PROGRAM CARD
===================================================== */

function ProgramCard({
    title,
    provider,
    type,
    duration,
    date,
    icon,
}) {
    return (
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:-translate-y-1 hover:border-purple-500/30">
            <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                    {icon}
                </div>

                <span className="rounded-full bg-green-500/10 px-2.5 py-1 text-[10px] text-green-400">
                    {type}
                </span>
            </div>

            <h3 className="mt-5 font-semibold">
                {title}
            </h3>

            <p className="mt-1 text-xs text-gray-500">
                {provider}
            </p>

            <div className="mt-5 flex items-center justify-between text-xs text-gray-500">
                <span>{duration}</span>

                <span>{date}</span>
            </div>

            <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-purple-600 py-2.5 text-sm font-medium hover:bg-purple-500">
                View Program
                <ChevronRight size={15} />
            </button>
        </div>
    );
}

/* =====================================================
   NOTIFICATION
===================================================== */

function Notification({
    title,
    description,
    time,
}) {
    return (
        <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.05]">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                <Bell size={18} />
            </div>

            <div className="flex-1">
                <h3 className="text-sm font-medium">
                    {title}
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                    {description}
                </p>

                <p className="mt-2 text-[10px] text-gray-600">
                    {time}
                </p>
            </div>

            <span className="mt-2 h-2 w-2 rounded-full bg-purple-500" />
        </div>
    );
}

/* =====================================================
   SETTINGS
===================================================== */

function Setting({
    title,
    description,
    enabled = false,
}) {
    const [active, setActive] = useState(enabled);

    return (
        <div className="flex items-center justify-between gap-5 border-b border-white/10 p-5 last:border-0">
            <div>
                <h3 className="text-sm font-medium">
                    {title}
                </h3>

                <p className="mt-1 text-xs text-gray-500">
                    {description}
                </p>
            </div>

            <button
                onClick={() => setActive(!active)}
                className={`relative h-6 w-11 shrink-0 rounded-full transition ${active
                        ? "bg-purple-600"
                        : "bg-white/10"
                    }`}
            >
                <span
                    className={`absolute top-1 h-4 w-4 rounded-full bg-white transition ${active
                            ? "left-6"
                            : "left-1"
                        }`}
                />
            </button>
        </div>
    );
}