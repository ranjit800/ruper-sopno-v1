import React from 'react'
import Image from 'next/image'
import Card from '@/components/Common/Card'

import kurti1 from '@/public/accests/images/KurtiImgs/kurtiImg1.png'
import kurti2 from '@/public/accests/images/KurtiImgs/kurtiImg2.png'
import kurti3 from '@/public/accests/images/KurtiImgs/kurtiImg3.png'

const kurtiProducts = [
  {
    id: 1,
    image: kurti1,
    bottomTitle: "SUNSET OCHRE\nMINIMALIST KURTI",
    bottomDescription: "Premium Cotton, offering a smooth drape with a subtle, sophisticated sheen.",
    price: "RS 200"
  },
  {
    id: 2,
    image: kurti2,
    bottomTitle: "INDIGO ARTISAN\nA-LINE KURTI",
    bottomDescription: "Premium Cotton, offering a smooth drape with a subtle, sophisticated sheen.",
    price: "RS 200"
  },
  {
    id: 3,
    image: kurti3,
    bottomTitle: "ROYAL EMERALD\nZARI KURTI",
    bottomDescription: "Premium Cotton, offering a smooth drape with a subtle, sophisticated sheen.",
    price: "RS 200"
  },
  {
    id: 4,
    image: kurti1,
    bottomTitle: "SUNSET OCHRE\nMINIMALIST KURTI",
    bottomDescription: "Premium Cotton, offering a smooth drape with a subtle, sophisticated sheen.",
    price: "RS 200"
  },
  {
    id: 5,
    image: kurti2,
    bottomTitle: "INDIGO ARTISAN\nA-LINE KURTI",
    bottomDescription: "Premium Cotton, offering a smooth drape with a subtle, sophisticated sheen.",
    price: "RS 200"
  },
  {
    id: 6,
    image: kurti3,
    bottomTitle: "ROYAL EMERALD\nZARI KURTI",
    bottomDescription: "Premium Cotton, offering a smooth drape with a subtle, sophisticated sheen.",
    price: "RS 200"
  }
];

const KurtiPage = () => {
  return (
    <div className="min-h-screen bg-[#E5DCCF] pt-16 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        <h1 className="text-center text-[#6E2814] text-3xl md:text-4xl lg:text-[42px] font-medium tracking-[0.2em] uppercase">
          Kurti Collection
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8 justify-items-center">
          {kurtiProducts.map((product) => (
            <Card 
              key={product.id} 
              imageSrc={product.image} 
              buttonText="Enquiry Now"
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

export default KurtiPage