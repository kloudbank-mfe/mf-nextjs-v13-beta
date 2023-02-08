'use client'
import '@module-federation/nextjs-mf/src/include-defaults';;

import { useCartCount } from './CartCountContext';

export function CartCount() {
  const [count] = useCartCount();
  return <span>{count}</span>;
}
