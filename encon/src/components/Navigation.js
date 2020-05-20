import React, { useState } from 'react';
import '../styles/Nav.scss';
import logo from '../assets/EnCon-logo.png';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
} from 'reactstrap';

export const Navigation = (props) => {
	const [collapsed, setCollapsed] = useState(true);
	const toggleNavbar = () => setCollapsed(!collapsed);

	return (
		<div className='nav-container'>
			<div className='nav-header'></div>
			<div>
				<Navbar light expand='sm'>
					<NavbarBrand href='/'>
						<img className='nav-logo' src={logo} alt='Logo' />
					</NavbarBrand>
					<NavbarToggler onClick={toggleNavbar} />
					<Collapse isOpen={!collapsed} navbar>
						<Nav navbar>
							<NavItem>
								<NavLink href='/login'>Login</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href='/register'>Register</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
			</div>
		</div>
	);
};
