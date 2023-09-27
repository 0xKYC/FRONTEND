import { SvgIcon } from "core/UI/SvgIcon";

type SocialLinkProps = {
  href: string;
  src: string;
  width?: string;
  height?: string;
};

export const SocialLink = ({
  href,
  src,
  width = "25px",
  height = "25px",
}: SocialLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      key={src}
      aria-label={src}
    >
      <SvgIcon src={src} width={width} height={height} />
    </a>
  );
};
