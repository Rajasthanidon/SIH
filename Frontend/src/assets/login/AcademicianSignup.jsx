import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AcademicianSignup() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobileNumber: "",
        institution: "",
        department: "",
        designation: "",
        experience: "",
        expertise: "",
        password: "",
        confirmPassword: "",
        terms: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Password check
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        navigate("/Acad");
        // Terms check
        if (!formData.terms) {
            alert("Please accept the Terms and Conditions.");
            return;
        }

        console.log("Academician Data:", formData);

        // Backend API can be added here
        // fetch("http://localhost:5000/api/academician/signup", {...})

        alert("Academician account created successfully!");
    };

    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">

            <main className="min-h-screen w-full grid grid-cols-1 lg:grid-cols-2">


                {/* LEFT VISUAL PANEL */}


                <section className="hidden lg:flex flex-col justify-between p-10 xl:p-14 bg-white/[0.04] border-r border-white/10">

                    {/* Brand */}
                    <div className="flex items-center gap-3">

                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 border border-white/10 text-2xl" onClick={() => navigate("/")}>
                            📖
                        </div>

                        <div>
                            <h3 className="text-xl font-bold">
                                EduConnect
                            </h3>

                            <p className="text-sm text-gray-400">
                                Collaborate. Innovate. Elevate.
                            </p>
                        </div>

                    </div>


                    {/* Main Content */}
                    <div className="my-10">

                        <h2 className="text-4xl xl:text-5xl font-bold leading-tight">

                            Create your academic account

                            <br />

                            <span className="text-blue-400">
                                and inspire the future
                            </span>

                        </h2>

                        <p className="mt-6 max-w-lg text-gray-400 leading-relaxed">
                            Join a vibrant ecosystem of students,
                            educators and industry leaders.
                            Together, let's build the future.
                        </p>


                        {/* Illustration */}
                        <div className="mt-10 flex justify-center">

                            <img
                                src="/institution-illustration.png"
                                alt="Educational Institution"
                                className="w-full max-w-md object-contain drop-shadow-2xl"
                            />

                        </div>

                    </div>


                    {/* Features */}
                    <div className="space-y-3">

                        <FeatureCard
                            icon="🎓"
                            title="Connect with students"
                            description="Build meaningful academic connections"
                        />

                        <FeatureCard
                            icon="💡"
                            title="Share your expertise"
                            description="Share knowledge, ideas and opportunities"
                        />

                        <FeatureCard
                            icon="🛡️"
                            title="Secure & trusted"
                            description="Your data is safe with us."
                        />

                    </div>

                </section>



                {/* RIGHT FORM PANEL */}


                <section className="flex items-center justify-center p-4 sm:p-6 lg:p-8 xl:p-12">

                    <div className="w-full max-w-3xl rounded-3xl border border-white/10 bg-white/[0.06] backdrop-blur-2xl shadow-2xl p-5 sm:p-7 lg:p-9">


                        {/* Mobile Brand */}
                        <div className="flex lg:hidden items-center gap-3 mb-8">

                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-xl">
                                📖
                            </div>

                            <div>
                                <h3 className="font-bold text-lg">
                                    EduConnect
                                </h3>

                                <p className="text-xs text-gray-400">
                                    Collaborate. Innovate. Elevate.
                                </p>
                            </div>

                        </div>


                        {/* Header */}
                        <header className="flex items-center gap-4 mb-8">

                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/20 border border-blue-400/20 text-2xl">
                                👨‍🏫
                            </div>

                            <div>

                                <h1 className="text-2xl sm:text-3xl font-bold">
                                    Academician Sign Up
                                </h1>

                                <p className="mt-1 text-sm text-gray-400">
                                    Create your account
                                </p>

                            </div>

                        </header>



                        {/* FORM */}


                        <form
                            onSubmit={handleSubmit}
                            className="space-y-6"
                        >



                            {/* PERSONAL INFORMATION */}


                            <FormSection
                                icon="👤"
                                title="Personal Information"
                            >

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                                    {/* Full Name */}
                                    <InputField
                                        label="Full Name"
                                        name="name"
                                        placeholder="Enter your full name"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />


                                    {/* Email */}
                                    <VerifyInput
                                        label="Official Email"
                                        name="email"
                                        type="email"
                                        placeholder="Enter your official email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />

                                </div>


                                {/* Mobile */}
                                <div className="mt-5">

                                    <VerifyInput
                                        label="Mobile Number"
                                        name="mobileNumber"
                                        type="tel"
                                        placeholder="Enter your mobile number"
                                        value={formData.mobileNumber}
                                        onChange={handleChange}
                                    />

                                </div>

                            </FormSection>


                            {/* PROFESSIONAL INFORMATION */}

                            <FormSection
                                icon="💼"
                                title="Professional Information"
                            >

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                                    {/* Institution */}
                                    <InputField
                                        label="Institution"
                                        name="institution"
                                        placeholder="Enter your institution"
                                        value={formData.institution}
                                        onChange={handleChange}
                                    />


                                    {/* Department */}
                                    <InputField
                                        label="Department"
                                        name="department"
                                        placeholder="Enter your department"
                                        value={formData.department}
                                        onChange={handleChange}
                                    />


                                    {/* Designation */}
                                    <SelectField
                                        label="Designation"
                                        name="designation"
                                        value={formData.designation}
                                        onChange={handleChange}
                                        options={[
                                            ["professor", "Professor"],
                                            ["associate-professor", "Associate Professor"],
                                            ["assistant-professor", "Assistant Professor"],
                                            ["lecturer", "Lecturer"],
                                            ["senior-lecturer", "Senior Lecturer"],
                                            ["research-associate", "Research Associate"],
                                            ["research-scientist", "Research Scientist"],
                                            ["visiting-faculty", "Visiting Faculty"],
                                            ["postdoctoral-researcher", "Postdoctoral Researcher"],
                                            ["other", "Other"],
                                        ]}
                                    />


                                    {/* Experience */}
                                    <InputField
                                        label="Years of Experience"
                                        name="experience"
                                        type="number"
                                        min="0"
                                        max="60"
                                        placeholder="Enter years of experience"
                                        value={formData.experience}
                                        onChange={handleChange}
                                    />

                                </div>


                                {/* Expertise */}
                                <div className="mt-5">

                                    <label
                                        htmlFor="expertise"
                                        className="mb-2 block text-sm font-medium text-gray-300"
                                    >
                                        Areas of Expertise
                                    </label>

                                    <select
                                        id="expertise"
                                        name="expertise"
                                        value={formData.expertise}
                                        onChange={handleChange}
                                        required
                                        className="w-full rounded-xl border border-white/15
                               bg-slate-900/80 px-4 py-3
                               text-white outline-none
                               transition-all duration-300
                               focus:border-blue-500
                               focus:ring-2 focus:ring-blue-500/20"
                                    >

                                        <option value="" disabled>
                                            Select your area of expertise
                                        </option>

                                        <option value="computer-science">
                                            Computer Science
                                        </option>

                                        <option value="electronics">
                                            Electronics & Communication
                                        </option>

                                        <option value="electrical">
                                            Electrical Engineering
                                        </option>

                                        <option value="mechanical">
                                            Mechanical Engineering
                                        </option>

                                        <option value="civil">
                                            Civil Engineering
                                        </option>

                                        <option value="ai-ml">
                                            Artificial Intelligence & Machine Learning
                                        </option>

                                        <option value="data-science">
                                            Data Science
                                        </option>

                                        <option value="iot">
                                            Internet of Things
                                        </option>

                                        <option value="cyber-security">
                                            Cyber Security
                                        </option>

                                        <option value="management">
                                            Management
                                        </option>

                                        <option value="other">
                                            Other
                                        </option>

                                    </select>

                                </div>

                            </FormSection>


                            {/* =================================================
                  ACCOUNT INFORMATION
              ================================================== */}

                            <FormSection
                                icon="🔐"
                                title="Account Information"
                            >

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                                    <InputField
                                        label="Password"
                                        name="password"
                                        type="password"
                                        placeholder="Enter your password"
                                        value={formData.password}
                                        onChange={handleChange}
                                    />


                                    <InputField
                                        label="Confirm Password"
                                        name="confirmPassword"
                                        type="password"
                                        placeholder="Confirm your password"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                    />

                                </div>


                                {/* Password Match */}
                                {formData.confirmPassword && (

                                    <p
                                        className={`mt-3 text-sm ${formData.password === formData.confirmPassword
                                            ? "text-green-400"
                                            : "text-red-400"
                                            }`}
                                    >

                                        {formData.password === formData.confirmPassword
                                            ? "✓ Passwords match"
                                            : "✗ Passwords do not match"}

                                    </p>

                                )}

                            </FormSection>


                            {/* =================================================
                  TERMS
              ================================================== */}

                            <div className="flex items-start gap-3 text-sm text-gray-400">

                                <input
                                    type="checkbox"
                                    id="terms"
                                    name="terms"
                                    checked={formData.terms}
                                    onChange={handleChange}
                                    className="mt-1 h-4 w-4 accent-blue-500 cursor-pointer"
                                />

                                <label htmlFor="terms">

                                    I agree to the{" "}

                                    <a
                                        href="/terms"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-blue-400 hover:text-blue-300 underline"
                                    >
                                        Terms and Conditions
                                    </a>

                                </label>

                            </div>


                            {/* =================================================
                  CREATE ACCOUNT
              ================================================== */}

                            <button
                                type="submit"
                                className="w-full rounded-xl
                           bg-blue-600 hover:bg-blue-500
                           active:scale-[0.98]
                           py-3.5
                           font-semibold
                           transition-all duration-300
                           shadow-lg shadow-blue-900/30"
                            >
                                Create Account
                            </button>


                            {/* Login */}
                            <p className="text-center text-sm text-gray-400">

                                Already have an account?{" "}

                                <button
                                    type="button"
                                    onClick={() => navigate("/login")}
                                    className="text-blue-400 hover:text-blue-300
                             font-medium transition-colors"
                                >
                                    Log in
                                </button>

                            </p>

                        </form>

                    </div>

                </section>

            </main>

        </div>
    );
}


/* ============================================================
   FORM SECTION
============================================================ */

function FormSection({ icon, title, children }) {

    return (

        <fieldset
            className="rounded-2xl
                 border border-white/10
                 bg-black/10
                 p-4 sm:p-5"
        >

            <div className="flex items-center gap-2 mb-5">

                <span className="text-lg">
                    {icon}
                </span>

                <span className="font-semibold text-gray-100">
                    {title}
                </span>

            </div>

            {children}

        </fieldset>
    );
}


/* ============================================================
   INPUT FIELD
============================================================ */

function InputField({
    label,
    name,
    type = "text",
    placeholder,
    value,
    onChange,
    min,
    max,
}) {

    return (

        <div className="w-full">

            <label
                htmlFor={name}
                className="mb-2 block text-sm font-medium text-gray-300"
            >
                {label}
            </label>

            <input
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                min={min}
                max={max}
                required
                className="w-full rounded-xl
                   border border-white/15
                   bg-white/[0.07]
                   px-4 py-3
                   text-white
                   placeholder-gray-500
                   outline-none
                   transition-all duration-300
                   focus:border-blue-500
                   focus:ring-2
                   focus:ring-blue-500/20"
            />

        </div>
    );
}


/* ============================================================
   VERIFY INPUT
============================================================ */

function VerifyInput({
    label,
    name,
    type = "text",
    placeholder,
    value,
    onChange,
}) {

    return (

        <div className="w-full">

            <label
                htmlFor={name}
                className="mb-2 block text-sm font-medium text-gray-300"
            >
                {label}
            </label>


            <div className="flex flex-col sm:flex-row gap-2">

                <input
                    id={name}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    required
                    className="min-w-0 flex-1
                     rounded-xl
                     border border-white/15
                     bg-white/[0.07]
                     px-4 py-3
                     text-white
                     placeholder-gray-500
                     outline-none
                     transition-all duration-300
                     focus:border-blue-500
                     focus:ring-2
                     focus:ring-blue-500/20"
                />


                <button
                    type="button"
                    className="rounded-xl
                     bg-blue-500/20
                     border border-blue-400/20
                     px-5 py-3
                     sm:py-0
                     text-sm
                     font-medium
                     text-blue-300
                     hover:bg-blue-500/30
                     transition-all duration-300"
                >
                    Verify
                </button>

            </div>

        </div>
    );
}


/* ============================================================
   SELECT FIELD
============================================================ */

function SelectField({
    label,
    name,
    value,
    onChange,
    options,
}) {

    return (

        <div className="w-full">

            <label
                htmlFor={name}
                className="mb-2 block text-sm font-medium text-gray-300"
            >
                {label}
            </label>


            <select
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                required
                className="w-full rounded-xl
                   border border-white/15
                   bg-slate-900/80
                   px-4 py-3
                   text-white
                   outline-none
                   transition-all duration-300
                   focus:border-blue-500
                   focus:ring-2
                   focus:ring-blue-500/20"
            >

                <option value="" disabled>
                    Select your {label.toLowerCase()}
                </option>

                {options.map(([value, label]) => (

                    <option
                        key={value}
                        value={value}
                    >
                        {label}
                    </option>

                ))}

            </select>

        </div>
    );
}


/* ============================================================
   FEATURE CARD
============================================================ */

function FeatureCard({
    icon,
    title,
    description,
}) {

    return (

        <div
            className="flex items-center gap-4
                 rounded-2xl
                 border border-white/10
                 bg-white/[0.05]
                 p-4
                 backdrop-blur-xl
                 transition-all duration-300
                 hover:bg-white/[0.08]"
        >

            <div
                className="flex h-11 w-11 shrink-0
                   items-center justify-center
                   rounded-xl
                   bg-white/10
                   text-xl"
            >
                {icon}
            </div>


            <div>

                <h4 className="font-semibold text-sm">
                    {title}
                </h4>

                <p className="mt-1 text-xs text-gray-400">
                    {description}
                </p>

            </div>

        </div>
    );
}


export default AcademicianSignup;