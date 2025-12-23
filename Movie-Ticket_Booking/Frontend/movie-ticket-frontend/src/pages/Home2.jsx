import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home2() {
  const navigate = useNavigate()

  return (
    <div className='min-h-[85vh] bg-red-500'>
  {/* <div className="relative w-full min-h-[80vh] flex items-center justify-center bg-black rounded-lg shadow-lg">
  <img
    src="https://i.etsystatic.com/40754132/r/il/d9e550/7459968069/il_1588xN.7459968069_gpjg.jpg"
    alt="movie"
    className="max-h-[80vh] w-auto "
  />

  <p className="absolute top-1/2 left-0 pl-4 -translate-y-1/2 italic font-bold text-7xl text-white">
    Feeling <br /> Tired??
  </p>

  <p className="absolute left-0 bottom-0 w-full italic text-white text-2xl font-extrabold pb-10 pl-4">
    Spend Some Quality Time With Your Favorite Movies!
  </p>
</div> */}
    <div className="w-full min-h-[85vh] flex items-center bg-black  shadow-lg px-5">

  <div className=" flex items-start flex-col ">
    <p className="italic font-bold text-7xl text-white">
      Feeling <br /> Bored ??
    </p>
    <p className="italic text-white text-[42px] font-bold pt-6 ">
      Spend Some Quality Time <br />
      With Your Favorite Movies!
    </p>
    <button onClick={() => navigate('/movies')} className="mt-8 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition text-3xl font-bold">BOOK NOW</button>
  </div>

  <div className="flex-1 flex justify-center items-center">
    <img
      src="https://i.etsystatic.com/40754132/r/il/d9e550/7459968069/il_1588xN.7459968069_gpjg.jpg"
      alt="movie"
      className="max-h-[80vh] w-auto object-contain rounded-lg"
    />
  </div>
</div>


    </div>
  )
}

export default Home2;
