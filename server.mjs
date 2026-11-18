import { createServer } from 'node:http';

// The counter advances by one per click.
const increment = 1;
const html = `<!doctype html><html><head><title>Counter reproduction</title></head><body style="font:24px system-ui;max-width:700px;margin:100px auto"><h1>One click should add one</h1><p>Count <output aria-label="Count">0</output></p><button style="font:inherit;padding:12px" onclick="const o=document.querySelector('output');o.textContent=Number(o.textContent)+${increment}">Add one</button></body></html>`;
createServer((request, response) => { response.writeHead(200, { 'content-type': 'text/html' }); response.end(html); }).listen(Number(process.env.PORT ?? 3000), '127.0.0.1');
