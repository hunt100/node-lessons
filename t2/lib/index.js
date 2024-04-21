let streets = require("./streets");

let _getStreet = function(listName) {
    let list = streets[listName];
    if (!list) {
        return "";
    }
    let idx = (Math.random() * list.length) >>> 0;
    return list[idx];
};

let _getHouseNumber = function (min, max) {
    return " д. " + ((Math.random() * (max - min + 1) + min) >>> 0);
}

let getStreet = function (options) {
    options = options || {};
    if (options.city) {
        const city = options.city.toLowerCase();
        const street = _getStreet(city + "_streets");
        if (street === "") {
            return "";
        } else {
            return street + _getHouseNumber(1, 100);
        }
    } else {
        return _getStreet(Math.random() > 0.5 ? 'almaty_streets' : 'astana_streets') + _getHouseNumber(1, 100);
    }
}

module.exports = getStreet;
