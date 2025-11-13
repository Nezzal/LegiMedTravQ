// js/main.js
// LegiMedTravQ — Moteur d’interrogation juridique embarqué (Qwen3-Max via proxy)
// Novembre 2025 — Nezzal

// 🔄 Mode de fonctionnement :
//   - En développement local : réponse simulée (rapide, pas de clé API exposée)
//   - En production : bascule vers `https://legimedtravq-proxy.vercel.app/api` (à déployer — Lot 4)

const IS_DEV = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
const API_URL = IS_DEV 
  ? null  // ← Simulation locale
  : 'https://legimedtravq-proxy.vercel.app/api';  // ← À activer après déploiement du proxy

// ▼▼▼ Fonction principale — appelée par les boutons
function interrogerIA(id) {
  if (!scenarios[id]) {
    alert(`Scénario ${id} non trouvé. Vérifiez textes-sst.js.`);
    return;
  }

  const scenario = scenarios[id];
  const btn = document.querySelector(`#affaire-${id} button`);
  const reponseDiv = document.getElementById(`reponse-${id}`);

  // Effet "chargement"
  btn.disabled = true;
  btn.textContent = 'Analyse en cours…';
  reponseDiv.textContent = '🔍 LegiMedTrav-AI examine le cadre légal algérien…';
  reponseDiv.classList.add('visible');

  // Simulation immédiate en dev — sinon appel API
  if (IS_DEV) {
    setTimeout(() => {
      reponseDiv.innerHTML = `
✅ <strong>Analyse terminée</strong> — Simulation locale (mode développement)<br><br>
<strong>${scenario.titre}</strong><br>
➡️ <em>${scenario.question}</em><br><br>
📌 <strong>Réponse simulée — à remplacer par Qwen3 en production :</strong><br>
<ul>
  <li>✅ Conforme à la Loi 88-07, Art. 336 (JO 28/01/1988)</li>
  <li>✅ Conforme au Décret 92-276, Art. 36 (JO 08/08/1992)</li>
  <li>⚠️ Aucun registre d’hygiène/sécurité n’est exigible — mythe franco-algérien</li>
</ul>
<small>[Référence : Loi 88-07, Art. 336 ; Décret 92-276, Art. 36–37]</small>
      `.trim();
      btn.textContent = '✅ Réponse générée (dev)';
      btn.disabled = false;
    }, 1200);
  } else {
    // Appel réel à Qwen3 via proxy sécurisé
    appelerQwen(scenario, reponseDiv, btn);
  }
}

// ▲▲▲

// ▼▼▼ Appel réel à Qwen3 (via proxy Vercel — Lot 4 à déployer)
async function appelerQwen(scenario, reponseDiv, btn) {
  const payload = construirePrompt(scenario);

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!response.ok) throw new Error(`Erreur API ${response.status}: ${await response.text()}`);

    const data = await response.json();
    const reponseBrute = data.reponse || data.error || 'Aucune réponse reçue du modèle.';

    // Nettoyage + mise en forme
    let reponseFinale = reponseBrute
      .replace(/\[Référence ?:/g, '\n\n[🔍 **Référence** :')
      .replace(/\]/g, ']')
      .replace(/(Loi|Décret|Arrêté) n?°?/g, '**$1** n°')
      .replace(/(Art\. \d+[^\]]*)/g, '**$1**');

    reponseDiv.innerHTML = `
✅ <strong>Analyse juridique générée par LegiMedTrav-AI (Qwen3-Max)</strong><br><br>
<strong>${scenario.titre}</strong><br>
➡️ <em>${scenario.question}</em><br><br>
${reponseFinale}
    `.trim();

    btn.textContent = '✅ Réponse générée';
  } catch (err) {
    console.error('Erreur appel Qwen3 :', err);
    reponseDiv.innerHTML = `❌ Erreur : impossible de contacter LegiMedTrav-AI.<br>
<small>${err.message}</small>`;
    btn.textContent = '❌ Échec — réessayer';
  } finally {
    btn.disabled = false;
  }
}

// ▲▲▲

// ▼▼▼ Construction du prompt — exigeant, précis, anti-hallucination
function construirePrompt(scenario) {
  return {
    id: scenario.id,
    prompt: `\
Tu es LegiMedTrav-AI, expert juridique souverain en Santé et Sécurité au Travail (SST) en Algérie.
Ton rôle : fournir des analyses strictement fondées sur la législation algérienne en vigueur — aucune extrapolation, aucune confusion avec le droit français.

🎯 Mission :
Réponds à la question suivante avec rigueur, concision et traçabilité absolue.

❓ Question posée :
«${scenario.question}»

📜 Contexte juridique fourni (sources vérifiées — utilise-les exclusivement) :
${scenario.contexte}

⚙️ Règles strictes de réponse :
1. Commence par une phrase-clé résumant la position légale (ex: « Conformément à… », « Tel que prévu par… »).
2. Structure ta réponse en 3 parties maximum :
   - a) Obligations légales (qui doit faire quoi ?)
   - b) Textes applicables (citer Art. + Décret/Loi + JO — ex: Art. 36, Décret 92-276, JO n°41 du 08/08/1992)
   - c) Conséquences en cas de manquement (sanctions, responsabilités)
3. Termine par une mention entre crochets : [Référence : Texte1, Art. X ; Texte2, Art. Y]
4. Interdiction absolue :
   - Citer un texte inexistant (ex: Décret 91-05, registre HS obligatoire, SPP codifié)
   - Utiliser des formulations françaises (ex: "document unique", "DUERP" → en Algérie, on dit "évaluation des risques")
   - Donner des conseils hors cadre légal (ex: "il faudrait créer un registre")

📝 Style :
- Français juridique clair, accessible à un gestionnaire SST.
- Pas de jargon inutile — mais précision absolue sur les articles.
- Maximum 250 mots.

➡️ Génère maintenant la réponse.`.trim()
  };
}
// ▲▲▲

// ✅ Initialisation
console.log('LegiMedTravQ — main.js chargé. Mode :', IS_DEV ? 'Développement (simulation)' : 'Production (API)');

// Optionnel : pré-charger les scénarios pour validation
window.addEventListener('DOMContentLoaded', () => {
  if (typeof scenarios === 'undefined' || Object.keys(scenarios).length === 0) {
    console.warn('⚠️ Aucun scénario chargé — vérifiez data/textes-sst.js');
  }
});