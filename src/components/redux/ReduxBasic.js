import React from 'react';

const ReduxBasic = ({
    currentDate,
    setDate,
}) => (
    <section>
        <button onClick={setDate}>New Date</button>
        <p>{currentDate}</p>
    </section>
);

export default ReduxBasic;
