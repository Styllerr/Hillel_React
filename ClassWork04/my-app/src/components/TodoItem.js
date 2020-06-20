import React from 'react'

function TodoItem({item, onToggle}) {
    return (
        <li style={getStyles(item)}>
            {item.title}
        </li>
    )
}

export default TodoItem


function getStyles(item) {
return {
    backgroundColor: 'red'
}
}