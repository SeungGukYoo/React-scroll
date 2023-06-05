import React from "react";
import Layout from "./Layout";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

function App() {
  return (
    <div className="App">
      <Layout>
        <Header />
        <Main />
      </Layout>
    </div>
  );
}

export default App;
