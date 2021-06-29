import {
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  Link,
} from '@material-ui/core';
import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { FormLabel } from '@material-ui/core';

const useStyles = makeStyles({
  signIn: {
    position: 'relative',
    width: '100vw',
    height: '100vh',
    fontsize: 15,
    backgroundImage: 'url(images/bg2.jpg)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  paper: {
    color: 'white',
    padding: 50,
    maxWidth: 360,
    position: 'relative',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgba(5,8,95, .9)',
  },
  tittle: {
    padding: '30px 0 60px',
  },
});

const WhiteCheckbox = withStyles({
  root: {
    color: 'white',
    '&$checked': {
      color: 'white',
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const CssTextField = withStyles({
  root: {
    '& .MuiInputBase-input': {
      color: 'white',
    },
    '& .MuiInput-underline:before': {
      borderBottomColor: 'rgba(0, 0, 0, 0.87)',
    },
    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
      borderBottomColor: 'white',
    },
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
  },
})(TextField);

export default function Signin() {
  const classes = useStyles();
  const inputStyle = { margin: '10px 0', '&>input': { color: 'white' } };

  return (
    <Grid className={classes.signIn}>
      <Paper elevation={10} className={classes.paper}>
        <form>
          <Grid align="center" className={classes.tittle}>
            <h2>Sign In</h2>
          </Grid>
          <div style={inputStyle}>
            <FormLabel style={{ color: 'white' }}>Tài khoản:</FormLabel>
            <CssTextField fullWidth required></CssTextField>
          </div>
          <div style={inputStyle}>
            <FormLabel style={{ color: 'white' }}>Mật khẩu:</FormLabel>
            <CssTextField type="password" fullWidth required></CssTextField>
          </div>

          <FormControlLabel
            control={<WhiteCheckbox name="checkedB" />}
            label="Nhớ mật khẩu"
          />

          <Button
            style={{ margin: '20px 0' }}
            type="submit"
            color="primary"
            variant="contained"
            fullWidth
          >
            Đăng nhập
          </Button>
          <Typography>
            <Link href="/forgot-password" color="inherit" underline="always">
              Forgot password?
            </Link>
          </Typography>
          <Typography>
            <span>Chưa có tài khoản? </span>
            <Link href="/sign-up" color="inherit" underline="always">
              Đăng ký
            </Link>
          </Typography>
        </form>
      </Paper>
    </Grid>
  );
}