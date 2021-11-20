import React from 'react'
import * as S from '../Profile/profile.style'
import { PasswordContent } from './password.style'
import InputPassword from './../../../components/InputPassword/InputPassword'
import { Controller, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { updateMe } from '../../Auth/auth.slice'
import { rules } from '../../../constants/rules'
import { unwrapResult } from '@reduxjs/toolkit'
import ErrorMessage from '../../../components/ErrorMessage/ErrorMessage'
export default function Password() {
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
    setError
  } = useForm({
    defaultValues: {
      password: '',
      new_password: '',
      confirm_new_password: ''
    }
  })
  const dispatch = useDispatch()
  const update = async data => {
    const body = {
      password: data.password,
      new_password: data.new_password
    }
    console.log(body)
    try {
      const res = await dispatch(updateMe(body)).then(unwrapResult)
      toast.success(res.message, {
        position: 'top-center',
        autoClose: 3000
      })
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
    <S.Profile>
      <S.ProfileHeader>
        <S.ProfileHeaderTitle>Đổi mật khẩu</S.ProfileHeaderTitle>
        <S.ProfileHeaderSubtitle>
          Để bảo mật tài khoản vui lòng không chia sẽ mật khẩu cho người khác!
        </S.ProfileHeaderSubtitle>
      </S.ProfileHeader>
      <PasswordContent onSubmit={handleSubmit(update)}>
        <S.InputLabel>
          <S.InputLabelLabel>Mật khẩu cũ</S.InputLabelLabel>
          <S.InputLabelContent>
            <Controller
              control={control}
              rules={rules.password}
              name="password"
              render={({ field }) => (
                <InputPassword
                  values={getValues('password')}
                  name="password"
                  onChange={field.onChange}
                />
              )}
            />
            <ErrorMessage errors={errors} name="password" />
          </S.InputLabelContent>
        </S.InputLabel>
        <S.InputLabel>
          <S.InputLabelLabel>Mật khẩu mới</S.InputLabelLabel>
          <S.InputLabelContent>
            <Controller
              control={control}
              name="new_password"
              rules={rules.password}
              render={({ field }) => (
                <InputPassword
                  values={getValues('new_password')}
                  onChange={field.onChange}
                  name="new_password"
                />
              )}
            />
            <ErrorMessage errors={errors} name="new_password" />
          </S.InputLabelContent>
        </S.InputLabel>
        <S.InputLabel>
          <S.InputLabelLabel>Nhập lại mật khẩu</S.InputLabelLabel>
          <S.InputLabelContent>
            <Controller
              control={control}
              name="confirm_new_password"
              rules={{
                ...rules.password,
                validate: {
                  samePassword: v =>
                    v === getValues('new_password') ||
                    'Mật khẩu nhập lại không khớp'
                }
              }}
              render={({ field }) => (
                <InputPassword
                  onChange={field.onChange}
                  name="confirm_new_password"
                  values={getValues('confirm_new_password')}
                />
              )}
            />
            <ErrorMessage errors={errors} name="confirm_new_password" />
          </S.InputLabelContent>
        </S.InputLabel>
        <S.Submit>
          <S.ButtonSubmit type="submit">Lưu mật khẩu</S.ButtonSubmit>
        </S.Submit>
      </PasswordContent>
    </S.Profile>
  )
}
