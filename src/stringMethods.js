function getCharAt(string, index) {
    if (typeof string !== "string") {
        return ('Value given to function was of Data Type: ' + (typeof string));
    }
    if (string.length === 0) {
        return ('String is empty');
    }
    else {
        return string.charAt(index);
    }
}

function concatenateStrings(string1, string2) {
    if (typeof string1 !== "string") {
        return ('Value given to function was of Data Type: ' + (typeof string1));
    }
    if (typeof string2 !== "string") {
        return ('Value given to function was of Data Type: ' + (typeof string2));
    }
    else {
        return string1 + string2;
    }  
    }

    function doesInclude(string, world) {
        if (typeof string !== "string") {
            return ('Value given to function was of Data Type: ' + (typeof string));
        }
        if (typeof world !== "string") {
            return ('Value given to function was of Data Type: ' + (typeof world));
        }
        if (string === '') {
            return ('String is empty')
        }
        else {
            return string.includes(world);
        }
    }

    function getIndexOf(string, world) {
        if (typeof string !== "string") {
            return ('Value given to function was of Data Type: ' + (typeof string));
        }
        if (typeof world !== "string") {
            return ('Value given to function was of Data Type: ' + (typeof world));
        }
        if (string === '') {
            return ('String is empty')
        }
        else {
            return string.indexOf(world);
        }
    }

    function sliceString(string) {
        if (typeof string !== "string") {
            return ('Value given to function was of Data Type: ' + (typeof string));
        }
        if (string === '') {
            return ('String is empty')
        }
        else {
            return string.slice(0,5);
        }
    }

    function splitString(string) {
        if (typeof string !== "string") {
            return ('Value given to function was of Data Type: ' + (typeof string));
        }
        if (string === '') {
            return ('String is empty')
        }
        else {
            return string.split(' ');
        } 
    }

    function convertToLowerCase(string) {
        if (typeof string !== "string") {
            return ('Value given to function was of Data Type: ' + (typeof string));
        }
        if (string === '') {
            return ('String is empty')
        }
        else {
            return string.toLowerCase(string);
        }  
    }

    function convertToUpperCase(string) {
        if (typeof string !== "string") {
            return ('Value given to function was of Data Type: ' + (typeof string));
        }
        if (string === '') {
            return ('String is empty')
        }
        else {
            return string.toUpperCase(string);
        }  
    } 

    function trimString(string) {
        if (typeof string !== "string") {
            return ('Value given to function was of Data Type: ' + (typeof string)); 
        }
        else {
            return string.trim(string)
        }
    }

    function replaceSubstring(string, world, everyone) {
        if (typeof string !== "string") {
            return ('Value given to function was of Data Type: ' + (typeof string));
        }
        if (typeof world !== "string") {
            return ('Value given to function was of Data Type: ' + (typeof world));
        }
        if (string === '') {
            return ('String is empty')
        } 
        else {
            return string.replace(world, everyone)
        }
    }

module.exports = {
    getCharAt,
    concatenateStrings,
    doesInclude,
    getIndexOf,
    sliceString,
    splitString,
    convertToLowerCase,
    convertToUpperCase,
    trimString,
    replaceSubstring
};
