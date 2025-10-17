import Header from "./components/include/Header";
import Home from "./components/home/Home";

// Slider CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./components/include/Footer";

function App() {
  return (
    <>
    <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </>
  );
}

export default App;