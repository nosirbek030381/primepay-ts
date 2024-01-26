import { card } from '../assets';
import { layout, styles } from '../util/style';
import Button from './button';

const Contract = () => {
	return (
		<section id='products' className={`${layout.section}`}>
			<div className={`${layout.sectionIfo}`}>
				<h2 className={`${styles.heading2}`}>
					Bir necha oson qadamda <br className={'sm:block hidden'} /> kontrakt tuzish
				</h2>
				<p className={`${styles.paragraph} max-w-[550px] mt-5`}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis et modi maiores vero
					inventore, dicta corporis quam ducimus? Neque, dolorem.
				</p>

				<Button styles={'mt-10'} />
			</div>
			<div className={`${layout.sectionImg}`}>
				<img src={card} alt='card' className='w-[100%] h-[100%]' />
			</div>
		</section>
	);
};

export default Contract;
