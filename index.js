/*global module */

(function(globals) {

    "use strict";

    var stringify = function(obj) {

        var res = "";

        if (obj) {
            if (Array.isArray(obj)) {

                res = obj.map(stringify).join(",");
            } else if (typeof(obj) === "object") {

                res = Object.keys(obj).map(function(key) {
                    return key + "[" + stringify(obj[key]) + "]";
                }).join(",");
            } else if (typeof(obj) !== "function") {

                res = String(obj);
            }
        }

        return res;
    };

    var TreeFormat = {
        stringify: stringify
    };

    if (typeof(module) !== "undefined" && module.exports) {
        module.exports = TreeFormat;
    } else {
        globals.TreeFormat = TreeFormat;
    }

})(this);