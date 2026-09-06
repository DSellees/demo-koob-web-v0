import { Linkedin, Instagram, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';

// Los iconos aparecen en su posición final (solo fundido, sin desplazamiento)
const iconAppear = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

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
  /** Cuando es true, los iconos aparecen en cascada de abajo arriba (mismo efecto que los links del navbar). */
  animated?: boolean;
  /** Segundos de espera antes de arrancar la cascada — se usa para encadenar tras las animaciones del hero. */
  animationDelay?: number;
}

const linkClass = (hoverClass: string) =>
  `text-koob-gray-500 transition-[color,transform] duration-200 hover:scale-110 ${hoverClass}`;

/**
 * Shared LinkedIn/Instagram/YouTube link row — same brand-color hover
 * everywhere it appears (Hero, Footer, Contacto) instead of three copies.
 */
const SocialLinks = ({
  gapClassName = 'gap-5',
  iconClassName = 'w-5 h-5',
  animated = false,
  animationDelay = 0,
}: SocialLinksProps) => {
  if (animated) {
    return (
      <motion.div
        className={`flex items-center ${gapClassName}`}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              delayChildren: animationDelay,
              staggerChildren: 0.15,
              staggerDirection: -1,
            },
          },
        }}
      >
        {socialLinks.map(({ href, label, Icon, hoverClass }) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            variants={iconAppear}
            className={linkClass(hoverClass)}
          >
            <Icon className={iconClassName} />
          </motion.a>
        ))}
      </motion.div>
    );
  }

  return (
    <div className={`flex items-center ${gapClassName}`}>
      {socialLinks.map(({ href, label, Icon, hoverClass }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={linkClass(hoverClass)}
        >
          <Icon className={iconClassName} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
