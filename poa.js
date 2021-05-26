export default function poa (company, eik, egn, manager) {
    let organ="";

    if (company.includes('АД')) {
        organ='представител';
    } else if (company.includes('СДРУЖЕНИЕ')){
        organ='представител';
    } else {
        organ='управител';
    }

    return `                                                                     ПЪЛНОМОЩНО
    Долуподписаният ${manager}, с ЕГН: ${egn} в качеството си на ${organ} на ${company}, ЕИК: ${eik},
                с настоящото:
                                                                    УПЪЛНОМОЩАВАМ:
        адв. Вероника Анчова Тодорова, член на САК, личен № 1800731410;
        адв. Елица Каменова Калинова, член на САК, личен № 4900183110;
        адв. Адрияна Николова Янчина, член на ПАК, личен  № 1800138940, със следните права:                      
        Да ме представляват пред Агенцията по вписванията – Търговски регистър и регистър на юридическите лица с нестопанска цел, в качеството ми на ${organ} на  ${company} ЕИК: ${eik} като за целта:
        1.	Да подават, от мое име и за сметка на ${company} ЕИК:${eik} пред Търговски регистър и регистър на юридическите лица с нестопанска цел при Агенцията по вписванията Заявление образец Г2 - за обявяване на годишен финансов отчет по партида на дружеството, както и Заявление образец Ж1 - за поправяне на нередовности;
        2.	Да заплащат всички необходими такси и други суми във връзка с упражняване на правата по това пълномощно. 
        3.	Да получават всякакви документи, преписи, откази и други, във връзка с упражняване на правата по това пълномощно.
        4.	Да извършват всички необходими действия във връзка с предоставените им с това пълномощно права.
        Това пълномощно не е ограничено със срок и при съмнение следва да се тълкува изцяло в полза на упълномощеното лице.
                                                                    УПЪЛНОМОЩИТЕЛ:
                                                                ____________________________
                                                        /${manager}/`;
};