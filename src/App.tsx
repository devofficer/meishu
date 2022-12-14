import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Landing } from "./pages/landing";

function App() {
  return (
    <div className="viewport">
      <Header />
      <Landing />
      <Footer />
    </div>
  );
}

export default App;
