/* eslint-disable no-unused-vars */
import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import ModalForm from '../ModalForm.jsx';

const validationSchema = Yup.object({
  name: Yup.string().required('Обязательное поле'),
});

const AddChannelForm = () => {
  const initValues = {
    name: '',
  };
  const handleAddChannel = () => {};
  return (
    <Formik initialValues={initValues} onSubmit={handleAddChannel}>
      <ModalForm />
    </Formik>
  );
};

export default AddChannelForm;
