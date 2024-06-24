import {
  PiLinkedinLogoThin,
  PiGithubLogoThin,
  PiInstagramLogoThin,
} from "react-icons/pi";
export default function Footer() {
  return (
    <>
      <div className="flex justify-between items-center mx-auto p-4 px-4 md:px-16 lg:px-24 xl:px-32 2xl:px-40 text-[#868F97]">
        <div className="text-lg">Made by Ilyas Torun</div>
        <div className="flex items-start gap-3.5">
          <a
            href="https://github.com/ilyastorunn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <PiGithubLogoThin className="w-8 h-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/ilyastorunn/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <PiLinkedinLogoThin className="w-8 h-8" />
          </a>
          <a
            href="https://www.instagram.com/ilyastorunn/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <PiInstagramLogoThin className="w-8 h-8" />
          </a>
        </div>
      </div>
    </>
  );
}
