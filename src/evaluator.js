const fs = require('fs');

fs.writeFileSync(
  process.argv[4],
  JSON.stringify({
    github_username: "beto",
    github_repository_name: "lala",
  })
);