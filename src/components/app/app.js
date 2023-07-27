import React from "react";

import TransferOptions from "../transfer-options";
import { TicketOptions } from "../ticket-options";
import { TicketList } from "../ticket-list";
import { ShowMoreButton } from "../show-more-button";
import "./app.scss";
import logo from "../../img/Logo.png";

const App = () => {
  return (
    <>
      <header>
        <img className="logo" src={logo} alt="логотип Авиасейлс" />
      </header>
      <div className="content">
        <TransferOptions />
        <main>
          <TicketOptions />
          <TicketList />
          <ShowMoreButton />
        </main>
      </div>
    </>
  );
};

export default App;
