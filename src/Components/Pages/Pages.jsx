import { useState, useEffect } from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import ActiveAuctions from "../ActiveAuctions/ActiveAuctions"
import FavoriteItems from "../FavoriteItems/FavoriteItems"

const Pages = () => {
    const [bidItems, setBidItems] = useState([])
    const [favorites, setFavorites] = useState([])
    const [favoritedItemIds, setFavoritedItemIds] = useState(new Set())

    useEffect(() => {
        fetch("/bid.json")
            .then((res) => res.json())
            .then((data) => setBidItems(data))
            .catch((err) => console.error("Failed to fetch bid items:", err))
    }, [])

    const addToFavorites = (item) => {
        if (!favoritedItemIds.has(item.id)) {
            const newFavorites = [...favorites, item]
            setFavorites(newFavorites)
            setFavoritedItemIds(new Set([...favoritedItemIds, item.id]))
            toast.success(`${item.title} added to favorites!`)
        }
    }

    const removeFromFavorites = (itemId) => {
        const itemToRemove = favorites.find((item) => item.id === itemId)
        if (itemToRemove) {
            const newFavorites = favorites.filter((item) => item.id !== itemId)
            setFavorites(newFavorites)
            const newFavoritedItemIds = new Set(favoritedItemIds)
            newFavoritedItemIds.delete(itemId)
            setFavoritedItemIds(newFavoritedItemIds)
            toast.info(`${itemToRemove.title} removed from favorites`)
        }
    }

    const totalAmount = favorites.reduce((sum, item) => sum + item.currentBidPrice, 0)

    return (
        <div className="flex min-h-screen flex-col bg-gray-50">
            <main className="flex-1">
                <div className="container mx-auto px-4 py-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2">
                            <ActiveAuctions
                                items={bidItems}
                                favoritedItemIds={favoritedItemIds}
                                onAddToFavorites={addToFavorites}
                            />
                        </div>
                        <div>
                            <FavoriteItems
                                favorites={favorites}
                                totalAmount={totalAmount}
                                onRemoveFromFavorites={removeFromFavorites}
                            />
                        </div>
                    </div>
                </div>
            </main>
            <ToastContainer position="bottom-right" autoClose={3000} />
        </div>
    )
}

export default Pages
