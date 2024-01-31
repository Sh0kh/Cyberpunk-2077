import React from 'react'
import '../Style/Play.css'
import play__foto from '../img/play__foto.svg'
import play__foto2 from '../img/play__foto2.png'
function Paly() {
  return (
    <section className='paly'>
        <div className='play__bg'>

        </div>
        <div className='container'>
            <div className='play__title'>
                <img src={play__foto} alt="foto" />
                <h1>
                    Играй и выигрывай!
                </h1>
            </div>
            <p>
            Играй в <span>Cyberpunk 2077</span>  и получи возможность выиграть консоль <span>Xbox Series X</span> или <span>Sony PlayStation 5!</span>  Заполни форму ниже и приложи скриншот о покупке игры. Итоги розыгрыша будут подведены 1 февраля. Удачи! 
            </p>
            <div className='play__wrapper'>
                <form>
                    <input type="text" placeholder='Как тебя зовут?' required />
                    <input type="text" placeholder='Твой е-mail' required />
                    <button type="submit">
                         Отправить
                    </button>
                </form>
                <div className='play__foto'>
                    <img src={play__foto2} alt="foto" />
                </div>
            </div>
        </div>
        <div className='play__bg2'>

        </div>
    </section>
  )
}

export default Paly