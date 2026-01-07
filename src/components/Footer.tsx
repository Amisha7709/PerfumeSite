export default function Footer() {
    return (
        <footer className="bg-[#0b3b1e] text-white">
            <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">

                <div>
                    <h2 className="text-2xl font-semibold mb-6">GTG</h2>

                    <div className="grid grid-cols-2 gap-8 text-sm text-white/80">
                        <div className="space-y-3">
                            <p className="cursor-pointer hover:text-white">Home</p>
                            <p className="cursor-pointer hover:text-white">Shop</p>
                            <p className="cursor-pointer hover:text-white">Fragrances</p>
                        </div>

                        <div className="space-y-3">
                            <p className="cursor-pointer hover:text-white">About Us</p>
                            <p className="cursor-pointer hover:text-white">Blog</p>
                            <p className="cursor-pointer hover:text-white">Contact</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-4 text-sm text-white/80 md:items-start">
                    <h2 className="text-2xl font-semibold mb-6"></h2>
                    <p className="flex items-center gap-3 cursor-pointer hover:text-white">
                        <span className="text-lg">f</span> Facebook
                    </p>
                    <p className="flex items-center gap-3 cursor-pointer hover:text-white">
                        <span className="text-lg">◎</span> Instagram
                    </p>
                    <p className="flex items-center gap-3 cursor-pointer hover:text-white">
                        <span className="text-lg">𝕏</span> X
                    </p>
                </div>

                <div>
                    <p className="mb-4 text-sm font-bold">
                        Join our newsletter to stay up to date on features and releases.
                    </p>

                    <div className="flex gap-3 mb-3">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full bg-transparent border border-white/40 px-4 py-2 text-sm outline-none focus:border-white"
                        />
                        <button className="bg-[#8b5a1e] px-6 py-2 text-sm font-medium hover:opacity-90">
                            Subscribe
                        </button>
                    </div>

                    <p className="text-xs text-white/60 leading-relaxed">
                        By subscribing you agree to our{" "}
                        <span className="underline cursor-pointer">Privacy Policy</span> and
                        provide consent to receive updates from our company.
                    </p>
                </div>
            </div>
        </footer>
    );
}
