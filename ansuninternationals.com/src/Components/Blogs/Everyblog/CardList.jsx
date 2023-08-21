import React from 'react'
import Card from './Card'

const CardList = ({CardInfo}) => {
    return (

        <div className='card-list'>
            {CardInfo.map((CardInfo, index) => {
                return (
                    <Card
                        key = {index}
                        image = {CardInfo.image}
                        title = {CardInfo.title}
                        desc = {CardInfo.desc}
                        url = {CardInfo.url}
                    />
                );
            })}
        </div>
    )
}

export default CardList;