function loadCSVTable(csvPath, elementId) {
  fetch(csvPath)
    .then(response => response.text())
    .then(csv => {
      const rows = csv.trim().split("\n").map(r => r.split(","));
      let html = "<table>";

      // header
      html += "<tr>" + rows[0].map(h => `<th>${h}</th>`).join("") + "</tr>";

      // rows
      for (let i = 1; i < rows.length; i++) {
        html += "<tr>" + rows[i].map(cell => `<td>${cell}</td>`).join("") + "</tr>";
      }

      html += "</table>";
      document.getElementById(elementId).innerHTML = html;
    })
    .catch(err => console.error("Error loading CSV:", err));
}
