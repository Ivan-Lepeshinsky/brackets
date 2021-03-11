module.exports = function check(str, bracketsConfig) {
    let Arr = str.split("");

    for (let i = 0; i < Arr.length; i++) {
        for (let j = 0; j < bracketsConfig.length; j++) {
            if (
                Arr[i] == bracketsConfig[j][1] &&
                Arr[i - 1] == bracketsConfig[j][0]
            ) {
                Arr.splice(i - 1, 2);
                i = 0;
                break;
            }
        }
    }

    return Arr == 0 ? true : false;
};
