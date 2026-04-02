import { useState } from "react";
import iconError from "../assets/images/icon-error.svg";

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function Newsletter() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError(true);
    } else {
      setError(false);
      setEmail("");
      alert("Thank you for subscribing!");
    }
  };

  return (
    <section className="bg-softBlue py-20 text-white">
      <div className="container mx-auto px-6 text-center max-w-lg">
        <p className="uppercase tracking-[0.25em] text-sm mb-8">
          35,000+ already joined
        </p>
        <h2 className="text-3xl font-medium mb-10 leading-tight">
          Stay up-to-date with what we're doing
        </h2>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="flex flex-col md:flex-row gap-4 justify-center items-start w-full"
        >
          <div className="w-full flex-1 relative">
            <div className={`relative ${error ? "bg-softRed rounded-lg" : ""}`}>
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError(false);
                }}
                className={`w-full px-4 py-3 rounded-lg text-veryDarkBlue focus:outline-none bg-white
                  ${error ? "border-2 border-softRed pr-10" : "border-2 border-transparent"}`}
              />

              {error && (
                <img
                  src={iconError}
                  alt="Error"
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5"
                />
              )}
            </div>

            {error && (
              <div className="bg-softRed text-white text-xs italic text-left p-2 rounded-b-lg -mt-1">
                Whoops, make sure it's an email
              </div>
            )}
          </div>

          <button
            type="submit"
            className="w-full md:w-auto px-6 py-3 bg-softRed rounded-lg shadow-lg border-2 border-softRed hover:bg-white hover:text-softRed transition duration-300 font-medium"
          >
            Contact Us
          </button>
        </form>
      </div>
    </section>
  );
}

export default Newsletter;
