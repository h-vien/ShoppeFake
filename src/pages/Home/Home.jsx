import { unwrapResult } from '@reduxjs/toolkit'
import React, { useState, useEffect, Suspense } from 'react'
import { Helmet } from 'react-helmet-async'
import { useDispatch } from 'react-redux'

import FilterPanel from '../../components/FilterPanel/FilterPanel'
import SearchItemResult from '../../components/SearchItemResult/SearchItemResult'
import useQuery from '../../hooks/useQuery'
import { getCategories, getProducts } from './home.slice'
import * as S from './home.style'

export default function Home() {
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState({
    products: [],
    pagination: {}
  })
  const [filters, setFilters] = useState({})
  const query = useQuery()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCategories())
      .then(unwrapResult)
      .then(res => {
        setCategories(res.data)
      })
  }, [dispatch])
  //   useEffect(() => {
  //     dispatch(getProducts())
  //       .then(unwrapResult)
  //       .then(res => {
  //         setProducts(res.data)
  //       })
  //   }, [dispatch])
  //Cach async
  useEffect(() => {
    const _filters = {
      ...query,
      page: query.page || 1,
      limit: query.limit || 30,
      sortBy: query.sortBy || 'view'
    }
    setFilters(_filters)
    const params = {
      page: _filters.page,
      limit: _filters.limit,
      category: _filters.category,
      // exclude:_filters.exclude  // Khoong can thiet trong project
      rating_filter: _filters.rating,
      price_max: _filters.maxPrice,
      price_min: _filters.minPrice,
      sort_by: _filters.sortBy,
      order: _filters.order,
      name: _filters.name
    }
    const _getProducts = async () => {
      const data = await dispatch(getProducts({ params }))
      const res = unwrapResult(data)
      setProducts(res.data)
    }
    _getProducts()
  }, [query, dispatch])
  return (
    <div>
      <Helmet>
        <title>N3iV Shop | Mua bán đêi</title>
      </Helmet>
      <S.Container className="container">
        <S.Side>
          <FilterPanel categories={categories} filters={filters} />
        </S.Side>
        <S.Main>
          <SearchItemResult products={products} filters={filters} />
        </S.Main>
      </S.Container>
    </div>
  )
}
