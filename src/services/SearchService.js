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
        body: `term=${termCode}`,
        headers: {
            'content-type': '/x-www-form-urlencoded; charset=UT',
            'cookie': 'JSESSIONID=ABCDEF0123456789ABCDEF0123456789; nubanner-cookie=0123456789.12345.1234'
        }
    })

const findAllCourses = () =>
    fetch("https://searchneu.com/search?query=cs&termId=202060&minIndex=0&maxIndex=0")
        .then(response => response.json())


export default {
    findCourseById,
    findCourseByKeyword,
    findAllCourses,
    declareTerm,
    findTerm
}