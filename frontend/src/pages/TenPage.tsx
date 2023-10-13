import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useQuestionSlice } from '../hooks';
import MainLayout from '../layouts/MainLayout';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { CustomValidator } from '../helpers';
import { ErrorMessage, NavigationFooter } from '../components';

const ValidationSchema = Yup.object().shape({
  mod: Yup.number().typeError(CustomValidator.INTEGER_MESSAGE).integer(CustomValidator.INTEGER_MESSAGE).required(CustomValidator.REQUIRED_MESSAGE),
  modReu: Yup.number().typeError(CustomValidator.INTEGER_MESSAGE).integer(CustomValidator.INTEGER_MESSAGE).required(CustomValidator.REQUIRED_MESSAGE),
})

const TenPage = () => {

  const navigate = useNavigate();

  const { questionProperties, setTenQuestion } = useQuestionSlice();
  const { modulosPrograma, modulosReutilizados } = questionProperties;

  return (
    <MainLayout title='10. Reusabilidad'>
      <Formik
        initialValues={{
          mod: modulosPrograma,
          modReu: modulosReutilizados,
        }}
        validationSchema={ValidationSchema}
        // validate={values => {
        //   const errors: any = {};
        //   if (values.mod < values.modReu) {
        //     errors.modReu = 'El numero de modulos reutilizados ser igual o menor al numero total de modulos'
        //   }
        //   return errors;
        // }}
        onSubmit={(values) => {
          setTenQuestion(+values.mod, +values.modReu);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit
        }) => <>
            <form className='flex flex-wrap'>
              <div className="w-full sm:w-1/2 p-1">
                <label htmlFor="centro">Modulos del sistema</label>
                <input
                  type="text"
                  name="mod"
                  className="form-input"
                  value={values.mod}
                  onChange={handleChange}
                />
                {errors.mod && touched.mod && <ErrorMessage message={errors.mod} />}
              </div>
              <div className="w-full sm:w-1/2 p-1">
                <label htmlFor="centro">Modulos reutilizados hasta la fecha</label>
                <input
                  type="text"
                  name="modReu"
                  className="form-input"
                  value={values.modReu}
                  onChange={handleChange}
                />
                {errors.modReu && <ErrorMessage message={errors.modReu} />}
              </div>
            </form>
            <NavigationFooter
              prevFunction={() => navigate('/9')}
              nextFunction={() => {
                handleSubmit();
                navigate('/11');
              }}
            />
          </>
        }
      </Formik>
    </MainLayout>
  )
}

export default TenPage