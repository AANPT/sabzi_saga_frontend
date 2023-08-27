import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { register } from "../../redux/actions/user";
import "./register.scss";


const Register = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [image, setImage] = useState('');
  const dispatch = useDispatch();

  const submitHandler = e => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.append('name', name);
    myForm.append('username', username);
    myForm.append('email', email);
    myForm.append('password', password);
    myForm.append('phoneNo', phoneNo);
    myForm.append('file', image);
    dispatch(register(myForm));
  }

  return (
    <div className="register">
      <div className="cards">
        <div className="left">
          <h1>SabziSaga</h1>
          <p>
            "Mastering Your Online Grocery Experience: A Guide to Registering on the Sabzi Website"
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="Username"
              name="username"
              required
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
            <input
              type="text"
              placeholder="Name"
              name="name"
              required
              value={name}
              onChange={e => setName(e.target.value)}
            //onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            //onChange={handleChange} 
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
            //onChange={handleChange}
            />
            <input
              type='tel'
              placeholder="phone no"
              name="phone no"
              required
              value={phoneNo}
              onChange={e => setPhoneNo(e.target.value)}
            />
            <label
              htmlFor="ProductImage"
              className="form-label"
              style={{ color: "#052A2A", margin: "-9px" }}
            >
              User Image
            </label>
            <input
              type="file" accept="image/*"
              id='userImage'
              placeholder="User Image"
              className="form-control"
              onChange={e => setImage(e.target.files[0])}
            />
            <button type='submit'>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Register;
