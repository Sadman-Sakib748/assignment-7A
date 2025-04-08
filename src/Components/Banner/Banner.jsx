import { Link } from 'lucide-react';
import banner from '../../assets/banner.png';

const Banner = () => {
    return (
        <div className="relative bg-gray-900 text-white">
            <div className="absolute inset-0 overflow-hidden">
                <img src={banner} alt="Car headlights" className="w-full h-full object-cover opacity-70" />
            </div>
            <div className="relative container mx-auto px-4 py-16 md:py-20">
                <div className="max-w-lg">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">Bid on Unique Items from Around the World</h1>
                    <p className="text-lg mb-8">
                        Explore a collection of rare, luxury, and one-of-a-kind treasures in our curated auction
                    </p>
                    <button className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-medium text-gray-900 hover:bg-gray-100">
                        Explore Auctions
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;