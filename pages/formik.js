import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import DescriptionList from "../components/DescriptionList";

export default function FormikPage() {
  const DisplayingErrorMessagesSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
  });
  return (
    <>
      <DescriptionList title="Formik Example" description="In this example...">
        <Formik
          initialValues={{
            username: "",
            email: "",
          }}
          validationSchema={DisplayingErrorMessagesSchema}
          onSubmit={(values) => {
            // same shape as initial values
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <label htmlFor="username">Username</label>
              <Field name="username" />
              {touched.username && errors.username && (
                <div className="text-red-600">{errors.username}</div>
              )}
              <label htmlFor="email">Email</label>
              <Field name="email" />
              {touched.email && errors.email && (
                <div className="text-red-600">{errors.email}</div>
              )}
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </DescriptionList>
    </>
  );
}
