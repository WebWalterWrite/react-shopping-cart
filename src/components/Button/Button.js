import React from 'react'
import { ButtonBox } from './button.styled';
import Icon from '../Icon/Icon';

const btnList = [
  {
    name: "shop",
    color: "#2dde98",
    value: "shop now",
    icon: "cart"
  },
];

/**
 * @description - Renvoi un element button
 * @param {string} btn - nom du button 
 */
const Button = ({btn}) => {

  const [{ color, value, icon }] = btnList.filter( ({name}) => name === btn );

  return (
    <ButtonBox color={color}>
      {icon && <Icon name={icon} size="1.5"/>}
      <button>{value}</button>
    </ButtonBox>
  )
};

export default Button;