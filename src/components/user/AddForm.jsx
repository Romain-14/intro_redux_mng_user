import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import Form from '../form/Form';
import {addUsers} from '../../redux/user/action';


function AddForm() {
    const [alias, setAlias] = useState("");
    const [hobby, setHobby] = useState("");
    const [error, setError] = useState(null);

    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        if(!alias.trim().length || !hobby.trim().length){
            setError("Rentrer un caractère");
        } else {
            dispatch(addUsers({alias, hobby}));
            setAlias("");
            setHobby("");
            setError(null);
        }
    }

    return (    
        <Form
            error={error}
            handleSubmit={(e)=> handleSubmit(e)}
            inputs={[alias, hobby]}
            onChange={[
                (e)=> setAlias(e.target.value),
                (e)=> setHobby(e.target.value)
            ]}
            />

        )
}

export default AddForm