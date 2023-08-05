import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchSearchId, fetchTickets } from '../../store/tickets-slice'
import { selectMost } from '../../store/most-sort-slice'
import { addTransferType, removeTransferType, checkAll, uncheckAll } from '../../store/transfers-slice'
import TransferOptions from '../transfer-options'
import TicketsLoader from '../tickets-loader'
import MostOptions from '../most-options'
import TicketList from '../ticket-list'
import ShowMoreButton from '../show-more-button'
import './app.scss'
import logo from '../../img/Logo.png'

const App = () => {
  const dispatch = useDispatch()

  const most = useSelector((state) => state.most.most)
  const selectOption = (most) => dispatch(selectMost({ most }))

  const transferOptionsSelected = useSelector((state) => state.transfer.transfer)
  const addTransferOptions = (transfer) => dispatch(addTransferType({ transfer }))
  const removeTransferOptions = (transfer) => dispatch(removeTransferType({ transfer }))
  const checkAllOption = (transfer) => {
    dispatch(checkAll({ transfer }))
  }
  const uncheckAllOptions = () => {
    dispatch(uncheckAll())
  }

  const transferChecked = transferOptionsSelected.length === 0 ? false : true

  let { status, error, stillFetching } = useSelector((state) => state.tickets)

  useEffect(() => {
    dispatch(fetchSearchId()).then((searchId) => dispatch(fetchTickets(searchId.payload)))
  }, [])

  return (
    <>
      <header>
        <img className="logo" src={logo} alt="логотип Авиасейлс" />
      </header>
      <div className="content">
        <TransferOptions
          transferOptionsSelected={transferOptionsSelected}
          addTransferOptions={addTransferOptions}
          removeTransferOptions={removeTransferOptions}
          checkAll={checkAllOption}
          uncheckAll={uncheckAllOptions}
        />
        <main>
          <MostOptions selectedOption={most} selectOption={selectOption} />
          {stillFetching && transferOptionsSelected.length !== 0 && <TicketsLoader />}
          {status === 'loading' && transferOptionsSelected.length !== 0 && <h2>Loading...</h2>}
          {error && <h2>An error occurred: {error}</h2>}
          {transferOptionsSelected.length !== 0 && <TicketList />}
          {transferOptionsSelected.length === 0 && <h2>Рейсов, подходящих под заданные фильтры, не найдено</h2>}
          {transferChecked && <ShowMoreButton />}
        </main>
      </div>
    </>
  )
}

export default App
