import React from 'react'
import './App.css'
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();
  const cards = [
    { imagePath: "image1.svg", heading: "Dashboard", text: "Lorem ipsum dolor sit amet\n consectetur." },
    { imagePath: "image2.svg", heading: "Projects", text: "Lorem ipsum dolor sit amet\n consectetur.", highlight: true },
    { imagePath: "image3.svg", heading: "Templates", text: "Lorem ipsum dolor sit amet\n consectetur." },
    { imagePath: "image4.svg", heading: "Notifications", text: "Lorem ipsum dolor sit amet\n consectetur." }
  ];

  const slides = [
    { heading: "1000+", text: "Lorem ipsum dolor sit amet\n consectetur." },
    { heading: "88%", text: "Lorem ipsum dolor sit amet\n consectetur." },
    { heading: "10X", text: "Lorem ipsum dolor sit amet\n consectetur." },
    { heading: "99%", text: "Lorem ipsum dolor sit amet\n consectetur." }
  ];

  const features = [
    { text: "“Lorem ipsum dolor sit amet consectetur. \nDignissim velit egestas ac risus maecenas \nmagna risus tellus adipiscing. Magna nunc \naccumsan praesent dolor.”", imagePath: "person1.svg", heading: "Floyd Miles", post: "Medical Assistant" },
    { text: "“Lorem ipsum dolor sit amet consectetur. \nDignissim velit egestas ac risus maecenas \nmagna risus tellus adipiscing. Magna nunc \naccumsan praesent dolor.”", imagePath: "person2.svg", heading: "Ronald Richards", post: "Nursing Assistant" },
    { text: "“Lorem ipsum dolor sit amet consectetur. \nDignissim velit egestas ac risus maecenas \nmagna risus tellus adipiscing. Magna nunc \naccumsan praesent dolor.”", imagePath: "person3.svg", heading: "Esther Howard", post: "President of Sales" }
  ];

  return (
    <div className='min-h-screen bg-[url(navbg.svg)] bg-no-repeat overflow-hidden'>
      {/* NavBar */}
      <nav className='flex flex-col md:flex-row gap-4 py-4 px-6 justify-between items-center mx-auto max-w-7xl mt-6 bg-white bg-opacity-10 backdrop-blur-sm rounded-lg'>
        <div className='flex flex-wrap gap-4 md:gap-10 items-center'>
          <img src="logo.svg" alt="Logo" />
          <a>Dashboard</a>
          <a>Projects</a>
          <a>Templates</a>
          <a>Notifications</a>
          <a>Settings</a>
        </div>
        <div className='flex gap-4'>
          <button className='cursor-pointer' onClick={()=>{navigate('/login')}}>Log In</button>
          <button onClick={()=>{navigate('/signup')}} className='border rounded-2xl px-4 py-2 bg-teal-900 text-stone-100 cursor-pointer'>Sign Up</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className='flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-32 py-10'>
        <div className='flex flex-col gap-6 text-white max-w-xl'>
          <p className='inter-nine text-[32px] lg:text-[48px]'>Accelerate Your <br />Customer <br />Onboarding</p>
          <p className='nunito-four'>Lorem ipsum dolor sit amet consectetur. Dignissim velit egestas ac risus maecenas magna risus tellus adipiscing. Magna nunc accumsan praesent dolor diam mi leo eu et. Enim dolor et sed condimentum.</p>
          <button className='uppercase rounded-lg bg-white w-fit px-6 py-2 text-black'>GET STARTED</button>
        </div>
        <img src="hero.svg" className='w-full max-w-lg' alt="Hero" />
      </section>

      {/* Features Section */}
      <section className='px-6 lg:px-32 py-10 space-y-16'>
        {/* Cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {cards.map((card, index) => (
            <div className='flex flex-col gap-4 items-center border border-teal-900 bg-white bg-opacity-10 backdrop-blur-sm rounded-lg py-6 px-4 shadow-md' key={index}>
              <div className='flex gap-4 inter-seven items-center'>
                <img src={card.imagePath} alt="icon" />
                <p>{card.heading}</p>
              </div>
              <p className='text-lg whitespace-pre-line text-center'>{card.text}</p>
              <button className='px-4 py-2 border rounded-3xl bg-zinc-50'>Start Now →</button>
            </div>
          ))}
        </div>

        {/* Slide Stats */}
        <div className='text-center space-y-6'>
          <h2 className='inter-seven text-[28px] lg:text-[34px]'>Lorem ipsum dolor sit amet consectetur</h2>
          <p>Lorem ipsum dolor sit amet consectetur. Dignissim velit egestas ac risus maecenas magna risus tellus adipiscing. Magna nunc accumsan praesent dolor diam mi leo eu et. Enim dolor et sed condimentum.</p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {slides.map((slide, index) => (
            <div className='text-white flex flex-col gap-4 items-center border border-teal-900 bg-teal-900 bg-opacity-10 backdrop-blur-sm rounded-lg py-6 px-4 shadow-md' key={index}>
              <p className='text-[36px] lg:text-[48px] inter-eight'>{slide.heading}</p>
              <p className='text-lg whitespace-pre-line text-center'>{slide.text}</p>
            </div>
          ))}
        </div>
      </section>
      <div className='flex items-center justify-center'>
          <div className='flex flex-col gap-6 ml-15'>
            <div className='flex flex-col gap-4'>
              <p className='inter-seven capitalize'>dashboard</p>
              <p className='inter-seven text-[28px]'>Lorem ipsum dolor sit amet consectetur</p>
            </div>
            <p className='nunito-four'>Lorem ipsum dolor sit amet consectetur. Dignissim velit egestas ac <br />risus maecenas magna risus tellus adipiscing. Magna nunc <br />accumsan praesent dolor diam mi leo eu et. Enim dolor et sed <br />condimentum. </p>
            <div className='flex flex-col gap-4'>
              <div className='flex gap-4'>
                <img src="check.svg" alt="" />
                <p className='nunito-four'>Lorem ipsum dolor sit amet consectetur</p>
              </div>
              <div className='flex gap-4'>
                <img src="check.svg" alt="" />
                <p className='nunito-four'>Lorem ipsum dolor sit amet consectetur</p>
              </div>
              <div className='flex gap-4'>
                <img src="check.svg" alt="" />
                <p className='nunito-four'>Lorem ipsum dolor sit amet consectetur</p>
              </div>
            </div>
            <button className='text-white bg-teal-900 w-36 h-11 rounded-2xl'>Learn More &rarr;</button>
          </div>
          <div>
            <img src="featureImage.svg" width='670' />
          </div>
        </div>
        <div className='flex items-center justify-center'>
          <div>
            <img src="featureImage2.svg" width='670' />
          </div>
          <div>
            <div className='flex flex-col gap-6 ml-15'>
              <div className='flex flex-col gap-4'>
                <p className='inter-seven capitalize'>PROJECTS</p>
                <p className='inter-seven text-[28px]'>Lorem ipsum dolor sit amet consectetur</p>
              </div>
              <p className='nunito-four'>Lorem ipsum dolor sit amet consectetur. Dignissim velit egestas ac <br />risus maecenas magna risus tellus adipiscing. Magna nunc <br />accumsan praesent dolor diam mi leo eu et. Enim dolor et sed <br />condimentum. </p>
              <button className='text-white bg-teal-900 w-36 h-11 rounded-2xl'>Learn More &rarr;</button>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-center'>
          <div className='flex items-center justify-center'>
            <div className='flex flex-col gap-6'>
              <div className='flex flex-col gap-4'>
                <p className='inter-seven capitalize'>TEMPLATES</p>
                <p className='inter-seven text-[28px]'>Lorem ipsum dolor sit amet consectetur</p>
              </div>
              <p className='nunito-four'>Lorem ipsum dolor sit amet consectetur. Dignissim velit egestas ac <br />risus maecenas magna risus tellus adipiscing. Magna nunc <br />accumsan praesent dolor diam mi leo eu et. Enim dolor et sed <br />condimentum. </p>
              <div className='flex gap-25'>
                <div>
                  <p className='text inter-seven text-[38px]'>100<span className='text-teal-900'>+</span></p>
                  <p className='nunito-seven text-[16px]'>Templates</p>
                </div>
                <div className=''>
                  <p className='text inter-seven text-[38px]'>500<span className='text-teal-900'>+</span></p>
                  <p className='nunito-seven text-[16px]'>Downloads</p>
                </div>
              </div>
              <button className='text-white bg-teal-900 w-36 h-11 rounded-2xl'>Learn More &rarr;</button>
            </div>
          </div>
          <div>
            <img src="featureImage3.svg" width='670' />
          </div>
        </div>
        <div className='flex items-center justify-center'>
          <div>
            <img src="featureImage4.svg" width='670' />
          </div>
          <div>
            <div className='flex flex-col gap-6 ml-15'>
              <div className='flex flex-col gap-4'>
                <p className='inter-seven capitalize'>NOTIFICATIONS</p>
                <p className='inter-seven text-[28px]'>Lorem ipsum dolor sit amet consectetur</p>
              </div>
              <p className='nunito-four'>Lorem ipsum dolor sit amet consectetur. Dignissim velit egestas ac <br />risus maecenas magna risus tellus adipiscing. Magna nunc <br />accumsan praesent dolor diam mi leo eu et. Enim dolor et sed <br />condimentum. </p>
              <button className='text-white bg-teal-900 w-36 h-11 rounded-2xl'>Learn More &rarr;</button>
            </div>
          </div>
        </div>

      <section className='px-6 lg:px-32 py-10 text-center'>
        <h2 className='inter-seven text-[28px] lg:text-[34px]'>Client Testimonials</h2>
        <p className='nunito-four mb-8'>What Our Clients Say</p>
        <div className='flex flex-col lg:flex-row items-center justify-center gap-6'>
          <button><img src="arrowleftbutton.svg" alt="left" /></button>
          {features.map((feature, index) => (
            <div className='bg-white bg-opacity-10 backdrop-blur-sm rounded-lg py-6 px-4 shadow-md text-left max-w-sm' key={index}>
              <img src="star.svg" alt="star" />
              <p className='text-sm whitespace-pre-line'>{feature.text}</p>
              <div className='flex gap-4 items-center mt-4'>
                <img src={feature.imagePath} alt={feature.heading} />
                <div>
                  <p className='text-lg'>{feature.heading}</p>
                  <p className='text-sm'>{feature.post}</p>
                </div>
              </div>
            </div>
          ))}
          <button><img src="arrowrightbutton.svg" alt="right" /></button>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto max-w-6xl px-6 py-20">
        <div className="bg-[url('/bgImage.svg')] bg-cover bg-center bg-no-repeat rounded-2xl p-8 lg:p-20">
          <div className="max-w-2xl space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">Start Your Journey Today</h2>
            <p className="text-gray-300 text-lg">Lorem ipsum dolor sit amet consectetur. Dignissim velit egestas ac risus maecenas magna risus tellus adipiscing.</p>
            <button className="bg-white px-8 py-4 rounded-lg hover:bg-teal-800 transition-colors">Get Started</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-teal-950 text-white px-6 lg:px-40 py-10 space-y-10">
        <div className='flex flex-col lg:flex-row justify-between gap-6'>
          <div className="text-2xl font-bold">
            <span className="text-5xl">NOVA</span> <span className="font-normal text-gray-300">EXORDIUM</span>
          </div>
          <ul className='flex flex-wrap gap-4'>
            <li><a href="">Dashboard</a></li>
            <li><a href="">Projects</a></li>
            <li><a href="">Templates</a></li>
            <li><a href="">Notifications</a></li>
            <li><a href="">Settings</a></li>
          </ul>
        </div>
        <div className='flex flex-col md:flex-row justify-between gap-6'>
          <div className='space-y-2'>
            <p>1234 Elm Street, Springfield, NY 10001, USA</p>
            <p>contact@example.com</p>
            <p>+1 (555) 123-4567</p>
          </div>
          <div className="flex flex-col gap-4 md:items-end">
            <div className="flex gap-4">
              <a href="#"><img src="linkedin.svg" alt="LinkedIn" /></a>
              <a href="#"><img src="facebook.svg" alt="Facebook" /></a>
              <a href="#"><img src="twitter.svg" alt="Twitter" /></a>
              <a href="#"><img src="youtube.svg" alt="YouTube" /></a>
              <a href="#"><img src="instagram.svg" alt="Instagram" /></a>
            </div>
            <div className="flex gap-2">
              <img src="appstore.svg" className="border rounded-sm px-2" alt="App Store" />
              <img src="playstore.svg" alt="Google Play" />
            </div>
          </div>
        </div>
        <div className='text-center border-t border-stone-400 pt-6'>
          <p>© 2025 NovaExordium All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
