import React, { useMemo } from "react";
import "./button.css";

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}


const getSizeClasses = (size) => {
  switch (size) {
    case 'small': {
      return 'px-4 py-2.5 text-sm';
    }
    case 'large': {
      return 'px-6 py-3 text-lg';
    }
    default: {
      return 'px-5 py-2.5 text-base';
    }
  }
};

const getModeClasses = (isPrimary) =>
  isPrimary
    ? 'text-white bg-pink-600 hover:bg-pink-800 border-pink-600 dark:bg-pink-700 dark:border-pink-700'
    : 'text-slate-700 bg-transparent border-slate-700 dark:text-white dark:border-white';

const BASE_BUTTON_CLASSES =
  'cursor-pointer rounded-full border-2 font-bold leading-none inline-block';

/**
 * Primary UI component for user interaction
 */
export const Button = ({primary = false, size = 'medium', backgroundColor, label, ...props}) => {
  const computedClasses = useMemo(() => {
    const modeClass = getModeClasses(primary);
    const sizeClass = getSizeClasses(size);

    return [modeClass, sizeClass].join(' ');
  }, [primary, size]);

  return (
    <button type="button" 
      className={`${BASE_BUTTON_CLASSES} ${computedClasses}`} {...props}
      style={{backgroundColor: backgroundColor}}>
      {label}
    </button>
  );

  // return (
  //   <div className="bg-color-red px-8">
  //     <button
  //       type="button"
  //       className={`px-2 color-orange text-white bg-red-600 border-pink-600 dark:bg-pink-700 dark:border-pink-700`}
  //     >
  //       HELLO
  //     </button>
  //   </div>
  // );
};
