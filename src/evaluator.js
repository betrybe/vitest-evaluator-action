const fs = require('fs');

fs.writeFileSync(
  'results.json',
  JSON.stringify({
    github_username: "beto",
    github_repository_name: "lala",
  })
);