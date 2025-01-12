import Image from "next/image";

export default function Home() {
  const procedures = [
    { id: 1, title: "Mixing", image: "/images/1.png", description: "Raw material mixing process" },
    { id: 2, title: "Extrusion", image: "/images/2.png", description: "Tube extrusion process" },
    { id: 3, title: "Splicing", image: "/images/3.png", description: "Tube splicing process" },
    { id: 4, title: "Vulcanization", image: "/images/4.png", description: "Heat curing process" },
    { id: 5, title: "Testing", image: "/images/5.png", description: "Quality testing process" },
    { id: 6, title: "Inspection", image: "/images/6.png", description: "Final inspection" },
    { id: 7, title: "Packaging", image: "/images/7.png", description: "Packaging for shipping" },
  ];

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-6">Dabinko International Company</h1>
        <p className="text-lg text-gray-600">
          We specialize in manufacturing and exporting Butyl inner tubes from China to North Africa 
          and the Middle East regions. Our focus is particularly on heavy-duty truck inner tubes, 
          which are produced under strict quality standards while maintaining competitive pricing 
          in the global market.
        </p>
      </section>
      

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Product grid items will be added here */}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 border rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
            <p>Manufactured under strict quality control standards to ensure product reliability</p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Competitive Pricing</h3>
            <p>Offering market-competitive prices without compromising on quality</p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Global Distribution</h3>
            <p>Established export channels to North Africa and Middle East markets</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Production Procedure</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {procedures.map((proc) => (
            <div key={proc.id} className="border rounded-lg overflow-hidden shadow-md">
              <div className="relative h-48">
                <Image
                  src={proc.image}
                  alt={proc.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{proc.title}</h3>
                <p className="text-gray-600">{proc.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
