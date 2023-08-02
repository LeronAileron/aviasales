import React from 'react'
import classNames from 'classnames/bind'

import styles from './_transfer-options.module.scss'

let classes = classNames.bind(styles)

const TransferOptions = (props) => {
  const {
    transferOptionsSelected,
    addTransferOptions,
    removeTransferOptions,
    checkAll,
    uncheckAll,
  } = props

  let key = 100
  const options = [
    {
      name: 'Все',
      label: 'all',
    },
    {
      name: 'Без пересадок',
      label: 'direct',
    },
    {
      name: '1 пересадка',
      label: 'one',
    },
    {
      name: '2 пересадки',
      label: 'two',
    },
    {
      name: '3 пересадки',
      label: 'three',
    },
  ]

  function handleChange(option) {
    const allSelected = checkAllSelected()

    if (option.label === 'all') {
      if (allSelected) uncheckAll()
      else {
        const allOptions = options.map((opt) => opt.label)
        return checkAll(allOptions)
      }
    } else if (!checkSelected(option)) {
      if (transferOptionsSelected.length === 3) addTransferOptions('all')
      return addTransferOptions(option.label)
    } else {
      if (allSelected) removeTransferOptions('all')
      return removeTransferOptions(option.label)
    }
  }

  function checkSelected(option) {
    if (transferOptionsSelected.includes(option.label)) return true
    else return false
  }

  function checkAllSelected() {
    if (transferOptionsSelected.includes('all')) return true
    else return false
  }

  const checkOptions = options.map((option) => {
    key++
    return (
      <label key={key} className={styles.check}>
        <input
          className={styles.check__input}
          type="checkbox"
          name="transfer-options"
          value={option.label}
          checked={checkSelected(option)}
          onChange={() => handleChange(option)}
        />
        <span className={styles.check__box}></span>
        {option.name}
      </label>
    )
  })

  const transferClasses = classes('transfer', 'transfer--margin-right')

  return (
    <aside className={`${transferClasses} shaped-box`}>
      <h3 className="title3 title3--margins-diff">Количество пересадок</h3>
      <div>{checkOptions}</div>
    </aside>
  )
}

export default TransferOptions
