import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Card from '@/components/Common/Card'

import kurti1 from '@/public/accests/images/KurtiImgs/kurtiImg1.png'
import kurti2 from '@/public/accests/images/KurtiImgs/kurtiImg2.png'
import kurti3 from '@/public/accests/images/KurtiImgs/kurtiImg3.png'

import nightwear1 from '@/public/accests/images/NightGownImags/nightGownImag1.png'
import nightwear2 from '@/public/accests/images/NightGownImags/nightGownImag2.png'
import nightwear3 from '@/public/accests/images/NightGownImags/nightGownImag3.png'

import saree1 from '@/public/accests/images/SareeImgs/img1.png'
import saree2 from '@/public/accests/images/SareeImgs/img2.png'
import saree3 from '@/public/accests/images/SareeImgs/Img3.png'

import salwar1 from '@/public/accests/images/SalwarImgs/SalwarImgs1.png'
import salwar2 from '@/public/accests/images/SalwarImgs/SalwarImgs2.png'
import salwar3 from '@/public/accests/images/SalwarImgs/SalwarImgs3.png'

import homeAcc1 from '@/public/accests/images/HomeEssentialImgs/homeEssentialImg1.png'
import homeAcc2 from '@/public/accests/images/HomeEssentialImgs/homeEssentialImg2.png'

const categories = [
  { name: "All Collections", href: "/all-product" },
  { name: "Salwar Suit", href: "/salwar-suit" },
  { name: "Sarees", href: "/sarees" },
  { name: "Kurti", href: "/kurti" },
  { name: "Night Gown", href: "/night-gown" },
  { name: "Home Essentials", href: "/home-essentials" },
  { name: "New Arrivals", href: "/new-arrivals" },
];

const products = [
  { id: 1, image: kurti1, centerText: "SUNSET OCHRE\nMINIMALIST KURTI" },
  { id: 2, image: kurti2, centerText: "INDIGO ARTISAN\nA-LINE KURTI" },
  { id: 3, image: kurti3, centerText: "ROYAL EMERALD\nZARI KURTI" },
  { id: 4, image: nightwear1, centerText: "DEEP SUNSET OCHRE" },
  { id: 5, image: nightwear2, centerText: "DEEP SUNSET OCHRE" },
  { id: 6, image: nightwear3, centerText: "DEEP SUNSET OCHRE" },
  { id: 7, image: saree1, centerText: "VINTAGE FLORAL\nART SILK SAREE" },
  { id: 8, image: saree2, centerText: "MIDNIGHT BLUE\nGEORGETTE SAREE" },
  { id: 9, image: saree3, centerText: "CRIMSON RED\nFESTIVE SAREE" },
  { id: 10, image: salwar1, centerText: "PASTEL PINK\nCOTTON SALWAR" },
  { id: 11, image: salwar2, centerText: "ELEGANT WHITE\nEMBROIDERED SUIT" },
  { id: 12, image: salwar3, centerText: "ROYAL BLUE\nSTRAIGHT CUT" },
  { id: 13, image: homeAcc1, centerText: "LUXURY LINEN\nBEDCOVER" },
  { id: 14, image: homeAcc2, centerText: "AESTHETIC\nCUSHION SET" },
];

const ProductShowCase = () => {
  return (
    <section className="bg-[#6e2814] w-full py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Category Pills Navbar */}
        <nav className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <Link 
              key={category.name} 
              href={category.href}
              className={`px-6 py-2 rounded-full text-base font-medium tracking-wide transition-all ${
                category.name === "All Collections"
                ? "bg-[#D08740] text-white opacity-100"
                : "bg-[#D08740] bg-opacity-90 hover:bg-opacity-100 text-white/95 hover:text-white"
              }`}
            >
              {category.name}
            </Link>
          ))}
        </nav>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8 justify-items-center">
          {products.map((product) => (
            <Card 
              key={product.id} 
              imageSrc={product.image} 
              buttonText="View More" 
              centerText={product.centerText}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default ProductShowCase