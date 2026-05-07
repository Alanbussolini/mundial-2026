const fs = require('fs');

const env = {
  SUPABASE_URL: process.env.SUPABASE_URL,
  SUPABASEKEY: process.env.SUPABASEKEY
};

let html = fs.readFileSync('index.html', 'utf8');
html = html.replace("'{{SUPABASE_URL}}'", `'${env.SUPABASE_URL}'`);
html = html.replace("'{{SUPABASEKEY}}'", `'${env.SUPABASEKEY}'`);

fs.writeFileSync('index.html', html);
console.log('Build done');