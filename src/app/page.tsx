import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white">

      <div className="flex bg-blue-700 justify-around items-center w-auto  h-24 ">

        <Image
         src="/images/logoG.jpg"
         alt="Logo"
         width={100}
         height={100} 
         className="pt-16"
         />

        <h2 className="text-2xl text-white font-serif ">Tution Free Education Program On Latest Technologies</h2>
    
      <div>
        <ul className="flex text-2xl space-x-3 text-white">
          <li>Home</li>
          <li>Apply</li>
          <li>Job</li>
          <li>Result</li>
          <li>Courses</li>
        </ul>
      </div>
      </div>
      <div className="flex pt-10 ">
        <div className="pl-8">
          <h1 className="whitespace-nowrap text-center text-[2rem] font-extrabold leading-10 tracking-wider  text-main sm:text-5xl sm:leading-none md:text-left text-blue-800 lg:text-6xl  mt-0">Governor Sindh</h1>
          <h1 className="whitespace-nowrap text-center text-[1.5rem] font-normal leading-[2rem] tracking-wider text-main sm:text-4xl sm:leading-[3rem] md:text-left text-blue-800 lg:text-[2.5rem]">Kamran Khan Tessori</h1>
          <h1 className="whitespace-nowrap text-center text-[1.5rem] font-semibold leading-[2rem] tracking-wider text-sub sm:text-4xl sm:leading-[3rem] md:text-left text-blue-400">
            Certified Cloud <br />
            Applied Generative AI <br />
            Engineer (GenEng)
          </h1>
          <p className="my-5 whitespace-nowrap text-center text-[1.25rem] font-extrabold text-main sm:text-3xl text-blue-900 md:text-left">Earn up to $5,000 / month</p>
          <p className="my-5 w-full text-center text-[2.25rem] font-bold tracking-wider text-main sm:text-3xl md:w-[80%] md:text-left text-blue-900">Now admissions are <br /> open in Hyderabad</p>
          <div className="mb-7 mt-5 flex flex-col items-center sm:mt-10 sm:flex-row sm:gap-5 md:mb-0">
            <a className="w-full text-white bg-blue-900 rounded-md md:w-auto" href="/Apply">
              <button className="w-full rounded-md bg-main py-3 text-center text-sm font-semibold tracking-widest text-white transition-all hover:translate-y-1 sm:py-4 sm:text-base md:w-52">APPLY NOW</button>
            </a>
            <div className="mt-4 flex w-full flex-col items-center sm:mt-0">
              <div className="flex-col text-center text-xl tracking-widest text-main sm:text-3xl">
                <div className="w-40 font-extrabold text-blue-900">562,143</div>
              </div>
              <div className="text-center text-1xl font-semibold text-blue-900 tracking-wider text-main sm:mb-0 sm:text-sm">Accepted <br /> Applications</div>
            </div>
          </div>
        </div>
       </div>

       <div className="flex flex-col items-center -mt-96  sm:flex-row  md:flex-col md:gap-0">
       <Image  
      src="/Images/governorsindh.png"  
      alt="Giaic"  
      loading="lazy"  
      width={1300}  
      height={900}  
      decoding="async"  
      data-nimg="1"  
      className="w-full h-auto max-w-[700px] -mt-36 justify-items-end ml-auto"  
/>
    </div>
  
    <div className="flex justify-around p-5 mt-6 ">
        
          <Image
          src="/Images/p1.jpg"
          alt="Giaic"
          loading="lazy"
          width={100}
          height={100}
          decoding="async"
          data-nimg="1"
          className="w-full h-auto max-w-[800px] justify-items-start m-5 ml-auto" 
          
          />
        <Image
          src="/Images/p2.jpg"
          alt="Giaic"
          loading="lazy"
          width={100}
          height={100}
          decoding="async"
          data-nimg="1"
          className="w-full h-auto max-w-[800px] justify-items-start m-5 ml-auto" 
          
          />
          <Image
          src="/Images/p3.jpg"
          alt="Giaic"
          loading="lazy"
          width={100}
          height={100}
          decoding="async"
          data-nimg="1"
          className="w-full h-auto max-w-[800px] justify-items-start m-5 ml-auto" 
          
          />
      </div>
      <footer>
        <div className="text-center text-2xl bg-gray-500 text-white p-5">
          &copy; 2024 Governor Sindh. All rights reserved.
        </div>
      </footer>
    </div>
      
      
  
   );
}
