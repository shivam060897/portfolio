const biodata = {
    name: "Kumar Shivam Ray",
    address: {
        village: 'Pipra',
        post: 'Daraundha',
        district: 'Siwan',
        state: 'Bihar',
        country: 'India',
        pincode: 841233
    },
    aboutMe: [],
    dob: {
        date: "06",
        month: "08",
        year: "1997",
        short: "1997/08/06",
        long: "6th August, 1997"
    },
    contact: {
        phone: {
            primary: null,
            secondary: "+91 9348569931"
        },
        mail: "kumarshivamray0656@gmail.com",
    },
    websites: {
        stackoverflow: "https://stackoverflow.com/users/10286590/kumar-shivam-ray",
        linkedin: "https://www.linkedin.com/in/kumar-shivam-ray-b16206138/",
        twitter: "",
        facebook: "https://www.facebook.com/pandit0608/",
        instagram: "https://www.instagram.com/shivam__ray/"
    },
    education: {
        2013: {
            name: "Class 10",
            board: "CBSE",
            school: "Navy Children School",
            location: "Visakhapatnam",
        },
        2015: {
            name: "Class 12",
            board: "CBSE",
            school: "MP & EV English Medium School",
            location: "Visakhapatnam",
        },
        2020: {
            name: "Computer Science and Engineering",
            board: "Kalinga Institute of Industrial Technology",
            school: "School of Computer Science & Engineering",
            location: "Bhubaneswar",
        }
    },
    skills: {
        main: ["Python", "React JS", "Docker", "Docker Swarm", "MySQL", "Core Java"],
        secondary: ["Linux", "Android Java", "HTML", "XML", "Shell Scripting"]
    },
    expericence: [
        {
            organization: "Ericsson Inc.",
            department: "Robotic Process Automation (RPA)",
            position: "Automation Engineer",
            address: "Overland Park, Kansas, US",
            interval: {
                from: { date: "05", month: "06", year: "2023" },
                to: { date: "*", month: "*", year: "*" },
            },
            website: "https://www.ericsson.com/en/about-us/company-facts/ericsson-worldwide/india",
            technologies: ['Python', 'Python Celery', 'React JS', 'MySQL', 'Elasticsearch', 'Redis', 'HTTPD'],
        },
        {
            organization: "Ericsson India Global Services Pvt. Ltd.",
            department: "Robotic Process Automation (RPA)",
            position: "Associate Software Developer",
            address: "Noida, India",
            interval: {
                from: { date: "04", month: "04", year: "2021" },
                to: { date: "04", month: "06", year: "2023" },
            },
            website: "https://www.ericsson.com/en/about-us/company-facts/ericsson-worldwide/india",
            technologies: ['Python', 'Python Celery', 'React JS', 'MySQL', 'Elasticsearch', 'Redis', 'HTTPD'],
        },
        {
            organization: "Ericsson India Global Services Pvt. Ltd.",
            department: "Robotic Process Automation (RPA)",
            position: "Associate Engineer Trainee",
            address: "Noida, India",
            interval: {
                from: { date: "04", month: "02", year: "2021" },
                to: { date: "03", month: "04", year: "2022" },
            },
            website: "https://www.ericsson.com/en/about-us/company-facts/ericsson-worldwide/india",
            technologies: ['Python', 'Python Celery', 'React JS', 'MySQL', 'Elasticsearch', 'Redis', 'HTTPD'],
        },
        {
            organization: "Ericsson India Global Services Pvt. Ltd.",
            department: "Telecom T2 Support",
            position: "Intern",
            address: "Noida, India",
            interval: {
                from: { date: "20", month: "01", year: "2020" },
                to: { date: "03", month: "02", year: "2021" },
            },
            website: "https://www.ericsson.com/en/about-us/company-facts/ericsson-worldwide/india",
            technologies: [],
        },
        {

            organization: "HighRadius Corporation",
            department: "Robotic Process Automation (RPA)",
            position: "Intern",
            address: "Bhubaneswar, Odisha, India",
            interval: {
                from: { date: "08", month: "07", year: "2019" },
                to: { date: "31", month: "12", year: "2019" },
            },
            website: "https://www.highradius.com",
            technologies: ['Java', 'MySQL'],
        },
    ],
    projects: {
        1: {
            name: "Media Player",
            platform: "Android",
            description: "Plays both audio and video anywhere on device",
        },
        2: {
            name: "ComArena Server",
            platform: "Java and MySQL",
            description: "Social Media Server Interface",
        },
    },
    hobbies: ["Software Development"]
}

export default biodata;
