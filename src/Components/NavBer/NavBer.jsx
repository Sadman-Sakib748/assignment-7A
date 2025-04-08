import React from 'react'
import { Bell, ShoppingCart, User } from 'lucide-react' // Removed Link

const NavBer = () => {
  return (
    <header className="w-full border-b border-gray-200">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <span className="text-xl font-semibold text-gray-900">Auction</span>
            <span className="text-xl font-semibold text-amber-500">Gallery</span>
          </a>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="/" className="text-sm font-medium text-gray-700 hover:text-gray-900">
            Home
          </a>
          <a href="/auctions" className="text-sm font-medium text-gray-700 hover:text-gray-900">
            Auctions
          </a>
          <a href="/categories" className="text-sm font-medium text-gray-700 hover:text-gray-900">
            Categories
          </a>
          <a href="/how-to-works" className="text-sm font-medium text-gray-700 hover:text-gray-900">
            How to works
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <button className="rounded-full p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
          </button>
          <button className="rounded-full p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
            <User className="h-5 w-5" />
            <span className="sr-only">Profile</span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default NavBer
