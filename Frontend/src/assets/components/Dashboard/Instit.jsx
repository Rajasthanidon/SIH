import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import {
    LayoutDashboard,
    Users,
    BarChart3,
    Target,
    Building2,
    BriefcaseBusiness,
    BookOpen,
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
    GraduationCap,
    Code2,
    Cloud,
    Brain,
    Database,
    ShieldCheck,
    Award,
    CalendarDays,
    ExternalLink,
    UserRound,
    Network,
    ClipboardCheck,
    Lightbulb,
    PieChart,
    Activity,
    Layers3,
    ArrowUpRight,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


// ----------------------------------------------------
// MOCK DATA
// ----------------------------------------------------

const navItems = [
    {
        id: "dashboard",
        title: "Dashboard",
        icon: <LayoutDashboard size={18} />,
    },
    {
        id: "skill-map",
        title: "Skill Map",
        icon: <Target size={18} />,
    },
    {
        id: "placement",
        title: "Placement Analytics",
        icon: <BarChart3 size={18} />,
    },
    {
        id: "internships",
        title: "Internships",
        icon: <BriefcaseBusiness size={18} />,
    },
    {
        id: "industry",
        title: "Industry Network",
        icon: <Building2 size={18} />,
    },
    {
        id: "curriculum",
        title: "Curriculum Insights",
        icon: <BookOpen size={18} />,
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

const departmentSkills = [
    {
        department: "Computer Science",
        readiness: 78,
        gap: 22,
        topGap: "Cloud Computing",
    },
    {
        department: "Electronics & Communication",
        readiness: 71,
        gap: 29,
        topGap: "Embedded AI",
    },
    {
        department: "Electrical Engineering",
        readiness: 67,
        gap: 33,
        topGap: "Data Analytics",
    },
    {
        department: "Mechanical Engineering",
        readiness: 61,
        gap: 39,
        topGap: "Industry 4.0",
    },
];

const demandedSkills = [
    {
        name: "Artificial Intelligence",
        demand: 94,
        students: 48,
    },
    {
        name: "Cloud Computing",
        demand: 91,
        students: 61,
    },
    {
        name: "Data Science",
        demand: 87,
        students: 55,
    },
    {
        name: "Cybersecurity",
        demand: 82,
        students: 34,
    },
    {
        name: "Full Stack Development",
        demand: 79,
        students: 89,
    },
];

const readinessDistribution = [
    {
        label: "Highly Ready",
        value: 24,
        count: 286,
    },
    {
        label: "Job Ready",
        value: 38,
        count: 452,
    },
    {
        label: "Needs Improvement",
        value: 27,
        count: 321,
    },
    {
        label: "Critical Gap",
        value: 11,
        count: 131,
    },
];

const placementReasons = [
    {
        reason: "Insufficient technical skills",
        percentage: 38,
        students: 184,
        severity: "Critical",
    },
    {
        reason: "Poor interview performance",
        percentage: 27,
        students: 131,
        severity: "High",
    },
    {
        reason: "Industry skill mismatch",
        percentage: 21,
        students: 102,
        severity: "High",
    },
    {
        reason: "Lack of practical projects",
        percentage: 14,
        students: 68,
        severity: "Medium",
    },
];

const placementMonths = [
    { month: "Jan", applications: 420, selected: 72 },
    { month: "Feb", applications: 510, selected: 94 },
    { month: "Mar", applications: 620, selected: 121 },
    { month: "Apr", applications: 580, selected: 113 },
    { month: "May", applications: 710, selected: 154 },
    { month: "Jun", applications: 790, selected: 181 },
];

const internships = [
    {
        title: "Software Development Internships",
        company: "TechNova Solutions",
        students: 84,
        conversion: 32,
        status: "Active",
    },
    {
        title: "AI & ML Internship Program",
        company: "DataSphere Labs",
        students: 46,
        conversion: 41,
        status: "Active",
    },
    {
        title: "Embedded Systems Internship",
        company: "ElectroTech",
        students: 31,
        conversion: 26,
        status: "Active",
    },
];

const partners = [
    {
        name: "TechNova Solutions",
        type: "Technology",
        projects: 5,
        hiring: 24,
        status: "Active",
    },
    {
        name: "DataSphere Labs",
        type: "AI & Data",
        projects: 3,
        hiring: 17,
        status: "Active",
    },
    {
        name: "ElectroTech Industries",
        type: "Electronics",
        projects: 4,
        hiring: 12,
        status: "Active",
    },
    {
        name: "CloudScale Systems",
        type: "Cloud",
        projects: 2,
        hiring: 8,
        status: "New",
    },
];

const curriculumGaps = [
    {
        skill: "Cloud Computing",
        demand: 91,
        curriculum: 54,
        gap: 37,
        priority: "Critical",
    },
    {
        skill: "Artificial Intelligence",
        demand: 94,
        curriculum: 63,
        gap: 31,
        priority: "Critical",
    },
    {
        skill: "Cybersecurity",
        demand: 82,
        curriculum: 59,
        gap: 23,
        priority: "High",
    },
    {
        skill: "DevOps",
        demand: 78,
        curriculum: 57,
        gap: 21,
        priority: "High",
    },
    {
        skill: "Data Analytics",
        demand: 87,
        curriculum: 71,
        gap: 16,
        priority: "Medium",
    },
];


// ----------------------------------------------------
// SMALL COMPONENTS
// ----------------------------------------------------

function SummaryCard({
    icon,
    title,
    value,
    change,
    subtitle,
    cardRef,
}) {
    return (
        <div
            ref={cardRef}
            className="
        group
        rounded-2xl
        border border-gray-200 dark:border-gray-800
        bg-white dark:bg-gray-900
        p-5
        shadow-sm
        hover:shadow-xl
        hover:-translate-y-1
        transition-all duration-300
      "
        >
            <div className="flex items-start justify-between">
                <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        {title}
                    </p>

                    <h3 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
                        {value}
                    </h3>
                </div>

                <div className="
          rounded-xl
          bg-purple-100 dark:bg-purple-900/30
          p-3
          text-purple-600 dark:text-purple-400
        ">
                    {icon}
                </div>
            </div>

            <div className="mt-4 flex items-center gap-2">
                {change && (
                    <span className="flex items-center gap-1 text-sm font-semibold text-green-600">
                        <TrendingUp size={15} />
                        {change}
                    </span>
                )}

                <span className="text-xs text-gray-500 dark:text-gray-400">
                    {subtitle}
                </span>
            </div>
        </div>
    );
}

function SectionTitle({ eyebrow, title, description }) {
    return (
        <div className="mb-6">
            <p className="mb-1 text-sm font-semibold uppercase tracking-wider text-purple-600">
                {eyebrow}
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                {title}
            </h2>

            {description && (
                <p className="mt-2 max-w-3xl text-gray-500 dark:text-gray-400">
                    {description}
                </p>
            )}
        </div>
    );
}

function NavItem({
    icon,
    title,
    active,
    onClick,
}) {
    return (
        <button
            onClick={onClick}
            className={`
        w-full
        flex
        items-center
        gap-3
        rounded-xl
        px-4
        py-3
        text-sm
        font-medium
        transition-all duration-300
        ${active
                    ? "bg-purple-600 text-white shadow-lg shadow-purple-500/20"
                    : "text-gray-600 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-gray-800 hover:text-purple-600"
                }
      `}
        >
            {icon}
            <span>{title}</span>
        </button>
    );
}


// ----------------------------------------------------
// MAIN COMPONENT
// ----------------------------------------------------

export default function Institution() {
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

    // --------------------------------------------------
    // GSAP SCROLL FUNCTION
    // --------------------------------------------------

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


    // --------------------------------------------------
    // GSAP ANIMATIONS
    // --------------------------------------------------

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


    // --------------------------------------------------
    // ACTIVE SIDEBAR SECTION
    // --------------------------------------------------

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
            className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white"
        >

            {/* =================================================
          DESKTOP SIDEBAR
      ================================================= */}

            <aside
                ref={sidebarRef}
                className="
          fixed
          left-0
          top-0
          z-40
          hidden
          h-screen
          w-64
          border-r
          border-gray-200
          dark:border-gray-800
          bg-white
          dark:bg-gray-900
          lg:flex
          lg:flex-col
        "
            >

                {/* LOGO */}

                <div className="flex h-20 items-center px-6 border-b border-gray-200 dark:border-gray-800">
                    <div className="flex items-center gap-3">
                        <div className="rounded-xl bg-purple-600 p-2 text-white">
                            <GraduationCap size={23} />
                        </div>

                        <div>
                            <h1 className="font-bold text-lg">
                                EduConnect
                            </h1>

                            <p className="text-xs text-gray-500">
                                Institution Portal
                            </p>
                        </div>
                    </div>
                </div>


                {/* NAVIGATION */}

                <nav className="flex-1 overflow-y-auto p-4 space-y-2">

                    {navItems.map((item) => (
                        <NavItem
                            key={item.id}
                            icon={item.icon}
                            title={item.title}
                            active={activeSection === item.id}
                            onClick={() => scrollToSection(item.id)}
                        />
                    ))}

                </nav>


                {/* PROFILE */}

                <div className="border-t border-gray-200 dark:border-gray-800 p-4">

                    <div className="flex items-center gap-3 rounded-xl bg-gray-50 dark:bg-gray-800 p-3">

                        <div className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              bg-purple-100
              text-purple-600
            ">
                            <Building2 size={19} />
                        </div>

                        <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-semibold">
                                NIT Agartala
                            </p>

                            <p className="truncate text-xs text-gray-500">
                                Institution Admin
                            </p>
                        </div>

                        <button
                            onClick={() => navigate("/login")}
                            className="text-gray-400 hover:text-red-500"
                        >
                            <LogOut size={17} />
                        </button>

                    </div>

                </div>

            </aside>


            {/* =================================================
          MOBILE MENU
      ================================================= */}

            {mobileMenuOpen && (
                <div
                    className="fixed inset-0 z-50 bg-black/50 lg:hidden"
                    onClick={() => setMobileMenuOpen(false)}
                >
                    <aside
                        onClick={(e) => e.stopPropagation()}
                        className="
              h-full
              w-72
              bg-white
              dark:bg-gray-900
              shadow-2xl
              p-5
            "
                    >

                        <div className="flex items-center justify-between mb-8">

                            <div className="flex items-center gap-3">
                                <div className="rounded-xl bg-purple-600 p-2 text-white">
                                    <GraduationCap size={21} />
                                </div>

                                <div>
                                    <p className="font-bold">
                                        EduConnect
                                    </p>

                                    <p className="text-xs text-gray-500">
                                        Institution Portal
                                    </p>
                                </div>
                            </div>

                            <button
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-gray-500"
                            >
                                <X />
                            </button>

                        </div>


                        <nav className="space-y-2">

                            {navItems.map((item) => (
                                <NavItem
                                    key={item.id}
                                    icon={item.icon}
                                    title={item.title}
                                    active={activeSection === item.id}
                                    onClick={() => scrollToSection(item.id)}
                                />
                            ))}

                        </nav>

                    </aside>
                </div>
            )}


            {/* =================================================
          MAIN CONTENT
      ================================================= */}

            <main className="lg:ml-64">


                {/* HEADER */}

                <header
                    ref={headerRef}
                    className="
            sticky
            top-0
            z-30
            flex
            h-20
            items-center
            justify-between
            border-b
            border-gray-200
            dark:border-gray-800
            bg-white/90
            dark:bg-gray-900/90
            backdrop-blur-xl
            px-5
            md:px-8
          "
                >

                    <div className="flex items-center gap-4">

                        <button
                            onClick={() => setMobileMenuOpen(true)}
                            className="lg:hidden"
                        >
                            <Menu size={24} />
                        </button>

                        <div>
                            <p className="text-xs text-gray-500">
                                Institution Analytics
                            </p>

                            <h2 className="font-bold text-lg">
                                Institutional Performance
                            </h2>
                        </div>

                    </div>


                    <div className="flex items-center gap-3">

                        <button
                            onClick={() => scrollToSection("notifications")}
                            className="
                relative
                rounded-xl
                border
                border-gray-200
                dark:border-gray-700
                p-2.5
                hover:bg-gray-100
                dark:hover:bg-gray-800
              "
                        >
                            <Bell size={19} />

                            <span className="
                absolute
                right-1
                top-1
                h-2
                w-2
                rounded-full
                bg-red-500
              " />
                        </button>


                        <div className="hidden sm:flex items-center gap-3">

                            <div className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                bg-purple-100
                text-purple-600
              ">
                                <Building2 size={17} />
                            </div>

                            <div>
                                <p className="text-sm font-semibold">
                                    NIT Agartala
                                </p>

                                <p className="text-xs text-gray-500">
                                    Administrator
                                </p>
                            </div>

                        </div>

                    </div>

                </header>


                <div className="p-5 md:p-8 space-y-10">


                    {/* =================================================
              DASHBOARD HERO
          ================================================= */}

                    <section
                        id="dashboard"
                        ref={heroRef}
                        className="scroll-mt-24"
                    >

                        <div className="
              relative
              overflow-hidden
              rounded-3xl
              bg-gradient-to-br
              from-purple-700
              via-indigo-700
              to-blue-700
              p-6
              md:p-10
              text-white
            ">

                            <div className="relative z-10 max-w-4xl">

                                <div className="
                  mb-4
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-white/10
                  px-4
                  py-2
                  text-sm
                  backdrop-blur
                ">
                                    <Activity size={16} />
                                    Institutional Intelligence
                                </div>


                                <h1 className="
                  text-3xl
                  md:text-5xl
                  font-bold
                  leading-tight
                ">
                                    Understand why students
                                    <br />
                                    are getting selected — or not.
                                </h1>


                                <p className="
                  mt-5
                  max-w-2xl
                  text-purple-100
                  leading-relaxed
                ">
                                    Go beyond placement percentages. Connect industry
                                    demand, student skill gaps and curriculum readiness
                                    to identify exactly where institutional intervention
                                    is required.
                                </p>


                                <div className="
                  mt-8
                  grid
                  grid-cols-1
                  sm:grid-cols-3
                  gap-3
                ">

                                    <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                                        <p className="text-xs text-purple-200">
                                            Industry Demand
                                        </p>

                                        <p className="mt-1 font-bold">
                                            What companies need
                                        </p>
                                    </div>


                                    <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                                        <p className="text-xs text-purple-200">
                                            Student Gaps
                                        </p>

                                        <p className="mt-1 font-bold">
                                            What students lack
                                        </p>
                                    </div>


                                    <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                                        <p className="text-xs text-purple-200">
                                            Intervention
                                        </p>

                                        <p className="mt-1 font-bold">
                                            What institution should do
                                        </p>
                                    </div>

                                </div>

                            </div>


                            <div className="
                absolute
                -right-20
                -top-20
                h-72
                w-72
                rounded-full
                bg-white/10
                blur-3xl
              " />

                            <div className="
                absolute
                -bottom-24
                right-20
                h-64
                w-64
                rounded-full
                bg-blue-400/20
                blur-3xl
              " />

                        </div>

                    </section>


                    {/* =================================================
              SUMMARY CARDS
          ================================================= */}

                    <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

                        <SummaryCard
                            cardRef={(el) => (cardsRef.current[0] = el)}
                            icon={<Users size={22} />}
                            title="Students Registered"
                            value="1,190"
                            change="+12.4%"
                            subtitle="vs last academic year"
                        />

                        <SummaryCard
                            cardRef={(el) => (cardsRef.current[1] = el)}
                            icon={<Target size={22} />}
                            title="Placement Readiness"
                            value="72%"
                            change="+8.6%"
                            subtitle="institution average"
                        />

                        <SummaryCard
                            cardRef={(el) => (cardsRef.current[2] = el)}
                            icon={<Building2 size={22} />}
                            title="Industry Partners"
                            value="42"
                            change="+7"
                            subtitle="active partnerships"
                        />

                        <SummaryCard
                            cardRef={(el) => (cardsRef.current[3] = el)}
                            icon={<BriefcaseBusiness size={22} />}
                            title="Active Opportunities"
                            value="86"
                            change="+19%"
                            subtitle="internships & jobs"
                        />

                    </section>


                    {/* =================================================
              INSTITUTION SKILL MAP
          ================================================= */}

                    <section
                        id="skill-map"
                        ref={(el) => (sectionsRef.current[0] = el)}
                        className="scroll-mt-24"
                    >

                        <SectionTitle
                            eyebrow="01 · Institution Skill Map"
                            title="Where are students ready — and where are the gaps?"
                            description="Analyze department readiness, industry demand and the skills that require institutional intervention."
                        />


                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">


                            {/* Department readiness */}

                            <div className="
                rounded-2xl
                border
                border-gray-200
                dark:border-gray-800
                bg-white
                dark:bg-gray-900
                p-6
              ">

                                <div className="flex items-center justify-between mb-6">

                                    <div>
                                        <h3 className="font-bold text-lg">
                                            Department-wise Skill Gaps
                                        </h3>

                                        <p className="text-sm text-gray-500 mt-1">
                                            Average student readiness
                                        </p>
                                    </div>

                                    <Layers3 className="text-purple-500" />

                                </div>


                                <div className="space-y-6">

                                    {departmentSkills.map((dept, index) => (

                                        <div key={dept.department}>

                                            <div className="flex justify-between mb-2">

                                                <div>
                                                    <p className="font-medium text-sm">
                                                        {dept.department}
                                                    </p>

                                                    <p className="text-xs text-gray-500">
                                                        Main gap: {dept.topGap}
                                                    </p>
                                                </div>

                                                <span className="font-bold text-sm">
                                                    {dept.readiness}%
                                                </span>

                                            </div>


                                            <div className="
                        h-2
                        rounded-full
                        bg-gray-100
                        dark:bg-gray-800
                        overflow-hidden
                      ">

                                                <div
                                                    ref={(el) =>
                                                        (barsRef.current[index] = el)
                                                    }
                                                    data-width={dept.readiness}
                                                    className="h-full rounded-full bg-purple-600"
                                                    style={{ width: `${dept.readiness}%` }}
                                                />

                                            </div>

                                        </div>

                                    ))}

                                </div>

                            </div>


                            {/* Most demanded skills */}

                            <div className="
                rounded-2xl
                border
                border-gray-200
                dark:border-gray-800
                bg-white
                dark:bg-gray-900
                p-6
              ">

                                <div className="flex items-center justify-between mb-6">

                                    <div>
                                        <h3 className="font-bold text-lg">
                                            Most Demanded Skills
                                        </h3>

                                        <p className="text-sm text-gray-500 mt-1">
                                            Current industry demand
                                        </p>
                                    </div>

                                    <TrendingUp className="text-green-500" />

                                </div>


                                <div className="space-y-5">

                                    {demandedSkills.map((skill, index) => (

                                        <div key={skill.name}>

                                            <div className="flex justify-between mb-2">

                                                <span className="text-sm font-medium">
                                                    {skill.name}
                                                </span>

                                                <div className="flex gap-3">

                                                    <span className="text-xs text-gray-500">
                                                        {skill.students} students
                                                    </span>

                                                    <span className="text-sm font-bold text-purple-600">
                                                        {skill.demand}%
                                                    </span>

                                                </div>

                                            </div>


                                            <div className="
                        h-2
                        rounded-full
                        bg-gray-100
                        dark:bg-gray-800
                      ">

                                                <div
                                                    ref={(el) =>
                                                        (barsRef.current[index + 5] = el)
                                                    }
                                                    data-width={skill.demand}
                                                    className="h-full rounded-full bg-indigo-500"
                                                    style={{
                                                        width: `${skill.demand}%`,
                                                    }}
                                                />

                                            </div>

                                        </div>

                                    ))}

                                </div>

                            </div>

                        </div>


                        {/* Readiness distribution */}

                        <div className="
              mt-6
              rounded-2xl
              border
              border-gray-200
              dark:border-gray-800
              bg-white
              dark:bg-gray-900
              p-6
            ">

                            <div className="flex items-center gap-3 mb-6">

                                <PieChart className="text-purple-500" />

                                <div>
                                    <h3 className="font-bold text-lg">
                                        Student Readiness Distribution
                                    </h3>

                                    <p className="text-sm text-gray-500">
                                        Institution-wide student employability levels
                                    </p>
                                </div>

                            </div>


                            <div className="
                grid
                grid-cols-2
                lg:grid-cols-4
                gap-4
              ">

                                {readinessDistribution.map((item) => (

                                    <div
                                        key={item.label}
                                        className="
                      rounded-xl
                      bg-gray-50
                      dark:bg-gray-800
                      p-5
                    "
                                    >

                                        <p className="text-sm text-gray-500">
                                            {item.label}
                                        </p>

                                        <p className="mt-2 text-2xl font-bold">
                                            {item.value}%
                                        </p>

                                        <p className="mt-1 text-xs text-gray-500">
                                            {item.count} students
                                        </p>

                                    </div>

                                ))}

                            </div>

                        </div>

                    </section>


                    {/* =================================================
              PLACEMENT ANALYTICS
          ================================================= */}

                    <section
                        id="placement"
                        ref={(el) => (sectionsRef.current[1] = el)}
                        className="scroll-mt-24"
                    >

                        <SectionTitle
                            eyebrow="02 · Placement Analytics"
                            title="Understand the complete placement funnel"
                            description="Track applications, shortlisting and selections while identifying the reasons students are being rejected."
                        />


                        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">


                            {/* Funnel */}

                            <div className="
                xl:col-span-1
                rounded-2xl
                border
                border-gray-200
                dark:border-gray-800
                bg-white
                dark:bg-gray-900
                p-6
              ">

                                <h3 className="font-bold text-lg mb-6">
                                    Placement Funnel
                                </h3>


                                <div className="space-y-5">

                                    <div>
                                        <div className="flex justify-between mb-2">
                                            <span className="text-sm">
                                                Applications
                                            </span>

                                            <b>1,240</b>
                                        </div>

                                        <div className="h-3 rounded-full bg-purple-100">
                                            <div className="h-full w-full rounded-full bg-purple-600" />
                                        </div>
                                    </div>


                                    <div>
                                        <div className="flex justify-between mb-2">
                                            <span className="text-sm">
                                                Shortlisted
                                            </span>

                                            <b>486</b>
                                        </div>

                                        <div className="h-3 rounded-full bg-blue-100">
                                            <div className="h-full w-[62%] rounded-full bg-blue-500" />
                                        </div>
                                    </div>


                                    <div>
                                        <div className="flex justify-between mb-2">
                                            <span className="text-sm">
                                                Selected
                                            </span>

                                            <b>237</b>
                                        </div>

                                        <div className="h-3 rounded-full bg-green-100">
                                            <div className="h-full w-[35%] rounded-full bg-green-500" />
                                        </div>
                                    </div>

                                </div>


                                <div className="
                  mt-8
                  rounded-xl
                  bg-green-50
                  dark:bg-green-900/20
                  p-4
                ">

                                    <div className="flex items-center gap-2 text-green-600">
                                        <CheckCircle2 size={18} />

                                        <span className="font-semibold">
                                            Selection Rate
                                        </span>
                                    </div>

                                    <p className="mt-2 text-3xl font-bold">
                                        19.1%
                                    </p>

                                    <p className="text-xs text-gray-500 mt-1">
                                        Applications converted to offers
                                    </p>

                                </div>

                            </div>


                            {/* Why students aren't selected */}

                            <div className="
                xl:col-span-2
                rounded-2xl
                border
                border-gray-200
                dark:border-gray-800
                bg-white
                dark:bg-gray-900
                p-6
              ">

                                <div className="flex items-start justify-between mb-6">

                                    <div>
                                        <h3 className="font-bold text-lg">
                                            Why Students Aren't Getting Selected
                                        </h3>

                                        <p className="text-sm text-gray-500 mt-1">
                                            Root causes behind placement rejection
                                        </p>
                                    </div>

                                    <AlertTriangle className="text-orange-500" />

                                </div>


                                <div className="space-y-5">

                                    {placementReasons.map((reason) => (

                                        <div
                                            key={reason.reason}
                                            className="
                        rounded-xl
                        border
                        border-gray-100
                        dark:border-gray-800
                        p-4
                      "
                                        >

                                            <div className="flex items-center justify-between">

                                                <div className="flex items-center gap-3">

                                                    <div className="
                            rounded-lg
                            bg-red-100
                            dark:bg-red-900/20
                            p-2
                            text-red-500
                          ">
                                                        <TrendingDown size={17} />
                                                    </div>

                                                    <div>

                                                        <p className="font-medium text-sm">
                                                            {reason.reason}
                                                        </p>

                                                        <p className="text-xs text-gray-500">
                                                            {reason.students} students affected
                                                        </p>

                                                    </div>

                                                </div>


                                                <div className="text-right">

                                                    <p className="font-bold">
                                                        {reason.percentage}%
                                                    </p>

                                                    <span className="
                            text-[10px]
                            rounded-full
                            px-2
                            py-1
                            bg-orange-100
                            text-orange-600
                          ">
                                                        {reason.severity}
                                                    </span>

                                                </div>

                                            </div>


                                            <div className="
                        mt-3
                        h-2
                        rounded-full
                        bg-gray-100
                        dark:bg-gray-800
                      ">

                                                <div
                                                    className="h-full rounded-full bg-orange-500"
                                                    style={{
                                                        width: `${reason.percentage * 2.2}%`,
                                                    }}
                                                />

                                            </div>

                                        </div>

                                    ))}

                                </div>

                            </div>

                        </div>


                        {/* Placement trends */}

                        <div className="
              mt-6
              rounded-2xl
              border
              border-gray-200
              dark:border-gray-800
              bg-white
              dark:bg-gray-900
              p-6
            ">

                            <div className="flex items-center justify-between mb-6">

                                <div>
                                    <h3 className="font-bold text-lg">
                                        Placement Trends
                                    </h3>

                                    <p className="text-sm text-gray-500">
                                        Applications vs selections
                                    </p>
                                </div>

                                <BarChart3 className="text-purple-500" />

                            </div>


                            <div className="
                flex
                items-end
                gap-3
                md:gap-6
                h-64
                overflow-x-auto
              ">

                                {placementMonths.map((month) => {

                                    const max = 800;

                                    return (
                                        <div
                                            key={month.month}
                                            className="
                        min-w-[55px]
                        flex
                        h-full
                        flex-col
                        items-center
                        justify-end
                      "
                                        >

                                            <div className="
                        flex
                        items-end
                        gap-1
                        h-full
                      ">

                                                <div
                                                    className="
                            w-4
                            rounded-t-md
                            bg-purple-500
                          "
                                                    style={{
                                                        height: `${(month.applications / max) * 100}%`,
                                                    }}
                                                />

                                                <div
                                                    className="
                            w-4
                            rounded-t-md
                            bg-green-500
                          "
                                                    style={{
                                                        height: `${(month.selected / max) * 100}%`,
                                                    }}
                                                />

                                            </div>

                                            <span className="mt-2 text-xs text-gray-500">
                                                {month.month}
                                            </span>

                                        </div>
                                    );
                                })}

                            </div>


                            <div className="mt-5 flex gap-5 text-xs">

                                <div className="flex items-center gap-2">
                                    <span className="h-3 w-3 rounded-sm bg-purple-500" />
                                    Applications
                                </div>

                                <div className="flex items-center gap-2">
                                    <span className="h-3 w-3 rounded-sm bg-green-500" />
                                    Selected
                                </div>

                            </div>

                        </div>

                    </section>


                    {/* =================================================
              INTERNSHIP ANALYTICS
          ================================================= */}

                    <section
                        id="internships"
                        ref={(el) => (sectionsRef.current[2] = el)}
                        className="scroll-mt-24"
                    >

                        <SectionTitle
                            eyebrow="03 · Internship Analytics"
                            title="Track internships from participation to employment"
                            description="See which internship programs are generating meaningful industry outcomes."
                        />


                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-6">

                            <div className="
                rounded-2xl
                bg-white
                dark:bg-gray-900
                border
                border-gray-200
                dark:border-gray-800
                p-6
              ">

                                <BriefcaseBusiness className="text-purple-500" />

                                <p className="mt-4 text-sm text-gray-500">
                                    Active Internships
                                </p>

                                <p className="text-3xl font-bold mt-1">
                                    18
                                </p>

                            </div>


                            <div className="
                rounded-2xl
                bg-white
                dark:bg-gray-900
                border
                border-gray-200
                dark:border-gray-800
                p-6
              ">

                                <Users className="text-blue-500" />

                                <p className="mt-4 text-sm text-gray-500">
                                    Student Participation
                                </p>

                                <p className="text-3xl font-bold mt-1">
                                    161
                                </p>

                            </div>


                            <div className="
                rounded-2xl
                bg-white
                dark:bg-gray-900
                border
                border-gray-200
                dark:border-gray-800
                p-6
              ">

                                <Award className="text-green-500" />

                                <p className="mt-4 text-sm text-gray-500">
                                    Job Conversion
                                </p>

                                <p className="text-3xl font-bold mt-1">
                                    34%
                                </p>

                            </div>

                        </div>


                        <div className="
              overflow-hidden
              rounded-2xl
              border
              border-gray-200
              dark:border-gray-800
              bg-white
              dark:bg-gray-900
            ">

                            <div className="overflow-x-auto">

                                <table className="w-full min-w-[700px]">

                                    <thead className="bg-gray-50 dark:bg-gray-800">

                                        <tr>

                                            <th className="px-6 py-4 text-left text-xs uppercase text-gray-500">
                                                Program
                                            </th>

                                            <th className="px-6 py-4 text-left text-xs uppercase text-gray-500">
                                                Company
                                            </th>

                                            <th className="px-6 py-4 text-left text-xs uppercase text-gray-500">
                                                Students
                                            </th>

                                            <th className="px-6 py-4 text-left text-xs uppercase text-gray-500">
                                                Job Conversion
                                            </th>

                                            <th className="px-6 py-4 text-left text-xs uppercase text-gray-500">
                                                Status
                                            </th>

                                        </tr>

                                    </thead>


                                    <tbody className="divide-y divide-gray-100 dark:divide-gray-800">

                                        {internships.map((internship) => (

                                            <tr key={internship.title}>

                                                <td className="px-6 py-5 font-medium">
                                                    {internship.title}
                                                </td>

                                                <td className="px-6 py-5 text-sm text-gray-500">
                                                    {internship.company}
                                                </td>

                                                <td className="px-6 py-5">
                                                    {internship.students}
                                                </td>

                                                <td className="px-6 py-5">

                                                    <span className="font-semibold text-green-600">
                                                        {internship.conversion}%
                                                    </span>

                                                </td>

                                                <td className="px-6 py-5">

                                                    <span className="
                            rounded-full
                            bg-green-100
                            text-green-700
                            px-3
                            py-1
                            text-xs
                            font-semibold
                          ">
                                                        {internship.status}
                                                    </span>

                                                </td>

                                            </tr>

                                        ))}

                                    </tbody>

                                </table>

                            </div>

                        </div>

                    </section>


                    {/* =================================================
              INDUSTRY NETWORK
          ================================================= */}

                    <section
                        id="industry"
                        ref={(el) => (sectionsRef.current[3] = el)}
                        className="scroll-mt-24"
                    >

                        <SectionTitle
                            eyebrow="04 · Industry Network"
                            title="Your institution's industry ecosystem"
                            description="Track partner companies, projects, collaborations and hiring activity."
                        />


                        <div className="
              grid
              grid-cols-1
              sm:grid-cols-2
              xl:grid-cols-4
              gap-5
            ">

                            {partners.map((partner) => (

                                <div
                                    key={partner.name}
                                    className="
                    group
                    rounded-2xl
                    border
                    border-gray-200
                    dark:border-gray-800
                    bg-white
                    dark:bg-gray-900
                    p-5
                    hover:-translate-y-1
                    hover:shadow-xl
                    transition-all
                  "
                                >

                                    <div className="flex items-start justify-between">

                                        <div className="
                      rounded-xl
                      bg-purple-100
                      dark:bg-purple-900/30
                      p-3
                      text-purple-600
                    ">
                                            <Building2 size={20} />
                                        </div>

                                        <span className="
                      rounded-full
                      bg-green-100
                      px-2.5
                      py-1
                      text-[10px]
                      font-semibold
                      text-green-700
                    ">
                                            {partner.status}
                                        </span>

                                    </div>


                                    <h3 className="mt-5 font-bold">
                                        {partner.name}
                                    </h3>

                                    <p className="text-xs text-gray-500 mt-1">
                                        {partner.type}
                                    </p>


                                    <div className="mt-5 grid grid-cols-2 gap-3">

                                        <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-3">

                                            <p className="text-xs text-gray-500">
                                                Projects
                                            </p>

                                            <p className="font-bold mt-1">
                                                {partner.projects}
                                            </p>

                                        </div>


                                        <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-3">

                                            <p className="text-xs text-gray-500">
                                                Hiring
                                            </p>

                                            <p className="font-bold mt-1">
                                                {partner.hiring}
                                            </p>

                                        </div>

                                    </div>


                                    <button className="
                    mt-5
                    flex
                    items-center
                    gap-1
                    text-sm
                    font-semibold
                    text-purple-600
                  ">

                                        View collaboration

                                        <ArrowUpRight size={15} />

                                    </button>

                                </div>

                            ))}

                        </div>

                    </section>


                    {/* =================================================
              CURRICULUM INSIGHTS
          ================================================= */}

                    <section
                        id="curriculum"
                        ref={(el) => (sectionsRef.current[4] = el)}
                        className="scroll-mt-24"
                    >

                        <SectionTitle
                            eyebrow="05 · Curriculum Insights"
                            title="Is your curriculum keeping up with industry?"
                            description="Compare current industry demand against curriculum coverage and identify where additional training is needed."
                        />


                        <div className="
              rounded-2xl
              border
              border-gray-200
              dark:border-gray-800
              bg-white
              dark:bg-gray-900
              p-6
            ">

                            <div className="space-y-6">

                                {curriculumGaps.map((item) => (

                                    <div key={item.skill}>

                                        <div className="
                      flex
                      flex-col
                      md:flex-row
                      md:items-center
                      md:justify-between
                      gap-3
                    ">

                                            <div>

                                                <div className="flex items-center gap-2">

                                                    <Code2 size={17} className="text-purple-500" />

                                                    <p className="font-semibold">
                                                        {item.skill}
                                                    </p>

                                                </div>

                                                <p className="text-xs text-gray-500 mt-1">
                                                    Industry demand vs curriculum coverage
                                                </p>

                                            </div>


                                            <div className="flex items-center gap-4">

                                                <span className="text-xs text-gray-500">
                                                    Demand {item.demand}%
                                                </span>

                                                <span className="text-xs text-gray-500">
                                                    Curriculum {item.curriculum}%
                                                </span>

                                                <span className="
                          rounded-full
                          bg-red-100
                          px-2.5
                          py-1
                          text-xs
                          font-semibold
                          text-red-600
                        ">
                                                    Gap {item.gap}%
                                                </span>

                                            </div>

                                        </div>


                                        <div className="mt-3 h-3 rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden">

                                            <div
                                                className="h-full rounded-full bg-purple-600"
                                                style={{
                                                    width: `${item.curriculum}%`,
                                                }}
                                            />

                                        </div>

                                    </div>

                                ))}

                            </div>


                            {/* Intervention */}

                            <div className="
                mt-8
                rounded-2xl
                border
                border-purple-200
                dark:border-purple-900
                bg-purple-50
                dark:bg-purple-900/20
                p-6
              ">

                                <div className="flex items-start gap-4">

                                    <div className="
                    rounded-xl
                    bg-purple-600
                    p-3
                    text-white
                  ">
                                        <Lightbulb size={22} />
                                    </div>

                                    <div>

                                        <h3 className="font-bold text-lg">
                                            Recommended Institutional Intervention
                                        </h3>

                                        <p className="
                      mt-2
                      text-sm
                      text-gray-600
                      dark:text-gray-300
                      leading-relaxed
                    ">
                                            Cloud Computing and Artificial Intelligence
                                            have the largest industry-to-curriculum gaps.
                                            Consider introducing advanced electives,
                                            industry-led workshops, certification programs
                                            and practical projects in these areas.
                                        </p>


                                        <div className="mt-5 flex flex-wrap gap-3">

                                            <button className="
                        rounded-xl
                        bg-purple-600
                        px-4
                        py-2.5
                        text-sm
                        font-semibold
                        text-white
                        hover:bg-purple-700
                        transition
                      ">
                                                Create Training Program
                                            </button>

                                            <button className="
                        rounded-xl
                        border
                        border-purple-200
                        dark:border-purple-700
                        px-4
                        py-2.5
                        text-sm
                        font-semibold
                        text-purple-600
                      ">
                                                Find Industry Trainers
                                            </button>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </section>


                    {/* =================================================
              INSTITUTIONAL INTELLIGENCE
          ================================================= */}

                    <section
                        ref={(el) => (sectionsRef.current[5] = el)}
                        className="
              rounded-3xl
              bg-gray-900
              dark:bg-gray-800
              p-6
              md:p-8
              text-white
            "
                    >

                        <div className="flex items-center gap-3 mb-8">

                            <div className="rounded-xl bg-purple-600 p-3">
                                <Network size={22} />
                            </div>

                            <div>

                                <p className="text-sm text-purple-300">
                                    Institutional Intelligence
                                </p>

                                <h2 className="text-2xl font-bold">
                                    Industry → Students → Institution
                                </h2>

                            </div>

                        </div>


                        <div className="
              grid
              grid-cols-1
              md:grid-cols-3
              gap-5
            ">

                            <div className="rounded-2xl bg-white/5 p-6">

                                <span className="
                  text-xs
                  font-bold
                  text-purple-300
                ">
                                    STEP 01
                                </span>

                                <h3 className="mt-3 text-xl font-bold">
                                    Industry Demand
                                </h3>

                                <p className="mt-3 text-sm text-gray-300">
                                    AI, Cloud, Data Science and Cybersecurity
                                    are currently among the highest-demand areas.
                                </p>

                            </div>


                            <div className="rounded-2xl bg-white/5 p-6">

                                <span className="
                  text-xs
                  font-bold
                  text-blue-300
                ">
                                    STEP 02
                                </span>

                                <h3 className="mt-3 text-xl font-bold">
                                    Student Gaps
                                </h3>

                                <p className="mt-3 text-sm text-gray-300">
                                    A significant portion of students lack advanced
                                    cloud, AI and practical industry experience.
                                </p>

                            </div>


                            <div className="rounded-2xl bg-white/5 p-6">

                                <span className="
                  text-xs
                  font-bold
                  text-green-300
                ">
                                    STEP 03
                                </span>

                                <h3 className="mt-3 text-xl font-bold">
                                    Institutional Action
                                </h3>

                                <p className="mt-3 text-sm text-gray-300">
                                    Launch targeted courses, workshops, projects,
                                    certifications and industry mentorship.
                                </p>

                            </div>

                        </div>

                    </section>


                    {/* =================================================
              NOTIFICATIONS
          ================================================= */}

                    <section
                        id="notifications"
                        className="scroll-mt-24"
                    >

                        <SectionTitle
                            eyebrow="06 · Notifications"
                            title="Institution updates"
                        />


                        <div className="
              rounded-2xl
              border
              border-gray-200
              dark:border-gray-800
              bg-white
              dark:bg-gray-900
              divide-y
              divide-gray-100
              dark:divide-gray-800
            ">

                            <div className="flex gap-4 p-5">

                                <div className="rounded-xl bg-purple-100 p-3 text-purple-600">
                                    <Building2 size={18} />
                                </div>

                                <div>
                                    <p className="font-semibold text-sm">
                                        New industry partnership request
                                    </p>

                                    <p className="text-xs text-gray-500 mt-1">
                                        CloudScale Systems wants to collaborate on
                                        cloud certification programs.
                                    </p>

                                    <p className="text-[11px] text-gray-400 mt-2">
                                        2 hours ago
                                    </p>
                                </div>

                            </div>


                            <div className="flex gap-4 p-5">

                                <div className="rounded-xl bg-red-100 p-3 text-red-600">
                                    <AlertTriangle size={18} />
                                </div>

                                <div>
                                    <p className="font-semibold text-sm">
                                        Critical skill gap detected
                                    </p>

                                    <p className="text-xs text-gray-500 mt-1">
                                        Cloud Computing readiness is below industry
                                        requirement in 3 departments.
                                    </p>

                                    <p className="text-[11px] text-gray-400 mt-2">
                                        Yesterday
                                    </p>
                                </div>

                            </div>

                        </div>

                    </section>


                    {/* =================================================
              SETTINGS
          ================================================= */}

                    <section
                        id="settings"
                        className="scroll-mt-24"
                    >

                        <SectionTitle
                            eyebrow="07 · Settings"
                            title="Dashboard settings"
                        />


                        <div className="
              rounded-2xl
              border
              border-gray-200
              dark:border-gray-800
              bg-white
              dark:bg-gray-900
              p-6
            ">

                            <div className="flex items-center justify-between py-4">

                                <div>
                                    <p className="font-semibold">
                                        Placement alerts
                                    </p>

                                    <p className="text-sm text-gray-500">
                                        Receive notifications about critical placement gaps
                                    </p>
                                </div>

                                <div className="
                  h-6
                  w-11
                  rounded-full
                  bg-purple-600
                  p-1
                ">
                                    <div className="
                    ml-auto
                    h-4
                    w-4
                    rounded-full
                    bg-white
                  " />
                                </div>

                            </div>


                            <div className="border-t border-gray-100 dark:border-gray-800 flex items-center justify-between py-4">

                                <div>
                                    <p className="font-semibold">
                                        Industry demand updates
                                    </p>

                                    <p className="text-sm text-gray-500">
                                        Get alerts when emerging skills are detected
                                    </p>
                                </div>

                                <div className="
                  h-6
                  w-11
                  rounded-full
                  bg-purple-600
                  p-1
                ">
                                    <div className="
                    ml-auto
                    h-4
                    w-4
                    rounded-full
                    bg-white
                  " />
                                </div>

                            </div>

                        </div>

                    </section>


                    {/* =================================================
              FOOTER
          ================================================= */}

                    <footer className="
            border-t
            border-gray-200
            dark:border-gray-800
            pt-8
            pb-5
            text-center
          ">

                        <div className="flex justify-center mb-3">
                            <div className="rounded-xl bg-purple-100 p-2 text-purple-600">
                                <GraduationCap size={20} />
                            </div>
                        </div>

                        <p className="font-semibold">
                            EduConnect Institution Intelligence
                        </p>

                        <p className="mt-1 text-sm text-gray-500">
                            Turning placement data into institutional action.
                        </p>

                    </footer>

                </div>

            </main>

        </div>
    );
}