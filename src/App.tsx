import React from "react";
import Layout from "./Layout";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Description1 from "./components/main/Description1";
import Description2 from "./components/main/Description2";
import Description3 from "./components/main/Description3";
import Description4 from "./components/main/Description4";

function App() {
  return (
    <Layout>
      <Header />
      <Description1 />
      <Description2 />
      <Description3 />
      <Description4 />
      <Footer />
    </Layout>
  );
}

export default App;
