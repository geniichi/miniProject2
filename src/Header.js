import './Header.css';

const Header = () =>{

    return(
      <header>
          <nav>
            <div id="nav-common-content">
              <img src="https://ionicframework.com/docs/icons/logo-react-icon.png"/>
              <h1 class="fs-sm">React</h1>
              <form id="Navbar-form">
                <button><i class="fa fa-search"></i></button>
                <input type="text" placeholder="Search..."/>
              </form>
            </div>
            <div id="user-identification">
              <form>
                <button>Log In</button>
              </form>
              <form>
                <button>Sign Up</button>
              </form>
            </div>
          </nav>
          <h1 class="container col-6 py-3">React #1 Assignment</h1>
      </header>


    )
}

export default Header;
