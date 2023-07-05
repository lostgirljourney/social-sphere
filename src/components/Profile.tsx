import { Avatar, Links } from './common';

export const Profile: React.FC<{
	src: string;
	name: string;
	children: React.ReactNode;
}> = ({ src, name, children }) => {
	return (
		<div className="flex flex-col">
			<div className="flex justify-between items-center w-fit gap-5 flex-col xs:flex-row">
				<Avatar src={src} />
				<div className="-tracking-[1.4px]">
					<p className="text-[28px] font-semibold">{name}</p>
					<p className="text-xl">{children}</p>
				</div>
			</div>
			<Links />
		</div>
	);
};
