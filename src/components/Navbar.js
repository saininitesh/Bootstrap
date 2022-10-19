import {Link} from "react-router-dom"
const Navbar=()=>{
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link to={"/"} className="nav-link active">Home</Link>
          
        </li>
        <li className="nav-item">
        <Link to={"/About"} className="nav-link active">About</Link>
        </li>
        <li className="nav-item">
        <Link to={"/Help_desk"} className="nav-link active">Help desk</Link>
        </li>
        
          </ul>
      
    </div>
  </div>
</nav>
        </div>
    );
}
export default Navbar;