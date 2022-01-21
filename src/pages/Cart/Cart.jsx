import { createNextState, unwrapResult } from '@reduxjs/toolkit'
import keyBy from 'lodash/keyBy'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import CheckBox from '../../components/CheckBox/CheckBox'
import ProductQuantityController from '../../components/ProductQuantityController/ProductQuantityController'
import { formatMoney } from '../../utils/helper'
import {
  buyPurchase,
  deletePurchase,
  getCartPurchases,
  updatePurchase
} from './cart.slice'
import * as S from './cart.style'
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
  const isCheckedAll = localPurchases.every(purchase => purchase.checked)
  const checkedPurchases = localPurchases.filter(purchase => purchase.checked)
  const totalCheckedPurchases = checkedPurchases.length
  const totalCheckedPurchasesPrice = checkedPurchases.reduce(
    (result, current) => {
      return result + current.product.price * current.buy_count
    },
    0
  )
  const totalCheckedPurchasesSavingPrice = checkedPurchases.reduce(
    (result, current) => {
      return (
        result +
        (current.product.price_before_discount - current.product.price) *
          current.buy_count
      )
    },
    0
  )
  useEffect(() => {
    setLocalPurchases(localPurchases => {
      const localPurchaseObject = keyBy(localPurchases, '._id')

      return createNextState(purchases, draft => {
        draft.forEach(purchase => {
          purchase.disabled = false
          purchase.checked = Boolean(localPurchaseObject[purchase._id]?.checked) // Khi purchase cập nhập mới nhiều hơn cái localPurchase => undefined =>undefined.checked => Lỗi => dùng optional Chaining
        })
      })
    })
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

  const handleCheck = idxPurchase => value => {
    setLocalPurchases(localPurchases =>
      createNextState(localPurchases, draft => {
        draft[idxPurchase].checked = value
      })
    )
  }
  const handleCheckAll = () => {
    setLocalPurchases(localPurchases =>
      createNextState(localPurchases, draft => {
        draft.forEach(purchase => {
          purchase.checked = !isCheckedAll
        })
      })
    )
  }
  const handleRemove = idxPurchase => async () => {
    const purchase_id = localPurchases[idxPurchase]._id
    await dispatch(deletePurchase([purchase_id])).then(unwrapResult)
    await dispatch(getCartPurchases()).then(unwrapResult)
    toast.success('Xoá đơn thành công', {
      position: 'top-right',
      autoClose: 2000
    })
  }
  const handleRemoveManyPurchases = async () => {
    const purchase_ids = checkedPurchases.map(purchase => purchase._id)
    await dispatch(deletePurchase(purchase_ids)).then(unwrapResult)
    await dispatch(getCartPurchases()).then(unwrapResult)
    console.log('xoa')
    toast.success('Xoá đơn thành công', {
      position: 'top-right',
      autoClose: 2000
    })
  }
  const handleBuyPurchases = async () => {
    if (checkedPurchases.length > 0) {
      const body = checkedPurchases.map(purchase => ({
        product_id: purchase.product._id,
        buy_count: purchase.buy_count
      }))
      await dispatch(buyPurchase(body)).then(unwrapResult)
      await dispatch(getCartPurchases()).then(unwrapResult)
      toast.success('Mua hàng thành công', {
        position: 'top-right',
        autoClose: 2000
      })
    }
  }
  return (
    <div className="container">
      <Helmet>
        <title>Giỏ hàng</title>
      </Helmet>
      <S.ProductHeader>
        <S.ProductHeaderCheckbox>
          <CheckBox onChange={handleCheckAll} checked={isCheckedAll} />
        </S.ProductHeaderCheckbox>
        <S.ProductHeaderName>Sản phẩm</S.ProductHeaderName>
        <S.ProductHeaderUnitPrice>Đơn giá</S.ProductHeaderUnitPrice>
        <S.ProductHeaderQuantity>Số lượng</S.ProductHeaderQuantity>
        <S.ProductHeaderTotalPrice>Số tiền</S.ProductHeaderTotalPrice>
        <S.ProductHeaderAction>Thao tác</S.ProductHeaderAction>
      </S.ProductHeader>
      <S.ProductSection>
        {localPurchases.map((purchase, idx) => (
          <S.CartItem key={purchase._id}>
            <S.CartItemCheckbox>
              <CheckBox
                onChange={handleCheck(idx)}
                checked={purchase.checked}
              />
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
              <S.CartItemActionButton onClick={handleRemove(idx)}>
                Xoá
              </S.CartItemActionButton>
            </S.CartItemAction>
          </S.CartItem>
        ))}
      </S.ProductSection>

      <S.CartFooter>
        <S.CartFooterCheckbox>
          <CheckBox onChange={handleCheckAll} checked={isCheckedAll} />
        </S.CartFooterCheckbox>
        <S.CartFooterButton onClick={handleCheckAll}>
          Chọn tất cả ({purchases.length})
        </S.CartFooterButton>
        <S.CartFooterButton onClick={handleRemoveManyPurchases}>
          Xoá
        </S.CartFooterButton>
        <S.CartFooterSpaceBetween />
        <S.CartFooterPrice>
          <S.CartFooterPriceTop>
            <div>Tổng thanh toán ({totalCheckedPurchases} sản phẩm): </div>
            <div>đ {formatMoney(totalCheckedPurchasesPrice)}</div>
          </S.CartFooterPriceTop>
          <S.CartFooterPriceBot>
            <div>Tiết kiệm</div>
            <div>đ {formatMoney(totalCheckedPurchasesSavingPrice)} </div>
          </S.CartFooterPriceBot>
        </S.CartFooterPrice>
        <S.CartFooterCheckout onClick={handleBuyPurchases}>
          Mua hàng
        </S.CartFooterCheckout>
      </S.CartFooter>
    </div>
  )
}

export default Cart
