import { useNavigate } from "react-router-dom"

const HomePage = () => {

  const navigate = useNavigate()

  const goSearchPage = () => {
    navigate('/search')
  }

  return (
    <>
      <div>
        <div className="background-blue px-60">
          <div className="py-8">
            <h3 className="text-white text-center font-bold text-4xl pb-8">Sofware Reviews You Can Trust</h3>
            <form className="w-1/2 mx-auto pb-8">
              <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
              <div class="relative">
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input type="search" id="default-search" class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter cloud name..." required />
                <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={goSearchPage}>Search</button>
              </div>
            </form>
            <p className="text-center text-2xl color-light-blue pb-24">5,586 reviews & ratings from 100% verified users</p>
            <p className="text-white text-center font-bold text-2xl">Choose Confidently</p>
            <p className="text-center text-2xl color-light-blue pb-16">Get the product feedback you need from people like you.</p>
            <div className="flex pb-8">
              <div className="flex p-3">
                <img src="assets/images/homepage/feature-1.svg" alt="" style={{ width: '64px', height: '64px' }} />
                <div>
                  <p className="text-white font-bold text-lg pb-2">100% Trusted</p>
                  <p className="text-lg color-light-blue">Every reviewer verified, every review vetted, since day one.</p>
                </div>
              </div>
              <div className="flex p-3">
                <img src="assets/images/homepage/feature-2.svg" alt="" style={{ width: '64px', height: '64px' }} />
                <div>
                  <p className="text-white font-bold text-lg pb-2">No Ads, No Bias</p>
                  <p className="text-lg color-light-blue">We don't sell leads or paid placements. Vendors can't skew results, period.</p>
                </div>
              </div>
              <div className="flex p-3">
                <img src="assets/images/homepage/feature-3.svg" alt="" style={{ width: '64px', height: '64px' }} />
                <div>
                  <p className="text-white font-bold text-lg pb-2">Quality First</p>
                  <p className="text-lg color-light-blue">Our review process results in more depth, detail, and balance than other sites.</p>
                </div>
              </div>
            </div>
            <button className="p-3 background-blue color-light-blue text-lg rounded border-blue mb-20">Our Promise To You</button>
          </div>
        </div>

        <div className="bg-white px-60">
          <div className="py-8">
            <div className="text-2xl text-right">We also help tech vendors</div>
            <div className="text-3xl text-right color-dark-pink font-bold pb-10">Sell Authentically</div>
            <div className="flex gap-4 pb-20">
              <div className="flex">
                <img src="assets/images/homepage/value-1.svg" alt="" style={{ width: '64px', height: '64px' }} />
                <div className="ml-2">
                  <p className="font-bold text-lg pb-2">Truth At Scale</p>
                  <p className="text-lg">We make it easy to get your customers on the record.</p>
                </div>
              </div>
              <div className="flex">
                <img src="assets/images/homepage/value-2.svg" alt="" style={{ width: '64px', height: '64px' }} />
                <div className="ml-2">
                  <p className="font-bold text-lg pb-2">One easy Platform</p>
                  <p className="text-lg">All the tools you need to tag, filter, and share your reviews.</p>
                </div>
              </div>
              <div className="flex">
                <img src="assets/images/homepage/value-3.svg" alt="" style={{ width: '64px', height: '64px' }} />
                <div className="ml-2">
                  <p className="font-bold text-lg pb-2">Full Funnel Impact</p>
                  <p className="text-lg">Use reviews to convert more buyers, close deals faster, and reduce churn.</p>
                </div>
              </div>
            </div>
            <div className="flex justify-end items-center">
              <span className="text-lg mr-4">Buyers want to hear from peers they can trust</span>
              <button className="background-blue rounded text-white px-4 py-2 font-semibold">Get Started Today</button>
            </div>
          </div>
        </div>

        <div className="background-light-blue px-60">
          <div className="py-8 px-52">
            <img src="assets/images/homepage/detail.svg" alt="" style={{ width: '64px', height: '64px' }} className="mx-auto" />
            <div className="text-3xl color-dark-pink font-bold pb-10 text-center">We connect buyers and vendors with the most trusted content.</div>
            <div className="text-center texl-large color-gray">We believe truth should drive every business decision. Our reviews empower buyers to make informed decisions, but they are also a goldmine for vendors who want to authentically engage prospects on TrustRadius and beyond. That is why we built our business on quality and trust, not selling leads or trading on brands. Whether you're a buyer or a vendor, you know we have your back
            </div>
          </div>
          <div className="text-2xl font-bold py-10 text-center color-gray">Popular Categories</div>
          <div className="grid grid-cols-3 gap-y-2 px-16 color-blue pb-8">
            <button className="text-left hover:underline"><a>A/B Testing Tools</a></button>
            <button className="text-left hover:underline"><a>Accounting Software</a></button>
            <button className="text-left hover:underline"><a>Ad Serving & Retargeting Platforms</a></button>
            <button className="text-left hover:underline"><a>All-in-One Marketing Platforms</a></button>
            <button className="text-left hover:underline"><a>Application Tracking Systems (ATS)</a></button>
            <button className="text-left hover:underline"><a>Business Intelligence (BI) Tools</a></button>
            <button className="text-left hover:underline"><a>Collaboration Tools</a></button>
            <button className="text-left hover:underline"><a>Content Management Systems (CMS)</a></button>
            <button className="text-left hover:underline"><a>Customer Relationship</a></button>
            <button className="text-left hover:underline"><a>Management (CRM) Software</a></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage