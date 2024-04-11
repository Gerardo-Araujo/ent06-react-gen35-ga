import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import UserLogged from "../components/HomePage/UserLogged";
import { useState } from "react";
import '../components/styles/LoginPage.css'


const LoginPage = () => {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  const { register, handleSubmit, reset } = useForm();

  const { loginUser } = useAuth();

  const submit = (data) => {
    loginUser(data);
    reset({
      email: "",
      password: "",
    });
  };

if (localStorage.getItem('token')) {
  return (
  <UserLogged user={user} setUser={setUser} />)
}


  return (
    <div className="contenedor-login">
    <form className="form-init" onSubmit={handleSubmit(submit)}>
      <h3>Login</h3>
     
      <label className="campo">
        <span>Email</span>
        <input {...register("email")} type="email" />
      </label>
     
      <label className="campo">
        <span>Password</span>
        <input {...register("password")} type="password" />
      </label>
      
      <button>Submit</button>
    </form>
  </div>

  );
};

export default LoginPage;

