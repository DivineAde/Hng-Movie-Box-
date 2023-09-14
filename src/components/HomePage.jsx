import Navbar from "./Navbar";

export default function HomePage({
  backgroundImage,
  title,
  overview,
  name,
  rating,
}) {
  const ratingPercentage = Math.round((rating / 10) * 100);
  return (
    <section
      className="hero bg-cover bg-center bg-no-repeat w-full h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Navbar />
      <div className="absolute top-1/4 left-[3%] md:top-[35%]  w-[350px] md:w-[400px] text-white">
        <h1 className=" text-5xl font-bold">{title || name}</h1>
        <div className="flex items-center gap-12">
          <div className="flex gap-1">
            <img
              src="/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@ 1.png"
              className=""
              alt="imbd"
            />
            <span>{rating} / 10.0</span>
          </div>
          <div className="flex items-center gap-1">
            <p>{ratingPercentage}%</p>
            <img src="/PngItem_1381056 1.png" alt="rotten tomato score" />
          </div>
        </div>
        <p>{overview}</p>
        <button className=" bg-red-700 text-white py-2 px-3 rounded-lg uppercase font-semibold mt-2 flex items-center gap-1">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM9.5547 7.16795C9.24784 6.96338 8.8533 6.94431 8.52814 7.11833C8.20298 7.29235 8 7.63121 8 8V12C8 12.3688 8.20298 12.7077 8.52814 12.8817C8.8533 13.0557 9.24784 13.0366 9.5547 12.8321L12.5547 10.8321C12.8329 10.6466 13 10.3344 13 10C13 9.66565 12.8329 9.35342 12.5547 9.16795L9.5547 7.16795Z"
              fill="white"
            />
          </svg>
          Watch trailer
        </button>
      </div>
    </section>
  );
}
