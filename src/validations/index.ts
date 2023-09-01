import * as Yup from "yup";

export const ValidationLogin = Yup.object().shape({
  email: Yup.string().email("لطفا فرمت ایمیل را درست وارد کنید").required("فیلد اجباری می‌باشد"),
  password: Yup.string().required("فیلد اجباری می‌باشد"),
});

export const ValidationForgetPassword = Yup.object().shape({
  mail: Yup.string().email("لطفا فرمت ایمیل را درست وارد کنید").required("فیلد اجباری می‌باشد"),
});

