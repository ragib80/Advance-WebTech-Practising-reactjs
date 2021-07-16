export default function Button(title, callback) {
    return `<input type='button' name='button' class="btn btn-success" value='${title}' onclick="${callback()}">`;
}