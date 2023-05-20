import React from 'react'

const Manageusers = () => {
  return (
    <div className=' w-75 d-flex justify-content-center '>
      <section className="vh-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black " style={{ borderRadius: 25 }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="h1 fw-bold mb-5 mx-1 mx-md-4 mt-4 d-flex justify-content-center">
                        USERS DETAILS
                      </p>
                      <form className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" htmlFor="form3Example3c">
                              NAME
                            </label>
                            <input
                              type="email"
                              id="form3Example3c"
                              className="  form-control-lg"
                            />

                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" htmlFor="form3Example3c">
                              EMAIL
                            </label>
                            <input
                              type="email"
                              id="form3Example3c"
                              className="  form-control-lg"
                            />

                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">

                            <label className="form-label" htmlFor="form3Example4c">
                              PASSWARD
                            </label>
                            <input
                              type="password"
                              id="form3Example4c"
                              className=" form-control-lg"
                            />
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" htmlFor="form3Example3c">
                              ROLE
                            </label>
                            <input
                              type="email"
                              id="form3Example3c"
                              className="  form-control-lg"
                            />

                          </div>
                        </div>


                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="button" className="btn btn-primary btn-lg">
                            SUBMIT
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://images.pexels.com/photos/7416686/pexels-photo-7416686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        className="img-fluid"
                        alt="Sample image"
                      />
                    </div>
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

export default Manageusers
