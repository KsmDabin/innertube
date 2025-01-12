export default function Contact() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
      
      {/* Company Banner */}
      <div className="bg-[#1e3a8a] text-white py-16 mb-16 text-center rounded-lg">
        <h2 className="text-3xl">DABINKO INTERNATIONAL COMPANY</h2>
      </div>

      {/* Contact Information Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Address */}
        <div className="text-center">
          <div className="w-24 h-24 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
            <svg className="w-10 h-10 text-[#1e3a8a]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-4">Address</h3>
          <p className="text-gray-600">            
            Rm. 301-3, Daekyung T&S Bldg., 9,<br />
            Yonghyeon-ro, Deogyang-gu,<br />
            Goyang-si, Gyeonggi-do,<br />
            South-Korea<br />
            10526
          </p>
        </div>

        {/* E-mail */}
        <div className="text-center">
          <div className="w-24 h-24 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
            <svg className="w-10 h-10 text-[#1e3a8a]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-4">E-mail</h3>
          <p>
            <a href="mailto:info@florescence.cc" className="text-blue-600 hover:underline">info@florescence.cc</a>
          </p>
          <p>
            <a href="mailto:info85@florescence.cc" className="text-blue-600 hover:underline">info85@florescence.cc</a>
          </p>
        </div>

        {/* Phone */}
        <div className="text-center">
          <div className="w-24 h-24 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
            <svg className="w-10 h-10 text-[#1e3a8a]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-4">Phone</h3>
          <p className="text-gray-600">0086-532-86760999 ext. 805</p>
        </div>

        {/* Hours */}
        <div className="text-center">
          <div className="w-24 h-24 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
            <svg className="w-10 h-10 text-[#1e3a8a]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-4">Hours</h3>
          <p className="text-gray-600">Monday-Sunday: 9am to 6pm</p>
        </div>
      </div>
    </main>
  )
}
