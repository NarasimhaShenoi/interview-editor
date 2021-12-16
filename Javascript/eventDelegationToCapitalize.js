/** 
 * 
        <html>
            <head>
                <title>Interview Editor</title>
            </head>
            <body>
                <div>
                    <ul id="groups">
                        <input type="text" id="name" data-uppercase>
                        <input type="text" id="pan">
                        <input type="text" id="phone" data-uppercase >
                    </ul>
                </div>
                <script src="myscripts.js"></script>
            </body>
        </html>
 * 
*/

document.querySelector('#groups').addEventListener('keyup', (e) => {
    if(e.target.dataset.uppercase !== undefined) {
        e.target.value =  e.target.value.toUpperCase();
    }
})
