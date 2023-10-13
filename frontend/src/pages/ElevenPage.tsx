import { useNavigate } from "react-router-dom";
import { useQuestionSlice } from "../hooks";
import MainLayout from "../layouts/MainLayout";
import { Formik } from "formik";
import { ErrorMessage, NavigationFooter } from "../components";

import { CustomValidator } from '../helpers';
import * as Yup from 'yup';

const ValidationSchema = Yup.object().shape({
    prog: Yup.number().typeError(CustomValidator.INTEGER_MESSAGE).integer(CustomValidator.INTEGER_MESSAGE).required(CustomValidator.REQUIRED_MESSAGE),
    bloqProg: Yup.number().typeError(CustomValidator.INTEGER_MESSAGE).integer(CustomValidator.INTEGER_MESSAGE).required(CustomValidator.REQUIRED_MESSAGE),
    bloqAcop: Yup.number().typeError(CustomValidator.INTEGER_MESSAGE).integer(CustomValidator.INTEGER_MESSAGE).required(CustomValidator.REQUIRED_MESSAGE),
})

const ElevenPage = () => {

    const navigate = useNavigate();

    const { questionProperties, setElevenQuestion } = useQuestionSlice();
    const { programadores, bloquesAcoplar, bloquesPrograma } = questionProperties;

    return (
        <MainLayout title="11. Interoperabilidad">
            <Formik
                initialValues={{
                    prog: programadores,
                    bloqProg: bloquesPrograma,
                    bloqAcop: bloquesAcoplar,
                }}
                validationSchema={ValidationSchema}
                onSubmit={(values) => {
                    setElevenQuestion(+values.prog, +values.bloqProg, +values.bloqAcop)
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
                                <label htmlFor="centro">No. de bloques del programa</label>
                                <input
                                    type="text"
                                    name="bloqProg"
                                    className="form-input"
                                    value={values.bloqProg}
                                    onChange={handleChange}
                                />
                                {errors.bloqProg && <ErrorMessage message={errors.bloqProg} />}
                            </div>
                            <div className="w-full sm:w-1/2 p-1">
                                <label htmlFor="centro">No. de bloques del programa a acoplar</label>
                                <input
                                    type="text"
                                    name="bloqAcop"
                                    className="form-input"
                                    value={values.bloqAcop}
                                    onChange={handleChange}
                                />
                                {errors.bloqAcop && <ErrorMessage message={errors.bloqAcop} />}
                            </div>
                        </form>
                        <NavigationFooter
                            prevFunction={() => navigate('/10')}
                            nextFunction={() => {
                                handleSubmit();
                                navigate('/end');
                            }}
                            nextDisabled={!isValid}
                        />
                    </>
                }
            </Formik>
        </MainLayout>
    )
}

export default ElevenPage