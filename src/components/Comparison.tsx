import gtg from "../image/gtg.svg";
import arso from "../image/arso.svg";
import bella from "../image/bella.svg";
import daisies from "../image/daisies.svg";

const rows = [
    { label: "Potency Concentration", gtg: "10x", arso: "1x", bella: "1x", daisies: "10x" },
    { label: "Longevity", gtg: true, arso: false, bella: false, daisies: true },
    { label: "Sillage", gtg: true, arso: false, bella: false, daisies: false },
    { label: "Bottle Design Score", gtg: "9", arso: "5", bella: "6", daisies: "2" },
    { label: "Blend and Harmony", gtg: true, arso: false, bella: false, daisies: false },
    { label: "Skin Compatibility", gtg: true, arso: false, bella: false, daisies: false },
    { label: "Scent Profile", gtg: true, arso: true, bella: false, daisies: false },
    { label: "Price vs. Quality", gtg: true, arso: true, bella: false, daisies: true },
];

const Cell = ({ value }: { value: boolean | string }) => {
    if (typeof value === "boolean") {
        return value ? (
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-green-900 text-white text-sm">
                ✓
            </span>
        ) : (
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-gray-400 text-gray-400 text-sm">
                ✕
            </span>
        );
    }
    return <span className="font-medium">{value}</span>;
};

export default function Comparison() {
    return (
        <section className="py-20 bg-white max-w-screen-lg mx-auto">
            <p className="text-5xl text-gray-500 text-center mb-12">---</p>
            <h2 className="text-3xl font-semibold text-center mb-12">
                Why GTG is the #1 Choice
            </h2>

            <div className="overflow-x-auto">
                <table className="w-full min-w-[900px] border-collapse text-center">
                    <thead>
                        <tr>
                            <th className="text-left p-4 text-sm text-gray-500">Qualities</th>

                            {[gtg, arso, bella, daisies].map((img, idx) => (
                                <th
                                    key={idx}
                                    className={`p-4 ${idx === 0 ? "bg-green-50 rounded-t-xl" : ""
                                        }`}
                                >
                                    <img
                                        src={img}
                                        alt="brand"
                                        className="mx-auto h-14 w-14 object-cover rounded-lg mb-2"
                                    />
                                    <p className="text-xs font-medium">
                                        {idx === 0 ? "GTG" : idx === 1 ? "Arso" : idx === 2 ? "Bella" : "Daisies"}
                                    </p>
                                </th>
                            ))}
                        </tr>
                    </thead>

                    <tbody>
                        {rows.map((row, i) => (
                            <tr key={i} className="border-t">
                                <td className="text-left p-4 text-sm text-gray-600">
                                    {row.label}
                                </td>

                                <td className="p-4 bg-green-50">
                                    <Cell value={row.gtg} />
                                </td>
                                <td className="p-4">
                                    <Cell value={row.arso} />
                                </td>
                                <td className="p-4">
                                    <Cell value={row.bella} />
                                </td>
                                <td className="p-4">
                                    <Cell value={row.daisies} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="text-center mt-16">
                <button className="bg-linear-to-b from-green-950 to-green-700 text-white px-8 py-3 rounded-full hover:bg-green-800 transition">
                    Try It Risk-Free
                </button>
            </div>
        </section>
    );
}
