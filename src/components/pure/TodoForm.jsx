import React, {useRef} from 'react'
import PropTypes from 'prop-types';


const TodoForm = ( {submit} ) => {

    const newText = useRef();

  return (
    <div>
        <h2>Crear Tareas</h2>
        <form onSubmit={(e) => {
            e.preventDefault();
            submit(newText.current.value);
            newText.current.value = '';
        }}>

            <input type='text' className='form-control' ref={newText} />
            <button type='submit' className='btn btn-primary'>
                Crear Nueva
            </button>
        </form>
    </div>
  )
}

TodoForm.propTypes = {
    submit: PropTypes.func.isRequired
}

export default TodoForm;
