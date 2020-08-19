//draws all data from tests.json, relies upon SideNav component implementation

export default () => {
    const testData = require('../../../data/tests/tests.json');
    //collect categories
    let importanceCategories = [];
    testData.forEach(test => {
        if (!importanceCategories.includes(test.importance)) {
            importanceCategories.push(test.importance);
        } 
    })
    //now work with category array to populate sideNavData
    let sideNavData = [];
    importanceCategories.forEach(category => {
        //populate subtitles for each importance category
        let subtitleLinkObjects = [];
        const categorySlug = category.toLowerCase();
        testData.forEach(test => {
            if (test.importance===category) {
                const testLinkObject = {
                    title: test.name,
                    link: `/tests/${categorySlug}/${test.slug}`
                };
                subtitleLinkObjects.push(testLinkObject);
            }
        })
        //link object with subtitles
        const categoryLinkObject = {
            title: category,
            link: `/tests/${categorySlug}/`,
            subtitles: subtitleLinkObjects,
        }
        //now add that category's link object to sideNavData
        sideNavData.push(categoryLinkObject);
    })
    return sideNavData;
}