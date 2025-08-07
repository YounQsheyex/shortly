import React from "react";
import { useState, useEffect } from "react";
import { statistics } from "../../data";
import { ClipLoader } from "react-spinners";
import { linkSchema } from "../../formValidator";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const getStoredLinks = () => {
  const data = localStorage.getItem("shortenedLinks");
  try {
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};
const HeroDown = () => {
  const [isSubmitting, setIsubmitting] = useState(false);
  const [shortlink, setShortlink] = useState("");
  const [link, setLink] = useState(getStoredLinks());
  const [copy, setCopy] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(linkSchema),
  });

  const onSubmit = (e) => {
    setIsubmitting(true);
    const shortenLink = async () => {
      try {
        const response = await fetch(
          `https://tinyurl.com/api-create.php?url=${shortlink}`
        );
        if (!response.ok) {
          throw new Error("Please add a link");
        }
        const data = await response.text();

        // console.log(data);
        const allLink = {
          typedLink: shortlink,
          shortenedLink: data,
        };
        const newLinks = [allLink, ...link];
        setLink(newLinks);
        setShortlink("");
        reset();
      } catch (error) {
        setErrorMsg(error?.response?.data.message || "Please add a Link");

        // console.log(error);
      }
      setIsubmitting(false);
    };
    shortenLink();
  };

  const handleCopy = (shortened, index) => {
    navigator.clipboard.writeText(shortened);
    setCopy(index);
    setTimeout(() => setCopy(null), 1500);
  };
  useEffect(() => {
    localStorage.setItem("shortenedLinks", JSON.stringify(link));
  }, [link]);

  return (
    <div className="w-full lg:w-[1440px] mx-auto p-10 mt-40 bg-gray-300 ">
      <div className="w-full lg:w-[1024px] mx-auto">
        <div className="w-[330px] mx-auto lg:mx-0 lg:w-[1024px] h-[160px] p-5 lg:p-10 bgshort rounded-lg -mt-30">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col lg:flex lg:flex-row items-center justify-center gap-2 lg:gap-3 lg:p-2"
          >
            <div className="w-full lg:w-[70%] mb-5 lg:mb-0">
              <input
                type="text"
                id="webUrl"
                {...register("webUrl")}
                value={shortlink}
                onChange={(e) => setShortlink(e.target.value)}
                placeholder="Shorten a link here..."
                className={`bg-white w-full lg:w-full h-[50px] rounded-lg lg:rounded-2xl px-5 placeholder:font-[700] focus:outline-none ${
                  errors.webUrl
                    ? "border-red-400 border-[2px] placeholder:text-red-400"
                    : "border-none"
                }`}
              />
            </div>
            <div className="w-full lg:w-[20%]">
              <button
                onClick={handleSubmit(onSubmit)}
                className="w-full lg:w-full h-[50px] bg-[hsl(180,66%,49%)] text-[18px] text-white font-[700] rounded-lg lg:rounded-2xl cursor-pointer"
              >
                {isSubmitting ? (
                  <ClipLoader color="#faf9fb" size={20} />
                ) : (
                  "Shorten it!"
                )}
              </button>
            </div>
          </form>
          {(errors?.webUrl || errorMsg) && (
            <p className="text-red-500 font-[400] text-[14px] -mt-19 lg:mt-0 italic px-0 lg:px-15">
              {errors?.webUrl?.message || errorMsg}
            </p>
          )}
          {/* {errorMsg && (
            <p className="text-red-500 font-[400] text-[14px] mb-1 italic px-15">
              {errorMsg}
            </p>
          )} */}
        </div>
        {link.length > 0 && (
          <div>
            {link.map((lin, index) => {
              return (
                <div
                  key={index}
                  className="w-full p-5 flex flex-col lg:flex-row justify-between items-center mt-5 bg-white shadow-sm rounded-lg"
                >
                  <div>
                    <h1 className="text-[hsl(260,8%,14%))] text-[18px] font-[500]">
                      {lin.typedLink}
                    </h1>
                  </div>
                  <hr className="my-3" />
                  <div className="flex flex-col lg:flex-row items-center gap-5">
                    <h1 className="text-[hsl(180,66%,49%)] text-[18px] font-[500]">
                      {lin.shortenedLink}
                    </h1>
                    <button
                      onClick={() => handleCopy(lin.shortenedLink, index)}
                      className={`${
                        copy === index
                          ? "bg-[hsl(257,27%,26%)]"
                          : " bg-[hsl(180,66%,49%)]"
                      } text-white text-[18px] font-[700] w-[300px] mt-1.5 lg:mt-0 lg:w-[100px] h-[50px] rounded-lg px-2 focus: cursor-pointer`}
                    >
                      {copy === index ? "Copied !" : "Copy !"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        <div className="flex flex-col items-center mx-auto mt-50 ">
          <h1 className="font-[700] text-[25px] lg:text-[40px] text-[hsl(260,8%,14%)]">
            Advanced Statistics
          </h1>
          <p className="text-[18px] w-full lg:w-[510px] text-center text-[hsl(257,7%,63%)]">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        <div className="mt-20 flex flex-col lg:flex lg:flex-row gap-20 lg:gap-5 relative mb-40 lg:mb-30">
          <div className="lg:bg-[hsl(180,66%,49%)] lg:h-2 lg:w-full lg:absolute  lg:top-[50%]"></div>
          {statistics.map((items, index) => {
            return (
              <div
                key={index}
                className={`bg-white rounded-lg shadow-lg p-5 w-full lg:w-[500px] relative `}
                style={{ transform: `translateY(${index * 50}px)` }}
              >
                <div className="flex items-center justify-center rounded-full w-[80px] h-[80px]  bg-[hsl(257,27%,26%)] mb-2 absolute -top-10 left-27 lg:left-5">
                  <img
                    src={items.icon}
                    alt="img"
                    className="object-contain w-[50px] h-[50px] relative"
                  />
                </div>
                <div className="w-full lg:w-[200px] mt-15">
                  <h1 className="font-[700] text-[18px] text-center lg:text-start relative">
                    {items.title}
                  </h1>
                </div>
                <div className="w-full lg:w-[330px] my-7">
                  <p className="text-[18px] text-[hsl(257,7%,63%)]">
                    {items.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HeroDown;
