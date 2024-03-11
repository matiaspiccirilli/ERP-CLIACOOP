import { ReactNode } from 'react'
import styles from './Sidenav.module.css'
import classNames from 'classnames'
import { ButtonMenu } from "../../components/molecules/buttonMenu/ButtonMenu"

export interface SidenavProps {
  show: boolean
  theme?: string
  onClick?: () => void
  children: ReactNode
}

export const Sidenav = ({
  show = false,
  theme = 'light',
    onClick = () => {},
  children,
}: SidenavProps) => {
  return (
    <div
      className={classNames(
        styles.sidenav,
        {
          [styles.visible]: show,
          [styles.hidden]: !show,
        },
        styles[theme],
      )}
    >
      <div className={styles.title}>
        <div className={styles.buttonBar}>
          <ButtonMenu checked={show} checkedHandler={onClick} />
        </div>
        <h1></h1>
        <span>Clia</span>
      </div>
      <ul className={styles.list}>{children}</ul>
    </div>
  )
}
