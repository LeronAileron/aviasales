/* eslint-disable prettier/prettier */
import React from 'react'
import { useSelector } from 'react-redux'

import Ticket from '../ticket'

import styles from './ticket-list.module.scss'

const TicketList = () => {
  let key = 0

  const { tickets: myServerTickets, count } = useSelector((state) => {
    return state.tickets
  })
  const mostSelected = useSelector((state) => state.most.most)
  const transferSelected = useSelector((state) => state.transfer.transfer)

  const filteredTickets = filterByTransfer(myServerTickets, transferSelected)
  const filteredAndSortedTickets = sortByMost(filteredTickets, mostSelected)

  const tickets = filteredAndSortedTickets.map((ticket, i) => {
    key++
    while (i < count) {
      return (
        <li className={`${styles['ticket-list__ticket']} shaped-box`} key={key}>
          <Ticket ticket={ticket} />
        </li>
      )
    }
  })

  return <ul className={styles['ticket-list']}>{tickets}</ul>
}

export default TicketList

function sortByMost(tickets, most) {
  const ticketsCopy = JSON.parse(JSON.stringify(tickets))
  let ticketsSorted
  switch (most) {
  case 'cheap':
    ticketsSorted = ticketsCopy.sort((a, b) => {
      if (a && b) {
        return a.price - b.price
      }
    })
    break

  case 'fast':
    ticketsSorted = ticketsCopy.sort((a, b) => {
      if (a && b) {
        return checkFlightShorter(a, b)
      }
    })
    break

  case 'optimal':
    ticketsSorted = ticketsCopy.sort((a, b) => {
      if (a && b) {
        if (
          a.price < 25000 &&
            a.price < b.price &&
            a.segments[0].stops.length < 2 &&
            a.segments[1].stops.length < 2
        ) {
          return -1
        } else return 1
      }
    })
    break
  }

  return ticketsSorted
}

function checkFlightShorter(a, b) {
  if (a.segments[0].duration + a.segments[1].duration < b.segments[0].duration + b.segments[1].duration) {
    return -1
  } else return 1
}

function filterByTransfer(tickets, transfer) {
  if (transfer.includes('all')) return tickets

  let filteredTickets = []
  let allFilteredTickets = []

  if (transfer.includes('direct')) {
    const filtered = filterTransfer(tickets, 0)
    allFilteredTickets = filteredTickets.concat(filtered)
  }
  if (transfer.includes('one')) {
    const filtered = filterTransfer(tickets, 1)
    allFilteredTickets = filteredTickets.concat(filtered)
  }
  if (transfer.includes('two')) {
    const filtered = filterTransfer(tickets, 2)
    allFilteredTickets = filteredTickets.concat(filtered)
  }
  if (transfer.includes('three')) {
    const filtered = filterTransfer(tickets, 3)
    allFilteredTickets = filteredTickets.concat(filtered)
  }
  return allFilteredTickets || tickets
}

function filterTransfer(tickets, option) {
  const filtered = tickets.filter((ticket) => {
    if (!ticket) {
      return
    }

    return (
      (ticket.segments[0].stops.length === option || ticket.segments[1].stops.length === option) &&
      ticket.segments[0].stops.length <= option &&
      ticket.segments[1].stops.length <= option
    )
  })

  return filtered
}
