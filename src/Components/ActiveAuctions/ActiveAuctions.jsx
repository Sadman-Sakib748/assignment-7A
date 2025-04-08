import React from "react"
import { Heart } from "lucide-react" 

const ActiveAuctions = ({ items, favoritedItemIds, onAddToFavorites }) => {
    return (
        <section>
            <div className="mb-6">
                <h2 className="text-2xl font-bold">Active Auctions</h2>
                <p className="text-gray-600">Browse and bid on extraordinary items</p>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="text-left text-gray-600 text-sm border-b border-gray-200">
                            <th className="px-6 py-3 font-medium">Photo</th>
                            <th className="px-6 py-3 font-medium">Current Bid</th>
                            <th className="px-6 py-3 font-medium">Time Left</th>
                            <th className="px-6 py-3 font-medium">Bid Now</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item) => (
                            <tr key={item.id} className="border-b border-gray-200 last:border-b-0">
                                <td className="px-6 py-4">
                                    <div className="flex items-center">
                                        <img
                                            src={item.image || "/placeholder.svg"}
                                            alt={item.title}
                                            className="w-16 h-16 object-cover rounded-md mr-4"
                                        />
                                        <div>
                                            <h3 className="font-medium">{item.title}</h3>
                                            <p className="text-sm text-gray-600 line-clamp-1">{item.description}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 font-medium">${item.currentBidPrice.toFixed(2)}</td>
                                <td className="px-6 py-4 text-sm">{item.timeLeft}</td>
                                <td className="px-6 py-4">
                                    <div className="flex space-x-2">

                                        <button
                                            className={`p-2 rounded-md border ${favoritedItemIds.has(item.id)
                                                    ? "bg-red-50 border-red-200 text-red-500 cursor-not-allowed"
                                                    : "border-gray-200 text-gray-400 hover:text-red-500 hover:border-red-200"
                                                }`}
                                            onClick={() =>
                                                !favoritedItemIds.has(item.id) && onAddToFavorites(item)
                                            }
                                            disabled={favoritedItemIds.has(item.id)}
                                        >
                                            <Heart
                                                className={`h-5 w-5 ${favoritedItemIds.has(item.id) ? "fill-red-500" : ""
                                                    }`}
                                            />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default ActiveAuctions
