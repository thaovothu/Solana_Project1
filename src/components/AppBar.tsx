// //nav, role="navigation", aria-label, role="menubar"
// import {FC} from 'react';
// import {LuMenu} from 'react-icons/lu';
// import NetworkSwitcher  from './NetworkSwitcher';

// export const AppBar: FC  = (props) =>{ 
//   const menu =[
//     {
//       name:"Home",
//       link: "#home",
//     },
//     {
//       name:"About Us",
//       link: "#about",
//     },
//     {
//       name:"Tools",
//       link: "#tools",
//     },
//     {
//       name:"Features",
//       link: "#features",
//     },
    
//     {
//       name:"Faq",
//       link: "#faq",
//     },
//   ];
//   return (
//     <div>
//       {/* <header id="navbar-sticky" className ="navbar">
//         <div className="container">
//           <nav>
//             < a href="/" className ="logo">
//               <img src="assets/images/logo1.png" className = "h-10" alt="logo" />
//             </a>

//             <div className= "ms-auto flex items-center px-2.5 lg:hidden">
//               <button className ="hs-collapse-toggle bg-default-100/5 inline-flex h-9 w-12 items-center
//               rounded-md border border-white/20" type = "button" data-hs-collapse ="#mobileMenu" 
//               data-hs-type="collapse"> 
//               <i data-lucide ="menu" className="stroke-white">
//                 <LuMenu />
//               </i>
//               </button>
//             </div> 

//             <div className="hs-collapse mx-auto mt-2 hidden grow basics-full items-center 
//             justify-center  transition-all duration-300 lg:mt-0 lg:flex lg:basic-auto" id="mobileMenu">
//               <ul id="navbar-navlist" className="navbar-nav">
//                 {
//                   menu.map((list,index) =>(
//                     <li className="nav-item" key ={index}>
//                       <a className="nav-link" href={list.link}> {list.name}</a>
//                     </li>
//                   ))
//                 }
//               </ul>
//             </div>

//             <NetworkSwitcher />
//           </nav>
//         </div>
//       </header>
//       {props.children} */}
//       <header id="navbar-sticky" className="navbar" role="banner">
//   <div className="container">
//     <nav role="navigation" aria-label="Main Navigation">
//       <a href="/" className="logo" aria-label="Home page">
//         <img src="assets/images/logo1.png" className="h-10" alt="Solana Token Creator Logo" />
//       </a>

//       <div className="ms-auto flex items-center px-2.5 lg:hidden">
//         <button
//           className="hs-collapse-toggle bg-default-100/5 inline-flex h-9 w-12 items-center
//           rounded-md border border-white/20"
//           type="button"
//           aria-label="Toggle mobile menu"
//           aria-controls="mobileMenu"
//           aria-expanded="false"
//           data-hs-collapse="#mobileMenu"
//           data-hs-type="collapse"
//         >
//           <i data-lucide="menu" className="stroke-white">
//             <LuMenu />
//           </i>
//         </button>
//       </div>

//       <div
//         className="hs-collapse mx-auto mt-2 hidden grow basics-full items-center 
//         justify-center transition-all duration-300 lg:mt-0 lg:flex lg:basic-auto"
//         id="mobileMenu"
//       >
//         <ul id="navbar-navlist" className="navbar-nav" role="menubar">
//           {menu.map((list, index) => (
//             <li className="nav-item" key={index} role="none">
//               <a className="nav-link" role="menuitem" href={list.link}>
//                 {list.name}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>

//       <NetworkSwitcher />
//     </nav>
//   </div>
// </header>

// <main>{props.children}</main>

//     </div>
//   )
// }

// export default AppBar;



//nav, role="navigation", aria-label, role="menubar"
import {FC} from 'react';
import {LuMenu} from 'react-icons/lu';
import NetworkSwitcher  from './NetworkSwitcher';

export const AppBar: FC  = (props) =>{ 
  const menu =[
    {
      name:"Home",
      link: "#home",
    },
    
    {
      name:"Tools",
      link: "#tools",
    },
    {
      name:"Features",
      link: "#features",
    },
    {
      name:"FAQ",
      link: "#faq",
    },
    {
    name: "Gallery", // Thêm dòng này
    link: "/gallery", // Đường dẫn tới trang gallery
  },
  ];
  return (
    <div>
      <header id="navbar-sticky" className="navbar" role="banner">
        <div className="container">
          <nav role="navigation" aria-label="Main navigation">
            <a href="/" className="logo" aria-label="Home">
              <img src="assets/images/logo1.png" className="h-10" alt="Logo Solana Token Creator" />
            </a>
           

            <div className="ms-auto flex items-center px-2.5 lg:hidden">
              <button
                className="hs-collapse-toggle bg-default-100/5 inline-flex h-9 w-12 items-center
                rounded-md border border-white/20"
                type="button"
                aria-label="Open the mobile menu"
                aria-controls="mobileMenu"
                aria-expanded="false"
                data-hs-collapse="#mobileMenu"
                data-hs-type="collapse"
              >
                <i data-lucide="menu" className="stroke-white">
                  <LuMenu />
                </i>
              </button>
            </div>

            <div
              className="hs-collapse mx-auto mt-2 hidden grow basics-full items-center 
              justify-center transition-all duration-300 lg:mt-0 lg:flex lg:basic-auto"
              id="mobileMenu"
            >
              <ul id="navbar-navlist" className="navbar-nav" role="menubar">
                {menu.map((list, index) => (
                  <li className="nav-item" key={index} role="none">
                    <a className="nav-link" role="menuitem" href={list.link}>
                      {list.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <NetworkSwitcher />
          </nav>
        </div>
      </header>

      <main>{props.children}</main>
    </div>
  )
}

export default AppBar;