const biodata = {
    name: "Kumar Shivam Ray",
    address: {
        village: 'Pipra',
        post: 'Daraundha',
        district: 'Siwan',
        state: 'Bihar',
        country: 'India',
        pincode: 841233,
    },
    dob: {
        date: "06",
        month: "08",
        year: "1997",
        short: "1997/08/06",
        long: "6th August, 1997",
    },
    contact: {
        phone: {
            primary: "+91 9348569931",
            secondary: "+91 9264278855",
        },
        mail: "kumarshivamray0656@gmail.com",
    },
    websites: {
        stackoverflow: "https://stackoverflow.com/users/10286590/kumar-shivam-ray",
        linkedin: "https://www.linkedin.com/in/kumar-shivam-ray-b16206138/",
        twitter: "",
        facebook: "https://www.facebook.com/pandit0608/",
        instagram: "https://www.instagram.com/shivam__ray/",
    },
    education: {
        2013: {
            name: "Class 10",
            board: "CBSE",
            location: "Visakhapatnam",
        },
        2015: {
            name: "Class 12",
            board: "CBSE",
            location: "Visakhapatnam",
        },
        2016: {
            name: "Year Drop",
            board: "",
            location: "Visakhapatnam",
        },
        2020: {
            name: "Computer Science and Engineering",
            board: "Kalinga Institute of Industrial Technology",
            location: "Bhubaneswar",
        },
    },
    skills: {
        main: ["Python", "React JS", "Core Java", "MySQL", "Docker", "Docker Swarm"],
        secondary: ["Android Java", "HTML", "XML", "Shell Scripting", "Linux"]
    },
    expericence: [
        {

            organization: "Highradius",
            roles: [{
                department: "Robotic Process Automation (RPA)",
                position: "Intern",
                interval: {
                    from: { date: "08", month: "07", year: "2019" },
                    to: { date: "31", month: "12", year: "2019" },
                }
            }],
            website: "https://www.highradius.com",
            technologies: ['Java', 'MySQL'],
        },
        {
            organization: "Ericsson India Global Services Pvt. Ltd.",
            roles: [
                {
                    position: "Intern",
                    department: "Operations",
                    interval: {
                        from: { date: "20", month: "01", year: "2020" },
                        to: { date: "03", month: "02", year: "2021" },
                    }
                },
                {
                    position: "Associate Engineer Trainee",
                    department: "Robotic Process Automation (RPA)",
                    interval: {
                        from: { date: "04", month: "02", year: "2021" },
                        to: { date: "31", month: "03", year: "2022" },
                    }
                },
                {
                    position: "Associate Software Developer",
                    department: "Robotic Process Automation (RPA)",
                    interval: {
                        from: { date: "01", month: "04", year: "2022" },
                        to: { date: "*", month: "*", year: "*" },
                    }
                }
            ],
            website: "https://www.ericsson.com/en/about-us/company-facts/ericsson-worldwide/india",
            technologies: ['Python', 'Python Celery', 'React JS', 'MySQL', 'Elasticsearch', 'Redis', 'HTTPD'],
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
