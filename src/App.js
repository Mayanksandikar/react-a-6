
import './App.css';
import Home from './component/Home'
import Nav from './component/Nav'
import Student from './component/Student'
import Contact from './component/Contact'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Details from './component/Details'
import AddStudent from './component/AddStudent';
import Edit from './component/Edit';



function App() {
  return (

    <Details>
      <>
    <BrowserRouter>
     <Nav />
     <Routes>
       
     <Route path="/home" element={ <Home /> } />
     <Route path="/student" element={ <Student /> } />
     <Route path="/contact" element={ <Contact /> } />
     <Route path="/add-student" element={ <AddStudent /> } />
     <Route path="/edit" element={ <Edit /> } />

     </Routes>
     </BrowserRouter>
     </>
   </Details>
   
 );
}

export default App;