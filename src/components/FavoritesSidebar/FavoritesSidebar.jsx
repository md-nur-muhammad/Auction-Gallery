export default function FavoritesSidebar({ favoritesList, removeFavorite }) {
  const total = favoritesList.reduce((a, b) => a + b.currentBid, 0)

  return (
    <aside className="rounded-2xl bg-white border shadow-sm p-5 h-max">
      <div className="flex items-center gap-2 border-b pb-3 mb-3">
        <span className="text-xl text-amber-400">♡</span>
        <h3 className="font-semibold">Favorite Items</h3>
      </div>

      {favoritesList.length === 0 ? (
        <p className="text-sm text-slate-500">No favorites added yet.</p>
      ) : (
        <ul className="space-y-4">
          {favoritesList.map((f) => (
            <li key={f.id} className="flex items-center justify-between gap-3">
              {/* Image + Title */}
              <div className="flex items-center gap-3">
                <img
                  src={f.image}
                  alt={f.name}
                  className="h-10 w-10 rounded-lg object-cover border"
                />
                <span className="text-sm text-slate-700 line-clamp-1">
                  {f.name}
                </span>
              </div>

              {/* Price + Remove button */}
              <div className="flex items-center gap-2">
                <strong className="text-sm text-slate-900">
                  ${f.currentBid}
                </strong>

                {/* Remove Button */}
                <button
                  onClick={() => removeFavorite(f.id)}
                  className="text-red-500 text-lg hover:text-red-600"
                  aria-label="Remove from favorites"
                >
                  ✕
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-5 pt-4 border-t flex justify-between text-sm">
        <span>Total Amount</span>
        <strong>${total}</strong>
      </div>
    </aside>
  )
}
