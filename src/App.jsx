import { useState, useEffect } from 'react'
import HookForm from './components/hookForm'
import useFetchApi from './hooks/useCrudApi'
import Users from './components/Users'
import useCrud from './hooks/useCrud'
import './App.css'

const baseUrl = 'https://users-crud-api-production-9c59.up.railway.app/api/v1'

function App() {

  const [userEdit, setUserEdit] = useState(null)
  const {data, pending, request} = useFetchApi()
  const {add, update, remove} = useCrud(request, baseUrl)
 
  const handleEdit = (user) => {
    setUserEdit(user)
  }

  useEffect(() => {
    // READ
    request({url: baseUrl+'/users/'})
  },[])

  return (
    <>
      <header className='container-md fixed-top header'>
        <div className="row my-4">
          <div className="col-4 text-center">
            <h1>Users</h1>
          </div>
          <div className="col-3"></div>
          <div className="col-5 text-center">
            <button 
              onClick={() => setUserEdit(null)}
              type="button" 
              className="btn btn-primary" 
              data-bs-toggle="modal" 
              data-bs-target="#exampleModal">
              + Add User
            </button>
          </div>
        </div>
      </header>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h2>Form</h2>
                {
                  !userEdit && 
                  <button 
                    type="button" 
                    className="btn-close" 
                    data-bs-dismiss="modal" 
                    aria-label="Close">
                  </button>
                }
              </div>
              <div className="modal-body">
                <HookForm add={add} update={update} userEdit={userEdit} setUserEdit={setUserEdit}/>
              </div>
            </div>
          </div>
      </div>
      <main className='container-md my-5'>
        <br />
        <br />
        <div className="row justify-content-md-center gap-lg-5 m-sm-4">
          {pending ? <p>Loading...</p> : data && <Users handleEdit={handleEdit} users={data} remove={remove}/>}
        </div>
      </main>
    </>
  )
}

export default App
