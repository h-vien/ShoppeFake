import { isEmail } from '../utils/helper'
export const rules = {
  name: {
    maxLength: {
      value: 160,
      massage: 'Tên tối đa 160 kí tự'
    }
  },
  phone: {
    maxLength: {
      value: 20,
      massage: 'Số điện thoại có tối đa 20 kí tự'
    }
  },
  address: {
    maxLength: {
      value: 160,
      massage: 'Địa chỉ có tối đa 160 kí tự'
    }
  },
  email: {
    required: {
      value: true,
      message: 'Email là bắt buộc'
    },
    minLength: {
      value: 5,
      message: 'Email có đồ dài từ 5-160 kí tự'
    },
    maxLength: {
      value: 160,
      message: 'Email có đồ dài từ 5-160 kí tự'
    },
    validate: {
      email: v => isEmail(v) || 'Email không đúng định dạng'
    }
  },
  password: {
    required: {
      value: true,
      message: 'Mật khẩu là bắt buộc'
    },
    minLength: {
      value: 6,
      message: 'Mật khẩu có đồ dài từ 6-160 kí tự'
    },
    maxLength: {
      value: 160,
      message: 'Mật khẩu có đồ dài từ 6-160 kí tự'
    }
  },
  confirmedPassword: {
    required: {
      value: true,
      message: 'Nhập lại mật khẩu là bắt buộc'
    },
    minLength: {
      value: 6,
      message: 'Nhập lại mật khẩu có đồ dài từ 6-160 kí tự'
    },
    maxLength: {
      value: 160,
      message: 'Nhập lại mật khẩu có đồ dài từ 6-160 kí tự'
    }
  }
}
