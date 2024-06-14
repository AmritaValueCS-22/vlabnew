import React, { useState } from "react";

function HexEditor() {
  // State to store the hexadecimal data and offset
  const [hexData, setHexData] = useState("");
  const [offset, setOffset] = useState(0);

  // Function to handle changes in the hexadecimal data
  const handleHexChange = (event) => {
    setHexData(event.target.value);
  };

  // Function to handle changes in the offset
  const handleOffsetChange = (event) => {
    setOffset(parseInt(event.target.value, 10));
  };

  // Function to display the data with offset
  const getDataWithOffset = () => {
    return hexData.substring(offset * 2); // Multiply by 2 because each byte is represented by 2 characters
  };

  return (
    <div>
      <h1>Hexadecimal Editor</h1>
      {/* Input field for offset */}
      <div>
        <label htmlFor="offset">Offset:</label>
        <input
          type="number"
          id="offset"
          value={offset}
          onChange={handleOffsetChange}
        />
      </div>
      {/* Input field for hexadecimal data */}
      <textarea
        value={getDataWithOffset()}
        onChange={handleHexChange}
        rows={10}
        cols={50}
        placeholder="Enter hexadecimal data here..."
      />
      {/* Display hexadecimal data */}
      <div>
        <h2>Hexadecimal Data:</h2>
        <pre>{getDataWithOffset()}</pre>
      </div>
    </div>
  );
}

export default HexEditor;
