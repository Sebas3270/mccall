import { useNavigate } from "react-router-dom";
import { useQuestionSlice } from "../hooks";
import MainLayout from "../layouts/MainLayout";
import { Formik } from "formik";
import { ErrorMessage, NavigationFooter } from "../components";

import * as Yup from 'yup';
import { CustomValidator } from "../helpers";

const ValidationSchema = Yup.object().shape({
    perMan: Yup.number().typeError(CustomValidator.INTEGER_MESSAGE).integer(CustomValidator.INTEGER_MESSAGE).required(CustomValidator.REQUIRED_MESSAGE),
    minDetErr: Yup.number().typeError(CustomValidator.NUMBER_MESSAGE).required(CustomValidator.REQUIRED_MESSAGE),
    err: Yup.number().typeError(CustomValidator.NUMBER_MESSAGE).required(CustomValidator.REQUIRED_MESSAGE),
})

const FirstPage = () => {

    const navigate = useNavigate();

    const { questionProperties, setFirstQuestion } = useQuestionSlice();
    const { erroresPorCada100, tiempoDetectarError, personasMantenimiento } = questionProperties;

    return (
        <MainLayout title="1. Facilidad de recibir mantenimiento">
            <Formik
                initialValues={{
                    err: erroresPorCada100,
                    minDetErr: tiempoDetectarError,
                    perMan: personasMantenimiento
                }}
                onSubmit={(values) => {
                    setFirstQuestion(+values.err, +values.perMan, +values.minDetErr)
                }}
                validationSchema={ValidationSchema}
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
                                <label htmlFor="centro">Tiempo en detectar un error (minutos)</label>
                                <input
                                    type="text"
                                    name="minDetErr"
                                    className="form-input"
                                    value={values.minDetErr}
                                    onChange={handleChange}
                                />
                                {errors.minDetErr && <ErrorMessage message={errors.minDetErr} />}
                            </div>
                            <div className="w-full sm:w-1/2 p-1">
                                <label htmlFor="centro">Errores por cada 100 lineas de codigo</label>
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
                                <label htmlFor="centro">Personas encargadas de dar mantenimiento</label>
                                <input
                                    type="text"
                                    name="perMan"
                                    className="form-input"
                                    value={values.perMan}
                                    onChange={handleChange}
                                />
                                {errors.perMan && <ErrorMessage message={errors.perMan} />}
                            </div>
                        </form>
                        <NavigationFooter
                            nextFunction={() => {
                                handleSubmit();
                                navigate('/2');
                            }}
                            nextDisabled={!isValid}
                        />
                    </>
                }
            </Formik>
        </MainLayout>
    )
}

export default FirstPage