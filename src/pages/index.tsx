import React from "react"

import Layout from "../components/layout"
import FeaturedImage from "../components/featured-image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div style={{ maxWidth: `1200px`, marginBottom: `1.45rem` }}>
      <FeaturedImage />
    </div>
    {/* <h1>Romans</h1> */}
    <p>
    Romans is a 90 minute irreverent retelling of the founding myth of Rome, set simultaneously in the Age of Tyrants and a desolate wasteland following the collapse of modern civilization. Determined to start the Next Great Society, Romulus and Remus are thrown into conflict over their past and future legacy. The legendary twins battle for control over a nation that does not yet exist and vie for the affections of the wife of their most ferocious general...whose self-sovereign agenda ultimately throws all their best laid plans into chaos.
    </p>
    <p>
      <a href="https://www.eventbrite.com/e/romans-x-dixon-place-tickets-184052484937" target="_blank" rel="noreferrer">
        <strong>Get your tickets on Eventbrite!</strong>
      </a>
    </p>
  </Layout>
)

export default IndexPage
