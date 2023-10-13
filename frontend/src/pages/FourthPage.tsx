import { useNavigate } from "react-router-dom";
import { useQuestionSlice } from "../hooks";
import MainLayout from "../layouts/MainLayout";
import { Formik } from "formik";
import { ErrorMessage, NavigationFooter } from "../components";
import * as Yup from 'yup';
import { CustomValidator } from "../helpers";

const ValidationSchema = Yup.object().shape({
    req: Yup.number().typeError(CustomValidator.INTEGER_MESSAGE).integer(CustomValidator.INTEGER_MESSAGE).required(CustomValidator.REQUIRED_MESSAGE),
    reqCump: Yup.number().typeError(CustomValidator.INTEGER_MESSAGE).integer(CustomValidator.INTEGER_MESSAGE).required(CustomValidator.REQUIRED_MESSAGE),
    cal: Yup
    .number()
    .typeError(CustomValidator.INTEGER_MESSAGE)
    .integer(CustomValidator.INTEGER_MESSAGE)
    .min(0, 'Debe ser un numero de 0 a 100')
    .max(100, 'Debe ser un numero de 0 a 100')
    .required(CustomValidator.REQUIRED_MESSAGE),

})

const FourthPage = () => {

    const navigate = useNavigate();

    const { questionProperties, setFourthQuestion } = useQuestionSlice();
    const { calificacionCliente, requerimientosCliente, requerimientosCumplidos } = questionProperties;

    return (
        <MainLayout title="4. Corrección">
            <Formik
                initialValues={{
                    req: requerimientosCliente,
                    reqCump: requerimientosCumplidos,
                    cal: calificacionCliente,
                }}
                onSubmit={(values) => {
                    setFourthQuestion(+values.req, +values.reqCump, +values.cal);
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
                                <label htmlFor="centro">No. de requerimientos del cliente</label>
                                <input
                                    type="text"
                                    name="req"
                                    className="form-input"
                                    value={values.req}
                                    onChange={handleChange}
                                />
                                {errors.req && <ErrorMessage message={errors.req} />}
                            </div>
                            <div className="w-full sm:w-1/2 p-1">
                                <label htmlFor="centro">No. de requerimientos cumplidos</label>
                                <input
                                    type="text"
                                    name="reqCump"
                                    className="form-input"
                                    value={values.reqCump}
                                    onChange={handleChange}
                                />
                                {errors.reqCump && <ErrorMessage message={errors.reqCump} />}
                            </div>
                            <div className="w-full sm:w-1/2 p-1">
                                <label htmlFor="centro">Calificacion del cliente (0-100)</label>
                                <input
                                    type="text"
                                    name="cal"
                                    className="form-input"
                                    value={values.cal}
                                    onChange={handleChange}
                                />
                                {errors.cal && <ErrorMessage message={errors.cal} />}
                            </div>
                        </form>
                        <NavigationFooter
                            prevFunction={() => navigate('/3')}
                            nextFunction={() => {
                                handleSubmit();
                                navigate('/5');
                            }}
                            nextDisabled={!isValid}
                        />
                    </>
                }
            </Formik>
        </MainLayout>
    )
}

export default FourthPage