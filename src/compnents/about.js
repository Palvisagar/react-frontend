import React from 'react'
import Layout from './layout'
import Footer from './footer'
const About = () => {
  return (

    <div>
      <Layout/>
      {/* <!-- banner bottom --> */}
    <section class="w3ls-bnrbtm py-5" id="about">
        <div class="container py-xl-5 py-lg-3">
            <h3 class="title-w3 mb-md-5 mb-4 text-center text-bl font-weight-bold">Welcome To Our <span>Land
                    Site</span></h3>
            <div class="row">
                <div class="col-lg-6 text-center">
                    <img src="images/about.jpg" alt="about" class="img-fluid" />
                </div>
                <div class="col-lg-6 pr-xl-5 mt-xl-4 mt-lg-0 mt-4">
                    <h3 class="title-sub mb-4">The best place to find the <span>house you want.</span></h3>
                    <p class="sub-para">Donec consequat sapien ut leo cursus rhoncus. Nullam dui mi, vulputate ac metus
                        at, semper
                        varius orci. Nulla accumsan ac elit in congue. Class aptent taciti sociosqu ad litora torquent
                        per conubia.</p>
                    <p class="sub-para pt-4 mt-4 border-top">Donec consequat sapien ut leo cursus rhoncus. Nullam dui
                        mi, vulputate ac metus
                        at, semper varius orci. Nulla accumsan ac elit in congue. Class aptent taciti sociosqu ad
                        litora torquent per.</p>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- //banner bottom --> */}

    <Footer/>
    </div>
  )
}

export default About
