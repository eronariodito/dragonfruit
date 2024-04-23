import image1 from "../Assets/AboutTop.jpg";
import image2 from "../Assets/about2.jpg";
import image3 from "../Assets/about3.jpg";
import steyn from "../Assets/Steyn.jpeg";
import semere from "../Assets/Semere.jpg";
import daniele from "../Assets/Daniele.png";
import prashant from "../Assets/Prashant.jpeg";
import eron from "../Assets/Eron.jpeg";
import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <div className="mt-[64px] h-screen font-mono">
      <div className="relative h-[50%] w-full ">
        <img
          className="absolute w-full h-[100%] object-cover object-center brightness-50 z-10"
          src={image1}
          alt="plants farms"
        />
        <div className="h-full grid grid-cols-3 relative z-30 text-white font-semibold text-xl md:mx-36 mx-5">
          <div className="flex flex-col col-span-3 md:col-span-2 justify-center align-middle items-center md:pb-10 text-center md:text-left md:items-start">
            <p className="md:text-2xl">ABOUT US</p>
            <p className="md:pt-4 text-xl md:text-3xl">
              Welcome to Dragon Fruit, your partner in revolutionizing vertical
              farming.
            </p>
            <p className="pt-2 text-base md:text-lg">
              At Dragon Fruit, we are passionate about empowering growers with
              autonomous environment control technology to cultivate healthy,
              sustainable crops year-round.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-28 pt-10 text-gray-600">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="flex flex-col items-center justify-center align-middle pb-10 md:pb-0">
            <img
              className="w-[100%] md:w-[80%] rounded-lg object-cover object-center aspect-[1/1] md:aspect-[9/12]"
              src={image2}
              alt="Sensors"
            />
          </div>

          <div className="flex flex-col col-span-2 justify-center">
            <p className="text-green-600 text-3xl font-semibold pb-6">
              Our Mission
            </p>
            <p className="text-lg">
              Our mission at Dragon Fruit is simple yet profound: to transform
              indoor agriculture through innovation and data-driven solutions.
              We believe that by providing vertical farms with advanced
              environment control technology and intuitive monitoring tools, we
              can revolutionize the way crops are grown and harvested.
            </p>
            <p className="text-green-600 text-3xl font-semibold pb-6 pt-10">
              Who We Are
            </p>
            <p className="text-lg">
              Dragon Fruit was founded by a team of engineers at KTH Royal
              Institute of Technology in Sweden. We have a dedicated team with
              backgrounds in engineering and technology united with our
              enthusiasm for sustainability. Our diverse expertise allows us to
              approach the challenges of modern farming from multiple angles,
              ensuring that our solutions are comprehensive, effective, and
              tailored to the needs of our customers.
            </p>
          </div>
        </div>
        <div className="w-full">
          <p className="text-green-600 text-3xl font-semibold pb-6 pt-10 text-center">
            Meet the Team
          </p>
          <div className="grid grid-cols-3 md:grid-cols-5 text-center items-start">
            <a
              href="https://www.linkedin.com/in/daniele-stella-b93802203/?originalSubdomain=it"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center align-middle"
            >
              <img
                className="w-[80%] rounded-lg object-cover object-center aspect-[1/1]"
                src={daniele}
                alt="Sensors"
              />
              <p className="pt-4">Daniele Stella</p>
            </a>
            <a
              href="https://www.linkedin.com/in/eron-ariodito/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center align-middle"
            >
              <img
                className="w-[80%] rounded-lg object-cover object-center aspect-[1/1]"
                src={eron}
                alt="Sensors"
              />
              <p className="pt-4">Eron Ariodito Hermanto</p>
            </a>

            <a
              href="https://www.linkedin.com/in/pyadava/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center align-middle"
            >
              <img
                className="w-[80%] rounded-lg object-cover object-center aspect-[1/1]"
                src={prashant}
                alt="Sensors"
              />
              <p className="pt-4">Prashant Yadava</p>
            </a>
            <a
              href="https://www.linkedin.com/in/semere-berhanu/?originalSubdomain=fr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center align-middle"
            >
              <img
                className="w-[80%] rounded-lg object-cover object-center aspect-[1/1]"
                src={semere}
                alt="Sensors"
              />
              <p className="pt-4">Semere Wubshet Berhanu</p>
            </a>

            <a
              href="https://www.linkedin.com/in/steyn-mulder/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center align-middle"
            >
              <img
                className="w-[80%] rounded-lg object-cover object-center aspect-[1/1]"
                src={steyn}
                alt="Sensors"
              />
              <p className="pt-4">Steyn Jorden Mulder</p>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 pt-10">
          <div className="flex flex-col col-span-2 justify-center">
            <p className="text-green-600 text-3xl font-semibold pb-6">
              What We Do
            </p>
            <p className="text-lg">
              At Dragon Fruit, we offer controllers, designed specifically for
              vertical farming operations, which monitor key environmental
              factors such as temperature, humidity, light intensity, CO2
              levels, and soil moisture. This information is used to
              autonomously adjust environment controllers, such as heaters and
              humidifiers, allowing vertical farms to optimize growing
              conditions and maximize yields.
            </p>
            <p className="text-green-600 text-3xl font-semibold pb-6 pt-10">
              Why Choose Dragon Fruit
            </p>
            <p className="text-lg">
              When you choose Dragon Fruit, you are not just buying a product –
              you are investing in your future. We are committed to supporting
              vertical farms every step of the way, from installation and setup
              to ongoing support and maintenance. With Dragon Fruit, you can
              rest assured that you are getting a reliable, user-friendly
              solution that delivers real results.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center align-middle pb-10 md:pb-0">
            <img
              className="w-[100%] md:w-[80%] rounded-lg object-cover object-center aspect-[1/1] md:aspect-[9/12]"
              src={image3}
              alt="Sensors"
            />
          </div>
        </div>
        <div className="pt-10">
          <div className="flex flex-col items-center  text-center md:px-20 pb-10">
            <p className="text-green-600 text-3xl font-semibold pb-6">
              Get Started Today!
            </p>
            <p className="text-lg">
              Ready to take your vertical farming operation to the next level?
              Contact us today to learn more about Dragon Fruit and how our
              innovative solutions can help you grow healthier, more sustainable
              crops year-round. Join us in shaping the future of agriculture
              with Dragon Fruit!
            </p>
            <Link
              to="javascript:void(0)"
              onClick={() => (window.location = "mailto:ariodito@kth.se")}
            >
              <button className="mt-5 md:w-40 rounded-3xl bg-transparent border-green-500 border-2 px-2 py-2 hover:bg-green-500 transition-all ">
                Contact Us!
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
