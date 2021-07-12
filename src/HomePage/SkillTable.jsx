import React, { useState, useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { alertActions, userActions } from '../_actions';
import { useDispatch, useSelector } from 'react-redux';


export function SkillTable() {
  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'publicId', headerName: 'Public Id', width: 300 },
    { field: 'skillName', headerName: 'Skills', width: 200 }
  ];

  const rows = useSelector(state => state.users.items);
  const dispatch = useDispatch();

  const [selectionModel, setSelectionModel] = useState();
  const [spinner, setSpinner] = useState(false);

  const TO = undefined;
  const TO_PROFILE = '/profile';
  const URL = 'https://fechallenge.dev.bhyve.io/user/skills';
  const PROFILE_URL = 'https://fechallenge.dev.bhyve.io/user/profile';
  let skills = [];

  if (selectionModel && Array.isArray(rows)) {
    let data = [];
    
    selectionModel.selectionModel.forEach(element => {
      data = rows.filter((skills) => skills.id === element );
      skills.push(data[0].skillName)
    });    
  };

  function handleSubmit(e) {
    e.preventDefault();
    setSpinner(true);
    if (skills && skills.length>2 && skills.length<9) {
      const reqBody = { skills: skills };
      dispatch(userActions.register(reqBody, TO, URL)); 
      dispatch(userActions.getAll(PROFILE_URL, TO_PROFILE));   
    }
    else dispatch(alertActions.error('Skills should be more then 3 & less then 9'));
    setTimeout(() => {
        setSpinner(false);
    }, 2000);
}
  

  return (
    <form name="form" onSubmit={handleSubmit}>
      {Array.isArray(rows) ?
        <div style={{ height: 500, width: '100%' }}>
          <DataGrid rows={rows} columns={columns} pageSize={10} checkboxSelection
            onSelectionModelChange={(newSelectionModel) => {
              setSelectionModel(newSelectionModel);
            }} />
        </div> : null}

      <div className="form-group">
        <button className="btn btn-primary">
          {spinner && <span className="spinner-border spinner-border-sm mr-1"></span>}
          Submit
        </button>
      </div>
    </form>
  );
}
