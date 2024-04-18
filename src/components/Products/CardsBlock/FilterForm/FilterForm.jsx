import { Field, Form, Formik } from 'formik';
import s from './FilterForm.module.css';

const sleep = ms => new Promise(r => setTimeout(r, ms));

// const prices = ['$0-299', '$300-799', '$800-1199', '$1200+'];

export const FilterForm = ({ checkboxes }) => {
  return (
    <div>
      <Formik
        initialValues={{
          checked: [],
        }}
        onSubmit={async values => {
          await sleep(500);
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
          <div
            role="group"
            aria-labelledby="checkbox-group"
            className={s.checkboxGroup}
          >
            {checkboxes.map(checkbox => (
              <label key={checkbox} className={s.checkboxWrapper}>
                <Field
                  type="checkbox"
                  name="checked"
                  value={checkbox}
                  className={s.checkboxElement}
                />
                <p className={s.label}>{checkbox}</p>
              </label>
            ))}
          </div>
        </Form>
      </Formik>
    </div>
  );
};
