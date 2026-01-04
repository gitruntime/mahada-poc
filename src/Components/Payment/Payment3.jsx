import React, { useState } from "react";
import {
    CreditCard,
    Lock,
    Smartphone,
    QrCode,
    Wallet,
    ChevronDown,
    Shield,
} from "lucide-react";



const UPIAppLogos = [
    { name: "GPay", },
    { name: "PhonePe", },
    { name: "Paytm", },
    { name: "BHIM", },
];
import Link from "next/link";

/* ---------------- PAYMENT TABS ---------------- */
const PaymentMethodTabs = ({ activeTab, setActiveTab }) => {
    return (
        <div className="flex bg-[#ECECF0] rounded-full p-1">
            {["upi", "cards"].map((tab) => (
                <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 py-3 rounded-full text-sm font-medium flex items-center justify-center gap-2 transition
            ${activeTab === tab ? "bg-white shadow text-black" : "text-gray-500"}
          `}
                >
                    {tab === "upi" ? <Smartphone size={16} /> : <CreditCard size={16} />}
                    {tab.toUpperCase()}
                </button>
            ))}
        </div>
    );
};

/* ---------------- CARD PAYMENT ---------------- */
const CardPaymentForm = () => {
    const [card, setCard] = useState({
        type: "Credit Card",
        number: "",
        expiryMonth: "",
        expiryYear: "",
        cvv: "",
        name: "",
    });

    const inputClass =
        "w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400";

    // Validation functions
    const isCardNumberValid = card.number.replace(/\s/g, "").length === 16;
    const isExpiryValid = (() => {
        if (!card.expiryMonth || !card.expiryYear) return false;
        const expDate = new Date(`${card.expiryYear}-${card.expiryMonth}-01`);
        const today = new Date();
        // Set to end of month
        expDate.setMonth(expDate.getMonth() + 1);
        expDate.setDate(0);
        return expDate >= today;
    })();
    const isCVVValid = /^\d{3}$/.test(card.cvv);
    const isNameValid = card.name.trim().length > 0;

    const isValid = isCardNumberValid && isExpiryValid && isCVVValid && isNameValid;

    return (
        <div className="bg-white rounded-xl p-6 space-y-4 mx-auto">
            <h3 className="font-semibold flex items-center gap-2 text-gray-900 text-lg">
                <CreditCard size={18} /> Card Details
            </h3>

            {/* Card Type */}
            <div>
                <label className="text-gray-700 text-sm mb-1 block">Card Type</label>
                <select
                    className={inputClass}
                    value={card.type}
                    onChange={(e) => setCard({ ...card, type: e.target.value })}
                >
                    <option>Credit Card</option>
                    <option>Debit Card</option>
                </select>
            </div>

            {/* Card Number */}
            <div>
                <label className="text-gray-700 text-sm mb-1 block">Card Number</label>
                <input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    maxLength={19} // 16 digits + 3 spaces
                    className={inputClass}
                    value={card.number}
                    onChange={(e) => {
                        let value = e.target.value.replace(/\D/g, ""); // only digits
                        value = value.slice(0, 16); // max 16 digits
                        value = value.match(/.{1,4}/g)?.join(" ") || ""; // add spaces
                        setCard({ ...card, number: value });
                    }}
                />
                {!isCardNumberValid && card.number && (
                    <p className="text-red-500 text-xs mt-1">Card number must be 16 digits</p>
                )}
            </div>

            {/* Expiry Month & Year */}
            <div>
                <label className="text-gray-700 text-sm mb-1 block">Expiry Date</label>
                <div className="grid grid-cols-2 gap-4">
                    <select
                        className={inputClass}
                        value={card.expiryMonth}
                        onChange={(e) => setCard({ ...card, expiryMonth: e.target.value })}
                    >
                        <option value="">MM</option>
                        {[...Array(12)].map((_, i) => (
                            <option key={i} value={String(i + 1).padStart(2, "0")}>
                                {String(i + 1).padStart(2, "0")}
                            </option>
                        ))}
                    </select>

                    <select
                        className={inputClass}
                        value={card.expiryYear}
                        onChange={(e) => setCard({ ...card, expiryYear: e.target.value })}
                    >
                        <option value="">YYYY</option>
                        {Array.from({ length: 10 }, (_, i) => new Date().getFullYear() + i).map(
                            (year) => (
                                <option key={year} value={year}>
                                    {year}
                                </option>
                            )
                        )}
                    </select>
                </div>
                {!isExpiryValid && card.expiryMonth && card.expiryYear && (
                    <p className="text-red-500 text-xs mt-1">Expiry date is invalid or in the past</p>
                )}
            </div>

            {/* CVV */}
            <div>
                <label className="text-gray-700 text-sm mb-1 block">CVV</label>
                <input
                    type="text"
                    placeholder="123"
                    maxLength={3}
                    className={inputClass}
                    value={card.cvv}
                    onChange={(e) => setCard({ ...card, cvv: e.target.value.replace(/\D/g, "") })}
                />
                {!isCVVValid && card.cvv && (
                    <p className="text-red-500 text-xs mt-1">CVV must be 3 digits</p>
                )}
            </div>

            {/* Cardholder Name */}
            <div>
                <label className="text-gray-700 text-sm mb-1 block">Cardholder Name</label>
                <input
                    placeholder="John Doe"
                    className={inputClass}
                    value={card.name}
                    onChange={(e) => setCard({ ...card, name: e.target.value })}
                />
                {!isNameValid && card.name && (
                    <p className="text-red-500 text-xs mt-1">Name cannot be empty</p>
                )}
            </div>

            {/* Info Box */}
            <div className="flex items-center gap-2 text-gray-500 text-sm p-3 border border-gray-200 rounded-lg">
                <Lock size={16} /> Your payment information is encrypted and secure
            </div>

            {/* Pay Button */}
            <Link href="/Landlord/logindone"
                disabled={!isValid}
                className={`w-full py-3 rounded-lg flex items-center justify-center gap-2 font-medium transition
          ${isValid
                        ? "bg-black text-white hover:opacity-90"
                        : "bg-gray-200 text-gray-400 cursor-not-allowed"
                    }
        `}
            >
                <Lock size={16} /> Pay ₹299.00
            </Link>
        </div>
    );
};


/* ---------------- UPI OPTIONS ---------------- */
const UPIPaymentOptions = () => {
    const [open, setOpen] = useState(null);

    const options = [
        { id: "qr", label: "Scan QR Code", icon: <QrCode size={18} /> },
        { id: "apps", label: "Pay by any UPI app", icon: <Smartphone size={18} /> },
        { id: "id", label: "Pay with UPI ID", icon: <Wallet size={18} /> },
    ];

    const inputClass =
        "w-full border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400";

    return (
        <div className="bg-white rounded-xl divide-y divide-gray-200">
            {options.map((opt) => (
                <div key={opt.id}>
                    {/* Option Header */}
                    <button
                        onClick={() => setOpen(open === opt.id ? null : opt.id)}
                        className="w-full flex justify-between items-center p-4 hover:bg-gray-50 transition rounded-t-lg"
                    >
                        <div className="flex items-center gap-3">
                            <span className="text-gray-700">{opt.icon}</span>
                            <span className="font-medium text-gray-800">{opt.label}</span>
                        </div>
                        <ChevronDown
                            className={`transition-transform duration-300 ${open === opt.id ? "rotate-180" : ""
                                }`}
                        />
                    </button>

                    {/* Option Content */}
                    {open === opt.id && (
                        <div className="p-4 bg-gray-50 text-sm space-y-3 rounded-b-lg">
                            {opt.id === "qr" && (
                                <div className="flex flex-col items-center gap-2">
                                    <img
                                        src="/demoqr1.png"
                                        alt="Demo QR"
                                        className="w-36 h-36 object-contain"
                                    />
                                    <p className="text-gray-600 text-center">
                                        Scan using any UPI app
                                    </p>
                                </div>
                            )}

                            {opt.id === "apps" && (
                                <div className="flex justify-evenly flex-wrap gap-2">
                                    {["GPay", "PhonePe", "Paytm", "BHIM"].map((app) => (
                                        <button
                                            key={app}
                                            className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition"
                                        >
                                            {app}
                                        </button>
                                    ))}
                                </div>
                            )}

                            {opt.id === "id" && (
                                <input
                                    type="text"
                                    placeholder="yourname@upi"
                                    className={inputClass}
                                />
                            )}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

/* ---------------- SUMMARY ---------------- */
const PaymentSummary = () => {
    return (
        <div className="bg-white rounded-xl shadow-sm p-6 space-y-4 sticky top-8 w-full max-w-sm">
            {/* Header */}
            <div className="flex justify-between items-center">
                <h3 className="font-semibold text-[#0A0A0A]">Payment Summary</h3>
                <span className="text-xs text-gray-400 px-2 py-1 border border-gray-200 rounded-md">ORD-2025-001234</span>
            </div>

            {/* Payment Details */}
            <div className="flex justify-between">
                <span className="text-[#717182]">Payment Type</span>
                <span className="font-normal">One-time</span>
            </div>

            <div className="flex justify-between">
                <span className="text-[#717182]">Refundable</span>
                <span className="font-normal">No</span>
            </div>

            <div className="flex justify-between">
                <span className="text-[#717182]">Registration Fee</span>
                <span className="font-semibold text-[16px]">₹ 299</span>
            </div>

            <hr className="border-gray-200" />

            {/* Total */}
            <div className="flex justify-between">
                <span className="font-semibold text-[#0A0A0A]">Total Amount</span>
                <span className="font-semibold text-[16px]">₹ 299.00</span>
            </div>
        </div>

    );
};

/* ---------------- SECURITY ---------------- */
const SecurityNotice = () => {
    return (
        <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex gap-3">
            <Shield className="text-green-600" />
            <div>
                <p className="text-sm">Your payment is protected</p>
                <p className="text-sm">We use industry-standard encryption to protect your payment information. Your card details are never stored on our servers.</p>

            </div>

        </div>
    );
};

/* ================= MAIN ================= */
const Payment3 = () => {
    const [activeTab, setActiveTab] = useState("upi");

    return (
        <div className="min-h-screen py-10 px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-6">
                {/* LEFT SECTION */}
                <div className="lg:col-span-3 space-y-6">
                    <div className="bg-white border border-[#0000001A] rounded-xl p-6">
                        <div className="flex justify-start text-[16px] px-2 mb-[30px]">
                            <h1>Choose Payment Method</h1>

                        </div>

                        <PaymentMethodTabs activeTab={activeTab} setActiveTab={setActiveTab} />
                        <div className="mt-6 border rounded-[14px] border-[#0000001A] shadow-sm bg-white">
                            <div className="px-4 py-3  text-[16px] font-normal">
                                Choose UPI Payment Method
                            </div>
                            <div className="p-4">
                                {activeTab === "upi" ? <UPIPaymentOptions /> : <CardPaymentForm />}
                            </div>
                        </div>

                    </div>
                    <SecurityNotice />
                </div>

                {/* RIGHT SECTION */}
                <div className="lg:col-span-2">
                    <PaymentSummary />
                </div>
            </div>
        </div>
    );
};

export default Payment3;
