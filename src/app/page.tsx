import Image from 'next/image'

export default function Home() {
  const procedures = [
    { id: 1, title: "Producing round tube", image: "/images/1-Producing round tube.png", description: "Round tube production process" },
    { id: 2, title: "Produce tube", image: "/images/2-Produce tube.png", description: "Tube manufacturing process" },
    { id: 3, title: "Joining valve", image: "/images/3-Joinning valve.png", description: "Valve assembly process" },
    { id: 4, title: "Inspection", image: "/images/4-Inspection.png", description: "Quality inspection process" },
    { id: 5, title: "Tube logo", image: "/images/5-Tube logo.png", description: "Logo printing process" },
    { id: 6, title: "Carton box", image: "/images/6-Carton box.png", description: "Packaging preparation" },
    { id: 7, title: "Stuffing", image: "/images/7-Stuffing.png", description: "Container loading process" },
    { id: 8, title: "Voyage", image: "/images/8-Voyage.png", description: "Shipping process" }
  ];

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-6">Welcome to Dabinko International Company</h1>
        <p className="text-lg text-gray-600 mb-8">
          We specialize in manufacturing and exporting Butyl inner tubes from China to North Africa 
          and the Middle East regions. Our focus is particularly on heavy-duty truck inner tubes, 
          which are produced under strict quality standards while maintaining competitive pricing 
          in the global market.
        </p>
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
                  style={{ objectFit: 'contain' }}
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
  )
}
