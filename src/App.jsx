// Main application component
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";

// Root component that combines Header, Home content, and Footer
function App() {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default App;
