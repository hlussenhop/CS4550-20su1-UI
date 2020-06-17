/*
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
*/
const findCoursesBySubject = (subject, term) =>
    fetch(`https://tranquil-castle-29276.herokuapp.com/` + `https://searchneu.com/search?query=${subject}&termId=${term}&minIndex=0&maxIndex=100`)
        .then(response => response.json())
        .then(data => data);

export default {
    findCoursesBySubject
}