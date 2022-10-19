

export const htmlDecode = (input) => {
    var doc = new DOMParser().parseFromString(input, "text/html");
    return doc.documentElement.textContent;
}

export const ranking = (arr, compFn = (a, b) => a < b) =>
    arr.map(a => arr.filter(b => compFn(a, b)).length + 1);
// Sort and remove duplicates 
export function uniq(a) {
    return a.sort().filter(function (item, pos, ary) {
        return !pos || item !== ary[pos - 1];
    });
}
// ranking([8, 6, 9, 9, 5], (a, b) => a < b);
export function FormatString(str) {
    var string = str.split("auth/")[1].split("-").join(" ");
    return string.charAt(0).toUpperCase() + string.slice(1);

}