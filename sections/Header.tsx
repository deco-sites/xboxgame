/** @format */

import Link from "../components/Link.tsx";
import Button from "../components/Button.tsx";

export interface Props {}

function Header({}: Props) {
  return (
    <header class="fixed top-0 left-0 h-[82px] w-full z-10">
      <div class="flex justify-between items-center w-full max-w-[1096px] mx-auto h-full ">
        <img src="/logo.png" alt="Logo ExStore" />
        <nav class="flex justify-between max-w-[366px] w-[100%]">
          <Link href="#games">Games</Link>
          <Link href="#browse-games">Browse Games</Link>
          <Link href="#store">Store</Link>
        </nav>

        <div class="flex gap-4">
          <Button className="bg-primary">Sign up</Button>
          <Button className="border-1">Login</Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
