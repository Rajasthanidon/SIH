import { useState } from "react";
import Psw from '../components/Psw';
import { useNavigate } from "react-router-dom";

function StudentSignup() {
    const navigate
        = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        institution: "",
        degree: "",
        branch: "",
        year: "",
        graduationYear: "",
        studentId: "",
        password: "",
        confirmPassword: "",
        terms: false,
        role: "student"
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
        navigate("/StudentDashboard");
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        console.log(formData);
        alert("Account created successfully!");
    };

    const verifyEmail = () => {
        if (!formData.email) {
            alert("Enter your email first");
            return;
        }

        alert(`Verification code sent to ${formData.email}`);
    };

    const verifyMobile = () => {
        if (!formData.mobile) {
            alert("Enter your mobile number first");
            return;
        }

        alert(`OTP sent to ${formData.mobile}`);
    };
    const handleSignup = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/signup`, {

                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });


            const data = await response.json();

            console.log("Login Response:", data);

            if (data.ok) {
                alert("Login successful!");
        navigate("/StudentDashboard");
            } else {
                alert("Login failed!");
            }

        } catch (error) {
            console.error("Error:", error);
            alert("Server error!");
        }
    };

    return (
        <main
            className="
        min-h-screen
        p-2 sm:p-4 lg:p-6
        flex
        items-stretch
        gap-4 lg:gap-6
        overflow-hidden

        bg-[radial-gradient(circle_at_10%_20%,rgba(0,255,200,0.22),transparent_30%),radial-gradient(circle_at_90%_80%,rgba(100,80,255,0.25),transparent_30%),linear-gradient(135deg,#071b2d,#101735,#071d2d)]
      "
        >
            {/* =================================
          LEFT PANEL
      ================================= */}

            <section
                className="
          hidden
          lg:flex
          lg:w-[42%]
          xl:w-[43%]
          flex-col

          rounded-3xl
          border
          border-white/15
          bg-white/[0.07]

          p-8
          xl:p-10

          text-white

          backdrop-blur-2xl
          shadow-2xl
        "
            >
                {/* BRAND */}

                <div className="flex items-center gap-3" onClick={() => navigate("/")}>
                    <span className="text-4xl">📖</span>

                    <div>
                        <h3 className="text-xl font-bold">
                            EduConnect
                        </h3>

                        <p className="text-xs text-white/50">
                            Collaborate. Innovate. Elevate.
                        </p>
                    </div>
                </div>


                {/* CONTENT */}

                <div className="mt-16 xl:mt-20">
                    <h2
                        className="
              text-3xl
              xl:text-4xl
              2xl:text-5xl

              font-bold
              leading-tight
            "
                    >
                        Create your student account{" "}

                        <span
                            className="
                block
                bg-gradient-to-r
                from-cyan-300
                to-violet-400
                bg-clip-text
                text-transparent
              "
                        >
                            and shape your future
                        </span>
                    </h2>

                    <p
                        className="
              mt-5
              max-w-lg
              text-sm
              leading-7
              text-white/60
            "
                    >
                        Join a vibrant ecosystem of students,
                        educators and industry leaders.
                        Together, let's build the future.
                    </p>
                </div>


                {/* ILLUSTRATION */}

                <div className="flex flex-1 items-center justify-center">
                    <img
                        src="/institution-illustration.png"
                        alt="Educational Institution"
                        className="
              w-3/4
              max-w-md

              drop-shadow-[0_20px_30px_rgba(0,0,0,0.35)]
            "
                    />
                </div>


                {/* FEATURES */}

                <div className="grid grid-cols-1 xl:grid-cols-3 gap-3">

                    <FeatureCard
                        icon="🎓"
                        title="Connect with students"
                        description="Build meaningful academic connections"
                    />

                    <FeatureCard
                        icon="💡"
                        title="Discover opportunities"
                        description="Explore ideas, projects and opportunities"
                    />

                    <FeatureCard
                        icon="🛡️"
                        title="Secure & trusted"
                        description="Your data is safe with us."
                    />

                </div>
            </section>


            {/* =================================
          RIGHT FORM PANEL
      ================================= */}

            <section
                className="
          w-full
          lg:flex-1

          rounded-2xl
          lg:rounded-3xl

          border
          border-white/15

          bg-white/[0.07]

          p-4
          sm:p-6
          md:p-8
          lg:p-8
          xl:p-10

          text-white

          backdrop-blur-2xl

          shadow-2xl

          overflow-y-auto
        "
            >

                {/* HEADER */}

                <div className="flex items-center gap-3 mb-6">

                    <div
                        className="
              grid
              h-12
              w-12
              shrink-0
              place-items-center

              rounded-xl

              bg-white/10

              text-2xl

              border
              border-white/10
            "
                    >
                        🎓
                    </div>

                    <div>
                        <h1 className="text-xl sm:text-2xl font-bold">
                            Student Sign Up
                        </h1>

                        <p className="text-xs sm:text-sm text-white/50">
                            Create your account
                        </p>
                    </div>

                </div>


                {/* FORM */}

                <form onSubmit={handleSignup}>

                    {/* =================================
              PERSONAL INFORMATION
          ================================= */}

                    <FormSection
                        icon="👤"
                        title="Personal Information"
                    >

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                            <InputField
                                label="Full Name"
                                name="name"
                                placeholder="Enter your full name"

                                onChange={handleChange}
                            />


                            <div className="flex flex-col gap-2">

                                <label className="text-xs sm:text-sm text-white/70">
                                    Email
                                </label>

                                <div className="flex flex-col sm:flex-row gap-2">

                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter your email"
                                        required

                                        className="
                      min-w-0
                      flex-1

                      rounded-lg

                      border
                      border-white/10

                      bg-white/[0.06]

                      px-3
                      py-3

                      text-sm
                      text-white

                      outline-none

                      placeholder:text-white/30

                      focus:border-cyan-300/60
                      focus:bg-white/10
                      focus:ring-2
                      focus:ring-cyan-300/10
                    "
                                    />

                                    <button
                                        type="button"
                                        onClick={verifyEmail}

                                        className="
                      rounded-lg
                      border
                      border-cyan-300/30

                      bg-cyan-300/10

                      px-4
                      py-3

                      text-xs
                      font-medium
                      text-cyan-300

                      transition

                      hover:bg-cyan-300/20
                    "
                                    >
                                        Verify
                                    </button>

                                </div>
                            </div>

                        </div>


                        {/* MOBILE */}

                        <div className="mt-4">

                            <label className="text-xs sm:text-sm text-white/70">
                                Mobile Number
                            </label>

                            <div className="mt-2 flex flex-col sm:flex-row gap-2">

                                <input
                                    type="tel"
                                    name="mobile"
                                    value={formData.mobile}
                                    onChange={handleChange}
                                    placeholder="Enter your mobile number"
                                    required

                                    className="
                    min-w-0
                    flex-1

                    rounded-lg
                    border
                    border-white/10

                    bg-white/[0.06]

                    px-3
                    py-3

                    text-sm
                    text-white

                    outline-none

                    placeholder:text-white/30

                    focus:border-cyan-300/60
                    focus:bg-white/10
                  "
                                />

                                <button
                                    type="button"
                                    onClick={verifyMobile}

                                    className="
                    rounded-lg
                    border
                    border-cyan-300/30

                    bg-cyan-300/10

                    px-5
                    py-3

                    text-xs
                    text-cyan-300

                    hover:bg-cyan-300/20
                  "
                                >
                                    Verify
                                </button>

                            </div>

                        </div>

                    </FormSection>


                    {/* =================================
              ACADEMIC INFORMATION
          ================================= */}

                    <FormSection
                        icon="🎓"
                        title="Academic Information"
                    >

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                            <InputField
                                label="Institution"
                                name="institution"
                                placeholder="Enter your institution"
                                value={formData.institution}
                                onChange={handleChange}
                            />

                            <InputField
                                label="Degree"
                                name="degree"
                                placeholder="Enter your degree"
                                value={formData.degree}
                                onChange={handleChange}
                            />

                            <InputField
                                label="Branch"
                                name="branch"
                                placeholder="Enter your branch"
                                value={formData.branch}
                                onChange={handleChange}
                            />


                            <SelectField
                                label="Year of Study"
                                name="year"
                                value={formData.year}
                                onChange={handleChange}
                                options={[
                                    ["1", "1st Year"],
                                    ["2", "2nd Year"],
                                    ["3", "3rd Year"],
                                    ["4", "4th Year"],
                                    ["5", "5th Year"],
                                ]}
                            />


                            <SelectField
                                label="Graduation Year"
                                name="graduationYear"
                                value={formData.graduationYear}
                                onChange={handleChange}
                                options={[
                                    ["2027", "2027"],
                                    ["2028", "2028"],
                                    ["2029", "2029"],
                                    ["2030", "2030"],
                                    ["2031", "2031"],
                                ]}
                            />


                            <InputField
                                label="Student ID"
                                name="studentId"
                                placeholder="Enter Roll No. / Reg. No."
                                value={formData.studentId}
                                onChange={handleChange}
                            />

                        </div>

                    </FormSection>


                    {/* =================================
              ACCOUNT INFORMATION
          ================================= */}

                    <FormSection
                        icon="🔐"
                        title="Account Information"
                    >

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                            <Psw />

                        </div>

                    </FormSection>


                    {/* =================================
              TERMS
          ================================= */}

                    <div className="flex items-start gap-2 my-5">

                        <input
                            type="checkbox"
                            name="terms"
                            checked={formData.terms}
                            onChange={handleChange}
                            required

                            className="
                mt-1
                h-4
                w-4
                shrink-0

                accent-cyan-400
              "
                        />

                        <label className="text-xs sm:text-sm text-white/60">
                            I agree to the{" "}

                            <a
                                href="/terms.html"
                                target="_blank"
                                className="text-cyan-300 hover:underline"
                            >
                                Terms and Conditions
                            </a>
                        </label>

                    </div>


                    {/* =================================
              CREATE ACCOUNT
          ================================= */}

                    <button

                        type="submit"

                        className="
              w-full

              rounded-xl

              bg-gradient-to-r
              from-cyan-300
              to-blue-400

              px-5
              py-3.5

              text-sm
              font-bold

              text-slate-900

              shadow-lg
              shadow-cyan-400/10

              transition

              hover:-translate-y-0.5
              hover:shadow-cyan-400/20

              active:translate-y-0
            "
                    >
                        Create Account
                    </button>


                    {/* LOGIN */}

                    <p className="mt-4 text-center text-xs sm:text-sm text-white/50">

                        Already have an account?{" "}

                        <button onClick={() => navigate("/Login")}

                            className="text-cyan-300 hover:underline"
                        >
                            Log in
                        </button>

                    </p>

                </form>

            </section>

        </main>
    );
}


/* =================================
   REUSABLE COMPONENTS
================================= */

function FormSection({ icon, title, children }) {
    return (
        <fieldset
            className="
        mb-4
        rounded-2xl

        border
        border-white/10

        bg-white/[0.035]

        p-4
        sm:p-5
      "
        >

            <div className="mb-5 flex items-center gap-2">

                <span className="text-lg">
                    {icon}
                </span>

                <h2 className="text-sm sm:text-base font-semibold">
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
    placeholder,
    value,
    onChange,
}) {
    return (
        <div className="flex flex-col gap-2">

            <label className="text-xs sm:text-sm text-white/70">
                {label}
            </label>

            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required

                className="
          w-full

          rounded-lg

          border
          border-white/10

          bg-white/[0.06]

          px-3
          py-3

          text-sm
          text-white

          outline-none

          placeholder:text-white/30

          transition

          focus:border-cyan-300/60
          focus:bg-white/10
          focus:ring-2
          focus:ring-cyan-300/10
        "
            />

        </div>
    );
}


function SelectField({
    label,
    name,
    value,
    onChange,
    options,
}) {
    return (
        <div className="flex flex-col gap-2">

            <label className="text-xs sm:text-sm text-white/70">
                {label}
            </label>

            <select
                name={name}
                value={value}
                onChange={onChange}
                required

                className="
          w-full

          rounded-lg

          border
          border-white/10

          bg-white/[0.06]

          px-3
          py-3

          text-sm
          text-white

          outline-none

          focus:border-cyan-300/60

          [&>option]:bg-slate-900
        "
            >

                <option value="" disabled>
                    Select {label.toLowerCase()}
                </option>

                {options.map(([value, text]) => (
                    <option key={value} value={value}>
                        {text}
                    </option>
                ))}

            </select>

        </div>
    );
}


function FeatureCard({ icon, title, description }) {
    return (
        <div
            className="
        flex
        gap-3

        rounded-xl

        border
        border-white/10

        bg-white/[0.05]

        p-3

        transition

        hover:-translate-y-1
        hover:bg-white/10
      "
        >

            <span className="text-xl">
                {icon}
            </span>

            <div>

                <h4 className="text-xs font-semibold">
                    {title}
                </h4>

                <p className="mt-1 text-[10px] leading-4 text-white/50">
                    {description}
                </p>

            </div>

        </div>
    );
}

export default StudentSignup;