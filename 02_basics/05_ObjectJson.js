const course = {
    coursename:'Js in hindi',
    price:999,
    courseInstructor:'Hitesh'
}
console.log(course.courseInstructor);
// Alternative de-structuring the object
const {courseInstructor} = course
console.log(courseInstructor); 
// we can give alternative name for that
const {courseInstructor:instructor} = course
console.log(instructor);

// API through Json





