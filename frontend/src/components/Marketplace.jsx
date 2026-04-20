import React, { useState } from 'react';

// Mock Data for the Marketplace
const MOCK_PRODUCTS = [
  {
    id: 1,
    name: 'Aso-Oke Handwoven Fabric',
    lga: 'Iseyin',
    state: 'Oyo',
    price: 45000,
    category: 'Textiles',
    rating: 4.8,
    reviews: 124,
    image: 'https://images.unsplash.com/photo-1584286595398-a59f21d313f5?auto=format&fit=crop&q=80&w=600',
    status: 'In Stock',
  },
  {
    id: 2,
    name: 'Premium Shea Butter (Unrefined)',
    lga: 'Kuje',
    state: 'FCT',
    price: 3500,
    category: 'Cosmetics',
    rating: 4.9,
    reviews: 312,
    image: 'https://images.unsplash.com/photo-1614859324967-b82b9561005f?auto=format&fit=crop&q=80&w=600',
    status: 'High Demand',
  },
  {
    id: 3,
    name: 'Smoked Catfish (Export Grade)',
    lga: 'Epe',
    state: 'Lagos',
    price: 8500,
    category: 'Agriculture',
    rating: 4.6,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=600',
    status: 'Low Stock',
  },
  {
    id: 4,
    name: 'Handcrafted Leather Sanders',
    lga: 'Kano Municipal',
    state: 'Kano',
    price: 12000,
    category: 'Footwear',
    rating: 4.7,
    reviews: 245,
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=600',
    status: 'In Stock',
  },
  {
    id: 5,
    name: 'Organic Honey (Raw)',
    lga: 'Obudu',
    state: 'Cross River',
    price: 6000,
    category: 'Food',
    rating: 4.9,
    reviews: 410,
    image: 'https://images.unsplash.com/photo-1587049352847-8d4c0b4cb991?auto=format&fit=crop&q=80&w=600',
    status: 'Best Seller',
  },
  {
    id: 6,
    name: 'Raffia Palm Basket Sets',
    lga: 'Ikot Ekpene',
    state: 'Akwa Ibom',
    price: 15000,
    category: 'Crafts',
    rating: 4.5,
    reviews: 56,
    image: 'https://images.unsplash.com/photo-1520699049698-acd2fce188b3?auto=format&fit=crop&q=80&w=600',
    status: 'In Stock',
  }
];

export default function Marketplace() {
  const [filter, setFilter] = useState('All');
  
  const filteredProducts = filter === 'All' 
    ? MOCK_PRODUCTS 
    : MOCK_PRODUCTS.filter(p => p.category === filter);

  return (
    <div className="bg-background min-h-screen pb-20">
      {/* Marketplace Header */}
      <div className="bg-cyan-950 text-white py-16 px-6 relative overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-tertiary/20 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
          <span className="bg-primary/20 text-cyan-200 border border-primary/30 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-widest uppercase mb-6 inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            TaxTrack Initiative
          </span>
          <h1 className="text-4xl md:text-5xl font-black font-public-sans tracking-tight mb-4">
            OLGOP Marketplace
          </h1>
          <p className="text-cyan-100/80 max-w-2xl text-lg font-medium leading-relaxed">
            One Local Government, One Product. Discover, trade, and invest in verified local products manufactured across Nigerian states, backed by government assurance.
          </p>
          
          <div className="w-full max-w-2xl mt-10 relative">
            <input 
              type="text"
              placeholder="Search for local products, producers, or regions..."
              className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl py-4 pl-14 pr-6 text-white placeholder:text-white/50 focus:bg-white/20 focus:outline-none focus:ring-2 focus:ring-primary-fixed transition-all shadow-2xl"
            />
            <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-white/50">search</span>
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary hover:bg-primary-container text-on-primary px-6 py-2 rounded-xl text-sm font-bold transition-colors">
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        
        {/* Filters & Sorting */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          <div className="flex overflow-x-auto pb-2 -mx-6 px-6 md:mx-0 md:px-0 md:pb-0 w-full md:w-auto hide-scrollbar gap-2">
            {['All', 'Agriculture', 'Textiles', 'Crafts', 'Food', 'Cosmetics'].map(cat => (
              <button 
                key={cat}
                onClick={() => setFilter(cat)}
                className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-bold transition-all ${filter === cat ? 'bg-primary text-on-primary shadow-lg shadow-primary/20' : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest'}`}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <div className="flex items-center gap-3 w-full md:w-auto justify-end">
            <span className="text-sm font-semibold text-on-surface-variant">Sort by:</span>
            <select className="bg-surface-container-lowest border-none rounded-xl text-sm font-medium focus:ring-2 focus:ring-primary w-40">
              <option>Recommended</option>
              <option>Newest Arrivals</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-surface-container group flex flex-col h-full cursor-pointer focus-within:ring-2 focus-within:ring-primary">
              <div className="h-56 relative overflow-hidden bg-surface-container-highest">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-cyan-900 uppercase tracking-wider flex items-center gap-1 shadow-sm">
                  <span className="material-symbols-outlined text-[14px]">location_on</span>
                  {product.lga}, {product.state}
                </div>
                {product.status === 'Best Seller' && (
                  <div className="absolute top-4 right-4 bg-tertiary text-on-tertiary px-3 py-1 rounded-full text-xs font-bold shadow-lg shadow-tertiary/30 animate-pulse">
                    Hot Item
                  </div>
                )}
                {/* Add to Wishlist Overlay */}
                <div className="absolute bottom-4 right-4 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                  <button className="bg-white text-primary p-2 rounded-full shadow-lg hover:scale-110 active:scale-95 transition-transform focus:outline-none">
                     <span className="material-symbols-outlined">favorite</span>
                  </button>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-2">
                  <p className="text-[10px] uppercase font-bold tracking-widest text-primary font-mono">{product.category}</p>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px] text-[#fbbf24]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                    <span className="text-xs font-bold">{product.rating}</span>
                    <span className="text-xs text-outline-variant">({product.reviews})</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold font-public-sans text-on-surface leading-tight mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                
                <div className="mt-auto pt-4 flex items-end justify-between border-t border-surface-container">
                  <div>
                    <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-wider mb-0.5">Wholesale Price</p>
                    <p className="text-xl font-black text-primary font-public-sans">₦{product.price.toLocaleString()}</p>
                  </div>
                  <button className="w-10 h-10 rounded-xl bg-surface-container-high text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors group-hover:shadow-md">
                    <span className="material-symbols-outlined">add_shopping_cart</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Empty State Fallback */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20 bg-surface-container-lowest rounded-3xl border border-dashed border-outline-variant/50">
            <div className="w-20 h-20 bg-surface-container mx-auto rounded-full flex items-center justify-center text-outline mb-4">
              <span className="material-symbols-outlined text-4xl">inventory_2</span>
            </div>
            <h3 className="text-xl font-bold text-on-surface mb-2">No products found</h3>
            <p className="text-on-surface-variant">There are currently no items available in this category.</p>
            <button className="mt-6 text-primary font-bold hover:underline" onClick={() => setFilter('All')}>
              View all products
            </button>
          </div>
        )}

        <div className="mt-12 flex justify-center">
            <button className="px-8 py-3 bg-surface-container-high rounded-full font-bold text-primary hover:bg-surface-container-highest transition-colors">
              Load More Products
            </button>
        </div>

      </div>
    </div>
  );
}
