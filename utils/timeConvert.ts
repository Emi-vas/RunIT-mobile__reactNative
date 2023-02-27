//convert a time in seconde to a string Min'Sec"
export const secToString = (time: number) => {
    if(time < 60) {
        return `${time}"`
    }

    let min = Math.trunc(time / 60)
    let sec = time % 60

    if(sec == 0) {
        return `${min}'`
    }
    
    return `${min}' ${sec}"`
}