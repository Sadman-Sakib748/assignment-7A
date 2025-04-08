import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-8 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="mb-4">
            <a href="/" className="text-2xl font-bold">
              <span className="text-blue-600">Auction</span>
              <span className="text-orange-500">Gallery</span>
            </a>
          </div>

          <div className="mb-6 text-center">
            <p className="text-gray-600 font-medium">Bid. Win. Own.</p>
          </div>

          <nav className="mb-8">
            <ul className="flex space-x-8">
              <li>
                <a href="/" className="text-gray-600 hover:text-gray-900">
                  Home
                </a>
              </li>
              <li>
                <a href="/auctions" className="text-gray-600 hover:text-gray-900">
                  Auctions
                </a>
              </li>
              <li>
                <a href="/categories" className="text-gray-600 hover:text-gray-900">
                  Categories
                </a>
              </li>
              <li>
                <a href="/how-it-works" className="text-gray-600 hover:text-gray-900">
                  How to works
                </a>
              </li>
            </ul>
          </nav>

          <div className="text-sm text-gray-500">© 2023 AuctionHub. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
