import React, { Children } from 'react'
import { useState } from 'react';

export const TotalContext = React.createContext(0);

function TotalProvider(props) {
    const [total, setTotal] = useState(0)
    return (
        <TotalContext.Provider value = {[total, setTotal]}>  
            {props.children}
        </TotalContext.Provider>
    )
}

export default TotalProvider;