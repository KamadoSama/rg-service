
import './App.css';
import { MyNavBar } from './Components/MyBavBar';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Evenementiel } from './Components/Evenementiel';
// import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import { Footer } from './Components/Footer';
import { Accueil } from './Components/Accueil';

function App() {
  return (
    <Router >
      <MyNavBar />
      <Routes >
        <Route path='/' element={<Accueil />} />
        <Route path='https://rgservice.onrender.com/evenementiel' element ={<Evenementiel />} /> 
        {/* <Route path='/service' element ={<Contact />} */}
        {/* <Route path='/service' element ={<Service />} */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
