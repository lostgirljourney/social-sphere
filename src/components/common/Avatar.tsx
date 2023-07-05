export const Avatar: React.FC<{ src: string }> = ({ src }) => {
	return (
		<img
			src={src}
			className="w-[150px] h-[150px] rounded-full"
			loading="lazy"
		/>
	);
};
