import React from 'react'

function formatDate(date) {
  return date.toLocaleDateString();
}

export function Example(props) {
  return (
    <div>
      <div>
        <img src={props.author.avatarUrl} alt={props.author.name} />
        <div>
          -Name: {props.author.name}
        </div>
      </div>
      <div>
        -Comment: {props.text}
      </div>
      <div>
        -Date: {formatDate(props.date)}
      </div>
    </div>
  );
}