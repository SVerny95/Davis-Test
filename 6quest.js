import React, { useState, useEffect } from 'react';


function Answers(props) {

    const [myСhoice, setChoice] = useState({
        choices: []
    })

    function setChoices(id, answer) {
        let temp = myСhoice.choices

        temp[id] = answer

        props.setChoicesFromSixth(temp)

        setChoice({
            choices: temp
        })
    }

    useEffect(() => {
        let tempArrayCounter = [0, 0, 0, 0, 0, 0, 0];

        if (myСhoice.choices.indexOf('Absolutely') !== -1) {
            tempArrayCounter[0] += 4;
        }

        if (myСhoice.choices.indexOf('Somewhat') !== -1) {
            tempArrayCounter[0] += 2;
        }

        props.setAnswer(tempArrayCounter)
    }, [myСhoice])

    return (
        <div style={{ overflowX: 'auto' }}>

            <table className='sixthQuestionTable'>
                <tbody>
                    <tr>
                        <th></th>
                        <th>Да</th>
                        <th>Может быть</th>
                        <th>Редко/Никогда</th>
                    </tr>

                    {(() => {
                        let array = ['Искусство', 'Театр', 'Музыка', 'Спорт', 'Танцы', 'Механика', 'Сочинение историй', 'Коммерция и бизнес', 'Стратегическое мышление', 'Дизайн', 'Строительство', 'Инженерное дело'];

                        const items = []

                        for (let i = 0; i < array.length; i++) {
                            items.push(
                                <tr key={i}>
                                    <td>{array[i]}</td>
                                    <td style={{ textAlign: 'center' }}>
                                        <input onClick={() => { setChoices(i, 'Absolutely') }} onChange={() => ''} type="radio" checked={myСhoice.choices[i] === 'Absolutely'} />
                                    </td>
                                    <td style={{ textAlign: 'center' }}>
                                        <input onClick={() => { setChoices(i, 'Somewhat') }} onChange={() => ''} type="radio" checked={myСhoice.choices[i] === 'Somewhat'} />
                                    </td>
                                    <td style={{ textAlign: 'center' }}>
                                        <input onClick={() => { setChoices(i, 'Rarely or Never') }} onChange={() => ''} type="radio" checked={myСhoice.choices[i] === 'Rarely or Never'} />
                                    </td>
                                </tr>
                            )
                        }
                        return (items)
                    })()}

                </tbody>

            </table>
        </div>
    )
}

export default Answers
