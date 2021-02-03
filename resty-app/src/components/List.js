import React from 'react';

export default function Listp(props) {
    return(
       <>
           <p>My History List</p>
           <ul>
               {props.children}
           </ul>
       </>
    )
}