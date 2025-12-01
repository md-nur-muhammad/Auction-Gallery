export default function Hero() {
  return (
    <section className="relative mt-[64px]">
      <div className="relative h-[340px]">
        <img
          src="https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=1200"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-transparent"></div>

        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-6xl px-6">
            <h1 className="text-4xl font-semibold text-white mb-3">
              Bid on Unique Items from Around the World
            </h1>
            <p className="text-slate-200 max-w-md">
              Discover rare collectibles, luxury goods, and vintage treasures.
            </p>

            <button className="mt-5 bg-amber-400 px-6 py-2 rounded-full text-slate-900 font-semibold hover:bg-amber-300">
              Explore Auctions
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
