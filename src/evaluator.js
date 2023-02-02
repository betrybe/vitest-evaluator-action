const fs = require('fs');

fs.writeFileSync(
  'result.json',
  JSON.stringify({
    github_username: "beto",
    github_repository_name: "lala",
  })
);