export default function ActiveUser(user) {

    return (

        `<tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.dept}</td>
        </tr>`

    );
}