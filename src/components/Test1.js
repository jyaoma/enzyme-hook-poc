import React, { useState } from 'react';

const Test1 = ({ testProp }) => {
  // console.error(testProp);
  const [ toggleChange, setToggleChange ] = useState(false);

  return <div testProp={testProp}>
    <input className="my-checkbox" type="checkbox" onChange={() => setToggleChange(!toggleChange)} checked={toggleChange} value="oof" />
    <div>{toggleChange ? 'True' : 'False' }</div>
  </div>
};

export default Test1;
