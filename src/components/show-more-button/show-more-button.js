import React from 'react'

import styles from './show-more-button.module.scss'

const ShowMoreButton = () => {
  return (
    <button className={styles['show-more-button']}>
      Показать еще 5 билетов!
    </button>
  )
}

export default ShowMoreButton
