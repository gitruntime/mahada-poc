import { useState } from "react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { Roboto } from "next/font/google";
import { useRouter } from "next/router";
import Link from "next/link";
const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400"],
});

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

const adminlogin = () => {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email && password) {
            sessionStorage.setItem("isAuthenticated", "true");
            router.push("/Admin/admindashboard");
        } else {
            console.log("Invalid credentials");
        }
    };

    return (
        <div className="min-h-screen flex flex-col lg:flex-row w-full">

            {/* LEFT SIDE – LOGIN */}
            <div className="w-full lg:w-1/2 flex items-center justify-center px-6">
                <div className="w-full max-w-[388px] rounded-xl flex items-center justify-center mx-auto">
                    <div className="w-full min-h-[616px] px-6 sm:px-[32px] py-[40px] flex flex-col justify-center">
                        <div className="w-full mx-auto">

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
                                Staff Login
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
                                        className="h-[48px] w-full max-w-[388px] bg-[#F7FBFF] rounded-[12px] border border-[#D4D7E3] px-4"
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
                                        className="h-[48px] w-full max-w-[388px] bg-[#F7FBFF] rounded-[12px] border border-[#D4D7E3] px-4"
                                    />
                                </div>

                                <div className="flex justify-end">
                                    <a
                                        className={`${poppins.className} text-[16px] text-[#028541] hover:underline cursor-pointer`}
                                    >
                                        Forgot Password?
                                    </a>
                                </div>

                                <button
                                    type="submit"
                                    className={`h-[40px] w-full rounded-[10px] bg-[#F97415] cursor-pointer text-[20px] text-white font-medium
                                    shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.1),_0px_4px_6px_-1px_rgba(0,0,0,0.1)]
                                    hover:shadow-[0px_4px_8px_-2px_rgba(0,0,0,0.15),_0px_6px_12px_-2px_rgba(0,0,0,0.15)]
                                    transition-shadow duration-200 ease-in-out ${roboto.className}`}
                                >
                                    Sign in
                                </button>
                            </form>

                           

                           

                        </div>
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
