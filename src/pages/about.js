// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import {
  // main component
  Chart,
  // graphs
  Bars, Cloud, Dots, Labels, Lines, Pies, RadialLines, Ticks, Title,
  // wrappers
  Layer, Animate, Transform, Handlers,
  // helpers
  helpers, DropShadow, Gradient
} from 'rumble-charts';

const series = [{
  data: [10, 10, 10, 9, 9, 8, 7, 7, 6, 5, 4, 2, 1, 0]
}]

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
      <h1>Below is a rumble chart of my energy this semester, it has been rough!</h1>
      <Chart width = {600} height = {250} series = {series} minY={0} maxY={11}>
      <Bars innerPadding={5} groupPadding={10} />
      <Lines />
      <Dots />
    </Chart>
    </Layout>
  )
}

// Step 3: Export your component
export default AboutPage