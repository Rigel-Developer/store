"use client";

import Link from "next/link";

import style from "./ActiveLink.module.css";
import { usePathname } from "next/navigation";

interface Props {
  href: string;
  label: string;
}

export const ActiveLink = ({ href, label }: Props) => {
  const pathName = usePathname();
  const isActive = pathName === href;
  return (
    <Link
      href={href}
      className={`${style.link} ${isActive && style["active-link"]}`}
    >
      {label}
    </Link>
  );
};
