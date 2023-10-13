import { useNavigate } from "react-router-dom";
import { useQuestionSlice } from "../hooks";
import MainLayout from "../layouts/MainLayout";
import { Formik } from "formik";
import { ErrorMessage, NavigationFooter } from "../components";

import { CustomValidator } from '../helpers';
import * as Yup from 'yup';

const ValidationSchema = Yup.object().shape({
    sis: Yup.number().typeError(CustomValidator.INTEGER_MESSAGE).integer(CustomValidator.INTEGER_MESSAGE).required(CustomValidator.REQUIRED_MESSAGE),
    sisFunc: Yup.number().typeError(CustomValidator.INTEGER_MESSAGE).integer(CustomValidator.INTEGER_MESSAGE).required(CustomValidator.REQUIRED_MESSAGE),
})

const EightPage = () => {

    const navigate = useNavigate();

    const { questionProperties, setEightQuestion } = useQuestionSlice();
    const { recursosSolicitados, recursosUtilizados } = questionProperties;

    return (
        <MainLayout title="8. Eficiencia">
            <Formik
                initialValues={{
                    recSol: recursosSolicitados,
                    recUtil: recursosUtilizados,
                }}
                onSubmit={(values) => {
                    setEightQuestion(+values.recSol, +values.recUtil);
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
                                <label htmlFor="centro">Recursos de HW/SW solicitados</label>
                                <input
                                    type="text"
                                    name="recSol"
                                    className="form-input"
                                    value={values.recSol}
                                    onChange={handleChange}
                                />
                                {errors.recSol && <ErrorMessage message={errors.recSol} />}
                            </div>
                            <div className="w-full sm:w-1/2 p-1">
                                <label htmlFor="centro">Recursos de HW/SW utilizados</label>
                                <input
                                    type="text"
                                    name="recUtil"
                                    className="form-input"
                                    value={values.recUtil}
                                    onChange={handleChange}
                                />
                                {errors.recUtil && <ErrorMessage message={errors.recUtil} />}
                            </div>
                        </form>
                        <NavigationFooter
                            prevFunction={() => navigate('/7')}
                            nextFunction={() => {
                                handleSubmit();
                                navigate('/9');
                            }}
                            nextDisabled={!isValid}
                        />
                    </>
                }
            </Formik>
        </MainLayout>
    )
}

export default EightPage