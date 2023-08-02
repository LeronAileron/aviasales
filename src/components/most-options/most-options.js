import React from 'react'
import PropTypes from 'prop-types'

import styles from './_most-options.module.scss'

const MostOptions = ({ selectedOption, selectOption }) => {
  const options = [
    {
      name: 'Самый дешевый',
      label: 'cheap',
    },
    {
      name: 'Самый быстрый',
      label: 'fast',
    },
    {
      name: 'Оптимальный',
      label: 'optimal',
    },
  ]

  const mostOptions = options.map((option, i) => {
    return (
      <div className={styles.most__option} key={i}>
        <input
          id={`MostOptionsRadio${i}`}
          type="radio"
          name="most-options"
          value={option.label}
          className={styles.most__input}
          checked={selectedOption === option.label ? true : false}
          onChange={() => selectOption(option.label)}
        />
        <label htmlFor={`MostOptionsRadio${i}`} className={styles.most__label}>
          <h3 className="title3 title3--center">{option.name}</h3>
        </label>
      </div>
    )
  })

  return <div className={styles.most}>{mostOptions}</div>
}

export default MostOptions

MostOptions.propTypes = {
  selectedOption: PropTypes.string.isRequired,
  selectOption: PropTypes.func.isRequired,
}
