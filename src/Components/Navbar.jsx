const Navbar = ({ setCategory }) => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand">
            <span className="badge bg-light text-dark fs-4">News 📰</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <div
                className="nav-link"
                onClick={() => setCategory("technology")}
              >
                Technology
              </div>
              <div className="nav-link" onClick={() => setCategory("business")}>
                {" "}
                Business
              </div>
              <div className="nav-link" onClick={() => setCategory("health")}>
                Health
              </div>
              <div className="nav-link" onClick={() => setCategory("sports")}>
                Sports{" "}
              </div>
              <div
                className="nav-link"
                onClick={() => setCategory("entertainment")}
              >
                Entertainment
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
