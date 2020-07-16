import { icon, library } from '@fortawesome/fontawesome-svg-core';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';

library.add(faShoppingBag);

const icons = {
  cart: icon({ iconName: "shopping-bag", prefix: "fas" })
};

export default icons;