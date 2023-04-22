import { Component } from 'react';
import { ContactsArray } from "../ContactsArray/ContactsArray";

export const Contacts = ({items, title}) => {
    return(
        <div>
            <h2>{title}</h2>
            {items.map(item => (
                <li key={item.id}>
                    <p><span>{item.name}</span>:<span>{item.number}</span></p>
                </li>
            ))}
        </div>
    )
}



