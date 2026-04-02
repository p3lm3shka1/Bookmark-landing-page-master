import heroImg from "../assets/images/illustration-hero.svg";

function Hero() {
  return (
    <section className="relative">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center p-6 mt-12 lg:mt-24 mb-32">
        <div className="flex-1 text-center lg:text-left z-10 lg:pr-10">
          <h1 className="text-3xl lg:text-5xl font-medium mb-6 leading-tight text-veryDarkBlue">
            A Simple Bookmark Manager
          </h1>
          <p className="text-grayishBlue text-lg mb-8 max-w-md mx-auto lg:mx-0">
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          <div className="flex justify-center lg:justify-start gap-4">
            <button className="bg-softBlue text-white px-6 py-3 rounded shadow-md border-2 border-softBlue hover:bg-white hover:text-softBlue transition duration-300 font-medium text-sm">
              Get it on Chrome
            </button>
            <button className="bg-gray-100 text-gray-700 px-6 py-3 rounded shadow-md border-2 border-gray-100 hover:border-gray-500 hover:text-gray-900 transition duration-300 font-medium text-sm">
              Get it on Firefox
            </button>
          </div>
        </div>
        <div className="flex-1 relative mb-16 lg:mb-0 z-10 flex justify-end">
          <img
            src={heroImg}
            alt="Hero Illustration"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
      <div className="hidden md:block absolute top-48 right-0 bg-softBlue w-[45%] h-[80%] rounded-l-full -z-10 translate-x-[20%]" />
    </section>
  );
}

export default Hero;
