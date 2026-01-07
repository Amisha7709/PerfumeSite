import hero from "../image/hero.svg";
import award from "../image/award.svg";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center"
      style={{
        backgroundImage: `url(${hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >

      <div className="relative px-6 sm:px-14 md:px-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="flex w-fit gap-2 bg-linear-to-b from-[#032E15] to-[#016630] contrast-50 text-white px-4 py-2 rounded-full text-sm mb-4">
            <img src={award} alt="" />
            <p>Awarded the best perfume in the world</p>
          </span>

          <h1 className="text-5xl text-[#032E15] md:text-6xl font-bold">
            Live your best life.
          </h1>

          <div className="flex gap-10 mt-8 text-[#032E15] contrast-50">
            <div>
              <p className="text-4xl font-bold">10x</p>
              <p className="text-sm">power</p>
            </div>
            <div>
              <p className="text-4xl font-bold">9</p>
              <p className="text-sm">ingredients</p>
            </div>
            <div>
              <p className="text-4xl font-bold">20K+</p>
              <p className="text-sm">happy customers</p>
            </div>
          </div>

          <button className="my-10 bg-linear-to-b from-green-950 to-green-700 text-white px-8 py-3 rounded-full hover:bg-green-800 transition">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
}
