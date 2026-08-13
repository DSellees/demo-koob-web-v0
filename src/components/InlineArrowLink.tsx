import type { ComponentProps, ReactNode } from 'react';
import { Link } from 'react-router-dom';

type InlineArrowLinkProps = Omit<ComponentProps<typeof Link>, 'children'> & {
  children: ReactNode;
};

const InlineArrowLink = ({
  children,
  className = '',
  ...linkProps
}: InlineArrowLinkProps) => (
  <Link
    {...linkProps}
    className={`type-inline-link group inline-flex min-h-11 cursor-pointer items-center gap-3 text-koob-gray-700 transition-colors duration-200 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black ${className}`}
  >
    <span>{children}</span>
    <svg
      aria-hidden="true"
      className="h-5 w-12 shrink-0 transition-transform duration-200 group-hover:translate-x-1"
      viewBox="0 0 48 20"
      fill="none"
    >
      <path
        d="M1 10H46M39 3L46 10L39 17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  </Link>
);

export default InlineArrowLink;
