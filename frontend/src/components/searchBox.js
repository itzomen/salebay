import React, { useState } from 'react'
import { Button, Form, InputGroup, Col } from 'react-bootstrap'
// to have access of histoty prop in this component
import { useHistory } from 'react-router-dom'


// history prop cant be added here
function SearchBox() {
    const [keyword, setKeyword] = useState('')

    let history = useHistory()

    const submitHandler = (e) => {
        e.preventDefault()

        if (keyword) {
            // start at page 1
            history.push(`/?keyword=${keyword}&page=1`)
        } else {
            history.push(history.push(history.location.pathname))
        }
    }
    

    return (
        
        <Col>
                <Form onSubmit={submitHandler} inline>

<InputGroup>
    
    <Form.Control
        placeholder="Search"
        aria-label="Search for Products"
        aria-describedby="Search for Products"
        onChange={(e) => setKeyword(e.target.value)}
        
        
    ></Form.Control>
    
    <InputGroup.Prepend>
        <Button 
        type='submit'
        variant="outline-secondary"
        >
            <box-icon
                type = "regular"
                name="search-alt"
                color="white"
                size="xs"
                animation="flashing"
            >
            </box-icon>
            Apply
        </Button>
    </InputGroup.Prepend>

</InputGroup>


</Form></Col>
    )
}

export default SearchBox
