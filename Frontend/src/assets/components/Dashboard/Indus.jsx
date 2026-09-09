import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import {
    LayoutDashboard,
    Users,
    Search,
    Brain,
    BriefcaseBusiness,
    GitBranch,
    Star,
    MessageSquare,
    Bell,
    Settings,
    Menu,
    X,
    Building2,
    MapPin,
    Award,
    Code2,
    ChevronRight,
    Plus,
    TrendingUp,
    CheckCircle2,
    Clock3,
    Send,
    Target,
    Sparkles,
    GraduationCap,
    FileText,
    Trash2,
    Edit3,
    Save,
    ArrowRight,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function Indus() {
    const pageRef = useRef(null);

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("dashboard");

    // --------------------------------------------------
    // COMPANY DATA
    // --------------------------------------------------

    const [company, setCompany] = useState({
        name: "TechNova Solutions",
        industry: "Software & Technology",
        location: "Bangalore, India",
        employees: "500-1000",
    });

    // --------------------------------------------------
    // SUMMARY DATA
    // --------------------------------------------------

    const [summary, setSummary] = useState({
        openOpportunities: 8,
        matchedCandidates: 42,
        activeProjects: 6,
        hiringPipeline: 24,
    });

    // --------------------------------------------------
    // TALENT DISCOVERY
    // --------------------------------------------------

    const [filters, setFilters] = useState({
        skill: "",
        branch: "All Branches",
        proficiency: "All Levels",
        certification: "",
    });

    const [candidates, setCandidates] = useState([
        {
            id: 1,
            name: "Satyam Kumar",
            branch: "ECE",
            university: "NIT Agartala",
            proficiency: "Advanced",
            skills: ["React.js", "JavaScript", "Node.js", "MongoDB"],
            certifications: ["IoT Assistant"],
            projects: 5,
            readiness: 88,
        },
        {
            id: 2,
            name: "Rahul Sharma",
            branch: "CSE",
            university: "NIT Agartala",
            proficiency: "Advanced",
            skills: ["Python", "Machine Learning", "TensorFlow"],
            certifications: ["AWS Cloud"],
            projects: 4,
            readiness: 91,
        },
        {
            id: 3,
            name: "Priya Singh",
            branch: "ECE",
            university: "NIT Agartala",
            proficiency: "Intermediate",
            skills: ["Python", "React.js", "SQL"],
            certifications: ["Google Data Analytics"],
            projects: 3,
            readiness: 79,
        },
        {
            id: 4,
            name: "Arjun Das",
            branch: "EEE",
            university: "NIT Agartala",
            proficiency: "Intermediate",
            skills: ["Java", "Spring Boot", "MySQL"],
            certifications: ["Java Programming"],
            projects: 6,
            readiness: 84,
        },
    ]);

    // --------------------------------------------------
    // AI MATCHING
    // --------------------------------------------------

    const [selectedCandidate, setSelectedCandidate] = useState(candidates[0]);

    const [matchingJob, setMatchingJob] = useState({
        title: "Full Stack Developer Intern",
        requiredSkills: [
            "React.js",
            "JavaScript",
            "Node.js",
            "MongoDB",
            "Git",
        ],
    });

    // --------------------------------------------------
    // OPPORTUNITIES
    // --------------------------------------------------

    const [opportunities, setOpportunities] = useState([
        {
            id: 1,
            title: "Frontend Developer Intern",
            type: "Internship",
            location: "Bangalore",
            stipend: "₹25K/month",
            applicants: 48,
            status: "Open",
            skills: ["React.js", "JavaScript", "CSS"],
        },
        {
            id: 2,
            title: "Full Stack Developer Intern",
            type: "Internship",
            location: "Remote",
            stipend: "₹30K/month",
            applicants: 35,
            status: "Open",
            skills: ["React.js", "Node.js", "MongoDB"],
        },
        {
            id: 3,
            title: "AI Engineering Project",
            type: "Industry Project",
            location: "Hybrid",
            stipend: "Certificate + PPO",
            applicants: 22,
            status: "Open",
            skills: ["Python", "Machine Learning", "TensorFlow"],
        },
    ]);

    const [newOpportunity, setNewOpportunity] = useState({
        title: "",
        type: "Internship",
        location: "",
        stipend: "",
        skills: "",
    });

    // --------------------------------------------------
    // CANDIDATE PIPELINE
    // --------------------------------------------------

    const [pipeline, setPipeline] = useState([
        {
            stage: "Discovered",
            count: 42,
            color: "blue",
        },
        {
            stage: "Contacted",
            count: 28,
            color: "purple",
        },
        {
            stage: "Applied",
            count: 18,
            color: "yellow",
        },
        {
            stage: "Shortlisted",
            count: 10,
            color: "orange",
        },
        {
            stage: "Selected",
            count: 5,
            color: "green",
        },
    ]);

    // --------------------------------------------------
    // EVALUATION
    // --------------------------------------------------

    const [evaluation, setEvaluation] = useState({
        technical: 85,
        problemSolving: 82,
        communication: 76,
        teamwork: 88,
        projectPerformance: 91,
    });

    // --------------------------------------------------
    // FEEDBACK
    // --------------------------------------------------

    const [feedback, setFeedback] = useState({
        candidate: "Satyam Kumar",
        technicalSkills: 4,
        communication: 4,
        problemSolving: 5,
        teamwork: 4,
        missingSkills: "AWS, System Design",
        recommendation:
            "Improve cloud deployment and system design knowledge.",
    });

    // --------------------------------------------------
    // GENERIC UPDATE FUNCTIONS
    // --------------------------------------------------

    const updateCompany = (field, value) => {
        setCompany((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const updateFilter = (field, value) => {
        setFilters((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const updateOpportunity = (id, field, value) => {
        setOpportunities((prev) =>
            prev.map((item) =>
                item.id === id
                    ? {
                        ...item,
                        [field]: value,
                    }
                    : item
            )
        );
    };

    const updateEvaluation = (field, value) => {
        setEvaluation((prev) => ({
            ...prev,
            [field]: Number(value),
        }));
    };

    const updateFeedback = (field, value) => {
        setFeedback((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    // --------------------------------------------------
    // ADD OPPORTUNITY
    // --------------------------------------------------

    const addOpportunity = () => {
        if (!newOpportunity.title.trim()) {
            alert("Please enter opportunity title");
            return;
        }

        const opportunity = {
            id: Date.now(),
            title: newOpportunity.title,
            type: newOpportunity.type,
            location: newOpportunity.location,
            stipend: newOpportunity.stipend,
            applicants: 0,
            status: "Open",
            skills: newOpportunity.skills
                .split(",")
                .map((skill) => skill.trim())
                .filter(Boolean),
        };

        setOpportunities((prev) => [...prev, opportunity]);

        setSummary((prev) => ({
            ...prev,
            openOpportunities: prev.openOpportunities + 1,
        }));

        setNewOpportunity({
            title: "",
            type: "Internship",
            location: "",
            stipend: "",
            skills: "",
        });
    };

    const deleteOpportunity = (id) => {
        setOpportunities((prev) =>
            prev.filter((item) => item.id !== id)
        );
    };

    // --------------------------------------------------
    // NAVIGATION
    // --------------------------------------------------

    const scrollToSection = (id) => {
        const section = document.getElementById(id);

        if (!section) return;

        setMobileMenuOpen(false);

        gsap.to(window, {
            duration: 1,
            scrollTo: {
                y: section,
                offsetY: 80,
            },
            ease: "power3.inOut",
        });
    };

    const navigation = [
        {
            id: "dashboard",
            label: "Dashboard",
            icon: LayoutDashboard,
        },
        {
            id: "talent",
            label: "Talent Discovery",
            icon: Users,
        },
        {
            id: "matching",
            label: "AI Matching",
            icon: Brain,
        },
        {
            id: "opportunities",
            label: "Projects & Jobs",
            icon: BriefcaseBusiness,
        },
        {
            id: "pipeline",
            label: "Candidate Pipeline",
            icon: GitBranch,
        },
        {
            id: "evaluation",
            label: "Evaluation",
            icon: Star,
        },
        {
            id: "feedback",
            label: "Feedback",
            icon: MessageSquare,
        },
        {
            id: "notifications",
            label: "Notifications",
            icon: Bell,
        },
        {
            id: "settings",
            label: "Settings",
            icon: Settings,
        },
    ];

    // --------------------------------------------------
    // GSAP
    // --------------------------------------------------

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".dashboard-header", {
                y: -40,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
            });

            gsap.from(".hero-content", {
                y: 50,
                opacity: 0,
                duration: 1.1,
                delay: 0.2,
                ease: "power3.out",
            });

            gsap.from(".summary-card", {
                y: 40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.12,
                delay: 0.4,
                ease: "power3.out",
            });

            gsap.utils.toArray(".dashboard-section").forEach((section) => {
                gsap.from(section, {
                    y: 60,
                    opacity: 0,
                    duration: 0.9,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                });
            });

            gsap.utils.toArray(".skill-bar").forEach((bar) => {
                const width = bar.dataset.width;

                gsap.fromTo(
                    bar,
                    { width: "0%" },
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

            navigation.forEach((item) => {
                ScrollTrigger.create({
                    trigger: `#${item.id}`,
                    start: "top 40%",
                    end: "bottom 40%",
                    onEnter: () => setActiveSection(item.id),
                    onEnterBack: () => setActiveSection(item.id),
                });
            });
        }, pageRef);

        return () => ctx.revert();
    }, []);

    // --------------------------------------------------
    // FILTER CANDIDATES
    // --------------------------------------------------

    const filteredCandidates = candidates.filter((candidate) => {
        const skillMatch =
            !filters.skill ||
            candidate.skills.some((skill) =>
                skill.toLowerCase().includes(filters.skill.toLowerCase())
            );

        const branchMatch =
            filters.branch === "All Branches" ||
            candidate.branch === filters.branch;

        const proficiencyMatch =
            filters.proficiency === "All Levels" ||
            candidate.proficiency === filters.proficiency;

        const certificationMatch =
            !filters.certification ||
            candidate.certifications.some((cert) =>
                cert
                    .toLowerCase()
                    .includes(filters.certification.toLowerCase())
            );

        return (
            skillMatch &&
            branchMatch &&
            proficiencyMatch &&
            certificationMatch
        );
    });

    return (
        <div
            ref={pageRef}
            className="min-h-screen bg-slate-950 text-white"
        >
            {/* =====================================================
          MOBILE MENU
      ====================================================== */}

            {mobileMenuOpen && (
                <div className="fixed inset-0 z-50 lg:hidden">
                    <div
                        className="absolute inset-0 bg-black/70"
                        onClick={() => setMobileMenuOpen(false)}
                    />

                    <aside className="relative w-72 h-full bg-slate-900 border-r border-slate-800 p-5">
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-xl bg-blue-600">
                                    <Building2 size={22} />
                                </div>

                                <div>
                                    <h1 className="font-bold">EduConnect</h1>
                                    <p className="text-xs text-slate-400">
                                        Industry Portal
                                    </p>
                                </div>
                            </div>

                            <button
                                onClick={() => setMobileMenuOpen(false)}
                                className="p-2 hover:bg-slate-800 rounded-lg"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <Navigation
                            navigation={navigation}
                            activeSection={activeSection}
                            scrollToSection={scrollToSection}
                        />
                    </aside>
                </div>
            )}

            {/* =====================================================
          SIDEBAR
      ====================================================== */}

            <aside className="hidden lg:flex fixed left-0 top-0 bottom-0 w-72 bg-slate-900 border-r border-slate-800 flex-col z-40">
                <div className="p-6 border-b border-slate-800">
                    <div className="flex items-center gap-3">
                        <div className="p-2.5 bg-blue-600 rounded-xl">
                            <Building2 size={24} />
                        </div>

                        <div>
                            <h1 className="font-bold text-lg">
                                EduConnect
                            </h1>
                            <p className="text-xs text-slate-400">
                                Industry Portal
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex-1 p-4 overflow-y-auto">
                    <Navigation
                        navigation={navigation}
                        activeSection={activeSection}
                        scrollToSection={scrollToSection}
                    />
                </div>

                <div className="p-4 border-t border-slate-800">
                    <div className="flex items-center gap-3 p-3 bg-slate-800/70 rounded-xl">
                        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold">
                            TN
                        </div>

                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold truncate">
                                {company.name}
                            </p>

                            <p className="text-xs text-slate-400 truncate">
                                Industry Partner
                            </p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* =====================================================
          MAIN
      ====================================================== */}

            <main className="lg:ml-72">
                {/* HEADER */}

                <header className="dashboard-header sticky top-0 z-30 bg-slate-950/90 backdrop-blur-xl border-b border-slate-800">
                    <div className="px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => setMobileMenuOpen(true)}
                                className="lg:hidden p-2 rounded-lg bg-slate-800"
                            >
                                <Menu size={22} />
                            </button>

                            <div>
                                <p className="text-xs text-slate-500">
                                    INDUSTRY DASHBOARD
                                </p>

                                <h2 className="text-lg font-bold">
                                    Talent & Hiring Intelligence
                                </h2>
                            </div>
                        </div>

                        <div className="hidden sm:flex items-center gap-3">
                            <div className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800">
                                <span className="text-sm text-slate-400">
                                    Industry:
                                </span>{" "}
                                <span className="text-sm font-semibold">
                                    {company.name}
                                </span>
                            </div>

                            <button className="relative p-2.5 bg-slate-900 border border-slate-800 rounded-xl">
                                <Bell size={19} />

                                <span className="absolute -top-1 -right-1 w-4 h-4 text-[9px] rounded-full bg-red-500 flex items-center justify-center">
                                    3
                                </span>
                            </button>
                        </div>
                    </div>
                </header>

                {/* =====================================================
            HERO
        ====================================================== */}

                <section
                    id="dashboard"
                    className="px-4 sm:px-6 lg:px-8 pt-10 pb-8"
                >
                    <div className="hero-content max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-8 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm mb-5">
                                    <Sparkles size={15} />
                                    Industry Talent Intelligence
                                </div>

                                <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
                                    Hire smarter.
                                    <br />
                                    <span className="text-blue-500">
                                        Build better talent.
                                    </span>
                                </h1>

                                <p className="mt-5 text-slate-400 max-w-xl leading-relaxed">
                                    Discover skilled students, match them with
                                    industry requirements, evaluate their
                                    performance and send actionable feedback back
                                    into the education ecosystem.
                                </p>

                                <div className="flex flex-wrap gap-3 mt-7">
                                    <button
                                        onClick={() => scrollToSection("talent")}
                                        className="px-5 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl font-semibold flex items-center gap-2 transition"
                                    >
                                        Discover Talent
                                        <ArrowRight size={17} />
                                    </button>

                                    <button
                                        onClick={() => scrollToSection("opportunities")}
                                        className="px-5 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl font-semibold"
                                    >
                                        Post Opportunity
                                    </button>
                                </div>
                            </div>

                            {/* ECOSYSTEM FLOW */}

                            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                                <p className="text-sm text-slate-400 mb-5">
                                    Industry → Education Feedback Loop
                                </p>

                                <div className="space-y-3">
                                    {[
                                        ["01", "Industry Requirements", "blue"],
                                        ["02", "AI Candidate Matching", "purple"],
                                        ["03", "Candidate Evaluation", "orange"],
                                        ["04", "Skill Gap Feedback", "green"],
                                        ["05", "Academic Improvement", "cyan"],
                                    ].map(([number, title], index) => (
                                        <div
                                            key={title}
                                            className="flex items-center gap-3"
                                        >
                                            <div className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-xs font-bold text-blue-400">
                                                {number}
                                            </div>

                                            <div className="flex-1 h-px bg-slate-800">
                                                <div className="h-full bg-blue-500 w-full opacity-40" />
                                            </div>

                                            <div className="text-sm font-medium min-w-[170px]">
                                                {title}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
            SUMMARY CARDS
        ====================================================== */}

                <section className="px-4 sm:px-6 lg:px-8 pb-10">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                        <SummaryCard
                            icon={BriefcaseBusiness}
                            title="Open Opportunities"
                            value={summary.openOpportunities}
                            subtitle="+3 this month"
                        />

                        <SummaryCard
                            icon={Target}
                            title="Matched Candidates"
                            value={summary.matchedCandidates}
                            subtitle="+18% match rate"
                        />

                        <SummaryCard
                            icon={Code2}
                            title="Active Projects"
                            value={summary.activeProjects}
                            subtitle="Across 4 institutions"
                        />

                        <SummaryCard
                            icon={TrendingUp}
                            title="Hiring Pipeline"
                            value={summary.hiringPipeline}
                            subtitle="5 selected"
                        />
                    </div>
                </section>

                {/* =====================================================
            TALENT DISCOVERY
        ====================================================== */}

                <section
                    id="talent"
                    className="dashboard-section px-4 sm:px-6 lg:px-8 py-12"
                >
                    <div className="max-w-7xl mx-auto">
                        <SectionHeader
                            number="01"
                            title="Talent Discovery"
                            subtitle="Find students based on real industry requirements."
                            icon={Search}
                        />

                        {/* FILTERS */}

                        <div className="mt-7 bg-slate-900 border border-slate-800 rounded-2xl p-5">
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                                <Input
                                    label="Search Skill"
                                    value={filters.skill}
                                    onChange={(e) =>
                                        updateFilter("skill", e.target.value)
                                    }
                                    placeholder="React, Python..."
                                />

                                <Select
                                    label="Branch"
                                    value={filters.branch}
                                    onChange={(e) =>
                                        updateFilter("branch", e.target.value)
                                    }
                                    options={[
                                        "All Branches",
                                        "CSE",
                                        "ECE",
                                        "EEE",
                                        "ME",
                                    ]}
                                />

                                <Select
                                    label="Proficiency"
                                    value={filters.proficiency}
                                    onChange={(e) =>
                                        updateFilter(
                                            "proficiency",
                                            e.target.value
                                        )
                                    }
                                    options={[
                                        "All Levels",
                                        "Beginner",
                                        "Intermediate",
                                        "Advanced",
                                    ]}
                                />

                                <Input
                                    label="Certification"
                                    value={filters.certification}
                                    onChange={(e) =>
                                        updateFilter(
                                            "certification",
                                            e.target.value
                                        )
                                    }
                                    placeholder="AWS, IoT..."
                                />
                            </div>
                        </div>

                        {/* CANDIDATES */}

                        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5 mt-6">
                            {filteredCandidates.map((candidate) => (
                                <CandidateCard
                                    key={candidate.id}
                                    candidate={candidate}
                                    onSelect={() => {
                                        setSelectedCandidate(candidate);
                                        scrollToSection("matching");
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* =====================================================
            AI MATCHING
        ====================================================== */}

                <section
                    id="matching"
                    className="dashboard-section px-4 sm:px-6 lg:px-8 py-12 bg-slate-900/40"
                >
                    <div className="max-w-7xl mx-auto">
                        <SectionHeader
                            number="02"
                            title="AI Candidate Matching"
                            subtitle="Understand why a candidate matches your opportunity."
                            icon={Brain}
                        />

                        <div className="grid lg:grid-cols-3 gap-6 mt-7">
                            {/* JOB */}

                            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400">
                                        <BriefcaseBusiness size={21} />
                                    </div>

                                    <div>
                                        <p className="text-xs text-slate-500">
                                            MATCHING AGAINST
                                        </p>

                                        <h3 className="font-bold">
                                            {matchingJob.title}
                                        </h3>
                                    </div>
                                </div>

                                <p className="text-sm text-slate-400 mb-4">
                                    Required Skills
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {matchingJob.requiredSkills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-2.5 py-1 rounded-lg bg-slate-800 text-xs text-slate-300"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* MATCH SCORE */}

                            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col items-center justify-center">
                                <p className="text-sm text-slate-400">
                                    AI Match Score
                                </p>

                                <div className="relative w-36 h-36 my-5">
                                    <div className="absolute inset-0 rounded-full border-[12px] border-slate-800" />

                                    <div
                                        className="absolute inset-0 rounded-full border-[12px] border-blue-500"
                                        style={{
                                            clipPath:
                                                "polygon(0 0, 100% 0, 100% 94%, 0 94%)",
                                        }}
                                    />

                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-4xl font-bold text-blue-400">
                                            94%
                                        </span>
                                    </div>
                                </div>

                                <p className="text-center text-sm text-slate-400">
                                    Excellent match for this opportunity
                                </p>
                            </div>

                            {/* EXPLANATION */}

                            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="w-11 h-11 rounded-full bg-blue-600 flex items-center justify-center font-bold">
                                        {selectedCandidate?.name
                                            ?.split(" ")
                                            .map((n) => n[0])
                                            .join("")}
                                    </div>

                                    <div>
                                        <h3 className="font-bold">
                                            {selectedCandidate?.name}
                                        </h3>

                                        <p className="text-xs text-slate-400">
                                            {selectedCandidate?.branch} •{" "}
                                            {selectedCandidate?.university}
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <MatchRow
                                        title="Technical Skills"
                                        value="96%"
                                        positive
                                    />

                                    <MatchRow
                                        title="Project Experience"
                                        value="91%"
                                        positive
                                    />

                                    <MatchRow
                                        title="Certification"
                                        value="82%"
                                        positive
                                    />

                                    <MatchRow
                                        title="Cloud Skills"
                                        value="52%"
                                        positive={false}
                                    />
                                </div>

                                <div className="mt-5 p-3 rounded-xl bg-orange-500/10 border border-orange-500/20">
                                    <p className="text-xs text-orange-400 font-medium">
                                        Skill Gap
                                    </p>

                                    <p className="text-sm text-slate-300 mt-1">
                                        Candidate needs stronger AWS and cloud
                                        deployment experience.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
            OPPORTUNITIES
        ====================================================== */}

                <section
                    id="opportunities"
                    className="dashboard-section px-4 sm:px-6 lg:px-8 py-12"
                >
                    <div className="max-w-7xl mx-auto">
                        <SectionHeader
                            number="03"
                            title="Projects & Internships"
                            subtitle="Create opportunities with clearly defined skill requirements."
                            icon={BriefcaseBusiness}
                        />

                        {/* CREATE */}

                        <div className="mt-7 bg-slate-900 border border-slate-800 rounded-2xl p-6">
                            <div className="flex items-center gap-2 mb-5">
                                <Plus size={18} className="text-blue-400" />
                                <h3 className="font-semibold">
                                    Post New Opportunity
                                </h3>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
                                <Input
                                    label="Title"
                                    value={newOpportunity.title}
                                    onChange={(e) =>
                                        setNewOpportunity((prev) => ({
                                            ...prev,
                                            title: e.target.value,
                                        }))
                                    }
                                    placeholder="Frontend Intern"
                                />

                                <Select
                                    label="Type"
                                    value={newOpportunity.type}
                                    onChange={(e) =>
                                        setNewOpportunity((prev) => ({
                                            ...prev,
                                            type: e.target.value,
                                        }))
                                    }
                                    options={[
                                        "Internship",
                                        "Industry Project",
                                        "Full Time Job",
                                    ]}
                                />

                                <Input
                                    label="Location"
                                    value={newOpportunity.location}
                                    onChange={(e) =>
                                        setNewOpportunity((prev) => ({
                                            ...prev,
                                            location: e.target.value,
                                        }))
                                    }
                                    placeholder="Remote"
                                />

                                <Input
                                    label="Stipend / Package"
                                    value={newOpportunity.stipend}
                                    onChange={(e) =>
                                        setNewOpportunity((prev) => ({
                                            ...prev,
                                            stipend: e.target.value,
                                        }))
                                    }
                                    placeholder="₹30K/month"
                                />

                                <Input
                                    label="Required Skills"
                                    value={newOpportunity.skills}
                                    onChange={(e) =>
                                        setNewOpportunity((prev) => ({
                                            ...prev,
                                            skills: e.target.value,
                                        }))
                                    }
                                    placeholder="React, Node, MongoDB"
                                />
                            </div>

                            <button
                                onClick={addOpportunity}
                                className="mt-5 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 rounded-xl font-semibold flex items-center gap-2"
                            >
                                <Plus size={17} />
                                Post Opportunity
                            </button>
                        </div>

                        {/* OPPORTUNITY LIST */}

                        <div className="space-y-4 mt-6">
                            {opportunities.map((item) => (
                                <div
                                    key={item.id}
                                    className="bg-slate-900 border border-slate-800 rounded-2xl p-5"
                                >
                                    <div className="flex flex-col lg:flex-row lg:items-center gap-5">
                                        <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0">
                                            <BriefcaseBusiness size={22} />
                                        </div>

                                        <div className="flex-1">
                                            <div className="flex flex-wrap items-center gap-2">
                                                <input
                                                    value={item.title}
                                                    onChange={(e) =>
                                                        updateOpportunity(
                                                            item.id,
                                                            "title",
                                                            e.target.value
                                                        )
                                                    }
                                                    className="bg-transparent border-b border-transparent focus:border-blue-500 outline-none font-bold text-lg"
                                                />

                                                <span className="px-2 py-1 bg-green-500/10 text-green-400 rounded-md text-xs">
                                                    {item.status}
                                                </span>
                                            </div>

                                            <div className="flex flex-wrap gap-4 mt-2 text-sm text-slate-400">
                                                <span className="flex items-center gap-1">
                                                    <FileText size={14} />
                                                    {item.type}
                                                </span>

                                                <span className="flex items-center gap-1">
                                                    <MapPin size={14} />
                                                    {item.location}
                                                </span>

                                                <span>
                                                    {item.stipend}
                                                </span>

                                                <span>
                                                    {item.applicants} applicants
                                                </span>
                                            </div>

                                            <div className="flex flex-wrap gap-2 mt-3">
                                                {item.skills.map((skill) => (
                                                    <span
                                                        key={skill}
                                                        className="px-2.5 py-1 bg-slate-800 rounded-lg text-xs text-slate-300"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="flex gap-2">
                                            <button className="p-2.5 bg-slate-800 hover:bg-slate-700 rounded-lg">
                                                <Edit3 size={17} />
                                            </button>

                                            <button
                                                onClick={() =>
                                                    deleteOpportunity(item.id)
                                                }
                                                className="p-2.5 bg-red-500/10 text-red-400 hover:bg-red-500/20 rounded-lg"
                                            >
                                                <Trash2 size={17} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* =====================================================
            PIPELINE
        ====================================================== */}

                <section
                    id="pipeline"
                    className="dashboard-section px-4 sm:px-6 lg:px-8 py-12 bg-slate-900/40"
                >
                    <div className="max-w-7xl mx-auto">
                        <SectionHeader
                            number="04"
                            title="Candidate Pipeline"
                            subtitle="Track candidates from discovery to selection."
                            icon={GitBranch}
                        />

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-7">
                            {pipeline.map((stage, index) => (
                                <div
                                    key={stage.stage}
                                    className="bg-slate-900 border border-slate-800 rounded-2xl p-5"
                                >
                                    <div className="flex items-center justify-between">
                                        <p className="text-sm text-slate-400">
                                            {stage.stage}
                                        </p>

                                        <span className="text-xs text-slate-500">
                                            0{index + 1}
                                        </span>
                                    </div>

                                    <p className="text-3xl font-bold mt-4">
                                        {stage.count}
                                    </p>

                                    <div className="mt-4 h-2 bg-slate-800 rounded-full overflow-hidden">
                                        <div
                                            className="skill-bar h-full bg-blue-500 rounded-full"
                                            data-width={Math.min(
                                                stage.count * 2,
                                                100
                                            )}
                                        />
                                    </div>

                                    <p className="text-xs text-slate-500 mt-2">
                                        candidates
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* =====================================================
            EVALUATION
        ====================================================== */}

                <section
                    id="evaluation"
                    className="dashboard-section px-4 sm:px-6 lg:px-8 py-12"
                >
                    <div className="max-w-7xl mx-auto">
                        <SectionHeader
                            number="05"
                            title="Candidate Evaluation"
                            subtitle="Evaluate candidates beyond resumes."
                            icon={Star}
                        />

                        <div className="grid lg:grid-cols-2 gap-6 mt-7">
                            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                                <div className="flex items-center gap-4 mb-7">
                                    <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-xl font-bold">
                                        SK
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-bold">
                                            {selectedCandidate?.name}
                                        </h3>

                                        <p className="text-sm text-slate-400">
                                            Full Stack Developer Intern
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <EvaluationSlider
                                        title="Technical Skills"
                                        value={evaluation.technical}
                                        onChange={(value) =>
                                            updateEvaluation(
                                                "technical",
                                                value
                                            )
                                        }
                                    />

                                    <EvaluationSlider
                                        title="Problem Solving"
                                        value={evaluation.problemSolving}
                                        onChange={(value) =>
                                            updateEvaluation(
                                                "problemSolving",
                                                value
                                            )
                                        }
                                    />

                                    <EvaluationSlider
                                        title="Communication"
                                        value={evaluation.communication}
                                        onChange={(value) =>
                                            updateEvaluation(
                                                "communication",
                                                value
                                            )
                                        }
                                    />

                                    <EvaluationSlider
                                        title="Teamwork"
                                        value={evaluation.teamwork}
                                        onChange={(value) =>
                                            updateEvaluation(
                                                "teamwork",
                                                value
                                            )
                                        }
                                    />

                                    <EvaluationSlider
                                        title="Project Performance"
                                        value={evaluation.projectPerformance}
                                        onChange={(value) =>
                                            updateEvaluation(
                                                "projectPerformance",
                                                value
                                            )
                                        }
                                    />
                                </div>
                            </div>

                            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                                <h3 className="font-bold text-lg mb-5">
                                    Evaluation Summary
                                </h3>

                                <div className="grid grid-cols-2 gap-4">
                                    <Metric
                                        title="Technical"
                                        value={`${evaluation.technical}%`}
                                    />

                                    <Metric
                                        title="Problem Solving"
                                        value={`${evaluation.problemSolving}%`}
                                    />

                                    <Metric
                                        title="Communication"
                                        value={`${evaluation.communication}%`}
                                    />

                                    <Metric
                                        title="Teamwork"
                                        value={`${evaluation.teamwork}%`}
                                    />
                                </div>

                                <div className="mt-6 p-5 rounded-xl bg-blue-500/10 border border-blue-500/20">
                                    <div className="flex items-center gap-2 text-blue-400">
                                        <Award size={18} />
                                        <span className="font-semibold">
                                            Overall Assessment
                                        </span>
                                    </div>

                                    <p className="text-3xl font-bold mt-2">
                                        {Math.round(
                                            Object.values(evaluation).reduce(
                                                (a, b) => a + b,
                                                0
                                            ) / Object.values(evaluation).length
                                        )}
                                        %
                                    </p>

                                    <p className="text-sm text-slate-400 mt-2">
                                        Strong candidate with good project
                                        execution and teamwork.
                                    </p>
                                </div>

                                <button className="mt-6 w-full py-3 bg-blue-600 hover:bg-blue-500 rounded-xl font-semibold flex items-center justify-center gap-2">
                                    <Save size={17} />
                                    Save Evaluation
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
            FEEDBACK
        ====================================================== */}

                <section
                    id="feedback"
                    className="dashboard-section px-4 sm:px-6 lg:px-8 py-12 bg-slate-900/40"
                >
                    <div className="max-w-7xl mx-auto">
                        <SectionHeader
                            number="06"
                            title="Industry Feedback"
                            subtitle="Turn hiring experience into actionable academic intelligence."
                            icon={MessageSquare}
                        />

                        <div className="grid lg:grid-cols-2 gap-6 mt-7">
                            {/* FORM */}

                            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                                <h3 className="font-bold text-lg mb-6">
                                    Candidate Feedback
                                </h3>

                                <div className="space-y-5">
                                    <Input
                                        label="Candidate"
                                        value={feedback.candidate}
                                        onChange={(e) =>
                                            updateFeedback(
                                                "candidate",
                                                e.target.value
                                            )
                                        }
                                    />

                                    <RatingInput
                                        title="Technical Skills"
                                        value={feedback.technicalSkills}
                                        onChange={(value) =>
                                            updateFeedback(
                                                "technicalSkills",
                                                value
                                            )
                                        }
                                    />

                                    <RatingInput
                                        title="Communication"
                                        value={feedback.communication}
                                        onChange={(value) =>
                                            updateFeedback(
                                                "communication",
                                                value
                                            )
                                        }
                                    />

                                    <RatingInput
                                        title="Problem Solving"
                                        value={feedback.problemSolving}
                                        onChange={(value) =>
                                            updateFeedback(
                                                "problemSolving",
                                                value
                                            )
                                        }
                                    />

                                    <RatingInput
                                        title="Teamwork"
                                        value={feedback.teamwork}
                                        onChange={(value) =>
                                            updateFeedback(
                                                "teamwork",
                                                value
                                            )
                                        }
                                    />

                                    <Input
                                        label="Missing Skills"
                                        value={feedback.missingSkills}
                                        onChange={(e) =>
                                            updateFeedback(
                                                "missingSkills",
                                                e.target.value
                                            )
                                        }
                                    />

                                    <div>
                                        <label className="block text-sm text-slate-400 mb-2">
                                            Recommended Improvement
                                        </label>

                                        <textarea
                                            value={feedback.recommendation}
                                            onChange={(e) =>
                                                updateFeedback(
                                                    "recommendation",
                                                    e.target.value
                                                )
                                            }
                                            rows="4"
                                            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-blue-500 resize-none"
                                        />
                                    </div>

                                    <button className="w-full py-3 bg-blue-600 hover:bg-blue-500 rounded-xl font-semibold flex items-center justify-center gap-2">
                                        <Send size={17} />
                                        Send Feedback to Institution
                                    </button>
                                </div>
                            </div>

                            {/* FEEDBACK IMPACT */}

                            <div className="space-y-5">
                                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                                    <div className="flex items-center gap-3 mb-5">
                                        <div className="p-3 rounded-xl bg-orange-500/10 text-orange-400">
                                            <TrendingUp size={22} />
                                        </div>

                                        <div>
                                            <h3 className="font-bold">
                                                Feedback Impact
                                            </h3>

                                            <p className="text-xs text-slate-500">
                                                Based on industry observations
                                            </p>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <FeedbackImpact
                                            skill="Cloud Computing"
                                            demand={91}
                                            gap={62}
                                        />

                                        <FeedbackImpact
                                            skill="System Design"
                                            demand={87}
                                            gap={55}
                                        />

                                        <FeedbackImpact
                                            skill="Machine Learning"
                                            demand={84}
                                            gap={48}
                                        />

                                        <FeedbackImpact
                                            skill="DevOps"
                                            demand={79}
                                            gap={42}
                                        />
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/20 rounded-2xl p-6">
                                    <div className="flex items-center gap-3">
                                        <GraduationCap
                                            className="text-blue-400"
                                            size={24}
                                        />

                                        <h3 className="font-bold">
                                            Institutional Recommendation
                                        </h3>
                                    </div>

                                    <p className="text-slate-300 mt-4 leading-relaxed">
                                        Industry feedback indicates that students
                                        need more practical exposure to cloud
                                        deployment, system design and DevOps.
                                    </p>

                                    <div className="mt-5 p-4 rounded-xl bg-slate-950/50">
                                        <p className="text-xs text-slate-500">
                                            RECOMMENDED ACTION
                                        </p>

                                        <p className="font-semibold mt-1">
                                            Introduce Cloud + DevOps industry
                                            projects into the curriculum.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================
            NOTIFICATIONS
        ====================================================== */}

                <section
                    id="notifications"
                    className="dashboard-section px-4 sm:px-6 lg:px-8 py-12"
                >
                    <div className="max-w-7xl mx-auto">
                        <SectionHeader
                            number="07"
                            title="Notifications"
                            subtitle="Stay updated with candidates and collaborations."
                            icon={Bell}
                        />

                        <div className="mt-7 space-y-3">
                            <Notification
                                icon={Users}
                                title="18 new candidates matched"
                                text="Candidates matching your Full Stack opportunity are available."
                                time="10 min ago"
                            />

                            <Notification
                                icon={MessageSquare}
                                title="Institution feedback request"
                                text="NIT Agartala requested industry feedback on student skills."
                                time="2 hours ago"
                            />

                            <Notification
                                icon={BriefcaseBusiness}
                                title="New project application"
                                text="A student applied for your AI Engineering project."
                                time="5 hours ago"
                            />
                        </div>
                    </div>
                </section>

                {/* =====================================================
            SETTINGS
        ====================================================== */}

                <section
                    id="settings"
                    className="dashboard-section px-4 sm:px-6 lg:px-8 py-12 bg-slate-900/40"
                >
                    <div className="max-w-7xl mx-auto">
                        <SectionHeader
                            number="08"
                            title="Settings"
                            subtitle="Manage your industry profile."
                            icon={Settings}
                        />

                        <div className="mt-7 bg-slate-900 border border-slate-800 rounded-2xl p-6">
                            <div className="grid md:grid-cols-2 gap-5">
                                <Input
                                    label="Company Name"
                                    value={company.name}
                                    onChange={(e) =>
                                        updateCompany("name", e.target.value)
                                    }
                                />

                                <Input
                                    label="Industry"
                                    value={company.industry}
                                    onChange={(e) =>
                                        updateCompany(
                                            "industry",
                                            e.target.value
                                        )
                                    }
                                />

                                <Input
                                    label="Location"
                                    value={company.location}
                                    onChange={(e) =>
                                        updateCompany(
                                            "location",
                                            e.target.value
                                        )
                                    }
                                />

                                <Input
                                    label="Company Size"
                                    value={company.employees}
                                    onChange={(e) =>
                                        updateCompany(
                                            "employees",
                                            e.target.value
                                        )
                                    }
                                />
                            </div>

                            <button className="mt-6 px-5 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl font-semibold flex items-center gap-2">
                                <Save size={17} />
                                Save Company Profile
                            </button>
                        </div>
                    </div>
                </section>

                {/* =====================================================
            CTA
        ====================================================== */}

                <section className="px-4 sm:px-6 lg:px-8 py-16">
                    <div className="max-w-7xl mx-auto">
                        <div className="rounded-3xl border border-blue-500/20 bg-gradient-to-r from-blue-600/20 via-purple-600/10 to-slate-900 p-8 sm:p-12 text-center">
                            <Sparkles
                                className="mx-auto text-blue-400"
                                size={32}
                            />

                            <h2 className="text-3xl font-bold mt-5">
                                Don't just hire talent.
                                <br />
                                <span className="text-blue-400">
                                    Help build the talent ecosystem.
                                </span>
                            </h2>

                            <p className="text-slate-400 max-w-2xl mx-auto mt-4">
                                Every candidate evaluation and industry
                                feedback can help institutions understand what
                                companies actually need.
                            </p>

                            <button
                                onClick={() => scrollToSection("feedback")}
                                className="mt-7 px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl font-semibold"
                            >
                                Give Industry Feedback
                            </button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

/* =========================================================
   NAVIGATION
========================================================= */

function Navigation({
    navigation,
    activeSection,
    scrollToSection,
}) {
    return (
        <nav className="space-y-1">
            {navigation.map((item) => {
                const Icon = item.icon;

                const active = activeSection === item.id;

                return (
                    <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition ${active
                                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                                : "text-slate-400 hover:text-white hover:bg-slate-800"
                            }`}
                    >
                        <Icon size={18} />
                        <span>{item.label}</span>
                    </button>
                );
            })}
        </nav>
    );
}

/* =========================================================
   SUMMARY CARD
========================================================= */

function SummaryCard({
    icon: Icon,
    title,
    value,
    subtitle,
}) {
    return (
        <div className="summary-card bg-slate-900 border border-slate-800 rounded-2xl p-5 hover:border-slate-700 transition">
            <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400">
                    <Icon size={21} />
                </div>

                <TrendingUp
                    size={17}
                    className="text-green-400"
                />
            </div>

            <p className="text-sm text-slate-400 mt-5">
                {title}
            </p>

            <p className="text-3xl font-bold mt-1">
                {value}
            </p>

            <p className="text-xs text-slate-500 mt-2">
                {subtitle}
            </p>
        </div>
    );
}

/* =========================================================
   SECTION HEADER
========================================================= */

function SectionHeader({
    number,
    title,
    subtitle,
    icon: Icon,
}) {
    return (
        <div>
            <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-blue-400">
                    {number}
                </span>

                <div className="h-px w-10 bg-blue-500/50" />

                <Icon size={19} className="text-blue-400" />

                <span className="text-xs uppercase tracking-wider text-slate-500">
                    Industry Intelligence
                </span>
            </div>

            <h2 className="text-3xl font-bold mt-3">
                {title}
            </h2>

            <p className="text-slate-400 mt-2">
                {subtitle}
            </p>
        </div>
    );
}

/* =========================================================
   INPUT
========================================================= */

function Input({
    label,
    value,
    onChange,
    placeholder = "",
}) {
    return (
        <div>
            <label className="block text-sm text-slate-400 mb-2">
                {label}
            </label>

            <input
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-500 transition placeholder:text-slate-600"
            />
        </div>
    );
}

/* =========================================================
   SELECT
========================================================= */

function Select({
    label,
    value,
    onChange,
    options,
}) {
    return (
        <div>
            <label className="block text-sm text-slate-400 mb-2">
                {label}
            </label>

            <select
                value={value}
                onChange={onChange}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-500"
            >
                {options.map((option) => (
                    <option key={option}>{option}</option>
                ))}
            </select>
        </div>
    );
}

/* =========================================================
   CANDIDATE CARD
========================================================= */

function CandidateCard({
    candidate,
    onSelect,
}) {
    return (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 hover:border-blue-500/40 transition">
            <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-blue-600 flex items-center justify-center font-bold">
                    {candidate.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                </div>

                <div className="min-w-0">
                    <h3 className="font-bold truncate">
                        {candidate.name}
                    </h3>

                    <p className="text-xs text-slate-500">
                        {candidate.branch} •{" "}
                        {candidate.university}
                    </p>
                </div>
            </div>

            <div className="flex items-center gap-2 mt-5 text-xs text-slate-400">
                <Award size={14} />
                {candidate.proficiency}
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
                {candidate.skills.slice(0, 4).map((skill) => (
                    <span
                        key={skill}
                        className="px-2 py-1 bg-slate-800 rounded-md text-xs"
                    >
                        {skill}
                    </span>
                ))}
            </div>

            <div className="mt-5">
                <div className="flex justify-between text-xs">
                    <span className="text-slate-500">
                        Readiness
                    </span>

                    <span className="text-blue-400 font-semibold">
                        {candidate.readiness}%
                    </span>
                </div>

                <div className="h-2 bg-slate-800 rounded-full mt-2 overflow-hidden">
                    <div
                        className="skill-bar h-full bg-blue-500 rounded-full"
                        data-width={candidate.readiness}
                    />
                </div>
            </div>

            <button
                onClick={onSelect}
                className="mt-5 w-full py-2.5 bg-slate-800 hover:bg-blue-600 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition"
            >
                View AI Match
                <ChevronRight size={16} />
            </button>
        </div>
    );
}

/* =========================================================
   MATCH ROW
========================================================= */

function MatchRow({
    title,
    value,
    positive,
}) {
    return (
        <div>
            <div className="flex justify-between text-sm mb-2">
                <span className="text-slate-400">
                    {title}
                </span>

                <span
                    className={
                        positive
                            ? "text-green-400"
                            : "text-orange-400"
                    }
                >
                    {value}
                </span>
            </div>

            <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                <div
                    className={`h-full rounded-full ${positive
                            ? "bg-green-500"
                            : "bg-orange-500"
                        }`}
                    style={{ width: value }}
                />
            </div>
        </div>
    );
}

/* =========================================================
   EVALUATION SLIDER
========================================================= */

function EvaluationSlider({
    title,
    value,
    onChange,
}) {
    return (
        <div>
            <div className="flex justify-between mb-2">
                <span className="text-sm text-slate-400">
                    {title}
                </span>

                <span className="text-sm font-semibold text-blue-400">
                    {value}%
                </span>
            </div>

            <input
                type="range"
                min="0"
                max="100"
                value={value}
                onChange={(e) =>
                    onChange(Number(e.target.value))
                }
                className="w-full accent-blue-500"
            />
        </div>
    );
}

/* =========================================================
   METRIC
========================================================= */

function Metric({
    title,
    value,
}) {
    return (
        <div className="p-4 bg-slate-800/70 rounded-xl">
            <p className="text-xs text-slate-500">
                {title}
            </p>

            <p className="text-2xl font-bold mt-1">
                {value}
            </p>
        </div>
    );
}

/* =========================================================
   RATING
========================================================= */

function RatingInput({
    title,
    value,
    onChange,
}) {
    return (
        <div>
            <div className="flex justify-between items-center">
                <label className="text-sm text-slate-400">
                    {title}
                </label>

                <span className="text-sm text-yellow-400">
                    {value}/5
                </span>
            </div>

            <div className="flex gap-2 mt-2">
                {[1, 2, 3, 4, 5].map((number) => (
                    <button
                        key={number}
                        type="button"
                        onClick={() => onChange(number)}
                        className={`p-2 rounded-lg transition ${number <= value
                                ? "bg-yellow-500/20 text-yellow-400"
                                : "bg-slate-800 text-slate-600"
                            }`}
                    >
                        <Star
                            size={18}
                            fill={
                                number <= value
                                    ? "currentColor"
                                    : "none"
                            }
                        />
                    </button>
                ))}
            </div>
        </div>
    );
}

/* =========================================================
   FEEDBACK IMPACT
========================================================= */

function FeedbackImpact({
    skill,
    demand,
    gap,
}) {
    return (
        <div>
            <div className="flex justify-between text-sm mb-2">
                <span>{skill}</span>

                <span className="text-orange-400">
                    Gap {gap}%
                </span>
            </div>

            <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                <div
                    className="h-full bg-blue-500 rounded-full"
                    style={{ width: `${demand}%` }}
                />
            </div>

            <div className="flex justify-between text-xs text-slate-500 mt-1">
                <span>Industry Demand</span>
                <span>{demand}%</span>
            </div>
        </div>
    );
}

/* =========================================================
   NOTIFICATION
========================================================= */

function Notification({
    icon: Icon,
    title,
    text,
    time,
}) {
    return (
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex gap-4">
            <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 h-fit">
                <Icon size={19} />
            </div>

            <div className="flex-1">
                <h3 className="font-semibold">
                    {title}
                </h3>

                <p className="text-sm text-slate-400 mt-1">
                    {text}
                </p>

                <p className="text-xs text-slate-600 mt-2">
                    {time}
                </p>
            </div>
        </div>
    );
}

export default Indus;