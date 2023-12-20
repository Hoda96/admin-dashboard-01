import { Box, TextField, useMediaQuery } from "@mui/material";
import Header from "../../components/Header";
import { Formik } from "formik";
import * as Yup from "yup";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  adrress1: "",
  adrress2: "",
};

const phoneRegExp = /^([+]d{2}[ ])?d{10}$/;

const userSchema = Yup.object().shape({
  firstName: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  lastName: Yup.string()
    .max(20, "Must be 20 characters or less")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  contact: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required field"),
});

function Form() {
  const isNonMobile = useMediaQuery("(min-wifth:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m={"20px"}>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Header title="CREATE USER" subtitle="Create a New User Profile." />
      </Box>
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={userSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <Form onSubmit={handleSubmit}>
            <Box
              display={"grid"}
              gridTemplateColumns={"repeat(4, minmax(0, 1fr))"}
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                id="filled-required"
                label="First Name"
                defaultValue={values.firstName}
                onBlur={handleBlur}
                onChange={handleChange}
                name="firstName"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
}

export default Form;
