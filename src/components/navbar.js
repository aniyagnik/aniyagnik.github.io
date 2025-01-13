import { IoHomeOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaRegCreditCard } from "react-icons/fa";
import { MdOutlineContactless } from "react-icons/md";

import '../styles/navbar.css'

export default function Navbar({handleClick}) {
	const navLinks = [
		{
			title:'home',
			icon: <IoHomeOutline/>
		},
		{
			title:'profile',
			icon: <CgProfile />
		},
		{
			title:'portfolio',
			icon: <FaRegCreditCard />
		},
		{
			title:'contact',
			icon: <MdOutlineContactless />
		}
	]
	return (
		<div className='navbar'>
			{
				navLinks.map((item,index)=>
					(
						<div className="link" onClick={()=>handleClick(index)} key={index} >
							<div style={{marginBottom:10}}>{item.icon}</div>
							{item.title}
						</div>
					)
				)
			}
		</div>
	)
}