import { useState } from "react";
import { useNavigate } from "react-router-dom";

function IndustrySignup() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        companyName: "",
        officialEmail: "",
        contactNumber: "",
        website: "",
        industry: "",
        companySize: "",
        representativeName: "",
        designation: "",
        representativeEmail: "",
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

        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        if (!formData.terms) {
            alert("Please accept the Terms and Conditions.");
            return;
        }

        console.log("Industry Data:", formData);

        alert("Industry account created successfully!");
    };

    return (
        <main className="min-h-screen bg-gradient-to-br from-[#07111f] via-[#0b1b32] to-[#07111f] text-white">
            <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">

                {/* ================= LEFT VISUAL PANEL ================= */}
                <section className="hidden lg:flex flex-col justify-between p-10 xl:p-14 bg-white/5 border-r border-white/10">

                    {/* Brand */}
                    <div className="brand flex items-center gap-3" onClick={() => navigate("/")}>
                        <span className="text-4xl" >📖</span>

                        <div>
                            <h3 className="text-2xl font-bold">EduConnect</h3>
                            <p className="text-sm text-gray-400">
                                Collaborate. Innovate. Elevate.
                            </p>
                        </div>
                    </div>

                    {/* Visual Content */}
                    <div className="space-y-5 max-w-xl">
                        <h2 className="text-4xl xl:text-5xl font-bold leading-tight">
                            Create your industry account{" "}
                            <span className="text-blue-400">
                                and build the future
                            </span>
                        </h2>

                        <p className="text-gray-400 text-lg leading-relaxed">
                            Connect with talented students, academicians and institutions.
                            Discover opportunities and build meaningful partnerships.
                        </p>

                        {/* Illustration */}
                        <div className="flex justify-center py-5">
                            <img
                                src="./institution-illustration.png"
                                alt="Educational Institution"
                                className="w-full max-w-md object-contain drop-shadow-2xl"
                            />
                        </div>
                    </div>

                    {/* Feature List */}
                    <div className="space-y-4">

                        <FeatureCard
                            icon="🤝"
                            title="Connect with talent"
                            description="Discover talented students and professionals"
                        />

                        <FeatureCard
                            icon="💡"
                            title="Build partnerships"
                            description="Create meaningful academic collaborations"
                        />

                        <FeatureCard
                            icon="🛡️"
                            title="Secure & trusted"
                            description="Your data is safe with us."
                        />

                    </div>
                </section>

                {/* ================= RIGHT FORM PANEL ================= */}
                <section className="flex items-center justify-center p-5 sm:p-8 lg:p-10">

                    <div className="w-full max-w-3xl">

                        {/* Form Header */}
                        <div className="flex items-center gap-4 mb-8">

                            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-400/20 flex items-center justify-center text-3xl">
                                🏢
                            </div>

                            <div>
                                <h1 className="text-3xl sm:text-4xl font-bold">
                                    Industry Sign Up
                                </h1>

                                <p className="text-gray-400 mt-1">
                                    Create your account
                                </p>
                            </div>

                        </div>

                        {/* Form */}
                        <form
                            onSubmit={handleSubmit}
                            className="space-y-6"
                        >

                            {/* ================= COMPANY INFORMATION ================= */}
                            <FormSection
                                icon="🏢"
                                title="Company Information"
                            >

                                {/* Row 1 */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                                    <InputField
                                        label="Company Name"
                                        name="companyName"
                                        value={formData.companyName}
                                        onChange={handleChange}
                                        placeholder="Enter your company name"
                                        required
                                    />

                                    <VerifyInput
                                        label="Official Company Email"
                                        name="officialEmail"
                                        type="email"
                                        value={formData.officialEmail}
                                        onChange={handleChange}
                                        placeholder="Enter your official company email"
                                    />

                                </div>

                                {/* Row 2 */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                                    <VerifyInput
                                        label="Contact Number"
                                        name="contactNumber"
                                        type="tel"
                                        value={formData.contactNumber}
                                        onChange={handleChange}
                                        placeholder="Enter company's contact number"
                                    />

                                    <InputField
                                        label="Company Website"
                                        name="website"
                                        type="url"
                                        value={formData.website}
                                        onChange={handleChange}
                                        placeholder="Enter your company website"
                                        required
                                    />

                                </div>

                                {/* Row 3 */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                                    <SelectField
                                        label="Industry"
                                        name="industry"
                                        value={formData.industry}
                                        onChange={handleChange}
                                        required
                                        options={[
                                            ["technology", "Technology"],
                                            ["software", "Software"],
                                            ["finance", "Finance & Banking"],
                                            ["healthcare", "Healthcare"],
                                            ["education", "Education"],
                                            ["manufacturing", "Manufacturing"],
                                            ["automotive", "Automotive"],
                                            ["telecommunications", "Telecommunications"],
                                            ["retail", "Retail"],
                                            ["construction", "Construction"],
                                            ["consulting", "Consulting"],
                                            ["energy", "Energy"],
                                            ["other", "Other"],
                                        ]}
                                    />

                                    <SelectField
                                        label="Company Size"
                                        name="companySize"
                                        value={formData.companySize}
                                        onChange={handleChange}
                                        required
                                        options={[
                                            ["small", "Small (1-50 employees)"],
                                            ["medium", "Medium (51-500 employees)"],
                                            ["large", "Large (501-1000 employees)"],
                                            ["enterprise", "Enterprise (1000+ employees)"],
                                        ]}
                                    />

                                </div>

                            </FormSection>

                            {/* ================= REPRESENTATIVE INFORMATION ================= */}
                            <FormSection
                                icon="👤"
                                title="Representative Information"
                            >

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                                    <InputField
                                        label="Full Name"
                                        name="representativeName"
                                        value={formData.representativeName}
                                        onChange={handleChange}
                                        placeholder="Enter your full name"
                                        required
                                    />

                                    <SelectField
                                        label="Designation"
                                        name="designation"
                                        value={formData.designation}
                                        onChange={handleChange}
                                        required
                                        options={[
                                            ["ceo", "Chief Executive Officer (CEO)"],
                                            ["cto", "Chief Technology Officer (CTO)"],
                                            ["cfo", "Chief Financial Officer (CFO)"],
                                            ["manager", "Manager"],
                                            ["director", "Director"],
                                            ["other", "Other"],
                                        ]}
                                    />

                                </div>

                                <InputField
                                    label="Representative Email"
                                    name="representativeEmail"
                                    type="email"
                                    value={formData.representativeEmail}
                                    onChange={handleChange}
                                    placeholder="Enter your representative email"
                                    required
                                />

                            </FormSection>

                            {/* ================= ACCOUNT INFORMATION ================= */}
                            <FormSection
                                icon="🔐"
                                title="Account Information"
                            >

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                                    <InputField
                                        label="Password"
                                        name="password"
                                        type="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        placeholder="Enter your password"
                                        required
                                    />

                                    <InputField
                                        label="Confirm Password"
                                        name="confirmPassword"
                                        type="password"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        placeholder="Confirm your password"
                                        required
                                    />

                                </div>

                                {/* Password Match */}
                                {formData.confirmPassword && (
                                    <p
                                        className={`text-sm ${formData.password === formData.confirmPassword
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

                            {/* ================= TERMS ================= */}
                            <div className="flex items-start gap-3 px-1">

                                <input
                                    type="checkbox"
                                    id="terms"
                                    name="terms"
                                    checked={formData.terms}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 w-4 h-4 accent-blue-500 cursor-pointer"
                                />

                                <label
                                    htmlFor="terms"
                                    className="text-sm text-gray-400"
                                >
                                    I agree to the{" "}
                                    <a
                                        href="/terms.html"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-blue-400 hover:text-blue-300 underline"
                                    >
                                        Terms and Conditions
                                    </a>
                                </label>

                            </div>

                            {/* ================= SUBMIT ================= */}
                            <button
                                type="submit"
                                className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 transition-all duration-300 font-semibold shadow-lg shadow-blue-600/20"
                            >
                                Create Account
                            </button>

                            {/* Login */}
                            <p className="text-center text-gray-400">
                                Already have an account?{" "}

                                <button
                                    type="button"
                                    onClick={() => navigate("/login")}
                                    className="text-blue-400 hover:text-blue-300 font-medium"
                                >
                                    Log in
                                </button>
                            </p>

                        </form>
                    </div>
                </section>

            </div>
        </main>
    );
}


/* =========================================================
   REUSABLE COMPONENTS
========================================================= */

function FormSection({ icon, title, children }) {
    return (
        <fieldset className="bg-white/[0.04] border border-white/10 rounded-2xl p-5 sm:p-6 space-y-5">

            <div className="flex items-center gap-3 pb-2 border-b border-white/10">
                <span className="text-xl">{icon}</span>

                <h2 className="font-semibold text-lg">
                    {title}
                </h2>
            </div>

            {children}

        </fieldset>
    );
}


function InputField({
    label,
    name,
    type = "text",
    value,
    onChange,
    placeholder,
    required = false,
}) {
    return (
        <div className="space-y-2">

            <label
                htmlFor={name}
                className="block text-sm font-medium text-gray-300"
            >
                {label}
            </label>

            <input
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 outline-none text-white placeholder:text-gray-500 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition"
            />

        </div>
    );
}


function VerifyInput({
    label,
    name,
    type = "text",
    value,
    onChange,
    placeholder,
}) {
    return (
        <div className="space-y-2">

            <label
                htmlFor={name}
                className="block text-sm font-medium text-gray-300"
            >
                {label}
            </label>

            <div className="flex flex-col sm:flex-row gap-2">

                <input
                    id={name}
                    name={name}
                    type={type}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    required
                    className="flex-1 min-w-0 px-4 py-3 rounded-xl bg-black/20 border border-white/10 outline-none text-white placeholder:text-gray-500 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition"
                />

                <button
                    type="button"
                    className="px-5 py-3 rounded-xl bg-blue-500/10 border border-blue-400/20 text-blue-400 hover:bg-blue-500/20 transition font-medium"
                >
                    Verify
                </button>

            </div>

        </div>
    );
}


function SelectField({
    label,
    name,
    value,
    onChange,
    options,
    required = false,
}) {
    return (
        <div className="space-y-2">

            <label
                htmlFor={name}
                className="block text-sm font-medium text-gray-300"
            >
                {label}
            </label>

            <select
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                required={required}
                className="w-full px-4 py-3 rounded-xl bg-[#0b1728] border border-white/10 outline-none text-white focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition"
            >
                <option value="" disabled>
                    Select {label.toLowerCase()}
                </option>

                {options.map(([value, label]) => (
                    <option key={value} value={value}>
                        {label}
                    </option>
                ))}
            </select>

        </div>
    );
}


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

export default IndustrySignup;