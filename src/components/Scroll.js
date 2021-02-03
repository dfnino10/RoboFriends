import React from 'react';

const Scroll = (props) => {
    return(
        <div style={{overflowY: 'scroll', border: '1px', height:'81vh'}}>
            {props.children}
        </div>
    );
}

export default Scroll;