import React from 'react';
import { Link } from 'react-router-dom';

export default function CategoryLink({ children, to }) {
    return (
        <Link to={to}> 
            {children}
        </Link>
    )
}
