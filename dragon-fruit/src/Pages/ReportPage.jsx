import image1 from "../Assets/journeytop.jpg";
import image2 from "../Assets/journey1.jpg";
import image3 from "../Assets/journey2.jpg";
import image4 from "../Assets/journey3.jpg";
import image5 from "../Assets/journey4.jpg";
import image6 from "../Assets/journey5.jpeg";
import image7 from "../Assets/journey6.jpg";

export default function ReportPage() {
  return (
    <div className="mt-[64px] h-screen font-mono">
      <div className="relative h-[50%] w-full ">
        <img
          className="absolute w-full h-[100%] object-cover object-center brightness-50 z-10"
          src={image1}
          alt="plants farms"
        />
        <div className="h-full grid grid-cols-3 relative z-30 text-white font-semibold text-xl lg:mx-36 mx-5">
          <div className="flex flex-col col-span-3 lg:col-span-2 justify-center align-middle items-center lg:pb-10 text-center lg:text-left lg:items-start">
            <p className="lg:text-2xl">OUR JOURNEY</p>
            <p className="lg:pt-4 text-xl lg:text-3xl">
              Embark on Our Sustainable Journey: Green Solutions for a Better
              Tomorrow
            </p>
            <p className="pt-2 text-base lg:text-lg">
              Explore how we're revolutionizing agriculture with cutting-edge
              technology to cultivate healthier crops, empower farmers, and
              drive positive change worldwide.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-4 lg:mx-28 text-gray-600">
        <p className="text-2xl lg:text-4xl font-semibold mx-auto w-full text-center pt-10 pb-6">
          Future-Proofing Dragon Fruit
        </p>
        <div className="grid lg:grid-cols-1 pt-10 gap-x-9 gap-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="flex flex-col justify-center h-full col-span-1 space-y-4">
              <div className="text-left space-y-2">
                <p className="text-green-600 text-3xl font-semibold pb-4">
                  Coming up with the idea
                </p>
                <p>
                  The root of our idea comes from the collective passion of our
                  team for sustainability. Motivated by a desire to make a
                  meaningful contribution, we decided to identify industries
                  grappling with sustainability challenges that could benefit
                  from our engineering expertise. Our exploration led us to the
                  realm of vertical farming, where the fusion of technology and
                  agriculture intrigued us deeply.
                </p>
                <p>
                  As we delved into extensive research and conducted numerous
                  interviews, a clear pattern emerged: environmental control
                  posed a significant and persistent obstacle for many vertical
                  farms, particularly smaller-scale. This led us to delve deeper
                  into this challenge and explore potential solutions. We
                  recognized the opportunity to leverage our engineering
                  backgrounds to address this pressing issue and potentially
                  revolutionize the landscape of sustainable agriculture.
                </p>
              </div>
            </div>
            <div className="col-span-2 flex flex-col items-center justify-center align-middle pt-10 lg:pb-0">
              <img
                className="w-[100%] lg:w-[80%] h-96 rounded-lg object-cover object-center aspect-[1/1] lg:aspect-video"
                src={image2}
                alt="Sensors"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="flex flex-col items-center justify-center align-middle pb-10 lg:pb-0">
              <img
                className="w-[100%] lg:w-[80%] rounded-lg object-cover object-center aspect-[1/1] lg:aspect-[9/12]"
                src={image3}
                alt="Sensors"
              />
            </div>
            <div className="flex flex-col justify-center h-full col-span-2 space-y-4">
              <div className="text-left space-y-2">
                <p className="text-green-600 text-3xl font-semibold pb-4">
                  User Interview
                </p>
                <p>
                  Sanaz (Oman, Iran - 09/02/2024): faces challenges with
                  unsuitable weather conditions. Suggests improvements in
                  sensors and humidity control; emphasizes the need for
                  sustainable agriculture without pesticides and the importance
                  of electronics in monitoring systems for vertical farming.
                </p>
                <p>
                  Frank Pepper (Canada - 09/02/2024): Frank discusses the
                  development of vertical farming using artificial soil-based
                  systems outdoors to mitigate energy costs and maximize crop
                  output, aiming to make indoor farming viable with rotating
                  racks and minimal energy consumption, while addressing
                  challenges such as irrigation and biodiversity loss.
                </p>
                <p>
                  Wissem M (in Paris at the time - 10/02/2024): from Tunisia,
                  discusses her experience transitioning from food science to
                  vertical farming, focusing on improving yield and quality of
                  lettuce at Ljusgårda AB in Sweden, while highlighting
                  challenges in irrigation, algae control, and humidity
                  management, as well as the need for better research and
                  development within the industry.
                </p>
                <p>
                  Mohamad Shamsi (14/02/2024): Mohamad Shamsi, a vertical
                  farming researcher, discusses the commercialization of
                  vertical farming, focusing on its advantages in controlled
                  agriculture environments and the challenges faced in scaling
                  up production, emphasizing the need for affordable and
                  efficient technology integration, particularly in sensor
                  development, while highlighting the potential of vertical
                  farming in specific regions like Scandinavia and the Gulf
                  countries due to climate suitability.
                </p>
                <p>
                  Xuemeng Lai (15/02/2024): Xuemeng Lai, a plant scientist in
                  R&D for vertical farming, discusses the challenges and
                  advancements in the industry, including self-designed systems,
                  robotics, seed varieties, and lighting technologies,
                  highlighting the industry's youth, hardware limitations, and
                  the importance of optimizing yield through improved
                  engineering and control systems, with notable mentions of
                  companies excelling in light and growth bed technologies like
                  Philips, while emphasizing the high cost and complexity of
                  equipment and data interpretation.
                </p>
                <p>
                  Thea-Isabella Otto (15/02/2024): discusses the challenges
                  faced by companies in the vertical farming industry, including
                  financial constraints, regulatory hurdles, and the need for
                  collaboration with bio professionals, while highlighting
                  emerging opportunities in regions like Singapore and the
                  Middle East, and emphasizing the importance of smart energy
                  contracts and strategic partnerships.
                </p>
                <p>
                  Shoeb Ahmad (India - 16/02/2024): involved in business
                  development for AVF, outlines challenges including financing
                  and misconceptions about competition with traditional farming,
                  discusses disruptive technologies and regional differences,
                  and highlights the potential of vertical farming to address
                  specific regional issues like low saffron yield in Kashmir,
                  India, while emphasizing the need for tailored solutions and
                  expertise in plumbing and technology implementation.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="flex flex-col justify-center h-full col-span-1 space-y-4">
              <div className="text-left space-y-2">
                <p className="text-green-600 text-3xl font-semibold pb-4">
                  Hypotheses and Prototype Development
                </p>
                <p>
                  From the user interviews we conducted, we assembled a few
                  hypotheses about user pain points and our potential value
                  propositions. The number one factor that all interviews seemed
                  to mention was environmental control, adjusting the
                  temperature, humidity, light intensity, etc.
                </p>
                <p>
                  Some companies were still doing this manually, which resulted
                  in a lot of boring labor done by highly educated people. What
                  we wanted to test is whether users were open to giving this
                  control over the environment out of hand, to let a computer do
                  this automatically.
                </p>
                <p>
                  What we also wanted to test was whether the parameters and
                  methods of controlling the environment we had in mind were
                  also what seemed useful to our customers. To test these
                  hypotheses, we created a mockup website with graphs displaying
                  the evolution of some environmental parameters over time, as
                  well as general metrics for the farm, such as overall power
                  consumption.
                </p>
              </div>
            </div>
            <div className="col-span-2 flex flex-col items-center justify-center align-middle pt-10 lg:pb-0">
              <img
                className="w-[100%] lg:w-[80%] h-96 rounded-lg object-cover object-center aspect-[1/1] lg:aspect-video"
                src={image4}
                alt="Sensors"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="flex flex-col items-center justify-center align-middle pb-10 lg:pb-0">
              <img
                className="w-[100%] lg:w-[80%] rounded-lg object-cover object-center aspect-[1/1] lg:aspect-[9/12]"
                src={image5}
                alt="Sensors"
              />
            </div>
            <div className="flex flex-col justify-center h-full col-span-2 space-y-4">
              <div className="text-left space-y-2">
                <p className="text-green-600 text-3xl font-semibold pb-4">
                  User Testing and Pivots
                </p>
                <p>
                  Feedback led to adjustments in product features and user
                  interface designs. Initially focusing on all sizes of vertical
                  farms, we decided to eventually cater to only small and medium
                  sized farms after realizing there was a dearth of focussed
                  solutions for the smaller players in the industry. This pivot
                  was majorly influenced by Ben Pieterse, with whom we had an
                  online meeting on 28/03/2024.
                </p>
                <p>
                  Being an expert in the field and very knowledgeable in
                  existing technologies for vertical farms. He told us that
                  there are established solutions for large and very large
                  vertical farms that can monitor and automate in the way we are
                  planning to, and of course also do much more. However, those
                  solutions are extremely complex, expensive, and not
                  implementable for small farms. Additionally, feedback provided
                  by the professor Henrik Bolomgren and the teaching assistant
                  Marc-Lorenz Döhmer also helped us focus on the important
                  aspects and make critical choices.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="flex flex-col justify-center h-full col-span-1 space-y-4">
              <div className="text-left space-y-2">
                <p className="text-green-600 text-3xl font-semibold pb-4">
                  Proof of Concept
                </p>
                <p>
                  To thoroughly assess the feasibility of our idea and gain
                  insight into the challenges inherent in developing our
                  intended product, we opted to make a prototype. The resulting
                  split prototype effectively demonstrates the proof of concept
                  for our project. It incorporates humidity, light, and
                  temperature sensors, along with two relays serving as
                  actuators. These components are interconnected via a software
                  feedback loop, enabling control based on the humidity and
                  temperature variables.
                </p>
                <p>
                  Additionally, the prototype features an LCD interface equipped
                  with five buttons for adjusting controller settings, as well
                  as LEDs to indicate various states such as power, failure, and
                  current regulation of variables. A basic website hosted on the
                  microcontroller provides a simple web page for displaying
                  sensor data. It is still far from the final product, however,
                  it provides us with some confidence that our idea can be
                  turned into a useful and valuable product.
                </p>
              </div>
            </div>
            <div className="col-span-2 flex flex-col items-center justify-center align-middle pt-10 lg:pb-0">
              <img
                className="w-[100%] lg:w-[80%] h-96 rounded-lg object-cover object-center aspect-[1/1] lg:aspect-video"
                src={image6}
                alt="Sensors"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="flex flex-col items-center justify-center align-middle pb-10 lg:pb-0">
              <img
                className="w-[100%] lg:w-[80%] rounded-lg object-cover object-center aspect-[1/1] lg:aspect-[9/12]"
                src={image7}
                alt="Sensors"
              />
            </div>
            <div className="flex flex-col justify-center h-full col-span-2 space-y-4">
              <div className="text-left space-y-2">
                <p className="text-green-600 text-3xl font-semibold pb-4">
                  Competitors
                </p>
                <p>
                  There exist several companies with similar products to ours.
                  The most prevalent of these is Vertikit. They provide a
                  control system similar to Agathos. However, their system
                  depends on their in-house 4-in-1 sensors. These cost a lot of
                  money and don’t efficiently scale. When your farm requires
                  more light sensors, Vertikit requires you to buy additional
                  sensors that measure other metrics too. This can be a waste of
                  money if more of these other sensors aren’t necessary.
                  Moreover, if a new sensor enters the market, users of Vertikit
                  will not get these benefits, as they are stuck to the sensors
                  used within this company.
                </p>
                <p>
                  At Dragon Fruit, on the other hand, sensors can be connected
                  and switched in a plug-and-play manner. When new developments
                  hit the market, we support our customers switching to embrace
                  these changes. In fact, Agathos is designed to do so. When you
                  feel like a certain kind of sensor needs to be scaled up, this
                  is entirely possible without using other sensors too.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 pb-8">
            <div className="flex flex-col justify-center h-full col-span-3 space-y-4">
              <div className="text-left lg:text-center space-y-2">
                <p className="text-green-600 text-3xl font-semibold pb-4">
                  Future Developments and Our Strategies
                </p>
                <p>
                  As discussed before, one development that could disrupt this
                  industry is the development of next-level sensors. These could
                  be so beneficial to vertical farms that they decide to replace
                  all their current sensors with these. A company that depends
                  on previous sensors for their product to function will be in
                  trouble in this case, as they cannot necessarily pivot quickly
                  to use these new sensors. To prevent this from happening to
                  Dragon Fruit, we focus on designing Agathos to be as modular
                  as possible. Our plug-and-play solution will allow
                  communication with virtually any type of sensor, which not
                  only protects us from this potential threat, but actually
                  makes us a more attractive option for vertical farms with the
                  future in mind.
                </p>
                <p>
                  With the advancement of AI will come a generation of new
                  technology with the potential to disrupt. We want to embrace
                  this, which is why one of the development goals of Dragon
                  Fruit is to integrate learning algorithms into our products.
                  Imagine an environmental controller that can make minor
                  adjustments, measure the effects those changes have on crop
                  growth, and as such learn the optimal conditions for different
                  kinds of plants without any human intervention.
                </p>
                <p>
                  Climate change is another major issue within the agricultural
                  sector. If temperatures start to rise, then current growth
                  recipes might need to be changed. Spikes in popularity for
                  certain crops also play a part in this. If there is a high
                  demand for certain fruits or vegetables that a company is not
                  currently growing, then they will need to do much research and
                  hire professionals in order to get new growth recipes for
                  these crops. Both of these problems are solved by the
                  community-driven approach which is one of Dragon Fruit’s
                  milestones. We aim to create a community of farmers who can
                  share their knowledge in the sector with each other, so that
                  they can all benefit from it. If a farmer does not know how to
                  grow a crop, then another farmer in the community can help
                  them out by sharing their experiences. Along with solving this
                  problem, this will also lead to a dedicated customer base, and
                  will make Dragon Fruit’s name into an industry standard.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
