import image1 from "../Assets/SDGTop.jpg";
import image2 from "../Assets/sdg1.jpg";
import image3 from "../Assets/sdg2.jpg";
import image4 from "../Assets/sdg3.jpg";
import poster from "../Assets/SDGPoster.png";

export default function SDGPage() {
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
            <p className="md:text-2xl">SUSTAINABLE DEVELOPMENT GOALS</p>
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
        <p className="text-sm">
          Image by{" "}
          <a href="https://www.freepik.com/free-photo/sustainable-development-goals-still-life_38687421.htm#query=sustainable%20development%20goals&position=2&from_view=keyword&track=ais&uuid=f32ca988-de4b-4004-aa58-8c0d78c3fe62">
            Freepik
          </a>
        </p>
      </div>
      <div className="mx-28 text-gray-600">
        {/* <p className="text-4xl font-semibold mx-auto w-full text-center ">
          Towards a Sustainable Future
        </p> */}
        <div className="flex w-full justify-center">
          <img
            className="w-[100%] md:w-[80%] rounded-lg object-cover object-center "
            src={poster}
            alt="Sensors"
          />
        </div>
        <div className="grid md:grid-cols-1 pt-10 gap-x-9 gap-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="flex flex-col justify-center h-full col-span-2 space-y-4">
              <div className="text-left space-y-2">
                <p className="text-green-600 text-3xl font-semibold pb-4">
                  SDG Goal 1: No Poverty{" "}
                </p>
                <p>
                  Agathos will stimulate the construction of vertical farms in
                  regions where food is normally scarce or expensive and instead
                  provide the people with inexpensive, fresh, local food. These
                  facilities will also create new job opportunities.
                </p>
              </div>
              <div className="text-left space-y-2">
                <p className="text-green-600 text-3xl font-semibold pb-4">
                  SDG Goal 2: Zero Hunger
                </p>
                <p>
                  By stimulating new inexpensive vertical farms, we can assure
                  food production in parts of the world that would otherwise go
                  hungry.
                </p>
              </div>
              <div className="text-left space-y-2">
                <p className="text-green-600 text-3xl font-semibold pb-4">
                  SDG Goal 3: Good Health and Well-Being{" "}
                </p>
                <p>
                  By shortening food supply chains, we help in getting fresher
                  food onto a person’s plate. Furthermore, this food will be
                  produced for a cheaper price, which means they will be more
                  likely to choose to buy healthy food in the supermarket.
                </p>
              </div>
              <div className="text-left space-y-2">
                <p className="text-green-600 text-3xl font-semibold pb-4">
                  SDG Goal 8: Decent Work and Economic Growth
                </p>
                <p>
                  Stimulating vertical farms in rural areas creates job
                  opportunities for locals and stimulates the local economy.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center align-middle pb-10 md:pb-0">
              <img
                className="w-[100%] md:w-[80%] rounded-lg object-cover object-center aspect-[1/1] md:aspect-[9/12]"
                src={image2}
                alt="Sensors"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="flex flex-col items-center justify-center align-middle pb-10 md:pb-0">
              <img
                className="w-[100%] md:w-[80%] rounded-lg object-cover object-center aspect-[1/1] md:aspect-[9/12]"
                src={image3}
                alt="Sensors"
              />
            </div>
            <div className="flex flex-col justify-center h-full col-span-2 space-y-4">
              <div className="text-left space-y-2">
                <p className="text-green-600 text-3xl font-semibold pb-4">
                  SDG Goal 9: Industry, Innovation, and Infrastructure{" "}
                </p>
                <p>
                  By contributing to the development of the field of vertical
                  farming, we foster further sustainable innovation.
                </p>
              </div>
              <div className="text-left space-y-2">
                <p className="text-green-600 text-3xl font-semibold pb-4">
                  SDG Goal 10: Reduced Inequalities
                </p>
                <p>
                  By decreasing the price of production and supply of fresh
                  produce, people of lower economic standing will be able to get
                  as much access to fresh fruits and vegetables as other people.
                </p>
              </div>
              <div className="text-left space-y-2">
                <p className="text-green-600 text-3xl font-semibold pb-4">
                  SDG Goal 11: Sustainable Cities and Communities{" "}
                </p>
                <p>
                  Vertical farms can be set up anywhere, even in the middle of a
                  big city. We can therefore remove trucks supplying produce
                  from the countryside from the cities, making the roads safer
                  and less congested, and the air cleaner.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 pb-0 lg:pb-10">
            <div className="flex flex-col justify-center h-full col-span-2 space-y-4">
              <div className="text-left space-y-2">
                <p className="text-green-600 text-3xl font-semibold pb-4">
                  SDG Goal 13: Climate Action
                </p>
                <p>
                  Vertical farms have the promise of producing food more
                  sustainably, using renewable energy sources, and shortening
                  supply chains, which means lower emission of greenhouse gasses
                  in transportation and storage.
                </p>
              </div>
              <div className="text-left space-y-2">
                <p className="text-green-600 text-3xl font-semibold pb-4">
                  SDG Goal 14: Life Below The Sea
                </p>
                <p>
                  Traditional farms contaminate water, which gets dumped into
                  lakes and seas, troubling sealife. Vertical farms on the other
                  hand recycle more than 99% of their water, drastically
                  reducing this stress on life below the sea.
                </p>
              </div>
              <div className="text-left space-y-2">
                <p className="text-green-600 text-3xl font-semibold pb-4">
                  SDG Goal 15: Life on Land
                </p>
                <p>
                  Vertical farms require much less space to produce crops than
                  traditional farms, which means that areas of land which were
                  previously used by farms can now be given back to nature, so
                  that wildlife can return to it.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center align-middle pt-5 pb-10 lg:pb-0 lg:pt-0">
              <img
                className="w-[100%] md:w-[80%] rounded-lg object-cover object-center aspect-[1/1] md:aspect-[9/12]"
                src={image4}
                alt="Sensors"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
