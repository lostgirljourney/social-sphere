import { useTheme } from '../contexts/Theme';

export const Footer = () => {
	const { theme } = useTheme();
	const isDark = theme !== 'light';

	return (
		<div
			className={`p-4 flex flex-col xs:flex-row items-center justify-center gap-x-[2px] w-full font-medium tracking-tighter text-sm ${
				isDark ? 'text-gray-200' : 'text-gray-900'
			}`}
		>
			<p className="block xs:inline-block">
				<span className="w-fit whitespace-nowrap">Crafted with&nbsp;</span>
				<img
					loading="lazy"
					src="/assets/red-heart.png"
					className="inline-block h-4"
				/>
				&nbsp;using&nbsp;
				<a
					href="https://github.com/lostgirljourney/social-sphere"
					target="_blank"
					rel="noopener noreferrer"
					className={`inline-block ${
						isDark ? 'hover:text-[#149ECA]' : 'hover:text-blue-600'
					}`}
				>
					React.js
				</a>
				&nbsp;&&nbsp;
				<a
					href="https://tailwindcss.com/"
					target="_blank"
					rel="noopener noreferrer"
					className={isDark ? 'hover:text-[#38bdf8]' : 'hover:text-blue-700'}
				>
					TailwindCSS
				</a>
			</p>
			<p className="block xs:inline-block">
				(
				<a
					href="https://github.com/lostgirljourney/social-sphere"
					target="_blank"
					rel="noopener noreferrer"
					className="underline-offset-4 hover:underline w-fit whitespace-nowrap"
				>
					peek under the hood
				</a>
				).
			</p>
		</div>
	);
};
