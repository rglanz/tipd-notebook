import React from 'react'

function Idea(props) {
    return(
        <div className="idea-line">
            <label htmlFor={props.id} className='number'>{props.number}.</label>
            <input
                type="text"
                name={props.id}
                id={props.id}
                className="idea"
                value={props.input}
                onChange={() => props.handleChange}
                autoComplete='off'
                autoFocus={props.focus}
            />
        </div>
    )
}

export default Idea
