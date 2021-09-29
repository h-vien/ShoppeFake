import React from 'react'
import * as S from './profile.style'
import InputText from './../../../components/InputText/InputText'
import range from 'lodash/range'
export default function Profile() {
  return (
    <S.Profile>
      <S.ProfileHeader>
        <S.ProfileTitle>Hồ sơ của tôi</S.ProfileTitle>
        <S.ProfileHeaderSubtitle>
          Quản lý thông tin hồ sơ để bảo mật tài khoản
        </S.ProfileHeaderSubtitle>
      </S.ProfileHeader>
      <S.ProfileInfo>
        <S.ProfileLeft>
          <S.InputLabel>
            <S.InputLabelLabel>Email</S.InputLabelLabel>
            <S.InputLabelContent>
              <S.InputLabelContentText>
                vien200203@gmail.com
              </S.InputLabelContentText>
            </S.InputLabelContent>
          </S.InputLabel>
          <S.InputLabel>
            <S.InputLabelLabel>Tên</S.InputLabelLabel>
            <S.InputLabelContent>
              <InputText name="name" type="text" />
            </S.InputLabelContent>
          </S.InputLabel>
          <S.InputLabel>
            <S.InputLabelLabel>Số điện thoại</S.InputLabelLabel>
            <S.InputLabelContent>
              <InputText name="phone" type="text" />
            </S.InputLabelContent>
          </S.InputLabel>
          <S.InputLabel>
            <S.InputLabelLabel>Địa chỉ</S.InputLabelLabel>
            <S.InputLabelContent>
              <InputText name="address" type="text" />
            </S.InputLabelContent>
          </S.InputLabel>
          <S.InputLabel>
            <S.InputLabelLabel>Ngày sinh</S.InputLabelLabel>
            <S.InputLabelContent>
              <S.DateSelect>
                <S.SelectDate
                  title="Ngày"
                  options={range(1, 32).map(item => ({
                    name: item,
                    value: item
                  }))}
                />
                <S.SelectDate
                  title="Tháng"
                  options={range(0, 12).map(item => ({
                    name: `Tháng ${item + 1}`,
                    value: item
                  }))}
                />
                <S.SelectDate
                  title="Năm"
                  options={range(1900, 2024).map(item => ({
                    name: item,
                    value: item
                  }))}
                />
              </S.DateSelect>
            </S.InputLabelContent>
          </S.InputLabel>
          <S.Submit>
            <S.ButtonSubmit type="submit">Lưu</S.ButtonSubmit>
          </S.Submit>
        </S.ProfileLeft>
        <S.ProfileRight>
          <S.AvatarUploader>
            <S.Avatar>
              <img
                src="https://cf.shopee.vn/file/5fa09a5073b4283d4d59fa74f3d482ba"
                alt=""
              />
            </S.Avatar>
            <S.InputFile type="file" accept=".png,.jpg,.jpeg" />
            <S.ButtonUpload light>Chọn ảnh</S.ButtonUpload>
            <S.AvatarUploaderTextContainer>
              <div>Dung lượng tối đa là 1 MB</div>
              <div>Định dạng JPG, PNG</div>
            </S.AvatarUploaderTextContainer>
          </S.AvatarUploader>
        </S.ProfileRight>
      </S.ProfileInfo>
    </S.Profile>
  )
}
