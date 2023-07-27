import React from "react";
// import classNames from 'classnames/bind'

import styles from "./_ticket-options.module.scss";
// let classes = classNames.bind(styles)

const TicketOptions = () => {
  const options = ["Самый дешевый", "Самый быстрый", "Оптимальный"];

  const ticketOptions = options.map((option, i) => {
    return (
      <div className={styles.most__option} key={i}>
        <input
          id={`TicketOptionsRadio${i}`}
          type="radio"
          name="most-options"
          value={option}
          className={styles.most__input}
          // checked={i == 0 ? true : false}
        />
        <label
          htmlFor={`TicketOptionsRadio${i}`}
          className={styles.most__label}
        >
          <h3 className="title3 title3--center">{option}</h3>
        </label>
      </div>
    );
  });

  return <div className={styles.most}>{ticketOptions}</div>;
};

export { TicketOptions };
