import React from "react";

import Ticket from "../ticket";

import styles from "./ticket-list.module.scss";

const TicketList = () => {
  let key = 0;
  const tickets = serverTickets.tickets.map((ticket, i) => {
    key++;
    while (i < 5) {
      return (
        <li className={`${styles["ticket-list__ticket"]} shaped-box`} key={key}>
          <Ticket ticket={ticket} />
        </li>
      );
    }
  });
  return <ul className={styles["ticket-list"]}>{tickets}</ul>;
};

export default TicketList;

const serverTickets = {
  tickets: [
    {
      price: 92650,
      carrier: "BT",
      segments: [
        {
          origin: "MOW",
          destination: "HKT",
          date: "2023-05-24T17:55:58.877Z",
          duration: 1086,
          stops: ["DEL", "HKG"],
        },
        {
          origin: "HKT",
          destination: "MOW",
          date: "2024-02-27T08:37:08.952Z",
          duration: 727,
          stops: [],
        },
      ],
    },
    {
      price: 46060,
      carrier: "W6",
      segments: [
        {
          origin: "MOW",
          destination: "HKT",
          date: "2023-03-31T21:28:56.317Z",
          duration: 1333,
          stops: ["IST", "DEL", "JNB"],
        },
        {
          origin: "HKT",
          destination: "MOW",
          date: "2023-11-14T08:30:05.082Z",
          duration: 1423,
          stops: ["IST", "JNB", "JNB"],
        },
      ],
    },
    {
      price: 52760,
      carrier: "BT",
      segments: [
        {
          origin: "MOW",
          destination: "HKT",
          date: "2023-01-16T05:44:21.073Z",
          duration: 1322,
          stops: ["JNB", "IST", "HKG"],
        },
        {
          origin: "HKT",
          destination: "MOW",
          date: "2023-06-16T02:45:10.483Z",
          duration: 671,
          stops: [],
        },
      ],
    },
    {
      price: 19080,
      carrier: "FV",
      segments: [
        {
          origin: "MOW",
          destination: "HKT",
          date: "2024-01-05T23:49:26.120Z",
          duration: 755,
          stops: ["JNB"],
        },
        {
          origin: "HKT",
          destination: "MOW",
          date: "2024-12-03T09:07:03.322Z",
          duration: 992,
          stops: ["HKG"],
        },
      ],
    },
    {
      price: 39890,
      carrier: "DP",
      segments: [
        {
          origin: "MOW",
          destination: "HKT",
          date: "2023-06-18T07:20:08.428Z",
          duration: 1065,
          stops: ["DOH", "DXB"],
        },
        {
          origin: "HKT",
          destination: "MOW",
          date: "2024-03-13T21:20:43.271Z",
          duration: 1098,
          stops: ["IST", "DXB"],
        },
      ],
    },
    {
      price: 25270,
      carrier: "AK",
      segments: [
        {
          origin: "MOW",
          destination: "HKT",
          date: "2023-08-16T14:28:18.851Z",
          duration: 1072,
          stops: ["DXB", "DOH"],
        },
        {
          origin: "HKT",
          destination: "MOW",
          date: "2023-10-23T05:32:34.084Z",
          duration: 980,
          stops: ["HKG"],
        },
      ],
    },
    {
      price: 62830,
      carrier: "DP",
      segments: [
        {
          origin: "MOW",
          destination: "HKT",
          date: "2023-04-19T20:03:06.270Z",
          duration: 712,
          stops: [],
        },
        {
          origin: "HKT",
          destination: "MOW",
          date: "2023-12-25T10:23:17.292Z",
          duration: 1256,
          stops: ["DOH", "IST"],
        },
      ],
    },
  ],
  stop: false,
};
