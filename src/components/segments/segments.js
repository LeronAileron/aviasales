/* eslint-disable indent */
import React from "react";
import { add, format } from "date-fns";

import styles from "./segments.module.scss";

const Segments = ({ segments }) => {
  let key = 0;
  const timeFormat = "HH:mm";

  const theSegments = segments.map((segment) => {
    const { origin, destination, date, duration, stops } = segment;

    let departureTime = format(new Date(date), timeFormat);
    departureTime = getFormattedTime(departureTime);

    const arrival = add(new Date(date), { minutes: duration });
    let arrivalTime = format(arrival, timeFormat);
    arrivalTime = getFormattedTime(arrivalTime);

    const routeTime = getFormattedDuration(duration);

    const routeTimeCaption = "В пути";
    const theStopsCaption = getCountedLegs(stops);

    const theStops = stops.join(", ");

    key++;
    return (
      <div className={styles.segment} key={key}>
        <div>
          <div
            className={styles.segment__caption}
          >{`${origin} – ${destination}`}</div>
          <div
            className={styles.segment__info}
          >{`${departureTime} – ${arrivalTime}`}</div>
        </div>
        <div>
          <div className={styles.segment__caption}>{routeTimeCaption}</div>
          <div className={styles.segment__info}>{routeTime}</div>
        </div>
        <div>
          <div className={styles.segment__caption}>{theStopsCaption}</div>
          <div className={styles.segment__info}>{theStops}</div>
        </div>
      </div>
    );
  });
  return <div>{theSegments}</div>;
};

export { Segments };

function getCountedLegs(arr) {
  const legs = arr.length;
  let word;

  switch (legs) {
    case 0:
      return "Прямой рейс";
    case 1:
      word = "пересадка";
      break;
    case 2:
    case 3:
    case 4:
      word = "пересадки";
      break;
    default:
      "пересадка";
  }

  const legsCapture = legs + " " + word;
  return legsCapture;
}

function getFormattedTime(time) {
  const timeArr = time.split(":");
  let [hours, mins] = timeArr;
  mins = +getFormattedMinutes(mins);
  if (mins === 0) mins = "00";
  if (mins === 5) mins = "05";

  if (mins === 60) {
    mins = "00";

    hours = +hours + 1;
    if (hours < 10) {
      hours = `0${hours}`;
    } else if (hours === 24) {
      hours = "00";
    } else hours.toString();
  }

  const formatted = `${hours}:${mins}`;
  return formatted;
}

function getFormattedDuration(dur) {
  const hours = Math.trunc(dur / 60);
  let mins = dur - hours * 60;

  mins = getFormattedMinutes(mins);
  if (mins === 0) return `${hours}ч`;
  else return `${hours}ч ${mins}м`;
}

function getFormattedMinutes(mins) {
  const formattedMins = Math.round(mins / 5) * 5;
  return formattedMins;
}
