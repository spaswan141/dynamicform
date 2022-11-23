import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
const Form = () => {
  const classes = useStyles();
  const [age, setAge] = useState("");
  const [name, setName] = useState("");
  const [formFields, setFormFields] = useState([
    { house: "", city: "", country: "", state: "" },
  ]);

  const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;

    setFormFields(data);
  };
  var details=JSON.parse(localStorage.getItem('userList'))||[];

  const handleSubmit = (e) => {
    e.preventDefault();
    let payload = {
      name: name,
      age: age,
    };
    if(payload.name.length>5 && payload.age.length>0){
      alert("Your Information has been saved successfully")
      details.push({ ...formFields,...payload });
       localStorage.setItem("userList",JSON.stringify(details));
    }else{
      alert("Please Fill all the details Correctly")
    }
    
  };

  const addFields = () => {
    let object = {
      house: "",
      city: "",
      country: "",
      state: "",
    };

    setFormFields([...formFields, object]);
  };

  const removeFields = (index) => {
    let data = [...formFields];
    data.splice(index, 1);
    setFormFields(data);
  };

  return (
    <div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Form
          </Typography>
          <form onSubmit={handleSubmit} className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  error={name.length < 5 && name !== ""}
                  helperText={
                    name.length < 5 && name !== ""
                      ? "Enter First Name and Last Name"
                      : null
                  }
                  required={true}
                  fullWidth
                  id="firstName"
                  label="Full Name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  type="number"
                  variant="outlined"
                  error={age.length > 0 && age < 18}
                  helperText={
                    age < 18 && age.length !== 0
                      ? "Age Should be more than or equal to 18"
                      : null
                  }
                  required
                  fullWidth
                  id="lastName"
                  label="Age"
                  name="lastName"
                  value={age}
                  onChange={(e) => {
                    setAge(e.target.value);
                  }}
                  autoComplete="lname"
                />
              </Grid>
              {formFields.map((form, index) => {
                return (
                  <Container key={index}>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        error={form.house.length < 5 && form.house !== ""}
                        helperText={
                          form.house.length < 5 && form.house !== ""
                            ? "Please Enter Full House Address"
                            : null
                        }
                        id="email"
                        label="House/Block No."
                        placeholder="House/Block No."
                        name="house"
                        onChange={(event) => handleFormChange(event, index)}
                        value={form.house}
                        autoComplete="email"
                      />
                    </Grid>
                    <Grid style={{ display: "flex" }}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          autoComplete="fname"
                          variant="outlined"
                          required
                          error={form.city.length < 2 && form.city !== ""}
                          helperText={
                            form.city.length < 2 && form.city !== ""
                              ? "Please Enter Full city Name"
                              : null
                          }
                          fullWidth
                          label="City"
                          name="city"
                          placeholder="city"
                          onChange={(event) => handleFormChange(event, index)}
                          value={form.city}
                          autoFocus
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          type="text"
                          variant="outlined"
                          required
                          error={form.state.length < 2 && form.state !== ""}
                          helperText={
                            form.state.length < 2 && form.state !== ""
                              ? "Please Enter Valid State Name"
                              : null
                          }
                          fullWidth
                          label="State"
                          name="state"
                          placeholder="state"
                          onChange={(event) => handleFormChange(event, index)}
                          value={form.state}
                          autoComplete="state"
                        />
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        error={form.country.length < 2 && form.country !== ""}
                        helperText={
                          form.country.length < 2 && form.country !== ""
                            ? "Please Enter Valid country Name"
                            : null
                        }
                        required
                        fullWidth
                        label="Country"
                        placeholder="Country"
                        name="country"
                        onChange={(event) => handleFormChange(event, index)}
                        value={form.country}
                        autoComplete="country"
                      />
                    </Grid>
                    <Button
                      style={{
                        backgroundColor: "grey",
                        marginBottom: "10px",
                        marginTop: "5px",
                      }}
                      onClick={() => removeFields(index)}
                    >
                      Remove
                    </Button>
                  </Container>
                );
              })}

              <br />
            </Grid>
            <Button
              style={{ backgroundColor: "green", marginTop: "5px" }}
              onClick={addFields}
            >
              Add Address
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Submit Information
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Form;
