import React, { Fragment } from "react";
import Input from "../UI/input/Input";
import Error from "../error/Error";

function Form({ error, handleSubmit, inputs, onChange }) {

    return (
        
        <form onSubmit={handleSubmit}>
            {inputs.map((value, index) => {
                return (
                    <Fragment key={index}>
                        <Input
                            type={typeof value === "string" ? "text" : "number"}
                            value={value}
                            onChange={onChange[index]}
                        />

                        {!value.trim().length && <Error msg={error} />}
                    </Fragment>
                );
            })}

            <Input type="submit" />
        </form>
    );
}

export default Form;
