const Employee = require("./Employee");

function NextEmployee(data) {
    console.log(data);
    if(data.anotherEmployee) {
        employeeStorage.push(data);
        console.log(employeeStorage);
        init();
    } else {
        return data;
    }
};

module.exports = NextEmployee;