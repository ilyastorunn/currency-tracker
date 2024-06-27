import Header from "../Components/Header";

export default function Contact() {
  return (
    <>
      <div>
        <Header />
        <div className="flex flex-1 flex-col items-center justify-center gap-5 pt-[60px] bg-[#171719]">
          <p className="text-[24px] text-white">Need help? Contact.</p>
          <input
            className="w-full max-w-[880px] h-[334px] sm:h-[300px] md:h-[334px] p-4 border border-[#131217] resize-none rounded-[10px] bg-[#131217]"
            type="textarea"
            placeholder="Type here..."
          />
          <button className="bg-[#131217cc] text-[16px] text-white rounded-lg">
            <span className="py-15 px-7">submit</span>
          </button>
        </div>
      </div>
    </>
  );
}
