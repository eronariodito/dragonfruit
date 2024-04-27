import image1 from "../Assets/markettop.jpg";
import image2 from "../Assets/market1.jpg";
import image3 from "../Assets/market2.jpg";
import image4 from "../Assets/market3.jpg";
import image5 from "../Assets/market4.jpg";
import image6 from "../Assets/market5.jpg";
import image7 from "../Assets/market6.jpg";
import image8 from "../Assets/market7.png";

export default function MarketPage() {
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
            <p className="lg:text-2xl">MARKET ASSESMENT</p>
            <p className="lg:pt-4 text-xl lg:text-3xl">
              Unveiling Insights and Opportunities for Sustainable Growth
            </p>
            <p className="pt-2 text-base lg:text-lg">
              Delve into our comprehensive market assessment, revealing key
              trends, opportunities, and strategies driving sustainable
              agriculture forward.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-4 lg:mx-28 text-gray-600">
        {/* <p className="text-2xl lg:text-4xl font-semibold mx-auto w-full text-center pt-10 pb-6">
          Future-Proofing Dragon Fruit
        </p> */}
        <div className="grid lg:grid-cols-1 pt-10 gap-x-9 gap-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="flex flex-col justify-center h-full col-span-1 space-y-4">
              <div className="text-left space-y-2">
                <p className="text-green-600 text-3xl font-semibold pb-4">
                  Financials
                </p>
                <p>
                  The financial attractiveness of the opportunity depends on
                  factors such as market adoption rates, distribution channels,
                  and operational costs. Assumptions include steady market
                  growth and successful customer acquisition strategies.
                </p>
                <p>
                  The Total Addressable Market (TAM) for the vertical farming
                  industry in 2024 is estimated to be $8 billion <sub>1</sub>,
                  reflecting the immediate revenue potential for companies
                  providing innovative agricultural solutions within this market
                  space.
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
                <p>
                  According to Virtue market research <sub>2</sub>, the European
                  vertical farming market size was projected at $1.89 billion in
                  2023, and is expected to reach a market size of $6.2 billion
                  by 2030, with a CAGR of 18.5%.
                </p>
                <p>
                  Determining the Serviceable Available Market (SAM) was
                  difficult due to lack of publicly available statistics about
                  the market shares of small and medium sized vertical farms as
                  compared to big players in the vertical farming market of
                  Europe.
                </p>
                <p>
                  While we continue to work in obtaining the required market
                  share statistics, just to show our calculations for the time
                  being, if we assume a market share of 25% by the small and
                  medium sized vertical farms in Europe, a typical calculation
                  for SAM would look as follows:
                </p>
                <div className="flex flex-col space-y-4 self-center text-center rounded-lg py-4 justify-center">
                  <div className="border-2 mx-20 py-5 rounded-lg">
                    <p>SAM = TAM×Market Share Percentage</p>
                    <p>SAM = $1.89 billion×25%</p>
                    <p>SAM = $472.5 million</p>
                  </div>
                </div>
                <p>
                  We would like to reiterate that these figures are not exact
                  representations of real-world data; rather, they illustrate
                  our understanding that only a limited segment of the Total
                  Addressable Market is accessible to us, considering our
                  specific product offerings and market focus.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="flex flex-col justify-center h-full col-span-1 space-y-4">
              <div className="text-left space-y-2">
                <p>
                  In determining the Serviceable Obtainable Market (SOM), i.e.,
                  the estimate of the percentage we believe Dragon Fruit can
                  capture, we considered the following factors:
                </p>
                <p>
                  1. Competitive Analysis: Although there are existing players
                  in the segment we are focusing on, we consider our offering
                  having key competitive advantages by focusing on a specific
                  niche.
                </p>
                <p>
                  2. Product Differentiation: Having undertaken a thorough
                  evaluation of how our product stands out from the competition
                  in terms of features, pricing, and technology, we believe we
                  have key product differentiators.
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
                <p>
                  3. Sales and Marketing Strategy: Having assessed not only
                  established and conventional sales channels such as B2B
                  pitches, trade events, we see a great opportunity to leverage
                  personal connections and word-of-mouth channels in the
                  vertical farming community to gain users.
                </p>
                <p>
                  4. Historical Data: Our estimates are informed by a
                  comprehensive analysis of historical data from similar
                  products in the vertical farming industry.
                </p>
                <p>
                  5. Customer Feedback: We anticipate considerable market
                  acceptance based on the immensely positive reaction and
                  insights from customer interviews and product feedback
                  including testing undertaken.
                </p>
                <p>
                  Based on these factors, we estimate a 10% market penetration
                  in the initial 3 years of launch. As we do not have complete
                  market share statistics, we are again restricted in presenting
                  a valid SOM.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="flex flex-col justify-center h-full col-span-1 space-y-4">
              <div className="text-left space-y-2">
                <p>
                  However, for the sake of completeness, if we had the correct
                  market share numbers, our SOM calculations would look like:
                </p>
                <div className="flex flex-col space-y-4 self-center text-center rounded-lg py-4 justify-center">
                  <div className="border-2 mx-20 py-5 rounded-lg">
                    <p>SOM = SAM×Estimated Market Capture Percentage</p>
                    <p>SOM = $472.5 million×10% </p>
                    <p>SOM = $47.25 million</p>
                  </div>
                </div>
                <p>
                  Again, this is just to demonstrate how we would arrive at the
                  SOM once we have the real numbers denoting the percentage of
                  small and medium sized vertical farms in Europe.
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
                  Pricing
                </p>
                <p>
                  Several key factors have gone into informing the pricing
                  strategy for Agathos, the all-in-one automated environmental
                  sensor and control system.
                </p>
                <p>
                  Below table shows the cost of every component that would be
                  needed in making a single unit of Agathos. We would like to
                  emphasize that these prices are an upper-bound on the per-unit
                  retail price applicable to individual consumers compiled from
                  various online commerce websites dealing in electronic
                  components. These prices are not reflective of potential
                  business-to-business negotiated rates, which are expected to
                  be even lower based on quantity, contractual agreements, and
                  other partnership considerations.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 pb-10">
            <div className="flex flex-col items-center justify-center align-middle pb-10 lg:pb-0">
              <img
                className="w-[50%] lg:w-[80%] rounded-lg object-cover object-center"
                src={image8}
                alt="Sensors"
              />
            </div>
            <div className="flex flex-col justify-center h-full col-span-2 space-y-4">
              <div className="text-left space-y-2">
                <p>
                  Since a commercial rollout of the product would need to take
                  into consideration several other factors beyond just
                  manufacturing, many of which are currently not clear, we have
                  resorted to a competition-based pricing strategy which sets
                  the product price based on competitors’ strategies costs,
                  costs, prices and market offerings.
                </p>
                <p>
                  The factors, in addition to manufacturing, include:
                  <ul>
                    <li> {"\u00b0"} Research and development</li>
                    <li>{"\u00b0"} Marketing and Sales</li>
                    <li>{"\u00b0"} Distribution Costs</li>
                    <li>{"\u00b0"} Customer Support and Service</li>
                  </ul>
                </p>
                <p>
                  After careful deliberations, the price of Agathos was
                  determined to be €900. Several key factors have contributed to
                  this price point, including our brand positioning, customer
                  segments, product lifecycle, and overall business goals. At
                  this price, Dragon Fruit shall cover all costs while remaining
                  competitive and profitable.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full border-t-2 mt-5 pb-10">
            <ul>
              <li>
                [1] (last checked: 27.04.2024) Projected vertical farming market
                worldwide from 2022 and 2032{" "}
                <a href="https://www.statista.com/statistics/487666/projection-vertical-farming-market-worldwide/">
                  https://www.statista.com/statistics/487666/projection-vertical-farming-market-worldwide/
                </a>
              </li>
              <li>
                [2] (last checked: 27.04.2024) Europe Vertical Farming Market
                Size{" "}
                <a href="https://virtuemarketresearch.com/report/europe-vertical-farming-market">
                  https://virtuemarketresearch.com/report/europe-vertical-farming-market
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
