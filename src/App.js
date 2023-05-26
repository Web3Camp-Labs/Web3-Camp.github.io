import Header from "./components/header";
import GlobalStyle from "./utils/GloablStyle";
import Banner from "./components/banner";
import About from "./components/about";
import Line from "./components/line";
import Tools from "./components/tools";
import Countdown from "./components/countdown";
import Other from "./components/other";
import Advantage from "./components/advantage";
import Stack from "./components/stack";
import Footer from "./components/footer";

function App() {
  return (
    <div>
        <Header />
        <Banner />
        <About />
        <Countdown />
        <Advantage />
        <Tools />
        <Line />
        <Stack />
        <Other />
        <Footer />
      <GlobalStyle />
    </div>
  );
}

export default App;
