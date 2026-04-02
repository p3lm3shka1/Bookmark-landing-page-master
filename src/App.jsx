import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Download from "./components/Download";
import FAQ from "./components/FAQ";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Attribution from "./components/Attribution";

function App() {
  return (
    <div className="font-sans text-veryDarkBlue antialiased">
      <Header />
      <Hero />
      <Features />
      <Download />
      <FAQ />
      <Newsletter />
      <Footer />
      <Attribution />
    </div>
  );
}

export default App;
