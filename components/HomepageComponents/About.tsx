import Image from 'next/image'
import Link from 'next/link'
import AboutImg from '@/public/accests/images/AboutImages/AboutSectionImg.png'

const About = () => {
  return (
    <section className="bg-[#4B2418] py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          
          {/* Left Side content (50%) */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
            <h2 className="text-[#E2B06F] text-3xl md:text-4xl lg:text-[42px] font-['Brygada_1918'] tracking-tight leading-tight">
              About Ruper Sopno Vastra
            </h2>
            
            <p className="text-[#E2B06F]/90 text-sm md:text-lg lg:text-xl font-light leading-relaxed max-w-2xl px-2 md:px-0">
              <strong className="font-semibold">Ruper Sopno Vastra</strong> is your one-stop shop in 
              Kolkata for hand-picked sarees, kurtis, home 
              essentials, and more. We bring the best of the 
              wholesale market directly to you, focusing on 
              premium quality and honest prices.
            </p>
            
            <div className="pt-4">
              <Link href="/about-us" className="inline-block px-12 py-3.5 bg-[#d38d48] hover:bg-[#c47e3a] text-white text-lg md:text-xl rounded-full transition-all duration-300 shadow-2xl active:scale-95">
                Know More
              </Link>
            </div>
          </div>

          {/* Right Side Image (50%) */}
          <div className="w-full lg:w-1/2 relative group">
            <div className="relative w-full aspect-[16/11] md:aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border border-white/5">
              <Image 
                src={AboutImg} 
                alt="Exquisite fabric detail" 
                fill 
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                priority
              />
              {/* Subtle overlay for depth */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}


export default About