import { useState } from "react"
import { auctionItems } from "../../../public/items"
import Navbar from "../Navbar/Navbar"
import Hero from "../Banner/Banner"
import Footer from "../Footer/Footer"
import AuctionList from "../AuctionList/AuctionList"
import FavoritesSidebar from "../FavoritesSidebar/FavoritesSidebar"
import toast from "react-hot-toast"

export default function Home() {
  const [favorites, setFavorites] = useState([]) // array of item ids
  const [disabledStates, setDisabledStates] = useState({}) // { [id]: boolean }

  const toggleFavorite = (item) => {
    setFavorites((prev) => {
      const isFav = prev.includes(item.id)

      if (isFav) {
        // removing → enable button again
        setDisabledStates((old) => ({ ...old, [item.id]: false }))
        toast.error(`Removed from favorites: ${item.name}`)
        return prev.filter((id) => id !== item.id)
      } else {
        // adding → disable button
        setDisabledStates((old) => ({ ...old, [item.id]: true }))
        toast.success(`Added to favorites: ${item.name}`)
        return [...prev, item.id]
      }
    })
  }

  const removeFavorite = (id) => {
    setFavorites((prev) => prev.filter((itemId) => itemId !== id))

    // enable button on table
    setDisabledStates((old) => ({ ...old, [id]: false }))

    toast.error("Removed from favorites")
  }

  const favoriteItems = auctionItems.filter((i) => favorites.includes(i.id))

  return (
    <div className="bg-slate-100 min-h-screen">
      <Navbar />
      <Hero />

      <section className="max-w-6xl mx-auto px-4 py-10 grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <AuctionList
            items={auctionItems}
            favorites={favorites}
            toggleFav={toggleFavorite}
            disabledStates={disabledStates}
          />
        </div>

        <FavoritesSidebar
          favoritesList={favoriteItems}
          removeFavorite={removeFavorite}
        />
      </section>

      <Footer />
    </div>
  )
}
