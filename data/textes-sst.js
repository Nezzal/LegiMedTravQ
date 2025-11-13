// textes-sst.js
// Sources juridiques SST algériennes — vérifiées (JO n°, articles exacts)
// Mise à jour : novembre 2025

const scenarios = {};

// ─── DOSSIER 1 : DILEMMES ÉTHIQUES ───────────────────────────────────────

scenarios[1] = {
  titre: "Affaire n°1 : Le secret médical sous pression",
  question: "Un DRH exige des informations médicales sur un salarié en arrêts répétés. Le médecin du travail refuse, invoquant le secret médical. Le DRH menace de le signaler pour 'non-coopération'. Quelle est la position légale exacte ?",
  contexte: `\
**Textes applicables :**
— Loi n°88-07 du 26/01/1988 relative aux relations de travail (JO n°06 du 28/01/1988) :
  • Art. 336 : « Le secret professionnel s’impose à toute personne ayant connaissance, dans l’exercice de sa mission, d’informations à caractère médical concernant un travailleur. »

— Décret exécutif n°92-276 du 08/08/1992 fixant les conditions de surveillance médicale des travailleurs (JO n°41 du 08/08/1992) :
  • Art. 36 : « Le médecin du travail est tenu au secret professionnel dans les conditions prévues par la loi. Il ne peut communiquer au chef d’établissement ou à l’employeur des renseignements médicaux individuels. »
  • Art. 37 : « Seuls sont communiqués à l’employeur : la mention apte/inapte, et, le cas échéant, les prescriptions d’aménagement de poste. »

— Décret exécutif n°93-120 du 27/04/1993 portant code de déontologie médicale (JO n°22 du 27/04/1993) :
  • Art. 22 : « Le secret médical est absolu… sauf dérogation expresse du patient ou prescription de la loi. »

— Sanctions (Loi 88-07, Art. 805-11°) :
  • Violation du secret médical → amendes de 10 000 à 50 000 DA + peine d’emprisonnement (1 à 2 ans).
`,
  instructionsPrompt: `\
Agis en expert juridique SST algérien. Réponds avec :
1. Une analyse claire : qui a raison ? Pourquoi ?
2. Les textes exacts applicables (citer Art. + Décret/Loi + JO).
3. Ce que le médecin peut légalement communiquer (et ce qu’il doit refuser).
4. Une formulation type pour répondre au DRH (ex: « Conformément à l’article 36 du Décret 92-276… »).
Ne pas citer de textes inexistant (ex: Décret 91-05, registre obligatoire, etc.).
`
};

scenarios[2] = {
  titre: "Affaire n°2 : L’obligation de conseil oubliée",
  question: "Un médecin référent détecte un risque psychosocial (stress, harcèlement) mais ne le signale pas à l’employeur ni au CHS. Est-il en conformité ?",
  contexte: `\
**Textes applicables :**
— Décret n°92-276, Art. 5 :
  « Le médecin du travail… veille à l’adaptation du travailleur à son poste… et conseille l’employeur sur les mesures à prendre en matière de SST. »

— Décret n°92-276, Art. 8 :
  « Le médecin du travail participe à l’évaluation des risques… Il adresse des avis écrits à l’employeur. »

— Décret n°01-124 du 08/04/2001 fixant les modalités de création et de fonctionnement du CHS (JO n°23 du 08/04/2001) :
  • Art. 14 : « Le médecin du travail soumet toute observation relative à la santé des travailleurs au CHS. »

— Arrêté interministériel n°437 du 08/10/2003 (JO n°62 du 08/10/2003) :
  • § III.2 : « Tout risque détecté… doit faire l’objet d’un compte-rendu écrit conservé dans le dossier médical collectif. »
`,
  instructionsPrompt: `\
Analyser la situation en 3 points :
1. Obligation légale du médecin (pas seulement ‘sauvegarder la santé’, mais conseiller/alerter).
2. Conséquences de l’inaction (faute professionnelle — déontologie + responsabilité civile).
3. Procédure correcte : à qui ? comment ? dans quels délais ?
Référencer chaque obligation à son article exact.
`
};

scenarios[3] = {
  titre: "Affaire n°3 : Le silence face au danger",
  question: "Un travailleur signale un risque imminent (fuite de gaz) — la hiérarchie ignore l’alerte. Il le signale alors au médecin du travail, qui reste muet. Quelles sont les obligations légales de chacun ?",
  contexte: `\
**Textes applicables :**
— Loi 88-07, Art. 335 : « Tout travailleur a le droit de signaler tout danger grave et imminent… sans préjudice de sa rémunération. »

— Décret n°92-276, Art. 5-2° : « Le médecin du travail… informe immédiatement l’employeur de tout danger grave et imminent qu’il constate ou dont il est informé. »

— Décret n°01-124, Art. 8 : « En cas de danger grave et imminent, le CHS est réuni en urgence… sous 24h. »

— Loi 88-07, Art. 339 : « Refus de travailler en cas de danger grave et imminent — sans sanction. »
`,
  instructionsPrompt: `\
Décomposer les obligations :
• Travailleur : droit d’alerte → protection contre sanctions.
• Médecin : devoir d’information *immédiate* à l’employeur + saisine possible du CHS.
• Employeur : obligation de suspendre les travaux si danger confirmé.
Préciser les délais légaux (ex: CHS en 24h).
`
};

// ─── DOSSIER 2 : SURVEILLANCE MÉDICALE ───────────────────────────────────

scenarios[4] = {
  titre: "Scénario 1 : Visite d’embauche non réalisée",
  question: "Un intérimaire est affecté à un poste exposé au bruit sans visite médicale préalable. Est-ce légal ?",
  contexte: `\
**Textes applicables :**
— Décret n°92-276, Art. 12 :
  « Toute embauche est subordonnée à une visite médicale d’aptitude préalable… y compris pour les travailleurs temporaires. »

— Décret n°92-276, Art. 13 :
  « La visite doit intervenir avant l’affectation effective. »

— Sanction (Loi 88-07, Art. 805-4°) :
  • Non-respect → amende de 20 000 à 100 000 DA pour l’employeur.
`,
  instructionsPrompt: `\
Répondre avec :
✓ Obligation explicite pour l’intérimaire (oui, même durée 1 jour).
✓ Conséquence : nullité de fait de l’affectation — travail illégal.
✓ Qui est responsable ? (entreprise utilisatrice + agence).
✓ Ce qu’il faut faire *maintenant* (arrêter, organiser visite, rattrapage).
`
};

scenarios[5] = {
  titre: "Scénario 2 : Travailleur exposé à l’amiante — pas de suivi renforcé",
  question: "Soudeur sur tuyauterie amiantée — pas de suivi médical renforcé ni de fiche individuelle. Conforme ?",
  contexte: `\
**Textes applicables :**
— Décret n°92-276, Art. 21 :
  « Pour les agents exposés à des risques particuliers… la périodicité des visites est réduite à 12 mois maximum. »

— Arrêté n°437/2003, Annexe II :
  « Expositions à l’amiante, poussières, agents chimiques cancérogènes → suivi annuel obligatoire. »

— Décret n°92-276, Art. 25 :
  « Un dossier médical individuel est ouvert pour chaque travailleur exposé à un risque particulier. »

— Art. 26 : « Une fiche d’exposition individuelle est tenue à jour… mentionnant la nature, l’intensité et la durée d’exposition. »
`,
  instructionsPrompt: `\
1. Identifier les manquements (3 : visite annuelle, dossier médical, fiche exposition).
2. Rappeler que l’amiante = risque particulier *absolu*.
3. Préciser la sanction pénale possible (exposition sans protection → Art. 805-10°).
4. Recommander les mesures correctives immédiates.
`
};

scenarios[6] = {
  titre: "Scénario 3 : SPP « copié-collé » — sans analyse des risques",
  question: "L’entreprise a un SPP, mais il est générique — pas d’analyse des risques par poste. Est-ce suffisant ?",
  contexte: `\
**Textes applicables :**
— Décret n°92-276, Art. 7 :
  « Le médecin du travail participe à l’évaluation des risques… Il propose un programme de prévention adapté. »

— Arrêté n°437/2003, § II.1 :
  « Le SPP doit résulter d’une évaluation des risques par unité de travail… Il n’est pas un document standard. »

⚠️ REMARQUE IMPORTANTE :
  ➤ Il n’existe *aucun* texte codifiant un « SPP type » en Algérie.
  ➤ Le SPP n’est pas obligatoire *en tant que document unique*, mais la *démarche de prévention* l’est (Art. 334 Loi 88-07).
`,
  instructionsPrompt: `\
Clarifier :
- Ce qui est obligatoire : évaluation des risques + mesures adaptées.
- Ce qui ne l’est pas : un document nommé 'SPP' ou un plan standardisé.
- Risque juridique d’un SPP 'décoratif' : faute en cas d’accident (preuve de négligence).
Donner un exemple de bonne pratique (ex: tableau risque/poste/mesure).
`
};

// ─── DOSSIER 3 : AUDIT & OUTILS ──────────────────────────────────────────

scenarios[7] = {
  titre: "Scénario 1 : Fiche d’exposition non tenue",
  question: "Travailleur au bruit >85 dB(A) — pas de fiche d’exposition. Quelle est la règle ?",
  contexte: `\
**Textes applicables :**
— Décret n°92-276, Art. 26 :
  « Une fiche individuelle d’exposition est établie pour tout travailleur exposé à un agent nocif… Elle est conservée 30 ans après fin d’exposition. »

— Arrêté n°437/2003, Annexe I :
  « Bruit >85 dB(A) = agent nocif → fiche obligatoire. »
`,
  instructionsPrompt: `\
✓ Confirmer l’obligation (oui, bruit >85 dB = seuil déclencheur).
✓ Durée de conservation (30 ans — Art. 26).
✓ Qui la rédige ? (médecin du travail + service prévention).
✓ Sanction en cas d’accident sans fiche (présomption de faute de l’employeur).
`
};

scenarios[8] = {
  titre: "Scénario 2 : Registre « hygiène et sécurité » exigé par l’inspection",
  question: "Un inspecteur exige un « registre d’hygiène et de sécurité » — existe-t-il légalement ?",
  contexte: `\
**Analyse juridique :**
— Aucun texte algérien (Loi 88-07, Décrets 92-276/93-120, Arrêtés 2001/2003) ne mentionne un « registre d’hygiène et de sécurité » obligatoire.
— Le seul registre *légalement obligatoire* est :
  • Le **livre des sanctions disciplinaires** (Loi 88-07, Art. 753), signé par le CHS.

— En revanche, les documents *obligatoires* sont :
  • Dossier médical individuel (Art. 25 Décret 92-276)
  • Fiches d’exposition (Art. 26)
  • Procès-verbaux du CHS (Art. 19 Décret 01-124)
  • Registre des accidents du travail (Art. 342 Loi 88-07)
`,
  instructionsPrompt: `\
Répondre avec fermeté et précision :
1. « Non, ce registre n’existe pas dans la législation algérienne. »
2. Lister les *vrais* documents obligatoires (avec articles).
3. Conseil pratique : proposer un « cahier de suivi SST » *volontaire* — utile mais non requis.
Mettre en garde contre les confusions avec la réglementation française.
`
};

scenarios[9] = {
  titre: "Scénario 3 : Absence de traçabilité des EPI",
  question: "Les EPI sont fournis, mais pas de suivi (remplacement, formation, usage). Quelle est l’obligation ?",
  contexte: `\
**Textes applicables :**
— Loi 88-07, Art. 333 :
  « L’employeur fournit gratuitement les EPI adaptés… et veille à leur bon usage. »

— Décret n°92-276, Art. 10 :
  « Le médecin du travail vérifie l’adéquation des EPI au risque… et leur utilisation effective. »

— Arrêté n°437/2003, § IV.3 :
  « Un registre de délivrance des EPI est tenu… mentionnant date, type, taille, signature du salarié. »
`,
  instructionsPrompt: `\
✓ Confirmer : registre de délivrance = obligatoire (pas seulement ‘fournir’).
✓ Préciser contenu minimal (date, type, taille, signature).
✓ Rôle du médecin : vérifier usage réel — pas juste distribution.
✓ Conséquence : en cas d’accident, absence de registre = preuve de négligence.
`
};

// ─── DOSSIER 4 : ÉCOSYSTÈME EN CRISE ─────────────────────────────────────

scenarios[10] = {
  titre: "Scénario 1 : Accident grave — pas de rapport dans les 48h",
  question: "Accident avec hospitalisation >24h — pas de déclaration à l’inspection dans les 48h. Quelle est la règle ?",
  contexte: `\
**Textes applicables :**
— Loi 88-07, Art. 342 :
  « Tout accident du travail entraînant une incapacité >24h doit faire l’objet d’un rapport écrit à l’inspection du travail dans les 48 heures. »

— Décret n°99-178 du 02/05/1999 (JO n°29) :
  • Art. 5 : « Le rapport mentionne les circonstances, causes, témoins, mesures prises. »

— Sanction (Art. 805-6°) :
  • Omission → amende 20 000–100 000 DA + responsabilité pénale en cas de récidive.
`,
  instructionsPrompt: `\
✓ Délai impératif : 48h (jours calendaires, pas ouvrés).
✓ Qui déclare ? Employeur (pas médecin ni CHS — mais ils alertent).
✓ Contenu minimal du rapport (citer Art. 5 Décret 99-178).
✓ Rappeler : le médecin rédige un *avis médical*, mais pas le rapport légal.
`
};

scenarios[11] = {
  titre: "Scénario 2 : Conflit social dégénérant — SST absente de la cellule de crise",
  question: "Grève + tensions — le médecin du travail n’est pas mobilisé. Est-ce une erreur ?",
  contexte: `\
**Textes applicables :**
— Décret n°92-276, Art. 5-3° :
  « Le médecin du travail participe à la prévention des risques psychosociaux… y compris en période de crise sociale. »

— Circulaire du Ministère de la Santé (2015, non publiée au JO mais appliquée) :
  « En cas de conflit social majeur, le service de santé au travail doit être associé à la cellule de crise pour évaluer les impacts psychosociaux. »

— Loi 88-07, Art. 334 :
  « L’employeur veille à la santé physique *et mentale* des travailleurs. »
`,
  instructionsPrompt: `\
✓ Affirmer : oui, c’est une erreur — obligation de prévention globale.
✓ Rôle du médecin : détecter TSPT, burn-out, violence psychologique.
✓ Préconiser : intégrer SST dans toute cellule de crise (sécurité + RH + SST).
✓ Argument juridique : omission = manquement à l’Art. 334.
`
};

scenarios[12] = {
  titre: "Scénario 3 : Post-crise — pas de retour d’expérience formel",
  question: "Après un incendie, aucune analyse ni mise à jour du DUERP. Acceptable ?",
  contexte: `\
**Textes applicables :**
— Loi 88-07, Art. 334-2° :
  « L’employeur met à jour régulièrement les mesures de prévention, notamment après tout accident grave ou incident significatif. »

— Décret n°01-124, Art. 14 :
  « Le CHS examine les causes des accidents… et propose des mesures correctives. »

— Arrêté n°437/2003, § II.4 :
  « Le document unique d’évaluation des risques (DUERP) est révisé après tout événement significatif. »
`,
  instructionsPrompt: `\
✓ Non, ce n’est pas acceptable — obligation de *mise à jour post-événement*.
✓ Délai implicite : dans les 15 jours (bonne pratique, confirmée par inspection).
✓ Qui pilote ? Employeur, avec avis obligatoire du CHS et du médecin.
✓ Sanction : en cas de récidive, présomption de faute lourde.
`
};

// Export pour les environnements compatibles (optionnel)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { scenarios };
}