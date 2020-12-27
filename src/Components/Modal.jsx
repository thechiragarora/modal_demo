import React, { useState } from "react";
import { Button, Image, Modal, Header, Icon } from "semantic-ui-react";
import DropDown from "./DropDown";
import InputField from "./InputField";
import Message from "./Message";
import { factoryOptions, designOptions } from "../constants";

const CustomModal = ({ setOpen }) => {
  const [quantity, setQuantity] = useState("");
  const [factory, setFactory] = useState();
  const [design, setDesign] = useState();
  const [challan, setChallan] = useState();
  const [pageNo, setPageNo] = useState(0);
  const [error, setError] = useState({});

  let disableNext = true;
  if (quantity !== "" && factory && design && challan && !error.quantity) {
    disableNext = false;
  }

  const fileInputRef = React.createRef();
  const availableQuantity = 1600;

  const pClass = pageNo === 1 ? "page1pcolor" : "";
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open
      size="large"
      trigger={<Button>Show Modal</Button>}
    >
      <Modal.Header>
        <span>Material details</span>
        <span style={{ float: "right" }}>
          <Icon name="close" onClick={() => setOpen(false)} />
        </span>
      </Modal.Header>
      <Modal.Content image>
        <Image size="large" src="design1.jpeg" />

        <Modal.Description>
          <Header>
            <Icon name="arrow left" size="tiny" />
            Assign to factory
          </Header>
          {pageNo === 1 && (
            <Message
              type={{ warning: true }}
              iconName="info circle"
              content="You wont't be able to change the details later."
            />
          )}
          <p className={pClass}>Factory*</p>
          {pageNo === 1 ? (
            factory
          ) : (
            <DropDown
              placeholder="Select factory"
              options={factoryOptions}
              onChange={(event) => setFactory(event.target.textContent)}
            />
          )}
          <p className={pClass}>Assign for design*</p>
          {pageNo === 1 ? (
            design
          ) : (
            <DropDown
              placeholder="Search by Name or Design ID"
              options={designOptions}
              onChange={(event) => setDesign(event.target.textContent)}
            />
          )}
          <p className={pClass}>
            Assign quantity*
            {pageNo === 0 && (
              <span style={{ float: "right" }}> Available Inventory</span>
            )}
          </p>
          {pageNo === 1 ? (
            `${quantity} meter`
          ) : (
            <>
              <span style={{ float: "right" }}>{availableQuantity} meter</span>
              <InputField
                placeholder="Enter quantity"
                onChange={(event) => {
                  const quant = event.target.value;
                  if (isNaN(quant)) {
                    setError({ quantity: "Only numbers are allowed" });
                  } else if (quant && quant > availableQuantity) {
                    setError({
                      quantity: "Quantity can not exceed available inventory",
                    });
                  } else {
                    setError({ quantity: null });
                  }
                  setQuantity(event.target.value);
                }}
                error={error.quantity}
              />
            </>
          )}

          <p className={pClass}>Attach Challan*</p>
          <Button
            basic
            content={challan || "Select file"}
            labelPosition="right"
            icon={pageNo === 1 ? "eye" : "attach"}
            onClick={() => fileInputRef.current.click()}
          />
          <input
            ref={fileInputRef}
            type="file"
            hidden
            disabled={pageNo === 1}
            onChange={(event) => setChallan(event.target.files[0].name)}
          />
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)}>Back</Button>
        <Button onClick={() => setPageNo(1)} primary disabled={disableNext}>
          {pageNo === 1 ? "Assign To Factory" : "Next"}
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default CustomModal;
