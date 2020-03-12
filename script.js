// Note the new "async" and "await" keywords.
window.onload = async function() {
    let textBox = document.getElementById("text-box");
    let button = document.querySelector("#btn");
    // handle the click event on the button
    button.addEventListener('click', async function(event) {
        // get the actual TEXT from the textBox
        let text = textBox.value;
        let url = 'https://www.reddit.com/r/' + text + '/.json'
        // Fetch is built in, just like window and document.
        // await indicates that we have to wait for the request
        // to finish. 
        let r = await fetch(url);
        // Processing this response into a an Object from the
        // JSON response is also asynchronous
        let responseJSON = await r.json();
        // Now that we have the data and it's in a format
        // that we can easily use, we'll create links of
        // our own. 
        for(post of responseJSON.data.children) {
            let header = document.createElement('h3');
            let anchor = document.createElement('a');
            anchor.href = post.data.url;
            anchor.innerText = post.data.title;
            header.appendChild(anchor);
            document.body.appendChild(header);
        }
    });
  }