let string = "Hello World";

// approach-1
string.replace(/[^a-zA-Z0-9]/g, '');

// approach-2
string = string.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');