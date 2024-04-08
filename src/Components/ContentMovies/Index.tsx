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
        {
            title: 'Movie 05'
        },
        {
            title: 'Movie 06'
        },
        {
            title: 'Movie 07'
        },
        {
            title: 'Movie 08'
        },
        {
            title: 'Movie 09'
        },
        {
            title: 'Movie 10'
        },

    ]

    return (
        <div>
            <h2>{subtitle}</h2>
           <div className='contaier_movies-cards'>
           {
                test.map(mv => (
                    <CardMovies key={mv.title} title={mv.title} />
                ))
            }
           </div>
        </div>
    )
}

export default Index