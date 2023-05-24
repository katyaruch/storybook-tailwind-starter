import React, { useMemo } from "react";

interface ListProps {
  style?: "none" | "disc" | "decimal";
  className?: string;
}


const getStyleClasses = (style) => {
  switch (style) {
    case 'disc': {
      return 'list-disc';
    }
    case 'decimal': {
      return 'list-decimal';
    }
    case 'none': {
      return 'list-none';
    }
    default: {
      return '';
    }
  }
};

export const List = ({style, className, ...props}) => {
  const computedClasses = useMemo(() => {
    const styleClass = getStyleClasses(style);

    return [styleClass, className].join(' ');
  }, [style, className]);

  return(
    <ul className={`pl-5 ${computedClasses}`} {...props}>
      <li>item</li>
      <li>item</li>
      <li>item</li>
    </ul>
  )
}