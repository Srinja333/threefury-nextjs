import React from 'react'
import Navigation from '../../navbar'
import 'bootstrap/dist/css/bootstrap.css';
import icon from '../../../assets/AI.jpg'
import ava from '../../../assets/avatar.jpg'
import '../Blogs/blogs.css'


function BlogAI() {
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
                            <h2>Open AI vs Software Engineer</h2>
                            {/* <div class="media">
                                <div class="avatar">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png" title="" alt=""/>
                                </div>
                                <div class="media-body">
                                    <label>Rachel Roth</label>
                                    <span>26 FEB 2020</span>
                                </div>
                            </div> */}
                        </div>
                        <div class="article-content">
                            <p>OpenAI is a research organization that focuses on the development of artificial intelligence, particularly in the areas of natural language processing, computer vision, and reinforcement learning. OpenAI aims to develop AI technology that is safe, beneficial, and accessible to everyone.</p>
                            {/* <h4>What are my payment options?</h4> */}
                            <p>On the other hand, software engineering is a field that involves designing, developing, and maintaining software applications. Software engineers are responsible for writing code, testing software, and debugging problems, among other tasks. Software engineering is a broad field that encompasses a range of roles, including front-end development, back-end development, full-stack development, and more.</p>
                            {/* <blockquote>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                <p class="blockquote-footer">Someone famous in <cite title="Source Title">Dick Grayson</cite></p>
                            </blockquote> */}
                            <p>While there is some overlap between the two fields, they are distinct in their focus and goals. OpenAI is primarily concerned with advancing the state of AI technology, while software engineering is focused on developing software applications that meet specific user needs.

That being said, there are opportunities for software engineers to work at OpenAI, particularly in roles related to developing AI applications. OpenAI may also collaborate with software engineering teams to integrate AI technology into their products and services.</p>
                        </div>
                        <div class="nav tag-cloud">
                            <a href="#">Design</a>
                            <a href="#">Development</a>
                            <a href="#">Travel</a>
                            <a href="#">Web Design</a>
                            <a href="#">Marketing</a>
                            <a href="#">Research</a>
                            <a href="#">Managment</a>
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
                                    <h6>Hello, I'm<br/> Lena Sword</h6>
                                </div>
                            </div>
                            {/* <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores</p> */}
                        </div>
                    </div>
                    {/* <!-- End Author -->
                    <!-- Trending Post --> */}
                    {/* <div class="widget widget-post">
                        <div class="widget-title">
                            <h3>Trending Now</h3>
                        </div>
                        <div class="widget-body">

                        </div>
                    </div> */}
                    {/* <!-- End Trending Post -->
                    <!-- Latest Post --> */}
                    {/* <div class="widget widget-latest-post">
                        <div class="widget-title">
                            <h3>Latest Post</h3>
                        </div>
                        <div class="widget-body">
                            <div class="latest-post-aside media">
                                <div class="lpa-left media-body">
                                    <div class="lpa-title">
                                        <h5><a href="#">Prevent 75% of visitors from google analytics</a></h5>
                                    </div>
                                    <div class="lpa-meta">
                                        <a class="name" href="#">
                                            Rachel Roth
                                        </a>
                                        <a class="date" href="#">
                                            26 FEB 2020
                                        </a>
                                    </div>
                                </div>
                                <div class="lpa-right">
                                    <a href="#">
                                        <img src="https://www.bootdey.com/image/400x200/FFB6C1/000000" title="" alt=""/>
                                    </a>
                                </div>
                            </div>
                            <div class="latest-post-aside media">
                                <div class="lpa-left media-body">
                                    <div class="lpa-title">
                                        <h5><a href="#">Prevent 75% of visitors from google analytics</a></h5>
                                    </div>
                                    <div class="lpa-meta">
                                        <a class="name" href="#">
                                            Rachel Roth
                                        </a>
                                        <a class="date" href="#">
                                            26 FEB 2020
                                        </a>
                                    </div>
                                </div>
                                <div class="lpa-right">
                                    <a href="#">
                                        <img src="https://www.bootdey.com/image/400x200/FFB6C1/000000" title="" alt=""/>
                                    </a>
                                </div>
                            </div>
                            <div class="latest-post-aside media">
                                <div class="lpa-left media-body">
                                    <div class="lpa-title">
                                        <h5><a href="#">Prevent 75% of visitors from google analytics</a></h5>
                                    </div>
                                    <div class="lpa-meta">
                                        <a class="name" href="#">
                                            Rachel Roth
                                        </a>
                                        <a class="date" href="#">
                                            26 FEB 2020
                                        </a>
                                    </div>
                                </div>
                                <div class="lpa-right">
                                    <a href="#">
                                        <img src="https://www.bootdey.com/image/400x200/FFB6C1/000000" title="" alt=""/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/* <!-- End Latest Post -->
                    <!-- widget Tags --> */}
                    <div class="widget widget-tags">
                        <div class="widget-title">
                            <h3>Latest Tags</h3>
                        </div>
                        <div class="widget-body">
                            <div class="nav tag-cloud">
                                <a href="#">Design</a>
                                <a href="#">Development</a>
                                <a href="#">Travel</a>
                                <a href="#">Web Design</a>
                                <a href="#">Marketing</a>
                                <a href="#">Research</a>
                                <a href="#">Managment</a>
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

export default BlogAI
