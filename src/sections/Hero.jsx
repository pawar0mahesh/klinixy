// Hero.jsx
// Hero.jsx
import docter from "../assets/doc.png"
import bglogo from "../assets/bglogo2.png"

function Hero() {
  return (
    <section id="hero" className="w-full min-h-screen px-8 md:px-16 py-10 lg:py-10  flex flex-col-reverse md:flex-row items-center justify-between gap-15 bg-gradient-to-b from-white to-blue-50">

      {/* Left Content */}
      <div className="flex-1 text-center md:text-left">

        <p className="text-blue-600 font-semibold mb-4">
          Smart Healthcare For Everyone
        </p>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight text-gray-900">
          The Pulse Of 
          <span className="text-blue-600"> Digital </span>
           Care
        </h1>

        <p className="text-gray-600 text-lg mt-6 leading-8 max-w-xl">
          Manage medicines, track nutrition, access prescriptions,
          and improve your health journey with modern healthcare solutions.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 mt-10 justify-center md:justify-start">

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl text-lg transition duration-300 shadow-lg">
            Get Started
          </button>

          <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-2xl text-lg transition duration-300">
            Learn More
          </button>

        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-10 mt-14 justify-center md:justify-start">

          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              1K+
            </h2>
            <p className="text-gray-500">
              Active Users
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              50+
            </h2>
            <p className="text-gray-500">
              Health Experts
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              24/7
            </h2>
            <p className="text-gray-500">
              Support
            </p>
          </div>

        </div>

      </div>



      <img
       src={bglogo}
       alt="Logo Background"
       className="absolute w-[60%] h-auto opacity-10 blur-[2px] "
       style={{ top: '60%', left: '60%', transform: 'translate(-50%, -50%) ' }}
       />

      {/* Right Image */}
      <div className="flex-1 flex justify-center ">

       <img
  src={docter}
  alt="Healthcare"
  className="
    w-full
    max-w-xs
    sm:max-w-md
    md:max-w-2xl
    lg:max-w-4xl
    h-auto
    z-[1]
    mx-auto
    translate-x-0
    md:translate-x-10
    lg:translate-x-15
  "
/>

      </div>

    </section>
  );
}

export default Hero;