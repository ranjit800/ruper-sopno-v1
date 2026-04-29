'use client';
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Card from '@/components/Common/Card'

import saree1 from '@/public/accests/images/SareeImgs/img1.png'
import saree2 from '@/public/accests/images/SareeImgs/img2.png'
import saree3 from '@/public/accests/images/SareeImgs/Img3.png'

const sareeProducts = [
  {
    id: 1,
    image: saree1,
    bottomTitle: "CRIMSON HERITAGE\nSILK SAREE",
    bottomDescription: "Premium Blended Silk, offering a smooth drape with a subtle, sophisticated sheen.",
    price: "RS 200"
  },
  {
    id: 2,
    image: saree2,
    bottomTitle: "CRIMSON HERITAGE\nSILK SAREE",
    bottomDescription: "Premium Blended Silk, offering a smooth drape with a subtle, sophisticated sheen.",
    price: "RS 200"
  },
  {
    id: 3,
    image: saree3,
    bottomTitle: "CRIMSON HERITAGE\nSILK SAREE",
    bottomDescription: "Premium Blended Silk, offering a smooth drape with a subtle, sophisticated sheen.",
    price: "RS 200"
  },
  {
    id: 4,
    image: saree1,
    bottomTitle: "CRIMSON HERITAGE\nSILK SAREE",
    bottomDescription: "Premium Blended Silk, offering a smooth drape with a subtle, sophisticated sheen.",
    price: "RS 200"
  },
  {
    id: 5,
    image: saree2,
    bottomTitle: "CRIMSON HERITAGE\nSILK SAREE",
    bottomDescription: "Premium Blended Silk, offering a smooth drape with a subtle, sophisticated sheen.",
    price: "RS 200"
  },
  {
    id: 6,
    image: saree3,
    bottomTitle: "CRIMSON HERITAGE\nSILK SAREE",
    bottomDescription: "Premium Blended Silk, offering a smooth drape with a subtle, sophisticated sheen.",
    price: "RS 200"
  }
];

const SareePage = () => {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-[#E5DCCF] pt-16 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        <h1 className="text-center text-[#6E2814] text-3xl md:text-4xl lg:text-[42px] font-medium tracking-[0.2em] uppercase font-['Brygada_1918']">
          Saree Collection
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-3 sm:gap-x-8 sm:gap-y-16 justify-items-center">
          {sareeProducts.map((product) => (
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

export default SareePage