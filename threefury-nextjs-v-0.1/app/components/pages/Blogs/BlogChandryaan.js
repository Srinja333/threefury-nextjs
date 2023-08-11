import React from 'react'
import Navigation from '../../navbar'
import 'bootstrap/dist/css/bootstrap.css';
import icon from '../../../assets/chandrayaan.png'
import '../Blogs/blogs.css'
import ava from '../../../assets/avatar3.jpg'



function blog1() {
  return (
    <div>
      <Navigation />
      <div class="blog-single gray-bg">
        <div class="container">
            <div class="row align-items-start">
                <div class="col-lg-8 m-15px-tb">
                    <article class="article">
                        <div class="article-img">
                            <img src={icon} title="" alt=""/>
                        </div>
                        <div class="article-title">
                            <h2>Chandrayaan 3 Mission</h2>
                            
                        </div>
                        <div class="article-content">
                            <i><p>Chandrayaan-3, India’s third lunar exploration mission was launched on Friday, in the fourth operational mission (M4) of the LVM3 launcher, ISRO is crossing new frontiers by demonstrating a soft landing on the lunar surface with its lunar module and demonstrating roving on the lunar terrain. It is expected to be supportive of ISRO’s future interplanetary missions. Additionally, deploying rovers and in-situ scientific experiments will scale new heights in lunar expeditions by deploying Rover. Yes, ISRO is bringing the Moon closer to us.</p></i>
                            <p>Chandrayaan-3 consists of an indigenous propulsion module, a lander module, and a rover to develop and demonstrate new technologies required for interplanetary missions. The propulsion module will carry the lander and rover from injection to a 100 km lunar orbit. It also carries a Spectropolarimetry (The measurement of the polarization of light at different wavelengths) of Habitable Planetary Earth (SHAPE) payload to study Earth's spectral and polarimetric measurements from the lunar orbit. The main function of the Propulsion Module is to carry the LM from the launch vehicle injection orbit to till Lander separation.</p>
                            <i><h4>Why did ISRO choose that LVM3-M4?</h4></i>
                            <p>LVM3 is the operational heavy-lift launch vehicle of ISRO and has a spectacular pedigree of completing 6 consecutive successful missions. This is the 4th operational flight of LVM3, which aims to launch the Chandrayaan-3 spacecraft to Geo Transfer Orbit (GTO). LVM3 has proved its versatility to undertake most complex missions like:<br/>

<p>• Injecting multi-satellites<br/></p>
• Mission planning to ensure safe relative distance among separated satellites through re-orientation and velocity addition maneuvers. Multi orbit (LEO, MEO, CEO) and execute interplanetary missions.</p>
• The mission is to provide the best possible service for all users. It will be an integrated system.


                        </div>
                        <div class="nav tag-cloud">
                            <a href="#">Design</a>
                            <a href="#">ISRO</a>
                            <a href="#">Sapce</a>
                            <a href="#">Chandrayaan 3</a>
                            <a href="#">Moon</a>
                            <a href="#">Science</a>
                        </div>
                    </article>
                    {/* <div class="contact-form article-comment">
                        <h4>Leave a Reply</h4>
                        <form id="contact-form" method="POST">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input name="Name" id="name" placeholder="Name *" class="form-control" type="text"/>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input name="Email" id="email" placeholder="Email *" class="form-control" type="email"/>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <textarea name="message" id="message" placeholder="Your message *" rows="4" class="form-control"></textarea>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="send">
                                        <button class="btn-hover color-2"><span>Submit</span> <i class="arrow"></i></button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div> */}
                </div>
                <div class="col-lg-4 m-15px-tb blog-aside">
                    {/* <!-- Author --> */}
                    <div class="widget widget-author">
                        <div class="widget-title">
                            <h3>Author</h3>
                        </div>
                        <div class="widget-body">
                            <div class="media align-items-center">
                                <div class="avatar">
                                    <img src={ava} title="" alt=""/>
                                </div>
                                <div class="media-body">
                                    <h6>Hello, I'm<br/> Emily Villas</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End Author -->
                    
                    <!-- widget Tags --> */}
                    <div class="widget widget-tags">
                        <div class="widget-title">
                            <h3>Latest Tags</h3>
                        </div>
                        <div class="widget-body">
                            <div class="nav tag-cloud">
                            <a href="#">Design</a>
                            <a href="#">ISRO</a>
                            <a href="#">Sapce</a>
                            <a href="#">Chandrayaan 3</a>
                            <a href="#">Moon</a>
                            <a href="#">Science</a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End widget Tags --> */}
                </div>
            </div>
        </div>
    </div>




        </div>
 
  )
}

export default blog1
