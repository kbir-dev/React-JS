import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Card title="Karan" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui neque hic quibusdam?" img="src/assets/react.svg"/>
        <Card title="Jatin" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui neque hic quibusdam?" img="src/assets/react.svg"/>
        <Card title="Komal" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui neque hic quibusdam?" img="src/assets/react.svg"/>
        <Card title="Karam" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui neque hic quibusdam?" img="src/assets/react.svg"/>
        <Card title="Manish" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui neque hic quibusdam?" img="src/assets/react.svg"/>
        <Card title="Jaspreet" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui neque hic quibusdam?" img="src/assets/react.svg"/>
      </div>
      
      <Footer/>
    </div>
  );
}

export default App;
