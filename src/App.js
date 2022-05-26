import Header from "./components/header/Header";
import { BrowserRouter as Router} from "react-router-dom";
import RoutesConfig from "./config/router";

function App() {
  return (
    <Router>
      <Header />
      <RoutesConfig/>
    </Router>
  );
}

export default App;
