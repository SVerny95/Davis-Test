import React, { useState } from 'react';


function Answers(props) {

    const [myСhoice, setChoice] = useState('')


    return (
        <div className='row answers'>
            <div className='checkboxesItem' onClick={() => { setChoice('Absolutely'); props.setAnswer(props.id, '1') }}>
                <input onChange={() => ''} type="radio" checked={myСhoice === 'Absolutely'} />
                Да
            </div>
            <div className='checkboxesItem' onClick={() => { setChoice('Somewhat'); props.setAnswer(props.id, '2') }}>
                <input onChange={() => ''} type="radio" checked={myСhoice === 'Somewhat'} />
                Отчасти
            </div>
            <div className='checkboxesItem' onClick={() => { setChoice('Rarely or Never'); props.setAnswer(props.id, '3') }}>
                <input onChange={() => ''} type="radio" checked={myСhoice === 'Rarely or Never'} />
                Редко/Никогда
            </div>
        </div>
    )

}
export default Answers
