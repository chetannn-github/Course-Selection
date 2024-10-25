import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  _id:false,
  courseCode: { type: String,  },
  courseName: { type: String,  },
  'L-T-P': { type: String,  },
  credits: { type: Number,  },
  completed:{type:Boolean , default: false},
});

// Define the FirstYear schema
const firstYearSchema = new mongoose.Schema({
  _id:false,
  BS: [courseSchema],
  HM: [courseSchema],
  ES: [courseSchema],
  UN: [courseSchema]
});

const coursesSchema = new mongoose.Schema({
  _id:false,
  DC: [courseSchema],
  DE: [courseSchema],
  firstYear: firstYearSchema
});

const StudentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    rollNumber: { type: String, required: true, unique: true },
    studentId: { type: String, unique: true },
    address: { type: String },
    email: { type: String, unique: true },
    mobileNumber: { type: String, },
    courses:coursesSchema,
    parents: {
        name: { type: String, },
        address: { type: String, },
        email: { type: String, },
        mobileNumber: { type: String, }
    },
    password:{type:String,required:true},
    creditsCompleted: { type: Number, default: 0 }
  });
// Create the Student model
export const Student = mongoose.model('Student', StudentSchema);

