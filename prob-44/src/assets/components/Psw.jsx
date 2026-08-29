import { useState } from "react";

function PasswordInput() {
    const [password, setPassword] = useState("");

    const requirements = {
        length: password.length >= 8,
        uppercase: /[A-Z]/.test(password),
        lowercase: /[a-z]/.test(password),
        number: /[0-9]/.test(password),
        special: /[!@#$%^&*(),.?":{}|<>_\-]/.test(password),
    };

    return (
        <div>
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

            {/* Requirements */}
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