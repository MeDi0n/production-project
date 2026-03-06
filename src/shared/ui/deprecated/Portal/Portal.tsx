import { ReactNode } from 'react';

import { createPortal } from 'react-dom';

interface PortalProps {
  children: ReactNode;
  element?: HTMLElement;
}

/**
 * Устарел используем новые компоменты из папки redesigned
 * @deprecated
 */
export const Portal = (props: PortalProps) => {
  const { children, element = document.body } = props;

  return createPortal(children, element);
};
