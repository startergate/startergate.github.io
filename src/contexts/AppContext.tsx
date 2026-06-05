import * as React from 'react';

type Theme = 'dark' | 'light';
type Mode = 'backend' | 'game';

interface AppContextType {
  theme: Theme;
  toggleTheme: () => void;
  mode: Mode;
  setMode: (mode: Mode) => void;
}

const AppContext = React.createContext<AppContextType>({
  theme: 'light',
  toggleTheme: () => {},
  mode: 'backend',
  setMode: () => {},
});

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = React.useState<Theme>('light');
  const [mode, setMode] = React.useState<Mode>('backend');

  React.useEffect(() => {
    const saved = localStorage.getItem('theme') as Theme | null;
    if (saved === 'dark' || saved === 'light') {
      setTheme(saved);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
    const savedMode = localStorage.getItem('mode') as Mode | null;
    if (savedMode === 'backend' || savedMode === 'game') {
      setMode(savedMode);
    }
  }, []);

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  const handleSetMode = (m: Mode) => {
    setMode(m);
    localStorage.setItem('mode', m);
  };

  return (
    <AppContext.Provider value={{ theme, toggleTheme, mode, setMode: handleSetMode }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => React.useContext(AppContext);