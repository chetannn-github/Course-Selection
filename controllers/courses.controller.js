export const getCourses = async (req,res) =>{
    try {
        let {rollno} = req.body;   // rollno ="bt22ece010"
        if(!rollno){
            return res.json({"error": "rollno is missing"})
        }
        res.json({rollno});

    } catch (error) {
        res.json({"error": "error in getting courses"});
    }
}