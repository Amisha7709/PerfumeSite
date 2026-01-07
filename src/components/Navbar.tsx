export default function Navbar() {
  return (
    <header className="absolute top-0 w-full z-50">
      <div className="max-w-screen-xl mx-auto py-5 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-green-900 contrast-50">GTG</h1>

        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#">Home</a>
          <a href="#">Shop</a>
          <a href="#">Fragrances</a>
          <a href="#">About Us</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
        </nav>

        <div className="flex items-center gap-5">
          <p className="text-2xl cursor-pointer">🔍︎</p>
          <button className="bg-linear-to-b from-green-950 to-green-700 text-white px-5 py-2 rounded-full hover:bg-green-800 transition">
            Shop Now
          </button>
        </div>
      </div>
    </header>
  );
}
