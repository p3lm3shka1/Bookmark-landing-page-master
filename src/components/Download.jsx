import chrome from "../assets/images/logo-chrome.svg";
import firefox from "../assets/images/logo-firefox.svg";
import opera from "../assets/images/logo-opera.svg";
import dots from "../assets/images/bg-dots.svg";

const cards = [
  { logo: chrome, name: "Chrome", version: 62, offset: "" },
  { logo: firefox, name: "Firefox", version: 55, offset: "lg:mt-8" },
  { logo: opera, name: "Opera", version: 46, offset: "lg:mt-16" },
];

function Download() {
  return (
    <section className="py-20 mt-20" id="pricing">
      <div className="container mx-auto px-6 text-center max-w-lg mb-16">
        <h2 className="text-3xl font-medium mb-6 text-veryDarkBlue">
          Download the extension
        </h2>
        <p className="text-grayishBlue text-lg">
          We've got more browsers in the pipeline. Please do let us know if
          you've got a favourite you'd like us to prioritize.
        </p>
      </div>

      <div className="container mx-auto px-6 max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {cards.map((card) => (
          <div
            key={card.name}
            className={`shadow-xl rounded-xl p-6 text-center flex flex-col items-center bg-white ${card.offset}`}
          >
            <img src={card.logo} alt={card.name} className="mb-6 mt-6" />
            <h3 className="text-xl font-medium mb-2">Add to {card.name}</h3>
            <p className="text-grayishBlue text-sm mb-6">
              Minimum version {card.version}
            </p>
            <img src={dots} alt="dots" className="w-full mb-6" />
            <button className="w-full bg-softBlue text-white py-3 rounded-lg border-2 border-softBlue hover:bg-white hover:text-softBlue transition duration-300 font-medium">
              Add & Install Extension
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Download;
