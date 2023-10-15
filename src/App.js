import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Display from './Display'

const App = () => {
  const [display, setDisplay] = useState(false)
  const [groupBy, setGroupBy] = useState(localStorage.getItem('groupBy'))
  const [orderBy, setOrderBy] = useState(localStorage.getItem('orderBy'))
  
  useEffect(()=>{

  },[groupBy,orderBy])

  



  return (
    <>

      <div className="container-fluid" id="displayBtn">
        <button onClick={() => { setDisplay(!display) }} class="btn btn-outline-secondary btn-md">Display</button>

        {display ?
          <>
            <div className="select-box">
             
            <div >
                 <label style={{margin:"10px" , fontWeight:"600"}}>Group By</label>
                 <select value={groupBy} onChange={(e) => {
                  // console.log("group by changed")
                  localStorage.setItem('groupBy',e.target.value);
                  // console.log("LS group : "+localStorage.getItem('groupBy'))
                  setGroupBy(localStorage.getItem('groupBy')
                  )}} >
                    <option value="user">User</option>
                    <option value="priority">Priority</option>
                    <option value="status">Status</option>
                  </select>
            </div>


            <div>
                 <label style={{margin:"10px", fontWeight:"600"}}>Order By</label>
                 <select value={orderBy} onChange={(e) => {
                  //  console.log("order by changed")
                   localStorage.setItem('orderBy',e.target.value);
                  //  console.log("LS order: "+localStorage.getItem('orderBy'))
                   setOrderBy(localStorage.getItem('orderBy'))
                  }}>
                    <option value="priority">Priority</option>
                    <option value="title">Title</option>
                  </select>
            </div>

            </div>
          </> : <></>}
      </div>

      <div className="container-fluid" id="bg">
        <Display group={groupBy} order={orderBy} />
      </div>
    </>

  );
};

export default App;



