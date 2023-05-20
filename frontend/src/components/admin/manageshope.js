import { useFormik } from 'formik';
import React, { useState } from 'react'
import Swal from 'sweetalert2';
import app_config from '../../config';
const {apiUrl} = app_config;

const AddShopData = () => {

  const [uploadedImage, setUploadedImage] = useState('');
//to upload image
  const uploadImage = (e) => {
    const file = e.target.files[0];
    setUploadedImage(file);
    const fd = new FormData();
    fd.append("myfile", file);
    fetch(apiUrl + "/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        console.log("file uploaded");
      }
    });
  }

  const manageshopForm = useFormik({
    initialValues: {
      title: "",
      owner: "",
      address: "",
      coverimage: "",
      createdAt: new Date(),
    },
    onSubmit: async (values, { setSubmitting }) => {
      // setSubmitting(true);
      values.coverimage = uploadedImage.name;
      console.log(values);

      const res = await fetch("http://localhost:5000/shop/add", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(res.status);

      if (res.status === 200) {

        Swal.fire({
          icon: 'success',
          title: 'Nice',
          text: 'You have successfully registered'
        })

      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops!!',
          text: 'Something went wrong'
        })
      }
    },
    // validationSchema: SignupSchema,
  });


  return (
    <div className='d-flex justify-content-center PY -5 vh-100 w-75' style={{ backgroundSize: 'cover', backgroundImage: 'url("https://images.pexels.com/photos/768939/pexels-photo-768939.jpeg?auto=compress&cs=tinysrgb&w=600")' }}>
      <div className='card w-50 h-75 mt-5' >
        <div className='card-body'>
          <h5 className='card-title text-center'>ADD SHOP DETAILS</h5>
          <div >
            <form onSubmit={manageshopForm.handleSubmit}>
              

              <div className='mb-4'>
                <label className='class-lable'>Title</label>
                <input type='text'
                  id="title"
                  value={manageshopForm.values.title}
                  onChange={manageshopForm.handleChange}
                  className="form-control form-control-lg"
                />
              </div>


              <div className='mb-4'>
                <label className='class-lable'>Owner</label>
                <input type='text'
                  id="owner"
                  value={manageshopForm.values.owner}
                  onChange={manageshopForm.handleChange}
                  className="form-control form-control-lg" />
              </div>


              <div className='mb-4'>
                <label className='class-lable'>Address</label>
                <input type='text'
                  id="address"
                  value={manageshopForm.values.address}
                  onChange={manageshopForm.handleChange}
                  className="form-control form-control-lg" />
              </div>


              <div className='mb-4'>
                <label className='class-lable'>coverimage</label>
                <input type='file'
                  onChange={uploadImage}
                  className="form-control form-control-lg" />
              </div>
              <div className='card-footer '>
              <button className='btn btn-success btn-lg d-flex justify-content-center ' type='submit'>Submit</button>
              </div>
            </form>

          </div>

        </div>
      </div>
    </div>
  )
}

const Manageshope = () => {
  return (
    <div>
      <AddShopData />
    </div>
  )
}

export default Manageshope;
