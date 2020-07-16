import React from 'react'
import { IconStyled } from './icon.styled';
import icons from '../../utils/styles/icons/icons.fontawesome';

const Icon = ({ name, color, size }) => {

  return(
    <IconStyled icon={icons[name]} color={color} size={size} />
  )
};

export default Icon;