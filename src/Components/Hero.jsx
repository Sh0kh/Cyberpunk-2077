import React from 'react'
import '../Style/Hero.css'

function Hero() {
  return (
        <section className='Hero'>
        <div className='hero__bg'>
            {/* <img src={hero__bg} alt="fptp" /> */}
        </div>
            <div className='container'>
                <div className='hero__wrapper'>
                    <div className='hero__content'>
                        <h1>
                            Доступно на всех платформах
                        </h1>
                        <button>
                            Узнать больше
                        </button>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Hero