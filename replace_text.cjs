const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.css')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Replace text-white/XX with text-white
      content = content.replace(/\btext-white\/(?:\[[\d\.]+\]|\d+)\b/g, 'text-white');
      
      // Replace text-aura-gold/XX with text-white
      content = content.replace(/\btext-aura-gold\/(?:\[[\d\.]+\]|\d+)\b/g, 'text-white');
      
      // Replace text-aura-gold with text-white
      content = content.replace(/\btext-aura-gold\b/g, 'text-white');
      
      // Replace bg-clip-text text-transparent with just text-white
      content = content.replace(/bg-gradient-to-r\s+from-[^\s]+\s+to-[^\s]+\s+bg-clip-text\s+text-transparent/g, 'text-white');
      
      fs.writeFileSync(fullPath, content, 'utf8');
    }
  }
}

processDir(path.join(__dirname, 'src'));
console.log('Done replacing text opacity');
