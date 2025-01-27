import React, { useEffect } from 'react'

function Users({users, remove, handleEdit}) {
    return <>
      {users && users.map((u, i) => {
        return  <div key={i} className="card mb-2" style={{maxWidth: "450px", maxHeight: '300px'}}>
          <div className="row g-0">
            <div className="col-4 d-flex align-items-center">
              <img 
                src={u.image_url ? u.image_url : 'https://www.refugee-action.org.uk/wp-content/uploads/2016/10/anonymous-user.png'} 
                className="w-100 h-70 rounded mx-auto" 
                alt={u.first_name}/>
            </div>
            <div className="col-8">
              <div className="card-body fs-6">
                <h5 className="card-title">{u.first_name}</h5>
                <h4 className="card-title">{u.last_name}</h4>
                <p className="card-title">{u.email}</p>
                <p className="card-text">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-gift" viewBox="0 0 16 16">
                      <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A3 3 0 0 1 3 2.506zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43zM9 3h2.932l.023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0zM1 4v2h6V4zm8 0v2h6V4zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5z"/>
                    </svg>
                    {' ' + u.birthday.split('T')[0]}
                </p>
                <div className="card-footer">
                  <div className="row g-1">
                    <div className="col-6">
                      
                      <button type="button" className="btn btn-danger w-100" data-bs-toggle="modal" data-bs-target={`#remove-${u.id}`} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                          <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                        </svg>
                      </button>

                      <div className="modal fade" id={`remove-${u.id}`} tabIndex="-1" aria-labelledby={`remove-${u.id}`} aria-hidden="true">
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title" id={`remove-${u.id}`}>Delete : {u.email}</h5>
                              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                              Are you sure you want to delete, user {u.first_name} {u.last_name}?
                            </div>
                            <div className="modal-footer">
                              <button 
                                onClick={() => remove(u.id)}
                                type="button" 
                                className="btn btn-danger w-100" 
                                data-bs-dismiss="modal">
                                  Delete
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                    <div className="col-6">
                      <button 
                        onClick={() => handleEdit(u)}
                        type="button" 
                        className="btn btn-success w-100"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pen" viewBox="0 0 16 16">
                          <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708z"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      })}
  </>
}

       

export default Users