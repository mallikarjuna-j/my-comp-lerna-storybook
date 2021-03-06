// import React from "react"
// import { get } from "lodash"
// import styled from "styled-components"

// export const StyledButton = styled.button`
//   border: 2px solid ${props => get(props, "theme.colors.accent") || "#000"};
//   border-radius: 5px;
//   padding: 10px;
//   margin-top: 10px;

//   :hover {
//     cursor: pointer;
//     border-color: ${props => get(props, "theme.colors.secondary") || "#000"};
//     font-weight: 700;
//   }

//   :active,
//   :focus,
//   :visited {
//     outline: none;
//   }
// `;

// export const Button = ({ onClick, children }) => (
//   <StyledButton type="button" onClick={onClick}>
//     {children}
//   </StyledButton>
// );

// export default Button;

import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--secondary`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};

export default Button;
