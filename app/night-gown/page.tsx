'use client';
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Card from '@/components/Common/Card'

import nightwear1 from '@/public/accests/images/NightGownImags/nightGownImag1.png'
import nightwear2 from '@/public/accests/images/NightGownImags/nightGownImag2.png'
import nightwear3 from '@/public/accests/images/NightGownImags/nightGownImag3.png'

const nightgownProducts = [
  {
    id: 1,
    image: nightwear1,
    bottomTitle: "DEEP SUNSET OCHRE",
    bottomDescription: "Premium Cotton blended comfort wear, offering a smooth drape with a subtle sheen.",
    price: "RS 200"
  },
  {
    id: 2,
    image: nightwear2,
    bottomTitle: "DEEP SUNSET OCHRE",
    bottomDescription: "Premium Cotton blended comfort wear, offering a smooth drape with a subtle sheen.",
    price: "RS 200"
  },
  {
    id: 3,
    image: nightwear3,
    bottomTitle: "DEEP SUNSET OCHRE",
    bottomDescription: "Premium Cotton blended comfort wear, offering a smooth drape with a subtle sheen.",
    price: "RS 200"
  },
  {
    id: 4,
    image: nightwear1,
    bottomTitle: "DEEP SUNSET OCHRE",
    bottomDescription: "Premium Cotton blended comfort wear, offering a smooth drape with a subtle sheen.",
    price: "RS 200"
  },
  {
    id: 5,
    image: nightwear2,
    bottomTitle: "DEEP SUNSET OCHRE",
    bottomDescription: "Premium Cotton blended comfort wear, offering a smooth drape with a subtle sheen.",
    price: "RS 200"
  },
  {
    id: 6,
    image: nightwear3,
    bottomTitle: "DEEP SUNSET OCHRE",
    bottomDescription: "Premium Cotton blended comfort wear, offering a smooth drape with a subtle sheen.",
    price: "RS 200"
  }
];

const NightGownPage = () => {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-[#E5DCCF] pt-16 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        <h1 className="text-center text-[#6E2814] text-3xl md:text-4xl lg:text-[42px] font-medium tracking-[0.2em] uppercase font-['Brygada_1918']">
          Night Gown Collection
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-3 sm:gap-x-8 sm:gap-y-16 justify-items-center">
          {nightgownProducts.map((product) => (
            <Card 
              key={product.id} 
              imageSrc={product.image} 
              buttonText="Enquiry Now"
              onButtonClick={() => router.push(`/product/${product.id}`)}
              bottomTitle={product.bottomTitle}
              bottomDescription={product.bottomDescription}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default NightGownPage