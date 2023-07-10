import { forwardRef } from 'react';
import Link from 'next/link';
import type { ComponentPropsWithRef } from 'react';

type MenuLinkProps = ComponentPropsWithRef<'div'> & {
  href: string;
};

// eslint-disable-next-line react/display-name
export const MenuLink = forwardRef<HTMLDivElement, MenuLinkProps>(
  ({ href, children, ...rest }, ref) => (
    <Link href={href}>
      <div ref={ref} {...rest}>
        {children}
      </div>
    </Link>
  )
);
