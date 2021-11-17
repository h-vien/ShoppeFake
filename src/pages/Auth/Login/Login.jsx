import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import * as S from '../Register/register.style'
import InputText from '../../../components/InputText/InputText'
import InputPassword from '../../../components/InputPassword/InputPassword'
import ErrorMessage from '../../../components/ErrorMessage/ErrorMessage'
import { path } from '../../../constants/path'
import { rules } from '../../../constants/rules'
import { Button } from '../../../assets/styles/utils'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { unwrapResult } from '@reduxjs/toolkit'
import { login } from '../auth.slice'

export default function Login() {
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
    setError
  } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const dispatch = useDispatch()
  const history = useHistory()
  const handleLogin = async data => {
    const body = {
      email: data.email,
      password: data.password
    }
    console.log(data)
    try {
      const res = await dispatch(login(body))
      unwrapResult(res)
      history.push(path.home)
      console.log(res)
    } catch (error) {
      if (error.status === 422) {
        for (const key in error.data) {
          setError(key, {
            type: 'server',
            message: error.data[key]
          })
        }
      }
    }
  }
  return (
    <div>
      <S.StyledRegister>
        <S.Container className="container">
          <S.Banner />
          <S.FormWrapper>
            <S.FormTitle>Đăng nhập</S.FormTitle>
            <S.Form onSubmit={handleSubmit(handleLogin)} noValidate>
              <S.FormControl>
                <Controller
                  name="email"
                  control={control}
                  rules={rules.email}
                  render={({ field }) => (
                    <InputText
                      type="email"
                      name="email"
                      placeholder="Example@gmail.com"
                      onChange={event => field.onChange(event)}
                      value={getValues('email')}
                    />
                  )}
                />
                <ErrorMessage errors={errors} name="email" />
              </S.FormControl>
              <S.FormControl>
                <Controller
                  name="password"
                  control={control}
                  rules={rules.password}
                  render={({ field }) => (
                    <InputPassword
                      placeholder="Mật khẩu"
                      name="password"
                      onChange={field.onChange}
                      value={getValues('password')}
                    />
                  )}
                />
                <ErrorMessage errors={errors} name="password" />
              </S.FormControl>

              <S.FormButton>
                <Button type="submit">Đăng nhập</Button>
              </S.FormButton>
            </S.Form>
            <S.FormFooter>
              <span>Bạn chưa có tài khoản?</span>
              <Link to={path.register} className="link">
                Đăng ký
              </Link>
            </S.FormFooter>
          </S.FormWrapper>
        </S.Container>
      </S.StyledRegister>
    </div>
  )
}
