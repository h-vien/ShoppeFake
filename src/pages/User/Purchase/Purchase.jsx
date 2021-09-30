import React from 'react'
import * as S from './purchase.style'
export default function Purchase() {
  return (
    <div>
      <S.PurchaseTabs>
        <S.PurchaseTabItem className="active" to="">
          Tất cả
        </S.PurchaseTabItem>
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
              <S.OrderContent>
                <S.OrderName>
                  Nhựa Epoxy Resin 1kg trong suốt loại cứng
                </S.OrderName>
                <S.OrderQuantity>x 1</S.OrderQuantity>
              </S.OrderContent>
            </S.OrderCardDetail>
            <S.OrderCardPrice>đ 100000</S.OrderCardPrice>
          </S.OrderCardContent>
          <S.OrderCardButtonContainer>
            <S.PurchaseButton light={1} to="">
              Xem sản phẩm
            </S.PurchaseButton>
            <S.TotalPrice>
              <S.TotalPriceLabel>Tổng giá tiền</S.TotalPriceLabel>
              <S.TotalPricePrice>đ 200.000</S.TotalPricePrice>
            </S.TotalPrice>
          </S.OrderCardButtonContainer>
        </S.OrderCard>
      </S.PurchaseList>
    </div>
  )
}
