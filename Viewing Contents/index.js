
export default function index(title, content) {
    return (
        `<html>
            <head>
                <title>${title}</title>
                <link rel="stylesheet" href="./bootstrap.min.css"> </link>
            </head>
            <body>
                <div >
                    ${content}
                </div>

            </body>

        </html>`
    );
}