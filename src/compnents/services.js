import React from 'react'
import Layout from './layout'
import Footer from './footer'
const Services = () => {
  return (
    <>
    <Layout/>
    {/* // <!-- services --> */}
    <div class="w3pvtits-services py-5" id="services">
        <div class="container py-xl-5 py-lg-3">
            <h3 class="title-w3 mb-2 text-center text-wh font-weight-bold">We Provide The <span>Best Services</span>
            </h3>
            <p class="text-li text-center title-w3 mb-md-5 mb-4">Excepteur sint occaecat cupidatat</p>
            <div class="row w3pvtits-services-row text-center pt-4">
                <div class="col-lg-4">
                    <div class="w3pvtits-services-grids">
                        <div class="icon-effect-wthree">
                            <span class="fa fa-home ser-icon"></span>
                        </div>
                        <h4 class="text-bl my-4">Service 1</h4>
                        <p class="text-left">Itaque earum rerum hic tenetur asap iente delectus rulla accumsan.</p>
                        <a class="service-btn btn mt-xl-5 mt-4" href="#">Read More<span
                                class="fa fa-long-arrow-right ml-2"></span></a>
                    </div>
                </div>
                <div class="col-lg-4 serv-w3mk my-lg-0 my-5">
                    <div class="w3pvtits-services-grids">
                        <div class="icon-effect-wthree">
                            <span class="fa fa-building ser-icon"></span>
                        </div>
                        <h4 class="text-bl my-4">Service 2 </h4>
                        <p class="text-left">Itaque earum rerum hic tenetur asap iente delectus rulla accumsan.</p>
                        <a class="service-btn btn mt-xl-5 mt-4" href="#">Read More<span
                                class="fa fa-long-arrow-right ml-2"></span></a>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="w3pvtits-services-grids">
                        <div class="icon-effect-wthree">
                            <span class="fa fa-university ser-icon"></span>
                        </div>
                        <h4 class="text-bl my-4">Service 3</h4>
                        <p class="text-left">Itaque earum rerum hic tenetur asap iente delectus rulla accumsan.</p>
                        <a class="service-btn btn mt-xl-5 mt-4" href="#">Read More<span
                                class="fa fa-long-arrow-right ml-2"></span></a>
                    </div>
                </div>
            </div>
        </div>
        <img src="images/img.png" alt="services" class="img-fluid img-posi-w3pvt" />
    </div>
    {/* // <!-- //services --> */}
    <Footer/>
</>
  )
  
}

export default Services
