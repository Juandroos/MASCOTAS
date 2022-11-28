import React from "react";

const UpdateForm = ({ updateData, changeTask, updateTask, cancelUpdate }) => {
  return(
    <>
      {/* Update Task */}
      <div className="row">
        <div className="col">
          <input 
            value={ updateData && updateData.title }
            onChange={ (e) => changeTask(e)}
            className="form-control form-control-lg"
          />
        
        </div>
      </div>
      <br />  
    </>
  )
}

export default UpdateForm;