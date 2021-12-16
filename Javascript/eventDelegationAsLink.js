/** 
 * 
    <html>
        <head>
            <title>Interview Editor</title>
        </head>
        <body>
            <div>
                <ul id="groups">
                    <li id="laptops">laptops</li>
                    <li id="cameras">cameras</li>
                    <li id="mobiles">mobiles</li>
                </ul>
            </div>
            <script src="myscripts.js"></script>
        </body>
    </html>
 *
*/

document.querySelector('#groups').addEventListener('click', (e) => {
    if(e.target.tagName === "LI") {
        document.location.href = '/' + e.target.id;
    }
})