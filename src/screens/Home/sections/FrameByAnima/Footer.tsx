import React from "react";

const Footer = () => {
  return (
    <div
      className="main bg-red-600 flex flex-col justify-between overflow-x-hidden"
      style={{
        fontFamily: "Montserrat, sans-serif",
        backgroundColor: "#fde9d7",
      }}
    >
      <div className="main flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto px-6 py-5 gap-20">
        {/* Image Container */}
        <div className="footer-image-container w-[400px] h-[400px] flex-shrink-0 shadow-left">
          <img
            src="/hand.jpg"
            alt="A hand with a small black paw tattoo on the wrist"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Quote Text */}
        <div
          className="footer-quote-text max-w-xl text-[#4a3a47] text-center md:text-left text-[28px] leading-[40px]"
          style={{ fontFamily: "Merriweather, serif" }}
        >
          <p>“When the moral judgment is removed,</p>
          <p>individuals are able to acknowledge</p>
          <p>and experience their authentic life energy</p>
          <p>freely. -</p>
          <p className="font-semibold">Peter Levine”</p>
        </div>

        {/* Quick Links & Contact */}
        <div className="footer-links text-[#4a3a47] flex flex-col gap-8 text-lg font-semibold max-w-xs">
          <div>
            <h3 className="text-xl mb-4 font-bold">Quick Links</h3>
            <ul className="space-y-3 font-normal">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Blog</li>
              <li>Appointment</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl mb-4 font-bold">Get in Touch</h3>
            <div className="footer-icons flex gap-4 text-2xl ">
              <a
                href="#"
                aria-label="Email"
                className="bg-gradient-to-tr from-[#b35a5a] to-[#fca87f] p-2 rounded inline-flex items-center justify-center"
              >
                <i className="fas fa-envelope font-white  bg-clip-text"></i>
              </a>

              <a
                href="#"
                aria-label="WhatsApp"
                className="bg-gradient-to-tr from-[#b35a5a] to-[#fca87f] p-2 rounded bg-white inline-flex items-center justify-center"
              >
                <i className="fab fa-linkedin font-white  bg-clip-text "></i>
              </a>
              <a
                href="#"
                aria-label="WhatsApp"
                className="bg-gradient-to-tr from-[#b35a5a] to-[#fca87f] p-2 rounded inline-flex items-center justify-center"
              >
                <i className="fab fa-whatsapp font-white  bg-clip-text  "></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer className="text-center bg-gradient-to-r from-[#AA587C] to-[#FD8950]  bg-clip-text text-transparent font-light text-lg pb-6 font-normal">
        Copyright © 2024 The Pankh Project - All Rights Reserved.
      </footer>

      {/* Media Queries */}
      <style>{`

      /* Add to your media queries style block */
.footer-icons a {
  width: 36px;
  height: 36px;
  transition: all 0.3s ease;
}

.footer-icons a:hover {
  transform: translateY(-2px);
}

.footer-icons i {
  font-size: 18px;
  background-gradient: linear-gradient(to right, #AA587C, #FD8950);
}

/* For smaller screens */
@media (max-width: 480px) {

  main{
    width: 60% !important;
  
  background-color: #fffff !important;
  }

  .footer-links {
    align-items: center !important;
    text-align: center !important;
  }

  .footer-icons {
    justify-content: center !important;
  }
}

  .footer-links {
    font-size: 14px !important;
  }

  .footer-image-container {
    width: 300px;
    height: 300px;
    background-color: #f0a07a;
    margin-top: 20px;
  }
 
  .footer-icons a {
    width: 32px;
    height: 32px;
  }
  
  .footer-icons i {
    font-size: 16px;

  }
}
        @media (max-width: 768px) {
          .footer-image-container {
            width: 300px !important;
            height: 300px !important;
          }

      

          .footer-links {
            align-items: center !important;
            text-align: center !important;
          }

          .footer-icons {
            justify-content: center !important;
          }
        }

        @media (max-width: 480px) {
          .footer-image-container {
            width: 240px !important;
            height: 240px !important;
          }

          .footer-quote-text {
            font-size: 18px !important;
            line-height: 30px !important;
          }

          .footer-links {
            font-size: 14px !important;
          }

          footer.text-lg {
            font-size: 0.75rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Footer;
