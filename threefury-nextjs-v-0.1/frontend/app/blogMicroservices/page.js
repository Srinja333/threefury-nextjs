"use client";
import React, { useEffect } from "react";
import Navigation from "../components/NavBar/Nav";
import "bootstrap/dist/css/bootstrap.css";
import icon from "../assets/Microservices.png";
import "../styles/blogs.css";
import ava from "../assets/avatar2.jpg";
import Image from "next/image";
import "../styles/MyHome.css";
// const imageLoader = ({ src, width, quality }) => {
//   return `https://res.cloudinary.com/dh6pohbrn/image/upload/v1692116130/${src}?w=${width}&q=${
//     quality || 75
//   }`;
// };

function BlogMicroservices() {
  if (typeof window !== "undefined") {
    if (window.history && window.history.pushState) {
      $(window).on("popstate", function () {
        //alert('Back button was pressed.');
        window.location.replace("/#blog")
        window.location.reload()
      });
    }
  }
  return (
    <div>
      <div className="App">
        <Navigation />
      </div>
      <div className="blog-single gray-bg">
        <div className="container">
          <div className="row align-items-start">
            <div className="col-lg-8 m-15px-tb">
              <article className="article">
                <div className="article-img">
                  <Image
                    // loader={imageLoader}
                    src="Microservices_wgc6kb.png"
                    height={500}
                    width={800}
                    title=""
                    alt=""
                  />
                </div>
                <div className="article-title">
                  <h2>Top 10 Microservices Design</h2>
                </div>
                <div className="article-content">
                  <p>
                    The developers should know what Microservice is and why the
                    Microservice architecture arises.
                  </p>
                  <h4>
                    Why did the need for microservices architecture arise?
                  </h4>
                  <p>
                    From the word Microservice, we can understand a service that
                    is divided into little entities of a service. The term
                    “Micro” in Microservices refers to the functionality of
                    services. A microservice provides a platform with a
                    well-defined API, data contract, scalability, resilience,
                    and configuration. The microservice provides a framework
                    that will guide the design, development, and deployment.
                    Microservice is a software building block. It can be used
                    when the demand for the application is high. Microservices.
                    Microservices are Autonomous and Isolated. Services are
                    independent of the design, development, and deployment. It
                    decomposes the large application into smaller entities and
                    now these smaller entities are small applications.
                  </p>
                  <h4>What are Microservices?</h4>
                  <p>
                    In the past several years, we have developed some standards.
                    The development of large applications is becoming complex
                    day by day if we use the old standards of layered
                    architecture, which is also called monolithic architecture.
                    Monolithic architecture is used to build, test, and deploy a
                    long body of code. If any bug is fixed or any new feature is
                    added to the application, then the entire application is
                    again built, tested, and deployed on the server. So, this
                    architecture is costly and time-consuming. Microservice
                    works more independently than monolithic. The 3-D’s of
                    application development becomes easier, less costly, and
                    less time-consuming. The team will work in a more organized
                    way and doesn’t have to depend on any other, developing and
                    deploying their microservice products separately from one
                    another. When any changes are made to the application, then
                    only the microservice needs to go through the deployment
                    pipeline. Microservices are reused across many different
                    solutions and therefore must be able to scale appropriately
                    depending on the usage scenario. That is the reason
                    Microservice architecture becomes a hero over Monolithic
                    architecture.
                  </p>
                  <h4>
                    Top 10 Microservices Design Principles Every Developer
                    Should Know
                  </h4>

                  <p>
                    <b>1. Single Responsibility Principle:</b>
                    The Single Responsibility principle is the fundamental and
                    oldest model of software design, this principle is also used
                    in microservices. This principle recommends that each
                    microservice should have only a single function. It also
                    helps to develop the complex system into smaller entities.
                    By decomposing the complex system into smaller entities
                    teams can improve the agility, scalability, and flexibility
                    of the software development process. For example, In any
                    banking system, there are several microservices, and we take
                    two microservices such as net-banking login and transaction
                    services. The login microservice can handle only the user
                    login service and the transaction service handles only the
                    transactions. We could not create a microservice that
                    handles both services.
                    <br />
                    <b>2. Discrete Boundaries:</b>
                    This is the main core design principle of microservices
                    architectures. This principle defines that every
                    microservice should have a well-defined data boundary that
                    separates other microservices. This design principle helps
                    to develop, deploy and scale the application independently.
                    This principle applies to the use of well-defined APIs that
                    allow the transfer of data in a standardized way. By
                    defining the boundaries and APIs, each microservice can
                    operate independently and be changed or replaced without
                    affecting the whole system. These changes make the entire
                    system more scalable, flexible, and maintained. This
                    principle promotes flexibility, scalability, and agility,
                    making it easier to develop and deploy complex applications
                    in dynamic, rapidly changing environments. For example, each
                    Microservice could have its database that it uses to store
                    data. A shared database should violate the principle.
                    <br />
                    <b>3. Loose Coupling:</b>
                    This idea mainly refers to that each microservice should
                    have minimal dependencies on other services so that each
                    service can be developed, deployed, and scaled
                    independently. This principle prevents the changes from
                    impacting the entire system. For example: If one
                    microservice server is down, then the other microservice
                    should function normally.
                    <br />
                    <b>4. API-Driven Design:</b>
                    This is the most favorable microservice design principle
                    among all the developers and it helps in designing
                    microservices. According to this principle, Microservices
                    should be designed using APIs, for each communication with
                    other services has a well-defined set of APIs. The APIs
                    should be done through a standard protocol such as REST. For
                    example, the /users endpoint handles requests to create,
                    read, update, and delete user profiles.
                    <br />
                    <b>5. Statelessness:</b>
                    It is a key principle of microservice architecture, where
                    each microservice is designed, it is independent and
                    self-contained, without depending on other microservices,
                    and maintains its state between the requests. This
                    microservice handles each request as a new and isolated
                    event, without depending on previous requests. If we use a
                    Stateless microservice it has lots of strengths in services
                    such as it is scalable, flexible, fault-tolerant,
                    performance, and easy to test for a complex application. To
                    achieve statelessness in an application, then the
                    microservice should avoid any state locally. It enables
                    scalability, flexibility, fault tolerance, performance, and
                    ease of testing.
                    <br />
                    <b>6. Smart Endpoints and Dumb Pipes:</b>
                    According to this principle, the data-processing logic
                    capability is located in the Microservice. In this design
                    principle, microservices are designed to be small,
                    functionally independent, and connected by a simple,
                    unobtrusive communication mechanism. The term “Smart
                    Endpoints” refers to a microservice that is responsible for
                    the implementation of business logic. This microservice is
                    designed for a highly specialized task. This microservice
                    has a well-defined interface for interaction. The term “Dumb
                    Pipes” refers to a microservice that is responsible for
                    communication mechanisms used to connect with a
                    microservice. This mechanism is designed for simplicity and
                    is unobtrusive, with a minimum amount of logic and required
                    processing. These mechanisms are typically lightweight and
                    efficient, and they use standardized protocols and data
                    formats. By using the “Smart Endpoints and Dumb Pipes”
                    principle, microservices are highly modular, flexible, and
                    scalable. Every microservice can focus on its main
                    responsibilities. The developers are free to develop the
                    application with loosely coupled components that can be
                    developed and deployed independently. More benefits come
                    with a loss like this there is a drawback, that debugging is
                    more difficult, as errors may occur in multiple components.
                    <br />
                    <b>7. Auto-Scaling:</b>
                    Auto-Scaling is a crucial aspect of making an application
                    scalable and highly available microservice architecture. It
                    allows us to automatically adjust the resource allocation
                    based on demands and users, it ensures that the service can
                    handle peak loads when we minimize the cost during
                    low-demand periods.
                    <br />
                    <b>8. Monitoring and Logging:</b>
                    Monitoring and Logging microservices is a major part of
                    ensuring reliability and performance efficiency.
                    Microservice is a small, independent service that works
                    together to deliver a large application. Monitoring and
                    Logging microservices could help to detect and diagnose
                    individual microservice. One of the major drawbacks of this
                    microservice is that debugging is hard. It’s hard to find
                    the cause because logs are scattered. According to the
                    principle, microservices should have robust monitoring and
                    logging mechanisms. In general, monitoring and logging
                    microservices is an essential part of maintaining the
                    reliability and performance of the modern application. By
                    using this microservice developers and the system
                    administrator can quickly identify the problem and diagnose
                    the issue. For example, each microservice could have log
                    information about its performance and usage.
                    <br />
                    <b>9. Continuously Deployment and Integration (CI/CD)</b>
                    Continuous Deployment and Integration (CI/CD) is a practical
                    approach. This is used in software development which
                    enhances integration and code testing. In a microservice
                    architecture, CI/CD has the most crucial role because of the
                    large number of services, and these services will be
                    deployed and updated independently.
                    <br />
                    <b>10. Automation of Infrastructure</b>
                    As per this microservice, software components are software
                    components designed to automate the deployment,
                    configuration, and management of resources in a cloud
                    environment. These microservices are mainly used for
                    containerization technologies such as Docker and Kubernetes,
                    and this microservice can be deployed in a cloud-based
                    platform like Amazon Web Services(AWS) or Microsoft Azure.
                    We use Jenkins pipelines for automated deployment and also
                    used tools like Terraform to automate the environment.
                  </p>
                </div>
                <div className="nav tag-cloud">
                  <a href="#">Design</a>
                  <a href="#">Development</a>
                  <a href="#">AWS</a>
                  <a href="#">Web Design</a>
                  <a href="#">Microservices</a>
                  <a href="#">Microservices Application</a>
                  <a href="#">Developer</a>
                </div>
              </article>
              {/* <div className="contact-form article-comment">
                        <h4>Leave a Reply</h4>
                        <form id="contact-form" method="POST">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input name="Name" id="name" placeholder="Name *" className="form-control" type="text"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input name="Email" id="email" placeholder="Email *" className="form-control" type="email"/>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <textarea name="message" id="message" placeholder="Your message *" rows="4" className="form-control"></textarea>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="send">
                                        <button className="btn-hover color-2"><span>Submit</span> <i className="arrow"></i></button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div> */}
            </div>
            <div className="col-lg-4 m-15px-tb blog-aside">
              {/* <!-- Author --> */}
              <div className="widget widget-author">
                <div className="widget-title">
                  <h3>Author</h3>
                </div>
                <div className="widget-body">
                  <div className="media align-items-center">
                    <div className="avatar ms-3">
                      <Image 
                      //loader={imageLoader} 
                      width={50} height={50} src='avatar2_qzaacp.jpg' title="" alt="" />
                    </div>
                    <div className="media-body">
                      <h6>
                        Hello, I'm
                        <br /> Charlotte Kemi
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- End Author -->
                    
                    <!-- widget Tags --> */}
              <div className="widget widget-tags">
                <div className="widget-title">
                  <h3>Latest Tags</h3>
                </div>
                <div className="widget-body">
                  <div className="nav tag-cloud">
                    <a href="#">Design</a>
                    <a href="#">Development</a>
                    <a href="#">AWS</a>
                    <a href="#">Web Design</a>
                    <a href="#">Microservices</a>
                    <a href="#">Microservices Application</a>
                    <a href="#">Developer</a>
                  </div>
                </div>
              </div>
              {/* <!-- End widget Tags --> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogMicroservices;
