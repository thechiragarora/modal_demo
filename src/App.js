import "semantic-ui-css/semantic.min.css";
import React, { useState } from "react";
import { Modal } from './Components';
import "./custom.css";

const App = () => {
  const [isModalOpen, setOpen] = useState(false);
  return (
    <>
      <button
        className="ui button"
        onClick={() => setOpen(!isModalOpen)}
      >
        Modal
      </button>
      {isModalOpen && <Modal setOpen={setOpen} />}
    </>
  );
};

export default App;
