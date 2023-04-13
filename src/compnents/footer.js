import React from 'react'

function Footer() {
  return (
    <>
          {/* <!-- copyright --> */}
    <div class="copyright-w3ls py-4">
        <div class="container">
            <div class="row">
                {/* <!-- copyright --> */}
                <p class="col-md-8 copy-right-grids text-wh text-lg-left text-center mt-lg-2">© 2023 WonderHomz. All
                    Rights Reserved | Design by |<strong>Pallvi Sagar</strong>
                </p>
                {/* <!-- //copyright --> */}
                {/* <!-- social icons --> */}
                <div class="col-lg-4 w3social-icons text-lg-right text-center mt-lg-0 mt-3">
                    <ul>
                        <li>
                            <a href="#" class="rounded-circle">
                                <span class="fa fa-facebook-f"></span>
                            </a>
                        </li>
                        <li class="px-2">
                            <a href="#" class="rounded-circle">
                                <span class="fa fa-google-plus"></span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="rounded-circle">
                                <span class="fa fa-twitter"></span>
                            </a>
                        </li>
                        <li class="pl-2">
                            <a href="#" class="rounded-circle">
                                <span class="fa fa-dribbble"></span>
                            </a>
                        </li>
                    </ul>
                </div>
                {/* <!-- //social icons --> */}
            </div>
        </div>
    </div>
    {/* <!-- //copyright --> */}
    </>
  )
}

export default Footer
