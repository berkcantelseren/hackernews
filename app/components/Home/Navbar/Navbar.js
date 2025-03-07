export default function Navbar() {
  return (
    <div className="bg-[#ff6600] w-[82.3%] mx-auto mt-2 flex p-0.5 text-center">
      <div className="flex">
        <a href="https://news.ycombinator.com/">
          <img
            src="/images/y18.svg"
            alt="hackernews logo"
            className="w-5 h-5 border-1 border-white border-solid block"
          />
        </a>
      </div>
      <span className="font-bold text-black text-[10pt] leading-[12px] mt-1 ml-1">
        Hacker News
      </span>
      <div className="flex text-[13.5px] gap-1 ml-3 leading-[14pt] indent-">
        <a href="">new</a> | <a href="">past</a> | <a href="">comments</a> |
        <a href="">ask</a> | <a href="">show</a> | <a href="">jobs</a> |
        <a href="">submit</a>
      </div>
      <div className="text-[13.5px] ml-auto leading-[14pt] indent-1 pr-1">
        <a href="">login</a>
      </div>
    </div>
  );
}
