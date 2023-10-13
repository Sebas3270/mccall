import { useNavigate } from "react-router-dom";
import { useQuestionSlice } from "../hooks";
import MainLayout from "../layouts/MainLayout";
import { Formik } from "formik";

import * as Yup from 'yup';
import { CustomValidator } from "../helpers";
import { ErrorMessage, NavigationFooter } from "../components";

const ValidationSchema = Yup.object().shape({
    prog: Yup.number().typeError(CustomValidator.INTEGER_MESSAGE).integer(CustomValidator.INTEGER_MESSAGE).required(CustomValidator.REQUIRED_MESSAGE),
    diasEnt: Yup.number().typeError(CustomValidator.NUMBER_MESSAGE).required(CustomValidator.REQUIRED_MESSAGE),
    numCamMod: Yup.number().typeError(CustomValidator.INTEGER_MESSAGE).integer(CustomValidator.INTEGER_MESSAGE).required(CustomValidator.REQUIRED_MESSAGE),
})

const SecondPage = () => {

    const navigate = useNavigate();

    const { questionProperties, setSecondQuestion } = useQuestionSlice();
    const { programadores, diasEntregas, numeroCambiosModulo } = questionProperties;

    return (
        <MainLayout title="2. Flexibilidad">
            <Formik
                initialValues={{
                    prog: programadores,
                    diasEnt: diasEntregas,
                    numCamMod: numeroCambiosModulo,
                }}
                validationSchema={ValidationSchema}
                onSubmit={(values) => {
                    setSecondQuestion(+values.prog, +values.numCamMod, +values.diasEnt)
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
                                <label htmlFor="centro">No. de programadores</label>
                                <input
                                    type="text"
                                    name="prog"
                                    className="form-input"
                                    value={values.prog}
                                    onChange={handleChange}
                                />
                                {errors.prog && <ErrorMessage message={errors.prog} />}
                            </div>
                            <div className="w-full sm:w-1/2 p-1">
                                <label htmlFor="centro">Dias antes de la entrega</label>
                                <input
                                    type="text"
                                    name="diasEnt"
                                    className="form-input"
                                    value={values.diasEnt}
                                    onChange={handleChange}
                                />
                                {errors.diasEnt && <ErrorMessage message={errors.diasEnt} />}
                            </div>
                            <div className="w-full sm:w-1/2 p-1">
                                <label htmlFor="centro">No. de cambios por modulo</label>
                                <input
                                    type="text"
                                    name="numCamMod"
                                    className="form-input"
                                    value={values.numCamMod}
                                    onChange={handleChange}
                                />
                                {errors.numCamMod && <ErrorMessage message={errors.numCamMod} />}
                            </div>
                        </form>
                        <NavigationFooter
                            prevFunction={() => navigate('/1')}
                            nextFunction={() => {
                                handleSubmit();
                                navigate('/3');
                            }}
                            nextDisabled={!isValid}
                        />
                    </>
                }
            </Formik>
        </MainLayout>
    )
}

export default SecondPage