import React from 'react'

function useCrud(request, baseUrl) {
// CREATE
const add = (car) => {
    request({
      url: baseUrl + '/users/',
      method: 'POST',
      body: car
    })
  }

  // UPDATE
  const update = (id, dataEdit) => {
    request({
      url: baseUrl + `/users/${id}`,
      method: 'PATCH',
      body: dataEdit,
    })
  }

  // DELETE
  const remove = (id) => {
    request({
      url: baseUrl + `/users/${id}`,
      method: 'DELETE',
      id,
    })
  }

  return {add, update, remove}

}

export default useCrud