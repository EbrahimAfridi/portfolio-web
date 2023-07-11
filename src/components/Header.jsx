// import logo from '../assets/icons/website logo.png'

// function Header () {
//     return(
//         <div className="items-center justify-end hidden px-12 py-5 sm:flex sm:py-10 sm:px-20 selection:bg-black selection:text-white">
//            <img className="absolute items-center w-32 h-auto mt-4 select-none left-20 hover:cursor-pointer" src={logo} alt="Logo" />
            
//             {/* Right Part */}
//             <div className="flex sm:gap-6 hover:cursor-pointer justify-evenly">
//                 {/* <a href="#" rel="noopener noreferrer">
//                 <span className="hover:underline underline-offset-4">Home</span>
//                 </a> */}
//                 <a href="#services"><span className="hover:underline underline-offset-4">Service</span></a>
//                 <a href="#experience"><span className="hover:underline underline-offset-4">Experience</span></a>
//                 <a href="#skills"><span className="hover:underline underline-offset-4">Skills</span></a>
                
//                 <a href="http://linktr.ee/ebrahimafridi" target='_blank'  rel="noopener noreferrer">
//                     <span className="hover:underline underline-offset-4">Contact</span>
//                 </a>
//             </div>
//         </div>
//     )
// }

// export default Header;


import logo from '../assets/icons/website logo.png';

function Header() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="items-center justify-end hidden px-12 py-5 sm:flex sm:py-10 sm:px-20 selection:bg-black selection:text-white">
      <img
        className="absolute items-center w-32 h-auto mt-4 select-none left-20 hover:cursor-pointer"
        src={logo}
        alt="Logo"
      />

      {/* Right Part */}
      <div className="flex sm:gap-6 hover:cursor-pointer justify-evenly">
        <span className="hover:underline underline-offset-4" onClick={() => scrollToSection('services')}>
          Service
        </span>
        <span className="hover:underline underline-offset-4" onClick={() => scrollToSection('experience')}>
          Experience
        </span>
        <span className="hover:underline underline-offset-4" onClick={() => scrollToSection('skills')}>
          Skills
        </span>

        <a href="http://linktr.ee/ebrahimafridi" target="_blank" rel="noopener noreferrer">
          <span className="hover:underline underline-offset-4">Contact</span>
        </a>
      </div>
    </div>
  );
}

export default Header;
