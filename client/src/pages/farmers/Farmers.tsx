'use client'
import React, { useEffect, useState } from 'react'
import { Table } from '../../components/molecules/table/Table'
import { Search } from '../../components/molecules/search'
import { Paginate } from '../../components/molecules/pagination'
import classNames from 'classnames'
import styles from './styles.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../redux/store'
import { Summary } from '../../Interfaces/state'
import { BsPerson } from 'react-icons/bs'
import { setSearch } from '../../redux/slices/clinical.slice'
import Container from '../../components/container/index'
import { CLIENTS_HEADERS_DUMMIES } from '../../../public/data/clients-dummies'

 const transformClinicalPatient = (data: Summary[]) => {
   return data
 }

const getHead = (data: any) => {
  const head = []

  for (const key in data) {
    head.push(data[key])
  }
  return head
}

 const head = getHead(CLIENTS_HEADERS_DUMMIES)

 const Farmers = () => {

  const dispatch = useDispatch()

   const clinicalRecords = useSelector((state: RootState) => state.clinical)
   const searchPatient = clinicalRecords.search
   const patientFiltered = transformClinicalPatient(
    clinicalRecords.filteredPatient,
    )

  const [patient, setPatient] = useState(patientFiltered)

   useEffect(() => {
     setPatient(patientFiltered)
   }, [patientFiltered])

  return (
    <Container>
      <div className={classNames(styles.container)}>
        <div className={styles.searchContainer}>
          <Search
            placeholder="Search"
            value={searchPatient}
            onChange={(value) => {
              dispatch(setSearch(value))
            }}
          />
          <div className={styles.buttonsContainer}>
            <button className={styles.primaryButton}>
              <BsPerson /> &nbsp; Add Patient
            </button>
          </div>
        </div>

        <div className={styles.tableContainer}>
          <Table
            headers={head}
            records={patient}
            href="/patients/"
            style={styles.table}
          />
        </div>
        <Paginate
          data={patientFiltered}
          setData={setPatient}
          itemsPerPage={10}
        />
      </div>
    </Container>
  )
}

export default Farmers
