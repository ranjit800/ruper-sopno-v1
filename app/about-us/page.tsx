import React from 'react'
import Image from 'next/image'
import aboutImg from '@/public/accests/images/AboutImages/about-page-img.png'

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-[#E5DCCF] pt-16 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-12">
        <h1 className="text-center text-[#6E2814] text-3xl md:text-5xl font-medium tracking-[0.2em] uppercase">
          About Us
        </h1>

        <div className="text-center text-[#6E2814] text-sm md:text-[15px] leading-snug sm:leading-relaxed tracking-wide font-medium">
          
          <p className="max-w-[1000px] mx-auto text-justify sm:text-center">
            Founded in 2006, <span className="font-bold">Ruper Sopno Vastra</span> began simply from a genuine passion for clothing and a personal desire 
            to bring the best of the market directly to the people. What started as a small initiative to find better quality 
            products has grown into a trusted destination for those who value variety and excellence in every purchase. We 
            operate as a dedicated one-stop shop, carefully selecting each product from the wholesale market to ensure our 
            customers receive high-quality materials at the best possible value. By maintaining a diverse and ready stock, 
            we take the guesswork out of shopping, offering a hand-picked selection that meets the daily and festive needs 
            of our local community. Whether you are looking for a beautiful saree for a special occasion or a comfortable 
            nightgown for your home, our boutique is built on the promise of reliability and a personal touch that only a 
            local business can provide.
          </p>

          <div className="flex justify-center py-12">
             <Image 
               src={aboutImg}
               alt="Ruper Sopno Vastra Fabrics"
               width={600}
               height={600}
               className="w-full max-w-[500px] aspect-square object-cover object-center shadow-lg"
             />
          </div>

          <p className="max-w-[1000px] mx-auto text-justify sm:text-center">
            Our collection is thoughtfully curated to cover every aspect of a well-rounded lifestyle, ranging from elegant 
            sarees and stylish kurtis to comfortable night gowns and premium bedsheets. We understand that our clients 
            look for durability and beauty in equal measure, which is why we personally inspect every item before it reaches 
            our shelves. We offer the unique flexibility of sourcing products specifically based on customer requirements 
            while also keeping a wide range of styles in stock for immediate purchase. This approach ensures that we 
            remain a convenient, all-in-one shop where quality is never compromised. At <span className="font-bold">Ruper Sopno Vastra</span>, we aren&apos;t 
            just selling products; we are sharing our love for good fabric and great design, ensuring that every customer 
            walks away with a piece that brings comfort and grace to their home and wardrobe.
          </p>

        </div>
      </div>
    </div>
  )
}

export default AboutUsPage