import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast  from "react-hot-toast";
import '../../Styles/AuthStyles.css'


const Register = () => {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setphone] = useState("");
  const [address, setaddress] = useState("");
  const navigate = useNavigate();

  //form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    debugger;
    try {
      const res = await axios.post(
        '/api/v1/auth/register',
        { name, email, password, phone, address }
      );
      if(res.data.success){
        toast.success(res.data.message);
        navigate("/login")
      }
      else{
        toast.error(res.data.message)
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <div>
      <Layout title={"Register Apna Dukaan"}>
        <div className="form-container">
          <h1>Register form</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                value={name}
                onChange={(e) => setname(e.target.value)}
                className="form-control"
                id="exampleInputName"
                placeholder="Name"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                id="exampleInputEmail"
                placeholder="Email
                "
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="number"
                value={phone}
                onChange={(e) => setphone(e.target.value)}
                className="form-control"
                id="exampleInputNumber"
                placeholder="phone"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                value={address}
                onChange={(e) => setaddress(e.target.value)}
                className="form-control"
                id="exampleInputAddress"
                placeholder="Address"
                required
              />
            </div>

            <button
              type="submit"
              style={{ width: "100%" }}
              className="btn btn-primary"
              onClick={() => {}}
            >
              Register
            </button>
          </form>
        </div>
      </Layout>
    </div>
  );
};

export default Register;
