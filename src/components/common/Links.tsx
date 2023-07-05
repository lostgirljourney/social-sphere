import { useTheme } from '../../contexts/Theme';

interface Link {
	src: string;
	label: string;
	href: string;
}

const links: Link[] = [
	{
		src: 'gh.svg',
		label: '/ lostgirljourney',
		href: 'https://github.com/lostgirljourney'
	},
	{
		src: 'cv.svg',
		label: 'resume',
		href: 'https://drive.google.com/file/d/1BQgJio8KdAfpxMUXta0UM6RtabkwqV6j/view'
	},
	{
		src: 'in.svg',
		label: '/ falgunisarkar',
		href: 'https://www.linkedin.com/in/falgunisarkar/'
	},
	{
		src: 'mail.svg',
		label: 'inbox me',
		href: 'mailto:falgunisarkar526@gmail.com'
	},
	{
		src: 'twitter.svg',
		label: '/ isshefalguni',
		href: 'https://twitter.com/isshefalguni'
	},
	{
		src: 'spotify.svg',
		label: 'spotify',
		href: 'https://open.spotify.com/user/31glrpxgbfoi6qprbrezs4cwwaiu'
	}
];

const Link: React.FC<Link> = ({ src, href, label }) => {
	const { theme } = useTheme();
	const stroke = theme !== 'light' ? 'white' : 'black';
	return (
		<div className="w-fit flex justify-center items-center gap-1">
			<img
				loading="lazy"
				src={`/assets/${stroke}-stroke/${src}`}
				className="w-10 text-white"
			/>
			<p className="group text-xl w-fit flex justify-center items-center gap-1">
				<a
					href={href}
					target="_blank"
					rel="noopener noreferrer"
					className="underline-offset-4 group-hover:underline"
				>
					{label}
				</a>
				<img
					loading="lazy"
					src={`/assets/${stroke}-stroke/link.svg`}
					className="hidden w-6 group-hover:inline-block"
				/>
			</p>
		</div>
	);
};

export const Links = () => {
	return (
		<div>
			<p className="-tracking-[1.4px] text-[28px] font-semibold mt-5 xs:mt-[60px] mb-4 xs:mb-9 flex items-center">
				Links to check me out.&nbsp;
				<img
					loading="lazy"
					src="/assets/zap.png"
					className="h-[28px] inline-block"
				/>
			</p>
			<div className="grid grid-cols-1 xs:grid-cols-2 gap-x-10 gap-y-0 xs:gap-y-4">
				{links.map(({ src, href, label }) => (
					<Link src={src} href={href} label={label} key={src} />
				))}
			</div>
		</div>
	);
};
