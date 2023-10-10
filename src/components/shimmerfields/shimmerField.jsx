import React from "react"
import ContentLoader from "react-content-loader"
import "./style.css";

const ShimmerField = (props) => (
  <ContentLoader className="shimmer-container"
    height={35}
    width={275}
    speed={2}
    backgroundColor={'#555B59'}
    foregroundColor={'#f3f3f3'}
    viewBox="0 0 275 35"
  >
    <rect x="0" y="0" rx="20" ry="20" width="275" height="35" />
  </ContentLoader>
)

export default ShimmerField
