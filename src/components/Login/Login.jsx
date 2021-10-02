import React from "react";
import TextField from "@mui/material/TextField";
import "./Login.css";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useFormik } from "formik";
import * as yup from "yup";
import { Box } from "@mui/system";
import { Paper } from "@mui/material";

function Login() {
  function onSubmitFunction(values) {
    alert(JSON.stringify(values));
  }

  const validationSchema = yup.object({
    email: yup
      .string("Enter your email")
      .max(40, "Email can be at least 40 characters long")
      .email("Enter a valid email")
      .trim("There should not be a single space")
      //   .matches(/([_\-\.a-zA-Z0-9])/,"There is an irrelevant character")
      .required("Email is required"),
    password: yup
      .string("Enter your password")
      .min(8, "Password should be 8 characters long")
      .max(17, "Password can not be more then 17 characters")
      .trim("There should not be a single space")
      .required("Password is required"),
  });

  const formik = useFormik({
    validationSchema: validationSchema,
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: onSubmitFunction,
  });
  return (
    <div>
      <Box className="parentBox">
        <Paper className="parentPaper" elevation={3}>
          <form sx={{ m: 4 }} onSubmit={formik.handleSubmit}>
            <Typography variant="h4">Login</Typography>
            <TextField
              sx={{ mt: 2 }}
              fullWidth
              type="email"
              label="Email"
              placeholder="Type Your Email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              fullWidth
              type="password"
              label="Password"
              placeholder="Type Your Password"
              sx={{ my: 2 }}
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </form>
        </Paper>
      </Box>
    </div>
  );
}

export default Login;
