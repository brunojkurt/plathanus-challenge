import React, { useEffect, useRef, useCallback } from 'react';

interface Props {
  onClickAway(): any;
}

const ClickAway: React.FC<Props> = ({ onClickAway, children }) => {
  const ref = useRef(null);

  const clickListener = useCallback((e: MouseEvent) => {
    if (!(ref.current as any).contains(e.target)) {
      onClickAway?.();
    }
  }, [onClickAway])

  useEffect(() => {
    document.addEventListener('click', clickListener);

    return () => {
      document.removeEventListener('click', clickListener);
    }
  }, [clickListener])

  return (
    <div ref={ref}>
      { children }
    </div>
  );
}

export default ClickAway;