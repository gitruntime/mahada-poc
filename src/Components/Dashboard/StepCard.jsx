import { Roboto } from "next/font/google";
import Link from "next/link";
const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

const StepsCard = () => {
    const totalSteps = 6;
    const completedSteps = 4;
    const progress = (completedSteps / totalSteps) * 100;

    const size = 240; // SVG size
    const strokeWidth = 16;
    const radius = (size - strokeWidth) / 2; // circle radius fits inside SVG
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
        <div className="flex items-center justify-center">
            <div className="relative w-[240px] h-[240px] bg-white rounded-2xl flex items-center justify-center">
                {/* SVG Circle Progress */}
                <svg
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    width={size}
                    height={size}
                    viewBox={`0 0 ${size} ${size}`}
                    style={{ transform: 'rotate(-90deg) scaleY(-1)' }} // Flips the orientation to the top-right quadrant
                >
                    {/* Background Circle (Gray) */}
                    <circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        fill="none"
                        stroke="#e5e7eb"
                        strokeWidth={strokeWidth}
                        strokeLinecap="round"
                    />

                    {/* Progress Circle (Orange) */}
                    <circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        fill="none"
                        stroke="#f97316"
                        strokeWidth={strokeWidth}
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        className="transition-all duration-500"
                    />
                </svg>


                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center">
                    <div className={`text-[52px] font-semibold text-black ${roboto.className}`}>
                        {completedSteps}/{totalSteps}
                    </div>
                    <div className={`text-[#00000066] text-[16px] ${roboto.className} font-medium`}>
                        Steps Completed
                    </div>
                    <Link href="/bankinfo" className="mt-2 px-4 py-1 bg-[#F9741533] text-[#F97415] h-[32px] rounded-lg font-semibold text-[14px] leading-[14px] tracking-normal hover:bg-orange-200 transition-colors flex items-center gap-1">
                        Verify Now <span>›</span>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default StepsCard;
