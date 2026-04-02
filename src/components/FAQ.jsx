import { useState } from "react";

const faqData = [
  {
    question: "What is Bookmark?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
  },
  {
    question: "How can I request a new browser?",
    answer:
      "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies.",
  },
  {
    question: "Is there a mobile app?",
    answer:
      "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget.",
  },
  {
    question: "What about other Chromium browsers?",
    answer:
      "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20" id="contact">
      <div className="container mx-auto px-6 text-center max-w-lg mb-12">
        <h2 className="text-3xl font-medium mb-6 text-veryDarkBlue">
          Frequently Asked Questions
        </h2>
        <p className="text-grayishBlue text-lg">
          Here are some of our FAQs. If you have any other questions you'd like
          answered please feel free to email us.
        </p>
      </div>

      <div className="container mx-auto px-6 max-w-xl mb-12">
        {faqData.map((item, index) => (
          <div key={index} className="border-b border-gray-200 py-4">
            <button
              onClick={() => toggle(index)}
              className="flex justify-between items-center w-full cursor-pointer group text-left"
            >
              <h3 className="text-lg text-veryDarkBlue group-hover:text-softRed transition duration-200">
                {item.question}
              </h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="12"
                className={`flex-shrink-0 ml-4 transition-transform duration-300
                  ${openIndex === index ? "rotate-180 text-softRed" : "text-softBlue"}`}
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  d="M1 1l8 8 8-8"
                />
              </svg>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out
                ${openIndex === index ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"}`}
            >
              <p className="text-grayishBlue text-sm">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button className="bg-softBlue text-white px-6 py-3 rounded shadow-md border-2 border-softBlue hover:bg-white hover:text-softBlue transition duration-300 font-medium">
          More Info
        </button>
      </div>
    </section>
  );
}

export default FAQ;
