import { Autocomplete, TextField } from "@mui/material"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getOverviews } from "../Services/firestore"

const HomePage = () => {
  const [services, setServices] = useState([])

  const navigate = useNavigate()

  const goSearchPage = () => {
    let keyword = document.getElementById('default-search').value
    let service = services.find((service) => { return service.label === keyword })
    service ? navigate(`/review/${service.id}`) : navigate(`/search/${keyword}`)
  }

  useEffect(() => {
    const getData = async () => {
      const overviews = await getOverviews("");
      const services = overviews.map(overview => { return { 'id': overview.id, 'label': overview.name } })
      setServices(services)
    }
    getData()
  }, [])

  return (
    <>
      <div>
        <div className="background-blue px-60">
          <div className="py-8">
            <h3 className="text-white text-center font-bold text-4xl pb-8">Sofware Reviews You Can Trust</h3>
            <form className="w-1/2 mx-auto pb-8">
              <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
              <div class="relative">
                <Autocomplete
                  freeSolo
                  classes={{ root: "bg-gray-50 rounded" }}
                  id="default-search"
                  options={services}
                  renderInput={(params) => <TextField {...params} placeholder="Enter cloud name..." />}
                />
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