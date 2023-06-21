import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import app_config from '../../config';

const Listflower = () => {

  const { id } = useParams();
  const { apiUrl } = app_config;

  const [flowersList, setFlowersList] = useState([]);

  const fetchFlowerData = async () => {
    const res = await fetch(apiUrl + '/flower/getbyshop/' + id);

    console.log(res.status);

    const data = await res.json();

    console.log(data);
    setFlowersList(data);
  }

  useEffect(() => {
    fetchFlowerData();
  }, [])

  const dislpayFlowers = () => {
    return flowersList.map(flower => (
      <div className="col-lg-4 col-md-12 mb-4">
        <div className="bg-image hover-zoom ripple shadow-1-strong rounded">
          <img
            src={apiUrl+'/'+flower.image}
            className="w-100"
          />
          <a href="#!">
            <div
              className="mask"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
            >
              <div className="d-flex justify-content-start align-items-start h-100">
                <h5>
                  <span className="badge bg-light pt-2 ms-3 mt-3 text-dark">
                    {flower.name}
                  </span>
                </h5>
              </div>
            </div>
            <div className="hover-overlay">
              <div
                className="mask"
                style={{ backgroundColor: "rgba(253, 253, 253, 0.15)" }}
              />
            </div>
          </a>
        </div>
        <div>
          <Link className='btn btn-primary' to={'/user/checkout/'+id} >Buy Now</Link>
        </div>
      </div>

    ))
  }


  return (
    <div>
      <div className='container'>

        <h1 className='text-center'>Browse Flowers</h1>
        <hr />
        <div className='row'>
          {dislpayFlowers()}
        </div>
      </div>
    </div>
  )
}

export default Listflower
