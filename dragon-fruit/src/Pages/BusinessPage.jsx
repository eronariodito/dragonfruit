import image1 from "../Assets/businesstop.jpg";
import bmc from "../Assets/BMC.jpeg";

export default function BusinessPage() {
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
            <p className="md:text-2xl">BUSINESS</p>
            <p className="md:pt-4 text-xl md:text-3xl">
              Growing your plants and our business
            </p>
            <p className="pt-2 text-base md:text-lg">
              Your partner in environmental control needs to be strong and
              healthy. Here is how we ensure our business thrives in uncertain
              times.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-28 pt-10 text-gray-600">
        <p className="text-4xl font-semibold mx-auto w-full text-center pb-6">
          Our Business Model Canvas
        </p>
        <div className="flex w-full justify-center">
          <img
            className="w-[100%] md:w-[80%] rounded-lg object-cover object-center "
            src={bmc}
            alt="Sensors"
          />
        </div>
        <div className="grid md:grid-cols-1 pt-10 gap-x-9 gap-y-10">
          <div className="text-left space-y-2">
            <p className="text-green-600 text-3xl font-semibold pb-4">
              Value Proposition
            </p>
            <p>
              We want to relieve vertical farm owners of unnecessary work by
              automating the control of the indoor environment. Especially in
              the early stage of the business, running a vertical farm can be
              hectic. To prevent the owners from having to fine-tune the
              environmental parameters 24/7 manually, we take this pain out of
              their hands, so that they can focus on running a successful
              business.
            </p>
            <p>
              Furthermore, Agathos optimizes control of the indoor environment
              further than humans could on their own. Having much more precise
              reactions, a better overview of incoming data, and no need to
              stop, this solution can fine-tune parameters all day long.
            </p>
          </div>
          <div className="text-left space-y-2">
            <p className="text-green-600 text-3xl font-semibold pb-4">
              Customer Relations
            </p>
            <p>
              To hook customers, we want to provide free demos on small scales
              within their facilities, so that they can get a sense of how much
              work our solution will prevent them.
            </p>
            <p>
              To get Agathos up and running as quickly as possible, we provide a
              third-party technical support team for installation, so that they
              can get back to growing good food as soon as possible.
            </p>
            <p>
              If something is unclear or malfunctioning, we want to provide
              customer support to help them get back to producing. Furthermore,
              our employees can provide quick training with the Agathos
              Interface software to get the most out of our solution.
            </p>
            <p>
              We want to ensure our solution functions continuously in the farms
              without additional hassles. This is why we have automatic software
              updates to keep Agathos and its Interface in prime condition.
            </p>
          </div>
          <div className="text-left space-y-2">
            <p className="text-green-600 text-3xl font-semibold pb-4">
              Channels
            </p>
            <p>
              To reach unknowing future customers, we want to do sales pitches
              at companies and conventions on vertical farming, so that our
              mission is heard by everyone who needs to hear it.
            </p>
            <p>
              A major point on our roadmap is community. We envision a platform
              where different companies can share growth recipes and plant
              knowledge to benefit the crop growth of everyone involved. Word of
              mouth becomes an important factor here.
            </p>
            <p>
              We want to be able to get our mission across as quickly and
              clearly as possible. Our website is here for all the information
              and contact customers need.
            </p>
          </div>
          <div className="text-left space-y-2">
            <p className="text-green-600 text-3xl font-semibold pb-4">
              Customer Segments
            </p>
            <p>
              The major segment we want to focus on is small-scale vertical farm
              owners who do not have the time to fine-tune their indoor
              environment all day among all their other tasks. These people and
              companies usually do not have the capital to hire extensive teams
              to develop this technology in-house, which is why they look for an
              easy-to-use, relatively cheap solution to their problem of
              maintaining environmental control.
            </p>
            <p>
              Another segment is vertical farm owners who want to further
              optimize their environment or downscale the team that normally
              controls it. As manual labor will be more expensive in the long
              run, and an investment into our automated solution will result in
              a more precisely controlled environment, which in turn yields
              better crops.
            </p>
          </div>
          <div className="text-left space-y-2">
            <p className="text-green-600 text-3xl font-semibold pb-4">
              Revenue Streams
            </p>
            <p>
              Agathos and any additional sensors will be sold as asset sales for
              a list price. There will be a usage fee, which is volume dependent
              on how large the facility is and how many sensors need to be
              connected for installation of Agathos.
            </p>
          </div>
          <div className="text-left space-y-2">
            <p className="text-green-600 text-3xl font-semibold pb-4">
              Eco-Social Benefits
            </p>
            <p>
              The promise of vertical farms is to eventually have reduced energy
              consumption and emission of greenhouse gasses compared to
              traditional farms. Food made in these facilities is also pesticide
              free, as there are little to no bugs that can infiltrate these
              inside areas.
            </p>
            <p>
              If food can be grown indoors, this means farms can be located in
              the heart of cities, which means supply chains between farms and
              supermarkets will be much shorter than they are now. Especially if
              the country does not produce the food itself, but imports it from
              another country. This in turn will lead to fresher food being
              provided in supermarkets.
            </p>
            <p>
              If plants can be grown vertically, this means less land will be
              used to grow it. This will in turn lead to pieces of land being
              repurposed, and hopefully rewilded in some cases.
            </p>
            <p>
              Having vertical farms in areas that normally wouldn’t grow food
              also enables the local economy by providing job opportunities to
              locals and creating a cyclical economy by locals buying food from
              other locals. It also supports entrepreneurship for local farmers.
            </p>
          </div>
          <div className="text-left space-y-2">
            <p className="text-green-600 text-3xl font-semibold pb-4">
              Key Resources
            </p>
            <p>
              In order to develop Agathos, we will be needing a team of
              engineers for both the hardware and software side. Next to that,
              we will also be needing a facility for assembling the hardware.
              Then, we will need customer-facing employees for installation of
              Agathos in the farms and customer service for handling problems
              that customers may run into. Lastly, we will need some patents to
              protect our technology from being stolen by competitors.
            </p>
          </div>
          <div className="text-left space-y-2">
            <p className="text-green-600 text-3xl font-semibold pb-4">
              Key Activities
            </p>
            <p>
              In the early stage of our venture, product development will be of
              utmost importance, as without it, we wouldn’t have anything to
              sell. When we have developed our first version of Agathos, we will
              need to spread the word about our product, through promotion
              campaigns. This can be directly to companies, at conventions, or
              through digital channels. Lastly, we will be focusing on the
              outsourcing process of the installation of Agathos in the
              customers’ facilities.
            </p>
          </div>
          <div className="text-left space-y-2">
            <p className="text-green-600 text-3xl font-semibold pb-4">
              Key Partnerships
            </p>
            <p>
              A major partnership will be a buyer-supplier relationship with the
              suppliers of sensors and hardware parts which are needed for
              manufacturing Agathos. We will also need a strategic alliance with
              a non-competitor, namely an agency that provides us with people
              who can do the installation for the customers.
            </p>
          </div>
          <div className="text-left space-y-2">
            <p className="text-green-600 text-3xl font-semibold pb-4">
              Cost Structure
            </p>
            <p>
              We have variable costs based on the number of sales we make. These
              costs include material costs for hardware and sensors that we need
              to provide to the customer and salaries for installation. The
              fixed cost includes salaries for development of Agathos, and
              customer service.
            </p>
          </div>
          <div className="text-left space-y-2 pb-10">
            <p className="text-green-600 text-3xl font-semibold pb-4">
              Eco-Social Cost
            </p>
            <p>
              We want to partner with suppliers of sensors that provide products
              with the longest lifetime, so that as little material is wasted
              when sensors eventually need to be replaced. Another consideration
              for the eco-social cost is the material production cost. Dragon
              Fruit will use sustainable materials and ensure product designs
              that support reuse and recycling of materials.
            </p>
            <p>
              Lastly, we try to minimize our carbon footprint by carefully
              considering the travel to customers for installation. We opt to
              send local engineers to customers instead of flying a centralized
              unit all over the world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
