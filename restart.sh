#!/bin/bash

echo "🔄 Arrêt de tous les processus Node.js..."
pkill -f "next dev"

echo "🧹 Nettoyage du cache..."
rm -rf .next node_modules/.cache

echo "🚀 Redémarrage du serveur..."
npm run dev
