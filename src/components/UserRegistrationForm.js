// import '../App.css';
// import React from "react";
// import { useForm ,Controller} from "react-hook-form";
// import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup"
// import { TextField } from '@mui/material';
// import { MenuItem } from '@mui/material';
// import { Select } from '@mui/material';
// const Gender_option = [
//     { text: "male", value: "male" },
//     { text: "female", value: "female" },
//     { text: "other", value: "other" }
// ]
// const schema = yup.object({
//     firstName: yup.string().required('First name is required'),
//     lastName: yup.string().required('Last name is required'),
//     gender: yup.string().required('gender is required'),
//     email: yup.string().email('Please insert a valid email').required('email is required'),
//     phone: yup.string().required('phone is required'),
//     password: yup.string().required('password is required').min(6,'password must be six digits'),
//     confirmPassword: yup.string().required('confirmPassword is required').min(6,'password must be six digits')
//     .oneOf([yup.ref("password")],"password does not match")

// }).required();
// const UserRegistrationForm = () => {
//     const { register, handleSubmit, formState: { errors },control } = useForm({ resolver: yupResolver(schema) });
//     const onSubmit = (value) => { console.log(value) }
//     return (
//         <form onSubmit={handleSubmit(onSubmit)}>

//             <h3>user registration form</h3>

//             <div className="form-group">
//                 {/* <label htmlFor="firstName">First Name</label>
//                 <input type="text" className="form-control" {...register("firstName", { required: true })}></input> */}
//                 <Controller
//                 name="firstName"
//                 control={control}
//                 render={({field})=>(
//                     <TextField {...field} label="First Name" fullWidth/>
//                 )}
//                 />
//                 {errors.firstName && (<span className="field_level_error">{errors.firstName.message}</span>)}
//             </div>

//             <div className="form-group" mt-2>
//                 {/* <label htmlFor="lastName">Last Name</label>
//                 <input type="text" className="form-control" {...register("lastName", { required: true })}></input> */}
//                 <Controller
//                 name="lastName"
//                 control={control}
//                 render={({field})=>(
//                     <TextField {...field} label="Last Name" fullWidth/>
//                 )}
//                 />
//                 {errors.lastName && (<span className="field_level_error">{errors.lastName.message}</span>)}
//             </div>

//             <div className="form-group" mt-2>
//                 {/*<label htmlFor="gender">Gender</label>
//                  <select type="text" className="form-control" {...register("gender", { required: true })}>
//                     <option value="">Select Gender</option>
//                     {Gender_option.map((option, index) => (
//                         <option key={index} value={option.value}>
//                             {option.text}
//                         </option>
//                     ))}
//                 </select> */}

//                 <Controller
//                 name="gender"
//                 control={control}
//                 render={({field})=>(
//                     <Select {...field} label="Gender" fullWidth>
//                           {Gender_option.map((option, index) => (
//                         <MenuItem  key={index} value={option.value}>
//                             {option.text}
//                         </MenuItem>
//                         ))}
//                     </Select>
//                 )}
//                 />
//                 {errors.gender && (<span className="field_level_error">{errors.gender.message}</span>)}

//             </div>

//             <div className="form-group">
//                 <label htmlFor="email">Email</label>
//                 <input type="text" className="form-control" {...register("email", { required: true })}></input>
//                 {errors.email && (<span className="field_level_error">{errors.email.message}</span>)}
//             </div>

//             <div className="form-group">
//                 <label htmlFor="phone">Phone</label>
//                 <input type="text" className="form-control" {...register("phone", { required: true })}></input>
//                 {errors.phone && (<span className="field_level_error">{errors.phone.message}</span>)}
//             </div>

//             <div className="form-group">
//                 <label htmlFor="password">Password</label>
//                 <input type="text" className="form-control" {...register("password", { required: true })}></input>
//                 {errors.password && (<span className="field_level_error">{errors.password.message}</span>)}
//             </div>

//             <div className="form-group">
//                 <label htmlFor="confirmPassword"> Confirm Password</label>
//                 <input type="text" className="form-control" {...register("confirmPassword", { required: true })}></input>
//                 {errors.confirmPassword && (<span className="field_level_error">{errors.confirmPassword.message}</span>)}
//             </div>

//             <button type="submit" className="btn btn-primary mt-2">submit</button>

//         </form>)
// }
// export default UserRegistrationForm;

import React, { useEffect } from "react";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { FormGroup, Checkbox } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"
import "../App.css"
const schema = yup.object({
  firstName: yup.string().required("first name is required"),
  lastName: yup.string().required("last name is required"),
  email: yup.string().email("Must be email type").required("last name is required"),
  phone: yup.string().required("Phone is required"),
  address: yup.string().required("address is required"),
  gender: yup.string().required("gender is required"),
  isEmployee: yup.string().required("Employee type must be required"),
  employmentStatus: yup.string().required("Employment Status must be required"),
  termsAndCondition: yup.boolean().required("termsAndCondition is required"),

})
const UserRegistration = () => {
  const { handleSubmit, control, formState: { errors }, watch, setValue } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      gender: "",
      isEmployee: "",
      employmentStatus: "",
      termsAndCondition:false

    },
    resolver: yupResolver(schema)
  })
  // const isEmployee = watch('isEmployee')
  // useEffect(() => {
  //   setValue("employmentStatus", isEmployee === 'yes' ? "employed" : "unemployed")
  // })
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // Handle form submission logic here
  // };
  const onSubmit = (values) => {
    console.log(values);
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
            rules={{ required: true }}
            render={({ field }) => (
              <OutlinedInput {...field} id="firstName" label="First Name"  />
            )}
          />
          {errors.firstName && (<span className="field_level_error">{errors.firstName.message}</span>)}
        </FormControl>

        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="lastName">Last Name</InputLabel>
          <Controller
            name="lastName"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <OutlinedInput {...field} id="lastName" label="Last Name"  />
            )}
          />
           {errors.lastName && (<span className="field_level_error">{errors.lastName.message}</span>)}

        </FormControl>

        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="email">Email</InputLabel>
          <Controller
            name="email"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <OutlinedInput {...field} id="email" label="Email" />
            )}
          />
                    {errors.email && (<span className="field_level_error">{errors.email.message}</span>)}

        </FormControl>

        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="phone">Phone</InputLabel>
          <Controller
            name="phone"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <OutlinedInput {...field} id="phone" label="Phone"  />
            )}
          />
                    {errors.phone && (<span className="field_level_error">{errors.phone.message}</span>)}

        </FormControl>

        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="address">Address</InputLabel>
          <Controller
            name="address"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <OutlinedInput {...field} id="address" label="Address"  />
            )}
          />
                    {errors.address && (<span className="field_level_error">{errors.address.message}</span>)}

        </FormControl>

        <FormControl component="fieldset" sx={{ m: 1 }}>
          <FormLabel component="legend">Gender</FormLabel>
          <Controller
            name="gender"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <RadioGroup row name="gender" {...field} >
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
              </RadioGroup>)}
          />
                    {errors.gender && (<span className="field_level_error">{errors.gender.message}</span>)}

        </FormControl>

        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="isEmployee">Are you Employed?</InputLabel>
          <Controller
            name="isEmployee"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Select {...field} id="isEmployee" labelId="label" label="Are you Employed?">
                <MenuItem value="yes">Yes</MenuItem>
                <MenuItem value="no">No</MenuItem>
              </Select>
            )}
          />
                    {errors.isEmployee && (<span className="field_level_error">{errors.isEmployee.message}</span>)}

        </FormControl>

        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="employmentStatus">Employment Status?</InputLabel>
          <Controller
            name="employmentStatus"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Select {...field} id="employmentStatus" labelId="label" label="Employment Status?">
                <MenuItem value="employed">Employed</MenuItem>
                <MenuItem value="unEmployed">UnEmployed</MenuItem>
              </Select>

            )}
          />
                    {errors.employmentStatus && (<span className="field_level_error">{errors.employmentStatus.message}</span>)}

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



        <Button type="submit" variant="contained" color="success" fullWidth sx={{ m: 1 }}>
          Submit
        </Button>
      </form>
    </>
  );
};

export default UserRegistration;
