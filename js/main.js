// js/main.js

// === Navigation onglets ===
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    // Désactiver tous
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    // Activer celui cliqué
    tab.classList.add('active');
    const target = tab.dataset.target;
    document.getElementById(target).classList.add('active');
  });
});

// === Interrogation IA ===
function interrogerIA(affaireId) {
  const affaire = textesSST.affaires[affaireId];
  if (!affaire) return;

  // Construit un prompt simple (à enrichir avec questions complètes)
  const prompt = `
Contexte : ${affaire.contexte}
Textes disponibles :
- ${affaire.textes.secretProfessionnel?.cadreLegal?.reference || ''}
- ${affaire.textes.alerteEcrit?.base || ''}
- ${affaire.textes.proportionTemps || ''}

Question : Répondez en citant les textes algériens avec [Référence : Texte, Article].
  `.trim();

  const reponseDiv = document.getElementById(`reponse-ia-${affaireId}`);
  reponseDiv.textContent = "🔍 LegiMedTrav-AI réfléchit...";
  reponseDiv.classList.add('active');

  // Appel à Qwen3
  callQwen3(prompt)
    .then(reponse => {
      reponseDiv.textContent = `✅ ${reponse}`;
    })
    .catch(err => {
      reponseDiv.textContent = `❌ Erreur : ${err.message || 'Impossible de contacter l’IA.'}`;
    });
}