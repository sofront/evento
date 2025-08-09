import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  const logoSrc = "https://bytegrad.com/course-assets/react-nextjs/evento.png";

  return (
    <Link href="/">
      <Image src={logoSrc} alt="Evento Logo" width="53" height="12" />
    </Link>
  );
}
