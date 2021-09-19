import { createAsyncThunk } from '@reduxjs/toolkit'
import productApi from '../../api/product.api'
import { payloadCreator } from '../../utils/helper'
import purchaseApi from '../../api/purchase.api'
export const getProductDetail = createAsyncThunk(
  'productDetail/gerProductDetail',
  payloadCreator(productApi.getProductDetail)
)

export const addToCart = createAsyncThunk(
  'productDetail/addToCart',
  payloadCreator(purchaseApi.addToCart)
)
