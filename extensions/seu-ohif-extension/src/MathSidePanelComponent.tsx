import React from "react";
// import { sqrt } from "math.js"
// import { TestContext } from './testcontext';


function MathSidePanelComponent({ servicesManager }) {
  // const value = React.useContext(TestContext);
  //get choice from context
  // const value = React.useContext(TestContext);
  const [choice, setchoice] = React.useState("default");
  const { testService } = servicesManager.services;
  testService.subscribeToEvents((choices) => {
    setchoice(choices[0]);
  });
  return (
    <div className="text-white w-full text-center">
      {/* {`the square root of four is  ${sqrt(4)}`} */}
      {'the choice is: ' + choice}
    </div>
  );

  // return (
  //   <TestContext.Consumer>{
  //     (value) => (
  //       <div className="text-white w-full text-center">
  //         {`the square root of four is  ${sqrt(4)}`}
  //         {'the choice is: ' + value.choice}
  //       </div>
  //     )}
  //   </TestContext.Consumer>
  // );
}
export default MathSidePanelComponent;
