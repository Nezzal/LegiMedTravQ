#!/bin/bash
set -euo pipefail

FRONTEND_URL="https://nezzal.github.io/LegiMedTravQ/"
PROXY_URL="https://legimedtravq-proxy-clean.vercel.app/api/route"
TEST_QUESTION="Quel est le cadre légal du secret professionnel ?"

GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo "🔍 [TEST FULL-STACK] — $(date)"
echo "   Frontend : $FRONTEND_URL"
echo "   Proxy    : $PROXY_URL"
echo

# 1. Frontend
echo -n "1. Frontend accessible ? "
if curl -sf --head "$FRONTEND_URL" >/dev/null 2>&1; then
  echo -e "${GREEN}✅${NC}"
else
  echo -e "${RED}❌${NC}"
  exit 1
fi

# 2. Proxy health
echo -n "2. Proxy (GET) ? "
health=$(curl -sf "$PROXY_URL" 2>/dev/null || echo "{}")
if echo "$health" | grep -q '"hasKey":true'; then
  echo -e "${GREEN}✅ Clé OK${NC}"
elif echo "$health" | grep -q '"hasKey":false'; then
  echo -e "${YELLOW}⚠️  Clé manquante${NC}"
else
  echo -e "${RED}❌ Proxy inactif${NC}"
  exit 1
fi

# 3. POST via proxy
echo -n "3. Appel IA ? "
payload="{\"messages\":[{\"role\":\"user\",\"content\":\"$TEST_QUESTION\"}]}"
response=$(curl -sf -X POST "$PROXY_URL" \
  -H "Origin: https://nezzal.github.io" \
  -H "Content-Type: application/json" \
  -d "$payload" 2>/dev/null)

if [ -z "$response" ]; then
  echo -e "${RED}❌ Réponse vide${NC}"
  exit 1
fi

# Extraction robuste sans jq
success=$(echo "$response" | grep -o '"success":[^,}]' | cut -d: -f2 | tr -d ' "')
if [ "$success" = "true" ]; then
  # Extrait le contenu (max 120 caractères)
  content_line=$(echo "$response" | grep -o '"content":"[^"]*"')
  if [ -n "$content_line" ]; then
    content=$(echo "$content_line" | cut -d'"' -f4 | cut -c1-120)
    echo -e "${GREEN}✅ Réponse : ${content}…${NC}"
  else
    echo -e "${YELLOW}⚠️  Réponse vide (mais succès=OK)${NC}"
  fi
elif echo "$response" | grep -q '"error"'; then
  err_line=$(echo "$response" | grep -o '"error":"[^"]*"')
  if [ -n "$err_line" ]; then
    err=$(echo "$err_line" | cut -d'"' -f4)
    echo -e "${RED}❌ Erreur : ${err}${NC}"
  else
    echo -e "${RED}❌ Erreur inconnue${NC}"
  fi
  exit 1
else
  echo -e "${YELLOW}⚠️  Format inattendu${NC}"
  echo "$response" | head -c 200
fi

# 4. CORS
echo -n "4. CORS OK ? "
cors=$(curl -sI -X OPTIONS "$PROXY_URL" \
  -H "Origin: https://nezzal.github.io" \
  -H "Access-Control-Request-Method: POST" 2>/dev/null | grep -i "access-control-allow-origin" || echo "")

if echo "$cors" | grep -qi "nezzal.github.io"; then
  echo -e "${GREEN}✅${NC}"
else
  echo -e "${RED}❌${NC}"
  exit 1
fi

echo
echo -e "${GREEN}🎉 TOUT FONCTIONNE${NC}"
