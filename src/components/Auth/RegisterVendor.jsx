import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { registerVendor } from "../../redux/actions/user";
import "./registerVendor.scss";
import { createShop } from "../../redux/actions/vendor";


const RegisterVendor = () => {
    const options = ["PickUp Only", "Delivery Only", "Delivery and Pickup"];
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [shopName, setShopName] = useState('');
    const [shopDesc, setShopDesc] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [selected, setSelected] = useState(options[2]);
    const [image, setImage] = useState('');
    const [userImage, setUserImage] = useState('');
    const role = 'vendor';

    const dispatch = useDispatch();

    const submitHandler = e => {
        e.preventDefault();
        const myForm = new FormData();
        const shopForm = new FormData();

        myForm.append('name', name);
        myForm.append('username', username);
        myForm.append('email', email);
        myForm.append('password', password);
        myForm.append('phoneNo', phoneNo);
        myForm.append('role', role);
        myForm.append('file', userImage);

        shopForm.append('name', shopName);
        shopForm.append('email', email);
        shopForm.append('description', shopDesc);
        shopForm.append('service', selected);
        shopForm.append('file', image);

        dispatch(registerVendor(myForm));
        dispatch(createShop(shopForm));
    }

    return (
        <div className="registerVendor">
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
                    <h1>Vendor Register</h1>
                    <form onSubmit={submitHandler}>
                        <input
                            type="text"
                            placeholder="username"
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

                        />
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}

                        />
                        <input
                            type="text"
                            placeholder="Shop Name"
                            name="Shop Name"
                            required
                            value={shopName}
                            onChange={e => setShopName(e.target.value)}

                        />
                        {/* <textarea type='text' placeholder="Shop Description" minLength={10} name="Desciption" value={shopDesc} required onChange={e => setShopDesc(e.target.value)}> */}

                        {/* </textarea> */}
                        <input
                            type="text"
                            placeholder="Shop Desc"
                            name="ShopDesc"
                            required
                            value={shopDesc}
                            onChange={e => setShopDesc(e.target.value)}
                        />
                        <label htmlFor="service">Select Service</label>
                        <select
                            value={selected} id="service"
                            onChange={(e) => setSelected(e.target.value)}>
                            {options.map((value) => (
                                <option value={value} key={value}>
                                    {value}
                                </option>
                            ))}
                        </select>
                        <label htmlFor="shopImage">Select User Image</label>
                        <input type="file" accept="image/*" id='userImage' placeholder="User Image" onChange={e => setUserImage(e.target.files[0])} />

                        <label htmlFor="shopImage">Select Shop Image</label>
                        <input type="file" accept="image/*" id='shopImage' placeholder="Shop Image" onChange={e => setImage(e.target.files[0])} />

                        <input
                            type='tel'
                            placeholder="phone no"
                            name="phone no"
                            required
                            value={phoneNo}
                            onChange={e => setPhoneNo(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            required
                            value={password}
                            onChange={e => setPassword(e.target.value)}

                        />

                        <button type='submit'>Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default RegisterVendor;