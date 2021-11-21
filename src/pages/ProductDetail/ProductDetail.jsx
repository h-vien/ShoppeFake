import React, { useEffect, useState, useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import {
  formatK,
  formatMoney,
  getIdFromNameId,
  rateSale
} from '../../utils/helper'
import { unwrapResult } from '@reduxjs/toolkit'
import { addToCart, getProductDetail } from './productDetail.slice'
import ProductRating from '../../components/ProductRating/ProductRating'
import * as S from './productDetail.style'
import ProductQuantityController from '../../components/ProductQuantityController/ProductQuantityController'
import DOMPurify from 'dompurify'
import { toast } from 'react-toastify'
import { getCartPurchases } from '../Cart/cart.slice'
import { Helmet } from 'react-helmet-async'
export default function ProductDetail() {
  const [product, setProduct] = useState()
  const [currentImg, setCurrentImg] = useState({})
  const [currentIdxImgs, setCurrentIdxImgs] = useState([0, 5])
  const [quantity, setQuantity] = useState(1)
  const currentImgs = useMemo(() => {
    if (product) {
      return product.images.slice(...currentIdxImgs)
    }
    return []
  }, [product, currentIdxImgs])
  const dispatch = useDispatch()
  const { idProduct } = useParams()

  const handleAddToCart = async () => {
    const body = {
      product_id: product._id,
      buy_count: quantity
    }
    const res = await dispatch(addToCart(body)).then(unwrapResult)
    await dispatch(getCartPurchases()).then(unwrapResult)
    toast.success(res.message, {
      position: 'top-right',
      autoClose: 4000
    })
  }

  useEffect(() => {
    const realId = getIdFromNameId(idProduct)
    dispatch(getProductDetail(realId))
      .then(unwrapResult)
      .then(res => {
        res.data.images = res.data.images.map((img, idx) => {
          return {
            url: img,
            id: idx
          }
        })
        setCurrentImg(res.data.images[0])
        setProduct(res.data)
      })
  }, [idProduct])

  const chooseCurrent = img => setCurrentImg(img)
  const choosePrev = () => {
    if (currentIdxImgs[0] > 0) {
      setCurrentIdxImgs([currentIdxImgs[0] - 1, currentIdxImgs[1] - 1])
    }
  }
  const chooseNext = () => {
    if (currentIdxImgs[1] < product.images.length - 1) {
      setCurrentIdxImgs([currentIdxImgs[0] + 1, currentIdxImgs[1] + 1])
    }
  }

  const handleChangeQuantity = value => setQuantity(value)

  return (
    <div>
      {product && (
        <div className="container">
          <Helmet>
            <title>{product.nam}</title>
          </Helmet>
          <S.ProductBriefing>
            <S.ProductImages>
              <S.ProductActive>
                <img src={currentImg.url} alt="" />
              </S.ProductActive>
              <S.ProductImagesSlider>
                <S.ProductIconButtonPrev onClick={choosePrev}>
                  <svg
                    enableBackground="new 0 0 13 20"
                    viewBox="0 0 13 20"
                    x={0}
                    y={0}
                    className="shopee-svg-icon icon-arrow-left-bold"
                  >
                    <polygon points="4.2 10 12.1 2.1 10 -.1 1 8.9 -.1 10 1 11 10 20 12.1 17.9" />
                  </svg>
                </S.ProductIconButtonPrev>
                {currentImgs.map(img => (
                  <S.ProductImage
                    key={img.id}
                    onMouseEnter={() => chooseCurrent(img)}
                    active={currentImg.id === img.id}
                  >
                    <img src={img.url} alt="" />
                  </S.ProductImage>
                ))}
                <S.ProductIconButtonNext onClick={chooseNext}>
                  <svg
                    enableBackground="new 0 0 13 21"
                    viewBox="0 0 13 21"
                    x={0}
                    y={0}
                    className="shopee-svg-icon icon-arrow-right-bold"
                  >
                    <polygon points="11.1 9.9 2.1 .9 -.1 3.1 7.9 11 -.1 18.9 2.1 21 11.1 12 12.1 11" />
                  </svg>
                </S.ProductIconButtonNext>
              </S.ProductImagesSlider>
            </S.ProductImages>
            <S.ProductMeta>
              <S.ProductTitle>{product.name}</S.ProductTitle>
              <S.ProductMeta1>
                <S.ProductRating>
                  <span>{product.rating}</span>
                  <ProductRating rating={product.rating} />
                </S.ProductRating>
                <S.ProductSold>
                  <span>{formatK(product.sold)}</span>
                  <span> Đã bán</span>
                </S.ProductSold>
              </S.ProductMeta1>
              <S.ProductPrice>
                <S.ProductPriceOriginal>
                  đ{formatMoney(product.price_before_discount)}
                </S.ProductPriceOriginal>
                <S.ProductPriceSale>
                  đ{formatMoney(product.price)}
                </S.ProductPriceSale>
                <S.ProductPriceSalePercent>
                  {rateSale(product.price_before_discount, product.price)} giảm
                </S.ProductPriceSalePercent>
              </S.ProductPrice>
              <S.ProductBuyQuantity>
                <S.ProductBuyQuantityTitle>Số lượng</S.ProductBuyQuantityTitle>
                <S.ProductBuyQuantityController>
                  <ProductQuantityController
                    value={quantity}
                    max={product.quantity}
                    onChange={handleChangeQuantity}
                  />
                </S.ProductBuyQuantityController>
                <S.ProductBuyQuantityQuantity>
                  {product.quantity} sản phẩm có sẵn
                </S.ProductBuyQuantityQuantity>
              </S.ProductBuyQuantity>
              <S.ProductButtons onClick={handleAddToCart}>
                <svg
                  enableBackground="new 0 0 15 15"
                  viewBox="0 0 15 15"
                  x={0}
                  y={0}
                  className="shopee-svg-icon _2FCuXA icon-add-to-cart"
                >
                  <g>
                    <g>
                      <polyline
                        fill="none"
                        points=".5 .5 2.7 .5 5.2 11 12.4 11 14.5 3.5 3.7 3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit={10}
                      />
                      <circle cx={6} cy="13.5" r={1} stroke="none" />
                      <circle cx="11.5" cy="13.5" r={1} stroke="none" />
                    </g>
                    <line
                      fill="none"
                      strokeLinecap="round"
                      strokeMiterlimit={10}
                      x1="7.5"
                      x2="10.5"
                      y1={7}
                      y2={7}
                    />
                    <line
                      fill="none"
                      strokeLinecap="round"
                      strokeMiterlimit={10}
                      x1={9}
                      x2={9}
                      y1="8.5"
                      y2="5.5"
                    />
                  </g>
                </svg>
                Thêm vào giỏ hàng
              </S.ProductButtons>
            </S.ProductMeta>
          </S.ProductBriefing>
          <S.ProductContent>
            <S.ProductContentHeading>MÔ TẢ SẢN PHẨM</S.ProductContentHeading>
            <S.ProductContentDetail
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(product.description)
              }}
            ></S.ProductContentDetail>
          </S.ProductContent>
        </div>
      )}
    </div>
  )
}
