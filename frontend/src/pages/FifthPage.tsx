import { useNavigate } from "react-router-dom";
import { useQuestionSlice } from "../hooks";
import MainLayout from "../layouts/MainLayout";
import { Formik } from "formik";
import { ErrorMessage, NavigationFooter } from "../components";

import * as Yup from 'yup';
import { CustomValidator } from "../helpers";

const ValidationSchema = Yup.object().shape({
    precio: Yup.number().typeError(CustomValidator.NUMBER_MESSAGE).required(CustomValidator.REQUIRED_MESSAGE),
    err: Yup.number().typeError(CustomValidator.NUMBER_MESSAGE).required(CustomValidator.REQUIRED_MESSAGE),
})

const FifthPage = () => {

    const navigate = useNavigate();

    const { questionProperties, setFifthQuestion } = useQuestionSlice();
    const { erroresPorCada100, precio } = questionProperties;

    return (
        <MainLayout title="5. Confiabilidad">
            <Formik
                initialValues={{
                    err: erroresPorCada100,
                    precio: precio,
                }}
                validationSchema={ValidationSchema}
                onSubmit={(values) => {
                    setFifthQuestion(+values.err, +values.precio);
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
                                <label htmlFor="centro">Errores por cada 100 líneas de codigo</label>
                                <input
                                    type="text"
                                    name="err"
                                    className="form-input"
                                    value={values.err}
                                    onChange={handleChange}
                                />
                                {errors.err && <ErrorMessage message={errors.err} />}
                            </div>
                            <div className="w-full sm:w-1/2 p-1">
                                <label htmlFor="centro">Precio del proyecto (miles)</label>
                                <input
                                    type="text"
                                    name="precio"
                                    className="form-input"
                                    value={values.precio}
                                    onChange={handleChange}
                                />
                                {errors.precio && <ErrorMessage message={errors.precio} />}
                            </div>
                        </form>
                        <NavigationFooter
                            prevFunction={() => navigate('/4')}
                            nextFunction={() => {
                                handleSubmit();
                                navigate('/6');
                            }}
                            nextDisabled={!isValid}
                        />
                    </>
                }
            </Formik>
        </MainLayout>
    )
}

export default FifthPage