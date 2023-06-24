import Image from "next/image";
import { useEffect } from "react";
import anime from "animejs";

const Contact = () => {
  useEffect(() => {
    const contactCards = document.querySelectorAll(".contact-detail");

    let translateVal = "10%"

    if(window.innerWidth > 1000)
    {
      translateVal = "1000%"
    }

    const animationConfig = {
      targets: contactCards,
      translateX: [translateVal, "0%"], // Slide from left to right
      easing: "easeInOutSine",
      duration: 1000,
      loop: false,
    };

    anime(animationConfig);
  }, []);
  return (
    <section>
      <div className="contact-borders"></div>
      <div className="w-5/6 mx-auto sm:my-28 my-10 sm:flex">
        <div className="sm:w-1/2">
          <Image
            src="/assets/images/coffee-customer.svg"
            alt="Coffee being served to customers"
            width={550}
            height={550}
          ></Image>
        </div>
        <div className="sm:w-1/2 flex-col justify-center font-comforta sm:ml-7 sm:mt-0 mt-5 justify-center">
          <div className="text-4xl font-bold">Reach out to us</div>
          <div className="contact-detail">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-16 h-16"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                />
              </svg>
            </div>
            <div className="contact-text">431-522-2279</div>
          </div>

          <div className="contact-detail">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-16 h-16"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </div>
            <div className="contact-text">info@brewbox.com</div>
          </div>

          <div className="contact-detail">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-16 h-16"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
            </div>
            <div className="contact-text !pt-0">
              772 Columbia St. Winnipeg, Manitoba
            </div>
          </div>
        </div>
      </div>
      <div className="contact-borders !rounded-t-lg !rounded-b-none mb-4"></div>
    </section>
  );
};

export default Contact;
