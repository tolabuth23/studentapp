const router  = require('express').Router();

const Student = require("../modules/student")

// create student
router.post("/create", async(req, res)=>{
    const newStudent = new Student(req.body);
    try {
        const saveStudent = await newStudent.save();
        res.status(200).json(saveStudent);
    } catch (error) {
        res.status(500).json(error);
    }
});
// update student 
router.put("/:id", async(req, res)=>{
    if (req.body.studentId == req.params.id){
        try {
            const updateStudent = await Student.findByIdAndUpdate(req.params.id,{
                $set: req.body,
            },
            {
                new: true
            }
            );
            res.status(200).json(updateStudent);

        } catch (error) {
            res.status(500).json(error);
        }
    }
});
// get all student API with search
router.get('/', async(req, res)=>{
    const qNew = req.query.new;
    const qfaculty = req.query.faculty;
    try {
        if (qNew) {
           student = await Student.find().sort({createdAt: -1}).limit(qNew); 
        } else if(qfaculty){
            student = await Student.find({
                faculty: qfaculty
            })
        }else{
            student = await Student.find();
        }
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json(error);
        
    }
});

// delete of student
router.delete('/:id', async(req, res)=>{
    if(req.body.studentId == req.params.id){
        try {
            const delStudent = await Student.findByIdAndDelete(req.params.id);
            res.status(200).json("Delete student is successfully!!!");
        } catch (error) {
            res.status(500).json("You cann't delete the student Item!!");
        }
    }
});
module.exports = router;