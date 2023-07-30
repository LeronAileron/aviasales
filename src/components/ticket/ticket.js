import React from "react";

import { Segments } from "../segments";
// import classNames from 'classnames/bind'

import styles from "./ticket.module.scss";

const Ticket = ({ ticket }) => {
  const { price, carrier, segments } = ticket;

  const priceFormatted = getFormattedPrice(price);

  return (
    <div className={styles.ticket}>
      <div className={styles.ticket__head}>
        <div className={styles.ticket__price}>{`${priceFormatted} Р`}</div>
        <div className={styles.ticket__airline}>
          <img src={`https://pics.avs.io/99/36/${carrier}.png`} />
        </div>
      </div>
      <div className={styles.ticket__body}>
        <Segments segments={segments} />
      </div>
    </div>
  );
};

function getFormattedPrice(initialPrice) {
  let price = initialPrice.toString();
  const end = price.substr(-3, 3);
  const start = price.slice(0, -3);

  const result = `${start} ${end}`;
  return result;
}

export default Ticket;
