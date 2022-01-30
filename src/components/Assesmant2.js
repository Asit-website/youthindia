import React, { useState } from "react";

const Assesmant2 = () => {
  const [sub, setSub] = useState("");
  const [top, setTop] = useState("");
  const [date, setDate] = useState("");
  const [report, setReport] = useState("");

  const [Entire, setEntire] = useState([]);

  const [show,setShow] = useState(false);

  const [hid,setHid] = useState(false);

  let myStyle = {
      display:show?"block":"none"
  }

  const UpStyle = {
      display:hid?"block":"none"
  }
  const handleAssignment = (e) => {
    e.preventDefault();

    if (sub && top && date && report) {
      const Entry = {
        id: new Date().getTime().toString(),
        sub,
        top,
        date,
        report,
      };
      setEntire([...Entire, Entry]);

      setSub("");
      setTop("");
      setDate("");
      setReport("");
    } else {
      alert("plz fill all the data");
    }
  };

  return (
    <>
      <button className="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-1 px-6 mx-1  form-btn " onClick={()=>setShow(!show)}>
        View Complete Assesments
      </button>
      <button onClick={()=> setHid(!hid)} className="bg-white-500 hover:bg-blue-700 text-white font-bold py-1 px-6 mx-1  form-btn "  > 
        Notify Assesments
      </button>
      <form
        onSubmit={handleAssignment}
        style={{ width: "100%", display: "inline" }}
      >
        <button className="bg-white-500 hover:bg-blue-700 text-white font-bold py-1 px-6 mx-1  form-btn ">
        
          Create Assesments
          
        </button>
       
       <br />
        <input
          type="text"
          placeholder="Enter Subject"
          name="sub"
          value={sub}
          onChange={(e) => setSub(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Enter Topic"
          name="top"
          value={top}
          onChange={(e) => setTop(e.target.value)}
        />
        <br />
        <input
          type="datetime"
          name=""
          id=""
          placeholder="Date of Assesamnt"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Class Report"
          name="report"
          value={report}
          onChange={(e) => setReport(e.target.value)}
        />
      </form>

      

      <div style={myStyle}  className="create-assignment">
        <h1>Scholl Admin Dashborad</h1>
        <div className="completed Assesment">
          <h2>Completed Assesments</h2>
          <select name="" id="">
            <option value="">Select Class</option>
          </select>
          <br />
          <select name="" id="">
            <option value="">Select Section</option>
          </select>

          <div>
            <table style={{width:'80%'}} className="scrolldown">
              <thead>
                <tr>
                  <th>Subject</th>
                  <th>Topic</th>
                  <th>Date of Assesmant</th>
                  <th>Class Report</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Science</td>
                  <td>Newton Law</td>
                  <td>20-02-21</td>
                  <td>pages <span style={UpStyle} className="spn" ><i class="fas fa-angle-left"></i>Select</span></td>
                </tr>
                {Entire.map((ent) => {
                  return (
                    <tr key={ent.id}>
                      <td>{ent.sub}</td>
                      <td>{ent.top}</td>
                      <td>{ent.date}</td>
                      <td>{ent.report}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <button onClick={()=>setShow(!show)} className="bg-white-500 hover:bg-blue-700 text-white font-bold py-1 px-6 mx-1  form-btn " >
        
         Go Back To Due Assesmant
        
      </button>

          </div>
        </div>
      </div>
    </>
  );
};

export default Assesmant2;
