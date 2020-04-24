import React, { useEffect, useState } from "react";

import * as Yup from "yup";
import { Formik } from "formik";
import axios from "axios";

import {
  Box,
  Input,
  Button,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

const formValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(25, "Too Long!")
    .required("Name is required"),
  mobile: Yup.string()
    .min(2, "Too Short!")
    .max(25, "Too Long!")
    .min(6, "Password has to be longer than 6 characters!")
    .required("Valid password  is required"),
  email: Yup.string()
    .min(2, "Too Short!")
    .max(25, "Too Long!")
    .required("Email is required"),
  age: Yup.string()
    .min(2, "Too Short!")
    .max(25, "Too Long!")
    .required("Age  is required"),
  bloodgroup: Yup.string()
    .min(2, "Too Short!")
    .max(25, "Too Long!")
    .required("blood group is required"),
  address: Yup.string()
    .min(2, "Too Short!")
    .max(25, "Too Long!")
    .required("Address is required"),
});

const initialValues = {
  name: "",
  mobile: "",
  email: "",
  age: "",
  bloodgroup: "",
  address: "",
};

const index = () => {
  // For View data
  const [students, seStudents] = useState([]);

  const getData = async () => {
    try {
      const {
        data: { data },
      } = await axios.get("http://localhost:3000");
      // const response = await axios.get("http://localhost:3000");
      // const data = response.data.data;

      seStudents(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const addData =  (values) => {
    try {
      axios.post("http://localhost:3000", values);
      getData();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteData = (name) => {
    try {
       axios.delete(`http://localhost:3000?name=${name}`);
      getData();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={formValidationSchema}
      onSubmit={(values) => {
        addData(values);
      }}
    >
      {({
        values,
        handleChange,
        handleBlur,
        handleSubmit,
        errors,
        touched,
      }) => {
        // console.log(errors);
        return (
          <form onSubmit={handleSubmit}>
            <div>
              <Box
                style={{
                  height: "auto",
                  width: "90%",
                  backgroundColor: "white",
                  marginLeft: "60px",
                  marginTop: "30px",
                  boxShadow: "  1px 4px  7px 5px #E5E5E5",
                }}
              >
                <Box style={{ display: "flex" }}>
                  <Box
                    style={{
                      flex: 2,
                      padding: "0px 20px",
                      height: "100%",
                      backgroundColor: "white",
                    }}
                  >
                    <Box
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "spacebetween",
                      }}
                    >
                      <Box>
                        <Input
                          name="name"
                          value={values.name}
                          onChange={handleChange}
                          type="text"
                          placeholder="Full Name "
                          disableUnderline={true}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          style={{
                            borderRadius: "4px",
                            marginTop: "20px",
                            backgroundColor: "#F1F1F1",
                            marginRight: "20px",
                            padding: "10px",
                            border: "1px solid  #E5E5E5 ",
                          }}
                        ></Input>
                        <Typography style={{ fontSize: 12, color: "red" }}>
                          {touched.name && errors.name}
                        </Typography>
                      </Box>

                      <Box>
                        <Input
                          name="mobile"
                          value={values.mobile}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          type="number"
                          placeholder="Mobile No "
                          disableUnderline={true}
                          style={{
                            borderRadius: "4px",
                            marginTop: "20px",
                            backgroundColor: "#F1F1F1",
                            marginRight: "20px",
                            padding: "10px",
                            border: "1px solid  #E5E5E5 ",
                          }}
                        ></Input>
                        <Typography style={{ fontSize: 12, color: "red" }}>
                          {touched.mobile && errors.mobile}
                        </Typography>
                      </Box>
                    </Box>

                    <Box
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "spacebetween",
                      }}
                    >
                      <Box>
                        <Input
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          type="text"
                          placeholder="Email "
                          disableUnderline={true}
                          style={{
                            borderRadius: "4px",
                            marginTop: "20px",
                            backgroundColor: "#F1F1F1",
                            marginRight: "20px",
                            padding: "10px",
                            border: "1px solid  #E5E5E5 ",
                          }}
                        ></Input>
                        <Typography style={{ fontSize: 12, color: "red" }}>
                          {touched.email && errors.email}
                        </Typography>
                      </Box>
                      <Box>
                        <Input
                          name="age"
                          value={values.age}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          type="number"
                          placeholder="Age "
                          disableUnderline={true}
                          style={{
                            borderRadius: "4px",
                            marginTop: "20px",
                            backgroundColor: "#F1F1F1",
                            marginRight: "20px",
                            padding: "10px",
                            border: "1px solid  #E5E5E5 ",
                          }}
                        ></Input>
                        <Typography style={{ fontSize: 12, color: "red" }}>
                          {touched.age && errors.age}
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "spacebetween",
                      }}
                    >
                      <Box>
                        <Input
                          name="bloodgroup"
                          value={values.bloodgroup}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          type="text"
                          placeholder="Blood Group"
                          disableUnderline={true}
                          style={{
                            borderRadius: "4px",
                            marginTop: "20px",
                            backgroundColor: "#F1F1F1",
                            marginRight: "20px",
                            padding: "10px",
                            border: "1px solid  #E5E5E5 ",
                          }}
                        ></Input>
                        <Typography style={{ fontSize: 12, color: "red" }}>
                          {touched.bloodgroup && errors.bloodgroup}
                        </Typography>
                      </Box>
                      <Box>
                        <Input
                          name="address"
                          value={values.address}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          type="text"
                          placeholder="Address "
                          disableUnderline={true}
                          style={{
                            borderRadius: "4px",
                            marginTop: "20px",
                            backgroundColor: "#F1F1F1",
                            marginRight: "20px",
                            padding: "10px",
                            border: "1px solid  #E5E5E5 ",
                          }}
                        ></Input>
                        <Typography style={{ fontSize: 12, color: "red" }}>
                          {touched.address && errors.address}
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-around",
                      }}
                    >
                      <Button
                        style={{
                          marginTop: "40px",
                          padding: "10px",
                          marginBottom: "20px",
                        }}
                        variant="contained"
                        color="primary"
                        type="submit"
                      >
                        Submit
                      </Button>
                      <Button
                        style={{
                          marginTop: "40px",
                          padding: "10px",
                          marginBottom: "20px",
                          backgroundColor: "#898895",
                        }}
                        variant="contained"
                        color="black"
                        backgroundColor="#898895"
                      >
                        Reset
                      </Button>
                    </Box>
                  </Box>
                  <Box
                    style={{
                      flex: 2,
                      padding: "0px 20px",
                      height: "100%",
                      backgroundColor: "green",
                    }}
                  >
                    {/* Fetch data from the database and show the table  */}
                    <Box>
                      <TableContainer
                        component={Paper}
                        style={{
                          marginTop: "30px",
                          marginLeft: "20px",
                          marginRight: "20px",
                          marginBottom: "30px",
                          width: "95%",
                        }}
                      >
                        <Table
                          size="small"
                          aria-label="a dense table"
                          style={{ width: "600px" }}
                        >
                          <TableHead>
                            <TableRow>
                              <TableCell align="center">Name</TableCell>
                              <TableCell align="center">Mobile</TableCell>
                              <TableCell align="center">Email</TableCell>
                              <TableCell align="center">Blood</TableCell>
                              <TableCell align="center">Age</TableCell>
                              <TableCell align="center">Address</TableCell>
                              <TableCell align="center">Action</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {students.map((row) => (
                              <TableRow key={row.id}>
                                <TableCell align="center">{row.name}</TableCell>
                                <TableCell align="center">
                                  {row.mobile}
                                </TableCell>
                                <TableCell align="center">
                                  {row.email}
                                </TableCell>
                                <TableCell align="center">
                                  {row.bloodgroup}
                                </TableCell>
                                <TableCell align="center">{row.age}</TableCell>
                                <TableCell align="center">
                                  {row.address}
                                </TableCell>
                                <TableCell align="center">
                                  <Button onClick={() => deleteData(row.name)}>
                                    <DeleteIcon />
                                  </Button>
                                  <Button
                                    onClick={() => setSelectedStudent(row)}
                                  >
                                    <EditIcon />
                                  </Button>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Box>

                    {/* Table part end  */}
                  </Box>
                </Box>
              </Box>
            </div>
          </form>
        );
      }}
    </Formik>
  );
};
export default index;
