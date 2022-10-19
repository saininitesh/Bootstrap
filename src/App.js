import About from "./components/About";
import Help_desk from "./components/Help_desk";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const userQueryData=(expense)=>{//new data comes in expense
    
    //we create a form for sending data in database 
    const formData = new FormData();
    formData.append('name',expense.name);
    //'title' keyword must match with database column name
    formData.append('query',expense.query);
   

fetch('http://192.168.88.195/poetryapis/query.php',{
    method:'POST',
    body:formData
}).then(
    response=>{
        
    }
);

 
};
  return (
    <div>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Help_desk" element={<Help_desk onSaveQueryData={userQueryData} />} />
       </Routes>
     
    </div>
  );
}

export default App;
