import User from "./ActiveUser.js";

export default function UserList(users) {

    /* const user = {
         id: 1,
         name: 'shahriar',
         dept: 'cse'
     };*/
    return (

        `<html>
            <head>
                <link rel="stylesheet" href="./bootstrap.min.css"> </link>
            </head>
            <body>
                <table class="table table-bordered" >
                  <h4>Active Users List </h4>  
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Department</th>
                        </tr>
                    </thead>
                    <tbody  class="table table-striped table-hover">
                        <tr >

                            ${users.map((user) => {
            return User(user);

        }).join('')
        }
                        </tr >
                    </tbody >

                </table >
            </body >
        </html >`
    );
}