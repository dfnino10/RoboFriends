import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    const cardArray = robots.map((user) => {
        return (
            <Card 
                key={user.id}
                id= {user.id}
                name={user.user}
                email={user.email}
            />
        );
    });
    return (
        <>
            {cardArray}
        </>
    );
}

export default CardList;