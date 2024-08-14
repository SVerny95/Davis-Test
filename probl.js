import React from 'react';


function generateSection(from, to, header, props) {
    // console.log("Generating Section...")
    console.log(props);
    let toPrint = false;

    function generateLine(percent, from, to, text) {
        console.log(`Percent: ${percent} from ${from} to ${to} text ${text}`);

        // console.log("GenerateLine")
        if (percent > from && percent < to) {
            return (
                <li>{text}</li>
            )
        }
    }

    // props.totals.map(percent => {
    //     if (percent != NaN && percent > from && percent < to) {
    //         toPrint = true;
    //     }
    // });

    let sums = [props.totals.GEN, props.totals.VRS, props.totals.HAS, props.totals.WMS, props.totals.MTM, props.totals.MAC, props.totals.BHD]

    for (let index = 0; index < sums.length; index++) {
        if (sums[index] > from && sums[index] < to) {
            toPrint = true;
        }
    }

    return (
        <>
            {
                toPrint &&
                <>
                    <h5>{header}</h5>
                </>
            }
            <ul>
                {/* {console.log("just loggin")} */}
                {generateLine(props.totals.GEN, from, to, 'Обучение в целом')}
                {generateLine(props.totals.VRS, from, to, 'Зрение, чтение и правописание')}
                {generateLine(props.totals.HAS, from, to, 'Слух и/или речь')}
                {generateLine(props.totals.WMS, from, to, 'Письмо и/или моторика')}
                {generateLine(props.totals.MTM, from, to, 'Математика и/или организация времени')}
                {generateLine(props.totals.MAC, from, to, 'Память и/или восприятие')}
                {generateLine(props.totals.BHD, from, to, 'Поведение, здоровье, развитие и/или характер')}
            </ul>
        </>
    )
}

function Problems(props) {
    const displayBiggestProblemAreas =
        props.totals.GEN > 40 ||
            props.totals.VRS > 40 ||
            props.totals.HAS > 40 ||
            props.totals.WMS > 40 ||
            props.totals.MTM > 40 ||
            props.totals.MAC > 40 ||
            props.totals.BHD > 40 ? true : false;

    const displayModerateProblemAreas =
        ((props.totals.GEN > 20) && (props.totals.GEN < 39)) ||
            ((props.totals.VRS > 20) && (props.totals.VRS < 39)) ||
            ((props.totals.HAS > 20) && (props.totals.HAS < 39)) ||
            ((props.totals.WMS > 20) && (props.totals.WMS < 39)) ||
            ((props.totals.MTM > 20) && (props.totals.MTM < 39)) ||
            ((props.totals.MAC > 20) && (props.totals.MAC < 39)) ||
            ((props.totals.BHD > 20) && (props.totals.BHD < 39)) ? true : false;

    const displayMildProblemAreas =
        ((props.totals.GEN > 10) && (props.totals.GEN < 19)) ||
            ((props.totals.VRS > 10) && (props.totals.VRS < 19)) ||
            ((props.totals.HAS > 10) && (props.totals.HAS < 19)) ||
            ((props.totals.WMS > 10) && (props.totals.WMS < 19)) ||
            ((props.totals.MTM > 10) && (props.totals.MTM < 19)) ||
            ((props.totals.MAC > 10) && (props.totals.MAC < 19)) ||
            ((props.totals.BHD > 10) && (props.totals.BHD < 19)) ? true : false;

    return (
        <div>
            {/* <h3>Таланты</h3>
            <ul>
            {(() => {
                let array1 = ['Искусство', 'Театр', 'Музыка', 'Спорт', 'Танцы', 'Механика', 'Сочинение историй', 'Коммерция и бизнес', 'Стратегическое мышление', 'Дизайн', 'Строительство', 'Инженерное дело'];
                props.sixthQuestionChoices.forEach((element, index) => {
                    return (
                        <li>{array1[index]}</li>
                    )
                });
            }) ()}
            </ul> */}
            {
                displayBiggestProblemAreas &&
                <>
                    {/* {console.log("BiggestProblems")} */}
                    {generateSection(40, 1000, "Наиболее проблемные сферы:", props)}
                </>
            }

            {
                displayModerateProblemAreas &&
                <>
                    {/* {console.log("ModerateProblems")} */}
                    {generateSection(20, 39, "Данный человек может испытывать трудности в следующих областях:", props)}
                </>
            }

            {
                displayMildProblemAreas &&
                <>
                    {/* {console.log("MildProblems")} */}
                    {generateSection(10, 19, "Данный человек может сталкиваться с небольшими затруднениями в следующих областях:", props)}
                </>
            }
        </div>
    );
}

export default Problems
