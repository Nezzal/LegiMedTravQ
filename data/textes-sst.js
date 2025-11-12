// data/textes-sst.js
// Sources vérifiées via JORADP.dz — Dernière mise à jour : 13/11/2025

const textesSST = {
  affaires: {
    // --- Affaire n°1 : Le secret médical sous pression ---
    1: {
      titre: "Affaire n°1 : Le secret médical sous pression",
      contexte: "Un DRH exerce une pression sur le médecin du travail pour obtenir des informations médicales sur un salarié en arrêts maladie répétés.",
      textes: {
        secretProfessionnel: {
          cadreLegal: {
            reference: "Décret exécutif n° 92-276 du 06 juillet 1992",
            jo: "JO n°52 du 08 juillet 1992, p. 1160",
            articles: {
              "36": "Le secret professionnel est général, absolu, illimité dans le temps. Il couvre tout ce qui est venu à la connaissance du médecin dans l’exercice de sa profession, c’est-à-dire non seulement ce qui lui a été confié, mais aussi ce qu’il a vu, entendu ou compris.",
              "37": "Le secret professionnel s’impose à tout médecin dans l’exercice de sa profession, quels que soient le lieu, le moment et les circonstances. Il est de droit, absolu et illimité dans le temps. Il s’applique à tous les renseignements, qu’ils concernent l’état physique, psychique ou moral du patient, son mode de vie ou toute autre information à caractère personnel.",
              "38": "Le secret professionnel ne connaît d’exception que celles prévues par la loi. Le médecin ne peut être dispensé du secret que par une disposition expresse de la loi ou par l’autorisation expresse du patient ou de son représentant légal."
            }
          }
        },
        communicationAutorisee: {
          avisAptitude: {
            reference: "Décret exécutif n° 93-120 du 15 mai 1993",
            jo: "JO n°21 du 27 mai 1993, p. 908",
            article22: "À l’issue de chaque visite médicale, le médecin du travail délivre un avis d’aptitude à l’employeur. Cet avis précise l’aptitude, l’aptitude avec réserves ou l’inaptitude. Il ne comporte aucune donnée à caractère médical."
          }
        },
        consequences: {
          deontologique: {
            reference: "Décret exécutif n° 92-276 du 06 juillet 1992",
            jo: "JO n°52 du 08 juillet 1992, p. 1188",
            base: "Articles 109 à 112"
          },
          penale: {
            reference: "Code pénal algérien",
            jo: "JO n°26 du 30 juin 1966, p. 1185",
            base: "Article 307",
            verbatim: "La violation du secret professionnel dans les cas prévus par la loi est punie d’un emprisonnement de deux mois à un an et d’une amende de 5 000 à 100 000 DA, ou de l’une de ces deux peines seulement."
          }
        }
      }
    },

    // --- Affaire n°2 : L'obligation de conseil oubliée ---
    2: {
      titre: "Affaire n°2 : L'obligation de conseil oubliée",
      contexte: "Lors d’une visite, vous détectez un risque psychosocial majeur, mais le médecin référent ne signale rien à l’employeur.",
      textes: {
        missionFondamentale: {
          loi8807: {
            reference: "Loi n° 88-07 du 26 janvier 1988",
            jo: "JO n°5 du 03 février 1988, p. 154",
            article5: "À cette fin, le médecin du travail participe à l’analyse des risques professionnels, à l’élaboration des mesures de prévention et à la surveillance de leur mise en œuvre. Il conseille l’employeur, les travailleurs et leurs représentants sur les questions d’hygiène et de sécurité du travail ainsi que sur l’aménagement des postes de travail."
          }
        },
        proportionTemps: "Il n’existe aucune proportion temporelle fixée par la loi algérienne pour l’action sur le milieu de travail.",
        obligationConseil: {
          decret93120: {
            article15: {
              "3": "De conseiller l’employeur sur l’adaptation des postes de travail",
              "4": "De proposer des mesures d’amélioration des conditions de travail"
            }
          }
        }
      }
    },

    // --- Affaire n°3 : Le silence face au danger ---
    3: {
      titre: "Affaire n°3 : Le silence face au danger",
      contexte: "Un travailleur vous confie un risque imminent ignoré par la hiérarchie.",
      textes: {
        alerteEcrit: {
          base: "Décret exécutif n° 92-276 du 06 juillet 1992",
          jo: "JO n°52 du 08 juillet 1992, p. 1164",
          article41: "Le médecin du travail doit alerter par écrit l’employeur et, le cas échéant, les autorités compétentes, lorsqu’il constate un danger grave pour la santé des travailleurs."
        },
        registreHygiene: "Il n’existe aucun registre d’hygiène et de sécurité obligatoire tenu par le médecin du travail dans la législation algérienne.",
        pouvoirArret: "Le médecin du travail n’a pas le pouvoir réglementaire d’arrêter une activité dangereuse en Algérie."
      }
    }
  }
};

// Exposition globale
if (typeof window !== 'undefined') {
  window.textesSST = textesSST;
}