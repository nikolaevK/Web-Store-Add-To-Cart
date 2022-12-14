import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { Navbar } from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <section
      style={{
        height: "100vh",
        backgroundImage: "linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%",
      }}
    >
      <ShoppingCartProvider>
        <Toaster />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
        </Routes>
      </ShoppingCartProvider>
    </section>
  );
}

export default App;
