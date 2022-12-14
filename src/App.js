import './App.css';
import Input from "./components/Input";
import {useCallback, useEffect, useState} from "react";
import {FormikProvider, useFormik} from "formik";
import validationSchema from "./Validation";
import {useDispatch, useSelector} from "react-redux";
import Product from "./components/Product";
import {createNewProduct, deleteProduct, getProductData} from "./store/actions";
import FlipMove from "react-flip-move";

function App() {
    const [productData, setProductData] = useState([])
    const [fetching, setFetching] = useState(true)
    const [filter, setFilter] = useState(true)
    const dispatch = useDispatch()
    const {data, currentCount} = useSelector(({products}) => products)


    useEffect(() => {
        dispatch(getProductData(currentCount))

    }, [])

    useEffect(() => {
        setProductData([...data])
        setFetching(true)
    }, [data])

    const handleFilter = () => {
        switch (filter) {
            case 'default':
                setProductData([...data])
                break;
            case 'minFormMax':
                const minFromMax = productData.sort((a, b) => a.price - b.price);
                setProductData([...minFromMax])
                break;
            case 'maxFromMin':
                const maxFromMin = productData.sort((a, b) => b.price - a.price);
                setProductData([...maxFromMin])
                break;
            case 'byName':
                const name = productData.sort((a, b) => {
                    return (a.title > b.title ? 1 : (a.title === b.title ? 0 : -1))
                })
                setProductData([...name])
                break;
        }
    }

    useEffect(() => {
        handleFilter()
    }, [productData, filter])

    const getDeleteProductId = useCallback((id) => {
        dispatch(deleteProduct(id))
        const deleted = productData.filter(el => el.id !== id)
        setProductData([...deleted])
    }, [productData])

    const onSubmit = () => {
        dispatch(createNewProduct(JSON.stringify({
            ...formik.values,
            images: [formik.values.image]
        })))
    }

    const formik = useFormik({
        initialValues: {
            title: '',
            image: [],
            description: '',
            price: '',
            categoryId: 2,
        },
        validationSchema,
        onSubmit,
    });

    const scrollHandler = (e) => {
        if (e.target.scrollHeight - (e.target.scrollTop + window.innerHeight) < 100) {
            if (fetching) {
                setFetching(false)
                dispatch(getProductData(currentCount))
            }
        }
    }

    return (

        <div className='main' onScroll={(event) => scrollHandler(event)}>
            <div className='topContent'>
                <h2 className='title'>???????????????????? ????????????</h2>
                <select className='filterBtn' onClick={(ev) => setFilter(ev.target.value)}>
                    <option value="default">???? ??????????????????</option>
                    <option value="minFormMax">???????? ?????? ???? ????????</option>
                    <option value="maxFromMin">???????? ???????? ???? ??????</option>
                    <option value="byName">???? ????????????????????????</option>
                </select>
            </div>
            <div className='content'>
                <div className='addProduct'>
                    <div className='addProductFields'>
                        <FormikProvider value={formik}>
                            <div className='productTexts'>
                                <span className='productName'>
                                    ???????????????????????? ????????????
                                    <span className='productNameStar'>*</span>
                                </span>
                            </div>
                            <Input
                                className={'input'}
                                type={'text'}
                                name={'title'}
                                placeholder={'?????????????? ???????????????????????? ????????????'}
                            />
                            <span className='productName'>???????????????? ????????????</span>
                            <Input
                                type={'textarea'}
                                name={'description'}
                                placeholder={'?????????????? ???????????????? ????????????'}
                            />
                            <div className='productTexts'>
                                <span className='productName'>???????????? ???? ?????????????????????? ????????????<span
                                    className='productNameStar'>*</span></span>
                            </div>
                            <Input
                                type={'text'}
                                name={'image'}
                                placeholder={'?????????????? ????????????'}/>
                            <div className='productTexts'>
                                <span className='productName'>
                                    ???????? ????????????
                                    <span className='productNameStar'>*</span>
                                </span>
                            </div>
                            <Input
                                type={'number'}
                                name={'price'}
                                placeholder={'?????????????? ????????'}/>
                            <div
                                className='addProductButton'
                                style={
                                    formik.isValid ? {
                                        background: 'green',
                                    } : null}>
                                <span className='addProductButtonText'
                                      onClick={formik.handleSubmit}>???????????????? ??????????</span>
                            </div>
                        </FormikProvider>
                    </div>
                </div>
                <div className='productList'>
                        {
                            productData.map((el) =>
                                <Product key={el.id} props={el} getDeleteProductId={getDeleteProductId}/>)
                        }
                </div>
            </div>

        </div>

    );
}

export default App;
