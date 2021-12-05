import "./App.less";
import api from "./services/api";
import { useState, useEffect } from "react";

import Layout from "./components/Layout";
import FirstForm from "./components/FirstForm";

function App() {
  return (
    <div className="app">
      <Layout>
        <FirstForm />
      </Layout>
    </div>
  );
}

export default App;
