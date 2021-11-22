import classNames from 'classnames'
import React from 'react'
import { useTranslation } from 'react-i18next'
import * as S from './Footer.style'
export default function Footer() {
  const { t, i18n } = useTranslation()
  const changeLanguage = lng => i18n.changeLanguage(lng)
  return (
    <S.Footer>
      <div className="container">
        <S.Footer1>
          <div>© 2021 N3iV shop.{t('footer.desc')}.</div>
          <S.Language>
            {t('footer.language')}:
            <span
              onClick={() => changeLanguage('vi')}
              className={classNames({ active: i18n.language === 'vi' })}
            >
              Tiếng Việt
            </span>
            <span
              onClick={() => changeLanguage('en')}
              className={classNames({ active: i18n.language === 'en' })}
            >
              Tiếng Anh
            </span>
            <span
              onClick={() => changeLanguage('chi')}
              className={classNames({ active: i18n.language === 'chi' })}
            >
              Tiếng Trung
            </span>
          </S.Language>
        </S.Footer1>
        <S.Footer2>
          <div>Công ty TNHH N3iV shop</div>
          <div>
            Địa chỉ: Tầng 4-5-6, Tòa nhà ABC, số 29 đường Điện Biên Phủ, Thành
            phố Đà Nẵng, Việt Nam. Tổng đài hỗ trợ: 199000222 - Email:
            cskh@hotro.N3iV shop.vn
          </div>
          <div>
            Mã số doanh nghiệp: 19990002213 do Sở Kế hoạch & Đầu tư TP Đà Nẵng
            cấp lần đầu ngày 10/02/2015
          </div>
          <div>© 2015 - Bản quyền thuộc về Công ty TNHH N3iV shop</div>
        </S.Footer2>
      </div>
    </S.Footer>
  )
}
