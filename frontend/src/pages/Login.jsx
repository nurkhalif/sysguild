import { useState } from 'react'
import Card from '../components/Card'
import './Login.css'

const portraits = [
    '/portraits/netflix-yellow.jpg',
    '/portraits/netflix-blue.jpg',
    ]

export default function Login() {
    const [name, setName] = useState('')
    const [selectedPortrait, setSelectedPortrait] = useState(0)

    function changePortrait(direction) {
        setSelectedPortrait((current) =>
            (current + direction + portraits.length) % portraits.length
        )
    }

    let touchStartX = 0

    function handleTouchStart(e) {
        touchStartX = e.touches[0].clientX
    }

    function handleTouchEnd(e) {
        const difference = touchStartX - e.changedTouches[0].clientX

        if (difference > 50) changePortrait(1)
        if (difference < -50) changePortrait(-1)
    }

    return (
        <div className="login-container">
            <Card className="login-card">
                <p>Welcome, stranger...</p>

                <div
                    className="portrait-carousel"
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >
                    <button
                        className="carousel-arrow"
                        onClick={() => changePortrait(-1)}
                        type="button"
                    >
                        &#10094;
                    </button>

                    <img
                        src={portraits[selectedPortrait]}
                        alt={`Portrait ${selectedPortrait + 1}`}
                        className="portrait-image"
                    />

                    <button
                        className="carousel-arrow"
                        onClick={() => changePortrait(1)}
                        type="button"
                    >
                        &#10095;
                    </button>
                </div>

                <div className="portrait-indicators">
                    {portraits.map((_, index) => (
                        <span
                            key={index}
                            className={
                                selectedPortrait === index
                                    ? 'indicator active'
                                    : 'indicator'
                            }
                        />
                    ))}
                </div>

                <label htmlFor="name">Your Name</label>

                <input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </Card>
        </div>
    )
}