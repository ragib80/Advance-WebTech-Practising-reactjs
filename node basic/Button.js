export default function Button(title, callback) {
    return `<input type='button' name='button' value='${title}' onclick="${callback()}">`;
}