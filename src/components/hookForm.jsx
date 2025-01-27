import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import ErrorInfo from './ErrorInfo'

const userDefault = {
  email : '',
  password : '',
  first_name : '',
  last_name : '',
  birthday : '',
  image_url : ''
}

function HookForm({add, update, userEdit, setUserEdit}) {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm()

  const onSubmit = (data) => {
    if ( userEdit ) {
      update(userEdit.id, data)
      setUserEdit(null)
      reset(userDefault)
    } else {
      add(data)
      setUserEdit(null)
      reset()
    }
  }

  const cancelEdit = () => {
    reset(userDefault)
    setUserEdit(null)
  }

  useEffect(() => {
    if(userEdit){
      reset(userEdit)
    }
    reset()
  },[userEdit])

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-control">email
            <input 
            type='email'
            {...register('email', {
              required: {
                value: true,
                message: 'email is required'
              },
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
              }
            })}
            className="form-control"/>
            {errors.email && <ErrorInfo><p>{errors.email?.message}</p></ErrorInfo>}
          </label>
        </div>

        <div className="mb-3">
          <label className="form-control">password
            <input 
            type='password'
            {...register('password', {
              required: {
                value: true,
                message: 'password is required'
              },
              pattern: {
                value: /^(?=.*[A-Z])[A-Za-z\d]{8,}$/,
                message: 'Minimum 8 characters, at least one uppercase letter, one lowercase letter and one number.'
              }
            })}
            className="form-control"/>
            {errors.password && <ErrorInfo><p>{errors.password?.message}</p></ErrorInfo>}
          </label>
        </div>

        <div className="mb-3">
          <label className="form-control">first name
            <input 
            type='text'
            {...register('first_name', {
              required: {
                value: true,
                message: 'Introduce your name please.'
              },
              pattern: {
                value: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/,
                message: 'Please enter a valid name (only letters and spaces).'
              }
            })}
            className="form-control"/>
            {errors.first_name && <ErrorInfo><p>{errors.first_name?.message}</p></ErrorInfo>}
          </label>
        </div>

        <div className="mb-3">
          <label className="form-control">last_name
            <input 
            type='text'
            {...register('last_name', {
              required: {
                value: true,
                message: 'Introduce your lastname please.'
              },
              pattern: {
                value: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/,
                message: 'Please enter a valid lastname (only letters and spaces).'
              }
            })}
            className="form-control"/>
            {errors.last_name && <ErrorInfo><p>{errors.last_name?.message}</p></ErrorInfo>}
          </label>
        </div>

        <div className="mb-3">
          <label className="form-control">birthday
            <input 
            type='date'
            {...register('birthday', {
              required: {
                value: true,
                message: 'birthday is required'
              }
            })}
            className="form-control"/>
            {errors.birthday && <ErrorInfo><p>{errors.birthday?.message}</p></ErrorInfo>}
          </label>
        </div>

        <div className="mb-3">
          <label className="form-control">Photo
            <input 
            type='text'
            {...register('image_url')}
            className="form-control"/>
            {errors.image_url && <ErrorInfo><p>{errors.image_url?.message}</p></ErrorInfo>}
          </label>
        </div>
        <button 
          type="submit" 
          className={`btn btn-${userEdit ? 'warning' : 'primary'}`}>
            {userEdit ? 'Edit' : 'Submit'}
        </button>
        <button 
          onClick={cancelEdit}
          type='button' 
          className={`btn btn-secondary mx-2`}
          data-bs-dismiss="modal" 
          aria-label="Close">
            cancel
        </button>
      </form>
    </>
  )
}

export default HookForm