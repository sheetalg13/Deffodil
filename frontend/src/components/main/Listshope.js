import React, { useEffect, useState } from 'react'
import app_config from '../../config';
import { NavLink } from 'react-router-dom';

const Listshope = () => {

  const [shopList, setShopList] = useState([]);
  const { apiUrl } = app_config;


  const fetchShopData = async () => {
    const res = await fetch(apiUrl + '/shop/getall');
    const data = await res.json();
    console.log(data);
    setShopList(data);
  }

  useEffect(() => {
    fetchShopData();
  }, [])

  const displayShopData = () => {
    return shopList.map((shop) => (
      <div className="row justify-content-center mb-3">
        <div className="col-md-12 col-xl-10">
          <div className="card shadow-0 border rounded-3">
            <div className="card-body">
              <div className="row">
                <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                  <div className="bg-image hover-zoom ripple rounded ripple-surface">
                    <img
                      src={apiUrl+'/'+ shop.coverimage}
                      className="w-100"
                    />
                    <a href="#!">
                      <div className="hover-overlay">
                        <div
                          className="mask"
                          style={{ backgroundColor: "rgba(253, 253, 253, 0.15)" }}
                        />
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-6">
                  <h5>{shop.title}</h5>
                  <div className="d-flex flex-row">
                    <div className="text-danger mb-1 me-2">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </div>
                    <span>310</span>
                  </div>
                  <div className="mt-1 mb-0 text-muted small">
                    <span>{shop.owner}</span>
                   
                  </div>
                  
                  <p className="text-truncate mb-4 mb-md-0">
                    {shop.address}
                  </p>
                </div>
                <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                 
                  <h6 className="text-success">Show</h6>
                  <div className="d-flex flex-column mt-4">
                    <NavLink to={"/main/browseflower/"+shop._id} className="btn btn-primary btn-sm" >
                      Details
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))
  }


  return (
    <div>
      <section style={{ backgroundColor: "#eee" }}>
        <div className="container py-5">
          {
            displayShopData()
          }

        </div>
      </section>

    </div>
  )
}

export default Listshope
