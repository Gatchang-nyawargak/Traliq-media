// 'use client';
// import Image from "next/image";
// import Link from "next/link";

// const HeroSection = () => {
//   return (
//     <section className="relative w-full h-screen bg-gradient-to-t from-blue-700 to-white flex flex-col items-center justify-center">
//       {/* Content */}
//       <div className="relative z-10 flex flex-col lg:flex-row h-full px-12 lg:px-24 mt-[-50px] items-center justify-between gap-x-12 lg:gap-x-24">
//         {/* Left Content */}
//         <div className="flex-1 flex flex-col justify-center space-y-6 text-center lg:text-left">
//           <h1 className="text-4xl sm:text-4xl md:text-[48px] lg:text-[36px] font-serif text-gray-900 
//                          leading-[1.1] tracking-tight animate-fadeIn shadow-text">
//             Empowering Creators, Elevating Brands Across Africa.
//           </h1>
//           <p className="text-lg sm:text-lg md:text-2xl lg:text-[22px] text-white max-w-2xl mx-auto lg:mx-0 
//                          animate-slideUp opacity-90">
//             Connecting creators and brands across Rwanda, Kenya, and Ethiopia to drive impactful growth and engagement.
//           </p>

//           {/* Flag Icons */}
//           <div className="flex justify-center lg:justify-start space-x-8 -mt-2">
//             <Link href="/kenya">
//               <div className="group transform transition duration-300 hover:scale-110">
//                 <Image
//                   src="/images/kenya.png"
//                   alt="Kenya Flag"
//                   width={50}
//                   height={30}
//                   className="transition-all filter grayscale group-hover:grayscale-0"
//                 />
//                 <p className="text-sm text-white mt-2 opacity-80 font-medium uppercase letter-spacing-wide">Kenya</p>
//               </div>
//             </Link>
//             <Link href="/rwanda">
//               <div className="group transform transition duration-300 hover:scale-110">
//                 <Image
//                   src="/images/rwanda.png"
//                   alt="Rwanda Flag"
//                   width={50}
//                   height={30}
//                   className="transition-all filter grayscale group-hover:grayscale-0"
//                 />
//                 <p className="text-sm text-white mt-2 opacity-80 font-medium uppercase letter-spacing-wide">Rwanda</p>
//               </div>
//             </Link>
//             <Link href="/ethiopia">
//               <div className="group transform transition duration-300 hover:scale-110">
//                 <Image
//                   src="/images/ethiopia.png"
//                   alt="Ethiopia Flag"
//                   width={50}
//                   height={30}
//                   className="transition-all filter grayscale group-hover:grayscale-0"
//                 />
//                 <p className="text-sm text-white mt-2 opacity-80 font-medium uppercase letter-spacing-wide">Ethiopia</p>
//               </div>
//             </Link>
//           </div>

//           {/* CTA Button */}
//           <Link href="/about">
//             <div className="inline-block px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-full 
//                            hover:bg-purple-700 transition-all duration-300 hover:scale-105 animate-fadeIn 
//                            shadow-md hover:shadow-lg border border-transparent hover:border-white/20">
//               Learn More
//             </div>
//           </Link>
//         </div>

//         {/* Right Content - Image (SVG) */}
//         <div className="flex-1 flex items-center justify-center mt-8 lg:mt-0">
//           <div className="transform transition-all duration-500 hover:scale-105">
//             <img
//               src="https://traliq.com/assets/img/hero-img.svg"
//               alt="hero image"
//               className="rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl max-w-full h-auto"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

'use client';
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen bg-gradient-to-t from-blue-700 to-white flex flex-col items-center justify-center">
      {/* Content */}
      <div className="relative z-10 flex flex-col lg:flex-row h-full px-12 lg:px-24 mt-[-50px] items-center justify-between gap-x-12 lg:gap-x-24">
        {/* Left Content */}
        <div className="flex-1 flex flex-col justify-center space-y-6 text-center lg:text-left">
          <h1 className="text-4xl sm:text-4xl md:text-[48px] lg:text-[36px] font-serif text-gray-900 
                         leading-[1.1] tracking-tight animate-fadeIn shadow-text">
            Empowering Creators, Elevating Brands Across Africa.
          </h1>
          <p className="text-lg sm:text-lg md:text-2xl lg:text-[22px] text-white max-w-2xl mx-auto lg:mx-0 
                         animate-slideUp opacity-90">
            Connecting creators and brands across Rwanda, Kenya, and Ethiopia to drive impactful growth and engagement.
          </p>

          {/* Flag Icons */}
          <div className="flex justify-center lg:justify-start space-x-8 -mt-2">
            <Link href="/kenya">
              <div className="group transform transition duration-300 hover:scale-110">
                <Image
                  src="/images/kenya.png"
                  alt="Kenya Flag"
                  width={50}
                  height={30}
                  className="transition-all filter grayscale group-hover:grayscale-0"
                />
                <p className="text-sm text-white mt-2 opacity-80 font-medium uppercase letter-spacing-wide">Kenya</p>
              </div>
            </Link>
            <Link href="/rwanda">
              <div className="group transform transition duration-300 hover:scale-110">
                <Image
                  src="/images/rwanda.png"
                  alt="Rwanda Flag"
                  width={50}
                  height={30}
                  className="transition-all filter grayscale group-hover:grayscale-0"
                />
                <p className="text-sm text-white mt-2 opacity-80 font-medium uppercase letter-spacing-wide">Rwanda</p>
              </div>
            </Link>
            <Link href="/ethiopia">
              <div className="group transform transition duration-300 hover:scale-110">
                <Image
                  src="/images/ethiopia.png"
                  alt="Ethiopia Flag"
                  width={50}
                  height={30}
                  className="transition-all filter grayscale group-hover:grayscale-0"
                />
                <p className="text-sm text-white mt-2 opacity-80 font-medium uppercase letter-spacing-wide">Ethiopia</p>
              </div>
            </Link>
          </div>

          {/* CTA Button */}
          <Link href="/about">
            <div className="inline-block px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-full 
                           hover:bg-purple-700 transition-all duration-300 hover:scale-105 animate-fadeIn 
                           shadow-md hover:shadow-lg border border-transparent hover:border-white/20">
              Learn More
            </div>
          </Link>
        </div>

        {/* Right Content - Image (SVG) */}
        <div className="flex-1 flex items-center justify-center mt-8 lg:mt-0">
          <div className="transform transition-all duration-500 hover:scale-105">
            <Image
              src="https://traliq.com/assets/img/hero-img.svg"
              alt="Hero Image"
              width={600} // Adjust as needed
              height={400} // Adjust as needed
              className="rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
