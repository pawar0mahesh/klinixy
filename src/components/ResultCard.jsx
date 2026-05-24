// components/ResultCard.jsx

function ResultCard({
  skinType,
  products,
  onRestart,
}) {

  return (

    <div className="w-full text-center">

      {/* Heading */}
      <p className="text-blue-600 font-semibold mb-4">
        Skin Analysis Complete
      </p>

      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">

        Your Skin Type:
        <span className="text-blue-600">
          {" "}
          {skinType}
        </span>

      </h2>

      <p className="text-gray-600 leading-8 max-w-2xl mx-auto mb-12">

        Based on your answers, these skincare
        products may help improve your skin
        health and daily skincare routine.

      </p>

      {/* Product Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {products.map((product, index) => (

          <div
            key={index}
            className="bg-blue-50 border border-blue-100 rounded-3xl p-6 hover:shadow-xl transition duration-300"
          >

            <div className="w-16 h-16 mx-auto mb-5 bg-blue-100 rounded-full flex items-center justify-center text-3xl">

              ✨

            </div>

            <h3 className="text-lg font-semibold text-gray-800 leading-7">

              {product}

            </h3>

          </div>

        ))}

      </div>

      {/* Restart Button */}
      <button
        onClick={onRestart}
        className="mt-12 bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-2xl text-lg font-semibold transition duration-300 shadow-lg"
      >

        Retake Quiz

      </button>

    </div>
  );
}

export default ResultCard;