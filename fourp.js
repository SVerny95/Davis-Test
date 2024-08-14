import React from 'react';

import Question from './../components/Question.js';
import Answers from './../components/Answers.js';


function FourthPage(props) {
    return (
        <div className='mainForm nextPage'>


            <div className='progressBar'>
                <div className='progress' style={{ width: '80%' }}>
                    шаг 4/5
                </div>
            </div>
            <div className='form'>
                <h2 className="TestTitles">Математика и организация времени</h2>


                <Question title='26. Испытывает затруднения при определении и расчёте времени, опаздывает, с трудом усваивает упорядоченную информацию и задания, связанные с последовательностью.' />
                <Answers
                    id='25'
                    setAnswer={props.setAnswer}
                />

                <Question title='27. При вычислениях полагается на счёт с помощью пальцев и другие приёмы.' />
                <Answers
                    id='26'
                    setAnswer={props.setAnswer}
                />

                <Question title='28. Умеет считать, но испытывает трудности при счёте предметов и операциях с деньгами.' />
                <Answers
                    id='27'
                    setAnswer={props.setAnswer}
                />

                <Question title='29. Может делать арифметические вычисления, но испытывает трудности с пониманием задач. Знает ответы, но не может показать последовательность вычислений на бумаге.' />
                <Answers
                    id='28'
                    setAnswer={props.setAnswer}
                />

                <h2 className='pageMoreTitle'>Память и восприятие</h2>

                <Question title='30. Отличная долговременная память на впечатления, места и лица.' />
                <Answers
                    id='29'
                    setAnswer={props.setAnswer}
                />

                <Question title='31. Плохая память на последовательность событий или информацию, которая не была получена на практике.' />
                <Answers
                    id='30'
                    setAnswer={props.setAnswer}
                />

                <Question title="32. Думает, в основном, с помощью образов и ощущений, а не звуками и словами (практически отсутствует внутренний диалог)." />
                <Answers
                    id='31'
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

export default FourthPage
