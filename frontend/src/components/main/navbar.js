
    import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">
					Deffodil
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-mdb-toggle="collapse"
					data-mdb-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<i className="fas fa-bars" />
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<NavLink className="nav-link " aria-current="page" to="/main/home">
								Home
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/main/login">
								Login
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/main/signup">
								Signup
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/main/browseshop">
								Browse Shops
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>

	)
}

export default Navbar;
