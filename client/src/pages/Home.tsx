//import React from 'react'
import { Container } from "../components/container/index"
import {
  FaBell,
  FaEnvelope,
  FaEllipsisV,
  FaArrowDown,
  FaArrowUp,
  FaProcedures,
  FaHospital,
  FaBed,
  FaSyringe,
  FaSyncAlt,
  FaSlidersH,
} from 'react-icons/fa'
import { FaUserMd } from 'react-icons/fa'
import CircleChart from "../components/organism/circleChart/index"
import { LineChart } from '../components/organism/lineChart/index'

export default function Home() {
  return (
    <Container>
      <div className="flex w-full   rounded-lg">
        <div className="container mx-auto  p-8 bg-secondary  rounded-lg shadow-lg">
          <div className="flex">
            {/* <!-- Content --> */}
            <div className="w-full p-4">
              <div className="flex justify-between">
                <div className="w-1/2 ">
                  <input
                    className="p-2 border rounded w-full"
                    placeholder="Search here..."
                    type="text"
                  />
                </div>
                <div className="flex items-center space-x-4">
                  <FaBell className="text-tertiary" />
                  <FaEnvelope className="text-primary" />
                  <FaEllipsisV className="text-gray-400" />
                </div>
              </div>
              <h2 className="text-2xl text-primary font-bold mt-4 mb-6">
                Panel de Control
              </h2>
              {/* <!-- Stats Grid --> */}
              <div className="flex flex-col lg:grid md:grid-cols-3 gap-4 mb-6 ">
                {/* <!-- Doctors --> */}
                <div className="bg-white p-6 shadow-lg rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-primary">Veterinarios</h3>
                      <p className="text-xl font-bold">5</p>
                      <p className="text-sm text-gray-600">Total</p>
                    </div>
                    <div className="text-primary">
                      <FaUserMd size={48} />
                    </div>
                  </div>
                  <div className="flex justify-between mt-2">
                    <div className="text-xs flex gap-1 items-center">
                      <FaArrowUp />
                      5
                    </div>
                    <div className="text-xs flex gap-1 items-center">
                      <FaArrowDown />
                      0
                    </div>
                  </div>
                </div>
                {/* <!-- FarmsMan --> */}
                <div className="bg-white p-6 shadow-lg rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-primary">Productores</h3>
                      <p className="text-xl font-bold">117</p>
                      <p className="text-sm text-gray-600">Total</p>
                    </div>
                    <div className="text-primary">
                      <FaProcedures size={48} />
                    </div>
                  </div>
                  <div className="flex justify-between mt-2">
                    <div className="text-xs flex gap-1 items-center">
                      <FaArrowUp />
                      105
                    </div>
                    <div className="text-xs flex gap-1 items-center">
                      <FaArrowDown /> 12
                    </div>
                  </div>
                </div>
                {/* <!-- Balance --> */}
                <div className="col-start-3 row-start-1 bg-white p-6 shadow-lg rounded-lg">
                  <div className="flex justify-between mb-2">
                    <h3 className="font-semibold text-xl text-primary">
                      Balance
                    </h3>
                    <span className="text-xs text-gray-600">Last 7 days</span>
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <p className="text-lg font-bold text-primary">
                        $ 1200.00
                      </p>
                      <p className="text-sm text-base">Income</p>
                    </div>
                    <div>
                      <p className="text-lg font-bold text-tertiary">
                        $ 500.00
                      </p>
                      <p className="text-sm text-base">Gastos</p>
                    </div>
                  </div>
                </div>

                {/* <!-- More Stats --> */}

                {/* <!-- Hospital Survey --> */}
                <div className="col-span-2 bg-white p-6 shadow-lg rounded-lg flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold text-primary">
                      Indicadores Servicio Técnico
                    </h2>
                  </div>
                  <div className="flex flex-col sm:grid h-full items-center grid-cols-3 gap-4 ">
                    <div className="flex flex-col items-center text-center">
                      <FaHospital size={48} className="text-primary" />
                      <p className="text-xl font-bold">126</p>
                      <p className="text-sm text-gray-600">Total Establecimientos</p>
                    </div>
                    <div className="text-center flex flex-col items-center">
                      <FaBed size={48} className="text-primary" />
                      <p className="text-xl font-bold">836</p>
                      <p className="text-sm text-gray-600">Animales</p>
                    </div>
                    <div className="text-center flex flex-col items-center">
                      <FaSyringe size={48} className=" text-primary" />
                      <p className="text-xl font-bold">120000</p>
                      <p className="text-sm text-gray-600">Nivel de Producción Estimado</p>
                    </div>
                  </div>
                </div>
                {/* <!-- Graphs and Reviews --> */}
                {/* <!-- Analytics Overview --> */}
                <div className="sr-only  sm:not-sr-only col-span-2  bg-white  shadow-lg rounded-lg">
                  <div className="p-8">
                    <div className="mb-4">
                      <h2 className="text-xl font-bold text-primary mb-2">
                        Analisis General
                      </h2>
                      {/* <!-- Navigation for Weekly, Monthly, Yearly --> */}
                      <div className="flex justify-between items-center mt-3">
                        <div>
                          <button className="text-sm bg-secondary text-gray-800 font-semibold py-2 px-4 rounded-lg mr-2">
                            Semanal
                          </button>
                          <button className="text-sm bg-primary text-white font-semibold py-2 px-4 rounded-lg mr-2">
                            Mensual
                          </button>
                          <button className="text-sm bg-secondary text-gray-800 font-semibold py-2 px-4 rounded-lg">
                            Anual
                          </button>
                        </div>
                        <div>
                          <button className="text-gray-500">
                            <FaSlidersH />
                          </button>
                          <button className="text-green-500 ml-2">
                            <FaSyncAlt />
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Chart placeholder --> */}
                    <LineChart />
                  </div>
                </div>
                {/* <!-- Reviews --> */}

                <div className="row-start-2 col-start-3 row-span-2  w-full ">
                  {/* <!-- Reviews Section --> */}
                  <div className="bg-white p-6 rounded-lg shadow-lg h-full">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-xl font-bold text-gray-800">
                        Feedback
                      </h2>
                      <FaSyncAlt className=" text-green-500" />
                    </div>
                    {/* <!-- Placeholder for the circular progress chart --> */}
                    {/* <!-- Circular progress chart --> */}
                    <div style={{ position: 'relative' }}>
                      <CircleChart />
                      <div
                        style={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                        }}
                      >
                        <span className="text-lg font-bold text-primary">
                          Standard &nbsp;
                        </span>
                        <span className="text-lg font-bold text-primary">
                          100%
                        </span>
                      </div>
                    </div>

                    {/* <!-- Follow up by department Section --> */}
                    <div className="py-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        Seguimiento Consultas
                      </h3>
                      <div className="space-y-4">
                        <div className="grid grid-cols-5">
                          <span className="text-sm font-medium col-span-2">
                            Baja de Producción
                          </span>
                          <div className="col-span-4 progress-container">
                            <div
                              className="progress-bar"
                              style={{ width: '70%' }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium ml-2">40%</span>
                        </div>
                        <div className="grid grid-cols-5">
                          <span className="text-sm font-medium col-span-2">
                            Animales Caidos
                          </span>
                          <div className="col-span-4 progress-container">
                            <div
                              className="progress-bar"
                              style={{ width: '60%' }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium ml-2">20%</span>
                        </div>
                        <div className="grid grid-cols-5">
                          <span className="text-sm font-medium col-span-2">
                            Proteina Alimento
                          </span>
                          <div className="col-span-4 progress-container">
                            <div
                              className="progress-bar"
                              style={{ width: '80%' }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium ml-2">20%</span>
                        </div>
                        <div className="grid grid-cols-5">
                          <span className="text-sm font-medium col-span-2">
                            Empaste
                          </span>
                          <div className="col-span-4 progress-container">
                            <div
                              className="progress-bar"
                              style={{ width: '65%' }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium ml-2">15%</span>
                        </div>
                        <div className="grid grid-cols-5">
                          <span className="text-sm font-medium col-span-2">
                            Mortandad
                          </span>
                          <div className="col-span-4 progress-container">
                            <div
                              className="progress-bar"
                              style={{ width: '50%' }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium ml-2">5%</span>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Patient Satisfaction Section --> */}
                    <div className="mt-6">
                      <h3 className="text-lg font-semibold text-gray-800">
                        Conformidad Visita Técnica
                      </h3>
                      <span className="text-sm text-gray-500">
                        (% último mes)
                      </span>
                      <div className="bg-gray-300 h-8 rounded-full mt-2">
                        <div
                          className="bg-primary h-8 rounded-full text-right flex items-center justify-end"
                          style={{ width: '80%' }}
                        >
                          <span className="text-center text-white px-2">
                            80%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
