'use client'
 import React from 'react'
 import { DndProvider } from 'react-dnd'
 //import { HTML5Backend } from 'react-dnd-html5-backend'
import { useRef, useState } from 'react'
import styles from './styles.module.css'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
 import {
   getNextMonth,
   getNextWeek,
   getPreviousMonth,
   getPreviousWeek,
 } from '../../redux/slices/calendar.slice'
 import { RootState, useAppDispatch } from '../../redux/store'
import { useSelector } from 'react-redux'
import dayjs from 'dayjs'
import 'dayjs/locale/es'
 //import NoSSR from '@/components/templates/NoSSR' // next
 import { Button} from "../../components/atoms/button"
 import { Modal } from '../../components/atoms/modal'
 import { Select } from '../../components/atoms/select'
 import { Title } from '../../components/atoms/title'
 import { Dropdown } from '../../components/molecules/dropDown/dropDown'
 import { Month } from '../../components/organism/month'
 import { Weekly } from '../../components/organism/weekly'
 import Appointment from '../../components/organism/calendar/appointment/index'
 import MonthEvents from '../../components/organism/calendar/month/monthEvents'
 import WeekEvents from '../../components/organism/calendar/weekly/weekEvents'
import Container from '../../components/container/index'

const Calendars = () => {
  /* ---------------------------------- state --------------------------------- */

   const [view, setView] = useState<'week' | 'month' | string>('week')

   const dispatch = useAppDispatch()

   const calendar = useSelector((state: RootState) => state.calendar)

   const currentDate = dayjs()
     .clone()
     .set('year', calendar.currentYear)
     .set('month', calendar.currentMonth)
     .locale('en')
     .format('MMMM YYYY')

   const indexWeek = calendar.week.weekIndex

   const startWeek = dayjs()
     .year(calendar.currentYear)
     .week(indexWeek)
     .startOf('week')
     .format('DD/MM/YYYY')
   const endWeek = dayjs()
     .year(calendar.currentYear)
     .week(indexWeek)
     .endOf('week')
     .format('DD/MM/YYYY')

   const date =
     view === 'week' ? `Semana ${indexWeek} - ${currentDate}` : currentDate
  /* --------------------------------- handler -------------------------------- */

   const handlePreviousTimer = () => {
     if (view === 'week') dispatch(getPreviousWeek())
     if (view === 'month') dispatch(getPreviousMonth())
   }
   const handleNextTimer = () => {
     if (view === 'week') dispatch(getNextWeek())
     if (view === 'month') dispatch(getNextMonth())
   }

  /* -------------------------- handler Modal Records ------------------------- */
   const modalRef = useRef<HTMLElement | null>(null)

   const openModal = () => {
     if (modalRef?.current) modalRef.current.style.display = 'flex'
   }
   const closeModal = (event: any) => {
     event.preventDefault()
     if (modalRef?.current) modalRef.current.style.display = 'none'
   }

  /* ----------------------------------- jsx ---------------------------------- */

  return (<div>
      {/* <DndProvider backend={HTML5Backend}>  */}
      <Container> 
        <div className={styles.container}>
          {/* <NoSSR>
            <Modal
              position="right"
              onClose={(event) => closeModal(event)}
              ref={modalRef}
            >
              <Appointment />
            </Modal>
          </NoSSR> */}
          <div className={styles.navigation}>
            <Title color="primary">{date}</Title>
            <div className={styles.actions}>
              <div className={styles.buttonToday}>
                <button onClick={handlePreviousTimer}>
                  <FiChevronLeft />
                </button>
                <span>Today</span>
                <button onClick={handleNextTimer}>
                  <FiChevronRight />
                </button>
              </div>
              <Select
                id="select"
                placeholder="select"
                name="select"
                value={view}
                size="sm"
                length="short"
                onChange={(event) => setView(event.target.value)}
                options={[
                  { value: 'week', label: 'Weekly' },
                  { value: 'month', label: 'Monthly' },
                ]}
              />
              <Button
                onClick={openModal}
                dimension="small"
                size="xxs"
                color="primary"
              >
                <span className="whitespace-nowrap">+ Add Appointment</span>
              </Button>
            </div>
            <div className={styles.actionsMobile}>
              <Dropdown
                options={[
                  {
                    label: 'New Event',
                    value: 'event',
                    onClick: () => openModal(),
                  },
                  {
                    label: 'Weekly',
                    value: 'week',
                    onClick: () => setView('week'),
                  },
                  {
                    label: 'Monthly',
                    value: 'month',
                    onClick: () => setView('month'),
                  },
                ]}
              />
            </div>
          </div>
          <div>
            {view === 'week' && (
              <Weekly
                week={calendar.week}
                onClick={openModal}
                ListEvent={WeekEvents}
              />
            )}
            {view === 'month' && (
              <Month
                month={calendar.month}
                onClick={openModal}
                ListEvent={MonthEvents}
              />
            )}
          </div>
        </div> 
      </Container>
     {/* </DndProvider> */}
    </div>)
}

export default Calendars
