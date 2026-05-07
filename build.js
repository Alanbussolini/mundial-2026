const fs = require('fs');

const env = {
  SUPABASE_URL: process.env.SUPABASE_URL,
  SUPABASE_KEY: process.env.SUPABASE_KEY
};

let html = fs.readFileSync('index.html', 'utf8');
html = html.replace("'https://dxvvusrhmaiysuooxijm.supabase.co'", `'${env.SUPABASE_URL}'`);
html = html.replace("'sb_secret_oQEaPBHZh0uja_tq0R4ZcA_6PjqUJOo'", `'${env.SUPABASE_KEY}'`);

fs.writeFileSync('index.html', html);
console.log('Build done');