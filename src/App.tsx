import React from "react";
import Layout from "./Layout";
import Header from "./components/header/Header";
import Description1 from "./components/main/Description1";
import Description2 from "./components/main/Description2";
import Description3 from "./components/main/Description3";

function App() {
  return (
    <div className="App">
      <Layout>
        <Header />
        <Description1 />
        <Description2 />
        <Description3 />
      </Layout>
    </div>
  );
}

export default App;
