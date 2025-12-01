export default function Footer() {
  return (
    <footer className="border-t bg-white py-6 mt-10">
      <div className="text-center">
        <h2 className="font-semibold text-lg">
          Auction<span className="text-amber-400">Gallery</span>
        </h2>

        <p className="text-xs tracking-widest text-slate-400">
          Bid • Win • Own.
        </p>

        <div className="flex justify-center gap-6 text-sm text-slate-500 mt-3">
          <span>Home</span>
          <span>Auctions</span>
          <span>Categories</span>
          <span>How to works</span>
        </div>

        <p className="text-xs text-slate-400 mt-4">
          © 2025 AuctionHub. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
