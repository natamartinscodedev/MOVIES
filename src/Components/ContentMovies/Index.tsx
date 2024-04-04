import React from 'react'
import CardMovies from '@/Components/CardMovies/Index'

const Index = ({ subtitle }: any) => {
    const test = [
        {
            title: 'Movie 01'
        },
        {
            title: 'Movie 02'
        }, {
            title: 'Movie 03'
        },
        {
            title: 'Movie 04'
        },
    ]
    return (
        <div>
            <h2>{subtitle}</h2>
            {
                test.map(mv => (
                    <CardMovies key={mv.title} title={mv.title} />
                ))
            }
        </div>
    )
}

export default Index