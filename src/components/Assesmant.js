import React, { useState,useEffect } from "react";
import { NavLink } from "react-router-dom";
import Cat from "../Api/Cat";
import Section from "../Api/Section";
import Assesmant2 from "./Assesmant2";

const Assesmant = () => {
  const [data, setData] = useState(Cat);
  const [set, setSet] = useState(Section);

  const [subject, setSubject] = useState("");
  const [sel, setSel] = useState("");
  const [section, setSection] = useState("");
  const [teacher, setTeacher] = useState("");

  const [due, setDue] = useState("");
  const [assign, setAssign] = useState("");

  const [allEntry, setAllEntry] = useState([]);

 

  const handleSubmit = (e) => {
    e.preventDefault();

    if (subject && sel && section && teacher && due && assign) {
      const newEntry = {
        id: new Date().getTime().toString(),
        subject,
        sel,
        section,
        teacher,
        due,
        assign
      };
      setAllEntry([...allEntry, newEntry]);

      console.log(allEntry);

      setSubject("");
      setSel("");
      setSection("");
      setTeacher("");
      setDue("");
      setAssign("");
    } else {
      alert("plz fill all the data");
    }
  };

  useEffect(() => {
    setSubject(JSON.parse(window.localStorage.getItem("subject")));
    setSel(JSON.parse(window.localStorage.getItem("sel")));
    setSection(JSON.parse(window.localStorage.getItem("section")));
    setTeacher(JSON.parse(window.localStorage.getItem("teacher")));
    setDue(JSON.parse(window.localStorage.getItem("due")));
    setAssign(JSON.parse(window.localStorage.getItem("assign")));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("subject", JSON.stringify(subject));
    window.localStorage.setItem("sel", JSON.stringify(sel));
    window.localStorage.setItem("section", JSON.stringify(section));
    window.localStorage.setItem("teacher", JSON.stringify(teacher));
    window.localStorage.setItem("due", JSON.stringify(due));
    window.localStorage.setItem("assign", JSON.stringify(assign));
  }, [subject,sel,section,teacher,due,assign]);

  return (
    <>
      <div className="Admin">
        {/* <h2>School Admin Dashboard</h2> */}
        <div className="heading">
          <h1 style={{ textAlign: "center" }}>School Admin Dashborad</h1>
          <div className="btn">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-6 ">
              Students
            </button>

            <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-6 ">
              Teachers
            </button>
          </div>
          <h2>Due Assignment</h2>

          <div className="inp">
            <form action="" onSubmit={handleSubmit}>
              <input
                type="text"
                name="subject"
                value={subject}
                placeholder="Enter Subject"
                onChange={(e) => setSubject(e.target.value)}
              />
              <select
                name="sel"
                value={sel}
                onChange={(e) => setSel(e.target.value)}
              >
                <option value="">Select Class</option>
                {
               data.map(sel=>{
                 return(
                  <option key={sel.id}>{sel.class}</option>
                 )
               })
             }
             
              </select>

              <select
                name="section"
                value={section}
                onChange={(e) => setSection(e.target.value)}
              >
                <option value="">Select Section</option>
                {set.map((sec) => {
                  return <option key={sec.id}>{sec.Name}</option>;
                })}
              </select>
              <input
                onChange={(e) => setTeacher(e.target.value)}
                type="text"
                placeholder="Enter The Teacher Name"
                name="teacher"
                value={teacher}
              />

              <input
                type="date"
                name=""
                id=""
                placeholder="Due Date"
                name="due"
                value={due}
                onChange={(e) => setDue(e.target.value)}
              />

              <input
                type="text"
                placeholder="Enter Assignment"
                name="assign"
                value={assign}
                onChange={(e) => setAssign(e.target.value)}
              />

              <button className="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-1 px-6  form-btn ">
                Generate Assesmant Report
              </button>
            </form>
            {/* ...........table code.................  */}

            <div className="due-report">
              <h2>Assignment Due Report</h2>
              <table className="scrolldown">
                <thead>
                  <tr>
                    <th>Subject</th>
                    <th>Class/Section</th>
                    <th>Teacher</th>
                    <th>Due Date</th>
                    <th>Assesment</th>
                  </tr>
                </thead>

                <tbody>
                <tr>
                  <td>Science</td>
                  <td>4 B</td>
                  <td>Teacher1</td>
                  <td>20/02/21</td>
                  <td>pages</td>
                </tr>
                  {allEntry.map((curElem) => {
                    return (
                      <>
                        <tr key={curElem.id}>
                          <td>{curElem.subject}</td>
                          <td>
                            {curElem.sel} {curElem.section}
                          </td>
                          <td>{curElem.teacher}</td>
                          <td>{curElem.due}</td>
                          <td> <a to="#!">{curElem.assign}</a> </td>
                        </tr>
                      </>
                    );
                  })}

               
                </tbody>
              </table>
            </div>
          </div>
        </div>
      
      
         <Assesmant2/>
      </div>
    </>
  );
};

export default Assesmant;
