import { createNextState, unwrapResult } from '@reduxjs/toolkit'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CheckBox from '../../components/CheckBox/CheckBox'
import ProductQuantityController from '../../components/ProductQuantityController/ProductQuantityController'
import { formatMoney } from '../../utils/helper'
import * as S from './cart.style'
import { getCartPurchases, updatePurchase } from './cart.slice'
function Cart() {
  const purchases = useSelector(state => state.cart.purchases)
  const dispatch = useDispatch()
  const [localPurchases, setLocalPurchases] = useState(() =>
    createNextState(purchases, draft => {
      draft.forEach(purchase => {
        purchase.disabled = false
        purchase.checked = false
      })
    })
  )
  useEffect(() => {
    setLocalPurchases(
      createNextState(purchases, draft => {
        draft.forEach(purchase => (purchase.disabled = false))
      })
    )
  }, [purchases])

  const handleInputQuantity = idxPurchase => value => {
    const newLocalPurchase = createNextState(localPurchases, draft => {
      draft[idxPurchase].buy_count = value
    })
    setLocalPurchases(newLocalPurchase)
  }
  const handleBlurQuantity = idxPurchase => async value => {
    const purchase = localPurchases[idxPurchase]
    setLocalPurchases(localPurchases =>
      createNextState(localPurchases, draft => {
        draft[idxPurchase].disabled = true
      })
    )
    await dispatch(
      updatePurchase({
        product_id: purchase.product._id,
        buy_count: value
      })
    ).then(unwrapResult)
    await dispatch(getCartPurchases()).then(unwrapResult)
    setLocalPurchases(localPurchases =>
      createNextState(localPurchases, draft => {
        draft[idxPurchase].disabled = false
      })
    )
  }

  const handleIncreaseAndDecrease = idxPurchase => async value => {
    const purchase = localPurchases[idxPurchase]
    setLocalPurchases(localPurchases =>
      createNextState(localPurchases, draft => {
        draft[idxPurchase].disabled = true
        draft[idxPurchase].buy_count = value
      })
    )
    await dispatch(
      updatePurchase({
        product_id: purchase.product._id,
        buy_count: value
      })
    ).then(unwrapResult)
    await dispatch(getCartPurchases()).then(unwrapResult)
    setLocalPurchases(localPurchases =>
      createNextState(localPurchases, draft => {
        draft[idxPurchase].disabled = false
      })
    )
  }
  return (
    <div className="container">
      <div>
        <S.ProductHeader>
          <S.ProductHeaderCheckbox>
            <CheckBox />
          </S.ProductHeaderCheckbox>
          <S.ProductHeaderName>Sản phẩm</S.ProductHeaderName>
          <S.ProductHeaderUnitPrice>Đơn giá</S.ProductHeaderUnitPrice>
          <S.ProductHeaderQuantity>Số lượng</S.ProductHeaderQuantity>
          <S.ProductHeaderTotalPrice>Số tiền</S.ProductHeaderTotalPrice>
          <S.ProductHeaderAction>Thao tác</S.ProductHeaderAction>
        </S.ProductHeader>
        <S.ProductSection>
          {localPurchases.map((purchase, idx) => (
            <S.CartItem>
              <S.CartItemCheckbox>
                <CheckBox />
              </S.CartItemCheckbox>
              <S.CartItemOverview>
                <S.CartItemOverviewImage to="">
                  <img src={purchase.product.image} alt="" />
                </S.CartItemOverviewImage>
                <S.CartItemOverviewNameWrapper>
                  <S.CartItemOverviewName to="">
                    {purchase.product.name}
                  </S.CartItemOverviewName>
                </S.CartItemOverviewNameWrapper>
              </S.CartItemOverview>
              <S.CartItemUnitPrice>
                <span>
                  đ{formatMoney(purchase.product.price_before_discount)}{' '}
                </span>
                <span>đ{formatMoney(purchase.product.price)}</span>
              </S.CartItemUnitPrice>
              <S.CartItemQuantity>
                <ProductQuantityController
                  value={purchase.buy_count}
                  max={purchase.product.quantity}
                  onInput={handleInputQuantity(idx)}
                  onBlur={handleBlurQuantity(idx)}
                  disabled={purchase.disabled}
                  onIncrease={handleIncreaseAndDecrease(idx)}
                  onDecrease={handleIncreaseAndDecrease(idx)}
                />
              </S.CartItemQuantity>
              <S.CartItemTotalPrice>
                <span>
                  đ{formatMoney(purchase.product.price * purchase.buy_count)}
                </span>
              </S.CartItemTotalPrice>
              <S.CartItemAction>
                <S.CartItemActionButton>Xoá</S.CartItemActionButton>
              </S.CartItemAction>
            </S.CartItem>
          ))}
        </S.ProductSection>
      </div>
      <S.CartFooter>
        <S.CartFooterCheckbox>
          <CheckBox />
        </S.CartFooterCheckbox>
        <S.CartFooterButton>
          Chọn tất cả ({purchases.length})
        </S.CartFooterButton>
        <S.CartFooterButton>Xoá</S.CartFooterButton>
        <S.CartFooterSpaceBetween />
        <S.CartFooterPrice>
          <S.CartFooterPriceTop>
            <div>Tổng thanh toán (1 sản phẩm): </div>
            <div>đ 100.000</div>
          </S.CartFooterPriceTop>
          <S.CartFooterPriceBot>
            <div>Tiết kiệm</div>
            <div>đ 10.000</div>
          </S.CartFooterPriceBot>
        </S.CartFooterPrice>
        <S.CartFooterCheckout>Mua hàng</S.CartFooterCheckout>
      </S.CartFooter>
    </div>
  )
}

export default Cart
