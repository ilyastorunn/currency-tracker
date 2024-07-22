import Header from "../Components/Header";

export default function Contact() {
  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row items-start justify-between gap-12 px-4 md:px-16 lg:px-32 py-16 min-h-screen bg-[#1A1B20]">
        <div className="flex flex-col items-start gap-10 max-w-md">
          <span className="text-white text-[40px] leading-none">
            Need help? <br />
            Get in touch.
          </span>
          <span className="text-white text-[20px] leading-relaxed">
            If you're experiencing any issues, <br />
            have questions, or need any assistance, <br />
            please don't hesitate to reach out to us. <br />
            Whether you're facing technical problems, <br />
            have concerns about your account, <br />
            or simply need more information about <br />
            our services, we're here to help.
          </span>
        </div>
        <div className="flex flex-col w-full md:w-[520px] p-5 rounded-[10px] bg-[#131217]">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex flex-col gap-2 w-full">
                <span className="text-white text-[16px]">First Name</span>
                <input
                  className="p-3 rounded-[10px] bg-[#171719] text-white"
                  type="text"
                  placeholder="First Name"
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <span className="text-white text-[16px]">Last Name</span>
                <input
                  className="p-3 rounded-[10px] bg-[#171719] text-white"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <span className="text-white text-[16px]">Email</span>
              <input
                className="p-3 rounded-[10px] bg-[#171719] text-white"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <span className="text-white text-[16px]">Subject</span>
              <input
                className="p-3 rounded-[10px] bg-[#171719] text-white"
                type="text"
                placeholder="Subject"
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <span className="text-white text-[16px]">How can we help?</span>
              <textarea
                className="p-3 rounded-[10px] bg-[#171719] text-white h-24 resize-none"
                placeholder="Describe your issue or question"
              />
            </div>
            <button className="w-full py-3 rounded-[10px] bg-[#171719] text-white hover:bg-[#131217]">
              submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}