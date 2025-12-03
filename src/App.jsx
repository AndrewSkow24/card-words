import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <Header />
      <Content />
    </>
  );
}

export default App;
