function getName() {
    console.log("Narasimha Shenoi");
}

function getAge() {
    console.log(22);
}

/** if we want to consume this in another module, we need to export this */
function getDOB() {
    console.log('2/2/1998');
}

module.exports.getName = getName;
module.exports.getAge = getAge;

/*
    if we have mutliple function to export, we can mention like this as well
    module.exports = {
        getName: function () {
            console.log("Narasimha");
        },
        getAge: function () {
            console.log(24);
        }
    };
*/