import "./App.css";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Section1 from "./components/Sections/Section1";
import Section10 from "./components/Sections/Section10";
import Section11 from "./components/Sections/Section11";
import Section12 from "./components/Sections/Section12";
import Section2 from "./components/Sections/Section2";
import Section3 from "./components/Sections/Section3";
import Section4 from "./components/Sections/Section4";
import Section5 from "./components/Sections/Section5";
import Section6 from "./components/Sections/Section6";

import Section7 from "./components/Sections/Section7";
import Section8 from "./components/Sections/Section8";
import Section9 from "./components/Sections/Section9";

function App() {
  return (
    <div className="bg-slate-900 text-white max-h-screen overflow-y-auto">
      <Nav />
      <div className="sections w-100 mx-auto md:px-20 px-10">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
        <Section9 />
        <Section10 />
        <Section11 />
        <Section12 />
      </div>
      <Footer />
    </div>
  );
}

export default App;
