import "../../assets/style/NavBar.css";

function NavBar() {
   
  return (
    <>
        <nav className="navbar navbar-expand-md navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Img Prediction Soft" width="30" height="24" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="nav nav-underline">
                        <li className="nav-item mx-2">
                            <a className="nav-link" href="#">Página 1</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link" href="#">Página 2</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link" href="#">Página 3</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link" href="#">Página 4</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link" href="#">Página 5</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  );
};


export default NavBar;