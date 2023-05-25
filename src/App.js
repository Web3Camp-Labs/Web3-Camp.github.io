import Header from "./components/header";
import GlobalStyle from "./utils/GloablStyle";
import Banner from "./components/banner";
import About from "./components/about";
import Line from "./components/line";
import Tools from "./components/tools";

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <About />
      <Line />
      <Tools />
      <GlobalStyle />
    </div>
  );
}

export default App;
