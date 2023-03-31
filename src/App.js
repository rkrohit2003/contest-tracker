import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { Platform } from './components/platform/Platform';
import { Contest } from './components/contests/Contest'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { About } from './components/about/About';
import { Contact } from './components/contact/Contact';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path='/' element={<Platform/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='contact' element={<Contact/>}></Route>
    <Route path='/contestpage/:Val' element={<Contest/>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
