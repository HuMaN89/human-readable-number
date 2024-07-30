module.exports = function toReadable(number) {
    const cashe = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
        100: "hundred",
        1000: "thousand",
    };
    const isLessThanTwenty = (n) => {
        if (n <= 20) return true;
        return false;
    };
    if (isLessThanTwenty(number)) return cashe[number];

    if (number < 100) {
        if (String(number)[1] === "0") return `${cashe[String(number)[0] + 0]}`;
        return `${cashe[String(number)[0] + 0]} ${cashe[String(number)[1]]}`;
    }

    if (number < 1000) {
        console.log(`${String(number)[1]}${String(number)[2]}`);
        if (`${String(number)[1]}${String(number)[2]}` === "00")
            return `${cashe[String(number)[0]]} hundred`;
        if (String(number)[1] === "0") {
            console.log(0);
            return `${cashe[String(number)[0]]} hundred ${
                cashe[String(number)[2]]
            }`;
        }
        if (String(number)[2] === "0") {
            return `${cashe[String(number)[0]]} hundred ${
                cashe[String(number)[1] + 0]
            }`;
        }
        console.log(Number(`${String(number)[1]}${String(number)[2]}`));
        if (
            isLessThanTwenty(Number(`${String(number)[1]}${String(number)[2]}`))
        )
            return `${cashe[String(number)[0]]} hundred ${
                cashe[Number(`${String(number)[1]}${String(number)[2]}`)]
            }`;
        return `${cashe[String(number)[0]]} hundred ${
            cashe[String(number)[1] + 0]
        } ${cashe[String(number)[2]]}`;
    }
};
