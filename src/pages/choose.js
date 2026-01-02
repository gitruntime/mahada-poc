import { useState } from "react";
import { Arimo, Poppins } from "next/font/google";
import { Roboto } from "next/font/google";
import { useRouter } from "next/router";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400"],
});
const arimo = Arimo({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

const signup = () => {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [errors, setErrors] = useState({});
    const [role, setRole] = useState("");
    const handleContinue = () => {
        if (role === "tenant") {
            router.push("/Tenant/personalinfo");
        } else if (role === "landlord") {
            router.push("/Landlord/personalinfo");
        }
    };

    const validate = () => {
        const newErrors = {};

        if (!email) {
            newErrors.email = "Email is required";
        } else if (!/^\S+@\S+\.\S+$/.test(email)) {
            newErrors.email = "Enter a valid email";
        }

        if (!password) {
            newErrors.password = "Password is required";
        } else if (password.length < 8) {
            newErrors.password = "Password must be at least 8 characters";
        } else if (!/[0-9]/.test(password)) {
            newErrors.password = "Password must contain a number";
        } else if (!/[!@#$%^&*]/.test(password)) {
            newErrors.password = "Password must contain a special character";
        }

        if (!confirmPassword) {
            newErrors.confirmPassword = "Please re-enter password";
        } else if (password !== confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;

        sessionStorage.setItem("isAuthenticated", "true");
        router.push("/personalinfo");
    };

    return (
        <div className="min-h-screen flex flex-col lg:flex-row w-full">

            {/* LEFT */}
            <div className="w-full lg:w-1/2 flex items-center justify-center px-6">
                <div className="w-full max-w-[630px] mx-auto">
                    <div className="min-h-[620px] px-6 sm:px-[32px] py-[40px] flex flex-col justify-center">

                        {/* Header */}
                        <div className="mb-6">
                            <div className={`flex items-center gap-2 ${poppins.className}`}>
                                <h1 className="text-[#6D727A] text-[28px] font-semibold">
                                    Register on
                                </h1>
                                <h1 className="relative text-black text-[28px] font-semibold">
                                    Mhada <span className="text-orange-500">Estate</span>
                                    <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-orange-500" />
                                </h1>
                            </div>
                        </div>

                        {/* Info box */}
                        <div className="bg-white w-full border border-[#E6EDF5] rounded-xl p-4 mb-8">
                            <p className={`text-[#717182] ${arimo.className} text-[14px] font-normal`}>
                                User registration on the MHADA Estate portal is approval-based and
                                role-specific, governed by applicable government verification norms.
                            </p>
                        </div>

                        {/* Sub text */}
                        <p className={`text-[#717182] mt-[30px] text-[13px] ${arimo.className} mb-6`}>
                            Separate verification and approval processes apply for tenants and landlords.
                        </p>

                        {/* Role selection */}
                        <div className="flex gap-4 mb-10">
                            {/* Tenant */}
                            <button
                                onClick={() => setRole("tenant")}
                                className={`px-6 py-3 rounded-xl border-2
                                             ${role === "tenant"
                                        ? "border-[#FF7A18] text-[#F97415] bg-orange-50"
                                        : "border-[#00000066] text-[#00000066]"
                                    }`}
                            >
                                I am a Tenant
                            </button>

                            {/* Landlord */}
                            <button
                                onClick={() => setRole("landlord")}
                                className={`px-6 py-3 rounded-xl border-2
                                ${role === "landlord"
                                        ? "border-[#FF7A18] text-[#F97415] bg-orange-50"
                                        : "border-[#00000066] text-[#00000066]"
                                    }`}
                            >
                                I am a Landlord
                            </button>
                        </div>

                        {/* Continue button */}
                        <button
                        onClick={handleContinue}
                            className="w-full h-[52px] rounded-xl bg-[#FF7A18] text-white text-[20px]
                   font-normal shadow-md hover:shadow-lg transition"
                        >
                            Continue Registration
                        </button>

                        {/* Divider */}
                        <div className="my-8 flex items-center gap-4">
                            <div className="h-px flex-1 bg-[#CFDFE2]" />
                            <span className={`text-[16px] ${roboto.className} text-[#294957]`}>Or</span>
                            <div className="h-px flex-1 bg-[#CFDFE2]" />
                        </div>

                        {/* Footer */}
                        <p className={`text-center ${roboto.className}`}>
                            Already have an account?{" "}
                            <Link href="/login" className="text-[#028541] hover:underline">
                                Login
                            </Link>
                        </p>

                    </div>
                </div>
            </div>


            {/* RIGHT IMAGE */}
            <div className="hidden lg:flex w-1/2 px-6 pt-10 items-center justify-center">
                <img
                    src="/Art.png"
                    alt="Mhada Estate"
                    className="max-h-[720px] max-w-[640px] object-contain"
                />
            </div>
        </div>
    );
};

export default signup;
