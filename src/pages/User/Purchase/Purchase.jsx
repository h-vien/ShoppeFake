import { unwrapResult } from '@reduxjs/toolkit'
import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { path } from '../../../constants/path'
import { purchaseStatus } from '../../../constants/status'
import useQuery from '../../../hooks/useQuery'
import { getPurchases } from '../user.slice'
import { formatMoney, generateNameId } from '../../../utils/helper'
import qs from 'query-string'
import * as S from './purchase.style'
export default function Purchase() {
  const [purchases, setPurchases] = useState([])
  const dispatch = useDispatch()
  const query = useQuery()
  const status = useMemo(() => query.status || purchaseStatus.all, [query])
  useEffect(() => {
    dispatch(getPurchases(status))
      .then(unwrapResult)
      .then(res => setPurchases(res.data))
  }, [status, dispatch])
  const handleActive = v => () => Number(v) === Number(status)
  console.log(purchases)
  return (
    <div>
      <S.PurchaseTabs>
        <S.PurchaseTabItem
          className="active"
          to={path.purchase}
          isActive={handleActive(purchaseStatus.all)}
        >
          Tất cả
        </S.PurchaseTabItem>
        <S.PurchaseTabItem
          to={{
            pathname: path.purchase,
            search: `?${qs.stringify({
              status: purchaseStatus.waitForConfirmation
            })}`
          }}
          isActive={handleActive(purchaseStatus.waitForConfirmation)}
        >
          Chờ xác nhận
        </S.PurchaseTabItem>
        <S.PurchaseTabItem
          to={{
            pathname: path.purchase,
            search: `?${qs.stringify({
              status: purchaseStatus.waitForGetting
            })}`
          }}
          isActive={handleActive(purchaseStatus.waitForGetting)}
        >
          Chờ lấy hàng
        </S.PurchaseTabItem>
        <S.PurchaseTabItem
          to={{
            pathname: path.purchase,
            search: `?${qs.stringify({
              status: purchaseStatus.inProgress
            })}`
          }}
          isActive={handleActive(purchaseStatus.inProgress)}
        >
          Đang giao
        </S.PurchaseTabItem>
        <S.PurchaseTabItem
          to={{
            pathname: path.purchase,
            search: `?${qs.stringify({
              status: purchaseStatus.delivered
            })}`
          }}
          isActive={handleActive(purchaseStatus.delivered)}
        >
          Đã giao
        </S.PurchaseTabItem>
        <S.PurchaseTabItem
          to={{
            pathname: path.purchase,
            search: `?${qs.stringify({
              status: purchaseStatus.cancelled
            })}`
          }}
          isActive={handleActive(purchaseStatus.cancelled)}
        >
          Đã huỷ
        </S.PurchaseTabItem>
      </S.PurchaseTabs>
      <S.PurchaseList>
        {purchases.map(purchase => (
          <S.OrderCard key={purchase._id}>
            <S.OrderCardContent>
              <S.OrderCardDetail>
                <img src={purchase.product.image} alt="" />
                <S.OrderContent>
                  <S.OrderName>{purchase.product.name}</S.OrderName>
                  <S.OrderQuantity>x {purchase.buy_count}</S.OrderQuantity>
                </S.OrderContent>
              </S.OrderCardDetail>
              <S.OrderCardPrice>
                đ {formatMoney(purchase.product.price)}
              </S.OrderCardPrice>
            </S.OrderCardContent>
            <S.OrderCardButtonContainer>
              <S.PurchaseButton
                light={1}
                to={path.product + `/${generateNameId(purchase.product)}`}
              >
                Xem sản phẩm
              </S.PurchaseButton>
              <S.TotalPrice>
                <S.TotalPriceLabel>Tổng giá tiền</S.TotalPriceLabel>
                <S.TotalPricePrice>
                  đ {formatMoney(purchase.product.price * purchase.buy_count)}
                </S.TotalPricePrice>
              </S.TotalPrice>
            </S.OrderCardButtonContainer>
          </S.OrderCard>
        ))}
      </S.PurchaseList>
    </div>
  )
}
