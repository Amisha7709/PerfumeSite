import { useState } from "react";
import product from "../image/product.svg";
import productList from "../image/productList.svg";
import ProductSubscription from "./ProductSubscription";

export default function ProductSection() {
  const [selectedPlan, setSelectedPlan] = useState<"single" | "double">("single");

  return (
    <section className="py-20 bg-white max-w-screen-xl mx-auto">
      <div className="px-6 grid md:grid-cols-2 gap-9">
        <div className="flex flex-col gap-4">
          <img src={product} className="rounded-xl shadow-lg" alt="GTG Perfume" />
          <img src={productList} className="rounded-xl shadow-lg" alt="GTG Perfume" />
        </div>

        <div>
          <section className="bg-white px-5">
            <h2 className="text-xl font-bold text-green-900">GTG Perfumes</h2>

            <div className="flex items-center gap-2 text-sm mt-1">
              <span className="text-green-600">★★★★★</span>
              <span className="text-gray-500">4.7 (999+ reviews)</span>
            </div>

            <p className="text-sm text-gray-600 mt-3 leading-relaxed">
            Experience the timeless allure backed by modern artistry, captured in every bottle of our fragrance. Crafted for those who seek to elevate their essence with purpose and sophistication.
            </p>

            <div className="border border-gray-300 rounded mt-4">
              <div className="bg-linear-to-l from-green-950 to-green-700 text-white text-center text-sm font-semibold py-2">
                Most Popular
              </div>

              <div className="flex justify-between items-center px-4 py-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="subscription"
                    checked={selectedPlan === "single"}
                    onChange={() => setSelectedPlan("single")}
                  />
                  <span className="font-medium">Single Subscription</span>
                </label>

                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold">$99.99</span>
                  <span className="line-through text-sm text-gray-400">$146</span>
                </div>
              </div>

              {selectedPlan === "single" && (
                <div className="px-4 pb-4">
                  <ProductSubscription />
                </div>
              )}
            </div>

            <div className="border border-gray-300 rounded mt-6">
              <div className="flex justify-between items-center px-4 py-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="subscription"
                    checked={selectedPlan === "double"}
                    onChange={() => setSelectedPlan("double")}
                  />
                  <span className="font-medium">Double Subscription</span>
                </label>

                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold">$169.99</span>
                  <span className="line-through text-sm text-gray-400">$146</span>
                </div>
              </div>

              {selectedPlan === "double" && (
                <div className="px-4 pb-4">
                  <ProductSubscription />
                </div>
              )}
            </div>

            <button className="w-full mt-6 bg-linear-to-b from-green-950 to-green-700 text-white py-3 rounded-full hover:bg-green-800 transition font-medium">
              Add to Cart
            </button>
          </section>
        </div>
      </div>
    </section>
  );
}
