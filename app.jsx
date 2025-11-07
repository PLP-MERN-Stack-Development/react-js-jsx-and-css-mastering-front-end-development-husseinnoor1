import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Tasks from './pages/Tasks'


export default function App(){
return (
<Layout>
<Routes>
<Route path='/' element={<Home/>} />
<Route path='/tasks' element={<Tasks/>} />
</Routes>
</Layout>
)
}