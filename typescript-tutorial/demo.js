var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var addId = function (obj) {
    console.log("obj", obj);
    var id = Math.floor(Math.random() * 100);
    return __assign(__assign({}, obj), { id: id });
};
var doc = addId({ name: "Ishu", location: "Bang" });
console.log(doc);
