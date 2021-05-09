
export const calculateMaxIndividualScore = () => {
    return 20;
}

export const detailedScores = rating => {
    return 5;
}

export const totalScore = rating => {
    
    //normalise to 1, round off (below so that total is always LESS than 100 to stop potential overflow problems)
    const positiveScore = 0.5;
    const neutralScore = 0.5;
    const negativeScore = 0.5;
    //return
    return {positiveScore, neutralScore, negativeScore};
}