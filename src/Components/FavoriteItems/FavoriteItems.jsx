import React from "react"
import { Heart, X } from "lucide-react" 

const FavoriteItems = ({ favorites, totalAmount, onRemoveFromFavorites }) => {
    return (
        <section className="bg-white rounded-lg border mt-20 border-gray-200 p-6 shadow-sm">
            <h2 className="text-xl font-bold mb-4 flex items-center">
                <Heart className="h-5 w-5 text-blue-600 mr-2" />
                Favorite Items
            </h2>

            {favorites.length === 0 ? (
                <div className="text-center py-8">
                    <p className="text-gray-500 mb-2">No favorites yet</p>
                    <p className="text-sm text-gray-400 max-w-xs mx-auto">
                        Items you like will be saved here. Click the heart icon to add items to your favorites.
                    </p>
                </div>
            ) : (
                <div className="space-y-4">
                    {favorites.map((item) => (
                        <div
                            key={item.id}
                            className="flex justify-between items-center py-2 border-b border-gray-100"
                        >
                            <div>
                                <h3 className="font-medium">{item.title}</h3>
                                <div className="flex text-sm text-gray-500 space-x-4">
                                    <span>${item.currentBidPrice.toFixed(2)}</span>
                                    <span>{item.bidsCount} Bids</span>
                                </div>
                            </div>
                            <button
                                onClick={() => onRemoveFromFavorites(item.id)}
                                className="text-gray-400 hover:text-red-500"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>
                    ))}

                    <div className="pt-4 mt-4 border-t border-gray-200">
                        <div className="flex justify-between items-center">
                            <span className="font-medium">Total Bid Amount:</span>
                            <span className="font-bold">${totalAmount.toFixed(2)}</span>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default FavoriteItems
