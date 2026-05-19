import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import GradientTitle from "./gradiant-title.jsx";
import Ptext from "./p-text.jsx";



export const ShuffleHero = () => {
    
  return (
    <div className="w-full py-16">
      
    <section
      className="w-full  container mx-auto  rounded px-4 pb-8 grid grid-cols-1 md:grid-cols-2 items-center gap-8 ">
       
      <div>
        <span className="block mb-4 text-xs md:text-sm text-primary font-medium">
          Who We Are ?
        </span>
      <GradientTitle title="Leading Manufacturer & Exporter" />
       <br />
     
        <Ptext text=" We are a leading manufacturer and exporter of diffusers based in
            Sulaymaniyah City. At MODERN DUCT, we develop a unique range of
            products that meet the specific needs of our customers." />
        <br />
    

<Ptext text=" Quality is our top priority - the trust our customers place in us is
            our greatest asset. Our team ensures accurate and up-to-date
            information from start to finish." />

      
        {/* <button
          className={cn(
            "border border-primary-primary text-primary-primary  hover:text-primary-foreground font-medium py-2 px-4 rounded-md",
            "transition-all hover:bg-primary-primary/50 hover:border-none active:scale-95",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          )}>
          Find a class
        </button> */}
      </div>
      <ShuffleGrid /> 
    </section>
    </div>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "../assets/images/modern-1.jpeg",
  },
  {
    id: 2,
    src: "../assets/images/modern-2.jpeg",
  },
  {
    id: 3,
    src: "../assets/images/modern-3.jpeg",
  },
  {
    id: 4,
    src: "../assets/images/modern-4.jpeg",
  },
  {
    id: 5,
    src: "../assets/images/modern-1.jpeg",
  },
  {
    id: 6,
    src: "../assets/images/modern-2.jpeg",
  },
  {
    id: 7,
    src: "../assets/images/modern-3.jpeg",
  },
  {
    id: 8,
    src: "../assets/images/modern-4.jpeg",
  },
  {
    id: 9,
    src: "../assets/images/modern-1.jpeg",
  },
  {
    id: 10,
    src: "../assets/images/modern-2.jpeg",
  },
  {
    id: 11,
    src: "../assets/images/modern-3.jpeg",
  },
  {
    id: 12,
    src: "../assets/images/modern-4.jpeg",
  },
  {
    id: 13,
    src: "../assets/images/modern-1.jpeg",  
  },
  {
    id: 14,
    src: "../assets/images/modern-2.jpeg",
  },
  {
    id: 15,
    src: "../assets/images/modern-4.jpeg",  
  },
  {
    id: 16,
    src: "../assets/images/modern-1.jpeg",  
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full  h-full rounded-md overflow-hidden bg-muted  border border-duct-black brightness-75 "
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    timeoutRef.current = setInterval(() => {
      setSquares(generateSquares());
    }, 3000);

    return () => {
      if (timeoutRef.current) {
        clearInterval(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[460px] gap-1 ">
      {squares.map((sq) => sq)}
    </div>
  );
};
