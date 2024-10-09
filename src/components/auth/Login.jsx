import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [passwordValue, setPasswordValue] = useState('');

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  const handlePasswordFocus = () => {
    setIsPasswordFocused(true);
  };

  const handlePasswordBlur = () => {
    if (!passwordValue) {
      setIsPasswordFocused(false);
    }
  };

  const handlePasswordChange = (event) => {
    setPasswordValue(event.target.value);
  };

  const navigate = useNavigate();

  const goToRegister = () => {
    navigate('/auth/register');
  };

  const goToResetPassword = () => {
    navigate('/auth/reset-password');
  };

  return (
    <div>
      <h1 className="text-3xl mx-auto text-center mb-6">Login</h1>
      <form className="m-6 bg-transparentbg outline outline-basicblue outline-4 rounded-lg p-6 min-w-[200px] max-w-[400px] mx-auto">
        <div className="mb-3">
          <TextField
            id="outlined-textarea"
            size="small"
            label="Email"
            placeholder="yourname@gmail.com"
            fullWidth
          />
        </div>
        <div className="mb-3">
          <FormControl variant="outlined" fullWidth>
            <InputLabel
              htmlFor="outlined-adornment-password"
              className={`transition-all duration-200 ${
                isPasswordFocused || passwordValue ? 'mt-0' : '-mt-2'
              }`}
            >
              Password
            </InputLabel>
            <OutlinedInput
              size="small"
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              value={passwordValue}
              onFocus={handlePasswordFocus}
              onBlur={handlePasswordBlur}
              onChange={handlePasswordChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    onMouseUp={handleMouseUpPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
        </div>

        <div className="mb-4">
          <Button variant="contained" color="success" fullWidth>
            Submit
          </Button>
        </div>

        <div className="text-center mb-2">
          <span>---or---</span>
        </div>

        <div className="text-center">
          <div className="mb-2">
            <a onClick={goToRegister} className="hover:underline cursor-pointer">
              Create account
            </a>
          </div>
          <div>
            <a onClick={goToResetPassword} className="hover:underline cursor-pointer">
              I forgor password :(
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
