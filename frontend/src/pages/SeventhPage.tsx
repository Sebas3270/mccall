import { useNavigate } from "react-router-dom";
import { useQuestionSlice } from "../hooks";
import MainLayout from "../layouts/MainLayout";
import { Formik } from "formik";
import { ErrorMessage, NavigationFooter } from "../components";

import * as Yup from 'yup';
import { CustomValidator } from "../helpers";

const ValidationSchema = Yup.object().shape({
    tipUs: Yup.number().typeError(CustomValidator.INTEGER_MESSAGE).integer(CustomValidator.INTEGER_MESSAGE).required(CustomValidator.REQUIRED_MESSAGE),
    promAcc: Yup.number().typeError(CustomValidator.INTEGER_MESSAGE).integer(CustomValidator.INTEGER_MESSAGE).required(CustomValidator.REQUIRED_MESSAGE),
    porAccDen: Yup
    .number()
    .typeError(CustomValidator.INTEGER_MESSAGE)
    .integer(CustomValidator.INTEGER_MESSAGE)
    .min(0, 'Debe ser un numero de 0 a 100')
    .max(100, 'Debe ser un numero de 0 a 100')
    .required(CustomValidator.REQUIRED_MESSAGE),
})

const SeventhPage = () => {

    const navigate = useNavigate();

    const { questionProperties, setSeventhQuestion } = useQuestionSlice();
    const { tiposUsuario, promedioAccesos, porcentajeAccesosDenegados } = questionProperties;

    return (
        <MainLayout title="7. Integridad">
            <Formik
                initialValues={{
                    tipUs: tiposUsuario,
                    promAcc: promedioAccesos,
                    porAccDen: porcentajeAccesosDenegados,
                }}
                onSubmit={(values) => {
                    setSeventhQuestion(+values.porAccDen, +values.tipUs, +values.promAcc)
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
                                <label htmlFor="centro">No. de tipos de usuarios en el software</label>
                                <input
                                    type="text"
                                    name="tipUs"
                                    className="form-input"
                                    value={values.tipUs}
                                    onChange={handleChange}
                                />
                                {errors.tipUs && <ErrorMessage message={errors.tipUs} />}
                            </div>
                            <div className="w-full sm:w-1/2 p-1">
                                <label htmlFor="centro">Promedio de accesos por día</label>
                                <input
                                    type="text"
                                    name="promAcc"
                                    className="form-input"
                                    value={values.promAcc}
                                    onChange={handleChange}
                                />
                                {errors.promAcc && <ErrorMessage message={errors.promAcc} />}
                            </div>
                            <div className="w-full sm:w-1/2 p-1">
                                <label htmlFor="centro">Porcentaje de accesos denegados por día (0-100)</label>
                                <input
                                    type="text"
                                    name="porAccDen"
                                    className="form-input"
                                    value={values.porAccDen}
                                    onChange={handleChange}
                                />
                                {errors.porAccDen && <ErrorMessage message={errors.porAccDen} />}
                            </div>
                        </form>
                        <NavigationFooter
                            prevFunction={() => navigate('/6')}
                            nextFunction={() => {
                                handleSubmit();
                                navigate('/8');
                            }}
                            nextDisabled={!isValid}
                        />
                    </>
                }
            </Formik>
        </MainLayout>
    )
}

export default SeventhPage