import React, { useState } from 'react';
import { ProductBox, Genre, Exclusive, New, Offer, Sale } from './product.styled';
import Icon from '../Icon/Icon';
import Button from '../Button/Button';


/**
 * @description - Affiche la vignette des produits
 */
const Product = ({ data: { list } }) => {

  const [source, setSource] = useState({
    1: "",
    2: "",
    3: "",
    4: ""
  });

  // changer image au survol
  const setPicture = e => {
    const id = e.target.dataset.id;
    const src = e.target.src;
    setSource({ ...source, [id]: src })
  };


  return (
    <>
      {list && list.map(({ brand, customerInfos, genre, id, model, price, size, stock, images }, k) => {
        const { cover: { path: { small }, galery } } = images;
        const { isNew, isBestSale, isExclusivity, isOffer } = customerInfos;
        const { current, offer } = price;
        return (
          <ProductBox key={k} data-id={id} onClick={showProduct}>
            <div>
              <div className="product-customer-infos">
                {isBestSale && <New>New</New>}
                {isNew && <Sale>Most Wanted</Sale>}
                {isExclusivity && <Exclusive>Exclusivity</Exclusive>}
                {isOffer && <Offer>Sale</Offer>}
              </div>

              <img src={source[id] || require(`../../assets/images/products${small}`)} alt="" />
              <div className="product-galery">
                {galery.map((p, k) =>
                  <img
                    key={k}
                    data-id={id}
                    src={require(`../../assets/images/products${p}`)} alt=""
                    onMouseEnter={setPicture}
                  />
                )}
              </div>
            </div>

            <div className="product-description">
              <h2>{brand}</h2>
              <p> <Genre type={genre}><Icon name={genre} size="1" /></Genre>{model}</p>
              <p>{!isOffer ? current : offer}</p>
            </div>

            <div className="product-shop-now">
              <div className="product-sizes">
                <p>choose your size</p>
                <div>
                  {size.map( (el, k) => (!stock[el] ? <span key={k} className="product-break">{el}</span> : <span  key={k}>{el}</span>))}
                </div>
              </div>
              <Button btn="shop" />
            </div>
          </ProductBox>
        )
      })}
    </>
  )
};

export default Product;