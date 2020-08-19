export default rating => {
    //what does this actually give back?
    //a 3-tuple representing proportion of 'good' 'neutral' and 'bad'.
    const tests = require('../../../data/tests/tests.json');
    let maxPositiveScore = 0;
    let maxNeutralScore = 0;
    let maxNegativeScore = 0;
    tests.forEach(test => {
        maxPositiveScore += 2*test.weight;
        maxNegativeScore += 2*test.weight;
        maxNeutralScore += test.weight;
    })
    let positiveScore = 0;
    let neutralScore = 0;
    let negativeScore = 0;
    Object.keys(rating).forEach(ratingName => {
        let weight;
        tests.forEach(test => {
            if (test.slug===ratingName) weight = test.weight
        })
        if (rating[ratingName] > 0) {
            positiveScore += rating[ratingName]*weight;
        } else if (rating[ratingName] === 0) {
            neutralScore += weight;
        } else if (rating[ratingName] < 0) {
            negativeScore += -(rating[ratingName]*weight);
        } else {
            throw new Error(`rating was not a number`)
        }
    })
    //normalise
    positiveScore = positiveScore/maxPositiveScore;
    neutralScore = neutralScore/maxNeutralScore;
    negativeScore = negativeScore/maxNegativeScore;
    const sumOfScores = positiveScore + neutralScore + negativeScore;
    //return proportion
    positiveScore = positiveScore/sumOfScores;
    neutralScore = neutralScore/sumOfScores;
    negativeScore = negativeScore/sumOfScores;
    //round off to 2 d.p.
    positiveScore = positiveScore.toFixed(2);
    neutralScore = neutralScore.toFixed(2);
    negativeScore = negativeScore.toFixed(2);
    //check if exceeds 100%
    return {positiveScore, neutralScore, negativeScore};
}