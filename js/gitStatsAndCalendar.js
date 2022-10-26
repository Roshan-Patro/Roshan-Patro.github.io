    GitHubCalendar(".calendar", "Roshan-Patro");
  
    // or enable responsive functionality:
    GitHubCalendar(".calendar", "Roshan-Patro", { responsive: true });
  
    // Use a proxy
    GitHubCalendar(".calendar", "Roshan-Patro", {
       proxy (username) {
         return fetch(`https://your-proxy.com/github?user=${Roshan-Patro}`)
       }
    }).then(r => r.text())