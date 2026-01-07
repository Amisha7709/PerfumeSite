const stats = [
  { value: "84%", label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
  { value: "78%", label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
  { value: "89%", label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
  { value: "90%", label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
];

export default function StatsBar() {
  return (
    <section className="bg-linear-to-b from-green-950 to-green-700">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center text-white">
          {stats.map((item, index) => (
            <div key={index}>
              <p className="text-4xl font-bold mb-2">{item.value}</p>
              <p className="text-sm text-green-100 leading-relaxed">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
