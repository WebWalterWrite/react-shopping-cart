import { icon, library } from '@fortawesome/fontawesome-svg-core';
import { faShoppingBag, faFemale, faMale } from '@fortawesome/free-solid-svg-icons';

library.add(faFemale, faMale, faShoppingBag);

const icons = {
  cart: icon({ iconName: "shopping-bag", prefix: "fas" }),
  men: icon({ iconName: "male", prefix: "fas"}),
  women: icon({iconName: "female", prefix: "fas"})
};

export default icons;