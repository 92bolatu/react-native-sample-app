const $ = {};

let gaps = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 30, 35, 45, 50, 60, 70, 80, 90, 100];
let size = [];

let config = [
    {
        keys: ['margin', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft', 'marginHorizontal', 'marginVertical'],
        data: gaps
    },
    {
        keys: ['padding', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft', 'paddingHorizontal', 'paddingVertical'],
        data: gaps
    }

];

function make(k, v) {
    let o = {};
    o[k] = v;
    return o;
}

config.forEach(conf => {
    conf.keys.forEach(key => {
        $[key] = {};
        conf.data.forEach(val => {
            $[key][val] = make(key, val);
        });

    });
});
export default $;