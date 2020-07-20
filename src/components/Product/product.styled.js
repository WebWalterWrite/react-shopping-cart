import styled from "styled-components/macro";


/**
* COMPONENT: Product
*/
export const ProductBox = styled.section`
  display: block;
  border: solid 1px #484B51;
  width: 20%;
  :hover {
    cursor: pointer;
  }
  div{
    :first-child{
      position: relative;
      height: 289px;
      :hover .product-galery{
        transform: translateY(0%);
        opacity:1;
        transition: all 400ms ease-in-out 50ms;
        /* border-bottom: solid 1px #484B51; */
      }
      :not(:hover) .product-galery{
        opacity:0;
        transition: all 1s ease-in-out;
      }
      >img{
        width: 100%;
        height:289px;
      }
      .product-customer-infos{
        position: absolute;
        top: 87%;
        margin: .5em .3em;
        background: transparent;
      }
      .product-galery{
        position: absolute;
        top:0;
        display: flex;
        width: 100%;
        height: 30%;
        justify-content: space-between;
        img{
          flex:1;
          width: 33%;
          height: 100%;
          cursor: pointer;
          :hover{
            position: relative;
            /* transform: scale(1.9); */
            top: 0px;
            transition: all 200ms ease-in-out 100ms;
            border: solid 1px #FAFAFA;
            z-index: 2;
          }
        }
      }
    }
    }
    .product-description{
      position: relative;
      background: #ffffff;
      text-align: center;
      z-index: 1;
      h2, p{
        padding: .2em;
      }
    }
  .product-shop-now{
    position: relative;
    .product-sizes{
        position: absolute;
        z-index:-10;
        transform: translateY(10px);
        width: 100%;
        height: fit-content;
        text-transform: uppercase;
        p{
          background: #ffc168;
          text-align: center;
          color: #FAFAFA;
          font-weight: bold;
          padding: .2em;
        }
        >div{
          display: flex;
          justify-content: space-between;
          background: #FAFAFA;
          .product-break{
            color: rgba(0, 0, 0, .2);
            font-size: .8em;
            padding: .8em;
            :hover{
              cursor: not-allowed;
              background: none;
            }
          }
          span{
            flex: 1;
            border: solid 1px #484B51;
            border-left: none;
            padding: .5em;
            font-size: 1em;
            :hover{
              cursor: pointer;
              background: #ffc168;
              color: #FAFAFA;
            }
            :last-child{
              border-right: none;
            }
          }
        }
      }
    :hover{
      .product-sizes{
      z-index: 2;
      transform: translateY(-140px);
      transition: all 300ms ease-in-out;
      }
    }
    :not(:hover){
      .product-sizes{
      z-index: -9;
      transform: translateY(-15px);
      transition: all 300ms ease-in-out 300ms;
      }
    }
  }
`;


// tag
export const Genre = styled.span`
  bottom:0;
  padding: .2em .3em;
  margin-right: .3em;
  svg{color: ${props => props.type === "men" ? "#1e5397" : "#ff4f81"};}
`;

// tag
export const New = styled.span`
  padding: .2em .8em;
  margin: 0 .2em;
  background: #0084ff;
  color: #FFFFFF;
`;

//tag
export const Sale = styled(New)`
  background: #8e43e7;
`;

//tag
export const Exclusive = styled(New)`
  background: #000000;
`;

export const Offer = styled(New)`
  background: #ed1c24;
`;


/**
* COMPONENT: ProductDetails
*/
export const ProductDetails = styled.div`
  border: solid 2px #484B51;
`;