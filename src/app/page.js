'use client'
// Importing required modules

import { Navbar } from './components/Navbar'

// Home component
export default function Home() {
  return (
    <>
      <Navbar />
      {
        process.env.NODE_ENV=="development"? 
        <h2> you are on development mode </h2>
        :
        <h2>you production</h2>
      }
      
      <div className="custom-shape-divider-top-1718795163">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#0099ff"
            fill-opacity="1"
            d="M0,96L14.1,90.7C28.2,85,56,75,85,74.7C112.9,75,141,85,169,112C197.6,139,226,181,254,176C282.4,171,311,117,339,117.3C367.1,117,395,171,424,181.3C451.8,192,480,160,508,154.7C536.5,149,565,171,593,186.7C621.2,203,649,213,678,229.3C705.9,245,734,267,762,234.7C790.6,203,819,117,847,96C875.3,75,904,117,932,160C960,203,988,245,1016,256C1044.7,267,1073,245,1101,218.7C1129.4,192,1158,160,1186,149.3C1214.1,139,1242,149,1271,181.3C1298.8,213,1327,267,1355,261.3C1383.5,256,1412,192,1426,160L1440,128L1440,320L1425.9,320C1411.8,320,1384,320,1355,320C1327.1,320,1299,320,1271,320C1242.4,320,1214,320,1186,320C1157.6,320,1129,320,1101,320C1072.9,320,1045,320,1016,320C988.2,320,960,320,932,320C903.5,320,875,320,847,320C818.8,320,791,320,762,320C734.1,320,706,320,678,320C649.4,320,621,320,593,320C564.7,320,536,320,508,320C480,320,452,320,424,320C395.3,320,367,320,339,320C310.6,320,282,320,254,320C225.9,320,198,320,169,320C141.2,320,113,320,85,320C56.5,320,28,320,14,320L0,320Z"
          ></path>
        </svg>

        <h1>my name is poja</h1>
      </div>
    </>
  )
}
