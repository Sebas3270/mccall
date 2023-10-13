import { useNavigate } from "react-router-dom";
import { useQuestionSlice } from "../hooks";
import MainLayout from "../layouts/MainLayout";
import { Formik } from "formik";
import { ErrorMessage, NavigationFooter } from "../components";

import * as Yup from 'yup';
import { CustomValidator } from "../helpers";

const ValidationSchema = Yup.object().shape({
    pagDoc: Yup.number().typeError(CustomValidator.INTEGER_MESSAGE).integer(CustomValidator.INTEGER_MESSAGE).required(CustomValidator.REQUIRED_MESSAGE),
    diasCap: Yup.number().typeError(CustomValidator.INTEGER_MESSAGE).integer(CustomValidator.INTEGER_MESSAGE).required(CustomValidator.REQUIRED_MESSAGE),
    horasCap: Yup.number().typeError(CustomValidator.NUMBER_MESSAGE).required(CustomValidator.REQUIRED_MESSAGE),
})

const SixthPage = () => {

    const navigate = useNavigate();

    const { questionProperties, setSixthQuestion } = useQuestionSlice();
    const { paginasDocumento, horasPorDiaCapacitacion, diasCapacitacion } = questionProperties;

    return (
        <MainLayout title="6. Usabilidad">
            <Formik
                initialValues={{
                    pagDoc: paginasDocumento,
                    horasCap: horasPorDiaCapacitacion,
                    diasCap: diasCapacitacion,
                }}
                onSubmit={(values) => {
                    setSixthQuestion(+values.diasCap, +values.horasCap, +values.pagDoc);
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
                                <label htmlFor="centro">Dias de capacitación requeridos</label>
                                <input
                                    type="text"
                                    name="diasCap"
                                    className="form-input"
                                    value={values.diasCap}
                                    onChange={handleChange}
                                />
                                {errors.diasCap && <ErrorMessage message={errors.diasCap} />}
                            </div>
                            <div className="w-full sm:w-1/2 p-1">
                                <label htmlFor="centro">Horas por dia de capacitacion</label>
                                <input
                                    type="text"
                                    name="horasCap"
                                    className="form-input"
                                    value={values.horasCap}
                                    onChange={handleChange}
                                />
                                {errors.horasCap && <ErrorMessage message={errors.horasCap} />}
                            </div>
                            <div className="w-full sm:w-1/2 p-1">
                                <label htmlFor="centro">No. de paginas de la documentación</label>
                                <input
                                    type="text"
                                    name="pagDoc"
                                    className="form-input"
                                    value={values.pagDoc}
                                    onChange={handleChange}
                                />
                                {errors.pagDoc && <ErrorMessage message={errors.pagDoc} />}
                            </div>
                        </form>
                        <NavigationFooter
                            prevFunction={() => navigate('/5')}
                            nextFunction={() => {
                                handleSubmit();
                                navigate('/7');
                            }}
                            nextDisabled={!isValid}
                        />
                    </>
                }
            </Formik>
        </MainLayout>
    )
}

export default SixthPage