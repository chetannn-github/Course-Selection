export const getCourses = async (req,res) =>{
    try {
        let {rollno , semester} = req.body;   // rollno ="bt22ece010"
        if(!rollno){
            return res.json({"error": "rollno is missing"})
        }
        // if year is first year show all first year courses.
        if(semester == 1 || semester ==2){
            return res.json({courses : courses.ECE.firstYear})
        }

        // if year is second year show DC subjects and first year courses 
        if(semester == 3 || semester ==4){
                return res.json({firstYear: courses.ECE.firstYear,
                            DC:courses.ECE.DC
                    })
        }
        // if year is third or fourth year show DE, show DC subjects and first year courses 
        
            return res.json({firstYear: courses.ECE.firstYear,
                        DC:courses.ECE.DC,
                        DE: courses.ECE.DE
                })
        
        
        
        res.json({rollno});

    } catch (error) {
        res.json({"error": "error in getting courses"});
    }
} 

const courses = {
    ECE:{
        DC:[
            { courseCode: 'ECL251', courseName: 'Signals and Systems', 'L-T-P': '3-2-0', credits: 4 },
            { courseCode: 'ECL252', courseName: 'Analog Circuits', 'L-T-P': '3-0-0', credits: 3 },
            { courseCode: 'ECP252', courseName: 'Analog Circuits Lab', 'L-T-P': '0-0-2', credits: 1 },
            { courseCode: 'ECL253', courseName: 'Analog Communication Systems', 'L-T-P': '3-0-0', credits: 3 },
            { courseCode: 'ECP253', courseName: 'Analog Communication Systems Lab', 'L-T-P': '0-0-2', credits: 1 },
            { courseCode: 'EEL251', courseName: 'Basic Electrical Circuits', 'L-T-P': '3-0-0', credits: 3 },
            { courseCode: 'EEP251', courseName: 'Basic Electrical Circuits Lab', 'L-T-P': '0-0-2', credits: 1 },
            { courseCode: 'EEL252', courseName: 'Measurement & Instrumentation', 'L-T-P': '3-0-0', credits: 3 },
            { courseCode: 'EEP252', courseName: 'Measurement & Instrumentation Lab', 'L-T-P': '0-0-2', credits: 1 },
            { courseCode: 'EEL254', courseName: 'Control System', 'L-T-P': '3-0-0', credits: 3 },
            { courseCode: 'EEP254', courseName: 'Control System Lab', 'L-T-P': '0-0-2', credits: 1 },
            { courseCode: 'ECL254', courseName: 'Engineering Electromagnetics', 'L-T-P': '3-0-0', credits: 3 },
            { courseCode: 'ECL255', courseName: 'Solid State Devices', 'L-T-P': '3-0-0', credits: 3 },
            { courseCode: 'ECL256', courseName: 'Digital Circuits', 'L-T-P': '3-0-0', credits: 3 },
            { courseCode: 'ECP256', courseName: 'Digital Circuits Lab', 'L-T-P': '0-0-2', credits: 1 },
            { courseCode: 'ECL351', courseName: 'Linear Integrated Circuits', 'L-T-P': '3-0-0', credits: 3 },
            { courseCode: 'ECP351', courseName: 'Linear Integrated Circuits Lab', 'L-T-P': '0-0-2', credits: 1 },
            { courseCode: 'ECL352', courseName: 'Digital Signal Processing', 'L-T-P': '3-0-0', credits: 3 },
            { courseCode: 'ECP352', courseName: 'Digital Signal Processing Lab', 'L-T-P': '0-0-2', credits: 1 },
            { courseCode: 'ECL353', courseName: 'Microcontroller and Interfacing', 'L-T-P': '3-0-0', credits: 3 },
            { courseCode: 'ECP353', courseName: 'Microcontroller and Interfacing Lab', 'L-T-P': '0-0-2', credits: 1 },
            { courseCode: 'ECL354', courseName: 'Antenna Theory', 'L-T-P': '3-0-0', credits: 3 },
            { courseCode: 'ECL355', courseName: 'Digital Communication Systems', 'L-T-P': '3-0-0', credits: 3 },
            { courseCode: 'ECP355', courseName: 'Digital Communication Systems Lab', 'L-T-P': '0-0-2', credits: 1 },
            { courseCode: 'ECL356', courseName: 'Microwave Theory and Techniques', 'L-T-P': '3-0-0', credits: 3 },
            { courseCode: 'ECP356', courseName: 'Microwave Theory and Techniques Lab', 'L-T-P': '0-0-2', credits: 1 },
            { courseCode: 'ECL357', courseName: 'Information Theory & Coding', 'L-T-P': '3-0-0', credits: 3 },
            { courseCode: 'CSL251', courseName: 'Data Structures', 'L-T-P': '3-0-0', credits: 3 },
            { courseCode: 'CSP251', courseName: 'Data Structures Lab', 'L-T-P': '0-0-2', credits: 1 },
            { courseCode: 'ECD351', courseName: 'Minor Project', 'L-T-P': '0-0-0', credits: 1 },
            { courseCode: 'ECD451', courseName: 'Major Project', 'L-T-P': '0-0-0', credits: 2 },
        ],
        DE:[
            { courseCode: 'ECL461', courseName: 'Wireless Communications', 'L-T-P': '3-0-0', credits: 3 },
            { courseCode: 'ECP461', courseName: 'Wireless Communications Lab', 'L-T-P': '0-0-2', credits: 1 },
            { courseCode: 'ECL462', courseName: 'Electronic System Design', 'L-T-P': '3-0-0', credits: 3 },
            { courseCode: 'ECP462', courseName: 'Electronic System Design Lab', 'L-T-P': '0-0-2', credits: 1 },
            { courseCode: 'ECL463', courseName: 'Optical Communication Systems', 'L-T-P': '3-0-0', credits: 3 },
            { courseCode: 'ECL464', courseName: 'Radar Systems', 'L-T-P': '3-0-0', credits: 3 },
            { courseCode: 'ECL465', courseName: 'Satellite Communication Systems', 'L-T-P': '3-0-0', credits: 3 },
            { courseCode: 'ECL466', courseName: 'Finite Automata', 'L-T-P': '3-0-0', credits: 3 },
            { courseCode: 'ECL467', courseName: 'Radio Frequency and Microwave Engineering', 'L-T-P': '3-0-0', credits: 3 },
            { courseCode: 'ECL468', courseName: 'Embedded System Design', 'L-T-P': '3-0-0', credits: 3 },
            { courseCode: 'ECP468', courseName: 'Embedded System Design Lab', 'L-T-P': '0-0-2', credits: 1 },
            { courseCode: 'ECL469', courseName: 'Hardware Description Languages', 'L-T-P': '3-0-0', credits: 3 },
            { courseCode: 'ECP469', courseName: 'Hardware Description Languages Lab', 'L-T-P': '0-0-2', credits: 1 },
            { courseCode: 'ECL562', courseName: 'Principles of Biomedical Instrumentation Design', 'L-T-P': '3-0-0', credits: 3 },
            { courseCode: 'CSL258', courseName: 'Computer Organization', 'L-T-P': '3-0-0', credits: 3 },
            { courseCode: 'CSP255', courseName: 'Computer Networks Lab', 'L-T-P': '0-0-2', credits: 1 },
            { courseCode: 'CSL255', courseName: 'Computer Networks', 'L-T-P': '3-0-0', credits: 3 },
            { courseCode: 'CSP256', courseName: 'Software Lab', 'L-T-P': '0-0-2', credits: 1 },
            { courseCode: 'CSL355', courseName: 'Artificial Intelligence', 'L-T-P': '3-0-0', credits: 3 },
            { courseCode: 'CSP355', courseName: 'Artificial Intelligence Lab', 'L-T-P': '0-0-4', credits: 2 },
            { courseCode: 'CSL351', courseName: 'Database Management Systems', 'L-T-P': '3-0-0', credits: 3 },
            { courseCode: 'CSP351', courseName: 'DBMS Lab', 'L-T-P': '0-0-2', credits: 1 },
            { courseCode: 'CSP353', courseName: 'Python Lab', 'L-T-P': '0-0-2', credits: 1 },
            { courseCode: 'CSL354', courseName: 'Information and Network Security', 'L-T-P': '3-0-0', credits: 3 },
            { courseCode: 'CSP452', courseName: 'Cloud Computing Lab', 'L-T-P': '0-0-4', credits: 2 },
            { courseCode: 'CSL359', courseName: 'Neuro-Fuzzy Techniques', 'L-T-P': '3-0-0', credits: 3 },
            { courseCode: 'CSL451', courseName: 'Real Time Systems', 'L-T-P': '3-0-0', credits: 3 },
            { courseCode: 'CSP451', courseName: 'Real Time Systems Lab', 'L-T-P': '0-0-4', credits: 2 },
            { courseCode: 'CSP455', courseName: 'Linux Lab', 'L-T-P': '0-0-4', credits: 2 },
            { courseCode: 'CSL453', courseName: 'Internet of Things', 'L-T-P': '3-0-0', credits: 3 },
            { courseCode: 'CSP453', courseName: 'IoT Lab', 'L-T-P': '0-0-6', credits: 3 },
            { courseCode: 'CSL456', courseName: 'Multimedia Technologies', 'L-T-P': '3-0-0', credits: 3 },
            { courseCode: 'CSP355', courseName: 'Artificial Intelligence Lab', 'L-T-P': '0-0-6', credits: 3 },
            { courseCode: 'EEL255', courseName: 'Power Electronics', 'L-T-P': '3-0-0', credits: 3 },
            { courseCode: 'EEL354', courseName: 'Advance Power Electronics', 'L-T-P': '3-0-0', credits: 3 },
            { courseCode: 'EEP354', courseName: 'Power Electronics Lab', 'L-T-P': '0-0-2', credits: 1 },
            { courseCode: 'SCL354', courseName: 'Nanoscience and Nanotechnology', 'L-T-P': '3-0-0', credits: 3 },
            { courseCode: 'SCL457', courseName: 'Semiconductor Materials and Optoelectronics', 'L-T-P': '3-0-0', credits: 3 },
            { courseCode: 'SCL458', courseName: 'Magnetic Materials and Devices', 'L-T-P': '3-0-0', credits: 3 },
            { courseCode: 'ECL502', courseName: 'MOS Device Physics', 'L-T-P': '3-0-0', credits: 3 },
            { courseCode: 'ECL503', courseName: 'CMOS Digital VLSI Design', 'L-T-P': '3-0-0', credits: 3 },
            { courseCode: 'ECP503', courseName: 'CMOS Digital VLSI Design Lab', 'L-T-P': '0-0-2', credits: 1 },
            { courseCode: 'ECL504', courseName: 'CMOS Analog VLSI Design', 'L-T-P': '3-0-0', credits: 3 },
            { courseCode: 'ECP504', courseName: 'CMOS Analog VLSI Design Lab', 'L-T-P': '0-0-2', credits: 1 },
            { courseCode: 'ECL519', courseName: 'VLSI/ULSI Technology', 'L-T-P': '3-0-0', credits: 3 },
            { courseCode: 'ECL520', courseName: 'Micro-electromechanical Systems', 'L-T-P': '3-0-0', credits: 3 },
            { courseCode: 'ECL521', courseName: 'Internet of Things', 'L-T-P': '3-0-0', credits: 3 },
            { courseCode: 'ECL542', courseName: 'Image Processing', 'L-T-P': '3-0-0', credits: 3 },
            { courseCode: 'ECP542', courseName: 'Image Processing Lab', 'L-T-P': '0-0-2', credits: 1 },
            { courseCode: 'ECL545', courseName: 'Human and Machine Speech Communications', 'L-T-P': '3-0-0', credits: 3 },
            { courseCode: 'ECP545', courseName: 'Human and Machine Speech Communications Lab', 'L-T-P': '0-0-2', credits: 1 },
            { courseCode: 'ECL551', courseName: 'Adaptive Signal Processing', 'L-T-P': '3-0-0', credits: 3 },
            { courseCode: 'ECL552', courseName: 'Introduction to Machine Learning', 'L-T-P': '3-0-0', credits: 3 },
            { courseCode: 'ECP552', courseName: 'Machine Learning Lab', 'L-T-P': '0-0-2', credits: 1 },
             
        ],
        firstYear:{
            BS : [
                { courseCode: 'SCL152', courseName: 'Applied Mathematics-I', 'L-T-P': '3-2-0', credits: 4 },
                { courseCode: 'SCL153', courseName: 'Applied Mathematics-II', 'L-T-P': '3-2-0', credits: 4 },
                { courseCode: 'SCL251', courseName: 'Applied Mathematics-III*', 'L-T-P': '3-0-0', credits: 3 },
                { courseCode: 'SCL154', courseName: 'Applied Physics', 'L-T-P': '3-0-0', credits: 3 },
                { courseCode: 'SCP154', courseName: 'Applied Physics Lab', 'L-T-P': '0-0-2', credits: 1 },
                { courseCode: 'SCL155', courseName: 'Applied Chemistry', 'L-T-P': '3-0-0', credits: 3 },
                { courseCode: 'SCP155', courseName: 'Applied Chemistry Lab', 'L-T-P': '0-0-2', credits: 1 }
            ],
            HM: [
                { courseCode: 'HML151', courseName: 'Social Science', 'L-T-P': '2-0-0', credits: 2 },
                { courseCode: 'HMP152', courseName: 'Technical Communication', 'L-T-P': '2-0-2', credits: 3 }
            ],
            ES: [
                { courseCode: 'MEL152', courseName: 'Elementary Mechanical Engineering', 'L-T-P': '3-0-0', credits: 3 },
                { courseCode: 'EEL151', courseName: 'Elementary Electrical Engineering', 'L-T-P': '3-0-0', credits: 3 },
                { courseCode: 'EEP151', courseName: 'Elementary Electrical Engineering Lab', 'L-T-P': '0-0-2', credits: 1 },
                { courseCode: 'ECL151', courseName: 'Basic Electronics Engineering', 'L-T-P': '3-0-0', credits: 3 },
                { courseCode: 'ECP151', courseName: 'Basic Electronics Engineering Lab', 'L-T-P': '0-0-2', credits: 1 },
                { courseCode: 'MEL151', courseName: 'Engineering Drawing', 'L-T-P': '3-0-0', credits: 3 },
                { courseCode: 'MEP151', courseName: 'Engineering Drawing Lab', 'L-T-P': '0-0-2', credits: 1 },
                { courseCode: 'CSL151', courseName: 'Computer Programming and Problem Solving', 'L-T-P': '3-0-0', credits: 3 },
                { courseCode: 'CSP151', courseName: 'Computer Programming Lab', 'L-T-P': '0-0-2', credits: 1 },
                { courseCode: 'MEP152', courseName: 'Mechanical Workshop', 'L-T-P': '0-0-2', credits: 1 },
                { courseCode: 'CEL151', courseName: 'Environmental Science', 'L-T-P': '2-0-0', credits: 2 }
            ],
            UN:[
                { courseCode: 'NCN151', courseName: 'NCC#', 'L-T-P': '-', credits: 0 },
                { courseCode: 'NCN152', courseName: 'NSS#', 'L-T-P': '-', credits: 0 },
                { courseCode: 'NCN153', courseName: 'NSO#', 'L-T-P': '-', credits: 0 },
                { courseCode: 'SPB151', courseName: 'Sports-I#', 'L-T-P': '0-0-4', credits: 0 },
                { courseCode: 'SPB152', courseName: 'Sports-II#', 'L-T-P': '0-0-4', credits: 0 },
                { courseCode: 'HMD251', courseName: 'Community Project', 'L-T-P': '-', credits: 0 },
                { courseCode: 'CET251', courseName: 'Practical Training', 'L-T-P': '-', credits: 0 }
            ]

        }
           
        
    },
};