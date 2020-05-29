const findCourseById = (courseId) => {
    fetch ("https://searchneu.com/search?query=cs&termId=202060&minIndex=0&maxIndex=0")
        .then(response => response.json())
}

const findTerm = (keyword) => {
    fetch(`https://nubanner.neu.edu/StudentRegistrationSsb/ssb/classSearch/getTerms?offset=1&max=10&searchTerm=${keyword}`)
        .then(response => response.json())
}

const findCourseByKeyword = (keyword) => {
    fetch ("https://searchneu.com/search?query=cs&termId=202060&minIndex=0&maxIndex=1")
        //.then(response => response.json())
}

const declareTerm = (termCode) =>
    fetch("https://nubanner.neu.edu/StudentRegistrationSsb/ssb/term/search", {
        method: 'POST',
        request: termCode,
        body: `term=${termCode}&studyPath=&studyPathText=&startDatepicker=&endDatepicker=`,
        headers: {
            'content-type': 'application/x-www-form-urlencoded; charset=UT',
            'cookie': 'JSESSIONID=6E0B9C067C6999C1D4DED15D1EAA6A81; nubanner-cookie=3709804955.36895.0000'
        }
    })

const findAllCourses = () =>
    fetch("https://searchneu.com/search?query=cs&termId=202060&minIndex=0&maxIndex=1")
        .then(response => response.json())
        .then(data => console.log(data));


export default {
    findCourseById,
    findCourseByKeyword,
    findAllCourses,
    declareTerm,
    findTerm
}