import './Button.styles.scss';
//default

// inverted

// google signin

const BUTTON_TYPE_CLASSES = {
  google: 'google-button',
  inverted: 'inverted-button',
}

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} 
    {...otherProps}>
      <span>{children}</span>
    </button>
  );
}

export default Button;

