import { useTheme } from '../contexts/Theme';

export const Mode = () => {
	const { theme, setTheme } = useTheme();
	const isDark = theme !== 'light';
	return (
		<img
			loading="lazy"
			src={isDark ? '/assets/sun.svg' : '/assets/moon.svg'}
			className="w-8 h-auto rounded-full absolute top-5 right-5 cursor-pointer"
			onClick={() => setTheme(isDark ? 'light' : 'dark')}
		/>
	);
};
