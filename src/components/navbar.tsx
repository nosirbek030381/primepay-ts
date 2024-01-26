import { useState } from 'react';
import { close, logo, menu } from '../assets';
import { navLinks } from '../util/constant';
import { styles } from '../util/style';

const Navbar = () => {
	const [toggleNav, setToggleNav] = useState<boolean>(false);
	const [active, setActive] = useState<string>('home');

	const toggleHandler = () => setToggleNav(prev => !prev);
	const activeHandler = (id: string) => setActive(id);

	return (
		<div className={`w-full py-3 navbar ${styles.flexBetween}`}>
			{/* Logo */}
			<div className={`${styles.heading1}`}>
				<img src={logo} alt='logo' className='w-[130px] h-[65px] cursor-pointer' />
			</div>

			{/* Nav Links */}
			<ul className='list-none sm:flex hidden justify-end items-center flex-1'>
				{navLinks.map((item, index) => (
					<li
						key={item.id}
						className={`font-montserrat font-normal cursor-pointer text-[16px] text-white 
						${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} 
						${active === item.id ? 'text-white' : 'text-gray-400	'}
						hover:text-white transition-all duration-300 navlink`}
						onClick={() => activeHandler(item.id)}
					>
						<a href={`#${item.id}`}>{item.title}</a>
					</li>
				))}
			</ul>

			{/* Button */}
			<div className='sm:hidden flex justify-end items-end '>
				{toggleNav ? (
					<img
						src={close}
						alt='logo'
						className={'w-10 h-10s object-contain'}
						onClick={toggleHandler}
					/>
				) : (
					<img
						src={menu}
						alt='logo'
						className={`w-10 h-10s object-contain`}
						onClick={toggleHandler}
					/>
				)}
				<div
					className={`${!toggleNav ? 'hidden' : 'flex'} p-6 absolute top-20 right-0
          left-0 w-full sidebar bg-black-gradient z-[99]`}
				>
					{/* Nav Links */}
					<ul className='list-none flex justify-center items-center flex-1 '>
						{navLinks.map((item, index) => (
							<li
								key={item.id}
								className={`font-montserrat font-normal cursor-pointer text-[16px] text-white 
								${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} 
								${active === item.id ? 'text-white' : 'text-gray-400	'}
								hover:text-white transition-all duration-300 navlink`}
								onClick={() => activeHandler(item.id)}
							>
								{item.title}
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
