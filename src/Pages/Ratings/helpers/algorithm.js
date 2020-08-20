const tests = require('../../../data/tests/tests.json');

export const calculateMaxIndividualScore = () => {
    let maxWeight = 0;
    tests.forEach(test => {
        const weight = test.weight;
        if (maxWeight < weight) maxWeight = weight;
    })
    //plus or minus 2 is the max score available
    return 2*maxWeight;
}

export const detailedScores = rating => {
    const rawScores = tests.map(test => {
        const {slug, name, weight} = test;
        const score = rating[slug];
        if (score > 0) {
            return {
                name,
                slug,
                ratingType: 'positive',
                score: weight*score
            }
        } else if (score === 0) {
            return {
                name,
                slug,
                ratingType: 'neutral',
                score: weight
            }
        } else if (score < 0) {
            return {
                name,
                slug,
                ratingType: 'negative',
                score: -weight*score
            }
        } else {
            throw new Error(`rawScores encountered a rating which was not a number: ${score}`);
        }
    })
    return rawScores;
}

export const totalScore = rating => {
    //initialise
    let positiveScore = 0;
    let neutralScore = 0;
    let negativeScore = 0;
    //get the weightedScores
    const weightedScores = detailedScores(rating);
    //tally up different scores
    weightedScores.forEach(weightedScore => {
        const {ratingType, score} = weightedScore;
        switch(ratingType) {
            case 'positive':
                positiveScore += score;
                break;
            case 'neutral':
                neutralScore += score;
                break;
            case 'negative':
                negativeScore += score;
                break;
            default:
                throw new Error(`'totalScore' received a ratingType not one of 'positive', 'neutral', or 'negative': ${ratingType}`)
        }
    })
    const total = positiveScore + neutralScore + negativeScore;
    //normalise to 1, round off (below so that total is always LESS than 100 to stop potential overflow problems)
    positiveScore = (positiveScore/total).toFixed(2);
    neutralScore = neutralScore/total.toFixed(2);
    negativeScore = negativeScore/total.toFixed(2);
    //return
    return {positiveScore, neutralScore, negativeScore};
}