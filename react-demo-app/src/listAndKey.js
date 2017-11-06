import React from 'react'

function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        <li key={number.toString()}>
            Item {number}.
        </li>
    );
    return (
        <ul>{listItems}</ul>
    );
}

function ListWithKey(props) {
    const numbers = [1, 2, 3, 4, 5];
    return (
        <div>
            <p>This Component shows a React list. It's an array, generated by a map() function. A key is added for each
                list item. They help React identify which items have changed, are added. So that react can re-render the
                UI once the state is changed</p>
            <NumberList numbers={numbers}/>
        </div>
    )
}

export default ListWithKey

