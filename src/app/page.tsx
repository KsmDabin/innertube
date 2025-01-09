import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-6">Dabinko International Company</h1>
        <p className="text-lg text-gray-600">
          Butyl inner tube를 중국에서 생산하여 북아프리카 중동 지역으로 수출을 하고 있습니다.
          특히 대형 트럭용 inner tube 에는 많은 안정된 제품 기준을 토대로 생산하면서 가격 경쟁력을 만들어 가고 있습니다.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">제품 소개</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* 여기에 제품 이미지와 설명을 추가할 수 있습니다 */}
        </div>
      </section>
    </main>
  );
}
