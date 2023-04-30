// Code your solution here

function findMatching (arr, name) {
    return arr.filter(arr => arr.toUpperCase() === name.toUpperCase());    
}

function fuzzyMatch (arr, name) {
    return arr.filter(arr => arr.charAt(0) === name.charAt(0));   
}

function matchName (arr, name) {
    return arr.filter(arr => arr.name === name);   
}