/** @format */

import Button from "../components/Button.tsx";
import Link from "../components/Link.tsx";
import Image from "$live/std/ui/components/Image.tsx";

export interface Props {
  img: string;
  heading: string;
  text: string;
  link: string;
}

function BannerMain({ heading, text, img, link }: Props) {
  return (
    <div class="w-full relative max-w-[1280px] mx-auto">
      <img width={1280} height={720} src="/banner-promotion.png" />
      <div class="absolute left-[90px] top-1/2 translate-y-[-50%]">
        <h2 class="font-semibold text-5xl text-white mb-[17px]">{heading}</h2>
        <p class="font-medium text-2xl mb-[64px] text-white">{text}</p>
        <Link href={link}>
          <Button className="bg-primary w-[162px]">Get in now!</Button>
        </Link>
      </div>
    </div>
  );
}

export default BannerMain;
