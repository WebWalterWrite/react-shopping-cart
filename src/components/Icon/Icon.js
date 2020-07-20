import React from 'react'
import { IconStyled } from './icon.styled';
import icons from '../../utils/styles/icons/icons.fontawesome';

/**
 * @description - Cr&er un fontawesome icon à partir des props
 * @param {string} name -Nom du boutton
 * @param {string} color - Couleur de fond
 * @param {string} size -  Taille icon
 */
const Icon = ({ name, color, size }) => {

  return(
    <IconStyled icon={icons[name]} color={color} font={size} />
  )
};



export default Icon;