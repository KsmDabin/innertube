import Image from "next/image";

export default function Home() {
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
    </main>
  );
}
