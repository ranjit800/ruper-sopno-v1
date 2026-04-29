'use client';
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Card from '@/components/Common/Card'

import salwar1 from '@/public/accests/images/SalwarImgs/SalwarImgs1.png'
import salwar2 from '@/public/accests/images/SalwarImgs/SalwarImgs2.png'
import salwar3 from '@/public/accests/images/SalwarImgs/SalwarImgs3.png'

const salwarProducts = [
  {
    id: 1,
    image: salwar1,
    bottomTitle: "CRIMSON HERITAGE\nSILK SAREE",
    bottomDescription: "Premium Blended Silk, offering a smooth drape with a subtle, sophisticated sheen.",
    price: "RS 200"
  },
  {
    id: 2,
    image: salwar2,
    bottomTitle: "CRIMSON HERITAGE\nSILK SAREE",
    bottomDescription: "Premium Blended Silk, offering a smooth drape with a subtle, sophisticated sheen.",
    price: "RS 200"
  },
  {
    id: 3,
    image: salwar3,
    bottomTitle: "CRIMSON HERITAGE\nSILK SAREE",
    bottomDescription: "Premium Blended Silk, offering a smooth drape with a subtle, sophisticated sheen.",
    price: "RS 200"
  },
  {
    id: 4,
    image: salwar1,
    bottomTitle: "CRIMSON HERITAGE\nSILK SAREE",
    bottomDescription: "Premium Blended Silk, offering a smooth drape with a subtle, sophisticated sheen.",
    price: "RS 200"
  },
  {
    id: 5,
    image: salwar2,
    bottomTitle: "CRIMSON HERITAGE\nSILK SAREE",
    bottomDescription: "Premium Blended Silk, offering a smooth drape with a subtle, sophisticated sheen.",
    price: "RS 200"
  },
  {
    id: 6,
    image: salwar3,
    bottomTitle: "CRIMSON HERITAGE\nSILK SAREE",
    bottomDescription: "Premium Blended Silk, offering a smooth drape with a subtle, sophisticated sheen.",
    price: "RS 200"
  }
];

const SalwarPage = () => {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-[#E5DCCF] pt-16 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        <h1 className="text-center text-[#6E2814] text-3xl md:text-4xl lg:text-[42px] font-medium tracking-[0.2em] uppercase font-['Brygada_1918']">
          Salwar Suit Collection
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-3 sm:gap-x-8 sm:gap-y-16 justify-items-center">
          {salwarProducts.map((product) => (
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

export default SalwarPage