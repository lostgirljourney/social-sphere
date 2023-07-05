import { createContext, useState, useContext, useEffect } from 'react';

interface ThemeContextProps {
	theme: string;
	setTheme: React.Dispatch<React.SetStateAction<string>>;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	const [theme, setTheme] = useState<string>('');

	useEffect(() => {
		const localTheme = localStorage.getItem('theme');
		if (localTheme) {
			setTheme(localTheme as string);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('theme', theme as string);
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export const useTheme = (): ThemeContextProps => {
	const context = useContext(ThemeContext);
	if (context === undefined) {
		throw new Error('useTheme must be used within a ThemeProvider');
	}
	return context;
};
