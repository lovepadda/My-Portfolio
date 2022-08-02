import React from 'react';
import marketing from '../assests/portfolio/marketing.jpg';
import portfolio from '../assests/portfolio/portfolio.jpg';
import navbar from '../assests/portfolio/navbar.jpg';
import pizzashop from '../assests/portfolio/pizzashop.jpg';
import tictactoe from '../assests/portfolio/tictactoe.jpg';


const Portfolio = () => {
    const portfolios = [
      {
        id: 1,
        src: marketing,
        href: "https://github.com/lovepadda/marketing-main",
        href1: "https://lighthearted-dragon-9291f1.netlify.app/",



      },
      {
        id: 2,
        src: pizzashop,
        href: "https://github.com/lovepadda",
        href1: "https://beamish-faloodeh-ff889c.netlify.app/",



      },
      {
        id: 3,
        src: navbar,
        href: "https://github.com/lovepadda/react-navbar-4",
        href1: "https://delightful-custard-72d0fd.netlify.app/",


      },
      {
        id: 4,
        src: tictactoe,
        href: "https://github.com/lovepadda/tic-tac-toe",
        href1: "https://brilliant-cuchufli-716309.netlify.app/",


      },
      {
        id: 5,
        src: portfolio,
        href: "https://github.com/lovepadda/my-portfolio",
        href1: "https://sensational-axolotl-8b099b.netlify.app/",

        


      },
      
    ];
     
    return (
      <div
        name="portfolio"
        className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Portfolio
            </p>
            <p className="py-6">You can have a look of all my projects here</p>
          </div>
  
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {portfolios.map(({ id, src, href, href1 }) => (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
                  <div className="flex items-center justify-center">
                  <a href={href1} target="_blank" rel="noreferrer">

                  <button className="rounded-md bg-gradient-to-r from-blue-500 to-cyan-500 cursor-pointer w-1/9 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                  </a>
                  <a href ={href} target="_blank" rel="noreferrer">
                  <button className="rounded-md bg-gradient-to-r from-blue-500 to-cyan-500 cursor-pointer w-1/9 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Portfolio;