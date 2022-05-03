import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadAllUsers } from "../../redux/user/action";
import AddForm from "../../components/user/AddForm";
import User from "../../components/user/Display";

function Home() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadAllUsers());
    }, []);

    return (
        <main>
            {/* <Heading heading="h2">MY HOME</Heading> */}
            <h1>YO</h1>
            <AddForm />

            <User />
        </main>
    );
}

export default Home;
