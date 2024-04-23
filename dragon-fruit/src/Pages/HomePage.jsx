import { TypeAnimation } from "react-type-animation";
import Video from "../Assets/DragonFruitHeader.m4v";
import { useRef } from "react";
import image1 from "../Assets/Homepage1.jpg";
import image2 from "../Assets/Homepage 2.jpg";
import image3 from "../Assets/Homepage3.jpeg";
import image4 from "../Assets/Real Time.png";
import ImageSlider from "../Component/ImageSlider";
import { Link } from "react-router-dom";

export default function HomePage() {
  const myRef = useRef(null);

  const scrollDown = () => {
    myRef.current.scrollIntoView({
      top: -64,
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  return (
    <div className="relative min-w-full min-h-full w-full h-[calc(100vh)] text-white font-mono">
      <div className="relative flex flex-col items-center justify-center h-full w-full overflow-hidden">
        <video
          src={Video}
          autoplay="{true}"
          loop
          muted
          className="absolute z-0 w-auto  
            min-w-full min-h-[calc(100vh-74px)] max-w-none"
        ></video>
        <p className="text-center text-2xl lg:text-6xl z-30 font-semibold">
          Vertical Farming Technology{" "}
        </p>

        <div className="z-30">
          <p className="inline text-[1.5em] lg:text-[3em]">for </p>
          <div className="hidden lg:inline">
            <TypeAnimation
              sequence={[
                "a Greener Planet",
                1000,
                "Sustainable Food",
                1000,
                "People",
                1000,
                "Urban Resilience",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{
                fontSize: "3em",
                display: "inline-block",
              }}
              repeat={Infinity}
            />
          </div>
          <div className="inline lg:hidden">
            <TypeAnimation
              sequence={[
                "a Greener Planet",
                1000,
                "Sustainable Food",
                1000,
                "People",
                1000,
                "Urban Resilience",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{
                fontSize: "1.5em",
                display: "inline-block",
              }}
              repeat={Infinity}
            />
          </div>
        </div>
        <div className="flex justify-center space-x-10 z-30 py-4 text-xl font-semibold">
          <button
            onClick={scrollDown}
            className="lg:w-40 rounded-3xl bg-transparent border-green-500 border-2 px-2 py-2 hover:bg-green-500 transition-all "
          >
            Learn More
          </button>
          <Link
            to="javascript:void(0)"
            onClick={() => (window.location = "mailto:ariodito@kth.se")}
          >
            <button className="lg:w-40 rounded-3xl bg-transparent border-green-500 border-2 px-2 py-2 hover:bg-green-500 transition-all ">
              Contact Us!
            </button>
          </Link>
        </div>
      </div>
      <div ref={myRef} className="h-16 top-[calc(100vh-64px)] absolute"></div>
      <div className="bg-white text-gray-600 font-normal mx-4 lg:mx-28">
        <p className="text-2xl lg:text-4xl font-semibold mx-auto w-full text-center pt-10 pb-6">
          Our Technology
        </p>
        <div className=" space-y-12 lg:space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="flex flex-col col-span-1 justify-center items-center">
              <p className="text-green-600 text-3xl font-semibold pb-6">
                Getting lost in the weeds while starting your vertical farm?
              </p>
              <p className="text-base lg:text-lg">
                Dragon Fruit has you covered. We provide an automated solution
                for keeping your crops in the optimal environment
              </p>
            </div>
            <div className="lg:col-span-2 flex align-middle justify-center items-center pt-12">
              <img
                className="w-[100%] lg:w-[80%] h-96 rounded-lg object-cover object-center aspect-[1/1] lg:aspect-video"
                src={image1}
                alt="plants farms"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="flex flex-col items-center justify-center align-middle">
              <img
                className="w-[100%] lg:w-[80%] rounded-lg object-cover object-center aspect-[1/1] lg:aspect-[9/12]"
                src={image2}
                alt="Sensors"
              />
            </div>
            <div className="flex flex-col justify-center col-span-2 text-left lg:pl-10 pt-10 lg:pt-0">
              <p className="text-green-600 text-3xl font-semibold pb-6">
                Sensors
              </p>
              <p className="text-base lg:text-lg">
                All change starts with awareness. For each aspect of the
                environment you will be needing an appropriate sensor to detect
                it.
              </p>
              <p className="text-base lg:text-lg">
                Does your vertical farm already contain all sensors for the
                parameters you want to control? Then our system is ready to be
                connected to them. Are there still sensors on your wishlist?
                Then we will provide state-of-the-art products from our
                partners.
              </p>
              <p className="text-green-600 text-3xl pt-10 font-semibold pb-6">
                Actuators
              </p>

              <p className="text-base lg:text-lg">
                It is one thing to know what is wrong; it is another to do
                something about it.
              </p>
              <p className="text-base lg:text-lg">
                Humidity too low? Our system will activate the humidifier
                without you needing to guide it. Nutrient levels are off? Dragon
                Fruit has got it covered. Temperature too high? No sweat.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="flex flex-col justify-center col-span-1 lg:px-5 text-left">
              <p className="text-green-600 text-3xl font-semibold pb-6">
                Agathos
              </p>

              <p className="text-base lg:text-lg">
                If the sensors are the eyes and the actuators are the muscles,
                then Agathos is the brain of your farm. Sensing data is taken
                and Agathos automatically decides if and when action needs to be
                taken to keep your crops in optimum condition.
              </p>
            </div>
            <div className="col-span-2 px-5 pt-10 lg:pt-0 flex justify-center">
              <img
                className="w-[100%] lg:w-[80%] lg:h-96 rounded-lg object-cover object-center aspect-[1/1] lg:aspect-video"
                src={image3}
                alt="plants farms"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 text-center ">
            <div className="flex flex-col justify-center col-span-2 lg:px-20 ">
              <p className="text-green-600 text-3xl font-semibold pb-6">
                Agathos Interface
              </p>

              <p className="text-base lg:text-lg">
                As a vertical farm owner, you have more than enough tasks to
                fill your day. Agathos takes over the tedious task of turning
                knobs all day.
              </p>
              <p className="text-base lg:text-lg">
                Do you not agree with its actions? Initialize and change its
                behavior with the simple click of a button. The easy-to-use
                Agathos Interface allows you to set up and change environment
                parameter schedules in seconds, so that you can focus on growing
                your business, while Agathos focuses on growing your crops.
              </p>
            </div>
          </div>
          <div>
            <div className="flex align-middle justify-center items-center pb-10">
              {/* <img
                className="lg:h-[calc(0.7*100vh)] rounded-lg object-cover object-center border-2"
                src={image4}
                alt="plants farms"
              /> */}
              <ImageSlider />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
