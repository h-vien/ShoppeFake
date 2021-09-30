import React from 'react'
import * as S from '../Profile/profile.style'
import { PasswordContent } from './password.style'
import InputPassword from './../../../components/InputPassword/InputPassword'
export default function Password() {
  return (
    <S.Profile>
      <S.ProfileHeader>
        <S.ProfileHeaderTitle>Đổi mật khẩu</S.ProfileHeaderTitle>
        <S.ProfileHeaderSubtitle>
          Để bảo mật tài khoản vui lòng không chia sẽ mật khẩu cho người khác!
        </S.ProfileHeaderSubtitle>
      </S.ProfileHeader>
      <PasswordContent>
        <S.InputLabel>
          <S.InputLabelLabel>Mật khẩu cũ</S.InputLabelLabel>
          <S.InputLabelContent>
            <InputPassword name="password" />
          </S.InputLabelContent>
        </S.InputLabel>
        <S.InputLabel>
          <S.InputLabelLabel>Mật khẩu mới</S.InputLabelLabel>
          <S.InputLabelContent>
            <InputPassword name="new_password" />
          </S.InputLabelContent>
        </S.InputLabel>
        <S.InputLabel>
          <S.InputLabelLabel>Nhập lại mật khẩu</S.InputLabelLabel>
          <S.InputLabelContent>
            <InputPassword name="confirm_new_password" />
          </S.InputLabelContent>
        </S.InputLabel>
        <S.Submit>
          <S.ButtonSubmit type="submit">Lưu mật khẩu</S.ButtonSubmit>
        </S.Submit>
      </PasswordContent>
    </S.Profile>
  )
}
