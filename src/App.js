
import './App.css';
import Buy from './Components/Buy';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Hp from './Components/Hp';
import Paly from './Components/Paly';
import Treason from './Components/Treason';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Treason/>
      <Paly/>
      <Hp/>
      <Buy/>
      <Footer/>
    </div>
  );
}

export default App;
