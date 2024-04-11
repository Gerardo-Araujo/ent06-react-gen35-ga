import { useForm } from "react-hook-form";
import UseAuth from "../hooks/useAuth";
import '../components/styles/RegisterPage.css'


const RegisterPage = () => {

  const { register, handleSubmit, reset } = useForm()

  const { registerUser } = UseAuth()

  const submit = data => {
    registerUser(data)
    reset({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      gender: 'unknown'
    })
  }

  return (
    <div className="contenedor-register">
      <form className="form-init" onSubmit={handleSubmit(submit)}>
        <h2>Register</h2>
        <div className="campo">
        <label>
          <span>First Name</span>

          <input{...register('firstName')} type="text" />
        </label>
        </div>
        <div className="campo">
        <label>
          <span>Last Name</span>

          <input {...register('lastName')} type="text" />
        </label>
        </div>
        <label>
          <span>Email</span>

          <input {...register('email')} type="email" />
        </label>
        <div className="campo">
        <label>
          <span>Password</span>

          <input {...register('password')} type="password" />
        </label>
        </div>
        <div className="campo">
        <label>
          <span>Gender</span>

          <select {...register('gender')}>
            <option value='unknown'>Unknown</option>
            <option value='male'>Male</option>
            <option value='female'>Female</option>
            <option value='other'>I prefer don't say it</option>
          </select>
        </label>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default RegisterPage;
