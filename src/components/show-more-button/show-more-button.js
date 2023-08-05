import React from 'react'
import { useDispatch } from 'react-redux'

import { showMoreTickets } from '../../store/tickets-slice'

import styles from './show-more-button.module.scss'

const ShowMoreButton = () => {
  const dispatch = useDispatch()

  const moreTickets = () => dispatch(showMoreTickets())

  return (
    <button className={styles['show-more-button']} onClick={moreTickets}>
      Показать еще 5 билетов!
    </button>
  )
}

export default ShowMoreButton
