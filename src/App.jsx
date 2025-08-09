import './App.scss';
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Main from "./components/Main/main";


function App() {

   return (
     <div className="wrapper">
      <Header />
      <Main/>
      <Footer />
     </div>);
}
export default App;