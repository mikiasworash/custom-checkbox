import React, { useState } from "react";

function CheckboxCard() {
  const [selectAllChecked, setSelectAllChecked] = useState(false);
  const [checkboxStates, setCheckboxStates] = useState(
    new Array(6).fill(false)
  );

  const handleCheckboxChange = (index) => {
    const updatedStates = [...checkboxStates];
    updatedStates[index] = !updatedStates[index];
    setCheckboxStates(updatedStates);
    setSelectAllChecked(updatedStates.every((state) => state));
  };

  const handleSelectAllChange = () => {
    const updatedStates = checkboxStates.map(() => !selectAllChecked);
    setCheckboxStates(updatedStates);
    setSelectAllChecked(!selectAllChecked);
  };

  return (
    <div className="container">
      <div className="checkbox-group select-all">
        <input
          type="checkbox"
          id="select-all"
          checked={selectAllChecked}
          onChange={handleSelectAllChange}
        />
        <label htmlFor="select-all">
          All Pages
          <span className="checkbox">
            <span className="check"></span>
          </span>
        </label>
      </div>
      <div className="content">
        {checkboxStates.map((checked, index) => (
          <div className="checkbox-group" key={index}>
            <input
              type="checkbox"
              id={"page-" + (index + 1)}
              checked={checked}
              onChange={() => handleCheckboxChange(index)}
            />
            <label htmlFor={"page-" + (index + 1)}>
              Page {index + 1}
              <span className="checkbox">
                <span className="check"></span>
              </span>
            </label>
          </div>
        ))}
      </div>
      <div className="btn">
        <button className="button">Done</button>
      </div>
    </div>
  );
}

export default CheckboxCard;
