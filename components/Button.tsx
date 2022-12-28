/** @format */

import { ComponentChildren } from "preact";

interface Props {
  children: ComponentChildren;
  className?: string;
}

export default function Button({ children, className }: Props) {
  return <button class={`font-normal text-lg text-white w-[90px] h-[38px] rounded   ${className}`}>{children}</button>;
}
