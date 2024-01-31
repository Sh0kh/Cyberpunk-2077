import React from 'react'
import '../Style/Treason.css'
import treason__foto1 from '../img/treason__foto1.png'
import treason__foto2 from '../img/treason__foto2.png'
import treason__foto3 from '../img/treason__foto3.png'
function Treason() {
  return (
    <section className='treason'>
        <div className='container'>
            <h1>
                 Найт-Сити изменит тебя навсегда!
            </h1>
            <p>
            <span>Cyberpunk 2077</span> — приключенческая ролевая игра, действие которой происходит в мегаполисе Найт-Сити, где власть, роскошь и модификации тела ценятся выше всего. Ты играешь за V, наёмника в поисках устройства, позволяющего обрести бессмертие. Ты сможешь менять киберимпланты, навыки и стиль игры своего персонажа, исследуя открытый мир, где твои поступки влияют на ход сюжета и всё, что тебя окружает.
            </p>
            <div className='treason__wrapper'>
                <div className='treason__wrapper__foto1'>
                    <img src={treason__foto1} alt="foto" />
                    <img src={treason__foto2} alt="foto" />
                </div>
                <div className='treason__wrapper__foto2'>
                    <img src={treason__foto3} alt="foto" />
                </div>  
            </div>
        </div>
    </section>
  )
}


export default Treason