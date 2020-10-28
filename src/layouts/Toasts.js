import React from 'react'
import { useGlobals } from '../contexts/Global'
import Toast from 'react-bootstrap/Toast'
import { ToastsContainer } from './ToastsStyle'

/**
 *
 * @returns {*}
 * @constructor
 */
function Toasts() {
  const [{ toasts }] = useGlobals()

  const removeToast = (id) => {
    console.log(id)
  }

  return (
    <ToastsContainer>
      {toasts.map((toast) => (
        <Toast onClose={() => removeToast(toast.id)} delay={3000} autohide>
          <Toast.Header>
            {/*<img src="holder.js/20x20?text=%20" className="rounded mr-2" alt=""/>*/}
            <strong className="mr-auto">{toast.header}</strong>
            {/*<small>just now</small>*/}
          </Toast.Header>
          <Toast.Body>{toast.content}</Toast.Body>
        </Toast>
      ))}
    </ToastsContainer>
  )
}

export default Toasts
