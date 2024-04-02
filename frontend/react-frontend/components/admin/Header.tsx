import React from 'react';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  isActive: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children, isActive }) => {
  return (
    <li className={`nav-item ${isActive ? 'active' : ''}`}>
      <a className="nav-link" href={to}>
        {children}
      </a>
    </li>
  );
};

const NavBar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg custom_nav-container bg-white rounded-lg shadow-md">
      <a className="navbar-brand" href="#">
        <span>Seotech</span>
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="s-1"> </span>
        <span className="s-2"> </span>
        <span className="s-3"> </span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="d-flex mx-auto flex-column flex-lg-row align-items-center">
          <ul className="navbar-nav">
            <NavLink to="/admin/content" isActive={true}>
              Content
            </NavLink>
            <NavLink to="/admin/users" isActive={false}>
              Users
            </NavLink>
            <NavLink to="/admin/messages" isActive={false}>
              Messages
            </NavLink>
            <NavLink to="/admin/newsfeed" isActive={false}>
              News
            </NavLink>
          </ul>
        </div>
      </div>

      <div className="navbar-nav ml-auto">
        <div className="nav-item">
          <span className="nickname-label"></span>
        </div>
        <div className="nav-item">
          <a className="logout-button" href="#">
            Logout
          </a>
        </div>
        <div className="nav-item">
          <a className="login-button" href="#">
            Login
          </a>
        </div>
      </div>
    </nav>
  );
};

const Header: React.FC = () => {
  return (
    <header className="admin_header_section">
      <div className="admin-header">
        <div className="container-fluid">
          <NavBar />
        </div>
      </div>
    </header>
  );
};

export default Header;