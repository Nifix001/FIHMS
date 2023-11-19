import React, { useState } from 'react'
import { useEffect } from 'react';

export default function useLocalStorage( key, initialValue  ) {
    
    const [ value, setValue ] = useState(() => {
        const jsonValue = localStorage.getItem(key)

        if ( jsonValue != null ) return JSON.parse(jsonValue);
        
        if (typeof initialValue === "function" ) {
            return ( initialValue )();
        } else {
            return initialValue;
        }
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

  return [value, setValue];
}

export const fetchData = ( key ) => {
    return JSON.parse( localStorage.getItem(key) );
}