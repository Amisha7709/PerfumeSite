import product1 from "../image/product1.svg"
import product2 from "../image/product2.svg"
import product3 from "../image/product3.svg"
import perfume from "../image/perfumes.svg"

export default function ProductSubscription() {
    return (
        <div>
            <div className="mt-4 px-4">
                <p className="text-sm font-medium mb-2">Choose a Fragrance</p>

                <div className="grid grid-cols-3 gap-3">
                    {[
                        { name: "Original", img: product1 },
                        { name: "Lily", img: product2 },
                        { name: "Rose", img: product3 },
                    ].map((item) => (
                        <label
                            key={item.name}
                            className="rounded-lg p-2 text-center cursor-pointer bg-gray-50"
                        >
                            <div className="flex items-center gap-2">
                                <input type="radio" />
                                <span className="text-xs mt-1">{item.name}</span>
                            </div>
                            <div className="flex justify-center">
                                <img src={item.img} alt="" />
                            </div>
                        </label>
                    ))}
                </div>
            </div>

            <div className="mt-5 px-4">
                <p className="text-sm font-medium mb-2">What’s Included:</p>

                <div className="grid grid-cols-3 gap-3">
                    <div className="border border-gray-400 rounded-lg p-3">
                        <p className="text-xs text-gray-500 mb-2">Every 30 Days</p>
                        <div className="flex justify-center">
                            <img src={product1} alt="" />
                        </div>
                    </div>

                    <div className="border border-gray-400 rounded-lg p-3 text-center col-span-2">
                        <p className="text-xs text-gray-500 mb-2">
                            One Time <span className="text-green-600">(Free)</span>
                        </p>
                        <div className="flex justify-center">
                            <img src={perfume} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <ul className="my-5 space-y-2 text-sm text-gray-600 px-4">
                <li>✔ 1 Bottle Shipped Monthly</li>
                <li>✔ Free Sampler For Original, Lily And Rose Fragrances</li>
                <li className="font-semibold text-green-700">✔ 50% OFF Shipping</li>
                <li>✔ Pause Or Cancel Anytime After 3 Months Minimum</li>
                <li>✔ 28 Day Money Back Guarantee*</li>
            </ul>
        </div>
    );
}
