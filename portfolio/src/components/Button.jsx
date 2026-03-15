import { memo } from 'react';
import { motion } from 'framer-motion';

// Constants - moved outside component to prevent recreation on every render
const BASE_CLASSES = 'flex items-center gap-3 rounded-full text-sm font-semibold transition-all duration-300';

const VARIANT_CLASSES = {
  primary: `px-8 py-3 text-white
    bg-transparent
    border-none
    hover:shadow-[0_0_28px_rgba(99,102,241,0.7)]`,
  secondary: `px-5 py-3 text-slate-200
    bg-transparent
    border-none
    hover:shadow-[0_0_20px_rgba(99,102,241,0.5)]`,
  success: `px-8 py-3 text-emerald-400
    bg-transparent
    border-none
    hover:shadow-[0_0_28px_rgba(16,185,129,0.6)]`
};

const ICON_SIZE = { primary: 16, secondary: 18, success: 16 };

const ANIMATION_CONFIG = {
  primary: { hover: 1.05, tap: 0.97 },
  secondary: { hover: 1.04, tap: 0.97 },
  success: { hover: 1.05, tap: 0.97 }
};

function Button({
  variant = 'primary',
  children,
  icon: Icon,
  iconProps = {},
  href,
  target,
  rel,
  type = 'button',
  onClick,
  className = '',
  ariaLabel,
  disabled,
  ...props
}) {
  const iconSize = ICON_SIZE[variant];
  const animConfig = ANIMATION_CONFIG[variant];
  const defaultIconProps = { size: iconSize, ...iconProps };

  const buttonContent = (
    <>
      {Icon && <Icon {...defaultIconProps} aria-hidden={!!children} />}
      {children}
    </>
  );

  const finalClassName = `group ${BASE_CLASSES} ${VARIANT_CLASSES[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel || 'noopener noreferrer'}
        className={finalClassName}
        whileHover={{ scale: animConfig.hover }}
        whileTap={{ scale: animConfig.tap }}
        aria-label={!children ? ariaLabel : undefined}
        {...props}
      >
        {buttonContent}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={finalClassName}
      whileHover={{ scale: animConfig.hover }}
      whileTap={{ scale: animConfig.tap }}
      aria-label={!children ? ariaLabel : undefined}
      aria-disabled={disabled}
      {...props}
    >
      {buttonContent}
    </motion.button>
  );
}

export default memo(Button);
