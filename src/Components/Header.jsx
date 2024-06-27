export default function Header() {
  return (
    <div className="sticky top-0 w-full bg-[#181A20] z-50 flex justify-center">
      <div className="inline-flex flex-col px-24 py-5 border-solid border-2 border-[#808080] rounded-[32px] bg-[#808080]">
        <div className="flex items-start gap-9 uppercase text-xl font-medium text-white bg-[#808080]">
          <div className="bg-[#808080]">home</div>
          <div className="bg-[#808080]">stock</div>
          <div className="bg-[#808080]">currencies</div>
          <div className="bg-[#808080]">crypto</div>
          <div className="bg-[#808080]">contact</div>
        </div>
      </div>
    </div>
  );
}
