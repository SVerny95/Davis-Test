import React from 'react';

import Question from './../components/Question.js';
import Answers from './../components/Answers.js';

function FifthPage(props) {
    return (
        <div className='mainForm nextPage'>


            <div className='progressBar'>
                <div className='progress' style={{ width: '100%' }}>
                    шаг 5/5
                </div>
            </div>
            <div className='form'>
                <h2 className="TestTitles">Поведение, здоровье, развитие и характер</h2>


                <Question title='33. Отличается крайней неорганизованностью или, наоборот, навязчивой методичностью.' />
                <Answers
                    id='32'
                    setAnswer={props.setAnswer}
                />

                <Question title='34. В классе может быть шутом, задирой или молчуном.' />
                <Answers
                    id='33'
                    setAnswer={props.setAnswer}
                />

                <Question title='35. Через этапы развития (такие как ползание, говорение, ходьба, завязывание шнурков) проходил очень быстро либо чрезвычайно медленно.' />
                <Answers
                    id='34'
                    setAnswer={props.setAnswer}
                />

                <Question title='36. Подвержен ушным воспалениям; разборчив в еде, восприимчив к пищевым добавкам и химической продукции.' />
                <Answers
                    id='35'
                    setAnswer={props.setAnswer}
                />

                <Question title='37. Спит очень крепко или слишком чутко.' />
                <Answers
                    id='36'
                    setAnswer={props.setAnswer}
                />

                <Question title='38. Ночное недержание сохраняется в более старшем, чем обычно, возрасте.' />
                <Answers
                    id='37'
                    setAnswer={props.setAnswer}
                />

                <Question title="39. Имеет необычно высокий или, наоборот, низкий болевой порог." />
                <Answers
                    id='38'
                    setAnswer={props.setAnswer}
                />

                <Question title="40. Обладает острым чувством справедливости и эмоциональной восприимчивостью, стремится к совершенству." />
                <Answers
                    id='39'
                    setAnswer={props.setAnswer}
                />

                <Question title="41. Число ошибок и симптомов резко возрастает в периоды замешательства и эмоционального стресса, а также при спешке или ослабленном здоровье." />
                <Answers
                    id='40'
                    setAnswer={props.setAnswer}
                />


                <div className='pageEnding pageEndingLeftButton'>
                    <button className='continueButton processAssessmentButton' onClick={() => props.countResult()}>
                        РЕЗУЛЬТАТЫ ТЕСТА
                    </button>
                </div>

            </div>
        </div>
    )
}

export default FifthPage
