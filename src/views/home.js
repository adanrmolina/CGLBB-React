import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>CGLBB</title>
        <meta property="og:title" content="CGLBB" />
      </Helmet>
      <section className="home-hero">
        <header className="home-header10">
          <header data-thq="thq-navbar" className="home-navbar">
            <img
              alt="image"
              src="/logo1-200h-200h.png"
              className="home-branding"
            />
            <div data-thq="thq-burger-menu" className="home-burger-menu">
              <div className="home-hamburger">
                <img alt="image" src="/hamburger.svg" className="home-icon10" />
              </div>
            </div>
            <div data-thq="thq-mobile-menu" className="home-mobile-menu">
              <div
                data-thq="thq-mobile-menu-nav"
                data-role="Nav"
                className="home-nav1"
              >
                <div className="home-container2">
                  <img alt="image" src="/logo.svg" className="home-image1" />
                  <div data-thq="thq-close-menu" className="home-menu-close">
                    <svg viewBox="0 0 1024 1024" className="home-icon11">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <nav
                  data-thq="thq-mobile-menu-nav-links"
                  data-role="Nav"
                  className="home-nav2"
                >
                  <span className="home-text10">About</span>
                  <span className="home-text11">Features</span>
                  <span className="home-text12">Pricing</span>
                  <span className="home-text13">Team</span>
                  <span className="home-text14">Blog</span>
                </nav>
                <div className="home-container3">
                  <button className="home-login button">Login</button>
                  <button className="button">Register</button>
                </div>
              </div>
              <div className="home-icon-group">
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="home-icon13"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon15"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="home-icon17"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </div>
            </div>
          </header>
        </header>
        <video
          src="/video.mp4"
          loop
          muted
          poster="/video_moment-1500h-1500h.jpg"
          preload="auto"
          autoPlay
          playsInline
          className="home-video"
        ></video>
        <div className="home-hero-content">
          <div className="home-header-container">
            <div className="home-header11">
              <h1 className="home-heading1">
                Digitize your operation. Save, scale, and control in real time
              </h1>
            </div>
            <p className="home-caption1">
              Dashboards, RPA, digital twins, and virtual training
            </p>
          </div>
          <button type="button" className="button home-button1">
            <span>
              <span>Get started today</span>
              <br></br>
            </span>
          </button>
        </div>
      </section>
      <section className="home-note">
        <h2 className="home-caption2">
          We integrate engineering, software, and technology to solve real-world
          problems: from dashboards and automation to digital twins and
          immersive experiences. We implement projects from start to finish,
          regardless of your company&apos;s size or industry.
        </h2>
      </section>
      <section className="home-statistics">
        <div className="home-content10">
          <div className="home-stat1">
            <h3 className="home-header12">30%</h3>
            <span className="home-caption3">Less operating costs</span>
          </div>
          <div className="home-stat2">
            <h3 className="home-header13">50%</h3>
            <span className="home-caption4">Faster processes</span>
          </div>
          <div className="home-stat3">
            <h3 className="home-header14">80%</h3>
            <span className="home-caption5">Paper reduction</span>
          </div>
        </div>
      </section>
      <section className="home-slider1">
        <div className="home-header15">
          <h2 className="home-heading2">
            Reduce costs, doubles speed, and make decisions with data in weeks,
            not years
          </h2>
        </div>
        <div className="home-selector">
          <p className="home-caption6">
            IoT, RPA, and digital twins that transform your business and prepare
            it to scale without limits.
          </p>
        </div>
      </section>
      <section className="home-slides">
        <div className="home-slider2 slider blaze-slider"></div>
        <div>
          <div className="home-container5">
            <Script
              html={`<script defer>
const el = document.querySelector('.blaze-slider')

new BlazeSlider(el, {
  all: {
    slidesToShow: 3,
    slideGap: '80px',
    loop: true,
    enableAutoplay: true,
  },
})
</script>`}
            ></Script>
          </div>
        </div>
      </section>
      <section className="home-growth">
        <div className="home-content11">
          <div className="home-header16">
            <div className="home-header17">
              <h2 className="home-heading3">
                Training up to 70% faster and safer.
              </h2>
            </div>
            <p className="home-caption7">
              With 360° videos and digital twins, we train your teams in
              realistic environments, reducing costs, errors, and startup times.
            </p>
          </div>
        </div>
        <div className="home-images">
          <div className="home-square"></div>
          <img
            alt="image"
            src="/vr_training-1400w-1400w.png"
            className="home-image2"
          />
        </div>
      </section>
      <section className="home-create">
        <div className="home-content12">
          <div className="home-header18">
            <h2 className="home-heading4">
              <span>
                Create your own
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text19">environment</span>
              <span> now!</span>
              <br></br>
            </h2>
          </div>
          <button className="home-button2 button">
            <span>
              <span>Get started today</span>
              <br></br>
            </span>
          </button>
        </div>
      </section>
      <section className="home-customer">
        <div className="home-header19">
          <h2 className="home-heading5">
            <span>
              Customer validation is an essential phase of the
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text26">product development process</span>
            <br></br>
          </h2>
        </div>
        <div className="home-quotes">
          <div className="home-quote1">
            <p className="home-quote2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <div className="home-author1">
              <span className="home-name1">Joanna Smith</span>
              <span className="home-location1">Briville</span>
            </div>
          </div>
          <div className="home-quote3">
            <p className="home-quote4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <div className="home-author2">
              <span className="home-name2">Joanna Smith</span>
              <span className="home-location2">Briville</span>
            </div>
          </div>
          <div className="home-quote5">
            <p className="home-quote6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <div className="home-author3">
              <span className="home-name3">Joanna Smith</span>
              <span className="home-location3">Briville</span>
            </div>
          </div>
          <div className="home-quote7">
            <p className="home-quote8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <div className="home-author4">
              <span className="home-name4">Joanna Smith</span>
              <span className="home-location4">Briville</span>
            </div>
          </div>
        </div>
        <div className="home-controls">
          <button className="home-previous button">
            <svg viewBox="0 0 1024 1024" className="home-icon19">
              <path d="M542.165 780.501l-225.835-225.835h494.336c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-494.336l225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-298.667 298.667c-4.096 4.096-7.168 8.789-9.259 13.824-2.176 5.205-3.243 10.795-3.243 16.341 0 10.923 4.181 21.845 12.501 30.165l298.667 298.667c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
            </svg>
          </button>
          <button className="home-next button">
            <svg viewBox="0 0 1024 1024" className="home-icon21">
              <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
            </svg>
          </button>
          <button className="button home-button3">
            <span>
              <span>View all cases</span>
              <br></br>
            </span>
          </button>
        </div>
      </section>
      <section className="home-faq">
        <div className="home-header20">
          <h2 className="home-heading6">Frequently Asked Questions</h2>
        </div>
        <div className="home-content13">
          <div className="home-column1">
            <div className="home-element1">
              <h3 className="home-header21">
                Do I need to have all my data in one database to use digital
                dashboards?
              </h3>
              <p className="home-content14">
                Yes. We can connect multiple sources (Excel, SQL, Google Sheets,
                ERP, MES, etc.) and unify them into a single real-time
                dashboard.
              </p>
            </div>
            <div className="home-element2">
              <h3 className="home-header22">
                How are sensors and databases integrated with the digital twin?
              </h3>
              <p className="home-content15">
                We connect the 3D model to industrial communication platforms
                that act as a bridge between plant equipment and the digital
                system. This allows sensor data, documents, and control systems
                (SCADA/MES) to be updated in real-time within the digital twin,
                regardless of the device manufacturer.
              </p>
            </div>
            <div className="home-element3">
              <h3 className="home-header23">
                Does RPA (Robotic Process Automation) replace employees?
              </h3>
              <p className="home-content16">
                RPA handles repetitive and low-value tasks, freeing up staff for
                strategic and creative activities.
              </p>
            </div>
          </div>
          <div className="home-column2">
            <div className="home-element4">
              <h3 className="home-header24">
                Is creating and editing 360° videos for training complicated?
              </h3>
              <p className="home-content17">
                We capture the material with 360° cameras and use accessible
                editing tools to integrate texts, steps, and interactive points.
                The final result can be played back on virtual reality headsets
                or any browser, ready to train your team without complex
                technical processes.
              </p>
            </div>
            <div className="home-element5">
              <h3 className="home-header25">
                Do digital twins require expensive equipment or plant shutdowns?
              </h3>
              <p className="home-content18">
                We can scan with LiDAR technology, drones, or light scanners
                while the plant continues to operate, without stopping
                production.
              </p>
            </div>
            <div className="home-element6">
              <h3 className="home-header26">
                How long does it take to implement a complete solution?
              </h3>
              <p className="home-content19">
                We work with an agile approach, so the first usable version can
                be ready in a few weeks. From there, the system scales in
                stages, adding new features and connections according to the
                needs of each area or plant.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="home-footer">
        <div className="home-content20">
          <div className="home-main"></div>
          <div className="home-bottom">
            <span className="home-text31">
              © 2022 togthr - All rights reserved
            </span>
            <button data-role="scroll-top" className="home-button4 button">
              <img alt="image" src="/arrow.svg" className="home-image3" />
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="home-container7">
          <Script
            html={`<script>
document.addEventListener("DOMContentLoaded", function() {
  // get the element with the "scroll-top" data-role
  const scrollTopBtn = document.querySelector('[data-role="scroll-top"]');

  // when the element is clicked
  scrollTopBtn.addEventListener("click", function() {
    // smoothly scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
</script>
`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Home
