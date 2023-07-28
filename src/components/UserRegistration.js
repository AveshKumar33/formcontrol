import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import { FormGroup, Checkbox } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import "../App.css"
// import { useNavigate } from 'react-router-dom';
const UserRegistration = () => {
  const { handleSubmit, control, formState: { errors } } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      termsAndCondition: false

    },
  })
  // const navigate = useNavigate();
let myValue={
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  termsAndCondition: false
}
  const onSubmit = (values) => {
    console.log(values);
    myValue=values

  }
  return (
    <>
      <h1>User Registration</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="firstName">First Name</InputLabel>
          <Controller
            name="firstName"
            control={control}
            rules={{
              required: 'required',
              // pattern: {
              //   value: /[A-Z][a-z]/,
              //   message: "please enter valid",
              // },

              // maxLength: {
              //   value: 17,
              //   message: "Reached maximum Lenghth",
              // },
            }}
            render={({ field }) => (
              <OutlinedInput {...field} id="firstName" label="First Name" />
            )}
          />
          {errors.firstName ? (
            <Box className="required" color="error.main" mt={1}>
              {errors.firstName.message}
            </Box>
          ) : (
            ""
          )}
        </FormControl>

        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="lastName">Last Name</InputLabel>
          <Controller
            name="lastName"
            control={control}
            rules={{
              required: 'required',
              // pattern: {
              //   value: /[A-Z][a-z]/,
              //   message: "please enter valid",
              // },

              // maxLength: {
              //   value: 17,
              //   message: "Reached maximum Lenghth",
              // },
            }}
            render={({ field }) => (
              <OutlinedInput {...field} id="lastName" label="Last Name" />
            )}
          />
          {errors.lastName ? (
            <Box className="required" color="error.main" mt={1}>
              {errors.lastName.message}
            </Box>
          ) : (
            ""
          )}
        </FormControl>

        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="email">Email Address</InputLabel>
          <Controller
            name="email"
            control={control}
            rules={{
              required: 'required',
              pattern: {
                value: /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/,
                message: "Please enter valid mail ",
              },

              maxLength: {
                value: 80,
                message: "Reached maximum Lenghth",
              },
            }}
               render={({ field }) => (
              <OutlinedInput {...field} id="email" label="Email" />
            )}
          />
          {errors.email ? (
            <Box className="required" color="error.main" mt={1}>
              {errors.email.message}
            </Box>
          ) : (
            ""
          )}
        </FormControl>

        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Controller
            name="password"
            control={control}
            rules={{
              required: 'required',
              // pattern: {
              //   value: /[A-Z][a-z]/,
              //   message: "please Add Valid password",
              // },

              // maxLength: {
              //   value: 7,
              //   message: "please add 2 digits g",
              // },
            }}
              render={({ field }) => (
              <OutlinedInput {...field} id="password" label="password" />
            )}
          />
          {errors.password ? (
            <Box className="required" color="error.main" mt={1}>
              {errors.password.message}
            </Box>
          ) : (
            ""
          )}
        </FormControl>

        <FormControl fullWidth sx={{ m: 1 }}>
          <Controller
            name="termsAndCondition"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <FormGroup sx={{ m: 1 }}>
                <FormControlLabel {...field}
                  control={<Checkbox />}
                  label="I agree to the terms and conditions"
                />
              </FormGroup>
            )}
          />
          {errors.termsAndCondition && (<span className="field_level_error">{errors.termsAndCondition.message}</span>)}

        </FormControl>

{/*
        <Button type="submit" variant="contained" color="success" fullWidth sx={{ m: 1 }}>
          Submit
        </Button> */}
          <FormControl sx={{ width: "100%", mt: "26px" }}>
              {true ? <Button
                // onChange={onSubmit}
                type="submit"
                variant="contained"
                onClick={() =>{ console.log("jjjjjjjjjjjjjj",myValue.email)}}
                sx={{ width: "100%", mt: "11px" }}
              >
                Get Started
              </Button> : ""}
             </FormControl>
      </form>
    </>
  );
};

export default UserRegistration;
