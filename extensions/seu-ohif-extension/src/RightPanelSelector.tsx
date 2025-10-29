import React, { useCallback, useEffect, useState, useRef, useContext } from 'react';
import { TestContext } from './testcontext';
// import TestService from './testservice';
import { func } from 'prop-types';
import { ServicesManager } from '@ohif/core';


function RightPanelSelector({ servicesManager }) {
  // give three options for the user to select from
  const [choice, setchoice] = useState(0);
  const { testService } = servicesManager.services;
  console.log("---");
  console.log(servicesManager.services);
  console.log(testService);
  console.log("---");
  function handlechoiceclick(e) {
    setchoice(e.target.value);
    console.log("choose:", e.target.value);
  }
  function handlesubmitclick() {
    console.log('submit:', choice);
    console.log(testService);
    // let func1 = TestService.getHook();
    let func1 = testService.Hook;
    func1(choice);
    // setTimeout(() => { window.location.reload() }, 3000);
  }

  return (
    <>
      <div className="text-white w-full text-center">
        <h1>Choose a right panel:</h1>
        {_radioPanel({
          'smath': 1,
          'right-panel-selector': 2,
          'default': 3
        }, handlechoiceclick, handlesubmitclick)}
        <button key="radioPanelsumbitbutton" title="Press me" onClick={handlesubmitclick} >
          <h1>Sumbit</h1>
        </button>
        <h1>Selected: {choice}</h1>
      </div>
    </>
  );
}
// get a dict,generate a select element
// function _selectPanel(panelName: Map<string, number>,onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void){
//   return (
//     <select>
//       {Object.keys(panelName).map((name) => (
//         <option value={panelName[name]}>{name}</option>
//       ))}
//     </select>
//   );
// }
//get a dict,generate a radio element,single choice
function _radioPanel(panelName,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  onSubmit: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) {
  return (
    <form key="innerradioPanel">
      {Object.keys(panelName).map((name) => (
        //get custom key
        // <input key="button="+name type="radio" value={panelName[name]} name="panel" onChange={onChange} />
        // (<input key={"button=" + name} type="radio" value={panelName[name]} name="panel" onChange={onChange}>
        // </input>
        // <h1>{name}</h1>
        // )
        <div key={"button=" + name}>
          <input type="radio" value={panelName[name]} name="panel" onChange={onChange} />
          <label>{name}</label>
        </div>

      ))}
      <h1>Selected: </h1>
      {/* <button key="radioPanelsumbitbutton"  title="Press me" onClick ={()=>{console.log("tick")}} >
        <h1>Sumbit</h1>
      </button> */}

    </form>
  );
}

export default RightPanelSelector;
