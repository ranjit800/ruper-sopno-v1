import React from 'react';

const ProductDetailPage = () => {
  return (
    <div className="min-h-screen bg-[#E5DCCF] pt-24 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto bg-white/40 p-8 md:p-12 rounded-3xl shadow-lg border border-white/50">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          
          {/* Image Placeholder */}
          <div className="w-full md:w-1/2 aspect-[4/5] bg-[#D08740]/20 rounded-2xl flex items-center justify-center border border-[#D08740]/30 overflow-hidden relative">
            <div className="text-[#6E2814]/50 font-medium tracking-widest uppercase">Product Image</div>
          </div>
          
          {/* Details Placeholder */}
          <div className="w-full md:w-1/2 space-y-8">
            <h1 className="text-3xl md:text-4xl lg:text-[42px] font-medium tracking-[0.1em] text-[#6E2814] uppercase font-['Brygada_1918']">
              Demo Product Name
            </h1>
            
            <p className="text-[#D08740] text-xl font-bold tracking-wider">
              RS 1,999
            </p>
            
            <div className="space-y-4 text-[#6E2814]/80 text-sm md:text-base leading-relaxed tracking-wide text-justify">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            
            <div className="pt-8 flex gap-4">
              <button className="flex-1 bg-[#D08740] hover:bg-[#B37032] text-white px-8 py-3 rounded-full text-lg font-medium tracking-wide transition-colors shadow-md">
                Enquire Now
              </button>
              <button className="flex-1 bg-transparent border-2 border-[#D08740] text-[#D08740] hover:bg-[#D08740] hover:text-white px-8 py-3 rounded-full text-lg font-medium tracking-wide transition-colors shadow-sm">
                Add to Cart
              </button>
            </div>
            
            <div className="pt-8 border-t border-[#6E2814]/10 space-y-3">
              <p className="text-[#6E2814] font-medium tracking-wide">Category: <span className="font-light text-[#6E2814]/80">Lorem Ipsum</span></p>
              <p className="text-[#6E2814] font-medium tracking-wide">Availability: <span className="font-light text-[#D08740]">In Stock</span></p>
            </div>
            
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
