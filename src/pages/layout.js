import { Outlet, Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaRegCreditCard } from "react-icons/fa";
import { MdOutlineContactless } from "react-icons/md";

import '../styles/navbar.css'
import '../styles/layout.css';


function Layout() {
	const navLinks = [
			{
				title:'home',
				link:'/',
				icon: <IoHomeOutline/>
			},
			{
				title:'profile',
				link:'/profile',
				icon: <CgProfile />
			},
			{
				title:'portfolio',
				link:'/portfolio',
				icon: <FaRegCreditCard />
			},
			{
				title:'contact',
				link:'/contact',
				icon: <MdOutlineContactless />
			}
		]
  return (
		<div className="layout">
			<header className="layout-header">
				<div className='container'>
					<div className='navbar'>
						{
							navLinks.map((item,index)=>
								(
									<Link key={index} to={item.link} className="link">
										<div style={{marginBottom:10,textDecoration:'none'}}>{item.icon}</div>
										{item.title}
									</Link>
								)
							)
						}
					</div>
					<Outlet/>
				</div>
			</header>
		</div>
	)
}


export default Layout;
