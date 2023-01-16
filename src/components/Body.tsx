import { Avatar1, Avatar2, Avatar3 } from '../assets/imgs/avatar';
import { Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9 }from '../assets/imgs/img';

export function Body(){
    return (
        <div>
            <section className="section" id="about">

                <div className="container">

                    <div className="row align-items-center mr-auto">
                        <div className="col-md-4">
                            <h6 className="xs-font mb-0">nobis dolorem sapiente evenie.</h6>
                            <h3 className="section-title">About Us</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum sunt, unde aperiam aliquid quia repudiandae, ex harum quis amet delectus maxime, tempora possimus aut laboriosam magni corrupti labore. Doloremque, sit?</p>

                            <a href="javascript:void(0)">Read more...</a>
                        </div>
                        <div className="col-sm-6 col-md-4 ml-auto">
                            <div className="widget">
                                <div className="icon-wrapper">
                                    <i className="ti-calendar"></i>
                                </div>
                                <div className="infos-wrapper">
                                    <h4 className="text-primary">15+</h4>
                                    <p>onsectetur perspiciatis</p>
                                </div>
                            </div>
                            <div className="widget">
                                <div className="icon-wrapper">
                                    <i className="ti-face-smile"></i>
                                </div>
                                <div className="infos-wrapper">
                                    <h4 className="text-primary">125+</h4>
                                    <p>onsectetur perspiciatis</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4">
                            <div className="widget">
                                <div className="icon-wrapper">
                                    <i className="ti-star"></i>
                                </div>
                                <div className="infos-wrapper">
                                    <h4 className="text-primary">3434+</h4>
                                    <p>onsectetur perspiciatis</p>
                                </div>
                            </div>
                            <div className="widget">
                                <div className="icon-wrapper">
                                    <i className="ti-user"></i>
                                </div>
                                <div className="infos-wrapper">
                                    <h4 className="text-primary">80+</h4>
                                    <p>onsectetur perspiciatis</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h6 className="xs-font mb-0">Blanditiis unde illum earum</h6>
                    <h3 className="section-title mb-4">Expertises</h3>

                    <div className="row text-center">
                        <div className="col-lg-4">
                            <a href="javascript:void(0)" className="card border-0 text-dark">
                                <Img5/>
                                <span className="card-body">
                                    <h4 className="title mt-4">Codding &amp; Designing</h4>
                                    <p className="xs-font">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                </span>
                            </a>
                        </div>
                        <div className="col-lg-4">
                            <a href="javascript:void(0)" className="card border-0 text-dark">
                                <Img6/>
                                <span className="card-body">
                                    <h4 className="title mt-4">Graphic Design</h4>
                                    <p className="xs-font">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                </span>
                            </a>
                        </div>
                        <div className="col-lg-4">
                            <a href="javascript:void(0)" className="card border-0 text-dark">
                                <Img7/>
                                <span className="card-body">
                                    <h4 className="title mt-4">Development</h4>
                                    <p className="xs-font">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="portfolio">
                <div className="container">
                    <h6 className="xs-font mb-0">Culpa perferendis excepturi.</h6>
                    <h3 className="section-title pb-4">Our Products</h3>
                </div>

                <div id="owl-portfolio" className="owl-carousel owl-theme mt-4">
                    <a href="javascript:void(0)" className="item expertises-item">
                        <Img1/>
                        <h6 className="mt-3 mb-2">Fuga asperiores</h6>
                        <p className="xs-font">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </a> 
                    <a href="javascript:void(0)" className="item expertises-item">
                        <Img2/>
                        <h6 className="mt-3 mb-2">Voluptatibus iure!</h6>
                        <p className="xs-font">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </a> 
                    <a href="javascript:void(0)" className="item expertises-item">
                        <Img3/>
                        <h6 className="mt-3 mb-2">Autem minus animi</h6>
                        <p className="xs-font">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </a> 
                    <a href="javascript:void(0)" className="item expertises-item">
                        <Img4/>
                        <h6 className="mt-3 mb-2">Sed eligendi</h6>
                        <p className="xs-font">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </a> 
                    <a href="javascript:void(0)" className="item expertises-item">
                        <Img8/>
                        <h6 className="mt-3 mb-2">Sed eligendi</h6>
                        <p className="xs-font">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </a> 
                    <a href="javascript:void(0)" className="item expertises-item">
                        <Img9/>
                        <h6 className="mt-3 mb-2">Sapiente dolore ut</h6>
                        <p className="xs-font">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </a>             
                </div>
            </section>


            <section className="section" id="testmonial">
                <div className="container">
                    <h6 className="xs-font mb-0">Culpa perferendis excepturi.</h6>
                    <h3 className="section-title">Testmonials</h3>

                    <div id="owl-testmonial" className="owl-carousel owl-theme mt-4">
                        <div className="item">
                            <div className="textmonial-item">
                                <Avatar1/>
                                <div className="des">
                                    <h5 className="ti-quote-left font-weight-bold"></h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ea facere voluptatum corrupti doloremque odit sequi labore rerum maiores libero.adipisicing elit. Vitae quasi voluptatem sed quaerat dolorum architecto reiciendis magni laboriosam, illum, nobis, quae dolor, ducimus libero! Sapiente deleniti sit dolor, ex possimus.</p>
                                    <h5 className="ti-quote-left text-right font-weight-bold"></h5>

                                    <div className="line"></div>
                                    <h6 className="name">Emma Re</h6>
                                    <h6 className="xs-font">Full stack developer</h6>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="textmonial-item">
                                <Avatar2/>
                                <div className="des">
                                    <h5 className="ti-quote-left font-weight-bold"></h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ea facere voluptatum corrupti doloremque odit sequi labore rerum maiores libero.adipisicing elit. Vitae quasi voluptatem sed quaerat dolorum architecto reiciendis magni laboriosam, illum, nobis, quae dolor, ducimus libero! Sapiente deleniti sit dolor, ex possimus.</p>
                                    <h5 className="ti-quote-left text-right font-weight-bold"></h5>

                                    <div className="line"></div>
                                    <h6 className="name">John Doe</h6>
                                    <h6 className="xs-font">Graphic Designer</h6>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="textmonial-item">
                                <Avatar3/>
                                <div className="des">
                                    <h5 className="ti-quote-left font-weight-bold"></h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ea facere voluptatum corrupti doloremque odit sequi labore rerum maiores libero.adipisicing elit. Vitae quasi voluptatem sed quaerat dolorum architecto reiciendis magni laboriosam, illum, nobis, quae dolor, ducimus libero! Sapiente deleniti sit dolor, ex possimus.</p>
                                    <h5 className="ti-quote-left text-right font-weight-bold"></h5>

                                    <div className="line"></div>
                                    <h6 className="name">Emily Roe</h6>
                                    <h6 className="xs-font">Freelancer</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section bg-overlay">

                <div className="container">
                    <div className="infos mb-4 mb-md-2">
                    <div className="title">
                        <h6 className="subtitle font-weight-normal">Are locking for</h6>
                        <h5>Lorem inpsum</h5>
                        <p className="font-small">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                    <div className="socials">
                        <div className="row justify-content-between">
                            <div className="col">
                                <a className="d-block subtitle"><i className="ti-microphone"></i> (123) 456-7890</a>
                                <a className="d-block subtitle"><i className="ti-email"></i> info@website.com</a>
                            </div>
                            <div className="col">
                                <h6 className="subtitle font-weight-normal mb-1">Social Media</h6>
                                <div className="social-links">
                                    <a href="javascript:void(0)" className="link pr-1"><i className="ti-facebook"></i></a>
                                    <a href="javascript:void(0)" className="link pr-1"><i className="ti-twitter-alt"></i></a>
                                    <a href="javascript:void(0)" className="link pr-1"><i className="ti-google"></i></a>
                                    <a href="javascript:void(0)" className="link pr-1"><i className="ti-pinterest-alt"></i></a>
                                    <a href="javascript:void(0)" className="link pr-1"><i className="ti-instagram"></i></a>
                                    <a href="javascript:void(0)" className="link pr-1"><i className="ti-rss"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                </div>
            </section>

            <section className="section" id="blog">

                <div className="container mb-3">
                    <h6 className="xs-font mb-0">Culpa perferendis excepturi.</h6>
                    <h3 className="section-title mb-5">Our Blog</h3>

                    <div className="blog-wrapper">
                        <div className="img-wrapper">
                            <Img3/>
                            <div className="date-container">
                                <h6 className="day">29</h6>
                                <h6 className="mun">Jun</h6>
                            </div>
                        </div>
                        <div className="txt-wrapper">
                            <h4 className="blog-title">Lorem ipsum dolor.</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum vitae ducimus dolor sed numquam, assumenda non dolorem in facilis eius alias voluptates, fugit maiores aspernatur ad rem saepe molestiae consequuntur. adipisicing elit. Repellat nam placeat laboriosam dolorum aperiam fuga voluptate, quis ea vel ab sunt incidunt quasi, molestias atque deserunt voluptates quae voluptatum sit.</p>

                            <a href="#" className="badge badge-info">Graphic Design</a>

                            <h6 className="blog-footer">
                                <a href="javascript:void(0)"><i className="ti-user"></i> Admin </a> |
                                <a href="javascript:void(0)"><i className="ti-thumb-up"></i> 213 </a> |
                                <a href="javascript:void(0)"><i className="ti-comments"></i> 123</a>
                            </h6>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact" className="section pb-0">

                <div className="container">
                    <h6 className="xs-font mb-0">Culpa perferendis excepturi.</h6>
                    <h3 className="section-title mb-5">Contact Us</h3>

                    <div className="row align-items-center justify-content-between">
                        <div className="col-md-8 col-lg-7">

                            <form className="contact-form">
                                <div className="form-row">
                                    <div className="col form-group">
                                        <p>input type="text" className="form-control" placeholder="Name"</p>
                                    </div>
                                    <div className="col form-group">
                                        <p>input type="email" className="form-control" placeholder="Email"</p>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <p>textarea name="" id="" cols="30" rows="5" className="form-control" placeholder="Your Message"textarea</p>
                                </div>
                                <div className="form-group">
                                    <p>input type="submit" className="btn btn-primary btn-block" value="Send Message"</p>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-4 d-none d-md-block order-1">
                            <ul className="list">
                                <li className="list-head">
                                    <h6>CONTACT INFO</h6>
                                </li>
                                <li className="list-body">
                                    <p className="py-2">Contact us and we'll get back to you within 24 hours.</p>
                                    <p className="py-2"><i className="ti-location-pin"></i> 12345 Fake ST NoWhere AB Country</p>
                                    <p className="py-2"><i className="ti-email"></i>  info@website.com</p>
                                    <p className="py-2"><i className="ti-microphone"></i> (123) 456-7890</p>

                                </li>
                            </ul> 
                        </div>
                    </div>

                    <footer className="footer mt-5 border-top">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-md-6 text-center text-md-left">
                                <p className="mb-0">Copyright <script>document.write(new Date().getFullYear())</script> &copy; <a target="_blank" href="http://www.devcrud.com">DevCRUD</a></p>
                            </div>
                            <div className="col-md-6 text-center text-md-right">
                                <div className="social-links">
                                    <a href="javascript:void(0)" className="link"><i className="ti-facebook"></i></a>
                                    <a href="javascript:void(0)" className="link"><i className="ti-twitter-alt"></i></a>
                                    <a href="javascript:void(0)" className="link"><i className="ti-google"></i></a>
                                    <a href="javascript:void(0)" className="link"><i className="ti-pinterest-alt"></i></a>
                                    <a href="javascript:void(0)" className="link"><i className="ti-instagram"></i></a>
                                    <a href="javascript:void(0)" className="link"><i className="ti-rss"></i></a>
                                </div>
                            </div>
                        </div> 
                    </footer>
                </div>
            </section>
        </div>
    )
}