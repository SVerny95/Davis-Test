import React from 'react';
import Problems from '../components/Problems'

function SummaryPage(props) {

    // let countingDisorientation = 100 * props.result[0] / 325;
    // let countingReadingAndSpelling = 100 * props.result[1] / 156;
    // let countingAttentionFocus = 100 * props.result[2] / 153;
    // let countingMathAndTimeManagement = 100 * props.result[3] / 98;
    // let countingCoordinationHandwriting = 100 * props.result[4] / 88;
    // let countingSelfEsteem = 100 * props.result[5] / 149;

    // countingDisorientation = 200 * countingDisorientation / 100;
    // countingReadingAndSpelling = 200 * countingReadingAndSpelling / 100;
    // countingAttentionFocus = 200 * countingAttentionFocus / 100;
    // countingMathAndTimeManagement = 200 * countingMathAndTimeManagement / 100;
    // countingCoordinationHandwriting = 200 * countingCoordinationHandwriting / 100;
    // countingSelfEsteem = 200 * countingSelfEsteem / 100;

    let countingDisorientation = Math.round((props.result[0] / 325) * 100) * 2;
    let countingReadingAndSpelling = Math.round((props.result[1] / 156) * 100) * 2;
    let countingAttentionFocus = Math.round((props.result[2] / 153) * 100) * 2;
    let countingMathAndTimeManagement = Math.round((props.result[3] / 98) * 100) * 2;
    let countingCoordinationHandwriting = Math.round((props.result[4] / 88) * 100) * 2;
    let countingSelfEsteem = Math.round((props.result[5] / 149) * 100) * 2;

    // console.log('xxx')

    // props.sixthQuestionChoices.forEach((element, index) => {
    //     console.log(index, element);
    // });

    let showTalents = props.sixthQuestionChoices != null ? true : false;

    function printPage() {
        window.print();
    }

    return (

        <div className='mainForm nextPage'>

            <div className='progressBar'>
                <div className='progress' style={{ width: '100%', borderRadius: '5px' }}></div>
            </div>

            <div className='row' style={{ paddingBottom: '20px' }}>
                <p className='offsetTop'>
                    Данный тест даёт всего лишь приблизительное представление о признаках дислексии, но он поможет вам определить некоторые сферы, на которые стоит обратить внимание. Для получения дополнительной информации перейдите по ссылкам «Получить помощь» или «Узнать больше», приведенными в конце данного отчета.
                </p>
                <p className='youCanPrint'>
                    Вы можете также распечатать результаты теста. <button className='printButton' onClick={() => printPage()}>Распечатать</button>
                </p>

                {showTalents &&
                    <h5>Таланты</h5>
                }

                <ul>

                    {(() => {
                        let array1 = ['Искусство', 'Театр', 'Музыка', 'Спорт', 'Танцы', 'Механика', 'Сочинение историй', 'Коммерция и бизнес', 'Стратегическое мышление', 'Дизайн', 'Строительство', 'Инженерное дело'];
                        const items = []

                        if (showTalents) {
                            props.sixthQuestionChoices.forEach((element, index) => {
                                if (element == 'Absolutely') {
                                    items.push(
                                        <li key={index}>{array1[index]}</li>
                                    )
                                }
                            })
                        }
                        return (items)
                    })
                        ()}

                </ul>

                {/* ----- создано мною компонент проблем ----- */}
                <Problems
                    totals={props.totals}
                />

                <p className='offsetTop'>
                    На графике показаны ключевые области обучения, на которые можно воздействовать в ходе Программы «Коррекция дислексии по методу Дейвиса®». Если две или более области находятся в диапазоне от умеренной до тяжелой степени проявления, то, скорее всего, дислексия присутствует, и эти области можно улучшить. Пояснения к данным ключевым областям приведены под столбчатым графиком.
                </p>

                <div>
                    <table className='summaryTable'>
                        <tbody>
                            <tr>
                                <th></th>
                                <th>
                                    <div style={{ display: 'flex', fontSize: '12px', width: '202px', justifyContent: 'space-between' }}>
                                        <div>Лёгкая</div>
                                        <div>—</div>
                                        <div style={{ letterSpacing: '.8px' }}>Умеренная</div>
                                        <div>—</div>
                                        <div>Тяжёлая</div>
                                    </div>
                                </th>
                            </tr>

                            <tr>
                                <td style={{ fontWeight: 'bold', padding: '2px !important' }}>
                                    Дезориентация
                                </td>
                                <td>
                                    <img className='resultBar' title={`${countingDisorientation}`} src='/wp-content/plugins/davislearning/dyslexia-test/build/images/bar_yellow.gif' style={{ width: `${countingDisorientation}px`, height: "10px" }} />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ fontWeight: 'bold', padding: '2px !important' }}>
                                    Чтение и правописание
                                </td>
                                <td>
                                    <img className='resultBar' title={`${countingReadingAndSpelling}`} src='/wp-content/plugins/davislearning/dyslexia-test/build/images/bar_yellow.gif' style={{ width: `${countingReadingAndSpelling}px`, height: "10px" }} />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ fontWeight: 'bold', padding: '2px !important' }}>
                                    Удержание внимания
                                </td>
                                <td>
                                    <img className='resultBar' title={`${countingAttentionFocus}`} src='/wp-content/plugins/davislearning/dyslexia-test/build/images/bar_yellow.gif' style={{ width: `${countingAttentionFocus}px`, height: "10px" }} />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ fontWeight: 'bold', padding: '2px !important' }}>
                                    Математика и организация времени
                                </td>
                                <td>
                                    <img className='resultBar' title={`${countingMathAndTimeManagement}`} src='/wp-content/plugins/davislearning/dyslexia-test/build/images/bar_yellow.gif' style={{ width: `${countingMathAndTimeManagement}px`, height: "10px" }} />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ fontWeight: 'bold', padding: '2px !important' }}>
                                    Координация и почерк
                                </td>
                                <td>
                                    <img className='resultBar' title={`${countingCoordinationHandwriting}`} src='/wp-content/plugins/davislearning/dyslexia-test/build/images/bar_yellow.gif' style={{ width: `${countingCoordinationHandwriting}px`, height: "10px" }} />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ fontWeight: 'bold', padding: '2px !important' }}>
                                    Самооценка
                                </td>
                                <td>
                                    <img className='resultBar' title={`${countingSelfEsteem}`} src='/wp-content/plugins/davislearning/dyslexia-test/build/images/bar_yellow.gif' style={{ width: `${countingSelfEsteem}px`, height: "10px" }} />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className='summaryDescription'>
                    <div className='summaryDescription__title' style={{}}>Дезориентация</div>
                    <div className='summaryDescription__desc'>Дезориентация означает изменение восприятия, вызванное замешательством или стрессом. Человек получает неточную картину окружающей среды или переключается вместо неё на собственные мысленные образы. Консультация Дейвиса® по ориентации учит ребёнка или взрослого контролировать такую непроизвольную дезориентацию по собственному желанию.</div>

                    <div className='summaryDescription__title' style={{}}>Чтение и правописание</div>
                    <div className='summaryDescription__desc'>Трудности с чтением или правописанием являются наиболее распространенными симптомами дислексии. Причиной их часто являются служебные слова с абстрактным значением (предлоги, союзы), для которых дислексики не могут сформировать мысленный образ. Это можно исправить с помощью Освоения символов по методу Дейвиса®.</div>

                    <div className='summaryDescription__title' style={{}}>Удержание внимания</div>
                    <div className='summaryDescription__desc'>Сдвиги во внимании, вызванные дезориентацией, способны видоизменять или даже обращать вспять ощущение движения, равновесия и времени. Человек может быть гиперактивным, импульсивным, легко отвлекаться или погружаться в свои мысли.</div>

                    <div className='summaryDescription__title' style={{}}>Математика и организация времени</div>
                    <div className='summaryDescription__desc'>Дезориентация может приводить к тому, что точное восприятие времени, последовательности и порядка развивается в человеке медленнее, чем обычно. Это означает, что у него не формируется фундамент для освоения счета, математических концепций и даже социальных навыков.</div>

                    <div className='summaryDescription__title' style={{}}>Координация и почерк</div>
                    <div className='summaryDescription__desc'>Дезориентация влияет на чувство равновесия и движения. Человек может ощущать, что движется, даже сидя неподвижно. Навыки мелкой и крупной моторики могут оказаться недоразвиты, либо могут возникать проблемы с направлением, такие как путаница между «лево» и «право».</div>

                    <div className='summaryDescription__title' style={{}}>Самооценка</div>
                    <div className='summaryDescription__desc'>Дислектики обучаются лучше всего через собственный опыт в реальном мире. Часто их в школе несправделиво считают медлительными, ленивыми или неумными. Это приводит к развитию комплекса неполноценности. Как только они научатся использовать свои особые способности, чтобы успешно справляться со школьной работой, у них отмечается сильный скачок в самооценке.</div>
                </div>

                <div className='linkedButtons'>
                    <button className='printButton' onClick={() => printPage()}>Распечатать</button>
                    <a href='//testdyslexia.eu/что-дальше/' className='linkedButton'>Получить помощь</a>
                    <a href='//testdyslexia.eu/вы-можете-узнать-больше/' className='linkedButton'>Узнать больше</a>
                </div>
                <p>Данный онлайн-тест разработан Международной ассоциацией дислексии по методу Дейвиса (Davis Dyslexia Association International), и его оригинал на английском языке можно найти по адресу <a href="http://www.testdyslexia.com">http://www.testdyslexia.com</a></p>
                <p>Информация о дислексии и о методе Дейвиса®: <a href="https://www.dyslexiadar.com">http://www.dyslexiadar.com</a></p>
                <p>Найти лицензированного методиста по Коррекция дислексии по методу Дейвиса® в вашем регионе можно в директории методистов Дейвиса: русскоязычные методисты — <a href="https://www.dyslexiadar.com/metodisty">http://www.dyslexiadar.com/metodisty</a>, методисты по всему миру — <a href="https://www.davismethod.org">http://www.davismethod.org</a>.</p>
            </div>
        </div>
    )
}

export default SummaryPage
