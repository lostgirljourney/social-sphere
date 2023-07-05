import { Footer, Mode, Profile } from './components';
import { useTheme } from './contexts/Theme';

const App = () => {
	const { theme } = useTheme();
	const isDark = theme !== 'light';

	return (
		<div
			className={`relative font-poppins w-full min-h-screen pt-10 pb-4 flex justify-between items-center flex-col ${
				isDark ? 'bg-anotherShadeofBlack text-white' : 'bg-white text-black'
			}`}
		>
			<Mode />
			<div className="max-w-[1205px] w-full min-h-[500px] flex justify-center gap-10 px-5 mb-5 xs:mb-10">
				<Profile
					src="https://github.com/lostgirljourney.png"
					name="Falguni Sarkar"
				>
					upcoming atse&nbsp;
					<a
						href="https://www.salesforce.com/in/"
						target="_blank"
						rel="noopener noreferrer"
						className={`${
							isDark
								? 'text-blue-300 hover:text-blue-400'
								: 'text-blue-600 hover:text-blue-700'
						} underline-offset-4 hover:underline`}
					>
						@salesforce
					</a>
					. undergrad. front-end web developer. hackathon enthusiast.
				</Profile>
				<img
					loading="lazy"
					src="/assets/social.png"
					className="hidden max-w-[500px] w-full h-auto lg:block"
				/>
			</div>
			<Footer />
		</div>
	);
};

export default App;
