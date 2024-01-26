import {
	Billing,
	Business,
	Clients,
	Contract,
	Cta,
	Footer,
	Home,
	Navbar,
	Statistics,
	Testiminiols,
} from './components';
import { styles } from './util/style';

const App = () => {
	return (
		<div className='bg-primary w-full overflow-hidden'>
			{/* Navbar */}
			<div className={`${styles.paddingX} ${styles.flexCenter}`}>
				<div className={`${styles.container}`}>
					<Navbar />
				</div>
			</div>

			{/* Home */}
			<div className={`bg-primary ${styles.flexStart}`}>
				<div className={`${styles.container}`}>
					<Home />
				</div>
			</div>

			<div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
				<div className={`${styles.container}`}>
					<Statistics />
					<Contract />
					<Billing />
					<Business />
					<Testiminiols />
					<Clients />
					<Cta />
					<Footer />
				</div>
			</div>
		</div>
	);
};

export default App;
