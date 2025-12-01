import { useState } from "react"
import { auctionItems } from "../data/auctions"

export default function Home() {
  const [favorites, setFavorites] = useState([])

  const toggleFav = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    )
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
            toggleFav={toggleFav}
          />
        </div>

        <FavoritesSidebar favoritesList={favoriteItems} />
      </section>

      <Footer />
    </div>
  )
}
