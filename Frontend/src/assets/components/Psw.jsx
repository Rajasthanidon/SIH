import { useState } from "react";

function PasswordInput() {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const requirements = {
        length: password.length >= 8,
        uppercase: /[A-Z]/.test(password),
        lowercase: /[a-z]/.test(password),
        number: /[0-9]/.test(password),
        special: /[!@#$%^&*(),.?":{}|<>_\-\\]/.test(password),
    };

    const passwordsMatch =
        confirmPassword.length > 0 && password === confirmPassword;

    return (
        <div>
            {/* Password */}
            <label className="mb-2 block text-sm font-medium text-gray-200">
                Password
            </label>

            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full rounded-xl border border-white/20
                   bg-white/10 px-4 py-3 text-white
                   placeholder-gray-400 outline-none
                   focus:border-blue-500 focus:ring-2
                   focus:ring-blue-500/30"
            />

            {/* Password Requirements */}
            <div className="mt-3 space-y-1 text-xs">
                <Requirement
                    valid={requirements.length}
                    text="At least 8 characters"
                />

                <Requirement
                    valid={requirements.uppercase}
                    text="One uppercase letter"
                />

                <Requirement
                    valid={requirements.lowercase}
                    text="One lowercase letter"
                />

                <Requirement
                    valid={requirements.number}
                    text="One number"
                />

                <Requirement
                    valid={requirements.special}
                    text="One special character"
                />
            </div>

            {/* Confirm Password */}
            <label className="mt-5 mb-2 block text-sm font-medium text-gray-200">
                Confirm Password
            </label>

            <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
                className={`w-full rounded-xl border
          bg-white/10 px-4 py-3 text-white
          placeholder-gray-400 outline-none
          focus:ring-2
          ${confirmPassword.length === 0
                        ? "border-white/20 focus:border-blue-500 focus:ring-blue-500/30"
                        : passwordsMatch
                            ? "border-green-500 focus:border-green-500 focus:ring-green-500/30"
                            : "border-red-500 focus:border-red-500 focus:ring-red-500/30"
                    }`}
            />

            {/* Match message */}
            {confirmPassword.length > 0 && (
                <p
                    className={`mt-2 text-xs ${passwordsMatch ? "text-green-400" : "text-red-400"
                        }`}
                >
                    {passwordsMatch
                        ? "✓ Passwords match"
                        : "✗ Passwords do not match"}
                </p>
            )}
        </div>
    );
}

function Requirement({ valid, text }) {
    return (
        <p className={valid ? "text-green-400" : "text-gray-400"}>
            {valid ? "✓" : "○"} {text}
        </p>
    );
}

export default PasswordInput;