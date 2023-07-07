const adminPage = async(req, res) => {
    try {
        const categories = (await pg("SELECT * FROM categories;")).rows;
        const courses = (await pg(`SELECT * FROM courses;`)).rows;
        const instructors = (await pg("SELECT * FROM instructors;")).rows;
        const comments = (await pg("SELECT * FROM comments;")).rows;
        const contacts = (await pg("SELECT * FROM contacts;")).rows;
        
        res.status(200).json({categories, courses, instructors, comments, contacts});        
    } catch (error) {
        console.log(error.message);
    }

}

module.exports = {
    adminPage
}