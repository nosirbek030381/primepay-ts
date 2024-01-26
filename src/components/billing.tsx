import { FC } from 'react';
import { apple, google, social } from '../assets';
import { layout, styles } from '../util/style';

const Billing: FC = (): JSX.Element => {
	return (
		<section className={layout.sectionReverse}>
			<div className={layout.sectionImgReverse}>
				<img src={social} alt='billing' className='w-[100%] h-[100%] relative z-[5]' />

				<div className='absolute z-[3] -left-1/2 w-[50%] h-[50%] rounded-full bottom-40 white__gradient' />
				<div className='absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient' />
			</div>
			<div className={layout.sectionIfo}>
				<h2 className={styles.heading2}>
					Hisob-kitob fakturani <br className='sm:block hidden' /> oson boshqaring
				</h2>
				<p className={`${styles.paragraph} max-w-[550px] mt-5`}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, esse! Minus quam fugiat sed
					ullam voluptas mollitia excepturi dolore illum.
				</p>

				<div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
					<img
						src={google}
						alt='google'
						className='w-[129px] h-[42px] object-contain mr-5 cursor-pointer'
					/>
					<img
						src={apple}
						alt='apple'
						className='w-[129px] h-[42px] object-contain mr-5 cursor-pointer'
					/>
				</div>
			</div>
		</section>
	);
};

export default Billing;
