import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

const ContactsSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  number: Yup.number().required('Required'),
});

export const Phonebook = ({ title, onSave }) => {
  return (
    <div>
      <h2>{title}</h2>
      <Formik
        initialValues={{
          name: '',
          number: 0,
        }}
        onSubmit={values => {
          console.log(values);
          onSave({
            ...values,
            id: nanoid(),
          })
        }}
      >
        <Form>
          <label htmlFor="">
            Name
            <Field
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <ErrorMessage name="name" component="div" />
          </label>
          <label htmlFor="">
            Number
            <Field
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
            <ErrorMessage name="number" component="div" />
          </label>
          <button>Add Contact</button>
        </Form>
      </Formik>
    </div>
  );
};
