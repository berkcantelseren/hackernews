import Image from "next/image";

export default function Navbar() {
  return (
    <div className="bg-[#ff6600] w-[80%] mx-auto mt-2 flex flex-auto p-0.5 text-center">
      <div>
        <a href="https://news.ycombinator.com/">
          <img
            src="/images/y18.svg"
            alt="hackernews logo"
            className="w-5 h-5 border-1 border-white border-solid block"
          />
        </a>
      </div>
      <span className="font-bold text-black text-[10pt] leading-[12px] mt-1 ml-2">
        Hacker News
      </span>
    </div>
  );
}
