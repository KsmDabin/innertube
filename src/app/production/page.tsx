import Image from 'next/image'

export default function ProductionProcedure() {
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
      <h1 className="text-4xl font-bold mb-12">Production Procedure</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {procedures.map((proc) => (
          <div key={proc.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="relative h-64">
              <Image
                src={proc.image}
                alt={proc.title}
                fill
                style={{ objectFit: 'cover' }}
                className="transition-transform hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{proc.title}</h3>
              <p className="text-gray-600">{proc.description}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
