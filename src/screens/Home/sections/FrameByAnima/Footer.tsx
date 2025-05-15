import React from "react";

const Footer = () => {
  return (
    <div
      className="min-h-screen flex flex-col justify-between"
      style={{
        fontFamily: "Montserrat, sans-serif",
        backgroundColor: "#fde9d7",
      }}
    >
      <div className="flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto px-6 py-20 gap-20">
        {/* Image Container */}
        <div className="footer-image-container w-[400px] h-[400px] flex-shrink-0 shadow-left">
          <img
            src="https://storage.googleapis.com/a1aa/image/f230e695-acf8-4f87-2a07-fe4228eca2b8.jpg"
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
            <div className="footer-icons flex gap-4 text-2xl">
              <a
                href="#"
                aria-label="Email"
                className="bg-gradient-to-tr from-[#b35a5a] to-[#fca87f] p-2 rounded text-white inline-flex items-center justify-center"
              >
                <i className="fas fa-envelope"></i>
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="bg-gradient-to-tr from-[#b35a5a] to-[#fca87f] p-2 rounded text-white inline-flex items-center justify-center"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="#"
                aria-label="WhatsApp"
                className="bg-gradient-to-tr from-[#b35a5a] to-[#fca87f] p-2 rounded text-white inline-flex items-center justify-center"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer className="text-center text-[#b35a5a] text-lg pb-6 font-normal">
        Copyright © 2024 The Pankh Project - All Rights Reserved.
      </footer>

      {/* Media Queries */}
      <style>{`
        @media (max-width: 768px) {
          .footer-image-container {
            width: 300px !important;
            height: 300px !important;
          }

          .footer-quote-text {
            font-size: 22px !important;
            line-height: 34px !important;
            padding: 0 1rem !important;
            text-align: center !important;
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
