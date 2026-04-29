'use client';
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Card from '@/components/Common/Card'

import homeAcc1 from '@/public/accests/images/HomeEssentialImgs/homeEssentialImg1.png'
import homeAcc2 from '@/public/accests/images/HomeEssentialImgs/homeEssentialImg2.png'

const homeProducts = [
  {
    id: 1,
    image: homeAcc1,
    bottomTitle: "CRIMSON HERITAGE\nSILK SAREE",
    bottomDescription: "Premium Blended Silk, offering a smooth drape with a subtle, sophisticated sheen.",
    price: "RS 200"
  },
  {
    id: 2,
    image: homeAcc2,
    bottomTitle: "CRIMSON HERITAGE\nSILK SAREE",
    bottomDescription: "Premium Blended Silk, offering a smooth drape with a subtle, sophisticated sheen.",
    price: "RS 200"
  }
];

const HomeEssentialPage = () => {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-[#E5DCCF] pt-16 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-20">
        <h1 className="text-center text-[#6E2814] text-3xl md:text-4xl lg:text-[42px] font-medium tracking-[0.2em] uppercase font-['Brygada_1918']">
          Home Essential Collection
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-2 gap-y-10 gap-x-3 sm:gap-x-8 sm:gap-y-16 lg:gap-x-12 justify-items-center max-w-[1100px] mx-auto">
          {homeProducts.map((product) => (
            <Card 
              key={product.id} 
              imageSrc={product.image} 
              buttonText="Enquiry Now"
              onButtonClick={() => router.push(`/product/${product.id}`)}
              bottomTitle={product.bottomTitle}
              bottomDescription={product.bottomDescription}
              price={product.price}
              imageWrapperClassName="w-full max-w-[520px] aspect-[4/3] rounded-2xl"
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomeEssentialPage