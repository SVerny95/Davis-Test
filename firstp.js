import React from 'react';

import Question from './../components/Question.js';
import Answers from './../components/Answers.js';
import SixthQuestion from './../components/SixthQuestion.js';


function FirstPage(props) {
    return (
        <div className='mainForm'>

            <div className='progressBar'>
                <div className='progress' style={{ width: '20%' }}>
                    шаг 1/5
                </div>
            </div>
            <div className='form'>
                <h2 className="TestTitles">Общие характеристики</h2>

                <Question title='1. Производит впечатление очень умного и сообразительного, хорошо выражает свои мысли, но при этом неспособен читать и писать на уровне своего класса.' />
                <Answers
                    id='0'
                    setAnswer={props.setAnswer}
                />

                <Question title='2. Его считают ленивым, невнимательным, глупым, отстающим в развитии, непослушным или нестарательным.' />
                <Answers
                    id='1'
                    setAnswer={props.setAnswer}
                />

                <Question title='3. Имеет высокий коэффициент умственного развития, но не всегда показывает хорошие результаты в учёбе, устные тесты проходят гораздо лучше, чем письменные.' />
                <Answers
                    id='2'
                    setAnswer={props.setAnswer}
                />

                <Question title='4. Считает себя глупым, имеет низкую самооценку, скрывает свои слабые стороны с помощью оригинальных компенсирующих стратегий.' />
                <Answers
                    id='3'
                    setAnswer={props.setAnswer}
                />

                <Question title='5. Легко расстраивается и эмоционально переживает по поводу занятий в школе, чтения и тестирования.' />
                <Answers
                    id='4'
                    setAnswer={props.setAnswer}
                />

                <Question title='6. Талантлив в следующих сферах:' />
                <SixthQuestion
                    id='5'
                    setAnswer={props.sixthQuestionAnswer}
                    setChoicesFromSixth={props.setChoicesFromSixth}
                />

                <Question title='7. Часто погружается в мечты, грезит наяву, легко теряется или забывает о времени.' />
                <Answers
                    id='6'
                    setAnswer={props.setAnswer}
                />

                <Question title='8. С трудом удерживает внимание, отличается мечтательностью или гиперактивностью.' />
                <Answers
                    id='7'
                    setAnswer={props.setAnswer}
                />

                <Question title='9. Лучше всего усваивает информацию через практический опыт, эксперименты, наблюдение и наглядные материалы.' />
                <Answers
                    id='8'
                    setAnswer={props.setAnswer}
                />

                <div className='pageEnding'>
                    <button className='continueButton' onClick={() => props.changePage('nextPage')}>
                        Продолжить
                    </button>
                </div>

            </div>
        </div>
    )
}

export default FirstPage
