import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { useAuthenticated } from '../../hooks/useAuthenticated'
import * as S from './navbar.style'
import { path } from '../../constants/path'
import usePopover from '../../hooks/usePopover'
import Popover from '../Popover/Popover'
import { logout } from '../../pages/Auth/auth.slice'

export default function Navbar() {
  const authenticated = useAuthenticated()
  const profile = useSelector(state => state.auth.profile)
  const dispatch = useDispatch()
  const handleLogout = () => dispatch(logout())
  const { activePopover, showPopover, hidePopover } = usePopover()
  const {
    activePopover: activePopover2,
    showPopover: showPopover2,
    hidePopover: hidePopover2
  } = usePopover()
  const {
    activePopover: activePopover3,
    showPopover: showPopover3,
    hidePopover: hidePopover3
  } = usePopover()
  return (
    <S.Navbar>
      <S.NavRight>
        <ul>
          <li>Kênh bán hàng</li>

          <li>
            <S.Scan onMouseEnter={showPopover2} onMouseLeave={hidePopover2}>
              Tải ứng dụng
              <Popover active={activePopover2}>
                <S.ScanImg src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/d91264e165ed6facc6178994d5afae79.png" />
              </Popover>
            </S.Scan>
          </li>

          <li>Kết nối</li>
        </ul>
      </S.NavRight>
      <S.NavLeft>
        <li>
          <S.Notice onMouseEnter={showPopover3} onMouseLeave={hidePopover3}>
            <svg
              viewBox="3 2.5 14 14"
              x="{0}"
              y="{0}"
              classname="shopee-svg-icon icon-notification-2"
            >
              <path d="m17 15.6-.6-1.2-.6-1.2v-7.3c0-.2 0-.4-.1-.6-.3-1.2-1.4-2.2-2.7-2.2h-1c-.3-.7-1.1-1.2-2.1-1.2s-1.8.5-2.1 1.3h-.8c-1.5 0-2.8 1.2-2.8 2.7v7.2l-1.2 2.5-.2.4h14.4zm-12.2-.8.1-.2.5-1v-.1-7.6c0-.8.7-1.5 1.5-1.5h6.1c.8 0 1.5.7 1.5 1.5v7.5.1l.6 1.2h-10.3z" />
              <path d="m10 18c1 0 1.9-.6 2.3-1.4h-4.6c.4.9 1.3 1.4 2.3 1.4z" />
            </svg>
            Thông báo
            <Popover active={activePopover3}>
              <S.NoticeBody></S.NoticeBody>
            </Popover>
          </S.Notice>
        </li>
        <li>
          <svg
            height={22}
            viewBox="0 0 16 16"
            width={22}
            className="shopee-svg-icon icon-help-center"
          >
            <g fill="none" fillRule="evenodd" transform="translate(1)">
              <circle cx={7} cy={8} r={7} stroke="currentColor" />
              <path
                fill="currentColor"
                d="m6.871 3.992c-.814 0-1.452.231-1.914.704-.462.462-.693 1.089-.693 1.892h1.155c0-.484.099-.858.297-1.122.22-.319.583-.473 1.078-.473.396 0 .715.11.935.33.209.22.319.517.319.902 0 .286-.11.55-.308.803l-.187.209c-.682.605-1.1 1.056-1.243 1.364-.154.286-.22.638-.22 1.045v.187h1.177v-.187c0-.264.055-.506.176-.726.099-.198.253-.396.462-.572.517-.451.825-.737.924-.858.275-.352.418-.803.418-1.342 0-.66-.22-1.188-.66-1.573-.44-.396-1.012-.583-1.716-.583zm-.198 6.435c-.22 0-.418.066-.572.22-.154.143-.231.33-.231.561 0 .22.077.407.231.561s.352.231.572.231.418-.077.572-.22c.154-.154.242-.341.242-.572s-.077-.418-.231-.561c-.154-.154-.352-.22-.583-.22z"
              />
            </g>
          </svg>
          Hỗ trợ
        </li>
        {authenticated && (
          <li>
            <S.User onMouseEnter={showPopover} onMouseLeave={hidePopover}>
              <S.UserImg src="https://cf.shopee.vn/file/5fa09a5073b4283d4d59fa74f3d482ba_tn" />
              <S.UserName>{profile.name || profile.email}</S.UserName>
              <Popover active={activePopover}>
                <S.UserLink to={path.user}>Tài khoản của tôi</S.UserLink>
                <S.UserLink to={path.purchase}>Đơn mua</S.UserLink>
                <S.UserButton onClick={handleLogout}>Đăng xuất</S.UserButton>
              </Popover>
            </S.User>
          </li>
        )}
        {!authenticated && (
          <>
            <li>
              <S.NavLink to={path.register}>Đăng kí</S.NavLink>
              <S.NavLink to={path.login}>Đăng nhập</S.NavLink>
            </li>
          </>
        )}
      </S.NavLeft>
    </S.Navbar>
  )
}
