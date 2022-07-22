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
var pp = {
    name: 'harden',
    sex: 'man'
};
var wrapper = __assign(__assign({}, pp), { like: 'baseketball' });
console.log(wrapper);
console.log(0 /* First */);
