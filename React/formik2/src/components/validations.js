import * as Yup from 'yup';

const validations = Yup.object({
    email: Yup.string().email("Geçerli bir email giriniz.").required("Email alanı zorunludur."),
    password: Yup.string()
        .min(5, "Parola en az 5 karakter olmalıdır.")
        .required("Parola alanı zorunludur."),
    passwordConfirm: Yup.string()
        .oneOf([Yup.ref('password')], "Parolalar eşleşmiyor.")
        .required("Parola onayı alanı zorunludur."),
});

export default validations;