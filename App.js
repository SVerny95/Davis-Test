import React, { useState } from 'react'
import Problems from './components/Problems'

import './index.css'

import FirstPage from './pages/FirstPage'
import SecondPage from './pages/SecondPage'
import TheredPage from './pages/TheredPage'
import FourthPage from './pages/FourthPage'
import FifthPage from './pages/FifthPage'
import SummaryPage from './pages/summaryPage'

function App() {

    let k = [
        // General Characteristics 
        // DIS RAS ATT MAT CAH SAE
        [8, 10, 0, 0, 0, 8, 26], // q1
        [10, 0, 10, 0, 0, 8, 28], // q2
        [10, 0, 10, 0, 0, 8, 28], // q3
        [8, 0, 7, 0, 0, 12, 27], // q4
        [7, 8, 5, 0, 0, 6, 26], // q5
        [6, 0, 0, 0, 0, 0, 6], // q6
        [10, 0, 10, 4, 4, 0, 28], // q7
        [10, 0, 10, 0, 0, 0, 20], // q8
        [8, 6, 0, 0, 0, 0, 14], // q9

        // Page 2. Vision, Reading and Spelling
        // DIS RAS ATT MAT CAH SAE
        [10, 10, 4, 0, 0, 0, 24], // q10
        [10, 8, 0, 8, 0, 0, 26], // q11
        [10, 10, 0, 6, 0, 4, 30], // q12
        [10, 10, 4, 0, 0, 0, 24], // q13
        [10, 8, 0, 4, 6, 0, 28], // q14
        [10, 8, 0, 0, 8, 0, 26], // q15
        [4, 10, 6, 0, 0, 0, 20], // q16
        [8, 4, 0, 0, 8, 0, 20], // q17

        // Page 3. Hearing and Speech
        // DIS RAS ATT MAT CAH SAE
        [8, 0, 8, 0, 0, 0, 16], // q18
        [8, 2, 4, 0, 2, 10, 24], // q19 [6] - было 26

        // Writing and Motor Skills
        // DIS RAS ATT MAT CAH SAE
        [6, 0, 0, 4, 10, 5, 25], // q20
        [8, 4, 0, 0, 8, 6, 26], // q21
        [10, 0, 0, 0, 10, 6, 26], // q22
        [10, 0, 0, 0, 6, 0, 16], // q23
        [10, 0, 5, 0, 0, 0, 15], // q24
        [10, 5, 6, 8, 6, 4, 39], // q25

        // Page 4. Math and Time Management
        // DIS RAS ATT MAT CAH SAE
        [8, 10, 0, 10, 0, 4, 32], // q26
        [0, 0, 0, 10, 0, 5, 15], // q27
        [4, 0, 0, 10, 0, 4, 18], // q28
        [7, 8, 0, 4, 0, 2, 21], // q29

        // Memory and Cognition
        // DIS RAS ATT MAT CAH SAE
        [8, 5, 10, 5, 0, 4, 32], // q30
        [8, 5, 10, 5, 0, 4, 32], // q31
        [8, 10, 8, 0, 0, 0, 26], // q32

        // Page 5. Behavior, Health, Development and Personality
        // DIS RAS ATT MAT CAH SAE
        [7, 0, 7, 5, 5, 5, 29], // q33
        [4, 0, 4, 0, 0, 10, 18], // q34
        [8, 5, 6, 5, 5, 5, 34], // q35 [6] - было 31
        [8, 5, 6, 5, 5, 5, 34], // q36 [6] - было 31
        [8, 0, 5, 0, 0, 0, 13], // q37 [6] - было 8
        [10, 0, 0, 0, 0, 10, 20], // q38
        [8, 0, 0, 0, 0, 0, 8], // q39
        [0, 0, 0, 0, 0, 10, 10], // q40
        [10, 5, 8, 5, 5, 4, 37], // q41
    ];

    let l = [
        // General Characteristics 
        // DIS RAS ATT MAT CAH SAE
        [4, 5, 0, 0, 0, 4, 13], // q1
        [5, 0, 5, 0, 0, 4, 14], // q2
        [5, 5, 0, 2, 0, 2, 14], // q3
        [4, 0, 3, 0, 0, 7, 14], // q4
        [3, 4, 2, 0, 0, 3, 12], // q5
        [3, 0, 0, 0, 0, 0, 3], // q6
        [5, 0, 5, 2, 2, 0, 14], // q7
        [5, 0, 5, 0, 0, 0, 10], // q8
        [4, 3, 0, 0, 0, 0, 7], // q9

        // Page 2. Vision, Reading and Spelling
        // DIS RAS ATT MAT CAH SAE
        [5, 5, 2, 0, 0, 0, 12], // q10
        [5, 4, 0, 4, 0, 0, 13], // q11
        [5, 5, 0, 4, 0, 2, 16], // q12
        [5, 5, 2, 0, 0, 0, 12], // q13
        [5, 4, 0, 2, 3, 0, 14], // q14
        [5, 3, 0, 0, 4, 0, 12], // q15
        [2, 5, 3, 0, 0, 0, 10], // q16
        [4, 2, 0, 0, 4, 0, 10], // q17

        // Page 3. Hearing and Speech
        // DIS RAS ATT MAT CAH SAE
        [4, 0, 4, 0, 0, 0, 8], // q18
        [4, 1, 2, 0, 1, 5, 13], // q19

        // Writing and Motor Skills
        // DIS RAS ATT MAT CAH SAE
        [3, 0, 2, 2, 5, 2, 14], // q20
        [4, 2, 0, 0, 4, 3, 13], // q21
        [5, 0, 0, 0, 5, 3, 13], // q22
        [5, 0, 0, 0, 3, 0, 8], // q23
        [5, 0, 2, 0, 0, 0, 7], // q24
        [5, 2, 3, 4, 3, 2, 19], // q25

        // Page 4. Math and Time Management
        // DIS RAS ATT MAT CAH SAE
        [4, 5, 0, 5, 0, 2, 16], // q26
        [0, 0, 0, 5, 0, 2, 7], // q27
        [2, 0, 0, 5, 0, 2, 9], // q28
        [4, 4, 0, 2, 0, 1, 11], // q29

        // Memory and Cognition
        // DIS RAS ATT MAT CAH SAE
        [4, 2, 5, 2, 0, 2, 15], // q30
        [4, 2, 5, 2, 0, 2, 15], // q31
        [4, 5, 4, 0, 0, 0, 13], // q32

        // Page 5. Behavior, Health, Development and Personality
        // DIS RAS ATT MAT CAH SAE
        [3, 0, 3, 2, 2, 3, 13], // q33
        [2, 0, 2, 0, 0, 5, 9], // q34
        [4, 3, 3, 3, 3, 3, 19], // q35
        [4, 3, 3, 3, 3, 3, 19], // q36
        [4, 0, 2, 0, 0, 0, 6], // q37
        [5, 0, 0, 0, 0, 6, 11], // q38
        [8, 0, 0, 0, 0, 0, 8], // q39
        [0, 0, 0, 0, 0, 3, 3], // q40
        [5, 2, 4, 2, 2, 2, 17], // q41
    ];

    // -----------> эти числа тебе понадобятся в алгоритме <-----------
    // total - все баллы в данной категории
    // DIS - "Дезориентация"
    // ATT - "Чтение и правописание" 
    // RAS - "Удержание внимания"
    // MAT - "Математика и организация времени"
    // CAH - "Координация и почерк"
    // SAE - "Самооценка"
    // let DIStotal = 325;
    // let RAStotal = 156;
    // let ATTtotal = 153;
    // let MATtotal = 98;
    // let CAHtotal = 88;
    // let SAEtotal = 149;

    const [summaryResult, setSummaryResult] = useState({
        result: [0, 0, 0, 0, 0, 0, 0]
    })

    const [userAnswersState, setUserAnswers] = useState({
        answers: {}
    })

    const [sixthChoicesState, setSixthChoices] = useState({
        sixthChoices: {}
    })

    const [pageNumberState, setPageNumber] = useState(1)

    function sixthQuestionAnswer(array, choices) {

        let temp = userAnswersState.answers;

        temp[5] = array;

        setUserAnswers({
            answers: temp,
            choices: choices
        })
    }

    function setAnswer(id, answer) {
        console.log('setting asnwer')

        let temp = userAnswersState.answers;

        if (answer === '1') {
            temp[id] = k[id];
        } else if (answer === '2') {
            temp[id] = l[id]
        } else {
            temp[id] = [0, 0, 0, 0, 0, 0, 0];
        }

        setUserAnswers({
            answers: temp
        })
    }

    function setChoicesFromSixth(choices) {
        let temp = sixthChoicesState.choices;

        temp = choices;

        setSixthChoices({
            choices: temp
        });
    }


    function changePage(type) {
        if (type === 'nextPage') {
            setPageNumber(pageNumberState + 1)
        } else if (type === 'previousPage') {
            setPageNumber(pageNumberState - 1)
        }

        // console.log("scrolling up");

        setTimeout(function () {
            document.getElementsByClassName('progress')[0].scrollIntoView({
                //behavior: 'smooth'
            })
        }, 250)
    }

    function countResult() {
        console.log('countResult()');

        console.log(userAnswersState.answers);

        let total = [0, 0, 0, 0, 0, 0, 0];

        for (let key in userAnswersState.answers) {
            for (let i = 0; i < 6; i++) {
                total[i] += userAnswersState.answers[key][i]
            }
        }

        let answerTotals = [0, 0, 0, 0, 0, 0, 0]

        let categories = [
            // page 1
            0, 8,   // 1  - 9   Обучение в целом

            // page 2
            9, 16,  // 10 - 17  Зрение, чтение и правописание

            // page 3
            17, 18, // 18 - 19  Слух и речь
            19, 24, // 20 - 25  Письмо и моторика

            // page 4
            25, 28, // 26 - 29  Математика и организация времени
            29, 31, // 30 - 32  Память и восприятие

            // page 5
            32, 40  // 33 - 41  Поведение, здоровье, развитие и характер
        ]

        let key2 = 0;

        let answerPercent = [0, 0, 0, 0, 0, 0, 0]

        let categoriesTotals = [
            304, // 0 - GENtotal
            297, // 1 - $VRStotal
            63,  // 2 - $HAStotal
            221, // 3 - $WMStotal
            129, // 4 - $MTMtotal
            133, // 5 - $MACtotal (!!!)
            308  // 6 - $BHDtotal
        ]

        for (let index = 0; index < answerTotals.length; index++) {

            for (let key in userAnswersState.answers) {
                if (key === 5) {
                    continue
                }

                if (key >= categories[key2] && key <= categories[key2 + 1]) {
                    if (key >= 29 && key <= 31) {
                        if(userAnswersState.answers[key][6] !== 0){
                            answerTotals[index] = answerTotals[4] + userAnswersState.answers[key][6];
                        }
                    } else {
                        answerTotals[index] += userAnswersState.answers[key][6];
                    }
                }
            }
            
            answerPercent[index] = ((answerTotals[index] / categoriesTotals[index]) * 100).toFixed();
            console.log(answerTotals[index], categoriesTotals[index], answerPercent[index]);

            key2 += 2
        }

        // console.log(11111111111111111111111111111111111);

        // console.log("AnswerTotals: " + answerTotals);
        // console.log("AnswerPercent: " + answerPercent);

        setSummaryResult({
            result: total,
            totals: {
                GEN: answerPercent[0],
                VRS: answerPercent[1],
                HAS: answerPercent[2],
                WMS: answerPercent[3],
                MTM: answerPercent[4],
                MAC: answerPercent[5],
                BHD: answerPercent[6]
            }
        });

        changePage('nextPage')
    }


    return (
        <div className='home'>

            {pageNumberState === 1
                ? <FirstPage
                    sixthQuestionAnswer={sixthQuestionAnswer}
                    setAnswer={setAnswer}
                    setChoicesFromSixth={setChoicesFromSixth}
                    changePage={changePage}
                />
                : ''
            }

            {pageNumberState === 2
                ? <SecondPage
                    setAnswer={setAnswer}
                    changePage={changePage}
                />
                : ''
            }

            {pageNumberState === 3
                ? <TheredPage
                    setAnswer={setAnswer}
                    changePage={changePage}
                />
                : ''
            }

            {pageNumberState === 4
                ? <FourthPage
                    setAnswer={setAnswer}
                    changePage={changePage}
                />
                : ''
            }

            {pageNumberState === 5
                ? <FifthPage
                    setAnswer={setAnswer}
                    changePage={changePage}
                    countResult={countResult}
                />
                : ''
            }

            {pageNumberState === 6
                ? <>
                    <SummaryPage
                        result={summaryResult.result}
                        totals={summaryResult.totals}
                        sixthQuestionAnswer={sixthQuestionAnswer}
                        sixthQuestionChoices={sixthChoicesState.choices}
                    />
                    {/* <Problems
                        totals={summaryResult.totals}
                    /> */}
                </>
                : ''
            }


        </div>
    );
}

export default App;
