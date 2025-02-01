import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="relative w-[148px] h-[50px] flex">
      <ExportedImage
        src="/logo-light.png"
        fill
        alt="ennovat cms"
        className="object-contain"
      />
    </Link>
  );
};

export default Logo;
