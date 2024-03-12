import { useState, useEffect } from "react";
import Cards from "./Components/Cards";
import "./App.css"

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const jsonData = await response.json();
      setData(jsonData);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="container">
        {data.map((item) => (
          <Cards key={item.id} id={item.id} title={item.title} desc={item.body} />
        ))}
      </div>
    </>
  );
}

export default App;
