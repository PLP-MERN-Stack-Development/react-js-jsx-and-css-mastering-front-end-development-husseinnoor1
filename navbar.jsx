import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import Button from './Button'


export default function Navbar(){
const { theme, toggleTheme } = useTheme()
return (
<nav className="bg-white dark:bg-gray-800 shadow">
<div className="container mx-auto p-4 flex justify-between items-center">
<div className="flex items-center gap-4">
<Link to="/" className="font-bold text-lg">MyApp</Link>
<Link to="/tasks" className="text-sm">Tasks</Link>
</div>
<div>
<Button variant="secondary" onClick={toggleTheme}>{theme === 'dark' ? 'Light' : 'Dark'}</Button>
</div>
</div>
</nav>
)
}