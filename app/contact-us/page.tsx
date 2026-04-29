import React from 'react'

const ContactUsPage = () => {
  return (
    <div className="min-h-screen bg-[#E5DCCF] pt-24 pb-24 px-4 flex flex-col items-center">
      <h1 className="text-center text-[#6E2814] text-3xl md:text-4xl lg:text-[42px] font-medium tracking-[0.2em] uppercase mb-16 font-['Brygada_1918']">
        Contact Us
      </h1>

      <form className="w-full max-w-[500px] flex flex-col space-y-6">
        <input 
          type="text" 
          placeholder="Full Name" 
          className="w-full px-6 py-4 bg-[#D1CCC5] placeholder-[#9E9084] text-[#6E2814] text-[15px] rounded-full focus:outline-none focus:ring-1 focus:ring-[#D08740] shadow-sm transition-all shadow-inner"
        />
        <input 
          type="text" 
          placeholder="Last Name" 
          className="w-full px-6 py-4 bg-[#D1CCC5] placeholder-[#9E9084] text-[#6E2814] text-[15px] rounded-full focus:outline-none focus:ring-1 focus:ring-[#D08740] shadow-sm transition-all shadow-inner"
        />
        <textarea 
          placeholder="Type Message ..." 
          rows={7}
          className="w-full px-6 py-4 bg-[#D1CCC5] placeholder-[#9E9084] text-[#6E2814] text-[15px] rounded-2xl focus:outline-none focus:ring-1 focus:ring-[#D08740] shadow-sm transition-all resize-none shadow-inner"
        ></textarea>

        <div className="flex justify-center pt-8">
          <button 
            type="submit" 
            className="bg-[#C87A38] hover:bg-[#B37032] text-white px-10 py-3 rounded-full text-base font-medium tracking-wide transition-colors"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default ContactUsPage 