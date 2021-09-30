import React from 'react'
import * as S from './purchase.style'
export default function Purchase() {
  return (
    <div>
      <S.PurchaseTabs>
        <S.PurchaseTabItem to="">Tất cả</S.PurchaseTabItem>
        <S.PurchaseTabItem to="">Chờ xác nhận</S.PurchaseTabItem>
        <S.PurchaseTabItem to="">Chờ lấy hàng</S.PurchaseTabItem>
        <S.PurchaseTabItem to="">Đang giao</S.PurchaseTabItem>
        <S.PurchaseTabItem to="">Đã giao</S.PurchaseTabItem>
        <S.PurchaseTabItem to="">Đã huỷ</S.PurchaseTabItem>
      </S.PurchaseTabs>
      <S.PurchaseList>
        <S.OrderCard>
          <S.OrderCardContent>
            <S.OrderCardDetail>
              <img
                src="https://cf.shopee.vn/file/0492dd22fe1b5d80443f42ccfc1d3a0a_tn"
                alt=""
              />
            </S.OrderCardDetail>
          </S.OrderCardContent>
        </S.OrderCard>
      </S.PurchaseList>
    </div>
  )
}
