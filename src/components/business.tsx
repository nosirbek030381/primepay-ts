import { features } from '../util/constant';
import { layout, styles } from '../util/style';
import Button from './button';
import FeatureCard from './featurecard';

const Business = () => {
	return (
		<section id='features' className={layout.section}>
			<div className={layout.sectionIfo}>
				<h2 className={styles.heading2}>
					Biznesingizni rivojlantiring <br className='sm:block hidden' /> pulni biz hal qilamiz
				</h2>
				<p className={`${styles.paragraph} max-w-[550px] mt-5`}>
					Agar sizning biznesingizni rivojlantirishga yordam kerak bolsa, bizning jamoamiz sizga
					yordam beradi. Sizning mashinangiz, komplektsizingiz yoki boshqa narsangiz bolsa, bizning
					jamoamiz sizga yordam beradi.
				</p>

				<Button styles={'mt-10'} />
			</div>
			<div className={`${layout.sectionImg} flex-col`}>
				{features.map((feature, idx) => (
					<FeatureCard key={feature.id} {...feature} idx={idx} />
				))}
			</div>
		</section>
	);
};

export default Business;
