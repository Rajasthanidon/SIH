import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";

function Home() {
    const navigate = useNavigate();

    const containerRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const cardsRef = useRef([]);
    const loginRef = useRef(null);
    const blobsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Initial page animation
            const tl = gsap.timeline();

            tl.from(containerRef.current, {
                opacity: 0,
                duration: 0.5,
            })

                .from(titleRef.current, {
                    y: -60,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power3.out",
                })

                .from(
                    subtitleRef.current,
                    {
                        y: 30,
                        opacity: 0,
                        duration: 0.6,
                        ease: "power2.out",
                    },
                    "-=0.4"
                )

                .from(
                    cardsRef.current,
                    {
                        y: 80,
                        opacity: 0,
                        scale: 0.9,
                        duration: 0.7,
                        stagger: 0.15,
                        ease: "back.out(1.5)",
                    },
                    "-=0.2"
                )

                .from(
                    loginRef.current,
                    {
                        y: 30,
                        opacity: 0,
                        duration: 0.5,
                    },
                    "-=0.3"
                );

            // Floating background blobs
            blobsRef.current.forEach((blob, index) => {
                gsap.to(blob, {
                    x: index % 2 === 0 ? 80 : -80,
                    y: index % 2 === 0 ? -50 : 60,
                    duration: 4 + index,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                });
            });

            // Card hover animation
            cardsRef.current.forEach((card) => {
                const icon = card.querySelector(".role-icon");
                const button = card.querySelector(".continue-btn");

                card.addEventListener("mouseenter", () => {
                    gsap.to(card, {
                        y: -10,
                        scale: 1.025,
                        duration: 0.3,
                        ease: "power2.out",
                    });

                    gsap.to(icon, {
                        scale: 1.1,
                        rotate: 5,
                        duration: 0.3,
                    });

                    gsap.to(button, {
                        scale: 1.03,
                        duration: 0.25,
                    });
                });

                card.addEventListener("mouseleave", () => {
                    gsap.to(card, {
                        y: 0,
                        scale: 1,
                        duration: 0.3,
                        ease: "power2.out",
                    });

                    gsap.to(icon, {
                        scale: 1,
                        rotate: 0,
                        duration: 0.3,
                    });

                    gsap.to(button, {
                        scale: 1,
                        duration: 0.25,
                    });
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const roles = [
        {
            title: "I'm an Institution",
            description: "Track skills, placements & industry partnerships",
            image: "/student.png",
            path: "/Institutionsignup",
        },
        {
            title: "I'm an Academician",
            description: "Explore FDPs, research & industry collaboration",
            image: "/student.png",
            path: "/AcademicianSignup",
        },
        {
            title: "I'm an Industry",
            description: "Find talent, post opportunities & hire",
            image: "/student.png",
            path: "/IndustrySignup",
        },
        {
            title: "I'm a Student",
            description: "Find skills, internships & jobs",
            image: "/student.png",
            path: "/StudentSignup",
        },
    ];

    return (
        <div
            ref={containerRef}
            className="relative min-h-screen w-screen overflow-hidden
      bg-gradient-to-br from-[#07111f] via-[#0b1b32] to-[#07111f] bg-cover bg-center"
        >
            {/* ================= BACKGROUND OVERLAY ================= */}
            <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px]" />

            {/* ================= FLOATING BLOBS ================= */}

            <div
                ref={(el) => (blobsRef.current[0] = el)}
                className="absolute -top-20 -left-20 h-72 w-72
        rounded-full bg-blue-500/20 blur-3xl"
            />

            <div
                ref={(el) => (blobsRef.current[1] = el)}
                className="absolute top-1/3 -right-20 h-80 w-80
        rounded-full bg-purple-500/20 blur-3xl"
            />

            <div
                ref={(el) => (blobsRef.current[2] = el)}
                className="absolute -bottom-32 left-1/3 h-80 w-80
        rounded-full bg-cyan-500/10 blur-3xl"
            />

            {/* ================= MAIN CONTENT ================= */}

            <div className="relative z-10 min-h-screen flex flex-col
                      items-center justify-center px-5 py-12">

                {/* ================= HEADING ================= */}

                <div className="text-center mb-10">

                    <div
                        ref={titleRef}
                        className="mb-3"
                    >
                        <span className="text-sm uppercase tracking-[0.3em]
                             text-blue-300 font-semibold">
                            Welcome to EduConnect
                        </span>

                        <h1
                            className="mt-3 text-4xl md:text-6xl font-black
                         tracking-tight text-white"
                        >
                            Connect.
                            <span className="text-blue-400"> Collaborate.</span>
                            <br />
                            <span className="text-white">
                                Grow Together.
                            </span>
                        </h1>
                    </div>

                    <p
                        ref={subtitleRef}
                        className="max-w-2xl mx-auto text-gray-300
                       text-sm md:text-base leading-7"
                    >
                        A unified platform connecting students, academicians,
                        institutions and industries to bridge the gap between
                        academic skills and industry requirements.
                    </p>

                </div>

                {/* ================= CARDS ================= */}

                <div
                    className="grid grid-cols-1 md:grid-cols-2
                     gap-5 md:gap-6 max-w-4xl w-full"
                >

                    {roles.map((role, index) => (
                        <div
                            key={role.title}
                            ref={(el) => (cardsRef.current[index] = el)}
                            className="group relative w-full rounded-3xl
                         bg-white/[0.08]
                         backdrop-blur-xl
                         border border-white/20
                         p-7 md:p-8
                         text-center shadow-2xl
                         overflow-hidden"
                        >

                            {/* Card glow */}
                            <div
                                className="absolute inset-0 opacity-0
                           group-hover:opacity-100
                           transition-opacity duration-500
                           bg-gradient-to-br
                           from-blue-500/10
                           via-transparent
                           to-purple-500/10"
                            />

                            <div className="relative z-10">

                                {/* Icon */}
                                <div
                                    className="role-icon mx-auto mb-5
                             flex h-20 w-20 items-center
                             justify-center rounded-2xl
                             bg-gradient-to-br
                             from-blue-500 to-indigo-600
                             shadow-lg shadow-blue-500/30
                             overflow-hidden"
                                >
                                    <img
                                        src={role.image}
                                        alt={role.title}
                                        className="h-full w-full object-cover"
                                    />
                                </div>

                                {/* Title */}
                                <h2 className="text-xl md:text-2xl font-bold text-white">
                                    {role.title}
                                </h2>

                                {/* Description */}
                                <p className="mt-2 text-sm leading-6 text-gray-300
                              min-h-[48px]">
                                    {role.description}
                                </p>

                                {/* Button */}
                                <button
                                    onClick={() => navigate(role.path)}
                                    className="continue-btn mt-6 w-full
                             rounded-xl
                             bg-gradient-to-r
                             from-blue-600 to-indigo-600
                             px-6 py-3
                             font-semibold text-white
                             shadow-lg shadow-blue-600/20
                             transition-all duration-300
                             hover:from-blue-500
                             hover:to-indigo-500"
                                >
                                    Continue
                                </button>

                            </div>
                        </div>
                    ))}

                </div>

                {/* ================= LOGIN ================= */}

                <div
                    ref={loginRef}
                    className="mt-9 text-center"
                >
                    <p className="text-gray-400 text-sm">
                        Already have an account?
                    </p>

                    <button
                        type="button"
                        onClick={() => navigate("/login")}
                        className="mt-2 text-blue-400
                       hover:text-blue-300
                       font-semibold
                       transition-all
                       hover:tracking-wide"
                    >
                        Log in →
                    </button>
                </div>

                {/* ================= FOOTER ================= */}

                <p className="mt-8 text-xs text-gray-500">
                    Empowering Academia × Industry × Students
                </p>

            </div>
        </div>
    );
}

export default Home;