import { createAsyncThunk } from '@reduxjs/toolkit'
import categoryApi from '../../api/category.api'
import productApi from '../../api/product.api'
import { purchaseApi } from '../../api/purchase.api'
import { payloadCreator } from '../../utils/helper'
export const getCategories = createAsyncThunk(
  'home/getCategories',
  payloadCreator(categoryApi.getCategories)
)

export const getProducts = createAsyncThunk(
  'home/products',
  payloadCreator(productApi.getProducts)
)
