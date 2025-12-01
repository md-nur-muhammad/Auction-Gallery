import React from "react"

export default function AuctionItem({
  item,
  toggleFav,
  isFav,
  disabled = false,
}) {
  const handleFavoriteClick = () => {
    if (disabled) return
    // parent will set disabledStates[item.id] when this runs
    toggleFav(item)
  }

  return (
    <li className="grid grid-cols-[2.5fr_1fr_1fr_50px] items-center px-5 py-4 border-b border-slate-100 hover:bg-slate-50">
      <div className="flex items-center gap-3">
        <img
          src={item.image}
          alt={item.name}
          className="h-12 w-12 rounded-lg object-cover border"
        />
        <p className="text-sm">{item.name}</p>
      </div>

      <p className="text-center font-semibold">${item.currentBid}</p>
      <p className="text-center text-slate-500">{item.timeLeft}</p>

      <button
        type="button"
        disabled={disabled}
        onClick={handleFavoriteClick}
        aria-pressed={isFav}
        aria-label={
          isFav
            ? `Remove ${item.name} from favorites`
            : `Add ${item.name} to favorites`
        }
        className={`inline-flex h-9 w-9 items-center justify-center rounded-full border transition 
          ${
            disabled
              ? "opacity-40 cursor-not-allowed"
              : "hover:border-amber-400 hover:bg-amber-50"
          }`}
      >
        <span
          className={`text-lg ${isFav ? "text-amber-400" : "text-slate-400"}`}
        >
          {isFav ? "♥" : "♡"}
        </span>
      </button>
    </li>
  )
}
