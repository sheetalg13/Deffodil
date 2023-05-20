import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import app_config from '../../config';
const { apiUrl } = app_config;


const Manageflowers = () => {

  const [uploadedImage, setUploadedImage] = useState('');
  const [shopList, setShopList] = useState([]);
  const [selShop, setSelShop] = useState('');

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

  const fetchShopData = async () => {
    const res = await fetch(apiUrl + '/shop/getall');
    const data = await res.json();
    console.log(data);
    setShopList(data);
    setSelShop(data[0]._id);
  }

  useEffect(() => {
    fetchShopData();
  }, [])



  const flowerSubmit = useFormik({
    initialValues: {
      name: "",
      color: "",
      category: "",
      price: "",
    },
    onSubmit: async (values, { setSubmitting }) => {
      // setSubmitting(true);
      values.image = uploadedImage.name;
      values.shop = selShop;
      console.log(values);

      const res = await fetch(apiUrl + "/flower/add", {
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

  })




  return (
    <div>
      <section className="h-50 bg-dark">
        <div className="container py-5 h-75">
          <div className="row d-flex justify-content-center  h-100">
            <div className="col">
              <div className="card card-registration my-4">
                <div className="row g-0">

                  <div className="col-xl-6 d-none d-xl-block">
                    <img
                      src="https://images.pexels.com/photos/3699859/pexels-photo-3699859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="Sample photo"
                      className="img-fluid "
                      style={{
                        borderTopLeftRadius: ".25rem",
                        borderBottomLeftRadius: ".25rem"
                      }}
                    />
                  </div>

                  <div className="col-xl-5">

                    <form onSubmit={flowerSubmit.handleSubmit}>

                      <div className="card-body p-md-5 text-black">
                        <h3 className="mb-5 text-uppercase">
                          ADD FLOWERS DETAILS
                        </h3>
                        <div className="row">
                          {/* <div className="col-md-6 mb-4"> */}


                          <div className="col-md-6">
                            <label className="form-label " htmlFor="">SELECT SHOP</label>
                            <select className='form-control'
                              onChange={e => setSelShop(e.target.value)}>
                              {
                                shopList.map(shop => (
                                  <option value={shop._id}>{shop.title}</option>
                                ))
                              }
                            </select>
                          </div>

                          <div className="col-md-6">
                            <label className="form-label" htmlFor="form3Example1m">
                              NAME
                            </label>
                            <input
                              type="text"
                              id="name"
                              className=" form-control-lg"
                              value={flowerSubmit.values.name}
                              onChange={flowerSubmit.handleChange}
                            />

                          </div>




                          {/* </div> */}

                        </div>


                        <div className="row">
                          <div className="col-md-6 ">

                            <label className="form-label" htmlFor="form3Example1m">
                              CATEGORY
                            </label>

                            <input
                              type="text"
                              id="category"
                              className=" form-control-lg"
                              value={flowerSubmit.values.category}
                              onChange={flowerSubmit.handleChange}
                            />
                          </div>

                          <div className="col-md-6">

                            <label className="form-label" htmlFor="form3Example1m1">
                              COLOUR
                            </label>
                              <select className="select form-control" >
                                <option value={"red"}>red</option>
                                <option value={"blue"}>blue</option>
                                <option value={"pink"}>pink</option>
                                <option value={"yellow"}>yellow</option>
                                <option value={"voilet"}>voilet</option>
                                <option value={"orange"}>orange</option>

                              </select>



                          </div>

                        </div>

                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <div className="">
                              <label className="form-label" htmlFor="form3Example1m">
                                PRICE
                              </label>
                              <input
                                type="number"
                                id="price"
                                className=" form-control-lg"

                                value={flowerSubmit.values.price}
                                onChange={flowerSubmit.handleChange}
                              />
                            </div>
                          </div>

                        </div>

                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <div className="">
                              <label className="form-label" htmlFor="form3Example1m">
                                IMAGE
                              </label>
                              <input type='file'
                                onChange={uploadImage}
                                className=" form-control-lg" />


                            </div>
                          </div>

                        </div>
                        <div className="d-flex justify-content-end pt-3">
                          <button type="button" className="btn btn-light btn-lg">
                            Reset all
                          </button>
                          <button type="submit" className="btn btn-warning btn-lg ms-2">
                            Submit form
                          </button>
                        </div>
                      </div>

                    </form>

                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}

export default Manageflowers



