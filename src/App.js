import Header from "./components/header/Header";
import { BrowserRouter as Router} from "react-router-dom";
import RoutesConfig from "./config/router";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <Router>
      <Header />
      <RoutesConfig/>
      <Footer />
    </Router>
  );
}

export default App;
