import React from 'react'
import Layout from './layout'
import Footer from './footer'
const Contact = () => {
  return (
    <>
    <Layout/>
    {/* <!-- contact--> */}
    <section class="contact py-5" id="contact">
        <div class="container py-xl-5 py-lg-3">
            <h3 class="title-w3 mb-2 text-center text-wh font-weight-bold">Contact <span>Us</span></h3>
            <p class="text-center text-li title-w3 mb-md-5 mb-4">Excepteur sint occaecat cupidatat</p>
            <div class="contact_grid_right pt-4">
                <form action="#" method="post">
                    <div class="row contact_left_grid">
                        <div class="col-lg-6 con-left">
                            <div class="form-group">
                                <input class="form-control" type="text" name="Name" placeholder="Name" required=""/>
                            </div>
                            <div class="form-group">
                                <input class="form-control" type="email" name="Email" placeholder="Email" required=""/>
                            </div>
                            <div class="form-group">
                                <input class="form-control" type="text" name="Subject" placeholder="Subject" required=""/>
                            </div>
                        </div>
                        <div class="col-lg-6 con-right">
                            <div class="form-group">
                                <textarea id="textarea" placeholder="Message" required=""></textarea>
                            </div>
                            <button class="form-control btn" type="submit">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
    {/* <!-- //Contact --> */}
    <Footer/>
    </>
  )
}

export default Contact
