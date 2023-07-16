
import './App.css';
import { MyNavBar } from './Components/MyBavBar';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Evenementiel } from './Components/Evenementiel';
// import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import { Footer } from './Components/Footer';
import { Accueil } from './Components/Accueil';
import { Contact } from './Components/Contact';
import { Informatique } from './Components/Informatique';
function App() {
  return (
    <Router >
      <MyNavBar />
      <Routes >
        <Route path='/' element={<Accueil />} />
        <Route path='/evenementiel' element ={<Evenementiel />} /> 
        <Route path='/contact' element ={<Contact  /> } /> 
        <Route path='/informatique' element ={<Informatique />} />
        <Route path='/location' element ={<Informatique />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
