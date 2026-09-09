import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {


    const [formData, setFormData] = useState({
        email: "",
        password: "",
        // remember: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // try {
        //     const response = await fetch("/api/login", {

        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json",
        //         },
        //         body: JSON.stringify(formData),
        //     });


        //     const data = await response.json();

        //     console.log("Login Response:", data);

        //     if (response.ok) {
        //         alert("Login successful!");
        navigate("/StudentDashboard");
        //     } else {
        //         alert("Login failed!");
        //     }

        // } catch (error) {
        //     console.error("Error:", error);
        //     alert("Server error!");
        // }
    };


    return (
        <main className="min-h-screen bg-gradient-to-br from-[#07111f] via-[#0b1b32] to-[#07111f] text-white">

            <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">

                {/* ================= LEFT VISUAL PANEL ================= */}
                <section className="hidden lg:flex flex-col justify-between p-10 xl:p-14 bg-white/5 border-r border-white/10">

                    {/* Brand */}
                    <div className="flex items-center gap-3" onClick={() => navigate('/')}>

                        <span className="text-4xl">
                            📖
                        </span>

                        <div>
                            <h3 className="text-2xl font-bold">
                                EduConnect
                            </h3>

                            <p className="text-sm text-gray-400">
                                Collaborate. Innovate. Elevate.
                            </p>
                        </div>

                    </div>


                    {/* Main Content */}
                    <div className="max-w-xl space-y-6">

                        <h2 className="text-4xl xl:text-5xl font-bold leading-tight">

                            Welcome back to{" "}

                            <span className="text-blue-400">
                                EduConnect
                            </span>

                        </h2>

                        <p className="text-lg text-gray-400 leading-relaxed">

                            Connect with students, academicians, institutions
                            and industry professionals. Continue building
                            meaningful collaborations and opportunities.

                        </p>


                        {/* Illustration */}
                        <div className="flex justify-center py-5">

                            <img
                                src="/institution-illustration.png"
                                alt="EduConnect"
                                className="w-full max-w-md object-contain drop-shadow-2xl"
                            />

                        </div>

                    </div>


                    {/* Features */}
                    <div className="space-y-4">

                        <FeatureCard
                            icon="🎓"
                            title="Connect & collaborate"
                            description="Build meaningful academic and industry connections"
                        />

                        <FeatureCard
                            icon="🚀"
                            title="Discover opportunities"
                            description="Find internships, projects and career opportunities"
                        />

                        <FeatureCard
                            icon="🛡️"
                            title="Secure & trusted"
                            description="Your account and data are protected"
                        />

                    </div>

                </section>


                {/* ================= RIGHT LOGIN PANEL ================= */}
                <section className="flex items-center justify-center p-5 sm:p-8 lg:p-10">

                    <div className="w-full max-w-md">

                        {/* Header */}
                        <div className="text-center mb-8">

                            <div className="mx-auto w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-400/20 flex items-center justify-center text-3xl mb-5">
                                🔐
                            </div>

                            <h1 className="text-3xl sm:text-4xl font-bold">
                                Welcome Back
                            </h1>

                            <p className="text-gray-400 mt-2">
                                Login to your EduConnect account
                            </p>

                        </div>


                        {/* Login Card */}
                        <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-xl">

                            <form
                                onSubmit={handleSubmit}
                                className="space-y-6"
                            >

                                {/* Email */}
                                <div className="space-y-2">

                                    <label
                                        // htmlFor="email"
                                        className="block text-sm font-medium text-gray-300"
                                    >
                                        Email Address
                                    </label>

                                    <input
                                        id="email"
                                        name="email"
                                        // type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter your email address"
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 outline-none text-white placeholder:text-gray-500 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition"
                                    />

                                </div>


                                {/* Password */}
                                <div className="space-y-2">

                                    <div className="flex justify-between items-center">

                                        <label
                                            htmlFor="password"
                                            className="text-sm font-medium text-gray-300"
                                        >
                                            Password
                                        </label>

                                        <button
                                            type="button"
                                            className="text-sm text-blue-400 hover:text-blue-300 transition"
                                            onClick={() => navigate("/ForgotPassword")}
                                        >
                                            Forgot Password?
                                        </button>

                                    </div>

                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        placeholder="Enter your password"
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 outline-none text-white placeholder:text-gray-500 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition"
                                    />

                                </div>


                                {/* Remember Me */}
                                <div className="flex items-center gap-3">

                                    <input
                                        type="checkbox"
                                        id="remember"
                                        name="remember"
                                        checked={formData.remember}
                                        onChange={handleChange}
                                        className="w-4 h-4 accent-blue-500 cursor-pointer"
                                    />

                                    <label
                                        htmlFor="remember"
                                        className="text-sm text-gray-400 cursor-pointer"
                                    >
                                        Remember me
                                    </label>

                                </div>


                                {/* Login Button */}
                                <button
                                    type="submit"
                                    className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 transition-all duration-300 font-semibold shadow-lg shadow-blue-600/20"
                                >
                                    Login
                                </button>

                            </form>


                            {/* Divider */}



                            {/* Signup */}


                        </div>


                        {/* Role Signup Links */}
                        <div className="mt-6 text-center">

                            <p className="text-sm text-gray-500 mb-3">
                                Create an account as
                            </p>

                            <div className="flex flex-wrap justify-center gap-2">

                                <button
                                    onClick={() => navigate("/StudentSignup")}
                                    className="px-3 py-2 text-xs rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition"
                                >
                                    🎓 Student
                                </button>

                                <button
                                    onClick={() => navigate("/AcademicianSignup")}
                                    className="px-3 py-2 text-xs rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition"
                                >
                                    👨‍🏫 Academician
                                </button>

                                <button
                                    onClick={() => navigate("/InstitutionSignup")}
                                    className="px-3 py-2 text-xs rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition"
                                >
                                    🏫 Institution
                                </button>

                                <button
                                    onClick={() => navigate("/IndustrySignup")}
                                    className="px-3 py-2 text-xs rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition"
                                >
                                    🏢 Industry
                                </button>

                            </div>

                        </div>

                    </div>

                </section>

            </div >

        </main >
    );
}


/* =========================================================
   FEATURE CARD
========================================================= */

function FeatureCard({ icon, title, description }) {

    return (
        <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.04] border border-white/10">

            <div className="w-12 h-12 shrink-0 rounded-xl bg-blue-500/10 flex items-center justify-center text-2xl">
                {icon}
            </div>

            <div>

                <h4 className="font-semibold">
                    {title}
                </h4>

                <p className="text-sm text-gray-400 mt-1">
                    {description}
                </p>

            </div>

        </div>
    );
}


export default Login;