import { useState } from "react";
import collection from "../image/collection.svg";

const items = [
    {
        title: "Signature Scents",
        content:
            "Discover our curated line of signature perfumes, designed to become your daily companion.",
    },
    { title: "Signature Scents", content: "" },
    { title: "Signature Scents", content: "" },
    { title: "Signature Scents", content: "" },
];

export default function Collection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-3xl font-semibold mb-6">Our Collection</h2>

                    <div className="space-y-4">
                        {items.map((item, index) => {
                            const isOpen = openIndex === index;

                            return (
                                <div
                                    key={index}
                                    className="border rounded-lg transition"
                                >
                                    <button
                                        onClick={() =>
                                            setOpenIndex(isOpen ? null : index)
                                        }
                                        className="w-full flex justify-between items-center px-6 py-4 text-left"
                                    >
                                        <span className="font-bold">
                                            {item.title}
                                        </span>

                                        <span className="text-xl font-bold">
                                            {isOpen ? "−" : "+"}
                                        </span>
                                    </button>

                                    {isOpen && (
                                        <div className="px-6 pb-5 text-sm text-gray-500 leading-relaxed">
                                            {item.content}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                <img
                    src={collection}
                    alt="Collection"
                    className="rounded-xl"
                />
            </div>
        </section>
    );
}
