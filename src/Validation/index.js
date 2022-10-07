import * as yup from 'yup';

const validationSchema = yup.object().shape({
    title: yup.string()
        .min(2, 'Слишком короткий!')
        .max(20, 'Too Long!')
        .required('Требуется ввести название продукта'),
    image: yup.string()
        .min(10, 'Слишком короткий!')
        .max(500, 'Слишком долго!')
        .required('Требуется ввести ссылка на изображение'),
    price: yup.string()
        .min(1, 'Слишком короткий!')
        .max(6, 'Слишком долго!')
        .required('Требуется ввести цену'),
});

export default validationSchema;
