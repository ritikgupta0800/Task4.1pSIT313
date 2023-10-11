
import './App.css';
import Header from "./section/Header";
import Image from "./section/Image";
import Featured_Article from "./section/Featured_Article";
import Featured_tutorial from './section/Featured_tutorial';
import Subscribe from "./section/login"
import Footer from "./section/Footer"


function App() {
  return (
    <main className="App">
      <Header/>
      <Image/>
      <Featured_Article/>
      <Featured_tutorial/>
   <Subscribe/>
   <Footer/>
      
    </main>
  );
}

export default App;
