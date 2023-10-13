import { useNavigate } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout';
import useQuestionSlice from '../hooks/useQuestionSlice';
import { ErrorMessage, NavigationFooter } from '../components';
import { Formik } from 'formik';
import { CustomValidator } from '../helpers';
import * as Yup from 'yup';

const ValidationSchema = Yup.object().shape({
    sis: Yup.number().typeError(CustomValidator.INTEGER_MESSAGE).integer(CustomValidator.INTEGER_MESSAGE).required(CustomValidator.REQUIRED_MESSAGE),
    sisFunc: Yup.number().typeError(CustomValidator.INTEGER_MESSAGE).integer(CustomValidator.INTEGER_MESSAGE).required(CustomValidator.REQUIRED_MESSAGE),
})

const NinthPage = () => {

    const navigate = useNavigate();

    const { questionProperties, setNinthQuestion } = useQuestionSlice();
    const { sistemasOperativos, sistemasOperativosFuncionando } = questionProperties;

    return (
        <MainLayout title='9. Portabilidad'>
            <Formik
                initialValues={{
                    sis: sistemasOperativos,
                    sisFunc: sistemasOperativosFuncionando,
                }}
                validationSchema={ValidationSchema}
                // validate={values => {
                //     const errors:any = {};
                //     if(values.sis < values.sisFunc){
                //         errors.sisFunc = 'El numero de sistemas en los que funcionan debe ser igual o menor al numero de sistemas en donde debe hacerlo'
                //     }
                //     return errors;
                // }}
                onSubmit={(values) => {
                    setNinthQuestion(+values.sis, +values.sisFunc);
                }}
            >
                {({
                    values,
                    errors,
                    handleChange,
                    handleSubmit,
                    isValid,
                }) => <>
                    <form className='flex flex-wrap'>
                        <div className="w-full sm:w-1/2 p-1">
                            <label htmlFor="centro">Sistemas operativos en donde debe funcionar</label>
                            <input
                                type="text"
                                name="sis"
                                className="form-input"
                                value={values.sis}
                                onChange={handleChange}
                            />
                            {errors.sis && <ErrorMessage message={errors.sis}/>}
                        </div>
                        <div className="w-full sm:w-1/2 p-1">
                            <label htmlFor="centro">Sistemas operativos en donde funciona</label>
                            <input
                                type="text"
                                name="sisFunc"
                                className="form-input"
                                value={values.sisFunc}
                                onChange={handleChange}
                            />
                            {errors.sisFunc && <ErrorMessage message={errors.sisFunc}/>}
                        </div>
                    </form>
                    <NavigationFooter
                        prevFunction={() => navigate('/8')}
                        nextFunction={() => {
                            handleSubmit();
                            navigate('/10');
                        }}
                        nextDisabled={!isValid}
                    />
                </>
                }
            </Formik>


        </MainLayout>
    )
}

export default NinthPage;