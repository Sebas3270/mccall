import { useNavigate } from "react-router-dom";
import { useQuestionSlice } from "../hooks";
import MainLayout from "../layouts/MainLayout";
import { Formik } from "formik";
import { ErrorMessage, NavigationFooter } from "../components"

import { CustomValidator } from '../helpers';
import * as Yup from 'yup';

const ValidationSchema = Yup.object().shape({
    pruReal: Yup.number().typeError(CustomValidator.INTEGER_MESSAGE).integer(CustomValidator.INTEGER_MESSAGE).required(CustomValidator.REQUIRED_MESSAGE),
    pruAprob: Yup.number().typeError(CustomValidator.INTEGER_MESSAGE).integer(CustomValidator.INTEGER_MESSAGE).required(CustomValidator.REQUIRED_MESSAGE),
    timPru: Yup.number().typeError(CustomValidator.NUMBER_MESSAGE).required(CustomValidator.REQUIRED_MESSAGE),
    timPruReq: Yup.number().typeError(CustomValidator.NUMBER_MESSAGE).required(CustomValidator.REQUIRED_MESSAGE),
})

const ThirdPage = () => {

    const navigate = useNavigate();

    const { questionProperties, setThirdQuestion } = useQuestionSlice();
    const { tiempoPruebas, tiempoPruebasRequerido, pruebasRealizadas, pruebasAprobadas } = questionProperties;

    return (
        <MainLayout title="3. Susceptibilidad de someterse a pruebas">
            <Formik
                initialValues={{
                    timPru: tiempoPruebas,
                    timPruReq: tiempoPruebasRequerido,
                    pruReal: pruebasRealizadas,
                    pruAprob: pruebasAprobadas,
                }}
                validationSchema={ValidationSchema}
                onSubmit={(values) => {
                    setThirdQuestion(+values.pruReal, +values.pruAprob, +values.timPru, +values.timPruReq)
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
                                <label htmlFor="centro">Pruebas Realizadas</label>
                                <input
                                    type="text"
                                    name="pruReal"
                                    className="form-input"
                                    value={values.pruReal}
                                    onChange={handleChange}
                                />
                                {errors.pruReal && <ErrorMessage message={errors.pruReal} />}
                            </div>
                            <div className="w-full sm:w-1/2 p-1">
                                <label htmlFor="centro">Pruebas Aprobadas</label>
                                <input
                                    type="text"
                                    name="pruAprob"
                                    className="form-input"
                                    value={values.pruAprob}
                                    onChange={handleChange}
                                />
                                {errors.pruAprob && <ErrorMessage message={errors.pruAprob} />}
                            </div>
                            <div className="w-full sm:w-1/2 p-1">
                                <label htmlFor="centro">Tiempo estimado por prueba (minutos)</label>
                                <input
                                    type="text"
                                    name="timPru"
                                    className="form-input"
                                    value={values.timPru}
                                    onChange={handleChange}
                                />
                                {errors.timPru && <ErrorMessage message={errors.timPru} />}
                            </div>
                            <div className="w-full sm:w-1/2 p-1">
                                <label htmlFor="centro">Tiempo requerido por prueba (minutos)</label>
                                <input
                                    type="text"
                                    name="timPruReq"
                                    className="form-input"
                                    value={values.timPruReq}
                                    onChange={handleChange}
                                />
                                {errors.timPruReq && <ErrorMessage message={errors.timPruReq} />}
                            </div>
                        </form>
                        <NavigationFooter
                            prevFunction={() => navigate('/2')}
                            nextFunction={() => {
                                handleSubmit();
                                navigate('/4');
                            }}
                            nextDisabled={!isValid}
                        />
                    </>
                }
            </Formik>
        </MainLayout>
    )
}

export default ThirdPage