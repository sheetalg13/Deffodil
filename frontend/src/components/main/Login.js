import { useFormik } from 'formik';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = () => {

  const navigate  = useNavigate();

  const loginForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      console.log(values);
      const res = await fetch("http://localhost:5000/user/authenticate", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(res.status);

      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Nice",
          text: "You have successfully logged in",
        });

        const data = await res.json();
        if(data.role==='admin'){
          sessionStorage.setItem('admin', JSON.stringify(data));
          navigate('/admin/manageshop');
        }

      } else if (res.status === 401) {
        Swal.fire({
          icon: "error",
          title: "Error!!",
          text: "Invalid Credentials",
        });
      }
    },
  });

  return (
    <div className="vh-100 bg-image"
    style={{
      backgroundImage:
        'url("https://images.pexels.com/photos/9020063/pexels-photo-9020063.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
    }} >
    <div className="card w-50 mx-auto mt-5">
      <div className="card-body">

        <form onSubmit={loginForm.handleSubmit}>
          <div className="mb-md-5 mt-md-4 pb-5 ">
            <h2 className="fw-bold mb-2 text-uppercase d-flex justify-content-center ">Login</h2>
            <p className=" mb-5 d-flex justify-content-center">
              Please enter your login and password!
            </p>
            <div className="form-white mb-4">
              <label className="form-label" htmlFor="typeEmailX">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={loginForm.values.email}
                onChange={loginForm.handleChange}
                className="form-control form-control-lg"
              />
            </div>
            <div className=" form-white mb-4">
              <label className="form-label" htmlFor="typePasswordX">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={loginForm.values.password}
                onChange={loginForm.handleChange}
                className="form-control form-control-lg"
              />
            </div>
            <p className="small pb-lg-2 d-flex justify-content-center">
              <a className="" href="#!">
                Forgot password?
              </a>
            </p>
            <div className='d-flex  justify-content-center'>
            <button
              className="btn btn-outline-primary btn-lg px-5"
              type="submit" >
              Login
            </button>
            </div>
          </div>
          
    
        </form>
      </div>
    </div>
</div>
  )
}

export default Login;
