import React from "react"
import AuctionItem from "../AuctionItem/AuctionItem"

export default function AuctionList({
  items,
  favorites = [],
  toggleFav,
  disabledStates = {},
}) {
  return (
    <div className="rounded-2xl bg-white border shadow-sm overflow-hidden">
      <div className="grid grid-cols-[2.5fr_1fr_1fr_50px] px-5 py-3 text-xs uppercase text-slate-400 border-b">
        <span>Items</span>
        <span className="text-center">Current Bid</span>
        <span className="text-center">Time Left</span>
        <span></span>
      </div>

      <ul>
        {items.map((item) => (
          <AuctionItem
            key={item.id}
            item={item}
            isFav={favorites.includes(item.id)}
            toggleFav={toggleFav}
            disabled={!!disabledStates[item.id]}
          />
        ))}
      </ul>
    </div>
  )
}
