import { useState } from "react";
import { Poppins, Roboto } from "next/font/google";
import Image from "next/image";
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

const Signup = () => {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};
      
        if (!password) newErrors.password = "Password is required";
        else if (password.length < 8)
            newErrors.password = "Password must be at least 8 characters";
        if (password !== confirmPassword)
            newErrors.confirmPassword = "Passwords do not match";

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            // Save session and navigate
            sessionStorage.setItem("isAuthenticated", "true");
            router.push("/Tenant/passwordcreated");
        }
    };

    return (
        <div className="min-h-screen flex flex-col lg:flex-row w-full">

            {/* LEFT SIDE – SIGNUP FORM */}
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

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="space-y-2">
  <label
    className={`text-[16px] font-normal text-gray-400 ${poppins.className}`}
  >
    Email
  </label>

  <input
    type="email"
    value={email}
    placeholder="test@gmail.com"
    disabled
    className="
      h-[48px] w-full max-w-[388px]
      bg-gray-100
      rounded-[12px]
      border border-gray-300
      px-4
      text-gray-400
      cursor-not-allowed
      focus:outline-none
    "
  />
</div>


                                <div className="space-y-2 relative">
                                    <label className={`text-[16px] font-normal text-[#0C1421] ${poppins.className}`}>
                                        Create password
                                    </label>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        minLength={8}
                                        placeholder="At least 8 characters"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="h-[48px] w-full max-w-[388px] bg-[#F7FBFF] rounded-[12px] border border-[#D4D7E3] px-4"
                                    />
                                    <span
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-9 cursor-pointer text-gray-500 text-sm"
                                    >
                                        {showPassword ? "Hide" : "Show"}
                                    </span>
                                    {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                                </div>

                                <div className="space-y-2">
                                    <label className={`text-[16px] font-normal text-[#0C1421] ${poppins.className}`}>
                                        Re-enter password
                                    </label>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        minLength={8}
                                        placeholder="At least 8 characters"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        className="h-[48px] w-full max-w-[388px] bg-[#F7FBFF] rounded-[12px] border border-[#D4D7E3] px-4"
                                    />
                                    {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
                                </div>



                                <button
                                    type="submit"
                                    className={`h-[40px] w-full rounded-[10px] bg-[#F97415] cursor-pointer text-[20px] text-white font-medium
                                    shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.1),_0px_4px_6px_-1px_rgba(0,0,0,0.1)]
                                    hover:shadow-[0px_4px_8px_-2px_rgba(0,0,0,0.15),_0px_6px_12px_-2px_rgba(0,0,0,0.15)]
                                    transition-shadow duration-200 ease-in-out ${roboto.className}`}
                                >
                                    Continue
                                </button>
                            </form>

                            {/* Divider */}
                            <div className="my-8 flex items-center gap-4">
                                <div className="h-px flex-1 bg-[#CFDFE2]" />
                                <span className={`text-[16px] ${roboto.className} text-[#294957]`}>Or</span>
                                <div className="h-px flex-1 bg-[#CFDFE2]" />
                            </div>



                            {/* Login Link */}
                            <p className={`mt-8 font-normal text-center ${roboto.className} text-[16px] sm:text-[18px]`}>
                                Don't you have an account? {" "}
                                <Link href="/choose" className={`font-normal ${roboto.className} text-[#028541] cursor-pointer hover:underline`}>
                                    Sign up
                                </Link>
                            </p>

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

export default Signup;
