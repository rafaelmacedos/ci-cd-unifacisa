import Image from "next/image";

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
}

export default function Logo(params: LogoProps) {
  switch (params.size) {
    case 'small':
      return <Image src="/unifacisa-logo.png" alt="Logo" width={100} height={100} />;
    case 'medium':
      return <Image src="/unifacisa-logo.png" alt="Logo" width={200} height={200} />;
    case 'large':
      return <Image src="/unifacisa-logo.png" alt="Logo" width={300} height={300} />;
  }
}
