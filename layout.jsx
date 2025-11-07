import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'


export default function Layout({ children }){
return (
<div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
<Navbar />
<main className="flex-1 container mx-auto p-4">{children}</main>
<Footer />
</div>
)
}