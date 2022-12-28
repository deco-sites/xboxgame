/** @format */

import { ComponentChildren } from "preact";

interface Props {
  children: ComponentChildren;
  href: string;
  target?: string;
}

export default function Link({ children, href, target }: Props) {
  return (
    <a href={href} target={target} class="font-normal text-lg text-white">
      {children}
    </a>
  );
}
