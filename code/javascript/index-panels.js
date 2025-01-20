document.addEventListener("DOMContentLoaded", loadContent);

let panels_dump = "";

function loadContent() {
  let promises = [];
  
  for (let i = 0; i < 8; i++) {
    let doc = "part" + i.toString();
    let promise = fetch("/code/index_panels/" + doc + ".html")
      .then(response => response.text())
      .then(data => {
        // Extract and load script tags from the fetched content
        let tempDiv = document.createElement('div');
        tempDiv.innerHTML = data;
        let scripts = tempDiv.querySelectorAll('script');
        
        scripts.forEach(script => {
          let newScript = document.createElement('script');
          newScript.textContent = script.textContent;
          document.body.appendChild(newScript);
        });
        
        return tempDiv.innerHTML;
      })
      .catch(error => {
        console.error('Error fetching content:', error);
        return ""; 
      });

    promises.push(promise);
  }

  Promise.all(promises).then(results => {
    panels_dump = results.join(""); // Join all results into a single string
    document.getElementById('content-body').innerHTML = panels_dump;
  });
}
