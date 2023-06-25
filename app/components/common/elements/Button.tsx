import { Button } from "@/types/types";
import Link from "next/link";

export default function Button(props: Button) {
  return (
    <Link href={`${props.link}`} onClick={props.onClick}>
      <button
        className={`inline-block border font-thin py-2 px-4 shadow-sm border bg-white text-black hover:bg-black hover:text-white transition ${props.classes}`}
      >
        {props.children}
      </button>
    </Link>
  );
}
