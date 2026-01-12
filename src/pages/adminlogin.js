import { useState } from "react";
import { Poppins, Roboto } from "next/font/google";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400"],
});

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

/* ===== STAFF CREDENTIALS ===== */
const USERS = [
    { email: "clerk1@mhada.com", password: "password123", role: "clerk1" },
    { email: "clerk2@mhada.com", password: "password123", role: "clerk2" },
    { email: "senior@mhada.com", password: "password123", role: "admin" },
];

const adminlogin = () => {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = USERS.find(
            (u) => u.email === email && u.password === password
        );

        if (!user) {
            alert("Invalid email or password");
            return;
        }

        sessionStorage.setItem("isAuthenticated", "true");
        sessionStorage.setItem("role", user.role);

        switch (user.role) {
            case "clerk1":
                router.push("/Admin/dashboard/clerk1");
                break;
            case "clerk2":
                router.push("/Admin/dashboard/clerk2");
                break;
            case "admin":
                router.push("/Admin/admindashboard");
                break;
            default:
                router.push("/");
        }
    };

    return (
        <div className="min-h-screen flex flex-col lg:flex-row w-full">

            {/* LEFT SIDE – LOGIN */}
            <div className="w-full lg:w-1/2 flex items-center justify-center px-6">
                <div className="w-full max-w-[388px] rounded-xl flex items-center justify-center mx-auto">
                    <div className="w-full min-h-[616px] px-6 sm:px-[32px] py-[40px] flex flex-col justify-center">

                        {/* Header */}
                        <div className="mb-10 text-start w-full max-w-[322px]">
                            <div className={`flex items-center gap-2 ${poppins.className}`}>
                                <h1 className="text-[#6D727A] font-semibold text-[20px] sm:text-[24px]">
                                    Welcome to
                                </h1>
                                <h1 className="relative text-[20px] sm:text-[24px] text-black font-semibold">
                                    Mhada <span className="text-orange-500">Estate</span>
                                    <span className="absolute left-0 -bottom-0.5 w-full h-[2px] bg-orange-500"></span>
                                </h1>
                            </div>
                        </div>

                        <h1 className="text-[#000000] mb-[20px] font-semibold text-[20px] sm:text-[24px]">
                            Department Login
                        </h1>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-6">

                            <div className="space-y-2">
                                <label className={`text-[16px] font-normal text-[#0C1421] ${poppins.className}`}>
                                    Email
                                </label>
                                <input
                                    type="email"
                                    required
                                    placeholder="Example@email.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="h-[48px] w-full bg-[#F7FBFF] rounded-[12px] border border-[#D4D7E3] px-4"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className={`text-[16px] font-normal text-[#0C1421] ${poppins.className}`}>
                                    Password
                                </label>
                                <input
                                    type="password"
                                    minLength={8}
                                    required
                                    placeholder="at least 8 characters"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="h-[48px] w-full bg-[#F7FBFF] rounded-[12px] border border-[#D4D7E3] px-4"
                                />
                            </div>

                            <div className="flex justify-end">
                                <span className={`${poppins.className} text-[16px] text-[#028541] hover:underline cursor-pointer`}>
                                    Forgot Password?
                                </span>
                            </div>

                            <button
                                type="submit"
                                className={`h-[40px] w-full rounded-[10px] bg-[#F97415] text-white text-[20px] font-medium
                                shadow-md hover:shadow-lg transition-all ${roboto.className}`}
                            >
                                Sign in
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* RIGHT SIDE – IMAGE */}
            <div className="hidden lg:flex w-1/2 px-6 pt-10 items-center justify-center">
                <img
                    src="/Art.png"
                    alt="Mhada Estate"
                    className="max-h-[720px] w-full max-w-[640px] object-contain"
                />
            </div>
        </div>
    );
};

export default adminlogin;
