import React from 'react';

export default props=> {
    return(
       <>
           <p>My History List</p>
           <ul>
               {props.children}
           </ul>
       </>
    )
}