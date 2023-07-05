import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from './contexts/Theme.tsx';
import App from './App.tsx';
import './css/index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ThemeProvider>
			<App />
		</ThemeProvider>
	</React.StrictMode>
);
