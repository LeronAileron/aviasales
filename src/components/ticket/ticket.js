import React from 'react'
import PropTypes from 'prop-types'

import { Segments } from '../segments'

import styles from './ticket.module.scss'

const Ticket = ({ ticket }) => {
  if (!ticket) return
  const { price, carrier, segments } = ticket

  const priceFormatted = getFormattedPrice(price)

  return (
    <div className={styles.ticket}>
      <div className={styles.ticket__head}>
        <div className={styles.ticket__price}>{`${priceFormatted} Р`}</div>
        <div className={styles.ticket__airline}>
          <img src={`https://pics.avs.io/99/36/${carrier}.png`} />
        </div>
      </div>
      <div>
        <Segments segments={segments} />
      </div>
    </div>
  )
}

function getFormattedPrice(initialPrice) {
  let price = initialPrice.toString()
  const end = price.substr(-3, 3)
  const start = price.slice(0, -3)

  const result = `${start} ${end}`
  return result
}

export default Ticket

Ticket.propTypes = {
  ticket: PropTypes.shape({
    carrier: PropTypes.string,
    price: PropTypes.number,
    segments: PropTypes.arrayOf(PropTypes.object),
  }),
}
