import './Citations.scss'
import { CitationsData } from '../../data/CitationsData'
import { useState } from 'react'

export default function Citations() {
    const [current, setCurrent] = useState(0)
    const length = CitationsData.length

    const handleClick = (index) => {
        setCurrent(index)
    }

    return (
        <section className="citations">
            {CitationsData.map(({ quote, author, index }) => {
                return (
                    <div
                        className="citations__slide"
                        key={`${index}-${quote
                            .slice(0, 10)
                            .replaceAll(' ', '&')}`}>
                        {index === current && (
                            <figure className="quoteBox">
                                <blockquote className="quoteBox__quote">
                                    {quote}
                                </blockquote>
                                <figcaption className="quoteBox__author">
                                    {author}
                                </figcaption>
                            </figure>
                        )}
                    </div>
                )
            })}
            <div className="roundPositionIndicatorBlock">
                {[...Array(length)].map((e, index) => (
                    <div
                        className={
                            current === index
                                ? 'currentPosition roundPositionIndicatorBlock__round'
                                : 'roundPositionIndicatorBlock__round'
                        }
                        key={index}
                        onClick={() => handleClick(index)}></div>
                ))}
            </div>
        </section>
    )
}
