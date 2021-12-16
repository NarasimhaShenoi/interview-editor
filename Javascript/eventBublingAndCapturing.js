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

// if we dont paas the third argument, then it will be defaulted to false, which will be event bubbling
document.querySelector('#groups').addEventListener('click', (e) => {
    console.log('groups clicked');
})

document.querySelector('#laptops').addEventListener('click', (e) => {
    console.log('laptops clicked');
})

document.querySelector('#cameras').addEventListener('click', (e) => {
    console.log('cameras clicked');
})

document.querySelector('#mobiles').addEventListener('click', (e) => {
    console.log('mobiles clicked');
})

// if we pass third argument as true, then this will be triggered during event capturing phase
document.querySelector('#mobiles').addEventListener('click', (e) => {
    console.log('mobiles clicked');
}, true)