import Image from 'next/image'
import { Fragment } from 'react'
import ReactChart from './ReactChart'
export default function Home() {
  return (
    <>
    <div className="flex items-center">
      <ReactChart/>
      <ReactCharts/>
      </div>
    </>
  )
}
