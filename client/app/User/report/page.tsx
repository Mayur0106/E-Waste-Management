import React from "react";
import pdf from '../styles/report.module.css';

const report = () => {
    return (
      <div >
        <h1 className={pdf.header}> E-waste recent Projects </h1>
        <div className={pdf.info}>
          <embed src="/Ewaste_india.pdf" width="1100px" height="600px" />
        </div>
      </div>
    );
  };
  
  export default report;