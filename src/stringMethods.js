function getCharAt(string, index) {
    if (typeof string !== string) {
        return ('Value given to function was of Data Type:' + (typeof string));
    }
    if (string.length === 0) {
        return ('String is empty');
    }
    else {
        return string.charAt(index);
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
