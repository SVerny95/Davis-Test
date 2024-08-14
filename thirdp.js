import React from 'react';

import Question from './../components/Question.js';
import Answers from './../components/Answers.js';


function TheredPage(props) {
    return (
        <div className='mainForm nextPage'>


            <div className='progressBar'>
                <div className='progress' style={{ width: '60%' }}>
                    шаг 3/5
                </div>
            </div>
            <div className='form'>
                <h2 className="TestTitles">Слух и речь</h2>


                <Question title='18. Способен слышать то, что не было сказано или неуловимо для других, легко отвлекается на различные звуки или особенно чувствителен к ним.' />
                <Answers
                    id='17'
                    setAnswer={props.setAnswer}
                />

                <Question title='19. Испытывает трудности при выражении своих мыслей, говорит с запинками или не заканчивает предложения; при волнении заикается; неправильно произносит длинные слова; меняет местами словосочетания, слова и слоги.' />
                <Answers
                    id='18'
                    setAnswer={props.setAnswer}
                />

                <h2 className='pageMoreTitle'>Письмо и моторика</h2>

                <Question title='20. Сложности с написанием и переписыванием текстов, необычный захват карандаша.' />
                <Answers
                    id='19'
                    setAnswer={props.setAnswer}
                />

                <Question title='21. Почерк изменчивый или неразборчивый.' />
                <Answers
                    id='20'
                    setAnswer={props.setAnswer}
                />

                <Question title="22. Неуклюжий, отличается плохой координацией движений; не удаются игры с мячом и командные виды спорта; испытывает трудности с мелкой и/или крупной моторикой." />
                <Answers
                    id='21'
                    setAnswer={props.setAnswer}
                />

                <Question title='23. Подвержен морской болезни и укачиванию при езде.' />
                <Answers
                    id='22'
                    setAnswer={props.setAnswer}
                />

                <Question title='24. Может одинаково хорошо владеть как правой, так и левой рукой.' />
                <Answers
                    id='23'
                    setAnswer={props.setAnswer}
                />

                <Question title='25. Путает право/лево, над/под.' />
                <Answers
                    id='24'
                    setAnswer={props.setAnswer}
                />



                <div className='pageEnding pageEndingLeftButton'>
                    <button className='continueButton' onClick={() => props.changePage('nextPage')}>
                        Продолжить
                    </button>
                </div>

            </div>
        </div>
    )
}

export default TheredPage
