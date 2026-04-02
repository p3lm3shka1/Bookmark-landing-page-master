import { useState } from "react";
import tab1 from "../assets/images/illustration-features-tab-1.svg";
import tab2 from "../assets/images/illustration-features-tab-2.svg";
import tab3 from "../assets/images/illustration-features-tab-3.svg";

const tabsData = [
  {
    id: 0,
    label: "Simple Bookmarking",
    title: "Bookmark in one click",
    description:
      "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    image: tab1,
  },
  {
    id: 1,
    label: "Speedy Searching",
    title: "Intelligent search",
    description:
      "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    image: tab2,
  },
  {
    id: 2,
    label: "Easy Sharing",
    title: "Share your bookmarks",
    description:
      "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    image: tab3,
  },
];

function Features() {
  const [activeTab, setActiveTab] = useState(0);
  const current = tabsData[activeTab];

  return (
    <section className="bg-white py-20 mt-10 relative" id="features">
      <div className="container mx-auto px-6 text-center max-w-lg mb-16">
        <h2 className="text-3xl font-medium mb-6 text-veryDarkBlue">
          Features
        </h2>
        <p className="text-grayishBlue text-lg">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>

      <div className="container mx-auto px-6 mb-16">
        <div className="flex flex-col md:flex-row justify-center border-b border-gray-200 max-w-2xl mx-auto">
          {tabsData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 text-center py-4 border-b-4 cursor-pointer transition duration-300
                ${
                  activeTab === tab.id
                    ? "border-softRed text-veryDarkBlue"
                    : "border-transparent text-grayishBlue hover:text-softRed"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="container mx-auto flex flex-col lg:flex-row items-center p-6 relative">
        <div className="flex-1 z-10 flex justify-center lg:justify-start">
          <div className="relative w-full max-w-lg">
            <div className="hidden md:block absolute -bottom-16 right-[20%] w-[200%] h-[90%] bg-softBlue rounded-r-full -z-10" />
            <img
              src={current.image}
              alt={current.title}
              className="w-full h-auto relative z-20"
            />
          </div>
        </div>

        <div className="flex-1 text-center lg:text-left lg:pl-24 z-10 mt-16 lg:mt-0">
          <h2 className="text-3xl font-medium mb-6 text-veryDarkBlue">
            {current.title}
          </h2>
          <p className="text-grayishBlue text-lg mb-8 max-w-md mx-auto lg:mx-0">
            {current.description}
          </p>
          <button className="bg-softBlue text-white px-6 py-3 rounded shadow-md border-2 border-softBlue hover:bg-white hover:text-softBlue transition duration-300 font-medium text-sm">
            More Info
          </button>
        </div>
      </div>
    </section>
  );
}

export default Features;
