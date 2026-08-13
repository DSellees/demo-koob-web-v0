import { Linkedin, Instagram, Youtube } from 'lucide-react';

const socialLinks = [
  {
    href: 'https://www.linkedin.com/company/koob-advisory/?viewAsMember=true',
    label: 'LinkedIn',
    Icon: Linkedin,
    hoverClass: 'hover:text-[#0A66C2]',
  },
  {
    href: 'https://www.instagram.com/koob.advisory/',
    label: 'Instagram',
    Icon: Instagram,
    hoverClass: 'hover:text-[#E4405F]',
  },
  {
    href: 'https://www.youtube.com/@KOOB_ADVISORY',
    label: 'YouTube',
    Icon: Youtube,
    hoverClass: 'hover:text-[#FF0000]',
  },
];

interface SocialLinksProps {
  gapClassName?: string;
  iconClassName?: string;
}

/**
 * Shared LinkedIn/Instagram/YouTube link row — same brand-color hover
 * everywhere it appears (Hero, Footer, Contacto) instead of three copies.
 */
const SocialLinks = ({ gapClassName = 'gap-5', iconClassName = 'w-5 h-5' }: SocialLinksProps) => (
  <div className={`flex items-center ${gapClassName}`}>
    {socialLinks.map(({ href, label, Icon, hoverClass }) => (
      <a
        key={label}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className={`text-koob-gray-500 transition-colors duration-200 ${hoverClass}`}
      >
        <Icon className={iconClassName} />
      </a>
    ))}
  </div>
);

export default SocialLinks;
