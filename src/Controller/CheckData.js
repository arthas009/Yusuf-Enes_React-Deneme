export default function CheckData() {
    fetch('http://127.0.0.1:4000', {
    }).then((resp) => resp.json()) // Transform the data into json
        .then(data => {
           // POST DATA TO VIEW SECTION.
            postMessage(data)
            //Prints result from `response.json()` in getRequest
        })
        setInterval(CheckData,4000);
}
