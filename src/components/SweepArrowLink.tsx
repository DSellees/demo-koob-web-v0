import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

type Variant = 'light' | 'dark';
type Layout = 'inline' | 'block';

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  layout?: Layout;
  className?: string;
}

type SweepArrowLinkProps =
  | (BaseProps & { to: string; onClick?: never })
  | (BaseProps & { to?: never; onClick: () => void });

const variantClasses: Record<Variant, { text: string; hoverText: string; sweep: string }> = {
  light: { text: 'text-black', hoverText: 'hover:text-white', sweep: 'bg-black' },
  dark: { text: 'text-white', hoverText: 'hover:text-black', sweep: 'bg-white' },
};

const ArrowIcon = () => (
  <svg
    aria-hidden="true"
    className="h-4 w-7 shrink-0 transition-transform duration-200 group-hover:translate-x-1"
    viewBox="0 0 32 20"
    fill="none"
  >
    <path
      d="M1 10H30M24 4L30 10L24 16"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
    />
  </svg>
);

/**
 * Shared "sweep fill" CTA: text + arrow, transparent at rest, fills with a
 * solid color on hover. Used for every inline/full-width call-to-action
 * across the site so size, animation, and color logic stay in one place.
 */
const SweepArrowLink = ({ children, to, onClick, variant = 'light', layout = 'inline', className = '' }: SweepArrowLinkProps) => {
  const { text, hoverText, sweep } = variantClasses[variant];
  const rootClass = `type-inline-link group relative inline-flex items-center overflow-hidden font-semibold transition-colors duration-300 ${text} ${hoverText} ${className}`;

  const content = (
    <>
      <span className={`absolute inset-0 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${sweep}`} />
      {layout === 'inline' ? (
        <span className="relative flex items-center gap-2 py-3 pl-0 pr-5 transition-[padding-left] duration-300 group-hover:pl-5">
          <span>{children}</span>
          <ArrowIcon />
        </span>
      ) : (
        <span className="relative flex w-full items-center justify-between gap-2 px-6 py-3.5 sm:px-7">
          <span>{children}</span>
          <ArrowIcon />
        </span>
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={rootClass}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={`${rootClass} w-full`}>
      {content}
    </button>
  );
};

export default SweepArrowLink;
