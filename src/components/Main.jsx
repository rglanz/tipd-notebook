import React from 'react'
import Idea from './Idea.jsx'

const initialValues = {
    idea1: '',
    idea2: '',
    idea3: '',
    idea4: '',
    idea5: '',
    idea6: '',
    idea7: '',
    idea8: '',
    idea9: '',
    idea10: ''
}

function Main() {
    const [formData, setFormData] = React.useState(initialValues)

    function handleChange(event) {
        const {name, value} = event.target
        console.log(value)

        setFormData(prevFormData => {
            return {...prevFormData, [name]: value}
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
    }

    return(
        <form className="idea-container" onSubmit={handleSubmit}>
            <Idea
                key='idea1'
                id='idea1'
                number='1'
                value={formData.idea1}
                handleChange={handleChange}
                focus='on'
            />
            <Idea
                key='idea2'
                id='idea2'
                number='2'
                value={formData.idea2}
                handleChange={handleChange}
            />
            <Idea
                key='idea3'
                id='idea3'
                number='3'
                value={formData.idea3}
                handleChange={handleChange}
            />
            <Idea
                key='idea4'
                id='idea4'
                number='4'
                value={formData.idea4}
                handleChange={handleChange}
            />
            <Idea
                key='idea5'
                id='idea5'
                number='5'
                value={formData.idea5}
                handleChange={handleChange}
            />
            <Idea
                key='idea6'
                id='idea6'
                number='6'
                value={formData.idea6}
                handleChange={handleChange}
            />
            <Idea
                key='idea7'
                id='idea7'
                number='7'
                value={formData.idea7}
                handleChange={handleChange}
            />
            <Idea
                key='idea8'
                id='idea8'
                number='8'
                value={formData.idea8}
                handleChange={handleChange}
            />
            <Idea
                key='idea9'
                id='idea9'
                number='9'
                value={formData.idea9}
                handleChange={handleChange}
            />
            <Idea
                key='idea10'
                id='idea10'
                number='10'
                value={formData.idea10}
                handleChange={handleChange}
            />
        </form>
    )
}

export default Main
