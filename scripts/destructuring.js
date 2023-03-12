const toDoList = {
    title1: "Quiet Time",
    title2: "Study",
    title3: "Go Jogging",
    title4: "Eat Breakfast",
    description1: "",
    description2: "",
    decription3: "This is going to help to reach my goals and my life to the fullest",
    decription4: "",
    date1: "05/02/2020",
    date2: "01/02/2020",
    date3: "tomorrow",
    date4: "today",
    time1: "08:12",
    time2: "13:15",
    time3: "12:36",
    time4: "13:25",
    completed1: false,
    completed2: true,
    completed3: false,
    completed4: true,
    priority1: "red",
    priority2: "yellow",
    priority3: "black",
    priority4: "white",
    tags1: ["Personal", "Work", "School"],
    tags2: ["Personal", "School", "Diary Entry"],
    tags3: ["Content Creation", "Personal"],
    tags4: ["Personal"]
};

/*function taskChoice(num) {
    if (num === 1) {
        const task1 = {};
        for (const [key, value] of Object.entries(toDoList)) {
            if (key.endsWith("1")) {
                task1[key] = Array.isArray(value) ? [...value] : value;
            };
        };
        console.log(task1);
    }else if(num === 2){
        const task2 = {};
        for (const [key, value] of Object.entries(toDoList)) {
            if (key.endsWith("2")) {
                task2[key] = Array.isArray(value) ? [...value] : value;
            };
        };
        console.log(task2);
    }else if(num === 3){
        const task3 = {};
        for (const [key, value] of Object.entries(toDoList)) {
            if (key.endsWith("3")) {
                task3[key] = Array.isArray(value) ? [...value] : value;
            };
        };
        console.log(task3);
    }else if(num === 4){
        const task4 = {};
        for (const [key, value] of Object.entries(toDoList)) {
            if (key.endsWith("4")) {
                task4[key] = Array.isArray(value) ? [...value] : value;
            };
        };
        console.log(task4);
    }
};
taskChoice(4);*/


function taskChoice(num){
    let task = {}
    for(const [key, value] of Object.entries(toDoList)){
        if(key.endsWith(num)){
           task[key] = value;
        };
    };
    console.log(task);
};

taskChoice(4);