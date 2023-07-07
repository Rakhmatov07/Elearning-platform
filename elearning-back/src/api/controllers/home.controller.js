const pg = require("../../libs/pg")

const homePage = async(req, res) => {
    try {
        const categories = (await pg("SELECT name, number_of_courses, image FROM categories;")).rows;
        const courses = (await pg(`SELECT course.name, course.image, course.price, 
                                        course.reviews, course.duration,
                                        course.students_number,
                                        i.name
                                    FROM courses course
                                    INNER JOIN instructors i
                                    USING(instructor_uid)
                                    INNER JOIN categories
                                    USING(category_uid);`)).rows;
    
        const instructors = (await pg("SELECT name, field, image FROM instructors;")).rows;
        const comments = (await pg("SELECT client_name, profession, image, text FROM comments;")).rows;
        res.status(200).json({categories, courses, instructors, comments});        
    } catch (error) {
        
    }
}


module.exports = {
    homePage
}