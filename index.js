function findMatching(driversArray, string) {
    return driversArray.filter(driver => driver.toLowerCase() == string.toLowerCase())    
}

function fuzzyMatch(driversArray, string) {
    return driversArray.filter(function(driver){             
        return driver.slice(0, string.length) == string      
    })
}

function matchName(driversArray, string) {
    return driversArray.filter(driver => driver.name.toLowerCase() == string.toLowerCase())    
}
/*

Write a Function To Match object Values To a Provided string
Write matchName - This function takes an array of drivers and a 
string as arguments. In this function, each element of the drivers 
array is a JavaScript object that has a property of name.
 The function should return each element whose name property 
 matches the provided string argument.
 */