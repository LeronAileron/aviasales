import React from "react";
import classNames from "classnames/bind";

import styles from "./_transfer-options.module.scss";

let classes = classNames.bind(styles);

const TransferOptions = () => {
  let key = 100;
  const options = [
    "Все",
    "Без пересадок",
    "1 пересадка",
    "2 пересадки",
    "3 пересадки",
  ];

  const checkOptions = options.map((option) => {
    key++;
    return (
      <label key={key} className={styles.check}>
        <input
          className={styles.check__input}
          type="checkbox"
          name="transfer-options"
          value={option}
        />
        <span className={styles.check__box}></span>
        {option}
      </label>
    );
  });

  const transferClasses = classes("transfer", "transfer--margin-right");

  return (
    <aside className={`${transferClasses} shaped-box`}>
      <h3 className="title3 title3--margins-diff">Количество пересадок</h3>
      <div>{checkOptions}</div>
    </aside>
  );
};

export default TransferOptions;
