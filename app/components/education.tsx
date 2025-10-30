// const education = () =>{
//     return(
//         <section id="education" className="md:px-24 px-6 py-7 md:py-10 pb-7 md:pb-0 md:mb-0">

//             <h1  className="md:text-6xl  text-4xl font-black md:pb-8 pb-8" >My Educational Journey</h1>
//             <header className="md:flex md:space-x-20">

//         <div className="border-2 h-[350px] w-[400px] md:h-[400px] md:w-[500px] rounded-lg border-gray-600 bg-gray-900/50 px-6 py-4 mb-12">
//             <h1 className="flex justify-center py-3 text-2xl md:text-4xl text-gray-300 font-extrabold">School Education</h1>
//             <p className="m-4 text-gray-300 text-base md:text-xl">I completed my Matriculation in Science from Study Inn KPA School, Karachi, securing an
//                  A1 Grade. My school years helped me build a strong foundation in scientific learning and
//                   analytical thinking. I maintained consistent academic excellence and developed an early 
//                   interest in understanding how technology and logic can simplify complex problems. This 
//                   phase shaped my curiosity and dedication toward both science and innovation.</p>
//         </div>

//         <div className="bg-white h-[850px] w-[5px] hidden md:block "></div>
//         <span className="md:py-[400px]  ">

//           <div className="border-2  h-[350px] w-[400px] md:h-[400px] md:w-[500px] rounded-lg border-gray-600 bg-gray-900/50 px-6 py-0 md:py-4 md:mb-0 mb-12">
//             <h1 className="flex justify-center py-3 text-2xl md:text-4xl text-gray-300 font-extrabold">Higher Secondary Education</h1>
//             <p className="m-4 text-gray-300 text-base md:text-xl">I successfully completed my Intermediate in
//                  Pre-Medical from Government Degree Girls College, Karachi in 2025, achieving good grades.
//                   Through my studies in Biology, Chemistry, and Physics, I strengthened my analytical and 
//                   problem-solving abilities while developing precision, focus, and perseverance. This 
//                   educational journey deepened my understanding of scientific concepts and enhanced my 
//                   ability to think critically and creatively.</p>
//         </div>
//         </span>

          
//             </header>
//         </section>
//     )
// }
// export default education;











const Education = () => {
  return (
    <section
      id="education"
      className="md:px-16 px-2 py-7 md:py-10 pb-7 md:pb-40 md:mb-0"
    >
      <h1 className="md:text-6xl text-3xl font-black md:pb-8 pb-8  md:text-left">
        My Educational Journey
      </h1>

      <div className="relative flex flex-col md:flex-row items-center md:justify-center md:space-x-10">
        {/* Left Box */}
        <div className="md:w-[520px] w-full md:h-[430px] h-auto border-2 border-gray-600 bg-gray-900/50 rounded-lg px-6 py-4 md:mb-0 mb-12 md:translate-y-[-150px]">
          <h1 className="flex justify-center py-3 text-xl md:text-3xl text-gray-300 font-extrabold">
            School Education
          </h1>
          <p className="md:m-4 m-2 text-gray-300 text-sm md:text-xl">
            I completed my Matriculation in Science from Study Inn KPA School,
            Karachi, securing an A1 Grade. My school years helped me build a
            strong foundation in scientific learning and analytical thinking. I
            maintained consistent academic excellence and developed an early
            interest in understanding how technology and logic can simplify
            complex problems. This phase shaped my curiosity and dedication
            toward both science and innovation.
          </p>
        </div>

        {/* Middle Vertical Line */}
        <div className="hidden md:block bg-white w-[4px] h-[830px]"></div>

        {/* Right Box */}
        <div className="md:w-[520px] w-full md:h-[450px] h-auto border-2 border-gray-600 bg-gray-900/50 rounded-lg px-6 py-4 md:translate-y-[180px]">
          <h1 className="flex justify-center py-3 text-xl md:text-3xl text-gray-300 font-extrabold">
            Higher Secondary Education
          </h1>
          <p className="md:m-4 m-2 text-gray-300 text-sm md:text-xl">
            I successfully completed my Intermediate in Pre-Medical from
            Government Degree Girls College, Karachi in 2025, achieving good
            grades. Through my studies in Biology, Chemistry, and Physics, I
            strengthened my analytical and problem-solving abilities while
            developing precision, focus, and perseverance. This educational
            journey deepened my understanding of scientific concepts and
            enhanced my ability to think critically and creatively.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
