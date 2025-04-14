import { Suspense } from 'react'
import './App.css'
import DaisyNav from './component/Daisynav/DaisyNav'
import Navbar from './component/navlink/Navbar'
import Pricing from './component/Priicing option/Pricing'
import ResultChart from './component/Result Chart/ResultChart'



const pricingPromise = fetch('pricingData.json')
.then(res => res.json())


function App() {



  return (
    <>
      <header>

        <Navbar></Navbar>

      </header>
      <main>
        <Suspense fallback={<span className="loading loading-spinner text-info"></span>}>
          <Pricing pricingPromise={pricingPromise}></Pricing>
        </Suspense>


        <ResultChart></ResultChart>
      </main>

    </>
  )
}

export default App
