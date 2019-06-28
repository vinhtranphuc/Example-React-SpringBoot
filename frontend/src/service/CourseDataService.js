import axios from 'axios'

const INSTRUCTOR = 'in28minutes'
const COURSE_API_URL = 'http://localhost:8080'
const INSTRUCTOR_API_URL = `${COURSE_API_URL}/instructors/${INSTRUCTOR}`

class CourseDataService {

    retrieveAllCourses(_name) {
        //console.log('executed service')
        return axios.get(`${INSTRUCTOR_API_URL}/courses`);
    }

    retrieveCourse(_name, id) {
        //console.log('executed service')
        return axios.get(`${INSTRUCTOR_API_URL}/courses/${id}`);
    }

    deleteCourse(_name, id) {
        //console.log('executed service')
        return axios.delete(`${INSTRUCTOR_API_URL}/courses/${id}`);
    }

    updateCourse(_name, id, course) {
        //console.log('executed service')
        return axios.put(`${INSTRUCTOR_API_URL}/courses/${id}`, course);
    }

    createCourse(_name, course) {
        //console.log('executed service')
        return axios.post(`${INSTRUCTOR_API_URL}/courses/`, course);
    }
}

export default new CourseDataService()