import React, { useEffect, useState } from "react";

const data = [
  "https://4.img-dpreview.com/files/p/TS560x560~forums/58254225/e6557b454d8949abbaf39eb733397b4c",
  "https://random-clicks.weebly.com/uploads/4/9/7/3/49735633/2344164_orig.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSENEdRdFNCgGYvqpiRsBVE1a6eHnTsnrglGA&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqjM5IoxxgdU5KQxXUmnhDXcvRlFRtn7kiLA&s",
  "https://i.pinimg.com/564x/62/cc/50/62cc50616f8c78bcf46f35b054b1f053.jpg",
];
// console.log(data);
const ImageSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
   const timer = setTimeout(() => {
        handleNext();
    },3000)
    return () => {
        clearTimeout(timer);
    }
  }, [activeIndex]);
  const handlePrev = () => {
    activeIndex === 0
      ? setActiveIndex(data.length - 1)
      : setActiveIndex(activeIndex - 1);
  }
  const handleNext = () => {
    setActiveIndex((activeIndex + 1) % data.length);
  }
  return (
    <div className="flex justify-center">
      <button
        className="pr-4 font-bold"
        onClick={handlePrev}
      >
        Previous
      </button>
      {data.map((url, i) => (
        <img key={url} src={url} alt="slideimg" className={"w-96 h-96 " + (activeIndex === i ? "block" : "hidden")} />
      ))}

      <button
        className="pl-4 font-bold"
        onClick={handleNext}
      >
        next
      </button>
    </div>
  );
};

export default ImageSlider;
