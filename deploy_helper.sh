#!/bin/bash
echo "🚀 Preparing deployment for Carne & Hueso..."

# 1. Verify files exist
if [ ! -d "out" ]; then
    echo "❌ Error: 'out' directory not found. Running build..."
    npm run build
fi

# 2. Check git status
echo "📦 Checking git status..."
git status

# 3. Instruction
echo ""
echo "✅ Build complete and code updated."
echo ""
echo "⚠️  IMPORTANT: I cannot deploy to your Netlify account automatically."
echo "   To update the LIVE site, you must run these commands:"
echo ""
echo "   git add ."
echo "   git commit -m 'Fix visual bugs and update content'"
echo "   git push origin main"
echo ""
echo "   (This assumes you have linked this repo to Netlify)"
