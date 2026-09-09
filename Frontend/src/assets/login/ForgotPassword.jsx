import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Mail, LockKeyhole } from "lucide-react";

function ForgotPassword() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email) {
            alert("Please enter your email");
            return;
        }

        // Later connect this with your backend
        console.log("Reset password request:", email);

        setSubmitted(true);
    };

    return (
        <div className="min-h-screen flex items-center justify-center
                    bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950
                    px-4">

            <div className="w-full max-w-md">

                {/* Back */}
                <button
                    onClick={() => navigate("/login")}
                    className="flex items-center gap-2 text-gray-300
                     hover:text-white mb-6 transition"
                >
                    <ArrowLeft size={18} />
                    Back to Login
                </button>

                {/* Card */}
                <div className="p-8 rounded-3xl
                        bg-white/10 backdrop-blur-xl
                        border border-white/20
                        shadow-2xl">

                    {/* Icon */}
                    <div className="w-16 h-16 mx-auto mb-5
                          flex items-center justify-center
                          rounded-2xl bg-blue-500/20
                          border border-blue-400/30">
                        <LockKeyhole className="text-blue-400" size={30} />
                    </div>

                    <h1 className="text-3xl font-bold text-white text-center">
                        Forgot Password?
                    </h1>

                    <p className="text-gray-400 text-center mt-3 mb-8" >
                        Don't worry! Enter your registered email and we'll
                        send you a link to reset your password.
                    </p>

                    {!submitted ? (
                        <form onSubmit={handleSubmit}>

                            {/* Email */}
                            <label className="text-sm text-gray-300">
                                Email Address
                            </label>

                            <div className="relative mt-2 mb-5">
                                <Mail
                                    size={19}
                                    className="absolute left-4 top-1/2
                             -translate-y-1/2 text-gray-400"
                                />

                                <input
                                    type="email"
                                    placeholder="Enter your registered email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3.5
                             rounded-xl
                             bg-white/10
                             border border-white/20
                             text-white
                             placeholder-gray-500
                             outline-none
                             focus:border-blue-400
                             transition"
                                />
                            </div>

                            {/* Button */}
                            <button
                                type="submit"
                                className="w-full py-3.5 rounded-xl
                           bg-blue-600 hover:bg-blue-500
                           text-white font-semibold
                           transition duration-300
                           shadow-lg shadow-blue-600/20"
                            >
                                Send Reset Link
                            </button>

                        </form>
                    ) : (
                        /* Success */
                        <div className="text-center">

                            <div className="w-14 h-14 mx-auto mb-4
                              flex items-center justify-center
                              rounded-full bg-green-500/20
                              text-green-400 text-2xl">
                                ✓
                            </div>

                            <h2 className="text-xl font-semibold text-white">
                                Check Your Email
                            </h2>

                            <p className="text-gray-400 mt-3">
                                If an account exists for{" "}
                                <span className="text-white">{email}</span>,
                                you'll receive a password reset link shortly.
                            </p>

                            <button
                                onClick={() => navigate("/login")}
                                className="mt-6 text-blue-400 hover:text-blue-300
                           font-medium hover:underline"
                            >
                                Return to Login
                            </button>

                        </div>
                    )}

                    {/* Footer */}
                    <p className="text-center text-gray-500 text-sm mt-8">
                        Remember your password?{" "}
                        <button
                            onClick={() => navigate("/login")}
                            className="text-blue-400 hover:underline"
                        >
                            Login
                        </button>
                    </p>

                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;