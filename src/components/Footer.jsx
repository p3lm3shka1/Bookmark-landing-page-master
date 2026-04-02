import logo from "../assets/images/logo-bookmark.svg";
import iconFacebook from "../assets/images/icon-facebook.svg";
import iconTwitter from "../assets/images/icon-twitter.svg";

function Footer() {
  return (
    <footer className="bg-veryDarkBlue py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <img src={logo} alt="Bookmark" className="h-8 brightness-100" />
          <ul className="flex flex-col md:flex-row gap-6 text-gray-400 uppercase text-xs tracking-widest text-center">
            <li className="hover:text-softRed cursor-pointer transition">
              Features
            </li>
            <li className="hover:text-softRed cursor-pointer transition">
              Pricing
            </li>
            <li className="hover:text-softRed cursor-pointer transition">
              Contact
            </li>
          </ul>
        </div>
        <div className="flex gap-8 mt-8 md:mt-0">
          <a href="#" className="hover:opacity-70 transition">
            <img src={iconFacebook} alt="Facebook" />
          </a>
          <a href="#" className="hover:opacity-70 transition">
            <img src={iconTwitter} alt="Twitter" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
