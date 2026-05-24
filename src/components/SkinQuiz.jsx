// SkinQuiz.jsx
import QuestionCard from "../components/QuestionCard";
import ResultCard from "../components/ResultCard";
import { useState } from "react";

function SkinQuiz() {

  const questions = [

    {
      question: "How does your skin feel after washing?",
      options: [
        "Dry & Tight",
        "Soft & Normal",
        "Oily & Shiny",
      ],
    },

    {
      question: "How often do you get acne?",
      options: [
        "Never",
        "Sometimes",
        "Very Often",
      ],
    },

    {
      question: "How sensitive is your skin?",
      options: [
        "Very Sensitive",
        "Slightly Sensitive",
        "Not Sensitive",
      ],
    },

    {
      question: "What is your biggest skin concern?",
      options: [
        "Acne",
        "Dryness",
        "Dark Spots",
        "Oiliness",
      ],
    },

  ];

  const [currentQuestion, setCurrentQuestion] =
    useState(0);

  const [answers, setAnswers] =
    useState([]);

  const [showResult, setShowResult] =
    useState(false);

  // HANDLE ANSWER
  const handleAnswer = (option) => {

    const updatedAnswers = [
      ...answers,
      option,
    ];

    setAnswers(updatedAnswers);

    // NEXT QUESTION
    if (
      currentQuestion + 1 <
      questions.length
    ) {

      setCurrentQuestion(
        currentQuestion + 1
      );

    } else {

      setShowResult(true);
    }
  };

  // DETECT SKIN TYPE
  const getSkinType = () => {

    const oilyCount =
      answers.filter(
        (a) =>
          a.includes("Oily") ||
          a.includes("Very Often")
      ).length;

    const dryCount =
      answers.filter(
        (a) =>
          a.includes("Dry")
      ).length;

    if (oilyCount >= 2) {
      return {
        type: "Oily Skin",
        products: [
          "Salicylic Acid Face Wash",
          "Oil-Free Moisturizer",
          "Niacinamide Serum",
        ],
      };
    }

    if (dryCount >= 2) {
      return {
        type: "Dry Skin",
        products: [
          "Hydrating Cleanser",
          "Ceramide Moisturizer",
          "Hyaluronic Acid Serum",
        ],
      };
    }

    return {
      type: "Normal Skin",
      products: [
        "Gentle Face Wash",
        "Vitamin C Serum",
        "Daily Moisturizer",
      ],
    };
  };

  const result =
    getSkinType();

  return (

    <section id="skin" className="w-full px-6 md:px-16 py-24 bg-gradient-to-b from-blue-50 to-white">

      <div className="max-w-3xl mx-auto bg-white rounded-[35px] shadow-xl p-8 md:p-12">

        {!showResult ? (

          <>

            {/* Progress */}
            <div className="mb-8">

              <div className="flex justify-between mb-3">

                <p className="text-blue-600 font-medium">
                  Question {currentQuestion + 1}
                </p>

                <p className="text-gray-500">
                  {questions.length}
                </p>

              </div>

              <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">

                <div
                  className="h-full bg-blue-600 transition-all duration-500"
                  style={{
                    width: `${
                      ((currentQuestion + 1) /
                        questions.length) *
                      100
                    }%`,
                  }}
                ></div>

              </div>

            </div>


       
        <QuestionCard
         question={
           questions[currentQuestion]
             .question
         }
         options={
           questions[currentQuestion]
             .options
         }
         onAnswer={handleAnswer}
       />
        

          </>

        ) : (

          <>

            {/* Result */}
         <ResultCard
        skinType={result.type}
        products={result.products}
        onRestart={() => {
      
          setCurrentQuestion(0);
      
          setAnswers([]);
      
          setShowResult(false);
        }}
     />      

            {/* Product Suggestions */}
            <div className="grid md:grid-cols-3 gap-6">

              {result.products.map(
                (product, index) => (

                  <div
                    key={index}
                    className="bg-blue-50 border border-blue-100 rounded-3xl p-6 text-center hover:shadow-lg transition duration-300"
                  >

                    <h3 className="text-lg font-semibold text-gray-800">

                      {product}

                    </h3>

                  </div>

                )
              )}

            </div>

            {/* Restart */}
            <button
              onClick={() => {

                setCurrentQuestion(0);

                setAnswers([]);

                setShowResult(false);
              }}
              className="w-full mt-10 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl text-lg font-semibold transition duration-300"
            >

              Retake Quiz

            </button>

          </>

        )}

      </div>

    </section>
  );
}

export default SkinQuiz;