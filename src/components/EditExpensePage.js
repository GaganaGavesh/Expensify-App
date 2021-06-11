import React from 'react';

const EditExpensePage = (props) => {
    console.log(props);
    return (
        <div>
            Editind the expense with is of {props.match.params.id}
        </div>
    );
};

export default EditExpensePage;