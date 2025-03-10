import { useState } from "react";

// function Tabs(){
//   return(
//     <div>
//       <div> tab 1</div>
//       <div> tab 2</div>
//       <div> tab 3</div>
//     </div>
//   )
// }

// function Footer({changeTab:} {changeTab:(tab :number)} => void){
//   return(
//     <div>
//       <div>tab Footer 1</div>
//       <div>tab Footer 2</div>
//       <div>tab Footer 3</div>
//     </div>
//   )
// }

function App() {
  // console.log(lable);
  // ham khai bao su kien
  // const handleClick = (e, data) => {
  //   console.log(e);
  //   console.log("Click");
  //   console.log(data);
  // };
  // console.log("reder");
  // const [count, setCount] = useState(0);
  // const [show, setShow] = useState(true);
  const [activeTab, setActiveTab] = useState(1);
  // const [show, setShow] = useState(true);

  return (
    <>
      <div className="tabs">
        <div className="tab-pane">
          <button
            onClick={() => {
              setActiveTab(1);
            }}
          >
            Tab-1
          </button>
          <button
            onClick={() => {
              setActiveTab(2);
            }}
          >
            Tab-2
          </button>
          <button
            onClick={() => {
              setActiveTab(3);
            }}
          >
            Tab-3
          </button>
        </div>

        {activeTab === 1 && <div className="tab-content"> Content tab-1</div>}
        {activeTab === 2 && <div className="tab-content"> Content tab-2</div>}
        {activeTab === 3 && <div className="tab-content"> Content tab-3</div>}
      </div>

      {/* <Footer changeTab={activeTab}/> */}
    </>
    
    
    
    // <>
    //   <button
    //     onClick={() => {
    //       setCount(count + 1);
    //     }}
    //   >
    //     Click vao day {count} :)
    //   </button>
    //   {/* <button onClick={handleClick}> Click vao day 1</button>
    //   <button onClick={(e) => handleClick(e, 2)}> Click vao day 2</button> */}
    //   <button
    //     onClick={() => {
    //       setShow(!show);
    //     }}
    //   >
    //     {show ? "len" : "xuong"}
    //   </button>

    //   {show && (
    //     <div>
    //       <h1>Hi</h1>
    //     </div>
    //   )}
    // </>

  );
}
export default App;
