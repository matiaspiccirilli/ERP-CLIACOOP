//import { BsPersonBadge } from 'react-icons/bs'
//import { ThemeContext } from '@/contexts/index'
//import Link from 'next/link'
//import { AiOutlineAppstoreAdd, AiTwotoneCalendar } from 'react-icons/ai'
//import React, { useContext } from 'react'
'use client'
import { useState, ReactNode } from 'react'
import styles from './dashboardLayout.module.css'
import classNames from 'classnames'
import { Sidenav } from '../sideNav/SideNav'
import { Link } from 'react-router-dom'
import { CgLogOut } from 'react-icons/cg'
import { BiHome, BiTask } from 'react-icons/bi'
import {
  MdOutlineSettings,
  MdOutlineHelpOutline,
  MdOutlineSick,
} from 'react-icons/md'
import { FaUserDoctor, FaRegCalendarMinus } from 'react-icons/fa6'

const routes = {
  logout: {
    route: 'Logout',
    ref: '/logout',
    id: 'navBarlogout',
  },
  find: {
    route: 'Patients',
    ref: '/patients',
  },
  calendar: {
    route: 'Calendars',
    ref: '/calendars',
  },
  activities: {
    route: 'Activities',
    ref: '/activities',
  },
  home: {
    route: 'Dashboard',
    ref: '/',
  },
  doctors: {
    route: 'Doctors',
    ref: '/doctors',
  },
  setting: {
    route: 'Setting',
    ref: '/setting',
  },
  support: {
    route: 'Support',
    ref: '/support',
  },
}

export const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const [showNav, setShowNav] = useState(false)

  return (
    <div className={classNames(styles.dashboard)}>
      <div className={classNames(styles.container)}>
        <Sidenav show={showNav} onClick={() => setShowNav(!showNav)}>
          <Link to={routes.home.ref} className={styles.group}>
            <i className={classNames(styles.item, styles.colorSky)}>
              <BiHome />
            </i>
            <span className={styles.link}>{routes.home.route}</span>
          </Link>
          <Link to={routes.doctors.ref} className={styles.group}>
            <i className={classNames(styles.item, styles.colorSky)}>
              <FaUserDoctor />
            </i>
            <span className={styles.link}>{routes.doctors.route}</span>
          </Link>
          <Link to={routes.find.ref} className={styles.group}>
            <i className={classNames(styles.item, styles.colorSky)}>
              <MdOutlineSick />
            </i>
            <span className={styles.link}>{routes.find.route}</span>
          </Link>
          <Link to={routes.activities.ref} className={styles.group}>
            <i className={classNames(styles.item, styles.colorSky)}>
              <BiTask />
            </i>
            <span className={styles.link}>{routes.activities.route}</span>
          </Link>
          <Link to={routes.calendar.ref} className={styles.group}>
            <i className={classNames(styles.item, styles.colorSky)}>
              <FaRegCalendarMinus />
            </i>
            <span className={styles.link}>{routes.calendar.route}</span>
          </Link>
          <Link to={routes.setting.ref} className={styles.group}>
            <i className={classNames(styles.item, styles.colorSky)}>
              <MdOutlineSettings />
            </i>
            <span className={styles.link}>{routes.setting.route}</span>
          </Link>
          <Link to={routes.setting.ref} className={styles.group}>
            <i className={classNames(styles.item, styles.colorSky)}>
              <MdOutlineHelpOutline />
            </i>
            <span className={styles.link}>{routes.support.route}</span>
          </Link>
          <Link
            id={routes.logout.id}
            to={routes.home.ref}
            className={classNames(styles.logout)}
          >
            <i className={classNames(styles.item, styles.colorSky)}>
              <CgLogOut />
            </i>
            <span className={styles.link}>{routes.logout.route}</span>
          </Link>
        </Sidenav>
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  )
}
export default DashboardLayout
