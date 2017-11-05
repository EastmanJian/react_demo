import React from 'react'

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Endora',
    lastName: 'Jian'
};

const Element = () => (
    <h1>
        Hello, {formatName(user)}!
    </h1>
);

export default Element;