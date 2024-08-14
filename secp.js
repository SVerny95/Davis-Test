import React from 'react';

import Question from './../components/Question.js';
import Answers from './../components/Answers.js';


function SecondPage(props) {
    return (
        <div className='mainForm nextPage'>


            <div className='progressBar'>
                <div className='progress' style={{ width: '40%' }}>
                    шаг 2/5
                </div>
            </div>
            <div className='form'>
                <h2 className="TestTitles">Зрение, чтение и правописание</h2>


                <Question title='10. При чтении жалуется на головокружение, тошноту или головную боль.' />
                <Answers
                    id='9'
                    setAnswer={props.setAnswer}
                />

                <Question title='11. Приходит в замешательство при виде букв, цифр, слов, последовательностей, а также при объяснениях вслух.' />
                <Answers
                    id='10'
                    setAnswer={props.setAnswer}
                />

                <Question title='12. На письме и при чтении заметны повторы, добавления, перестановки, пропуски и замены букв, цифр и/или слов.' />
                <Answers
                    id='11'
                    setAnswer={props.setAnswer}
                />

                <Question title='13. Говорит, что чувствует или видит несуществующие передвижения во время чтения, письма или переписывания.' />
                <Answers
                    id='12'
                    setAnswer={props.setAnswer}
                />

                <Question title="14. Кажется, что испытывает трудности со зрением, хотя проверка показывает, что зрение в норме." />
                <Answers
                    id='13'
                    setAnswer={props.setAnswer}
                />

                <Question title='15. Обладает на редкость острым зрением и наблюдательностью, при этом отсутствует ощущение глубины или периферическое (боковое) зрение.' />
                <Answers
                    id='14'
                    setAnswer={props.setAnswer}
                />

                <Question title='16. Читает и перечитывает, практически не улавливая смысла.' />
                <Answers
                    id='15'
                    setAnswer={props.setAnswer}
                />

                <Question title='17. Пишет «как слышит», правописание непоследовательное.' />
                <Answers
                    id='16'
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

export default SecondPage
