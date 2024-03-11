'use client'
import React, { useEffect, useState } from 'react'
import { Table } from '../../components/molecules/table/Table'
import { Search } from '../../components/molecules/search'
import { Paginate } from '../../components/molecules/pagination'
import classNames from 'classnames'
import styles from './styles.module.css'
import { useSelector } from 'react-redux'
//import { RootState, useAppDispatch } from '@/store/store'
//import { Summary } from '@/interfaces/state'
import { BsPerson } from 'react-icons/bs'
//import { setSearch } from '@/store/slices/clinical.slice'
import Container from '../../components/container/index'
//import { CLINIC_HEADERS_DUMMIES } from '@/../public/data/patient-dummies'

// const transformClinicalPatient = (data: Summary[]) => {
//   return data
// }

const getHead = (data: any) => {
  const head = []

  for (const key in data) {
    head.push(data[key])
  }
  return head
}

// const head = getHead(CLINIC_HEADERS_DUMMIES)

 const Farmers = () => {
//   const dispatch = useAppDispatch()

//   const clinicalRecords = useSelector((state: RootState) => state.clinical)
//   const searchPatient = clinicalRecords.search
//   const patientFiltered = transformClinicalPatient(
//     clinicalRecords.filteredPatient,
//   )

  const [patient, setPatient] = useState()

  useEffect(() => {
    //setPatient()
  }, [])

  return (
    <Container>
      <div>
        <div>
          {/* <Search
            placeholder="Search"
            value={searchPatient}
            onChange={(value) => {
              dispatch(setSearch(value))
            }}
          /> */}
          <div>
            <button>
              <BsPerson /> &nbsp; Add Patient
            </button>
          </div>
        </div>

        <div>
          {/* <Table
            headers={head}
            records={patient}
            href="/patients/"
            style={styles.table}
          /> */}
        </div>
        {/* <Paginate
          data={patientFiltered}
          setData={setPatient}
          itemsPerPage={10}
        /> */}
      </div>
    </Container>
  )
}

export default Farmers
