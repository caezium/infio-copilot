import {
	ReactNode,
	createContext,
	useContext,
	useEffect,
	useState,
} from 'react'

import { useApp } from './AppContext'

type DarkModeContextType = {
	isDarkMode: boolean
}

const DarkModeContext = createContext<DarkModeContextType | undefined>(
	undefined,
)

export function DarkModeProvider({ children }: { children: ReactNode }) {
	const [isDarkMode, setIsDarkMode] = useState(false)
	const app = useApp()

	useEffect(() => {
		const handleDarkMode = () => {
			const newIsDarkMode = document.body.classList.contains('theme-dark')
			// 只在实际发生变化时才更新状态
			setIsDarkMode(prevIsDarkMode => {
				if (prevIsDarkMode !== newIsDarkMode) {
					return newIsDarkMode
				}
				return prevIsDarkMode
			})
		}
		handleDarkMode()
		app.workspace.on('css-change', handleDarkMode)
		return () => app.workspace.off('css-change', handleDarkMode)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<DarkModeContext.Provider value={{ isDarkMode }}>
			{children}
		</DarkModeContext.Provider>
	)
}

export function useDarkModeContext() {
	const context = useContext(DarkModeContext)
	if (context === undefined) {
		throw new Error('useDarkModeContext must be used within a DarkModeProvider')
	}
	return context
}
