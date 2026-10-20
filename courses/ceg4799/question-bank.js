/*
 * CEG 4799 / CSI 4539 — questions extraites des corrigés Quiz1-Sol à Quiz6-Sol et de Quiz4 (PDF),
 * du tutorat 1 (TUT01, exercices 1 et 3) et de l'examen de préparation (partie I).
 * Français seulement pour l'instant. Chaque question : énoncé, extrait de code facultatif,
 * quatre choix (texte et explication facultative), index de la bonne réponse, explication,
 * concept et source.
 */
window.COURSES = window.COURSES || {};
window.COURSES.ceg4799 = {
  "code": "CEG 4799 / CSI 4539",
  "title": {
    "fr": "Conception de systèmes informatiques sécuritaires"
  },
  "term": {
    "fr": "Corrigés des quiz · Automne 2026"
  },
  "unit": {
    "fr": [
      "quiz",
      "quiz"
    ],
    "en": [
      "quiz",
      "quizzes"
    ]
  },
  "intro": {
    "fr": "Quiz à choix multiples tirés des corrigés du cours, du tutorat 1 et de l'examen de préparation : politiques et posture de sécurité, authentification et contrôle d'accès, programmes privilégiés, débordement de tampon, retour à la libc, chaînes de format, conditions de course et Dirty COW."
  },
  "timerNote": {
    "fr": "Simulation chronométrée : 60 minutes.",
    "en": "Timed practice: 60 minutes."
  },
  "session": {
    "tf": 0,
    "mc": null,
    "minutes": 60
  },
  "chapters": {
    "quiz1": {
      "title": "Politiques, mécanismes et posture de sécurité",
      "label": "Quiz 1 · Cours 1",
      "questions": [
        {
          "id": "ceg4799_quiz1_q01",
          "question": "Selon le cours, qu'est-ce qu'une vulnérabilité sans menace ni actif ?",
          "options": [
            {
              "text": "Un risque accepté"
            },
            {
              "text": "Un défaut"
            },
            {
              "text": "Une surface d'attaque"
            },
            {
              "text": "Une menace interne"
            }
          ],
          "answer": 1,
          "explanation": "La diapositive 7 (« Cinq mots, une seule histoire ») conclut : « Une vulnérabilité sans menace ni actif n'est pas un risque. C'est un défaut. » Le risque n'existe que lorsqu'une menace peut exploiter la vulnérabilité pour atteindre un actif qui a de la valeur. « Un risque accepté » suppose déjà un risque, donc un actif et une menace. « Une surface d'attaque » désigne l'ensemble des endroits par où une menace peut tenter d'entrer, pas une faille isolée. « Une menace interne » est un acteur, pas une faille.",
          "concept": "Politiques, mécanismes et posture",
          "source": "Quiz 1, diapositive 7"
        },
        {
          "id": "ceg4799_quiz1_q02",
          "question": "Par quels trois éléments une menace se décrit-elle ?",
          "options": [
            {
              "text": "Un actif, une probabilité et un coût"
            },
            {
              "text": "Un canal, un outil et une cible"
            },
            {
              "text": "Un acteur, une vulnérabilité et un impact"
            },
            {
              "text": "Un acteur, une capacité et une motivation"
            }
          ],
          "answer": 3,
          "explanation": "La diapositive 9 (« Menace : qui, et pourquoi ») précise : « Une menace se décrit par un acteur, une capacité et une motivation. » Elle ajoute que « un pirate » n'est pas une description utile, car un adversaire opportuniste et un adversaire ciblé n'appellent ni les mêmes défenses ni le même budget. Les autres triplets mélangent des notions d'autres diapositives : la probabilité et l'impact relèvent du risque (diapositive 11), la vulnérabilité et l'actif sont des termes distincts de la menace (diapositive 7).",
          "concept": "Politiques, mécanismes et posture",
          "source": "Quiz 1, diapositive 9"
        },
        {
          "id": "ceg4799_quiz1_q03",
          "question": "Quel type de menace « ne vous vise pas — vous répondez, c'est tout » ?",
          "options": [
            {
              "text": "Opportuniste"
            },
            {
              "text": "Ciblée"
            },
            {
              "text": "Interne"
            },
            {
              "text": "Accidentelle"
            }
          ],
          "answer": 0,
          "explanation": "La diapositive 9 décrit la menace opportuniste ainsi : « Balaie Internet au hasard. Ne vous vise pas — vous répondez, c'est tout. » L'attaquant n'a pas choisi sa cible ; il exploite ce qui répond. La menace ciblée « vous a choisi » et changera de méthode ; la menace interne « possède déjà un accès légitime » ; la menace accidentelle est une panne, une mauvaise manœuvre ou un sinistre, sans intention.",
          "concept": "Politiques, mécanismes et posture",
          "source": "Quiz 1, diapositive 9"
        },
        {
          "id": "ceg4799_quiz1_q04",
          "question": "À quelle condition « accepter » un risque est-il une décision d'ingénierie légitime ?",
          "options": [
            {
              "text": "Si le risque est d'abord transféré à un assureur ou à un sous-traitant"
            },
            {
              "text": "Si la fonction ou l'actif concerné est retiré du système"
            },
            {
              "text": "Si aucune vulnérabilité n'a été détectée lors de la dernière revue"
            },
            {
              "text": "Si la décision est écrite, datée et signée par qui en a l'autorité"
            }
          ],
          "answer": 3,
          "explanation": "La diapositive 11 (« Risque : la seule grandeur qui se compare ») indique : « “Accepter” est une décision d'ingénierie légitime — à condition d'être écrite, datée et signée par qui en a l'autorité. » Le tableau des traitements précise pour « Accepter » : « décision documentée et datée ». Transférer (assurance, sous-traitance) et éviter (retirer la fonction ou l'actif) sont d'autres traitements du risque, pas des conditions de l'acceptation. L'absence de vulnérabilité détectée ne rend pas une acceptation légitime ; c'est la décision formelle et autorisée qui le fait.",
          "concept": "Politiques, mécanismes et posture",
          "source": "Quiz 1, diapositive 11"
        },
        {
          "id": "ceg4799_quiz1_q05",
          "question": "Comment le risque est-il défini dans le cours ?",
          "options": [
            {
              "text": "Menace × Vulnérabilité"
            },
            {
              "text": "Probabilité × Impact"
            },
            {
              "text": "Actif × Surface d'attaque"
            },
            {
              "text": "Coût × Exposition"
            }
          ],
          "answer": 1,
          "explanation": "La diapositive 11 présente la formule « Probabilité × Impact = RISQUE », en précisant que « la probabilité vient de la menace et de la vulnérabilité ; l'impact, de la valeur de l'actif ». Les autres produits ne figurent pas dans le cours. Menace et vulnérabilité contribuent à la probabilité, l'actif à l'impact ; ils ne se multiplient pas directement entre eux.",
          "concept": "Politiques, mécanismes et posture",
          "source": "Quiz 1, diapositive 11"
        },
        {
          "id": "ceg4799_quiz1_q06",
          "question": "Selon le cours, que signifie réellement « réduire la surface d'attaque » ?",
          "options": [
            {
              "text": "Surveiller davantage chaque chemin d'entrée"
            },
            {
              "text": "Chiffrer l'ensemble des interfaces réseau"
            },
            {
              "text": "Supprimer des chemins par lesquels on peut entrer"
            },
            {
              "text": "Ajouter une couche de détection d'intrusion"
            }
          ],
          "answer": 2,
          "explanation": "La diapositive 12 (« Surface d'attaque : tout ce qui est atteignable ») conclut : « Chaque flèche est un chemin. Réduire la surface, c'est en supprimer — pas seulement en surveiller davantage. » La diapositive 13 l'illustre : services désactivés, base de données retirée d'Internet, comptes de test supprimés. Surveiller davantage est explicitement écarté. Chiffrer ou ajouter de la détection sont des mécanismes de protection ou de détection (diapositive 23) ; ils ne suppriment aucun chemin d'entrée.",
          "concept": "Politiques, mécanismes et posture",
          "source": "Quiz 1, diapositive 12"
        },
        {
          "id": "ceg4799_quiz1_q07",
          "question": "Comment le cours qualifie-t-il une politique sans mécanisme ?",
          "options": [
            {
              "text": "Une norme"
            },
            {
              "text": "Une dépense"
            },
            {
              "text": "Une ligne directrice"
            },
            {
              "text": "Un vœu"
            }
          ],
          "answer": 3,
          "explanation": "La diapositive 18 (« Deux choses différentes ») affirme : « Une politique sans mécanisme est un vœu. Un mécanisme sans politique est une dépense dont personne ne sait dire si elle suffit. » « Une dépense » qualifie le mécanisme sans politique, l'inverse de la situation demandée. « Norme » et « ligne directrice » sont des niveaux de la hiérarchie documentaire de la diapositive 19, pas des jugements sur une politique sans mécanisme.",
          "concept": "Politiques, mécanismes et posture",
          "source": "Quiz 1, diapositive 18"
        },
        {
          "id": "ceg4799_quiz1_q08",
          "question": "Dans la hiérarchie politique, norme, procédure et ligne directrice, quel énoncé décrit la norme ?",
          "options": [
            {
              "text": "Ce qui est obligatoire pour y arriver, technique et mesurable"
            },
            {
              "text": "Ce que l'organisation exige, stable et approuvé par la direction"
            },
            {
              "text": "Comment on s'y prend, pas à pas, qui fait quoi et quand"
            },
            {
              "text": "Ce qui est recommandé sans être imposé à personne"
            }
          ],
          "answer": 0,
          "explanation": "La diapositive 19 (« De l'exigence au réglage ») définit la norme comme « ce qui est obligatoire pour y arriver. Technique, mesurable », avec l'exemple « Deux facteurs sur tout accès distant ». « Ce que l'organisation exige, stable, approuvée par la direction » définit la politique ; « comment on s'y prend, pas à pas » définit la procédure ; « ce qui est recommandé sans être imposé » définit la ligne directrice.",
          "concept": "Politiques, mécanismes et posture",
          "source": "Quiz 1, diapositive 19"
        },
        {
          "id": "ceg4799_quiz1_q09",
          "question": "Selon le cours, qu'est-ce qui révèle une politique mal écrite ?",
          "options": [
            {
              "text": "Elle est approuvée par la direction"
            },
            {
              "text": "Elle change très rarement"
            },
            {
              "text": "Elle cite une marque de produit"
            },
            {
              "text": "Elle limite les accès au strict nécessaire"
            }
          ],
          "answer": 2,
          "explanation": "La diapositive 19 se termine par : « Plus on descend, plus le texte change souvent. Une politique qui cite une marque de produit est mal écrite. » La politique doit rester stable et indépendante des produits, qui relèvent des niveaux inférieurs (norme, procédure, ligne directrice). Être approuvée par la direction, changer rarement et limiter les accès au strict nécessaire sont précisément les caractéristiques d'une politique bien écrite selon la même diapositive.",
          "concept": "Politiques, mécanismes et posture",
          "source": "Quiz 1, diapositive 19"
        },
        {
          "id": "ceg4799_quiz1_q10",
          "question": "Quelle propriété manque le plus souvent, notamment à cause d'un compte partagé « admin » ?",
          "options": [
            {
              "text": "Imputabilité"
            },
            {
              "text": "Authenticité"
            },
            {
              "text": "Non-répudiation"
            },
            {
              "text": "Disponibilité"
            }
          ],
          "answer": 0,
          "explanation": "La diapositive 22 (« Trois propriétés de plus, souvent oubliées ») indique : « L'imputabilité est celle qui manque le plus souvent : un compte partagé “admin” rend toute enquête impossible, quelle que soit la qualité du journal. » L'imputabilité rattache chaque action à une personne identifiée (journal, compte nominatif). L'authenticité concerne l'origine annoncée (certificat, signature) ; la non-répudiation empêche l'auteur de nier après coup ; la disponibilité (diapositive 21) concerne l'accès au service quand on en a besoin.",
          "concept": "Politiques, mécanismes et posture",
          "source": "Quiz 1, diapositive 22"
        },
        {
          "id": "ceg4799_quiz1_q11",
          "question": "Quel principe de Saltzer et Schroeder énonce : « En l'absence de règle explicite, on refuse » ?",
          "options": [
            {
              "text": "Médiation complète"
            },
            {
              "text": "Défauts sûrs"
            },
            {
              "text": "Économie de mécanisme"
            },
            {
              "text": "Conception ouverte"
            }
          ],
          "answer": 1,
          "explanation": "La diapositive 24 (« Six principes de conception, Saltzer et Schroeder, 1975 ») définit les défauts sûrs : « En l'absence de règle explicite, on refuse. Liste blanche. » La médiation complète exige que « chaque accès est vérifié, pas seulement le premier » ; l'économie de mécanisme veut qu'un mécanisme simple se vérifie ; la conception ouverte dit que la sécurité tient à la clé, jamais au secret de l'algorithme.",
          "concept": "Politiques, mécanismes et posture",
          "source": "Quiz 1, diapositive 24"
        },
        {
          "id": "ceg4799_quiz1_q12",
          "question": "Selon le principe de conception ouverte, à quoi tient la sécurité ?",
          "options": [
            {
              "text": "Au secret du code"
            },
            {
              "text": "Au nombre de couches"
            },
            {
              "text": "À la clé"
            },
            {
              "text": "Au journal d'audit"
            }
          ],
          "answer": 2,
          "explanation": "La diapositive 24 énonce, pour la conception ouverte : « La sécurité tient à la clé, jamais au secret de l'algorithme. » Le secret du code est exactement ce que le principe rejette. Le nombre de couches relève de la défense en profondeur (diapositive 26) et le journal d'audit de l'imputabilité (diapositive 22).",
          "concept": "Politiques, mécanismes et posture",
          "source": "Quiz 1, diapositive 24"
        },
        {
          "id": "ceg4799_quiz1_q13",
          "question": "Quel est le corollaire de la défense en profondeur énoncé dans le cours ?",
          "options": [
            {
              "text": "La couche extérieure suffit lorsqu'elle est correctement configurée"
            },
            {
              "text": "Aucune couche n'a le droit de faire confiance à la couche extérieure"
            },
            {
              "text": "Les couches internes deviennent inutiles si le périmètre tient"
            },
            {
              "text": "Une seule couche doit concentrer l'ensemble des contrôles"
            }
          ],
          "answer": 1,
          "explanation": "La diapositive 26 (« Défense en profondeur ») explique que « chaque couche suppose que la précédente a échoué » et énonce le corollaire : « aucune couche n'a le droit de faire confiance à ce qui vient de la couche extérieure. » Les trois autres énoncés décrivent la logique de la forteresse à un seul mur, que la diapositive présente comme l'inverse de la défense en profondeur : « on ne parie pas sur un seul mur ».",
          "concept": "Politiques, mécanismes et posture",
          "source": "Quiz 1, diapositive 26"
        },
        {
          "id": "ceg4799_quiz1_q14",
          "question": "Qu'exigent les quatre actions physiques présentées (démarrer sur un support externe, lire le disque hors du système, modifier le chargeur d'amorçage, installer un enregistreur de frappe) ?",
          "options": [
            {
              "text": "L'exploitation d'une vulnérabilité logicielle"
            },
            {
              "text": "Des privilèges d'administrateur sur le réseau"
            },
            {
              "text": "D'être devant la machine quelques minutes"
            },
            {
              "text": "Une faille dans le micrologiciel de la carte"
            }
          ],
          "answer": 2,
          "explanation": "La diapositive 32 (« Pourquoi le physique passe avant ») précise, au sujet des quatre actions : « Aucune de ces quatre actions n'exige d'exploiter une vulnérabilité logicielle. Elles exigent d'être devant la machine, quelques minutes. » C'est pourquoi la sécurité physique fixe les hypothèses de tous les mécanismes logiciels. L'exploitation d'une vulnérabilité logicielle est explicitement exclue. Les privilèges réseau et une faille du micrologiciel ne sont pas nécessaires : l'accès physique suffit.",
          "concept": "Politiques, mécanismes et posture",
          "source": "Quiz 1, diapositive 32"
        },
        {
          "id": "ceg4799_quiz1_q15",
          "question": "Quel comportement « annule tout le dispositif » des zones concentriques de contrôle d'accès aux locaux ?",
          "options": [
            {
              "text": "L'oubli d'une carte nominative"
            },
            {
              "text": "Le registre signé"
            },
            {
              "text": "L'accompagnement"
            },
            {
              "text": "Le talonnage"
            }
          ],
          "answer": 3,
          "explanation": "La diapositive 33 (« Contrôle d'accès aux locaux : des zones concentriques ») conclut : « Le talonnage — entrer derrière quelqu'un qui a badgé — annule tout le dispositif. C'est un problème humain : voir la section 4. » Le registre signé et l'accompagnement sont des contrôles des zones restreinte et critique, donc des éléments du dispositif et non ce qui l'annule. L'oubli d'une carte bloque l'accès au lieu de le contourner.",
          "concept": "Politiques, mécanismes et posture",
          "source": "Quiz 1, diapositive 33"
        },
        {
          "id": "ceg4799_quiz1_q16",
          "question": "Dans une attaque de la chaîne d'approvisionnement, comment le code malveillant parvient-il aux clients ?",
          "options": [
            {
              "text": "Signé, par le canal officiel de mise à jour"
            },
            {
              "text": "Par une clé USB laissée dans le stationnement"
            },
            {
              "text": "Par un message d'hameçonnage bien ciblé"
            },
            {
              "text": "Par un port de débogage laissé accessible"
            }
          ],
          "answer": 0,
          "explanation": "La diapositive 36 (« Chaîne d'approvisionnement ») décrit la conséquence d'une seule injection dans la chaîne : « le code malveillant est livré signé, par le canal officiel, à tous les clients en aval. L'utilisateur n'a rien fait de mal : il a mis à jour. » La clé USB abandonnée relève du scénario des supports amovibles (diapositive 35), l'hameçonnage de la conscience de la sécurité (diapositives 43 et 44) et le port de débogage de l'accès aux consoles (diapositive 34).",
          "concept": "Politiques, mécanismes et posture",
          "source": "Quiz 1, diapositive 36"
        },
        {
          "id": "ceg4799_quiz1_q17",
          "question": "Comment le cours propose-t-il de considérer l'humain dans un système ?",
          "options": [
            {
              "text": "Comme le maillon faible du système"
            },
            {
              "text": "Comme un risque à transférer"
            },
            {
              "text": "Comme un composant aux propriétés connues"
            },
            {
              "text": "Comme une menace interne par défaut"
            }
          ],
          "answer": 2,
          "explanation": "La diapositive 41 (« Le facteur humain n'est pas un maillon faible ») oppose le discours courant à la lecture d'ingénieur : « L'humain est un composant aux propriétés connues : il est pressé, il fait confiance, il répète. On conçoit autour de ces propriétés, comme autour d'une latence réseau. » « Maillon faible » est le discours que la diapositive rejette, car il « transforme un défaut d'interface en faute personnelle ». Le transfert de risque et la menace interne ne sont pas la façon dont le cours modélise l'humain.",
          "concept": "Politiques, mécanismes et posture",
          "source": "Quiz 1, diapositive 41"
        },
        {
          "id": "ceg4799_quiz1_q18",
          "question": "Lorsqu'on a cliqué sur un lien douteux, quel est « le vrai danger » selon le cours ?",
          "options": [
            {
              "text": "La perte du mot de passe"
            },
            {
              "text": "L'ouverture de la pièce jointe"
            },
            {
              "text": "L'absence de deuxième facteur"
            },
            {
              "text": "Le délai avant de le déclarer"
            }
          ],
          "answer": 3,
          "explanation": "La diapositive 45 (« Que faire — et dans quel ordre ») indique à l'étape 4, Déclarer : « Si vous avez cliqué : le dire tout de suite. Le délai est le vrai danger. » Elle ajoute qu'une organisation qui sanctionne celui qui signale n'aura plus de signalements, seulement des incidents découverts trop tard. La perte du mot de passe, la pièce jointe et l'absence de deuxième facteur sont des éléments du scénario d'hameçonnage, mais le cours désigne explicitement le délai de déclaration comme le vrai danger.",
          "concept": "Politiques, mécanismes et posture",
          "source": "Quiz 1, diapositive 45"
        },
        {
          "id": "ceg4799_quiz1_q19",
          "question": "Selon le cours, comment se définit la posture de sécurité d'une organisation ?",
          "options": [
            {
              "text": "Ce qu'elle est capable de faire"
            },
            {
              "text": "Ce qu'elle a acheté comme produits"
            },
            {
              "text": "Le nombre de contrôles déployés"
            },
            {
              "text": "Le budget consacré à la sécurité"
            }
          ],
          "answer": 0,
          "explanation": "La diapositive 50 (« Une posture, pas une liste de produits ») définit : « La posture de sécurité, c'est ce que l'organisation est capable de faire — pas ce qu'elle a acheté. » Elle se mesure à quatre questions : sait-elle ce qu'elle possède, qui y a accès, s'apercevrait-elle d'une intrusion, saurait-elle quoi faire ensuite. « Ce qu'elle a acheté » est la définition explicitement rejetée. Le nombre de contrôles et le budget sont des moyens, pas une capacité démontrée.",
          "concept": "Politiques, mécanismes et posture",
          "source": "Quiz 1, diapositive 50"
        },
        {
          "id": "ceg4799_quiz1_q20",
          "question": "Quelle fonction a été ajoutée au NIST Cybersecurity Framework 2.0 en 2024 ?",
          "options": [
            {
              "text": "Identifier"
            },
            {
              "text": "Gouverner"
            },
            {
              "text": "Détecter"
            },
            {
              "text": "Récupérer"
            }
          ],
          "answer": 1,
          "explanation": "La diapositive 51 (« Les six fonctions, NIST CSF 2.0 ») précise : « “Gouverner” a été ajouté en 2024 : sans décision ni budget, les cinq autres fonctions restent des intentions. » Identifier, Détecter et Récupérer font partie des cinq fonctions d'origine (avec Protéger et Répondre).",
          "concept": "Politiques, mécanismes et posture",
          "source": "Quiz 1, diapositive 51"
        }
      ]
    },
    "tutorat1": {
      "title": "Politiques, programmes privilégiés et propriétés",
      "label": "Tutorat 1",
      "questions": [
        {
          "id": "ceg4799_tutorat1_q01",
          "question": "Exercice 1, énoncé a) — classer : politique, mécanisme ou mise en œuvre ?",
          "code": "« Seuls les auxiliaires d'enseignement modifient les notes. »",
          "options": [
            {
              "text": "Politique",
              "explanation": "Politique : ce qui est permis ou interdit (l'intention)."
            },
            {
              "text": "Mécanisme",
              "explanation": "Mécanisme : le moyen technique offert par le système."
            },
            {
              "text": "Mise en œuvre",
              "explanation": "Mise en œuvre : la configuration concrète et vérifiable."
            }
          ],
          "answer": 0,
          "explanation": "Politique : ce qui est permis ou interdit (l'intention). a et e sont des politiques. Une politique est indépendante du mécanisme : la même intention peut s'appliquer par des permissions, des ACL ou des capacités.",
          "concept": "Politique, mécanisme, mise en œuvre",
          "source": "Tutorat 1, diapositives 13 et 14"
        },
        {
          "id": "ceg4799_tutorat1_q02",
          "question": "Exercice 1, énoncé b) — classer : politique, mécanisme ou mise en œuvre ?",
          "code": "chmod 640 notes.csv",
          "options": [
            {
              "text": "Politique",
              "explanation": "Politique : ce qui est permis ou interdit (l'intention)."
            },
            {
              "text": "Mécanisme",
              "explanation": "Mécanisme : le moyen technique offert par le système."
            },
            {
              "text": "Mise en œuvre",
              "explanation": "Mise en œuvre : la configuration concrète et vérifiable."
            }
          ],
          "answer": 2,
          "explanation": "Mise en œuvre : la configuration concrète et vérifiable. b et d sont des mises en œuvre d'un mécanisme (permissions, ACL). Une politique est indépendante du mécanisme : la même intention peut s'appliquer par des permissions, des ACL ou des capacités.",
          "concept": "Politique, mécanisme, mise en œuvre",
          "source": "Tutorat 1, diapositives 13 et 14"
        },
        {
          "id": "ceg4799_tutorat1_q03",
          "question": "Exercice 1, énoncé c) — classer : politique, mécanisme ou mise en œuvre ?",
          "code": "Les listes de contrôle d'accès (ACL)",
          "options": [
            {
              "text": "Politique",
              "explanation": "Politique : ce qui est permis ou interdit (l'intention)."
            },
            {
              "text": "Mécanisme",
              "explanation": "Mécanisme : le moyen technique offert par le système."
            },
            {
              "text": "Mise en œuvre",
              "explanation": "Mise en œuvre : la configuration concrète et vérifiable."
            }
          ],
          "answer": 1,
          "explanation": "Mécanisme : le moyen technique offert par le système. c est un mécanisme. Une politique est indépendante du mécanisme : la même intention peut s'appliquer par des permissions, des ACL ou des capacités.",
          "concept": "Politique, mécanisme, mise en œuvre",
          "source": "Tutorat 1, diapositives 13 et 14"
        },
        {
          "id": "ceg4799_tutorat1_q04",
          "question": "Exercice 1, énoncé d) — classer : politique, mécanisme ou mise en œuvre ?",
          "code": "setfacl -m u:ae:rw notes.csv",
          "options": [
            {
              "text": "Politique",
              "explanation": "Politique : ce qui est permis ou interdit (l'intention)."
            },
            {
              "text": "Mécanisme",
              "explanation": "Mécanisme : le moyen technique offert par le système."
            },
            {
              "text": "Mise en œuvre",
              "explanation": "Mise en œuvre : la configuration concrète et vérifiable."
            }
          ],
          "answer": 2,
          "explanation": "Mise en œuvre : la configuration concrète et vérifiable. b et d sont des mises en œuvre d'un mécanisme (permissions, ACL). Une politique est indépendante du mécanisme : la même intention peut s'appliquer par des permissions, des ACL ou des capacités.",
          "concept": "Politique, mécanisme, mise en œuvre",
          "source": "Tutorat 1, diapositives 13 et 14"
        },
        {
          "id": "ceg4799_tutorat1_q05",
          "question": "Exercice 1, énoncé e) — classer : politique, mécanisme ou mise en œuvre ?",
          "code": "« Un mot de passe compte au moins douze caractères. »",
          "options": [
            {
              "text": "Politique",
              "explanation": "Politique : ce qui est permis ou interdit (l'intention)."
            },
            {
              "text": "Mécanisme",
              "explanation": "Mécanisme : le moyen technique offert par le système."
            },
            {
              "text": "Mise en œuvre",
              "explanation": "Mise en œuvre : la configuration concrète et vérifiable."
            }
          ],
          "answer": 0,
          "explanation": "Politique : ce qui est permis ou interdit (l'intention). a et e sont des politiques. Une politique est indépendante du mécanisme : la même intention peut s'appliquer par des permissions, des ACL ou des capacités.",
          "concept": "Politique, mécanisme, mise en œuvre",
          "source": "Tutorat 1, diapositives 13 et 14"
        },
        {
          "id": "ceg4799_tutorat1_q06",
          "question": "Exercice 3 — Un petit utilitaire réseau doit envoyer un paquet ICMP, ce qui requiert le privilège d'ouvrir un socket brut. Laquelle des deux options respecte le moindre privilège ?",
          "options": [
            {
              "text": "Option A — Set-UID root (chmod u+s outil) : l'outil s'exécute avec tous les droits de root pendant toute son exécution.",
              "explanation": "En cas d'exploitation, l'attaquant obtient root complet : tout le système. Surface d'attaque maximale."
            },
            {
              "text": "Option B — Capacité ciblée (setcap cap_net_raw+ep outil) : l'outil obtient uniquement le droit d'ouvrir un socket brut, rien d'autre.",
              "explanation": "En cas d'exploitation, l'attaquant n'obtient qu'une seule capacité : sockets bruts. Surface d'attaque réduite au strict nécessaire."
            }
          ],
          "answer": 1,
          "explanation": "Option B respecte le moindre privilège. cap_net_raw n'accorde que l'ouverture de sockets bruts; Set-UID root accorde tout (lecture de /etc/shadow, écriture partout, changement d'identité). Vérification : getcap outil affiche « outil = cap_net_raw+ep ».",
          "concept": "Moindre privilège",
          "source": "Tutorat 1, diapositives 17 et 18"
        }
      ]
    },
    "quiz2": {
      "title": "Authentification et contrôle d'accès (diapositives 1 à 29)",
      "label": "Quiz 2 · Chapitre 2",
      "questions": [
        {
          "id": "ceg4799_quiz2_q01",
          "question": "Dans /etc/passwd, la ligne « seed:x:1000:1000:SEED,,,:/home/seed:/bin/bash » porte un « x » au deuxième champ. Que signifie exactement ce caractère ?",
          "options": [
            {
              "text": "Le mot de passe est chiffré par un algorithme dont la clé reste secrète",
              "explanation": "Confusion classique entre hachage et chiffrement. Le chiffrement est réversible et suppose une clé ; le hachage est à sens unique et n'en a aucune. Il n'existe donc pas de « clé secrète » à protéger ici."
            },
            {
              "text": "Le compte est verrouillé et aucune connexion interactive n'est permise",
              "explanation": "Le verrouillage existe bien, mais il se marque dans /etc/shadow par « ! » ou « * » (voir question 8), jamais par un « x » dans /etc/passwd. Le compte seed de l'exemple est parfaitement actif."
            },
            {
              "text": "Le condensé occupe ce champ mais sous une forme volontairement tronquée",
              "explanation": "Le condensé n'est pas raccourci, il est absent. Un condensé tronqué affaiblirait la vérification sans rien apporter ; le champ ne contient qu'une lettre de renvoi."
            },
            {
              "text": "Le condensé est stocké dans /etc/shadow, hors de ce fichier tout public",
              "explanation": "Le « x » est un simple marqueur de renvoi : il indique que le second champ ne contient plus rien d'exploitable et qu'il faut aller chercher le condensé dans /etc/shadow. La raison est donnée explicitement au bas de la diapositive : /etc/passwd est lisible par tous. Historiquement le condensé y figurait, ce qui permettait à n'importe quel utilisateur d'en prendre copie et de mener une attaque hors ligne, à son rythme, sans jamais déclencher de tentative de connexion. Déplacer le condensé vers /etc/shadow, lisible par root seul, est présenté dans le cours comme « le premier mécanisme : réduire qui peut le lire ». Le fichier des comptes reste public parce que de nombreux programmes doivent traduire un UID en nom ; seul le secret en a été retiré."
            }
          ],
          "answer": 3,
          "explanation": "Le « x » est un simple marqueur de renvoi : il indique que le second champ ne contient plus rien d'exploitable et qu'il faut aller chercher le condensé dans /etc/shadow. La raison est donnée explicitement au bas de la diapositive : /etc/passwd est lisible par tous. Historiquement le condensé y figurait, ce qui permettait à n'importe quel utilisateur d'en prendre copie et de mener une attaque hors ligne, à son rythme, sans jamais déclencher de tentative de connexion. Déplacer le condensé vers /etc/shadow, lisible par root seul, est présenté dans le cours comme « le premier mécanisme : réduire qui peut le lire ». Le fichier des comptes reste public parce que de nombreux programmes doivent traduire un UID en nom ; seul le secret en a été retiré.",
          "concept": "Authentification et contrôle d'accès",
          "source": "Quiz 2, diapositives 8 et 9"
        },
        {
          "id": "ceg4799_quiz2_q02",
          "question": "Toujours dans cette même ligne, que représente le septième et dernier champ, et quel est son rôle au moment de la connexion ?",
          "options": [
            {
              "text": "Le répertoire personnel, où l'utilisateur est placé dès l'arrivée",
              "explanation": "C'est le sixième champ (/home/seed). L'utilisateur y est bien placé, mais après que l'interpréteur a été lancé."
            },
            {
              "text": "L'interpréteur de connexion, première chose exécutée à l'ouverture",
              "explanation": "Les sept champs se lisent dans l'ordre : nom de connexion, mot de passe (renvoi), UID, GID, commentaire GECOS, répertoire personnel, interpréteur de connexion. Le dernier, ici /bin/bash, est souligné dans le cours comme « la première chose exécutée après une connexion réussie ». C'est ce qui en fait un champ sensible : il désigne le programme qui reçoit la main, avec l'identité de l'utilisateur, dès que l'authentification a réussi. Conséquence pratique directe : y placer une valeur comme /usr/sbin/nologin empêche toute session interactive tout en laissant le compte exister et posséder ses fichiers. C'est une seconde façon de neutraliser un accès, distincte du verrouillage du mot de passe vu à la question 8."
            },
            {
              "text": "Le commentaire GECOS, qui décrit le titulaire réel du compte créé",
              "explanation": "C'est le cinquième champ (SEED,,,), purement descriptif. Il n'a aucun effet sur l'exécution ni sur les droits."
            },
            {
              "text": "Le groupe principal, propriétaire implicite des fichiers qu'il crée",
              "explanation": "C'est le quatrième champ (1000). Il détermine effectivement le groupe propriétaire des fichiers créés (question 17), mais il n'est pas en dernière position."
            }
          ],
          "answer": 1,
          "explanation": "Les sept champs se lisent dans l'ordre : nom de connexion, mot de passe (renvoi), UID, GID, commentaire GECOS, répertoire personnel, interpréteur de connexion. Le dernier, ici /bin/bash, est souligné dans le cours comme « la première chose exécutée après une connexion réussie ». C'est ce qui en fait un champ sensible : il désigne le programme qui reçoit la main, avec l'identité de l'utilisateur, dès que l'authentification a réussi. Conséquence pratique directe : y placer une valeur comme /usr/sbin/nologin empêche toute session interactive tout en laissant le compte exister et posséder ses fichiers. C'est une seconde façon de neutraliser un accès, distincte du verrouillage du mot de passe vu à la question 8.",
          "concept": "Authentification et contrôle d'accès",
          "source": "Quiz 2, diapositive 8"
        },
        {
          "id": "ceg4799_quiz2_q03",
          "question": "Un administrateur crée par erreur deux comptes de connexion distincts portant tous deux l'UID 1000. Quelle en est la conséquence ?",
          "options": [
            {
              "text": "Le noyau refuse la seconde création et signale un conflit d'identité",
              "explanation": "L'unicité de l'UID est une convention d'administration, pas une contrainte imposée par le noyau. Rien n'empêche techniquement d'écrire deux fois le même nombre dans /etc/passwd."
            },
            {
              "text": "Le noyau départage les deux comptes grâce à leur nom de connexion",
              "explanation": "Le nom n'intervient jamais dans la décision d'accès : il sert à l'affichage et à la connexion. Une fois le processus lancé, il ne subsiste que l'UID."
            },
            {
              "text": "Le noyau les traite comme une seule et même personne pour les accès",
              "explanation": "C'est l'illustration la plus nette du principe énoncé en tête de la diapositive : « le système ne raisonne pas sur les noms, mais sur les UID ; le nom n'est qu'un affichage ». Toute décision de contrôle d'accès compare un nombre — l'UID effectif du processus — au propriétaire du fichier. Si deux entrées de /etc/passwd portent le même nombre, il n'existe plus aucune information permettant de les distinguer au moment de la décision : chacun lit, modifie et supprime les fichiers de l'autre, et aucune trace ne permet de savoir lequel des deux a agi. Le cours le formule sans détour : « pour le noyau, ils sont alors la même personne ». L'isolement entre les deux comptes est donc nul, malgré deux mots de passe différents."
            },
            {
              "text": "Le noyau accorde la priorité au compte dont le GID est le plus bas",
              "explanation": "Le GID contrôle l'appartenance de groupe et joue son rôle propre, mais il n'arbitre en rien un conflit d'UID ; aucune notion de priorité entre comptes n'existe dans ce modèle."
            }
          ],
          "answer": 2,
          "explanation": "C'est l'illustration la plus nette du principe énoncé en tête de la diapositive : « le système ne raisonne pas sur les noms, mais sur les UID ; le nom n'est qu'un affichage ». Toute décision de contrôle d'accès compare un nombre — l'UID effectif du processus — au propriétaire du fichier. Si deux entrées de /etc/passwd portent le même nombre, il n'existe plus aucune information permettant de les distinguer au moment de la décision : chacun lit, modifie et supprime les fichiers de l'autre, et aucune trace ne permet de savoir lequel des deux a agi. Le cours le formule sans détour : « pour le noyau, ils sont alors la même personne ». L'isolement entre les deux comptes est donc nul, malgré deux mots de passe différents.",
          "concept": "Authentification et contrôle d'accès",
          "source": "Quiz 2, diapositive 18"
        },
        {
          "id": "ceg4799_quiz2_q04",
          "question": "Dans un champ de /etc/shadow de la forme $id$sel$condensé, que désignent respectivement les identifiants « 6 » et « y » ?",
          "options": [
            {
              "text": "SHA-512 pour 6, yescrypt pour y, deux longueurs de sel différentes",
              "explanation": "La première moitié est juste, la seconde ne l'est pas : la longueur du sel n'est pas ce que code ce champ. Le sel occupe le segment suivant, entre les deuxième et troisième « $ »."
            },
            {
              "text": "SHA-512 pour 6, yescrypt pour y, deux algorithmes de hachage distincts",
              "explanation": "Le champ 2 de /etc/shadow est structuré en trois parties séparées par des « $ » : un identifiant d'algorithme, le sel, puis le condensé. Le premier segment est donc un code d'algorithme et rien d'autre : 6 désigne SHA-512, y désigne yescrypt, présenté dans le cours comme le défaut récent. Ce préfixe est indispensable au fonctionnement : lors d'une vérification, le système doit savoir quelle fonction appliquer au couple (mot de passe, sel) pour espérer retrouver le condensé stocké. Il permet aussi de faire coexister dans un même fichier des comptes créés à des époques différentes, et donc de migrer progressivement vers un algorithme plus robuste sans avoir à réinitialiser tous les mots de passe d'un coup."
            },
            {
              "text": "Six tours pour 6, y tours pour y, deux coûts de calcul paramétrables",
              "explanation": "Le nombre de tours est un paramètre de coût qui, lorsqu'il est présent, s'exprime séparément. Le « y » de yescrypt ne serait de toute façon pas lisible comme un nombre de tours."
            },
            {
              "text": "Six octets pour 6, y octets pour y, deux tailles de condensé prévues",
              "explanation": "Rien dans ce format n'exprime une taille en octets. La longueur du condensé découle de l'algorithme choisi ; elle n'est pas déclarée dans le préfixe."
            }
          ],
          "answer": 1,
          "explanation": "Le champ 2 de /etc/shadow est structuré en trois parties séparées par des « $ » : un identifiant d'algorithme, le sel, puis le condensé. Le premier segment est donc un code d'algorithme et rien d'autre : 6 désigne SHA-512, y désigne yescrypt, présenté dans le cours comme le défaut récent. Ce préfixe est indispensable au fonctionnement : lors d'une vérification, le système doit savoir quelle fonction appliquer au couple (mot de passe, sel) pour espérer retrouver le condensé stocké. Il permet aussi de faire coexister dans un même fichier des comptes créés à des époques différentes, et donc de migrer progressivement vers un algorithme plus robuste sans avoir à réinitialiser tous les mots de passe d'un coup.",
          "concept": "Authentification et contrôle d'accès",
          "source": "Quiz 2, diapositive 9"
        },
        {
          "id": "ceg4799_quiz2_q05",
          "question": "Le sel d'un compte doit-il être gardé secret, et d'où vient réellement son efficacité ?",
          "options": [
            {
              "text": "Oui : sa confidentialité empêche toute attaque par dictionnaire ciblée",
              "explanation": "Le sel ne bloque pas une attaque par dictionnaire visant un compte précis : celle-ci reste possible, simplement elle ne se transfère plus à aucun autre compte. C'est le coût qui change, pas la faisabilité."
            },
            {
              "text": "Non : il est public partout, sa force tient à sa longueur en octets fixée",
              "explanation": "La première moitié est juste, la justification est fausse. Le cours attribue la force du sel à son unicité, non à sa taille ; un sel long mais identique partout ne servirait à rien."
            },
            {
              "text": "Oui : il est chiffré avec le condensé pour rester illisible hors de root",
              "explanation": "Rien n'est chiffré dans /etc/shadow. Le fichier est protégé par les permissions du système de fichiers, pas par un chiffrement, et le sel y figure en clair."
            },
            {
              "text": "Non : il est public dans shadow, sa force tient à son unicité par compte",
              "explanation": "Le point est affirmé mot pour mot dans le cours : « le sel n'est pas secret — il est public dans shadow. Sa force est d'être unique, pas caché. » Il ne peut d'ailleurs pas en être autrement : pour vérifier un mot de passe, le système doit relire le sel en clair afin de recalculer hachage(P + S). S'il fallait le garder secret, il faudrait un second secret pour le protéger, et le problème reculerait d'un cran sans être résolu. Son rôle est ailleurs : en rendant chaque condensé dépendant d'une valeur distincte par compte, il supprime toute mutualisation de l'effort d'attaque. Un attaquant qui connaît parfaitement le sel doit malgré tout recommencer l'intégralité de son travail pour chaque compte visé. Le sel ne protège pas un mot de passe faible, il empêche qu'un seul calcul en compromette plusieurs à la fois."
            }
          ],
          "answer": 3,
          "explanation": "Le point est affirmé mot pour mot dans le cours : « le sel n'est pas secret — il est public dans shadow. Sa force est d'être unique, pas caché. » Il ne peut d'ailleurs pas en être autrement : pour vérifier un mot de passe, le système doit relire le sel en clair afin de recalculer hachage(P + S). S'il fallait le garder secret, il faudrait un second secret pour le protéger, et le problème reculerait d'un cran sans être résolu. Son rôle est ailleurs : en rendant chaque condensé dépendant d'une valeur distincte par compte, il supprime toute mutualisation de l'effort d'attaque. Un attaquant qui connaît parfaitement le sel doit malgré tout recommencer l'intégralité de son travail pour chaque compte visé. Le sel ne protège pas un mot de passe faible, il empêche qu'un seul calcul en compromette plusieurs à la fois.",
          "concept": "Authentification et contrôle d'accès",
          "source": "Quiz 2, diapositive 12"
        },
        {
          "id": "ceg4799_quiz2_q06",
          "question": "Pourquoi l'ajout d'un sel unique par compte rend-il les rainbow tables inutilisables ?",
          "options": [
            {
              "text": "Il faudrait précalculer une table entière par valeur de sel rencontrée",
              "explanation": "Une rainbow table est un investissement calculé une fois puis réutilisé indéfiniment : elle associe à l'avance un condensé à son mot de passe, et sa consultation est quasi instantanée. Toute son économie repose sur une hypothèse — que le condensé ne dépende que du mot de passe. Le cours le formule ainsi : « le condensé seul ne dépend que du mot de passe ; il faut le rendre unique par compte ». Le sel brise exactement cette hypothèse. Comme le condensé vaut désormais hachage(P + S), une table ne reste valable que pour une seule valeur de S. Avec un sel aléatoire distinct par compte, il faudrait reconstruire une table complète par compte visé, ce qui coûte plus cher que d'attaquer directement chaque mot de passe. Le précalcul perd tout son intérêt : c'est le principe même de la réutilisation qui est détruit, pas la technique de hachage."
            },
            {
              "text": "Le condensé final dépasse la taille maximale indexable dans la table",
              "explanation": "Aucune contrainte de taille n'entre en jeu. Le sel ne rallonge pas le condensé, il en modifie la valeur — un condensé SHA-512 reste de longueur constante, salé ou non."
            },
            {
              "text": "Le sel est concaténé après le calcul, hors de portée de la table lue",
              "explanation": "L'ordre est inversé. Le sel est ajouté au mot de passe *avant* le hachage : le système calcule H = hachage(P + S). Concaténé après coup, il n'aurait aucun effet protecteur."
            },
            {
              "text": "La table ne peut pas contenir de condensés produits par SHA-512 seul",
              "explanation": "Les rainbow tables s'appliquent à n'importe quelle fonction de hachage, SHA-512 comprise. Ce n'est pas l'algorithme qui les met en échec, c'est l'unicité introduite par le sel."
            }
          ],
          "answer": 0,
          "explanation": "Une rainbow table est un investissement calculé une fois puis réutilisé indéfiniment : elle associe à l'avance un condensé à son mot de passe, et sa consultation est quasi instantanée. Toute son économie repose sur une hypothèse — que le condensé ne dépende que du mot de passe. Le cours le formule ainsi : « le condensé seul ne dépend que du mot de passe ; il faut le rendre unique par compte ». Le sel brise exactement cette hypothèse. Comme le condensé vaut désormais hachage(P + S), une table ne reste valable que pour une seule valeur de S. Avec un sel aléatoire distinct par compte, il faudrait reconstruire une table complète par compte visé, ce qui coûte plus cher que d'attaquer directement chaque mot de passe. Le précalcul perd tout son intérêt : c'est le principe même de la réutilisation qui est détruit, pas la technique de hachage.",
          "concept": "Authentification et contrôle d'accès",
          "source": "Quiz 2, diapositives 11 et 12"
        },
        {
          "id": "ceg4799_quiz2_q07",
          "question": "Quelle séquence décrit correctement la vérification d'un mot de passe saisi par un utilisateur ?",
          "options": [
            {
              "text": "Lire le condensé dans shadow, le déchiffrer, comparer au mot de passe saisi",
              "explanation": "« Déchiffrer » suppose une opération réversible, ce que le hachage n'est pas. Si l'on pouvait remonter au mot de passe depuis le condensé, tout le mécanisme s'effondrerait."
            },
            {
              "text": "Calculer le condensé du mot de passe, puis lui ajouter le sel, et comparer",
              "explanation": "L'ordre est faux et le résultat ne correspondrait pas. Le sel doit être mêlé au mot de passe *avant* le hachage ; l'ajouter au condensé produirait une valeur sans rapport avec celle qui est stockée."
            },
            {
              "text": "Lire le sel dans shadow, calculer le condensé, comparer au condensé stocké",
              "explanation": "Le cours décompose la vérification en quatre étapes : l'utilisateur saisit P, le système lit le sel S dans /etc/shadow, il calcule H = hachage(P + S), puis il compare H au condensé stocké. Tout repose sur une propriété énoncée sur la même diapositive : le hachage est à sens unique, « de H, on ne remonte pas à P ». La comparaison porte donc sur deux condensés, jamais sur deux mots de passe. C'est ce qui permet l'affirmation forte du cours : le système ne connaît jamais votre mot de passe, il n'en garde qu'une empreinte, et même l'administrateur ne peut pas le lire dans le fichier. Le sel doit être lu en premier, précisément parce qu'il entre dans le calcul du condensé."
            },
            {
              "text": "Chiffrer le mot de passe saisi avec le sel, comparer au condensé de root",
              "explanation": "Deux erreurs cumulées : il s'agit d'un hachage et non d'un chiffrement, et la comparaison se fait avec le condensé du compte concerné, pas avec celui de root."
            }
          ],
          "answer": 2,
          "explanation": "Le cours décompose la vérification en quatre étapes : l'utilisateur saisit P, le système lit le sel S dans /etc/shadow, il calcule H = hachage(P + S), puis il compare H au condensé stocké. Tout repose sur une propriété énoncée sur la même diapositive : le hachage est à sens unique, « de H, on ne remonte pas à P ». La comparaison porte donc sur deux condensés, jamais sur deux mots de passe. C'est ce qui permet l'affirmation forte du cours : le système ne connaît jamais votre mot de passe, il n'en garde qu'une empreinte, et même l'administrateur ne peut pas le lire dans le fichier. Le sel doit être lu en premier, précisément parce qu'il entre dans le calcul du condensé.",
          "concept": "Authentification et contrôle d'accès",
          "source": "Quiz 2, diapositive 10"
        },
        {
          "id": "ceg4799_quiz2_q08",
          "question": "Dans /etc/shadow, on observe « root:! », « daemon:* » et « seed:$6$… ». Que signalent les deux premières valeurs ?",
          "options": [
            {
              "text": "« ! » marque un compte de service, « * » un verrouillage par passwd -l",
              "explanation": "C'est exactement l'inversion des deux symboles. Les deux empêchent la connexion, d'où la confusion fréquente, mais l'attribution est ici permutée."
            },
            {
              "text": "« ! » marque un verrouillage par passwd -l, « * » un compte de service",
              "explanation": "Le cours associe trois valeurs à trois situations : « ! » ou « !! » pour un compte verrouillé, typiquement par la commande passwd -l ; « * » pour un compte de service, qui n'a jamais vocation à ouvrir de session ; et un champ en $6$… pour un compte actif doté d'un condensé valide. Les deux premières empêchent également toute connexion par mot de passe, mais elles expriment des intentions différentes, et c'est cette nuance que la question vise. Le « ! » signale un compte normalement utilisable que l'on a suspendu, et que l'on pourra rouvrir ; le « * » signale un compte qui n'a jamais été destiné à une connexion humaine, comme daemon. L'exemple d'Ubuntu illustre le premier cas : root y est verrouillé par défaut, ce qui oblige à passer par sudo."
            },
            {
              "text": "« ! » marque un condensé expiré, « * » un compte jamais initialisé ici",
              "explanation": "L'expiration d'un mot de passe se gère par les champs de dates qui suivent dans la ligne, pas en remplaçant le condensé par un « ! »."
            },
            {
              "text": "« ! » marque un compte sans sel, « * » un condensé volontairement vidé",
              "explanation": "Le sel n'est jamais absent d'un condensé moderne, et « * » ne désigne pas un condensé vidé mais un compte de service délibérément sans connexion."
            }
          ],
          "answer": 1,
          "explanation": "Le cours associe trois valeurs à trois situations : « ! » ou « !! » pour un compte verrouillé, typiquement par la commande passwd -l ; « * » pour un compte de service, qui n'a jamais vocation à ouvrir de session ; et un champ en $6$… pour un compte actif doté d'un condensé valide. Les deux premières empêchent également toute connexion par mot de passe, mais elles expriment des intentions différentes, et c'est cette nuance que la question vise. Le « ! » signale un compte normalement utilisable que l'on a suspendu, et que l'on pourra rouvrir ; le « * » signale un compte qui n'a jamais été destiné à une connexion humaine, comme daemon. L'exemple d'Ubuntu illustre le premier cas : root y est verrouillé par défaut, ce qui oblige à passer par sudo.",
          "concept": "Authentification et contrôle d'accès",
          "source": "Quiz 2, diapositive 13"
        },
        {
          "id": "ceg4799_quiz2_q09",
          "question": "Sur quel principe repose techniquement le verrouillage d'un compte par une valeur comme «!»?",
          "options": [
            {
              "text": "Aucune sortie de la fonction de hachage ne peut jamais valoir ce texte",
              "explanation": "La diapositive énonce le principe en une phrase : on place « une valeur impossible à produire par hachage dans le champ mot de passe : aucun mot de passe ne pourra jamais correspondre ». L'élégance du procédé tient à ce qu'il ne demande aucun traitement particulier. La procédure de vérification reste rigoureusement celle de la question 7 : on calcule hachage(P + S) et on compare au contenu du champ. Comme une sortie de SHA-512 ne peut structurellement pas valoir la chaîne « ! », la comparaison échoue quel que soit le mot de passe présenté, y compris l'ancien mot de passe correct. Le verrouillage est donc obtenu sans code spécial, sans exception dans la logique d'authentification, et il est réversible : restaurer le condensé d'origine réactive le compte immédiatement."
            },
            {
              "text": "Le programme de connexion reconnaît ce texte et ferme la session ouverte",
              "explanation": "L'effet observable est proche, mais ce n'est pas le mécanisme décrit : aucune reconnaissance particulière de la chaîne n'est nécessaire, c'est l'échec de la comparaison ordinaire qui bloque l'accès."
            },
            {
              "text": "Le noyau retire le compte de la table des identités au prochain démarrage",
              "explanation": "Le compte continue d'exister pleinement : il conserve son UID, ses fichiers et son entrée dans /etc/passwd. Seule l'authentification par mot de passe devient impossible."
            },
            {
              "text": "Le champ devient trop court pour contenir un condensé complet et valide",
              "explanation": "La longueur du champ n'entre pas en jeu. Un champ contenant une chaîne longue mais invalide verrouillerait tout aussi sûrement le compte."
            }
          ],
          "answer": 0,
          "explanation": "La diapositive énonce le principe en une phrase : on place « une valeur impossible à produire par hachage dans le champ mot de passe : aucun mot de passe ne pourra jamais correspondre ». L'élégance du procédé tient à ce qu'il ne demande aucun traitement particulier. La procédure de vérification reste rigoureusement celle de la question 7 : on calcule hachage(P + S) et on compare au contenu du champ. Comme une sortie de SHA-512 ne peut structurellement pas valoir la chaîne « ! », la comparaison échoue quel que soit le mot de passe présenté, y compris l'ancien mot de passe correct. Le verrouillage est donc obtenu sans code spécial, sans exception dans la logique d'authentification, et il est réversible : restaurer le condensé d'origine réactive le compte immédiatement.",
          "concept": "Authentification et contrôle d'accès",
          "source": "Quiz 2, diapositive 13"
        },
        {
          "id": "ceg4799_quiz2_q10",
          "question": "Parmi les trois catégories de facteurs d'authentification, qu'est-ce qui rend la biométrie particulièrement problématique ?",
          "options": [
            {
              "text": "Une caractéristique compromise ne peut pas être remplacée par une autre",
              "explanation": "Le cours résume la catégorie « quelque chose que l'on est » par trois traits : empreinte, visage ou voix ; rien à mémoriser ; et surtout « non révocable si compromis ». C'est ce dernier point qui constitue la faiblesse structurelle. Un mot de passe divulgué se change en quelques secondes, une carte perdue se révoque et se remplace. Une empreinte digitale, elle, est définitive : si le gabarit qui la représente fuit, la personne ne peut pas en changer, et le facteur est compromis pour toute sa vie, sur tous les systèmes qui s'y fient. La révocabilité, qui va de soi pour les deux autres catégories, disparaît ici complètement — d'où la conclusion du cours selon laquelle un facteur seul reste fragile."
            },
            {
              "text": "Une caractéristique mesurée exige toujours un matériel dédié et coûteux",
              "explanation": "Le coût du matériel est une contrainte de déploiement, pas une faiblesse de sécurité. Les capteurs sont d'ailleurs aujourd'hui intégrés à la plupart des téléphones."
            },
            {
              "text": "Une caractéristique physique varie trop pour être comparée de façon sûre",
              "explanation": "La variabilité de la mesure est un problème technique réel, traité par des tolérances de comparaison. Ce n'est pas l'objection retenue dans le cours."
            },
            {
              "text": "Une caractéristique unique ne peut pas être partagée entre deux comptes",
              "explanation": "L'impossibilité de partager un facteur est plutôt une propriété souhaitable : elle empêche le prêt d'identifiants, défaut explicitement reproché à la catégorie « ce que l'on possède »."
            }
          ],
          "answer": 0,
          "explanation": "Le cours résume la catégorie « quelque chose que l'on est » par trois traits : empreinte, visage ou voix ; rien à mémoriser ; et surtout « non révocable si compromis ». C'est ce dernier point qui constitue la faiblesse structurelle. Un mot de passe divulgué se change en quelques secondes, une carte perdue se révoque et se remplace. Une empreinte digitale, elle, est définitive : si le gabarit qui la représente fuit, la personne ne peut pas en changer, et le facteur est compromis pour toute sa vie, sur tous les systèmes qui s'y fient. La révocabilité, qui va de soi pour les deux autres catégories, disparaît ici complètement — d'où la conclusion du cours selon laquelle un facteur seul reste fragile.",
          "concept": "Authentification et contrôle d'accès",
          "source": "Quiz 2, diapositive 7"
        },
        {
          "id": "ceg4799_quiz2_q11",
          "question": "Qu'exige précisément une authentification à plusieurs facteurs digne de ce nom ?",
          "options": [
            {
              "text": "Deux facteurs pris dans la même catégorie, pour en doubler la force",
              "explanation": "Deux mots de passe restent deux secrets mémorisés : ils se devinent, se volent et se rejouent par les mêmes moyens. L'attaque qui casse le premier casse souvent le second."
            },
            {
              "text": "Deux facteurs pris dans deux catégories différentes parmi les trois",
              "explanation": "La formulation du cours est précise : « l'authentification à plusieurs facteurs combine deux catégories différentes ». Le mot important est *catégories*, non *facteurs*. L'intérêt de la combinaison vient de ce que les trois catégories échouent de manières indépendantes : ce que l'on sait se devine, se vole et se rejoue ; ce que l'on possède se perd et se prête ; ce que l'on est n'est pas révocable. Associer deux catégories distinctes fait qu'une attaque réussie contre l'une ne suffit plus, puisqu'elle ne transfère pas sur l'autre. C'est la raison pour laquelle l'exemple filé du serveur de notes exige un deuxième facteur pour l'accès distant, là où le mot de passe seul est jugé insuffisant."
            },
            {
              "text": "Trois facteurs pris chacun dans une catégorie, sans exception admise",
              "explanation": "Trois facteurs renforcent naturellement l'ensemble, mais le cours ne pose nullement ce seuil ; deux catégories différentes suffisent à parler d'authentification multifacteur."
            },
            {
              "text": "Deux facteurs dont l'un relève obligatoirement de la biométrie seule",
              "explanation": "Aucune catégorie n'est obligatoire. La biométrie est même celle qui porte le défaut de non-révocabilité vu à la question précédente."
            }
          ],
          "answer": 1,
          "explanation": "La formulation du cours est précise : « l'authentification à plusieurs facteurs combine deux catégories différentes ». Le mot important est *catégories*, non *facteurs*. L'intérêt de la combinaison vient de ce que les trois catégories échouent de manières indépendantes : ce que l'on sait se devine, se vole et se rejoue ; ce que l'on possède se perd et se prête ; ce que l'on est n'est pas révocable. Associer deux catégories distinctes fait qu'une attaque réussie contre l'une ne suffit plus, puisqu'elle ne transfère pas sur l'autre. C'est la raison pour laquelle l'exemple filé du serveur de notes exige un deuxième facteur pour l'accès distant, là où le mot de passe seul est jugé insuffisant.",
          "concept": "Authentification et contrôle d'accès",
          "source": "Quiz 2, diapositive 7"
        },
        {
          "id": "ceg4799_quiz2_q12",
          "question": "Un répertoire porte le droit x mais pas le droit r pour un utilisateur donné. Que peut faire cet utilisateur ?",
          "options": [
            {
              "text": "Lister le contenu du répertoire, sans pouvoir ouvrir aucun des fichiers",
              "explanation": "C'est l'exact opposé : lister les noms demande r, alors que c'est précisément ce droit qui manque ici."
            },
            {
              "text": "Créer et supprimer des entrées, sans pouvoir traverser ce répertoire là",
              "explanation": "Créer et supprimer des entrées relève du droit w sur le répertoire (voir question 13), absent de l'énoncé ; et le droit de traverser est justement celui qui est accordé."
            },
            {
              "text": "Ouvrir tous les fichiers du répertoire, y compris ceux du groupe seul",
              "explanation": "Le droit x sur le répertoire ne donne aucun droit sur les fichiers eux-mêmes. Chaque fichier conserve ses propres permissions, qui sont évaluées séparément."
            },
            {
              "text": "Ouvrir un fichier dont on connaît le nom, sans pouvoir lister le contenu",
              "explanation": "Le cours signale ce cas comme le « piège classique » du modèle rwx : les trois mêmes lettres changent de sens selon qu'elles portent sur un fichier ou sur un répertoire. Sur un répertoire, r autorise à lister les noms qu'il contient, tandis que x autorise à le traverser, c'est-à-dire à s'y déplacer et à atteindre ce qui s'y trouve. Les deux droits sont donc indépendants. Avec x sans r, on peut atteindre /chemin/secret/rapport.txt si l'on connaît déjà ce nom exact, mais un ls sur le répertoire échoue : les noms restent invisibles. Cette combinaison est utilisée délibérément pour des répertoires de traversée, par exemple /home, où l'on veut laisser passer sans divulguer la liste des comptes. À noter que l'accès final au fichier reste soumis aux permissions propres de ce fichier."
            }
          ],
          "answer": 3,
          "explanation": "Le cours signale ce cas comme le « piège classique » du modèle rwx : les trois mêmes lettres changent de sens selon qu'elles portent sur un fichier ou sur un répertoire. Sur un répertoire, r autorise à lister les noms qu'il contient, tandis que x autorise à le traverser, c'est-à-dire à s'y déplacer et à atteindre ce qui s'y trouve. Les deux droits sont donc indépendants. Avec x sans r, on peut atteindre /chemin/secret/rapport.txt si l'on connaît déjà ce nom exact, mais un ls sur le répertoire échoue : les noms restent invisibles. Cette combinaison est utilisée délibérément pour des répertoires de traversée, par exemple /home, où l'on veut laisser passer sans divulguer la liste des comptes. À noter que l'accès final au fichier reste soumis aux permissions propres de ce fichier.",
          "concept": "Authentification et contrôle d'accès",
          "source": "Quiz 2, diapositive 20"
        },
        {
          "id": "ceg4799_quiz2_q13",
          "question": "Quel droit faut-il réellement posséder pour supprimer un fichier, indépendamment des droits portés par ce fichier ?",
          "options": [
            {
              "text": "Le droit w sur le fichier visé, car la suppression en modifie le contenu",
              "explanation": "La suppression ne touche pas au contenu du fichier : elle retire son nom du répertoire. Le droit w sur le fichier autorise à le réécrire, pas à le faire disparaître."
            },
            {
              "text": "Le droit w sur le répertoire, car supprimer modifie une entrée de celui-ci",
              "explanation": "Le cours définit le droit w sur un répertoire comme celui de « créer / supprimer des entrées ». Il faut prendre cette définition au pied de la lettre : un répertoire est une liste associant des noms à des fichiers, et supprimer un fichier consiste à retirer une ligne de cette liste, donc à modifier le répertoire — pas le fichier. La conséquence est contre-intuitive et mérite d'être soulignée en classe : on peut supprimer un fichier que l'on n'a pas le droit de lire ni de modifier, pourvu que l'on puisse écrire dans le répertoire qui le contient ; et inversement, on ne peut pas supprimer son propre fichier s'il réside dans un répertoire où l'on n'a pas le droit w. C'est précisément ce qui rend dangereux un répertoire partagé en 777, situation proposée à la discussion par l'arrêt sur image de la diapositive 26."
            },
            {
              "text": "Le droit x sur le répertoire, car la suppression exige de le traverser",
              "explanation": "Le droit x est nécessaire pour atteindre le répertoire, mais il ne suffit jamais : sans w, aucune entrée ne peut être retirée de la liste."
            },
            {
              "text": "Le droit r sur le répertoire, car la suppression exige d'en lire les noms",
              "explanation": "Le droit r ne sert qu'à énumérer les noms. Connaître un nom n'a jamais donné le pouvoir de l'effacer."
            }
          ],
          "answer": 1,
          "explanation": "Le cours définit le droit w sur un répertoire comme celui de « créer / supprimer des entrées ». Il faut prendre cette définition au pied de la lettre : un répertoire est une liste associant des noms à des fichiers, et supprimer un fichier consiste à retirer une ligne de cette liste, donc à modifier le répertoire — pas le fichier. La conséquence est contre-intuitive et mérite d'être soulignée en classe : on peut supprimer un fichier que l'on n'a pas le droit de lire ni de modifier, pourvu que l'on puisse écrire dans le répertoire qui le contient ; et inversement, on ne peut pas supprimer son propre fichier s'il réside dans un répertoire où l'on n'a pas le droit w. C'est précisément ce qui rend dangereux un répertoire partagé en 777, situation proposée à la discussion par l'arrêt sur image de la diapositive 26.",
          "concept": "Authentification et contrôle d'accès",
          "source": "Quiz 2, diapositives 20 et 26"
        },
        {
          "id": "ceg4799_quiz2_q14",
          "question": "Avec un umask de 077, quelles permissions reçoit un fichier nouvellement créé, et pourquoi ?",
          "options": [
            {
              "text": "700, le propriétaire gardant aussi le droit d'exécuter ce fichier",
              "explanation": "Ce serait le résultat si la base valait 777, ce qui est le cas des répertoires, pas des fichiers. Le bit x n'est jamais accordé automatiquement à un fichier."
            },
            {
              "text": "600, le fichier restant entièrement réservé à son seul propriétaire",
              "explanation": "Le calcul part de la base indiquée dans le cours : 666, soit rw-rw-rw-, pour un fichier. Le umask retire les bits qu'il désigne ; 077 vise la totalité des droits du groupe et des autres. Il reste 600, c'est-à-dire rw-------, ce que le cours résume en disant qu'un umask 077 « réserve le fichier entièrement au propriétaire ». Le point à faire remarquer est que la base vaut 666 et non 777 : un fichier ordinaire ne reçoit jamais le bit d'exécution à la création, quel que soit le umask. C'est ce qui explique que le résultat soit 600 et non 700, et pourquoi un script fraîchement écrit doit toujours recevoir un chmod +x explicite avant de pouvoir être lancé."
            },
            {
              "text": "677, les bits du masque venant s'ajouter à la base 666 du fichier",
              "explanation": "Le umask retire des bits, il n'en ajoute aucun. Une addition produirait d'ailleurs des permissions plus ouvertes que la base, ce qui contredirait toute sa raison d'être."
            },
            {
              "text": "066, le masque étant appliqué dans l'ordre inverse des trois blocs",
              "explanation": "Les trois chiffres correspondent dans l'ordre au propriétaire, au groupe et aux autres, sans inversion ; 077 protège donc contre le groupe et les autres, jamais contre le propriétaire."
            }
          ],
          "answer": 1,
          "explanation": "Le calcul part de la base indiquée dans le cours : 666, soit rw-rw-rw-, pour un fichier. Le umask retire les bits qu'il désigne ; 077 vise la totalité des droits du groupe et des autres. Il reste 600, c'est-à-dire rw-------, ce que le cours résume en disant qu'un umask 077 « réserve le fichier entièrement au propriétaire ». Le point à faire remarquer est que la base vaut 666 et non 777 : un fichier ordinaire ne reçoit jamais le bit d'exécution à la création, quel que soit le umask. C'est ce qui explique que le résultat soit 600 et non 700, et pourquoi un script fraîchement écrit doit toujours recevoir un chmod +x explicite avant de pouvoir être lancé.",
          "concept": "Authentification et contrôle d'accès",
          "source": "Quiz 2, diapositive 23"
        },
        {
          "id": "ceg4799_quiz2_q15",
          "question": "Quelle affirmation décrit correctement la nature du umask en tant que mécanisme ?",
          "options": [
            {
              "text": "Il retire des bits par défaut, avant tout chmod explicite ultérieur",
              "explanation": "Le cours insiste sur la nature soustractive du umask : il « retire des bits aux permissions de base d'un nouveau fichier » et « décide de ce qui n'est pas accordé ». Il s'agit donc d'une politique par défaut, qui « ferme les droits d'avance, avant tout chmod explicite ». La distinction avec chmod est essentielle et souvent mal comprise : chmod agit après coup, sur un fichier précis qui existe déjà, tandis que le umask agit au moment même de la création, sur tous les fichiers à venir du processus. Le umask relève de la prévention — il évite qu'un fichier soit un seul instant trop ouvert — alors que chmod relève de la correction. Un umask bien réglé, comme le 022 du serveur de notes, fait naître les fichiers déjà fermés."
            },
            {
              "text": "Il ajoute des bits par défaut, après tout chmod explicite ultérieur",
              "explanation": "Symétrique exacte de la bonne réponse, et fausse sur les deux points : le umask soustrait, et il intervient avant tout chmod, pas après."
            },
            {
              "text": "Il remplace les bits du fichier au moment de chaque ouverture faite",
              "explanation": "Le umask n'agit qu'à la création. Ouvrir ensuite un fichier existant ne modifie jamais ses permissions."
            },
            {
              "text": "Il impose des bits au groupe, sans jamais toucher aux autres classes",
              "explanation": "Un umask agit sur les trois classes selon les trois chiffres qu'on lui donne ; 077 ferme aussi bien au groupe qu'aux autres."
            }
          ],
          "answer": 0,
          "explanation": "Le cours insiste sur la nature soustractive du umask : il « retire des bits aux permissions de base d'un nouveau fichier » et « décide de ce qui n'est pas accordé ». Il s'agit donc d'une politique par défaut, qui « ferme les droits d'avance, avant tout chmod explicite ». La distinction avec chmod est essentielle et souvent mal comprise : chmod agit après coup, sur un fichier précis qui existe déjà, tandis que le umask agit au moment même de la création, sur tous les fichiers à venir du processus. Le umask relève de la prévention — il évite qu'un fichier soit un seul instant trop ouvert — alors que chmod relève de la correction. Un umask bien réglé, comme le 022 du serveur de notes, fait naître les fichiers déjà fermés.",
          "concept": "Authentification et contrôle d'accès",
          "source": "Quiz 2, diapositive 23"
        },
        {
          "id": "ceg4799_quiz2_q16",
          "question": "Quelle commande symbolique produit exactement le même résultat que « chmod 750 bulletin.sh » ?",
          "options": [
            {
              "text": "chmod u=rwx,g=rx,o= bulletin.sh, qui fixe les trois classes d'un coup",
              "explanation": "Il faut d'abord traduire l'octal, chaque chiffre étant la somme r(4) + w(2) + x(1) : 7 = rwx, 5 = r-x, 0 = - --, soit rwxr-x---. Il faut ensuite choisir le bon opérateur symbolique. Le signe « = » fixe les droits d'une classe à la valeur indiquée et retire tout le reste, ce qui reproduit fidèlement le comportement de la notation octale ; « + » et « - » se contentent d'ajouter ou d'ôter des bits en laissant les autres inchangés. La forme u=rwx,g=rx,o= donne donc exactement rwxr-x--- quel que soit l'état antérieur du fichier, l'écriture « o= » sans aucune lettre signifiant « aucun droit pour les autres ». C'est le sens de la remarque du cours : octal et symbolique disent la même chose."
            },
            {
              "text": "chmod u+rwx,g+rx,o+r bulletin.sh, qui fixe les trois classes d'un coup",
              "explanation": "Les opérateurs « + » n'effacent rien : si le fichier possédait déjà des droits pour les autres, ils subsisteraient. De plus o+r accorde la lecture aux autres, que 750 refuse précisément."
            },
            {
              "text": "chmod a=rwx,g-w,o-r bulletin.sh, qui fixe les trois classes d'un coup",
              "explanation": "a=rwx ouvre d'abord tous les droits à tout le monde, puis n'en retire que deux : il resterait x pour les autres, alors que 750 ne leur laisse rien."
            },
            {
              "text": "chmod u=rw,g=rwx,o=x bulletin.sh, qui fixe les trois classes d'un coup",
              "explanation": "La traduction des chiffres est erronée : cette commande donne rw-rwx--x, sans rapport avec rwxr-x---."
            }
          ],
          "answer": 0,
          "explanation": "Il faut d'abord traduire l'octal, chaque chiffre étant la somme r(4) + w(2) + x(1) : 7 = rwx, 5 = r-x, 0 = - --, soit rwxr-x---. Il faut ensuite choisir le bon opérateur symbolique. Le signe « = » fixe les droits d'une classe à la valeur indiquée et retire tout le reste, ce qui reproduit fidèlement le comportement de la notation octale ; « + » et « - » se contentent d'ajouter ou d'ôter des bits en laissant les autres inchangés. La forme u=rwx,g=rx,o= donne donc exactement rwxr-x--- quel que soit l'état antérieur du fichier, l'écriture « o= » sans aucune lettre signifiant « aucun droit pour les autres ». C'est le sens de la remarque du cours : octal et symbolique disent la même chose.",
          "concept": "Authentification et contrôle d'accès",
          "source": "Quiz 2, diapositive 22"
        },
        {
          "id": "ceg4799_quiz2_q17",
          "question": "Qu'est-ce qui distingue le groupe principal d'un utilisateur de ses groupes secondaires ?",
          "options": [
            {
              "text": "Le principal figure dans /etc/passwd et possède les fichiers créés",
              "explanation": "Le cours oppose les deux notions point par point. Le groupe principal est défini dans /etc/passwd — c'est le quatrième champ, le GID de la question 2 — il est unique, et c'est lui qui devient propriétaire des fichiers que l'utilisateur crée. Les groupes secondaires, eux, sont définis dans /etc/group, peuvent être multiples, et servent à ouvrir l'accès à des ressources partagées. La conséquence pratique est importante pour le travail en équipe : ajouter alice au groupe notes par usermod -aG notes alice lui donne accès aux fichiers du groupe, mais ne change pas le groupe propriétaire des fichiers qu'elle créera ensuite — ceux-ci appartiendront toujours à son groupe principal. C'est une source fréquente de fichiers invisibles aux coéquipiers dans un répertoire partagé."
            },
            {
              "text": "Le principal figure dans /etc/group et possède les fichiers créés",
              "explanation": "Les deux fichiers sont intervertis. /etc/group recense les groupes et leurs membres secondaires ; le groupe principal se lit dans la ligne de l'utilisateur au sein de /etc/passwd."
            },
            {
              "text": "Le principal peut être multiple, à la différence des groupes secondaires",
              "explanation": "C'est l'inverse : l'utilisateur n'a qu'un seul groupe principal, alors qu'il peut appartenir à plusieurs groupes secondaires."
            },
            {
              "text": "Le principal ne sert qu'à l'affichage et n'accorde aucun droit réel",
              "explanation": "Le groupe principal est au contraire pleinement opérant : il détermine la classe « groupe » lors de l'évaluation des permissions et la propriété des fichiers créés."
            }
          ],
          "answer": 0,
          "explanation": "Le cours oppose les deux notions point par point. Le groupe principal est défini dans /etc/passwd — c'est le quatrième champ, le GID de la question 2 — il est unique, et c'est lui qui devient propriétaire des fichiers que l'utilisateur crée. Les groupes secondaires, eux, sont définis dans /etc/group, peuvent être multiples, et servent à ouvrir l'accès à des ressources partagées. La conséquence pratique est importante pour le travail en équipe : ajouter alice au groupe notes par usermod -aG notes alice lui donne accès aux fichiers du groupe, mais ne change pas le groupe propriétaire des fichiers qu'elle créera ensuite — ceux-ci appartiendront toujours à son groupe principal. C'est une source fréquente de fichiers invisibles aux coéquipiers dans un répertoire partagé.",
          "concept": "Authentification et contrôle d'accès",
          "source": "Quiz 2, diapositives 18 et 19"
        },
        {
          "id": "ceg4799_quiz2_q18",
          "question": "Pourquoi les listes de contrôle d'accès ont-elles été ajoutées au modèle traditionnel d'UNIX ?",
          "options": [
            {
              "text": "Le modèle rwx n'offre que deux classes et ignore totalement les groupes",
              "explanation": "Le modèle compte bien trois classes, et le groupe y joue un rôle central. C'est son unicité qui pose problème, non son absence."
            },
            {
              "text": "Le modèle rwx interdit de retirer un droit déjà accordé au propriétaire",
              "explanation": "Le propriétaire peut parfaitement se retirer des droits par chmod ; rien n'est figé une fois accordé."
            },
            {
              "text": "Le modèle rwx n'offre qu'un seul groupe et ne nomme aucun utilisateur",
              "explanation": "Le cours pose la limite en une phrase : le modèle rwx « ne connaît que trois classes : propriétaire, un seul groupe, autres », si bien que « donner un droit à UNE personne précise, sans toucher au groupe, est impossible ». Le problème est celui de la granularité. Pour accorder la lecture à un auditeur externe, il faudrait soit l'ajouter au groupe notes — ce qui lui donnerait du même coup tous les droits du groupe sur tous les fichiers du groupe — soit ouvrir la classe « autres », ce qui reviendrait à ouvrir à tout le monde. Les ACL résolvent exactement cela en ajoutant des entrées nommées : setfacl -m u:alice:rw désigne alice individuellement, avec ses propres rwx. Le cours précise qu'elles « coexistent avec rwx : elles affinent, elles ne remplacent pas »."
            },
            {
              "text": "Le modèle rwx ne s'applique pas aux fichiers appartenant à root seul",
              "explanation": "Le modèle s'applique uniformément à tous les fichiers, y compris ceux de root, qui ne bénéficie d'aucune exception dans la structure des permissions."
            }
          ],
          "answer": 2,
          "explanation": "Le cours pose la limite en une phrase : le modèle rwx « ne connaît que trois classes : propriétaire, un seul groupe, autres », si bien que « donner un droit à UNE personne précise, sans toucher au groupe, est impossible ». Le problème est celui de la granularité. Pour accorder la lecture à un auditeur externe, il faudrait soit l'ajouter au groupe notes — ce qui lui donnerait du même coup tous les droits du groupe sur tous les fichiers du groupe — soit ouvrir la classe « autres », ce qui reviendrait à ouvrir à tout le monde. Les ACL résolvent exactement cela en ajoutant des entrées nommées : setfacl -m u:alice:rw désigne alice individuellement, avec ses propres rwx. Le cours précise qu'elles « coexistent avec rwx : elles affinent, elles ne remplacent pas ».",
          "concept": "Authentification et contrôle d'accès",
          "source": "Quiz 2, diapositive 24"
        },
        {
          "id": "ceg4799_quiz2_q19",
          "question": "Dans la sortie de « ls -l », que signale un caractère « + » placé après les dix caractères de permissions ?",
          "options": [
            {
              "text": "Un bit Set-UID est présent sur ce fichier, en plus des permissions rwx",
              "explanation": "Le bit Set-UID n'apparaît pas sous forme de « + » : il se manifeste par un s à la place du x dans le bloc du propriétaire."
            },
            {
              "text": "Un lien supplémentaire pointe vers ce fichier depuis un autre répertoire",
              "explanation": "Le nombre de liens figure déjà dans la colonne numérique qui suit les permissions, ici la valeur 1 de l'exemple du cours."
            },
            {
              "text": "Une ACL est présente sur ce fichier, en plus des permissions classiques",
              "explanation": "Le cours l'indique en commentaire de l'exemple : « le + dans ls -l signale une ACL présente ». Ce détail a une portée pratique considérable pour l'analyse d'un système. Les dix caractères habituels ne montrent que le modèle à trois classes ; si une ACL accorde des droits supplémentaires à des utilisateurs nommés, ceux-ci restent totalement invisibles dans un ls -l ordinaire. Le « + » est le seul indice signalant qu'il faut aller regarder plus loin avec getfacl pour connaître les droits réels. Un fichier affiché en rw-r----- peut donc être lisible par des comptes qui n'apparaissent nulle part dans cette ligne. En audit de permissions, ignorer ce caractère conduit à sous-estimer l'exposition réelle d'un fichier."
            },
            {
              "text": "Un attribut étendu de journalisation est activé pour ce fichier précis",
              "explanation": "Aucune notation de ce genre n'existe dans ls -l, et la journalisation ne se règle pas fichier par fichier de cette manière."
            }
          ],
          "answer": 2,
          "explanation": "Le cours l'indique en commentaire de l'exemple : « le + dans ls -l signale une ACL présente ». Ce détail a une portée pratique considérable pour l'analyse d'un système. Les dix caractères habituels ne montrent que le modèle à trois classes ; si une ACL accorde des droits supplémentaires à des utilisateurs nommés, ceux-ci restent totalement invisibles dans un ls -l ordinaire. Le « + » est le seul indice signalant qu'il faut aller regarder plus loin avec getfacl pour connaître les droits réels. Un fichier affiché en rw-r----- peut donc être lisible par des comptes qui n'apparaissent nulle part dans cette ligne. En audit de permissions, ignorer ce caractère conduit à sous-estimer l'exposition réelle d'un fichier.",
          "concept": "Authentification et contrôle d'accès",
          "source": "Quiz 2, diapositives 21 et 24"
        },
        {
          "id": "ceg4799_quiz2_q20",
          "question": "Parmi les trois mécanismes d'exécution privilégiée, qu'est-ce qui caractérise proprement un programme Set-UID ?",
          "options": [
            {
              "text": "Set-UID donne les droits de root, quel que soit le propriétaire du fichier",
              "explanation": "C'est la simplification qu'il faut écarter. Le privilège obtenu est celui du propriétaire du fichier, qui peut être n'importe quel compte."
            },
            {
              "text": "Set-UID donne les droits du propriétaire du programme, pas ceux de root",
              "explanation": "La formulation du cours est délibérément précise : « le programme s'exécute avec les droits de son propriétaire », et le bit Set-UID est ce qui le marque. Le propriétaire est très souvent root — c'est le cas de passwd, qui doit écrire dans un fichier réservé à root — mais ce n'est pas une obligation, et confondre les deux fait perdre l'essentiel du mécanisme. Un programme Set-UID appartenant à un utilisateur ordinaire s'exécute avec les droits de cet utilisateur-là. C'est cette dissociation entre celui qui lance le programme et l'identité sous laquelle il s'exécute qui prépare la notion d'UID réel et d'UID effectif annoncée pour la section 4, et qui explique que ces programmes constituent une surface d'attaque à part entière. Le fil commun des trois mécanismes reste, selon le cours, d'accorder un pouvoir précis pour une tâche précise, jamais « tout root, tout le temps »."
            },
            {
              "text": "Set-UID donne les droits de l'appelant, élargis au groupe du programme",
              "explanation": "Si le programme conservait les droits de l'appelant, il n'y aurait aucune élévation de privilège et le mécanisme n'aurait aucun objet."
            },
            {
              "text": "Set-UID donne les droits du propriétaire, mais seulement après un sudo",
              "explanation": "Set-UID et sudo sont deux mécanismes indépendants parmi les trois présentés. Un programme Set-UID agit sans qu'aucun sudo n'intervienne."
            }
          ],
          "answer": 1,
          "explanation": "La formulation du cours est délibérément précise : « le programme s'exécute avec les droits de son propriétaire », et le bit Set-UID est ce qui le marque. Le propriétaire est très souvent root — c'est le cas de passwd, qui doit écrire dans un fichier réservé à root — mais ce n'est pas une obligation, et confondre les deux fait perdre l'essentiel du mécanisme. Un programme Set-UID appartenant à un utilisateur ordinaire s'exécute avec les droits de cet utilisateur-là. C'est cette dissociation entre celui qui lance le programme et l'identité sous laquelle il s'exécute qui prépare la notion d'UID réel et d'UID effectif annoncée pour la section 4, et qui explique que ces programmes constituent une surface d'attaque à part entière. Le fil commun des trois mécanismes reste, selon le cours, d'accorder un pouvoir précis pour une tâche précise, jamais « tout root, tout le temps ».",
          "concept": "Authentification et contrôle d'accès",
          "source": "Quiz 2, diapositive 29"
        }
      ]
    },
    "quiz3": {
      "title": "Programmes privilégiés et Set-UID (diapositives 30 à 70)",
      "label": "Quiz 3 · Chapitre 2",
      "questions": [
        {
          "id": "ceg4799_quiz3_q01",
          "question": "Le fichier /etc/sudoers contient la ligne « %admin ALL=(ALL) NOPASSWD: /usr/bin/systemctl ». Que peut faire exactement un membre du groupe admin ?",
          "options": [
            {
              "text": "Lancer n'importe quelle commande en tant que root sans mot de passe",
              "explanation": "La liste de commandes n'est pas « ALL » : elle se limite à /usr/bin/systemctl. C'est la ligne « seed ALL=(ALL:ALL) ALL » qui autorise toutes les commandes (et avec mot de passe)."
            },
            {
              "text": "Lancer systemctl en tant que root sans saisir aucun mot de passe",
              "explanation": "Le « % » désigne un groupe (admin), « (ALL) » l'identité cible (root compris), « NOPASSWD: » supprime la demande de mot de passe et « /usr/bin/systemctl » limite l'autorisation à cette seule commande. C'est la granularité de sudo : on peut restreindre l'élévation à certaines commandes."
            },
            {
              "text": "Lancer systemctl en tant que root après saisie du mot de passe root",
              "explanation": "NOPASSWD supprime justement la demande de mot de passe. De plus, sudo demande le mot de passe de l'utilisateur (« [sudo] password for seed »), pas celui de root."
            },
            {
              "text": "Ouvrir un shell root permanent sans saisir aucun mot de passe",
              "explanation": "sudo n'accorde jamais un shell root permanent : il exécute une commande avec privilège, puis rend la main."
            }
          ],
          "answer": 1,
          "explanation": "Le « % » désigne un groupe (admin), « (ALL) » l'identité cible (root compris), « NOPASSWD: » supprime la demande de mot de passe et « /usr/bin/systemctl » limite l'autorisation à cette seule commande. C'est la granularité de sudo : on peut restreindre l'élévation à certaines commandes.",
          "concept": "Programmes privilégiés",
          "source": "Quiz 3, diapositive 30"
        },
        {
          "id": "ceg4799_quiz3_q02",
          "question": "Sur un serveur Ubuntu partagé, on veut savoir qui a redémarré un service la nuit dernière. En quoi l'usage de sudo, plutôt que d'un shell root, facilite-t-il cette enquête ?",
          "options": [
            {
              "text": "Chaque appel à sudo est consigné dans les journaux du système",
              "explanation": "La traçabilité est l'une des trois propriétés de sudo présentées : chaque appel est journalisé, avec l'identité de l'appelant. Un shell root partagé ne dit pas quelle personne a agi. C'est aussi pourquoi Ubuntu verrouille root et pousse à préférer sudo."
            },
            {
              "text": "sudo chiffre chaque commande avec la clé propre à l'utilisateur",
              "explanation": "Aucun chiffrement n'intervient : la trace provient de la journalisation, non d'une clé cryptographique."
            },
            {
              "text": "sudo ouvre une session root dont l'historique reste conservé",
              "explanation": "sudo n'ouvre pas de session root : il exécute une seule commande et rend la main. C'est l'inverse d'ouvrir une session root."
            },
            {
              "text": "sudo exige le mot de passe de root, ce qui identifie l'auteur",
              "explanation": "sudo demande le mot de passe de l'utilisateur appelant, pas celui de root; un mot de passe root partagé n'identifierait d'ailleurs personne."
            }
          ],
          "answer": 0,
          "explanation": "La traçabilité est l'une des trois propriétés de sudo présentées : chaque appel est journalisé, avec l'identité de l'appelant. Un shell root partagé ne dit pas quelle personne a agi. C'est aussi pourquoi Ubuntu verrouille root et pousse à préférer sudo.",
          "concept": "Programmes privilégiés",
          "source": "Quiz 3, diapositive 30"
        },
        {
          "id": "ceg4799_quiz3_q03",
          "question": "Un serveur Web doit uniquement écouter sur le port 80 et n'a besoin d'aucun autre pouvoir de root. Quelle capacité POSIX faut-il lui accorder ?",
          "options": [
            {
              "text": "CAP_SYS_TIME",
              "explanation": "CAP_SYS_TIME permet de régler l'horloge du système : aucun rapport avec l'écoute réseau."
            },
            {
              "text": "CAP_CHOWN",
              "explanation": "CAP_CHOWN permet de changer le propriétaire d'un fichier : aucun rapport avec l'écoute réseau."
            },
            {
              "text": "CAP_NET_RAW",
              "explanation": "CAP_NET_RAW sert à ouvrir un socket brut (ping, capture), ce qui ne permet pas de réserver un port privilégié."
            },
            {
              "text": "CAP_NET_BIND_SERVICE",
              "explanation": "Le port 80 est inférieur à 1024; écouter sur un tel port est réservé à root. La capacité CAP_NET_BIND_SERVICE découpe précisément ce pouvoir : « écouter sous le port 1024 ». On accorde le pouvoir minimal, jamais le bloc entier."
            }
          ],
          "answer": 3,
          "explanation": "Le port 80 est inférieur à 1024; écouter sur un tel port est réservé à root. La capacité CAP_NET_BIND_SERVICE découpe précisément ce pouvoir : « écouter sous le port 1024 ». On accorde le pouvoir minimal, jamais le bloc entier.",
          "concept": "Programmes privilégiés",
          "source": "Quiz 3, diapositive 31"
        },
        {
          "id": "ceg4799_quiz3_q04",
          "question": "Après « sudo setcap cap_net_raw+ep ./mon_ping », la commande getcap affiche « ./mon_ping cap_net_raw=ep ». Que signifient les lettres « e » et « p » ?",
          "options": [
            {
              "text": "La capacité est effective et permise pour ce programme",
              "explanation": "La diapositive l'indique en commentaire : « e = effective, p = permitted ». La capacité fait partie de l'ensemble permis du programme et elle est active (effective) dès son lancement."
            },
            {
              "text": "La capacité est exportée et propagée aux processus enfants",
              "explanation": "Les lettres ne décrivent aucune propagation aux enfants; elles désignent les ensembles effectif et permis."
            },
            {
              "text": "La capacité est effacée puis purgée à la fin du programme",
              "explanation": "Rien n'est effacé ni purgé : les lettres décrivent l'état de la capacité, non une opération de nettoyage."
            },
            {
              "text": "La capacité est exécutable et publique pour tout le monde",
              "explanation": "« e » ne veut pas dire exécutable et « p » ne veut pas dire public; la capacité n'est accordée qu'au fichier ./mon_ping."
            }
          ],
          "answer": 0,
          "explanation": "La diapositive l'indique en commentaire : « e = effective, p = permitted ». La capacité fait partie de l'ensemble permis du programme et elle est active (effective) dès son lancement.",
          "concept": "Programmes privilégiés",
          "source": "Quiz 3, diapositive 32"
        },
        {
          "id": "ceg4799_quiz3_q05",
          "question": "Dans l'architecture de Wireshark décrite en cours, quelle affirmation est exacte quant à la répartition du privilège ?",
          "options": [
            {
              "text": "Seul dumpcap, qui réalise la capture, détient le privilège root",
              "explanation": "L'interface graphique n'est pas privilégiée; la capture est faite par dumpcap, seul composant privilégié. On sépare la partie privilégiée (petite, ciblée) de la partie exposée (grosse, complexe) : un motif récurrent du cours."
            },
            {
              "text": "Wireshark entier est Set-UID root pour lire les interfaces réseau",
              "explanation": "Rendre tout Wireshark Set-UID root exposerait toute l'interface; le cours présente l'isolement du seul dumpcap."
            },
            {
              "text": "L'interface graphique s'exécute en root pour capturer les paquets",
              "explanation": "C'est justement l'inverse : l'interface graphique est non privilégiée."
            },
            {
              "text": "dumpcap et l'interface graphique partagent le privilège root",
              "explanation": "Le privilège n'est pas partagé : il est cantonné à dumpcap, l'interface en est privée."
            }
          ],
          "answer": 0,
          "explanation": "L'interface graphique n'est pas privilégiée; la capture est faite par dumpcap, seul composant privilégié. On sépare la partie privilégiée (petite, ciblée) de la partie exposée (grosse, complexe) : un motif récurrent du cours.",
          "concept": "Programmes privilégiés",
          "source": "Quiz 3, diapositive 32"
        },
        {
          "id": "ceg4799_quiz3_q06",
          "question": "« ls -l /etc/shadow » affiche « -rw-r----- 1 root shadow ». L'utilisateur seed, qui n'appartient pas au groupe shadow, tape « cat /etc/shadow ». Que se passe-t-il ?",
          "options": [
            {
              "text": "Refusé : la classe « autres » n'a aucun droit sur ce fichier",
              "explanation": "Les trois derniers caractères « --- » (autres) ne donnent aucun droit. seed n'est ni root ni membre de shadow : il tombe dans la classe « autres », donc la lecture est refusée."
            },
            {
              "text": "Permis : le groupe shadow accorde la lecture à tout le monde",
              "explanation": "Le « r » du groupe ne concerne que les membres du groupe shadow, pas tout le monde."
            },
            {
              "text": "Refusé : seul le propriétaire root peut accéder à ce fichier",
              "explanation": "Le refus est juste, mais la justification est fausse : les membres du groupe shadow ont aussi la lecture (r-- du groupe). Seule l'écriture est réservée à root."
            },
            {
              "text": "Permis en lecture seule, mais toute écriture lui est refusée",
              "explanation": "La lecture n'est accordée qu'au propriétaire et au groupe; seed n'a même pas la lecture."
            }
          ],
          "answer": 0,
          "explanation": "Les trois derniers caractères « --- » (autres) ne donnent aucun droit. seed n'est ni root ni membre de shadow : il tombe dans la classe « autres », donc la lecture est refusée.",
          "concept": "Programmes privilégiés",
          "source": "Quiz 3, diapositive 35"
        },
        {
          "id": "ceg4799_quiz3_q07",
          "question": "Pourquoi la règle « un utilisateur ne peut changer QUE son propre mot de passe » est-elle vérifiée par le programme passwd plutôt que par le noyau ?",
          "options": [
            {
              "text": "Le noyau ne sait pas déterminer l'UID de l'utilisateur qui appelle",
              "explanation": "Le noyau connaît très bien l'UID de l'appelant : c'est la base même de son contrôle d'accès."
            },
            {
              "text": "Y mettre toutes les règles fines rendrait le noyau énorme et fragile",
              "explanation": "Approche à deux niveaux : le noyau fait un contrôle d'accès grossier (UID, groupes, rwx), simple et vérifiable, et ne connaît pas les règles métier. Les règles fines sont déléguées à de petits programmes privilégiés bien délimités (passwd, sudo, mount)."
            },
            {
              "text": "Les programmes privilégiés s'exécutent plus vite que le code noyau",
              "explanation": "La vitesse n'est pas l'argument : c'est la simplicité et la robustesse du noyau qui motivent la délégation."
            },
            {
              "text": "Le noyau ne peut pas écrire dans /etc/shadow sans l'aide de passwd",
              "explanation": "Le noyau n'a pas besoin de passwd pour écrire; la question porte sur l'endroit où l'on encode la règle fine, pas sur la capacité d'écrire."
            }
          ],
          "answer": 1,
          "explanation": "Approche à deux niveaux : le noyau fait un contrôle d'accès grossier (UID, groupes, rwx), simple et vérifiable, et ne connaît pas les règles métier. Les règles fines sont déléguées à de petits programmes privilégiés bien délimités (passwd, sudo, mount).",
          "concept": "Programmes privilégiés",
          "source": "Quiz 3, diapositive 36"
        },
        {
          "id": "ceg4799_quiz3_q08",
          "question": "« ls -l prog » affiche « -rwsr-xr-x 1 bob staff … prog ». L'utilisateur alice lance prog, qui ouvre un fichier. Avec quels droits le noyau contrôle-t-il cet accès ?",
          "options": [
            {
              "text": "Ceux d'alice, qui a lancé le programme",
              "explanation": "alice reste le RUID, mais le contrôle d'accès se fait sur l'EUID, qui est celui de bob."
            },
            {
              "text": "Ceux du groupe staff, groupe du fichier",
              "explanation": "Le « s » est sur le triplet du propriétaire (Set-UID), pas sur celui du groupe : aucun changement de groupe n'a lieu."
            },
            {
              "text": "Ceux de bob, propriétaire du programme",
              "explanation": "Un programme Set-UID s'exécute avec les droits de son propriétaire, pas de celui qui le lance. Le « s » à la place du x du propriétaire active Set-UID : l'EUID devient celui de bob. Set-UID n'implique pas root : l'exemple deposer_note, appartenant à registraire, fonctionne ainsi."
            },
            {
              "text": "Ceux de root, car le bit « s » est actif",
              "explanation": "Le bit « s » donne les droits du propriétaire; ici le propriétaire est bob, pas root."
            }
          ],
          "answer": 2,
          "explanation": "Un programme Set-UID s'exécute avec les droits de son propriétaire, pas de celui qui le lance. Le « s » à la place du x du propriétaire active Set-UID : l'EUID devient celui de bob. Set-UID n'implique pas root : l'exemple deposer_note, appartenant à registraire, fonctionne ainsi.",
          "concept": "Programmes privilégiés",
          "source": "Quiz 3, diapositives 37, 38, 46"
        },
        {
          "id": "ceg4799_quiz3_q09",
          "question": "L'utilisateur seed (UID 1000) lance /usr/bin/passwd, qui est Set-UID root. Pendant l'exécution, quelles sont les valeurs du RUID et de l'EUID ?",
          "options": [
            {
              "text": "RUID = 0 et EUID = 0",
              "explanation": "Le RUID ne change pas : il reste celui du lanceur, seed."
            },
            {
              "text": "RUID = 1000 et EUID = 1000",
              "explanation": "C'est le cas d'un programme ordinaire (RUID = EUID); un Set-UID root élève l'EUID."
            },
            {
              "text": "RUID = 1000 et EUID = 0",
              "explanation": "Le RUID identifie qui a lancé le processus (seed, 1000). Pour un Set-UID root, l'EUID devient celui du propriétaire, root (0). C'est l'EUID qui ouvre les portes : Set-UID, c'est faire passer l'EUID à root."
            },
            {
              "text": "RUID = 0 et EUID = 1000",
              "explanation": "Les valeurs sont inversées : le lanceur donne le RUID, le propriétaire donne l'EUID."
            }
          ],
          "answer": 2,
          "explanation": "Le RUID identifie qui a lancé le processus (seed, 1000). Pour un Set-UID root, l'EUID devient celui du propriétaire, root (0). C'est l'EUID qui ouvre les portes : Set-UID, c'est faire passer l'EUID à root.",
          "concept": "Programmes privilégiés",
          "source": "Quiz 3, diapositive 38"
        },
        {
          "id": "ceg4799_quiz3_q10",
          "question": "Quelle séquence de commandes transforme correctement monprog en programme Set-UID root ?",
          "options": [
            {
              "text": "sudo chmod g+s monprog, puis sudo chown root monprog",
              "explanation": "g+s touche le triplet du groupe (Set-GID), pas le bit Set-UID du propriétaire."
            },
            {
              "text": "sudo chown root monprog, puis sudo chmod u+s monprog",
              "explanation": "Les trois étapes du cours : 1) propriétaire root (chown root), 2) bit Set-UID (chmod u+s), 3) vérifier avec ls -l, qui doit afficher -rwsr-xr-x."
            },
            {
              "text": "sudo setcap root+ep monprog, puis chmod u+x monprog",
              "explanation": "setcap attribue des capacités POSIX (comme cap_net_raw), pas une identité « root »; u+x n'active pas Set-UID."
            },
            {
              "text": "sudo chmod u+s monprog, puis sudo chown seed monprog",
              "explanation": "Le propriétaire final serait seed : le programme s'exécuterait avec les droits de seed, pas ceux de root."
            }
          ],
          "answer": 1,
          "explanation": "Les trois étapes du cours : 1) propriétaire root (chown root), 2) bit Set-UID (chmod u+s), 3) vérifier avec ls -l, qui doit afficher -rwsr-xr-x.",
          "concept": "Programmes privilégiés",
          "source": "Quiz 3, diapositive 39"
        },
        {
          "id": "ceg4799_quiz3_q11",
          "question": "Dans l'analogie de Superman, à quoi correspond « la faille » de la combinaison 2.0 ?",
          "options": [
            {
              "text": "Une capacité POSIX accordée en entier à un simple utilisateur",
              "explanation": "L'analogie ne porte pas sur les capacités POSIX; elle oppose donner le pouvoir à une personne ou à un programme."
            },
            {
              "text": "Un service privilégié qui reçoit les requêtes des utilisateurs",
              "explanation": "L'approche service est une autre architecture (section 6), absente de l'analogie de Superman."
            },
            {
              "text": "Un utilisateur à qui l'on donne root directement par sudo su",
              "explanation": "C'est le premier volet, « donner le pouvoir » directement à la personne, sans aucune limite."
            },
            {
              "text": "Un défaut de la tâche préprogrammée qui détourne le Set-UID",
              "explanation": "La combinaison 2.0 est le programme Set-UID : la puce n'exécute qu'une tâche préprogrammée, le pouvoir est encadré par le code. La faille : si cette tâche a un défaut, l'utilisateur « en sort », c'est-à-dire détourne le programme Set-UID."
            }
          ],
          "answer": 3,
          "explanation": "La combinaison 2.0 est le programme Set-UID : la puce n'exécute qu'une tâche préprogrammée, le pouvoir est encadré par le code. La faille : si cette tâche a un défaut, l'utilisateur « en sort », c'est-à-dire détourne le programme Set-UID.",
          "concept": "Programmes privilégiés",
          "source": "Quiz 3, diapositive 40"
        },
        {
          "id": "ceg4799_quiz3_q12",
          "question": "Un programme Set-UID root écrit son journal dans /tmp/app.log. Un attaquant y place au préalable un lien symbolique vers /etc/passwd. Quelle surface d'attaque est exploitée ?",
          "options": [
            {
              "text": "Les entrées utilisateur",
              "explanation": "Les entrées utilisateur désignent les arguments, fichiers fournis et saisies; ici, l'utilisateur ne transmet rien au programme."
            },
            {
              "text": "Les variables d'environnement",
              "explanation": "Les variables d'environnement sont PATH, LD_PRELOAD, IFS…; aucune n'est en jeu dans cette attaque."
            },
            {
              "text": "Les programmes externes",
              "explanation": "Les programmes externes concernent system(), exec() et les bibliothèques; aucun appel externe n'est détourné ici."
            },
            {
              "text": "Les entrées système",
              "explanation": "Les fichiers et les liens symboliques relèvent des entrées système. L'attaquant ne saisit rien directement, mais il contrôle l'environnement du fichier : le programme, avec l'EUID root, écrit là où l'utilisateur ne pourrait pas."
            }
          ],
          "answer": 3,
          "explanation": "Les fichiers et les liens symboliques relèvent des entrées système. L'attaquant ne saisit rien directement, mais il contrôle l'environnement du fichier : le programme, avec l'EUID root, écrit là où l'utilisateur ne pourrait pas.",
          "concept": "Programmes privilégiés",
          "source": "Quiz 3, diapositives 41, 43"
        },
        {
          "id": "ceg4799_quiz3_q13",
          "question": "chsh, programme Set-UID, écrit dans /etc/passwd le shell choisi par l'utilisateur. Un attaquant fournit une valeur qui ajoute une ligne entière avec l'UID 0. Quel défaut est exploité ?",
          "options": [
            {
              "text": "Condition de course : le fichier change entre deux accès",
              "explanation": "Aucune fenêtre entre vérification et utilisation n'est exploitée : l'attaque passe par le contenu de l'entrée."
            },
            {
              "text": "Débordement de tampon : l'adresse de retour est écrasée",
              "explanation": "Aucune entrée trop longue n'est en jeu : la valeur est acceptée telle quelle et écrite dans le fichier."
            },
            {
              "text": "Chaîne de format : printf lit puis écrit dans la mémoire",
              "explanation": "Aucun printf sans format n'est exploité : la donnée est injectée dans un fichier, pas interprétée comme format."
            },
            {
              "text": "Entrée non assainie : aucune validation du contenu fourni",
              "explanation": "C'est l'exemple « entrée non assainie » du cours : chsh écrit /etc/passwd sans validation, ce qui permet d'injecter une ligne root. Le programme fait confiance à une entrée sans en vérifier le contenu."
            }
          ],
          "answer": 3,
          "explanation": "C'est l'exemple « entrée non assainie » du cours : chsh écrit /etc/passwd sans validation, ce qui permet d'injecter une ligne root. Le programme fait confiance à une entrée sans en vérifier le contenu.",
          "concept": "Programmes privilégiés",
          "source": "Quiz 3, diapositive 42"
        },
        {
          "id": "ceg4799_quiz3_q14",
          "question": "Un programme Set-UID root contient l'instruction « printf(argv[1]); ». Quelle vulnérabilité un attaquant peut-il exploiter ?",
          "options": [
            {
              "text": "Un débordement de tampon qui écrase l'adresse de retour de pile",
              "explanation": "Le débordement suppose une entrée plus longue qu'un tampon; aucune copie dans un tampon n'apparaît ici."
            },
            {
              "text": "Un détournement de fonction de bibliothèque par la variable LD_PRELOAD",
              "explanation": "LD_PRELOAD est ignorée pour un Set-UID (EUID ≠ RUID) et n'a rien à voir avec l'appel printf(argv[1])."
            },
            {
              "text": "Une chaîne de format lui permettant de lire et écrire la mémoire",
              "explanation": "printf(entree) sans format fixe est la vulnérabilité de chaîne de format : l'argument contrôlé par l'attaquant est interprété comme format, ce qui permet de lire et d'écrire la mémoire (détaillé au chapitre 6)."
            },
            {
              "text": "Une injection de commande exécutée par l'intermédiaire de /bin/sh",
              "explanation": "printf n'appelle aucun shell; l'injection de commande concerne system()."
            }
          ],
          "answer": 2,
          "explanation": "printf(entree) sans format fixe est la vulnérabilité de chaîne de format : l'argument contrôlé par l'attaquant est interprété comme format, ce qui permet de lire et d'écrire la mémoire (détaillé au chapitre 6).",
          "concept": "Programmes privilégiés",
          "source": "Quiz 3, diapositives 42, 54"
        },
        {
          "id": "ceg4799_quiz3_q15",
          "question": "Un Set-UID root vérifie que /tmp/rapport appartient bien à l'utilisateur, puis l'ouvre en écriture. Entre les deux, l'attaquant le remplace par un lien vers /etc/shadow. Quel est ce type d'attaque ?",
          "options": [
            {
              "text": "Une injection par PATH qui fait exécuter un faux programme root",
              "explanation": "Aucun programme n'est recherché dans PATH : l'attaque vise la cible de l'écriture."
            },
            {
              "text": "Un débordement de tampon provoqué par un nom de fichier trop long",
              "explanation": "Le nom du fichier n'a rien d'anormal; c'est l'objet désigné qui change."
            },
            {
              "text": "Une fuite de capacités par un descripteur resté ouvert au shell",
              "explanation": "La fuite de capacités concerne un descripteur privilégié qui survit à la baisse de privilège, pas un fichier remplacé entre deux opérations."
            },
            {
              "text": "Une condition de course TOCTTOU entre vérification et usage",
              "explanation": "TOCTTOU (Time Of Check To Time Of Use) : le programme vérifie un fichier, puis l'utilise; entre les deux, l'attaquant remplace le fichier par un lien vers /etc/shadow. Le programme écrit alors avec l'EUID root dans un fichier privilégié."
            }
          ],
          "answer": 3,
          "explanation": "TOCTTOU (Time Of Check To Time Of Use) : le programme vérifie un fichier, puis l'utilise; entre les deux, l'attaquant remplace le fichier par un lien vers /etc/shadow. Le programme écrit alors avec l'EUID root dans un fichier privilégié.",
          "concept": "Programmes privilégiés",
          "source": "Quiz 3, diapositive 43"
        },
        {
          "id": "ceg4799_quiz3_q16",
          "question": "Un Set-UID root ouvre /etc/zzz, appelle setuid(getuid()), puis lance un shell pour l'utilisateur. Quel correctif empêche la fuite de capacités ?",
          "options": [
            {
              "text": "Abaisser le privilège avant de fermer le descripteur de fichier",
              "explanation": "C'est l'ordre fautif décrit par le cours : le descripteur est encore ouvert quand le shell est lancé."
            },
            {
              "text": "Fermer le descripteur de fichier avant d'abaisser le privilège",
              "explanation": "Le correctif du cours : fermer le descripteur AVANT d'abaisser le privilège. Une ressource privilégiée ne doit jamais survivre à la baisse de privilège, sinon elle fuit vers du code non fiable (exemple réel : su)."
            },
            {
              "text": "Ouvrir le fichier en lecture seule plutôt qu'en lecture et écriture",
              "explanation": "Un descripteur en lecture seule fuirait quand même : l'utilisateur pourrait lire un fichier privilégié."
            },
            {
              "text": "Remplacer setuid() par seteuid() au moment d'abaisser le privilège",
              "explanation": "seteuid() n'abaisse le privilège que temporairement; le descripteur resterait ouvert et le privilège pourrait même être repris."
            }
          ],
          "answer": 1,
          "explanation": "Le correctif du cours : fermer le descripteur AVANT d'abaisser le privilège. Une ressource privilégiée ne doit jamais survivre à la baisse de privilège, sinon elle fuit vers du code non fiable (exemple réel : su).",
          "concept": "Programmes privilégiés",
          "source": "Quiz 3, diapositives 44, 62"
        },
        {
          "id": "ceg4799_quiz3_q17",
          "question": "Dans ce même scénario de fuite, après setuid(getuid()) l'EUID est celui de l'utilisateur. Pourquoi le shell lancé peut-il encore écrire dans /etc/zzz ?",
          "options": [
            {
              "text": "Le shell hérite de l'EUID root du processus qui l'a lancé",
              "explanation": "Après setuid(getuid()), l'EUID n'est plus root : le shell n'hérite pas de root, seulement du descripteur ouvert."
            },
            {
              "text": "Le noyau revérifie l'accès avec le RUID à chaque écriture",
              "explanation": "Si le noyau revérifiait à chaque écriture, l'accès serait refusé; c'est précisément parce que le descripteur reste valide que la fuite existe."
            },
            {
              "text": "Le descripteur obtenu en root reste valide après la baisse",
              "explanation": "Le descripteur a été créé pendant que le processus était privilégié; il reste ouvert et exploitable après la baisse. Le shell en hérite : un descripteur oublié est un privilège qui fuit vers du code non fiable."
            },
            {
              "text": "setuid() n'abaisse le privilège que de manière temporaire",
              "explanation": "setuid() supprime le privilège définitivement; c'est seteuid() qui l'abaisse temporairement."
            }
          ],
          "answer": 2,
          "explanation": "Le descripteur a été créé pendant que le processus était privilégié; il reste ouvert et exploitable après la baisse. Le shell en hérite : un descripteur oublié est un privilège qui fuit vers du code non fiable.",
          "concept": "Programmes privilégiés",
          "source": "Quiz 3, diapositives 44, 62"
        },
        {
          "id": "ceg4799_quiz3_q18",
          "question": "Sous OS X 10.10 (2015), comment un utilisateur ordinaire parvenait-il à faire écrire un fichier système par le système lui-même ?",
          "options": [
            {
              "text": "En créant un lien symbolique vers le fichier journal du système",
              "explanation": "L'attaque par lien symbolique est une autre surface (entrées système), pas la faille OS X 10.10."
            },
            {
              "text": "En fixant DYLD_PRINT_TO_FILE puis en lançant un Set-UID root",
              "explanation": "L'éditeur de liens dynamique avait ajouté DYLD_PRINT_TO_FILE, qui laissait ouvrir n'importe quel fichier avec le privilège du processus. Un programme Set-UID root pouvait donc écrire dans un fichier système via cette variable."
            },
            {
              "text": "En fixant LD_PRELOAD puis en lançant un programme Set-UID root",
              "explanation": "LD_PRELOAD est justement écartée par le chargeur pour un Set-UID; la faille venait d'une nouvelle variable, non couverte."
            },
            {
              "text": "En injectant une ligne root dans /etc/passwd au moyen de chsh",
              "explanation": "C'est l'exemple de chsh (entrée non assainie), sans lien avec l'étude de cas OS X."
            }
          ],
          "answer": 1,
          "explanation": "L'éditeur de liens dynamique avait ajouté DYLD_PRINT_TO_FILE, qui laissait ouvrir n'importe quel fichier avec le privilège du processus. Un programme Set-UID root pouvait donc écrire dans un fichier système via cette variable.",
          "concept": "Programmes privilégiés",
          "source": "Quiz 3, diapositive 45"
        },
        {
          "id": "ceg4799_quiz3_q19",
          "question": "Pourquoi la contre-mesure du chargeur, qui écarte LD_PRELOAD et LD_LIBRARY_PATH pour un Set-UID, n'a-t-elle pas empêché la faille DYLD_PRINT_TO_FILE ?",
          "options": [
            {
              "text": "Elle ne protège que les programmes lancés directement par root",
              "explanation": "Elle vise les programmes privilégiés lancés par un utilisateur ordinaire, pas ceux lancés par root."
            },
            {
              "text": "Elle ne s'applique qu'aux exécutables liés de façon statique",
              "explanation": "Un exécutable statique n'a pas d'éditeur de liens à l'exécution : la contre-mesure concerne la liaison dynamique."
            },
            {
              "text": "Elle ne s'active que lorsque l'EUID est égal au RUID du processus",
              "explanation": "C'est l'inverse : elle s'active quand EUID ≠ RUID, soit le cas d'un Set-UID lancé par un utilisateur ordinaire."
            },
            {
              "text": "Elle ne couvre que les variables déjà reconnues comme dangereuses",
              "explanation": "La défense est intégrée, mais elle ne couvre que ce cas précis : les variables LD_* connues. Toute nouvelle variable de chargeur doit être analysée pour le cas Set-UID, ce que DYLD_PRINT_TO_FILE n'avait pas été."
            }
          ],
          "answer": 3,
          "explanation": "La défense est intégrée, mais elle ne couvre que ce cas précis : les variables LD_* connues. Toute nouvelle variable de chargeur doit être analysée pour le cas Set-UID, ce que DYLD_PRINT_TO_FILE n'avait pas été.",
          "concept": "Programmes privilégiés",
          "source": "Quiz 3, diapositives 45, 54"
        },
        {
          "id": "ceg4799_quiz3_q20",
          "question": "deposer_note appartient à registraire et est Set-UID. Un professeur le lance pour déposer une note. Quelle vérification incombe au programme lui-même, et non au noyau ?",
          "options": [
            {
              "text": "Vérifier que le fichier des notes appartient à registraire",
              "explanation": "La propriété du fichier est une donnée que le noyau utilise lui-même pour son contrôle d'accès grossier."
            },
            {
              "text": "Confirmer que le bit Set-UID est bien posé sur le binaire",
              "explanation": "Le bit Set-UID est appliqué par le noyau au lancement; le programme n'a pas à le contrôler."
            },
            {
              "text": "N'écrire que la note du professeur connecté, rien d'autre",
              "explanation": "Le noyau accorde l'écriture parce que l'EUID devient registraire (contrôle grossier). La règle fine, « n'écrire QUE la note du professeur connecté », doit être encodée et vérifiée par le programme privilégié."
            },
            {
              "text": "Autoriser l'écriture sur le fichier grâce à l'EUID obtenu",
              "explanation": "C'est précisément le rôle du noyau : il compare l'EUID aux permissions du fichier."
            }
          ],
          "answer": 2,
          "explanation": "Le noyau accorde l'écriture parce que l'EUID devient registraire (contrôle grossier). La règle fine, « n'écrire QUE la note du professeur connecté », doit être encodée et vérifiée par le programme privilégié.",
          "concept": "Programmes privilégiés",
          "source": "Quiz 3, diapositives 36, 46"
        },
        {
          "id": "ceg4799_quiz3_q21",
          "question": "Un programme privilégié doit lancer un utilitaire en ne lui transmettant que des variables d'environnement sûres. Quel appel lui permet ce choix ?",
          "options": [
            {
              "text": "fork(), qui crée l'enfant avec un environnement entièrement vide",
              "explanation": "fork() fait l'inverse : l'enfant hérite automatiquement de tout l'environnement du parent."
            },
            {
              "text": "execvp(), qui cherche le programme dans un PATH jugé sûr",
              "explanation": "Les variantes en « p » consultent PATH, qui est contrôlé par le lanceur : c'est un risque, pas une garantie."
            },
            {
              "text": "execve(), qui reçoit l'environnement en troisième argument",
              "explanation": "Avec execve(), le nouvel environnement est passé EXPLICITEMENT en 3e argument (envp) : le programme choisit ce qu'il transmet, ou repart de zéro. C'est le point où l'on nettoie l'environnement avant de lancer un programme."
            },
            {
              "text": "system(), qui transmet au shell un environnement déjà assaini",
              "explanation": "system() lance /bin/sh -c, qui obéit à l'environnement hérité (PATH, IFS…) : rien n'est assaini."
            }
          ],
          "answer": 2,
          "explanation": "Avec execve(), le nouvel environnement est passé EXPLICITEMENT en 3e argument (envp) : le programme choisit ce qu'il transmet, ou repart de zéro. C'est le point où l'on nettoie l'environnement avant de lancer un programme.",
          "concept": "Programmes privilégiés",
          "source": "Quiz 3, diapositives 51, 55, 58"
        },
        {
          "id": "ceg4799_quiz3_q22",
          "question": "On exécute « export LD_PRELOAD=./ma_lib.so » puis « ./programme », programme ordinaire (non Set-UID) qui appelle sleep(5). ma_lib.so redéfinit sleep() par un printf. Que se passe-t-il ?",
          "options": [
            {
              "text": "Le programme affiche « fonction detournee ! » sans attendre",
              "explanation": "LD_PRELOAD force l'éditeur de liens à chercher d'abord dans nos bibliothèques. Sur un programme ordinaire, la variable est respectée : notre sleep() remplace celui de la libc, affiche le message et n'attend pas."
            },
            {
              "text": "Le programme attend 5 secondes, puis affiche le même message",
              "explanation": "Notre version remplace sleep() entièrement : elle ne fait qu'afficher, sans aucune attente."
            },
            {
              "text": "Le programme attend 5 secondes, puis se termine normalement",
              "explanation": "C'est le comportement de la vraie fonction sleep(), qui n'est pas appelée ici."
            },
            {
              "text": "Le chargeur refuse de charger ma_lib.so et arrête le programme",
              "explanation": "Le chargeur n'écarte LD_PRELOAD que pour un programme privilégié (EUID ≠ RUID); ici, il la respecte."
            }
          ],
          "answer": 0,
          "explanation": "LD_PRELOAD force l'éditeur de liens à chercher d'abord dans nos bibliothèques. Sur un programme ordinaire, la variable est respectée : notre sleep() remplace celui de la libc, affiche le message et n'attend pas.",
          "concept": "Programmes privilégiés",
          "source": "Quiz 3, diapositives 53, 54"
        },
        {
          "id": "ceg4799_quiz3_q23",
          "question": "Même expérience, mais ./programme est maintenant Set-UID root et lancé par seed avec LD_PRELOAD=./ma_lib.so. Quel est le résultat ?",
          "options": [
            {
              "text": "La version de ma_lib.so s'exécute avec l'EUID root",
              "explanation": "C'est le scénario fatal que la contre-mesure du chargeur empêche."
            },
            {
              "text": "Le programme échoue au lancement avec une erreur",
              "explanation": "Le programme ne plante pas : le chargeur écarte simplement la variable et continue."
            },
            {
              "text": "La version de ma_lib.so s'exécute avec l'EUID seed",
              "explanation": "L'EUID n'est pas abaissé et la bibliothèque n'est pas chargée : la variable est ignorée."
            },
            {
              "text": "La vraie fonction sleep() de la libc est appelée",
              "explanation": "Pour un Set-UID, l'éditeur de liens IGNORE LD_PRELOAD et LD_LIBRARY_PATH quand EUID ≠ RUID (ici EUID = 0, RUID = seed). L'injection échoue : la vraie fonction est appelée."
            }
          ],
          "answer": 3,
          "explanation": "Pour un Set-UID, l'éditeur de liens IGNORE LD_PRELOAD et LD_LIBRARY_PATH quand EUID ≠ RUID (ici EUID = 0, RUID = seed). L'injection échoue : la vraie fonction est appelée.",
          "concept": "Programmes privilégiés",
          "source": "Quiz 3, diapositives 53, 54"
        },
        {
          "id": "ceg4799_quiz3_q24",
          "question": "Le même programme Set-UID root est cette fois lancé par root lui-même, avec LD_PRELOAD=./ma_lib.so. Que se passe-t-il ?",
          "options": [
            {
              "text": "La fonction détournée est appelée, car EUID = RUID",
              "explanation": "La condition de la contre-mesure est EUID ≠ RUID, et non la présence du bit Set-UID. Lancé par root, le processus a RUID = EUID = 0 : aucune élévation n'a lieu, le chargeur respecte LD_PRELOAD et la fonction détournée est appelée."
            },
            {
              "text": "La vraie fonction est appelée, car le bit « s » est actif",
              "explanation": "Le bit « s » seul ne déclenche pas la contre-mesure; c'est la différence entre EUID et RUID qui compte."
            },
            {
              "text": "La vraie fonction est appelée, car root ignore LD_PRELOAD",
              "explanation": "Rien n'indique que root ignore LD_PRELOAD : la variable est ignorée seulement quand EUID ≠ RUID."
            },
            {
              "text": "Le chargeur refuse de lancer le programme par sécurité",
              "explanation": "Le chargeur ne refuse jamais de lancer le programme; au pire, il écarte les variables LD_* dangereuses."
            }
          ],
          "answer": 0,
          "explanation": "La condition de la contre-mesure est EUID ≠ RUID, et non la présence du bit Set-UID. Lancé par root, le processus a RUID = EUID = 0 : aucune élévation n'a lieu, le chargeur respecte LD_PRELOAD et la fonction détournée est appelée.",
          "concept": "Programmes privilégiés",
          "source": "Quiz 3, diapositives 38, 54"
        },
        {
          "id": "ceg4799_quiz3_q25",
          "question": "Un Set-UID root exécute system(\"cat monfichier\"). L'attaquant tape « export PATH=/tmp:$PATH » et place dans /tmp/cat un script exécutable contenant /bin/sh. Que se passe-t-il ?",
          "options": [
            {
              "text": "Le faux cat situé dans /tmp est lancé et donne un shell root",
              "explanation": "system() passe par /bin/sh, qui cherche « cat » dans PATH. /tmp étant en tête, le faux cat est exécuté avec le privilège du programme : shell root. Deux fautes se cumulent : chemin non absolu et appel qui passe par le shell."
            },
            {
              "text": "Le vrai /bin/cat est lancé, car PATH est ignoré en root",
              "explanation": "PATH n'est pas ignoré : le shell lancé par system() obéit à l'environnement hérité."
            },
            {
              "text": "Le shell refuse le PATH modifié puisque EUID ≠ RUID",
              "explanation": "La protection EUID ≠ RUID du chargeur ne concerne que les variables LD_*, pas PATH."
            },
            {
              "text": "Le faux cat est lancé, mais avec les droits de l'attaquant",
              "explanation": "Le faux cat s'exécute dans le processus privilégié, donc avec le privilège root du programme."
            }
          ],
          "answer": 0,
          "explanation": "system() passe par /bin/sh, qui cherche « cat » dans PATH. /tmp étant en tête, le faux cat est exécuté avec le privilège du programme : shell root. Deux fautes se cumulent : chemin non absolu et appel qui passe par le shell.",
          "concept": "Programmes privilégiés",
          "source": "Quiz 3, diapositives 55, 56"
        },
        {
          "id": "ceg4799_quiz3_q26",
          "question": "Un Set-UID root exécute system() sur la chaîne « /bin/cat » suivie de argv[1]. Le chemin est absolu. L'attaquant passe « notes.txt;/bin/sh ». Quel est le résultat ?",
          "options": [
            {
              "text": "cat reçoit « notes.txt;/bin/sh » comme simple nom de fichier",
              "explanation": "Ce serait le cas avec execve(), qui ne passe pas par un shell; avec system(), le « ; » est interprété."
            },
            {
              "text": "Le shell interprète « ; » et lance /bin/sh en tant que root",
              "explanation": "system() ouvre un shell, et le shell interprète les métacaractères ( ; | & ). « ; » sépare deux commandes : après cat, /bin/sh est lancé avec le privilège du programme. La donnée devient du code."
            },
            {
              "text": "Le chemin absolu /bin/cat empêche toute injection de commande",
              "explanation": "Le chemin absolu bloque le détournement par PATH, mais pas les métacaractères interprétés par le shell."
            },
            {
              "text": "Le chargeur ignore l'argument parce que EUID diffère du RUID",
              "explanation": "Le chargeur n'agit que sur les variables LD_*; il ne filtre pas les arguments du programme."
            }
          ],
          "answer": 1,
          "explanation": "system() ouvre un shell, et le shell interprète les métacaractères ( ; | & ). « ; » sépare deux commandes : après cat, /bin/sh est lancé avec le privilège du programme. La donnée devient du code.",
          "concept": "Programmes privilégiés",
          "source": "Quiz 3, diapositives 55, 56, 57"
        },
        {
          "id": "ceg4799_quiz3_q27",
          "question": "Dans un programme Set-UID root, lequel de ces appels respecte la règle « chemin absolu et pas de shell » ?",
          "options": [
            {
              "text": "execve(\"/bin/cat\", argv, envp);",
              "explanation": "execve() lance directement le programme, sans shell, avec un chemin absolu fixé (/bin/cat) et un environnement explicite (envp). Le code et les données sont séparés."
            },
            {
              "text": "system(\"/bin/cat f\");",
              "explanation": "Le chemin est absolu, mais system() passe par /bin/sh -c, qui interprète métacaractères et variables."
            },
            {
              "text": "execvp(\"cat\", argv);",
              "explanation": "execvp est une variante en « p » : elle cherche « cat » dans PATH, d'où une attaque possible."
            },
            {
              "text": "execlp(\"cat\", \"cat\", f, NULL);",
              "explanation": "execlp est aussi une variante en « p » : même recherche dans PATH, même risque."
            }
          ],
          "answer": 0,
          "explanation": "execve() lance directement le programme, sans shell, avec un chemin absolu fixé (/bin/cat) et un environnement explicite (envp). Le code et les données sont séparés.",
          "concept": "Programmes privilégiés",
          "source": "Quiz 3, diapositives 57, 58"
        },
        {
          "id": "ceg4799_quiz3_q28",
          "question": "Débordement de tampon, injection SQL, XSS et injection par system() : quelle cause unique le cours attribue-t-il à ces quatre attaques ?",
          "options": [
            {
              "text": "L'attaquant contrôle une variable d'environnement LD_*",
              "explanation": "Les variables LD_* ne concernent que le chargeur dynamique, pas SQL ni XSS."
            },
            {
              "text": "La frontière entre données et code n'a pas été tenue",
              "explanation": "Principe d'isolement : ne jamais laisser une donnée devenir du code. Dans system() la donnée devient une commande shell, en SQL une requête, en XSS du script, dans un débordement du code exécuté. Quatre attaques, une seule cause."
            },
            {
              "text": "Le programme vulnérable s'exécute avec l'EUID de root",
              "explanation": "Une injection SQL ou un XSS n'exigent pas de privilège root : le privilège aggrave les dégâts, il n'est pas la cause commune."
            },
            {
              "text": "Un descripteur de fichier privilégié n'a pas été fermé",
              "explanation": "C'est la cause de la fuite de capacités, une autre catégorie de faille."
            }
          ],
          "answer": 1,
          "explanation": "Principe d'isolement : ne jamais laisser une donnée devenir du code. Dans system() la donnée devient une commande shell, en SQL une requête, en XSS du script, dans un débordement du code exécuté. Quatre attaques, une seule cause.",
          "concept": "Programmes privilégiés",
          "source": "Quiz 3, diapositive 61"
        },
        {
          "id": "ceg4799_quiz3_q29",
          "question": "Un programme Set-UID a besoin de root au début et à la fin, mais pas au milieu, où il traite des entrées de l'utilisateur. Que faut-il faire pendant cette phase ?",
          "options": [
            {
              "text": "Utiliser setcap pour retirer au binaire toutes ses capacités",
              "explanation": "setcap modifie le fichier sur disque, pas le processus en cours d'exécution."
            },
            {
              "text": "Appeler seteuid() pour suspendre le privilège temporairement",
              "explanation": "Moindre privilège, volet « désactiver » : seteuid() abaisse temporairement le privilège pendant les parties non critiques, ce qui permet de le reprendre pour la phase finale."
            },
            {
              "text": "Appeler setuid() pour abandonner le privilège définitivement",
              "explanation": "setuid() supprime le privilège définitivement : il serait impossible de le reprendre pour la fin."
            },
            {
              "text": "Utiliser chmod u-s pour retirer le bit Set-UID du binaire",
              "explanation": "chmod u-s modifie aussi le fichier, pas le processus déjà lancé; et le programme ne serait plus privilégié."
            }
          ],
          "answer": 1,
          "explanation": "Moindre privilège, volet « désactiver » : seteuid() abaisse temporairement le privilège pendant les parties non critiques, ce qui permet de le reprendre pour la phase finale.",
          "concept": "Programmes privilégiés",
          "source": "Quiz 3, diapositive 62"
        },
        {
          "id": "ceg4799_quiz3_q30",
          "question": "Pourquoi l'approche service (démon privilégié qui reçoit des requêtes) réduit-elle la surface d'attaque par rapport à l'approche Set-UID ?",
          "options": [
            {
              "text": "Le service s'exécute sans aucun privilège sur tout le système",
              "explanation": "Le service est bien privilégié; c'est l'absence d'héritage qui réduit la surface, pas l'absence de privilège."
            },
            {
              "text": "Le service est lancé par l'utilisateur avec son propre EUID",
              "explanation": "Le service n'est pas lancé par l'utilisateur : il tourne déjà; l'utilisateur ne fait que lui envoyer une requête."
            },
            {
              "text": "Le service n'hérite pas de l'environnement de l'utilisateur",
              "explanation": "Avec Set-UID, l'utilisateur lance lui-même le programme, qui HÉRITE de son environnement : une surface d'attaque. Avec un service, le processus privilégié tourne déjà et reçoit seulement une requête : l'environnement de l'utilisateur n'est pas hérité."
            },
            {
              "text": "Le service filtre les variables LD_* de l'utilisateur appelant",
              "explanation": "Le service n'a rien à filtrer : il ne reçoit pas l'environnement de l'utilisateur."
            }
          ],
          "answer": 2,
          "explanation": "Avec Set-UID, l'utilisateur lance lui-même le programme, qui HÉRITE de son environnement : une surface d'attaque. Avec un service, le processus privilégié tourne déjà et reçoit seulement une requête : l'environnement de l'utilisateur n'est pas hérité.",
          "concept": "Programmes privilégiés",
          "source": "Quiz 3, diapositive 63"
        }
      ]
    },
    "quiz4": {
      "title": "Mener une attaque par débordement de tampon",
      "label": "Quiz 4 · Chapitre 4",
      "questions": [
        {
          "id": "ceg4799_quiz4_q01",
          "question": "Programme vulnérable stack.c : la fonction foo copie une entrée contrôlée par l'attaquant dans char buffer[100] via strcpy. Pour mener l'attaque, quelle est la toute première mesure à obtenir au débogueur avant de fabriquer le fichier ?",
          "options": [
            {
              "text": "l'adresse de la fonction system() dans la libc chargée en mémoire",
              "explanation": "L'adresse de system() ne sert qu'à une attaque return-to-libc (chapitre 5), pas à l'injection de shellcode visée ici. Ce n'est ni la première mesure, ni celle qu'exige cette attaque."
            },
            {
              "text": "le nombre total d'octets que le programme lit dans le fichier",
              "explanation": "Le nombre d'octets lus est un plafond pratique, mais il ne dit pas où tombe l'adresse de retour : la taille sans la géométrie du cadre ne permet pas de construire la charge."
            },
            {
              "text": "l'adresse de base du tampon et celle du %ebp sauvegardé",
              "explanation": "C'est la mesure fondatrice : sans la base du tampon et la position du %ebp sauvegardé, on ne peut ni calculer le décalage jusqu'à l'adresse de retour, ni savoir où écrire l'adresse de saut dans le fichier. Toute la fabrication de la charge en dépend."
            },
            {
              "text": "la valeur du canari que le compilateur insère dans le cadre",
              "explanation": "Le binaire est compilé sans canari (contexte SEED). Chercher une valeur qui n'existe pas est un contresens, et ce ne serait de toute façon pas la première mesure de repérage."
            }
          ],
          "answer": 2,
          "explanation": "C'est la mesure fondatrice : sans la base du tampon et la position du %ebp sauvegardé, on ne peut ni calculer le décalage jusqu'à l'adresse de retour, ni savoir où écrire l'adresse de saut dans le fichier. Toute la fabrication de la charge en dépend.",
          "concept": "Reconnaissance au débogueur",
          "source": "Quiz 4, chapitre 4"
        },
        {
          "id": "ceg4799_quiz4_q02",
          "question": "Dans le programme vulnérable, foo copie l'entrée dans char buffer[100] par strcpy. Pour relever au débogueur l'adresse du tampon et celle du %ebp sauvegardé, où places-tu ton point d'arrêt ?",
          "options": [
            {
              "text": "dans foo, juste après la copie, tant que le cadre existe encore",
              "explanation": "Les adresses du tampon et du %ebp sauvegardé n'ont de sens que pendant la vie du cadre de foo. En s'arrêtant juste après strcpy, le cadre est entièrement construit et encore sur la pile : p &buffer et p $ebp donnent des valeurs valides et cohérentes."
            },
            {
              "text": "sur l'instruction ret de foo, une fois les locaux libérés",
              "explanation": "Sur ret, l'épilogue (leave) a déjà restauré %ebp et libéré les locaux. Le tampon n'est plus adressable de la même façon et $ebp ne pointe plus sur le cadre de foo : les relevés seraient faux."
            },
            {
              "text": "à l'entrée de main, bien avant l'ouverture du fichier d'entrée",
              "explanation": "À l'entrée de main, le cadre de foo n'existe pas encore : on ne peut pas lire l'adresse d'un tampon non alloué."
            },
            {
              "text": "dans la libc, à l'intérieur du code de strcpy elle-même",
              "explanation": "Entrer dans le code de strcpy éloigne du cadre de foo : on observerait le cadre de strcpy, pas celui qu'il faut mesurer."
            }
          ],
          "answer": 0,
          "explanation": "Les adresses du tampon et du %ebp sauvegardé n'ont de sens que pendant la vie du cadre de foo. En s'arrêtant juste après strcpy, le cadre est entièrement construit et encore sur la pile : p &buffer et p $ebp donnent des valeurs valides et cohérentes.",
          "concept": "Reconnaissance au débogueur",
          "source": "Quiz 4, chapitre 4"
        },
        {
          "id": "ceg4799_quiz4_q03",
          "question": "Au débogueur, pour la fonction vulnérable, p &buffer donne 0xbfffeb1c et p $ebp donne 0xbfffeb88. Quel est le décalage entre la base du tampon et le %ebp sauvegardé ?",
          "options": [
            {
              "text": "100 octets (0x64), soit la taille déclarée du tampon buffer",
              "explanation": "100 (0x64) est la taille déclarée du tampon, pas le décalage mesuré : cela ignore le bourrage d'alignement — l'erreur classique de supposer le tampon collé au %ebp."
            },
            {
              "text": "112 octets (0x70), jusqu'à l'adresse de retour comprise",
              "explanation": "112 (0x70) va trop loin : c'est à peu près la distance jusqu'à l'adresse de retour (voir Q5), pas jusqu'au %ebp sauvegardé."
            },
            {
              "text": "104 octets (0x68), le tampon plus les octets du canari",
              "explanation": "104 (0x68) suppose des octets de canari inexistants dans ce binaire et ne correspond pas à la soustraction des deux adresses."
            },
            {
              "text": "108 octets (0x6c), la différence 0xbfffeb88 − 0xbfffeb1c",
              "explanation": "Le décalage est la soustraction directe : 0xbfffeb88 − 0xbfffeb1c = 0x6c = 108. Cette distance réelle inclut les 100 octets du tampon plus le bourrage d'alignement inséré par le compilateur entre la fin du tampon et le %ebp sauvegardé."
            }
          ],
          "answer": 3,
          "explanation": "Le décalage est la soustraction directe : 0xbfffeb88 − 0xbfffeb1c = 0x6c = 108. Cette distance réelle inclut les 100 octets du tampon plus le bourrage d'alignement inséré par le compilateur entre la fin du tampon et le %ebp sauvegardé.",
          "concept": "Reconnaissance au débogueur",
          "source": "Quiz 4, chapitre 4"
        },
        {
          "id": "ceg4799_quiz4_q04",
          "question": "Dans un cadre d'appel 32 bits, une fois relevée au débogueur la valeur du %ebp sauvegardé, où se trouve l'adresse de retour du cadre ?",
          "options": [
            {
              "text": "à $ebp, qui contient déjà l'adresse de retour du cadre",
              "explanation": "$ebp contient le %ebp sauvegardé (pointeur de cadre de l'appelant), pas l'adresse de retour."
            },
            {
              "text": "à $ebp + 4, juste au-dessus du %ebp sauvegardé",
              "explanation": "Convention 32 bits : call empile l'adresse de retour, puis le prologue (push %ebp) empile l'ancien %ebp. L'adresse de retour est donc immédiatement au-dessus du %ebp sauvegardé, à $ebp + 4 (la pile croît vers les basses adresses, les cadres précédents sont aux adresses plus hautes)."
            },
            {
              "text": "à $ebp − 4, juste en dessous du %ebp sauvegardé",
              "explanation": "$ebp − 4 est en dessous, dans les variables locales du cadre courant — pas l'adresse de retour."
            },
            {
              "text": "à $ebp + 8, au niveau du premier argument empilé",
              "explanation": "$ebp + 8 pointe sur le premier argument de la fonction, une case trop loin au-dessus de l'adresse de retour."
            }
          ],
          "answer": 1,
          "explanation": "Convention 32 bits : call empile l'adresse de retour, puis le prologue (push %ebp) empile l'ancien %ebp. L'adresse de retour est donc immédiatement au-dessus du %ebp sauvegardé, à $ebp + 4 (la pile croît vers les basses adresses, les cadres précédents sont aux adresses plus hautes).",
          "concept": "Reconnaissance au débogueur",
          "source": "Quiz 4, chapitre 4"
        },
        {
          "id": "ceg4799_quiz4_q05",
          "question": "Le tampon vulnérable est char buffer[100] et le décalage mesuré entre sa base et le %ebp sauvegardé est de 108 octets. À quel octet de l'entrée tombe alors l'adresse de retour ?",
          "options": [
            {
              "text": "octet 112 : 108 pour le %ebp, plus 4 pour le franchir",
              "explanation": "L'entrée est copiée à partir de la base du tampon : 108 octets pour remplir jusqu'au %ebp sauvegardé (Q3), puis 4 octets de plus pour franchir ce %ebp (cadre 32 bits) et arriver sur l'adresse de retour, à $ebp + 4 (Q4). Elle commence donc à l'octet 112."
            },
            {
              "text": "octet 108 : la base du tampon coïncide avec le %ebp",
              "explanation": "L'octet 108 écraserait le %ebp sauvegardé, pas l'adresse de retour : la base du tampon en est distante de 108, elle ne coïncide pas avec le %ebp."
            },
            {
              "text": "octet 100 : le tampon fait exactement cent octets pleins",
              "explanation": "L'octet 100 confond la taille déclarée du tampon avec le décalage réel (même erreur qu'au distracteur A de Q3) et ignore le bourrage."
            },
            {
              "text": "octet 116 : il faut ajouter huit octets après le %ebp",
              "explanation": "L'octet 116 ajoute 8 au lieu de 4 après le %ebp : cela viserait le premier argument ($ebp + 8), pas l'adresse de retour."
            }
          ],
          "answer": 0,
          "explanation": "L'entrée est copiée à partir de la base du tampon : 108 octets pour remplir jusqu'au %ebp sauvegardé (Q3), puis 4 octets de plus pour franchir ce %ebp (cadre 32 bits) et arriver sur l'adresse de retour, à $ebp + 4 (Q4). Elle commence donc à l'octet 112.",
          "concept": "Reconnaissance au débogueur",
          "source": "Quiz 4, chapitre 4"
        },
        {
          "id": "ceg4799_quiz4_q06",
          "question": "Sous gdb, pour le cadre de la fonction vulnérable, info frame affiche « saved eip = 0x0804851a ». Que désigne cette valeur pour l'attaque ?",
          "options": [
            {
              "text": "le sommet courant de la pile, celui que pointe %esp",
              "explanation": "Le sommet de pile est donné par %esp, pas par « saved eip »."
            },
            {
              "text": "la base du tampon local de la fonction vulnérable",
              "explanation": "La base du tampon local se relève avec p &buffer ; ce n'est pas « saved eip »."
            },
            {
              "text": "l'adresse de retour : l'endroit où l'exécution reprend",
              "explanation": "Dans info frame, « saved eip » est l'adresse de retour sauvegardée dans le cadre : c'est là que l'exécution reprendra au ret de la fonction. C'est précisément la case que l'attaque doit écraser."
            },
            {
              "text": "l'adresse de l'instruction en cours dans la fonction",
              "explanation": "L'instruction en cours est pointée par le %eip courant, pas par le « saved eip », qui concerne l'appelant."
            }
          ],
          "answer": 2,
          "explanation": "Dans info frame, « saved eip » est l'adresse de retour sauvegardée dans le cadre : c'est là que l'exécution reprendra au ret de la fonction. C'est précisément la case que l'attaque doit écraser.",
          "concept": "Reconnaissance au débogueur",
          "source": "Quiz 4, chapitre 4"
        },
        {
          "id": "ceg4799_quiz4_q07",
          "question": "Le tampon vulnérable est déclaré char buffer[100]. Pourquoi mesurer au débogueur le décalage jusqu'à l'adresse de retour, plutôt que le déduire de cette taille de 100 ?",
          "options": [
            {
              "text": "parce que le décalage change à chaque exécution du même binaire",
              "explanation": "Le décalage interne au cadre est stable pour un même binaire ; c'est l'adresse absolue de la pile qui varie (ASLR), pas l'offset."
            },
            {
              "text": "parce que l'alignement et le padding du compilateur décalent l'offset",
              "explanation": "Le compilateur aligne les variables locales et insère du bourrage : la distance réelle base du tampon → adresse de retour (ici 108/112) dépasse les 100 octets déclarés. Seule la mesure au débogueur donne le vrai décalage."
            },
            {
              "text": "parce que gdb modifie lui-même la disposition de la pile observée",
              "explanation": "gdb n'altère pas la disposition interne du cadre observé ; le décalage relevé est celui de l'exécution réelle."
            },
            {
              "text": "parce que deviner l'adresse déclenche toujours le canari de pile",
              "explanation": "Il n'y a pas de canari dans ce binaire ; deviner l'adresse ne déclenche aucune protection."
            }
          ],
          "answer": 1,
          "explanation": "Le compilateur aligne les variables locales et insère du bourrage : la distance réelle base du tampon → adresse de retour (ici 108/112) dépasse les 100 octets déclarés. Seule la mesure au débogueur donne le vrai décalage.",
          "concept": "Reconnaissance au débogueur",
          "source": "Quiz 4, chapitre 4"
        },
        {
          "id": "ceg4799_quiz4_q08",
          "question": "Le binaire vulnérable donne des adresses de pile stables sous gdb, mais décalées à l'exécution directe. Quel mécanisme cause cet écart, et comment le neutraliser pour le laboratoire ?",
          "options": [
            {
              "text": "gdb ajoute ses variables au cadre de la fonction ; compiler en -static",
              "explanation": "gdb ajoute surtout des variables d'environnement qui décalent légèrement la pile, mais la cause dominante de l'écart est l'ASLR ; -static ne la neutralise pas."
            },
            {
              "text": "le canari change à chaque exécution ; compiler en -fno-stack-protector",
              "explanation": "Le canari ne change pas les adresses de pile et n'est pas en cause ici."
            },
            {
              "text": "la pile devient non exécutable ; compiler avec -z execstack",
              "explanation": "Le bit NX (pile non exécutable) empêche l'exécution du shellcode, mais ne décale pas les adresses relevées."
            },
            {
              "text": "l'ASLR randomise la base de la pile ; le désactiver fige les adresses",
              "explanation": "L'ASLR (Address Space Layout Randomization) tire au sort la base de la pile à chaque lancement ; sous gdb il est souvent neutralisé, d'où l'écart. Pour le laboratoire, on le désactive (echo 0 > /proc/sys/kernel/randomize_va_space) afin de figer les adresses."
            }
          ],
          "answer": 3,
          "explanation": "L'ASLR (Address Space Layout Randomization) tire au sort la base de la pile à chaque lancement ; sous gdb il est souvent neutralisé, d'où l'écart. Pour le laboratoire, on le désactive (echo 0 > /proc/sys/kernel/randomize_va_space) afin de figer les adresses.",
          "concept": "Reconnaissance au débogueur",
          "source": "Quiz 4, chapitre 4"
        },
        {
          "id": "ceg4799_quiz4_q09",
          "question": "Tu fabriques l'entrée comme une liste contenu de 300 octets. Au débogueur, p &buffer donne 0xbfffeb1c et p $ebp donne 0xbfffeb88. Quels indices de contenu reçoivent les quatre octets de l'adresse de saut ?",
          "options": [
            {
              "text": "contenu[112:116] — les quatre octets à partir de l'octet 112",
              "explanation": "Le décalage est 0xbfffeb88 − 0xbfffeb1c = 108 jusqu'au %ebp, +4 pour atteindre l'adresse de retour = octet 112. Les quatre octets de l'adresse occupent donc contenu[112:116] (borne de fin exclue en Python)."
            },
            {
              "text": "contenu[108:112] — au niveau du %ebp sauvegardé du cadre",
              "explanation": "contenu[108:112] écrase le %ebp sauvegardé, pas l'adresse de retour."
            },
            {
              "text": "contenu[100:104] — juste après la fin du tampon buffer",
              "explanation": "contenu[100:104] est juste après la fin déclarée du tampon, encore dans le bourrage — trop bas."
            },
            {
              "text": "contenu[116:120] — quatre octets après l'adresse de retour",
              "explanation": "contenu[116:120] est une case trop loin : cela viserait au-delà de l'adresse de retour."
            }
          ],
          "answer": 0,
          "explanation": "Le décalage est 0xbfffeb88 − 0xbfffeb1c = 108 jusqu'au %ebp, +4 pour atteindre l'adresse de retour = octet 112. Les quatre octets de l'adresse occupent donc contenu[112:116] (borne de fin exclue en Python).",
          "concept": "Décalage et adresse de retour",
          "source": "Quiz 4, chapitre 4"
        },
        {
          "id": "ceg4799_quiz4_q10",
          "question": "Dans une attaque avec injection de shellcode sur la pile, vers quoi l'adresse de saut écrite dans l'entrée doit-elle pointer ?",
          "options": [
            {
              "text": "l'adresse exacte du premier octet du shellcode, sans marge",
              "explanation": "Viser le premier octet exact du shellcode, sans marge, est fragile : la moindre erreur de décalage fait tout rater."
            },
            {
              "text": "l'adresse de main, pour relancer le programme depuis le début",
              "explanation": "Sauter à main relance le programme au lieu d'exécuter le shellcode."
            },
            {
              "text": "un point de la glissière de NOP, au-dessus de la base du tampon",
              "explanation": "On vise la glissière de NOP : le processeur y glisse de NOP en NOP jusqu'au shellcode. Cela tolère une imprécision sur l'adresse, puisqu'une zone entière mène au code."
            },
            {
              "text": "la valeur de %esp au moment précis où l'instruction ret agit",
              "explanation": "La valeur de %esp au moment du ret n'est pas connue d'avance à l'exécution directe ; on ne peut pas la cibler de façon fiable."
            }
          ],
          "answer": 2,
          "explanation": "On vise la glissière de NOP : le processeur y glisse de NOP en NOP jusqu'au shellcode. Cela tolère une imprécision sur l'adresse, puisqu'une zone entière mène au code.",
          "concept": "Décalage et adresse de retour",
          "source": "Quiz 4, chapitre 4"
        },
        {
          "id": "ceg4799_quiz4_q11",
          "question": "Dans l'entrée de 300 octets, le shellcode est placé à la fin et une glissière de NOP remplit l'espace avant lui. Le tampon (char buffer[100]) est en 0xbfffeb1c. Quelle adresse de saut atterrit dans la glissière ?",
          "options": [
            {
              "text": "0xbfffeb00, située en dessous de la base du tampon",
              "explanation": "0xbfffeb00 est en dessous de la base du tampon : rien n'y est écrit par la copie."
            },
            {
              "text": "0xbfffed00, située bien au-delà du dernier octet copié",
              "explanation": "0xbfffed00 est bien au-delà du dernier octet copié (300 octets ≈ jusqu'à 0xbfffec48) : hors de la zone contrôlée."
            },
            {
              "text": "0xbfffeb8c, l'emplacement même de l'adresse de retour",
              "explanation": "0xbfffeb8c est l'emplacement même de l'adresse de retour : y atterrir relirait une adresse comme instruction, pas la glissière."
            },
            {
              "text": "0xbfffebc0, un peu au-dessus de la base du tampon",
              "explanation": "La glissière occupe l'espace juste au-dessus de la base du tampon. 0xbfffebc0 (base + 0xa4 ≈ 164 octets) tombe dans cette zone de NOP et glisse vers le shellcode placé plus loin."
            }
          ],
          "answer": 3,
          "explanation": "La glissière occupe l'espace juste au-dessus de la base du tampon. 0xbfffebc0 (base + 0xa4 ≈ 164 octets) tombe dans cette zone de NOP et glisse vers le shellcode placé plus loin.",
          "concept": "Décalage et adresse de retour",
          "source": "Quiz 4, chapitre 4"
        },
        {
          "id": "ceg4799_quiz4_q12",
          "question": "Sur x86 (petit-boutiste), comment l'adresse de saut 0xbfffeb90 s'écrit-elle octet par octet dans le fichier d'entrée ?",
          "options": [
            {
              "text": "bf ff eb 90, dans l'ordre de lecture de gauche à droite",
              "explanation": "bf ff eb 90 est l'ordre de lecture humain (gros-boutiste), inverse de l'ordre machine x86."
            },
            {
              "text": "90 eb ff bf, le poids faible à l'adresse la plus basse",
              "explanation": "x86 est petit-boutiste : l'octet de poids faible (0x90) va à l'adresse la plus basse du fichier, puis eb, ff, bf. L'ordre écrit est donc 90 eb ff bf."
            },
            {
              "text": "ff bf 90 eb, le poids fort placé à l'adresse la plus basse",
              "explanation": "ff bf 90 eb ne correspond à aucune convention : ni poids faible en tête, ni ordre de lecture."
            },
            {
              "text": "eb 90 bf ff, les octets échangés deux par deux dans l'ordre",
              "explanation": "eb 90 bf ff mélange les octets ; ce n'est pas un simple renversement petit-boutiste."
            }
          ],
          "answer": 1,
          "explanation": "x86 est petit-boutiste : l'octet de poids faible (0x90) va à l'adresse la plus basse du fichier, puis eb, ff, bf. L'ordre écrit est donc 90 eb ff bf.",
          "concept": "Décalage et adresse de retour",
          "source": "Quiz 4, chapitre 4"
        },
        {
          "id": "ceg4799_quiz4_q13",
          "question": "Lors de la copie de l'entrée dans le tampon, pourquoi l'adresse de saut placée dans le fichier ne doit-elle contenir aucun octet nul (0x00) ?",
          "options": [
            {
              "text": "parce que le processeur refuse une adresse contenant un zéro",
              "explanation": "Le processeur accepte parfaitement une adresse contenant un zéro ; le problème est la copie, pas l'exécution."
            },
            {
              "text": "parce qu'un 0x00 serait exécuté comme une instruction NOP",
              "explanation": "0x00 n'est pas un NOP (0x90) ; ce n'est pas une question d'exécution ici."
            },
            {
              "text": "parce que le zéro décalerait tout le reste de l'entrée ensuite",
              "explanation": "Un 0x00 n'insère rien : il arrête simplement strcpy, il ne décale pas le reste."
            },
            {
              "text": "parce que strcpy s'arrête au premier octet nul rencontré",
              "explanation": "strcpy copie jusqu'au premier 0x00 (fin de chaîne C) exclu. Un octet nul dans l'adresse tronquerait la copie avant l'adresse de retour, et l'attaque échouerait."
            }
          ],
          "answer": 3,
          "explanation": "strcpy copie jusqu'au premier 0x00 (fin de chaîne C) exclu. Un octet nul dans l'adresse tronquerait la copie avant l'adresse de retour, et l'attaque échouerait.",
          "concept": "Décalage et adresse de retour",
          "source": "Quiz 4, chapitre 4"
        },
        {
          "id": "ceg4799_quiz4_q14",
          "question": "L'entrée est copiée par strcpy. Ta cible de saut idéale serait 0xbfffeb00, mais elle contient un octet nul (0x00). Que fais-tu ?",
          "options": [
            {
              "text": "viser une adresse voisine sans octet nul dans la glissière",
              "explanation": "La glissière de NOP offre une plage d'adresses valides : il suffit d'en choisir une voisine sans 0x00 (ex. 0xbfffeb90). Elle atterrit toujours dans la glissière et évite l'arrêt de strcpy."
            },
            {
              "text": "écrire quand même le 0x00 : strcpy le copiera comme les autres",
              "explanation": "strcpy s'arrêtera au 0x00 : l'écrire ne le copie pas « comme les autres »."
            },
            {
              "text": "inverser l'adresse pour placer le zéro en tête du fichier",
              "explanation": "Inverser l'adresse ne supprime pas le zéro ; il resterait présent et arrêterait la copie, en plus de pointer ailleurs."
            },
            {
              "text": "remplacer le 0x00 par 0x90 à l'intérieur même de l'adresse",
              "explanation": "Remplacer l'octet nul par 0x90 change l'adresse en une autre valeur arbitraire qui ne pointe plus où il faut."
            }
          ],
          "answer": 0,
          "explanation": "La glissière de NOP offre une plage d'adresses valides : il suffit d'en choisir une voisine sans 0x00 (ex. 0xbfffeb90). Elle atterrit toujours dans la glissière et évite l'arrêt de strcpy.",
          "concept": "Décalage et adresse de retour",
          "source": "Quiz 4, chapitre 4"
        },
        {
          "id": "ceg4799_quiz4_q15",
          "question": "En portant l'attaque de x86 (32 bits) vers x86-64 (64 bits), pourquoi l'écriture de l'adresse de saut devient-elle plus délicate ?",
          "options": [
            {
              "text": "l'adresse de retour se place en dessous du %ebp sauvegardé",
              "explanation": "L'adresse de retour reste au-dessus du pointeur de cadre sauvegardé ; l'ordre ne s'inverse pas en 64 bits."
            },
            {
              "text": "les adresses tiennent sur 8 octets et contiennent des octets nuls",
              "explanation": "En espace utilisateur 64 bits, les adresses de pile n'utilisent que 48 bits : les octets de poids fort sont nuls (ex. 0x00007fff…). Ces 0x00 arrêtent strcpy, ce qui complique l'écriture de l'adresse."
            },
            {
              "text": "le tampon local migre du cadre d'appel vers le tas du processus",
              "explanation": "Le tampon local reste sur la pile, il ne migre pas vers le tas."
            },
            {
              "text": "les arguments passent par la pile et brouillent la mesure du décalage",
              "explanation": "En x86-64 les premiers arguments passent par registres, pas par la pile ; ce n'est pas la source de la difficulté."
            }
          ],
          "answer": 1,
          "explanation": "En espace utilisateur 64 bits, les adresses de pile n'utilisent que 48 bits : les octets de poids fort sont nuls (ex. 0x00007fff…). Ces 0x00 arrêtent strcpy, ce qui complique l'écriture de l'adresse.",
          "concept": "Décalage et adresse de retour",
          "source": "Quiz 4, chapitre 4"
        },
        {
          "id": "ceg4799_quiz4_q16",
          "question": "Tu construis une entrée de 300 octets et le décalage jusqu'à l'adresse de retour est de 112 octets. Où placer le shellcode pour maximiser la longueur de la glissière de NOP avant lui ?",
          "options": [
            {
              "text": "au tout début du fichier, aux octets 0 à 40 environ",
              "explanation": "Au tout début, le shellcode serait suivi de l'adresse de retour qu'il faut écraser ; il n'y aurait pas de glissière devant lui et il risque d'être abîmé."
            },
            {
              "text": "juste avant l'adresse de retour, aux octets 72 à 108",
              "explanation": "Juste avant l'adresse de retour, l'espace disponible pour la glissière est minime."
            },
            {
              "text": "le plus loin possible vers la fin, bien après l'octet 116",
              "explanation": "Plus le shellcode est repoussé vers la fin, plus la glissière de NOP qui le précède est longue, et plus la zone d'atterrissage tolérant l'imprécision est large."
            },
            {
              "text": "exactement à l'octet 112, à la place de l'adresse de retour",
              "explanation": "À l'octet 112, le shellcode occuperait la place de l'adresse de retour : il n'y aurait plus d'adresse pour sauter dessus."
            }
          ],
          "answer": 2,
          "explanation": "Plus le shellcode est repoussé vers la fin, plus la glissière de NOP qui le précède est longue, et plus la zone d'atterrissage tolérant l'imprécision est large.",
          "concept": "Décalage et adresse de retour",
          "source": "Quiz 4, chapitre 4"
        },
        {
          "id": "ceg4799_quiz4_q17",
          "question": "Tu places le shellcode au tout début de l'entrée et l'adresse de saut à la toute fin, et l'attaque échoue. Quel agencement des trois morceaux fonctionne ?",
          "options": [
            {
              "text": "le shellcode, puis l'adresse de saut, puis la glissière de NOP",
              "explanation": "Mettre le shellcode en tête puis l'adresse ne place pas l'adresse à l'offset du retour et laisse le shellcode exposé à l'écrasement."
            },
            {
              "text": "la glissière, puis l'adresse de saut, puis le shellcode à la fin",
              "explanation": "La glissière de NOP remplit le début, l'adresse de saut tombe à l'offset de l'adresse de retour, et le shellcode est placé à la fin : l'adresse pointe dans la glissière, qui glisse jusqu'au shellcode. C'est le montage classique du SEED Lab."
            },
            {
              "text": "l'adresse de saut, puis la glissière de NOP, puis le shellcode",
              "explanation": "Commencer par l'adresse de saut ne la met pas au bon offset : elle n'écrase pas l'adresse de retour."
            },
            {
              "text": "le shellcode encadré par deux glissières, l'adresse au milieu",
              "explanation": "Encadrer le shellcode de deux glissières avec l'adresse au milieu désaligne l'adresse par rapport à la case de retour."
            }
          ],
          "answer": 1,
          "explanation": "La glissière de NOP remplit le début, l'adresse de saut tombe à l'offset de l'adresse de retour, et le shellcode est placé à la fin : l'adresse pointe dans la glissière, qui glisse jusqu'au shellcode. C'est le montage classique du SEED Lab.",
          "concept": "Construire le fichier d'entrée",
          "source": "Quiz 4, chapitre 4"
        },
        {
          "id": "ceg4799_quiz4_q18",
          "question": "Ton adresse de saut est presque juste, mais l'attaque ne réussit qu'un essai sur plusieurs : l'atterrissage tombe parfois à côté du shellcode. Quel ajout à l'entrée fiabilise l'atterrissage ?",
          "options": [
            {
              "text": "rallonger le shellcode pour qu'il occupe toute l'entrée",
              "explanation": "Rallonger le shellcode n'élargit pas la zone d'atterrissage avant lui."
            },
            {
              "text": "répéter l'adresse de saut sur plusieurs cases de contrôle",
              "explanation": "Répéter l'adresse de saut n'aide pas si cette adresse vise un point unique sans marge."
            },
            {
              "text": "ajouter un canari valide juste avant l'adresse de retour",
              "explanation": "Il n'y a pas de canari à satisfaire ici ; en ajouter un ne fiabilise rien."
            },
            {
              "text": "une glissière de NOP avant le shellcode, pour élargir la cible",
              "explanation": "Une glissière de NOP transforme un point de chute unique en une large zone : tant que le saut tombe quelque part dans la glissière, l'exécution glisse jusqu'au shellcode. Cela absorbe l'imprécision du décalage."
            }
          ],
          "answer": 3,
          "explanation": "Une glissière de NOP transforme un point de chute unique en une large zone : tant que le saut tombe quelque part dans la glissière, l'exécution glisse jusqu'au shellcode. Cela absorbe l'imprécision du décalage.",
          "concept": "Construire le fichier d'entrée",
          "source": "Quiz 4, chapitre 4"
        },
        {
          "id": "ceg4799_quiz4_q19",
          "question": "Dans un fichier d'attaque formé d'une glissière de NOP suivie du shellcode, vers quelle partie de la glissière fais-tu pointer l'adresse de saut, et pourquoi ?",
          "options": [
            {
              "text": "vers le milieu, pour tolérer une erreur sur le décalage mesuré",
              "explanation": "Viser le milieu laisse une marge d'erreur des deux côtés : même si le décalage mesuré est légèrement faux, le saut reste dans la glissière et glisse vers le shellcode."
            },
            {
              "text": "vers le début, pour parcourir le plus de NOP possible ensuite",
              "explanation": "Viser le tout début ne laisse aucune marge en dessous : une sous-estimation du décalage fait rater la glissière."
            },
            {
              "text": "vers la fin, pour ne pas écraser le shellcode placé juste après",
              "explanation": "Viser la fin rapproche dangereusement du shellcode : une petite erreur le dépasserait ou l'entamerait."
            },
            {
              "text": "vers la base du tampon, pour repartir du début du cadre d'appel",
              "explanation": "Viser la base du tampon repart sous la glissière, dans une zone qui ne contient pas forcément de NOP exploitables."
            }
          ],
          "answer": 0,
          "explanation": "Viser le milieu laisse une marge d'erreur des deux côtés : même si le décalage mesuré est légèrement faux, le saut reste dans la glissière et glisse vers le shellcode.",
          "concept": "Construire le fichier d'entrée",
          "source": "Quiz 4, chapitre 4"
        },
        {
          "id": "ceg4799_quiz4_q20",
          "question": "Pour agrandir la zone d'atterrissage avant le shellcode, par quel octet remplis-tu l'espace, et pourquoi celui-là précisément ?",
          "options": [
            {
              "text": "0x00, car il sépare proprement les morceaux de l'entrée",
              "explanation": "0x00 arrêterait strcpy et ne s'exécute pas comme un NOP : il casserait la copie et la glissière."
            },
            {
              "text": "0x41, car il est facile à repérer dans le débogueur",
              "explanation": "0x41 (« A ») est pratique pour repérer un écrasement, mais ce n'est pas un NOP : il ne fait pas glisser l'exécution."
            },
            {
              "text": "0x90, que le processeur exécute sans effet en glissant vers la suite",
              "explanation": "0x90 est l'opcode NOP : le processeur l'exécute sans effet et passe à l'octet suivant. Une suite de 0x90 forme la glissière qui conduit le flot d'exécution jusqu'au shellcode."
            },
            {
              "text": "l'octet de l'adresse de retour, répété pour la renforcer",
              "explanation": "Répéter l'octet de l'adresse de retour ne crée pas une glissière exécutable menant au shellcode."
            }
          ],
          "answer": 2,
          "explanation": "0x90 est l'opcode NOP : le processeur l'exécute sans effet et passe à l'octet suivant. Une suite de 0x90 forme la glissière qui conduit le flot d'exécution jusqu'au shellcode.",
          "concept": "Construire le fichier d'entrée",
          "source": "Quiz 4, chapitre 4"
        },
        {
          "id": "ceg4799_quiz4_q21",
          "question": "Dans la construction contenu = [0x90]*300 ; contenu[112:116] = ADRESSE ; contenu[fin] = CHARGE, pourquoi initialiser toute la liste à 0x90 avant d'y écrire l'adresse et le shellcode ?",
          "options": [
            {
              "text": "parce que 0x90 est la valeur exigée en tête de fichier par fopen",
              "explanation": "fopen n'exige aucune valeur particulière en tête de fichier."
            },
            {
              "text": "parce que 0x90 empêche strcpy de s'arrêter avant la fin",
              "explanation": "Ce n'est pas 0x90 qui empêche strcpy de s'arrêter, mais l'absence d'octet nul."
            },
            {
              "text": "pour que tout l'espace non réécrit reste une glissière continue",
              "explanation": "En pré-remplissant à 0x90, tout octet qu'on ne réécrit pas ensuite (adresse, shellcode) reste un NOP : la glissière est automatiquement continue, sans trou, entre les parties placées."
            },
            {
              "text": "parce que 0x90 réinitialise la valeur du canari à chaque octet",
              "explanation": "0x90 n'a aucun lien avec un canari, absent de ce binaire."
            }
          ],
          "answer": 2,
          "explanation": "En pré-remplissant à 0x90, tout octet qu'on ne réécrit pas ensuite (adresse, shellcode) reste un NOP : la glissière est automatiquement continue, sans trou, entre les parties placées.",
          "concept": "Construire le fichier d'entrée",
          "source": "Quiz 4, chapitre 4"
        },
        {
          "id": "ceg4799_quiz4_q22",
          "question": "Sur x86 (petit-boutiste), comment les quatre octets de l'adresse de saut, placés à contenu[112:116], doivent-ils être ordonnés ?",
          "options": [
            {
              "text": "en petit-boutiste, le poids faible en premier dans le fichier",
              "explanation": "x86 étant petit-boutiste, les quatre octets de l'adresse s'écrivent poids faible d'abord à l'indice le plus bas (112), de sorte que la mémoire reconstitue l'adresse correcte au chargement."
            },
            {
              "text": "en gros-boutiste, dans l'ordre de lecture de gauche à droite",
              "explanation": "L'ordre de lecture gros-boutiste est l'inverse de ce que la machine x86 attend."
            },
            {
              "text": "en texte ASCII, un caractère par chiffre hexadécimal de l'adresse",
              "explanation": "L'adresse s'écrit en octets binaires bruts, pas en caractères ASCII des chiffres hexadécimaux."
            },
            {
              "text": "précédés d'un octet nul qui marque le début de l'adresse",
              "explanation": "Aucun octet nul de marquage ne précède l'adresse : il arrêterait justement strcpy."
            }
          ],
          "answer": 0,
          "explanation": "x86 étant petit-boutiste, les quatre octets de l'adresse s'écrivent poids faible d'abord à l'indice le plus bas (112), de sorte que la mémoire reconstitue l'adresse correcte au chargement.",
          "concept": "Construire le fichier d'entrée",
          "source": "Quiz 4, chapitre 4"
        },
        {
          "id": "ceg4799_quiz4_q23",
          "question": "Le programme vulnérable lit un fichier puis le copie par strcpy dans char buffer[100]. Quelle hypothèse du montage donne à l'attaquant le moyen de déclencher la faille ?",
          "options": [
            {
              "text": "parce que le fichier est ouvert en lecture seule par fopen",
              "explanation": "Le mode d'ouverture (lecture seule) n'a aucun rapport avec l'exploitabilité du débordement."
            },
            {
              "text": "parce que le fichier fait exactement trois cents octets",
              "explanation": "La taille exacte de 300 octets est un choix pratique, pas la condition de la faille."
            },
            {
              "text": "parce que le fichier est relu à chaque appel de la fonction",
              "explanation": "La relecture à chaque appel ne crée pas la vulnérabilité ; c'est la copie non bornée de données contrôlées."
            },
            {
              "text": "parce que le contenu du fichier est fabriqué par l'attaquant",
              "explanation": "La faille n'est exploitable que parce que l'attaquant maîtrise entièrement le contenu lu puis copié sans contrôle de taille : il y place glissière, adresse et shellcode. C'est la donnée contrôlée par l'attaquant qui arme l'attaque."
            }
          ],
          "answer": 3,
          "explanation": "La faille n'est exploitable que parce que l'attaquant maîtrise entièrement le contenu lu puis copié sans contrôle de taille : il y place glissière, adresse et shellcode. C'est la donnée contrôlée par l'attaquant qui arme l'attaque.",
          "concept": "Construire le fichier d'entrée",
          "source": "Quiz 4, chapitre 4"
        },
        {
          "id": "ceg4799_quiz4_q24",
          "question": "Le binaire vulnérable est Set-UID root. En quoi cela change-t-il l'enjeu d'une attaque par injection de shellcode réussie ?",
          "options": [
            {
              "text": "cela empêche l'attaque, car Set-UID ignore le contenu du fichier",
              "explanation": "Set-UID n'ignore pas le contenu du fichier et n'empêche pas l'attaque."
            },
            {
              "text": "le code injecté s'exécute avec les privilèges root du propriétaire",
              "explanation": "Un binaire Set-UID root s'exécute avec les privilèges de son propriétaire (root). Le shellcode injecté hérite de ces privilèges : une attaque réussie donne un shell root, d'où la gravité."
            },
            {
              "text": "cela active automatiquement le canari de pile à la compilation",
              "explanation": "Set-UID n'active aucun canari ; c'est une option de compilation indépendante."
            },
            {
              "text": "cela déplace le tampon vers un segment mémoire en lecture seule",
              "explanation": "Set-UID ne déplace pas le tampon en lecture seule ; il reste sur la pile."
            }
          ],
          "answer": 1,
          "explanation": "Un binaire Set-UID root s'exécute avec les privilèges de son propriétaire (root). Le shellcode injecté hérite de ces privilèges : une attaque réussie donne un shell root, d'où la gravité.",
          "concept": "Construire le fichier d'entrée",
          "source": "Quiz 4, chapitre 4"
        },
        {
          "id": "ceg4799_quiz4_q25",
          "question": "Tu envoies au programme vulnérable une entrée faite uniquement d'octets « A » (0x41). Il y a Segmentation fault et gdb montre eip = 0x41414141. Que conclus-tu ?",
          "options": [
            {
              "text": "le remplissage a atteint et écrasé l'adresse de retour",
              "explanation": "eip = 0x41414141 signifie que les « A » (0x41) ont rempli jusqu'à l'adresse de retour et l'ont écrasée : au ret, le processeur a sauté à 0x41414141. C'est la preuve qu'on contrôle l'adresse de retour."
            },
            {
              "text": "le tas a débordé et corrompu le segment Data du processus",
              "explanation": "Le débordement est sur la pile, pas sur le tas ou le segment Data."
            },
            {
              "text": "une instruction illégale s'est exécutée dans le segment Text",
              "explanation": "Le plantage vient d'un saut vers une adresse invalide (0x41414141), pas d'une instruction illégale dans le segment Text."
            },
            {
              "text": "le canari a été touché et a interrompu proprement le programme",
              "explanation": "Il n'y a pas de canari : rien n'a interrompu « proprement » le programme."
            }
          ],
          "answer": 0,
          "explanation": "eip = 0x41414141 signifie que les « A » (0x41) ont rempli jusqu'à l'adresse de retour et l'ont écrasée : au ret, le processeur a sauté à 0x41414141. C'est la preuve qu'on contrôle l'adresse de retour.",
          "concept": "Diagnostic d'échec et robustesse",
          "source": "Quiz 4, chapitre 4"
        },
        {
          "id": "ceg4799_quiz4_q26",
          "question": "Tampon char buffer[100]. Une entrée de « A » a confirmé que le remplissage atteint l'adresse de retour ; tu y écris ensuite ta vraie adresse de saut, mais le programme plante et gdb montre dans eip un mélange de ton adresse et d'octets de remplissage. Cause la plus probable ?",
          "options": [
            {
              "text": "un octet nul présent quelque part dans le shellcode injecté",
              "explanation": "Un octet nul dans le shellcode tronquerait la copie, mais ne produirait pas ce mélange précis dans eip."
            },
            {
              "text": "l'ASLR encore actif au moment précis de l'exécution du binaire",
              "explanation": "L'ASLR ferait varier l'adresse d'une exécution à l'autre, pas ce décalage constant de 4 octets."
            },
            {
              "text": "la pile a été rendue non exécutable par une option du compilateur",
              "explanation": "Une pile non exécutable (NX) planterait au moment d'exécuter le shellcode, pas en remplissant eip de ce mélange."
            },
            {
              "text": "un décalage faux de 4 octets : 108 au lieu de 112 pour le retour",
              "explanation": "Un eip panaché d'octets de remplissage et de l'adresse signale un désalignement de quelques octets : l'adresse a été posée à l'offset 108 (le %ebp) au lieu de 112 (le retour). Corriger le décalage de 4 octets aligne l'adresse sur la case de retour."
            }
          ],
          "answer": 3,
          "explanation": "Un eip panaché d'octets de remplissage et de l'adresse signale un désalignement de quelques octets : l'adresse a été posée à l'offset 108 (le %ebp) au lieu de 112 (le retour). Corriger le décalage de 4 octets aligne l'adresse sur la case de retour.",
          "concept": "Diagnostic d'échec et robustesse",
          "source": "Quiz 4, chapitre 4"
        },
        {
          "id": "ceg4799_quiz4_q27",
          "question": "Ton adresse de saut est correcte et le saut atterrit bien dans la glissière, mais le shellcode semble tronqué après quelques octets et l'attaque échoue. Cause la plus probable ?",
          "options": [
            {
              "text": "la glissière de NOP construite est beaucoup trop courte",
              "explanation": "Une glissière trop courte ferait rater l'atterrissage, or ici le saut tombe bien."
            },
            {
              "text": "l'ASLR a déplacé le shellcode ailleurs sur la pile",
              "explanation": "L'ASLR déplacerait tout le shellcode, pas ne le tronquerait après quelques octets."
            },
            {
              "text": "un octet nul plus haut a fait s'arrêter strcpy trop tôt",
              "explanation": "Si le saut atterrit bien mais que le shellcode est coupé, c'est que strcpy a rencontré un 0x00 situé avant ou au début du shellcode et a interrompu la copie. Il faut produire un shellcode sans octet nul."
            },
            {
              "text": "le canari de la pile a partiellement réécrit le shellcode",
              "explanation": "Il n'y a pas de canari dans ce binaire pour réécrire le shellcode."
            }
          ],
          "answer": 2,
          "explanation": "Si le saut atterrit bien mais que le shellcode est coupé, c'est que strcpy a rencontré un 0x00 situé avant ou au début du shellcode et a interrompu la copie. Il faut produire un shellcode sans octet nul.",
          "concept": "Diagnostic d'échec et robustesse",
          "source": "Quiz 4, chapitre 4"
        },
        {
          "id": "ceg4799_quiz4_q28",
          "question": "La même attaque, sur le même binaire, réussissait hier et échoue aujourd'hui ; les adresses de pile relevées diffèrent à chaque exécution. Qu'est-ce qui a changé sur le système ?",
          "options": [
            {
              "text": "le binaire a été recompilé récemment avec un canari de pile",
              "explanation": "Un canari planterait de façon reproductible, sans faire varier les adresses de pile à chaque exécution."
            },
            {
              "text": "l'ASLR réactivé : la base de la pile change à chaque exécution",
              "explanation": "Des adresses de pile différentes à chaque lancement sont la signature de l'ASLR réactivé : l'adresse de saut codée en dur ne correspond plus. Le désactiver à nouveau rétablit des adresses stables."
            },
            {
              "text": "la pile a été rendue non exécutable par le système d'exploitation",
              "explanation": "Une pile rendue non exécutable échouerait toujours, pas « seulement aujourd'hui », et ne ferait pas varier les adresses."
            },
            {
              "text": "le fichier d'entrée a été passé en lecture seule sur le disque",
              "explanation": "Le mode lecture seule du fichier d'entrée n'a aucun effet sur les adresses de pile."
            }
          ],
          "answer": 1,
          "explanation": "Des adresses de pile différentes à chaque lancement sont la signature de l'ASLR réactivé : l'adresse de saut codée en dur ne correspond plus. Le désactiver à nouveau rétablit des adresses stables.",
          "concept": "Diagnostic d'échec et robustesse",
          "source": "Quiz 4, chapitre 4"
        },
        {
          "id": "ceg4799_quiz4_q29",
          "question": "Ton adresse de saut atterrit dans la glissière et le shellcode est intact, mais tu obtiens « Segmentation fault » dès l'exécution des octets 0x90. Cause la plus probable ?",
          "options": [
            {
              "text": "l'adresse de saut contenait malgré tout un octet nul (0x00)",
              "explanation": "Un octet nul dans l'adresse aurait empêché d'atterrir correctement ; or le saut tombe bien dans la glissière."
            },
            {
              "text": "le décalage utilisé était trop court de quatre octets",
              "explanation": "Un décalage trop court aurait fait rater la case de retour, pas atterrir dans la glissière puis planter sur les NOP."
            },
            {
              "text": "l'ASLR était resté actif pendant cette exécution du binaire",
              "explanation": "Un ASLR actif aurait fait manquer l'atterrissage, alors qu'ici le saut tombe dans la glissière."
            },
            {
              "text": "la pile n'est pas exécutable (bit NX) : rien ne s'y exécute",
              "explanation": "Si le saut atterrit dans la glissière et que le shellcode est intact, mais que l'exécution des 0x90 fait immédiatement segfault, c'est que la pile est marquée non exécutable (NX) : le processeur refuse d'exécuter quoi que ce soit sur la pile. Il faut compiler avec -z execstack pour le laboratoire."
            }
          ],
          "answer": 3,
          "explanation": "Si le saut atterrit dans la glissière et que le shellcode est intact, mais que l'exécution des 0x90 fait immédiatement segfault, c'est que la pile est marquée non exécutable (NX) : le processeur refuse d'exécuter quoi que ce soit sur la pile. Il faut compiler avec -z execstack pour le laboratoire.",
          "concept": "Diagnostic d'échec et robustesse",
          "source": "Quiz 4, chapitre 4"
        },
        {
          "id": "ceg4799_quiz4_q30",
          "question": "Pour rendre l'attaque par débordement du laboratoire reproductible d'une exécution à l'autre, quelles conditions réunit-on volontairement à la compilation et sur le système ?",
          "options": [
            {
              "text": "ASLR désactivé, pile exécutable, canari retiré à la compilation",
              "explanation": "Les trois protections sont volontairement levées pour le laboratoire : ASLR désactivé (adresses stables), pile exécutable (-z execstack, le shellcode peut s'exécuter) et canari retiré (-fno-stack-protector, l'écrasement du retour passe). L'attaque devient alors reproductible."
            },
            {
              "text": "ASLR activé, pile non exécutable et canari laissé en place",
              "explanation": "C'est la configuration durcie inverse : avec ASLR, NX et canari actifs, l'attaque naïve échoue."
            },
            {
              "text": "binaire statique, compilé en -O2 et sans symboles de débogage",
              "explanation": "Statique, -O2 et sans symboles ne lèvent aucune des trois protections déterminantes."
            },
            {
              "text": "fichier d'entrée en lecture seule, exécuté sans privilèges",
              "explanation": "Le mode du fichier et l'absence de privilèges ne rendent pas l'exécution reproductible ni n'activent la faille."
            }
          ],
          "answer": 0,
          "explanation": "Les trois protections sont volontairement levées pour le laboratoire : ASLR désactivé (adresses stables), pile exécutable (-z execstack, le shellcode peut s'exécuter) et canari retiré (-fno-stack-protector, l'écrasement du retour passe). L'attaque devient alors reproductible.",
          "concept": "Diagnostic d'échec et robustesse",
          "source": "Quiz 4, chapitre 4"
        }
      ]
    },
    "quiz6": {
      "title": "Chaînes de format, conditions de course et Dirty COW",
      "label": "Quiz 6 · Chapitres 6 à 8",
      "questions": [
        {
          "id": "ceg4799_quiz6_q01",
          "question": "Le paramètre s provient du réseau. Quelle est la faille, et quel est le correctif minimal ?",
          "code": "void log_msg(char *s) {\n    printf(s);        /* s vient du réseau */\n}",
          "options": [
            {
              "text": "débordement de tampon : borner la longueur de s avant l'appel"
            },
            {
              "text": "déréférencement nul : tester if (s != NULL) avant l'appel"
            },
            {
              "text": "s sert de chaîne de format : la corriger en printf(\"%s\", s)",
              "explanation": "Passer une entrée non fiable comme chaîne de format est la vulnérabilité ; printf(\"%s\", s) la traite comme une simple donnée."
            },
            {
              "text": "fuite de mémoire : libérer s avec free(s) après l'appel"
            }
          ],
          "answer": 2,
          "explanation": "Passer une entrée non fiable comme chaîne de format est la vulnérabilité ; printf(\"%s\", s) la traite comme une simple donnée.",
          "concept": "Chaînes de format · pratique",
          "source": "Quiz 6, chapitre 6"
        },
        {
          "id": "ceg4799_quiz6_q02",
          "question": "Le prototype est int printf(const char *format, ...). Pourquoi le compilateur ne proteste-t-il pas si l'on passe moins d'arguments que de spécificateurs ?",
          "options": [
            {
              "text": "parce que la chaîne de format n'est lue qu'à l'édition de liens, une fois le nombre d'arguments connu"
            },
            {
              "text": "parce que printf() est variadique : le nombre d'arguments n'est pas confronté à la chaîne de format",
              "explanation": "La partie « ... » accepte un nombre variable d'arguments ; leur nombre n'est pas confronté aux spécificateurs de la chaîne de format."
            },
            {
              "text": "parce que les arguments facultatifs manquants sont automatiquement remplacés par la valeur 0 à l'appel"
            },
            {
              "text": "parce que les spécificateurs en trop sont retirés par le préprocesseur au moment de la"
            }
          ],
          "answer": 1,
          "explanation": "La partie « ... » accepte un nombre variable d'arguments ; leur nombre n'est pas confronté aux spécificateurs de la chaîne de format.",
          "concept": "Chaînes de format · concept",
          "source": "Quiz 6, chapitre 6"
        },
        {
          "id": "ceg4799_quiz6_q03",
          "question": "Après cet appel, que vaut la variable count ?",
          "code": "int count;\nprintf(\"ABCD%n\", &count);",
          "options": [
            {
              "text": "5, en comptant aussi le spécificateur %n lui-même"
            },
            {
              "text": "l'adresse mémoire où se trouve la chaîne \"ABCD\""
            },
            {
              "text": "0, car %n n'imprime rien et ne compte donc rien"
            },
            {
              "text": "4, le nombre de caractères imprimés avant %n",
              "explanation": "%n écrit à l'adresse fournie le nombre de caractères déjà imprimés ; « ABCD » en compte 4."
            }
          ],
          "answer": 3,
          "explanation": "%n écrit à l'adresse fournie le nombre de caractères déjà imprimés ; « ABCD » en compte 4.",
          "concept": "Chaînes de format · pratique",
          "source": "Quiz 6, chapitre 6"
        },
        {
          "id": "ceg4799_quiz6_q04",
          "question": "Au cours de l'analyse de la chaîne de format, que fait la macro va_arg(ap, int) ?",
          "options": [
            {
              "text": "elle vérifie d'abord si la fin de la liste d'arguments est atteinte, puis retourne la valeur suivante"
            },
            {
              "text": "elle retourne la valeur pointée par va_list, puis avance le pointeur de la taille d'un int (4 octets)",
              "explanation": "va_arg lit la valeur à la position courante de va_list et avance le pointeur selon la taille du type demandé (4 octets pour un int en 32 bits)."
            },
            {
              "text": "elle retourne le dernier argument facultatif de la liste, puis réinitialise va_list à sa position de départ"
            },
            {
              "text": "elle copie l'ensemble des arguments facultatifs dans un tableau unique et renvoie"
            }
          ],
          "answer": 1,
          "explanation": "va_arg lit la valeur à la position courante de va_list et avance le pointeur selon la taille du type demandé (4 octets pour un int en 32 bits).",
          "concept": "Chaînes de format · concept",
          "source": "Quiz 6, chapitre 6"
        },
        {
          "id": "ceg4799_quiz6_q05",
          "question": "Sur x86 (petit-boutiste), quelle suite d'octets place l'adresse 0x080497ec au début du fichier d'entrée ?",
          "code": "$ printf \"\\x..\\x..\\x..\\x..\" > entree                 # adresse 0x080497ec",
          "options": [
            {
              "text": "\\x08\\x04\\x97\\xec"
            },
            {
              "text": "\\x04\\x08\\xec\\x97"
            },
            {
              "text": "\\xec\\x97\\x04\\x08",
              "explanation": "En petit-boutiste, l'octet de poids faible vient en premier : 0x08 04 97 ec s'écrit ec, 97, 04, 08."
            },
            {
              "text": "\\xec\\x97\\x08\\x04"
            }
          ],
          "answer": 2,
          "explanation": "En petit-boutiste, l'octet de poids faible vient en premier : 0x08 04 97 ec s'écrit ec, 97, 04, 08.",
          "concept": "Chaînes de format · pratique",
          "source": "Quiz 6, chapitre 6"
        },
        {
          "id": "ceg4799_quiz6_q06",
          "question": "Pourquoi le spécificateur %s provoque-t-il souvent un plantage lorsqu'il est injecté dans une chaîne de format ?",
          "options": [
            {
              "text": "%s déréférence la valeur prise sur la pile comme une adresse ; si elle est invalide, le programme s'arrête",
              "explanation": "%s attend un pointeur vers une chaîne ; si la valeur prise sur la pile n'est pas une adresse lisible, le déréférencement provoque une faute de segmentation."
            },
            {
              "text": "%s déclenche volontairement le canari de pile, dont la vérification interrompt aussitôt l'exécution"
            },
            {
              "text": "%s écrit toujours dans une page mémoire marquée en lecture seule, ce qui déclenche une faute de protection"
            },
            {
              "text": "%s consomme la totalité de l'espace de pile restant, provoquant un dépassement vers le"
            }
          ],
          "answer": 0,
          "explanation": "%s attend un pointeur vers une chaîne ; si la valeur prise sur la pile n'est pas une adresse lisible, le déréférencement provoque une faute de segmentation.",
          "concept": "Chaînes de format · concept",
          "source": "Quiz 6, chapitre 6"
        },
        {
          "id": "ceg4799_quiz6_q07",
          "question": "Combien de caractères cet appel imprime-t-il avant %n, et quelle valeur reçoit donc n ?",
          "code": "int n;\nprintf(\"%.100d%n\", 1, &n);",
          "options": [
            {
              "text": "1, la valeur imprimée par le spécificateur %d"
            },
            {
              "text": "101, soit 100 chiffres plus le spécificateur %n en fin de chaîne"
            },
            {
              "text": "3, le nombre de chiffres de la valeur « 100 »"
            },
            {
              "text": "100, car « %.100d » complète la valeur 1 jusqu'à 100 chiffres",
              "explanation": "Le modificateur de précision « %.100d » force l'affichage sur 100 chiffres ; %n reçoit donc 100."
            }
          ],
          "answer": 3,
          "explanation": "Le modificateur de précision « %.100d » force l'affichage sur 100 chiffres ; %n reçoit donc 100.",
          "concept": "Chaînes de format · pratique",
          "source": "Quiz 6, chapitre 6"
        },
        {
          "id": "ceg4799_quiz6_q08",
          "question": "Pourquoi la randomisation des adresses (ASLR) gêne-t-elle une attaque par chaîne de format qui utilise %n ?",
          "options": [
            {
              "text": "parce qu'elle rend la pile non exécutable, de sorte qu'aucune donnée ne peut plus y être exécutée"
            },
            {
              "text": "parce qu'elle désactive purement et simplement le spécificateur %n dans la bibliothèque C standard"
            },
            {
              "text": "parce que l'adresse exacte de la cible à écrire devient imprévisible d'une exécution à l'autre",
              "explanation": "Pour écrire avec %n, il faut placer l'adresse cible sur la pile ; l'ASLR rend cette adresse difficile à prédire."
            },
            {
              "text": "parce qu'elle insère un canari aléatoire juste avant l'adresse de retour de chaque fonction"
            }
          ],
          "answer": 2,
          "explanation": "Pour écrire avec %n, il faut placer l'adresse cible sur la pile ; l'ASLR rend cette adresse difficile à prédire.",
          "concept": "Chaînes de format · concept",
          "source": "Quiz 6, chapitre 6"
        },
        {
          "id": "ceg4799_quiz6_q09",
          "question": "La chaîne de format vient de l'utilisateur. Que fait gcc compilé avec l'option - Wformat=2 ?",
          "code": "char *fmt = lire_entree();\nprintf(fmt, 5, 4);",
          "options": [
            {
              "text": "il ne signale rien, car des arguments sont bien fournis à l'appel de printf"
            },
            {
              "text": "il remplace automatiquement la variable fmt par la chaîne littérale \"%s\""
            },
            {
              "text": "il refuse de compiler et signale une erreur fatale bloquant la génération de l'exécutable"
            },
            {
              "text": "il émet un avertissement (format non littéral) mais compile tout de même le",
              "explanation": "-Wformat=2 signale qu'une chaîne de format n'est pas littérale ; c'est un simple avertissement, la compilation réussit."
            }
          ],
          "answer": 3,
          "explanation": "-Wformat=2 signale qu'une chaîne de format n'est pas littérale ; c'est un simple avertissement, la compilation réussit.",
          "concept": "Chaînes de format · pratique",
          "source": "Quiz 6, chapitre 6"
        },
        {
          "id": "ceg4799_quiz6_q10",
          "question": "Pourquoi le canari de pile (StackGuard) ne contre-t-il pas de façon fiable les attaques par chaîne de format ?",
          "options": [
            {
              "text": "parce que StackGuard ne protège que les tampons situés sur le tas et jamais ceux de la pile d'exécution"
            },
            {
              "text": "une écriture par %n n'altère qu'un emplacement, sans toucher au canari, contrairement à un débordement",
              "explanation": "Un débordement écrase la mémoire de façon contiguë et heurte le canari ; une écriture ciblée par %n n'altère qu'un emplacement précis."
            },
            {
              "text": "parce que la valeur du canari est d'abord imprimée par un %x, puis réutilisée telle quelle par l'attaquant"
            },
            {
              "text": "parce que StackGuard est automatiquement désactivé dès qu'une fonction de la famille"
            }
          ],
          "answer": 1,
          "explanation": "Un débordement écrase la mémoire de façon contiguë et heurte le canari ; une écriture ciblée par %n n'altère qu'un emplacement précis.",
          "concept": "Chaînes de format · concept",
          "source": "Quiz 6, chapitre 6"
        },
        {
          "id": "ceg4799_quiz6_q11",
          "question": "Dans ce fragment d'un programme Set-UID root, où se situe la fenêtre TOCTTOU exploitable ?",
          "code": "if (access(\"/tmp/X\", W_OK) == 0) {   /* (1) contrôle */\n    f = open(\"/tmp/X\", O_WRONLY); /* (2) usage */\n    write_to_file(f);\n}",
          "options": [
            {
              "text": "entre (1) et (2) : la cible de « /tmp/X » peut changer après access() et avant open()",
              "explanation": "access() vérifie à l'instant (1), open() utilise à l'instant (2) ; entre les deux, un attaquant peut rediriger « /tmp/X »."
            },
            {
              "text": "après open(), une fois le descripteur de fichier obtenu par le programme"
            },
            {
              "text": "à l'intérieur de write_to_file(), pendant l'écriture des données dans le fichier cible visé"
            },
            {
              "text": "dans access() lui-même, qui lit deux fois de suite les permissions du fichier"
            }
          ],
          "answer": 0,
          "explanation": "access() vérifie à l'instant (1), open() utilise à l'instant (2) ; entre les deux, un attaquant peut rediriger « /tmp/X ».",
          "concept": "Conditions de course · pratique",
          "source": "Quiz 6, chapitre 7"
        },
        {
          "id": "ceg4799_quiz6_q12",
          "question": "Qu'est-ce qui caractérise une condition de course telle que définie dans le cours ?",
          "options": [
            {
              "text": "un programme qui s'exécute plus lentement que prévu lorsqu'il est soumis à une charge de travail élevée"
            },
            {
              "text": "une fonction qui renvoie des résultats différents pour la même entrée à cause d'une erreur d'arithmétique"
            },
            {
              "text": "plusieurs processus accèdent en même temps à des données partagées, et le résultat dépend de l'ordre",
              "explanation": "Une condition de course survient quand l'issue dépend de l'ordre (le « timing ») d'accès concurrents à une ressource partagée."
            },
            {
              "text": "deux programmes qui se disputent uniquement l'attention de l'ordonnanceur, sans"
            }
          ],
          "answer": 2,
          "explanation": "Une condition de course survient quand l'issue dépend de l'ordre (le « timing ») d'accès concurrents à une ressource partagée.",
          "concept": "Conditions de course · concept",
          "source": "Quiz 6, chapitre 7"
        },
        {
          "id": "ceg4799_quiz6_q13",
          "question": "Que garantit l'option O_EXCL combinée à O_CREAT dans cet appel ?",
          "code": "f = open(\"/tmp/X\", O_CREAT | O_EXCL | O_WRONLY, 0644);",
          "options": [
            {
              "text": "open() suit le lien symbolique au lieu de le refuser lorsqu'il en rencontre un à l'ouverture du fichier"
            },
            {
              "text": "open() échoue si le fichier existe déjà : la vérification et la création sont atomiques",
              "explanation": "O_CREAT | O_EXCL réunit « vérifier l'absence » et « créer » en une seule opération atomique : plus de fenêtre TOCTTOU."
            },
            {
              "text": "le fichier est ouvert en lecture seule, sans aucun droit d'écriture accordé"
            },
            {
              "text": "le fichier est supprimé automatiquement dès que le descripteur est fermé"
            }
          ],
          "answer": 1,
          "explanation": "O_CREAT | O_EXCL réunit « vérifier l'absence » et « créer » en une seule opération atomique : plus de fenêtre TOCTTOU.",
          "concept": "Conditions de course · pratique",
          "source": "Quiz 6, chapitre 7"
        },
        {
          "id": "ceg4799_quiz6_q14",
          "question": "Qu'est-ce qu'une vulnérabilité de type TOCTTOU ?",
          "options": [
            {
              "text": "un intervalle entre la vérification et l'utilisation d'une ressource, durant lequel celle-ci peut changer",
              "explanation": "TOCTTOU (Time-Of-Check To Time-Of-Use) désigne l'écart entre la vérification et l'utilisation, durant lequel la ressource vérifiée peut être remplacée."
            },
            {
              "text": "un interblocage entre deux fils d'exécution qui détiennent chacun un verrou attendu par l'autre"
            },
            {
              "text": "un débordement de tampon qui ne se manifeste qu'à une heure précise de la journée, selon l'horloge système"
            },
            {
              "text": "une attaque temporelle qui mesure la durée d'une comparaison cryptographique pour"
            }
          ],
          "answer": 0,
          "explanation": "TOCTTOU (Time-Of-Check To Time-Of-Use) désigne l'écart entre la vérification et l'utilisation, durant lequel la ressource vérifiée peut être remplacée.",
          "concept": "Conditions de course · concept",
          "source": "Quiz 6, chapitre 7"
        },
        {
          "id": "ceg4799_quiz6_q15",
          "question": "Les actions de l'attaquant sont A1 (viser son fichier) et A2 (viser /etc/passwd) ; celles du programme sont V1 (access) et V2 (open). Quel entrelacement fait ouvrir /etc/passwd en écriture ?",
          "code": "attaquant : A1, A2, A1, A2, ...\nvulnérable : V1, V2, V1, V2, ...",
          "options": [
            {
              "text": "V1, A1, V2, A2"
            },
            {
              "text": "A1, V1, A2, V2",
              "explanation": "A1 puis V1 : access() réussit sur le fichier de l'attaquant ; A2 bascule le lien vers /etc/passwd ; V2 l'ouvre alors en écriture."
            },
            {
              "text": "A1, A2, V1, V2"
            },
            {
              "text": "V1, V2, A1, A2"
            }
          ],
          "answer": 1,
          "explanation": "A1 puis V1 : access() réussit sur le fichier de l'attaquant ; A2 bascule le lien vers /etc/passwd ; V2 l'ouvre alors en écriture.",
          "concept": "Conditions de course · pratique",
          "source": "Quiz 6, chapitre 7"
        },
        {
          "id": "ceg4799_quiz6_q16",
          "question": "Dans le programme Set-UID root, pourquoi la séquence access() puis open() pose-t-elle problème ?",
          "options": [
            {
              "text": "access() teste l'utilisateur réel, mais open() agit en root ; entre les deux, la cible du nom peut changer",
              "explanation": "access() contrôle l'UID réel ; open() agit avec l'EUID root. La fenêtre entre les deux permet de changer la cible du nom de fichier."
            },
            {
              "text": "open() est appelé avant access() dans le code, ce qui inverse la logique de vérification des droits"
            },
            {
              "text": "access() abandonne définitivement le privilège root, si bien que open() échoue systématiquement ensuite"
            },
            {
              "text": "access() et open() vérifient tous deux l'UID effectif, ce qui rend la première vérification"
            }
          ],
          "answer": 0,
          "explanation": "access() contrôle l'UID réel ; open() agit avec l'EUID root. La fenêtre entre les deux permet de changer la cible du nom de fichier.",
          "concept": "Conditions de course · concept",
          "source": "Quiz 6, chapitre 7"
        },
        {
          "id": "ceg4799_quiz6_q17",
          "question": "Dans ce programme Set-UID root, quel est l'effet de la ligne (1) juste avant open() ?",
          "code": "seteuid(getuid());            /* (1) EID = RID */\nf = open(\"/tmp/X\", O_WRONLY); /* (2) */\n/* ... */\nseteuid(0);                   /* (3) restaure root */",
          "options": [
            {
              "text": "elle abaisse l'EUID à l'utilisateur réel, de sorte que open() n'a plus les droits de root",
              "explanation": "seteuid(getuid()) applique le moindre privilège : même si la course est gagnée, open() agit avec les droits de l'utilisateur réel."
            },
            {
              "text": "elle supprime le fichier /tmp/X avant de le rouvrir proprement ensuite"
            },
            {
              "text": "elle verrouille le répertoire /tmp pour en exclure tous les autres processus concurrents du système"
            },
            {
              "text": "elle élève l'EUID à root afin de pouvoir ouvrir n'importe quel fichier protégé"
            }
          ],
          "answer": 0,
          "explanation": "seteuid(getuid()) applique le moindre privilège : même si la course est gagnée, open() agit avec les droits de l'utilisateur réel.",
          "concept": "Conditions de course · pratique",
          "source": "Quiz 6, chapitre 7"
        },
        {
          "id": "ceg4799_quiz6_q18",
          "question": "Comment la contre-mesure « vérification et utilisation répétées » réduit-elle le risque ?",
          "options": [
            {
              "text": "en retirant le bit collant du répertoire /tmp, ce qui empêche la création de nouveaux liens symboliques"
            },
            {
              "text": "en répétant contrôle et usage et en comparant les inodes : la course doit alors être gagnée plusieurs fois",
              "explanation": "Si le contrôle et l'usage sont répétés et que les inodes doivent concorder, l'attaquant doit gagner la course à chaque répétition, ce qui est très improbable."
            },
            {
              "text": "en rendant le fichier cible accessible en lecture seule, ce qui bloque toute écriture concurrente"
            },
            {
              "text": "en imprimant un avertissement à chaque ouverture, afin que l'administrateur repère"
            }
          ],
          "answer": 1,
          "explanation": "Si le contrôle et l'usage sont répétés et que les inodes doivent concorder, l'attaquant doit gagner la course à chaque répétition, ce qui est très improbable.",
          "concept": "Conditions de course · concept",
          "source": "Quiz 6, chapitre 7"
        },
        {
          "id": "ceg4799_quiz6_q19",
          "question": "Dans cette ligne ajoutée à /etc/passwd, pourquoi le troisième champ vaut-il 0 ?",
          "code": "test:U6aMy0wojraho:0:0:test:/root:/bin/bash",
          "options": [
            {
              "text": "c'est le nombre de connexions simultanées autorisées pour ce compte"
            },
            {
              "text": "c'est un indicateur qui sert à désactiver entièrement le compte « test » sur l'ensemble du système"
            },
            {
              "text": "c'est le GID du groupe principal auquel appartient ce compte"
            },
            {
              "text": "c'est l'UID ; la valeur 0 désigne root, donc le compte « test » obtient les privilèges root",
              "explanation": "Dans /etc/passwd, le troisième champ est l'UID ; 0 est celui de root : se connecter comme « test » donne un shell root."
            }
          ],
          "answer": 3,
          "explanation": "Dans /etc/passwd, le troisième champ est l'UID ; 0 est celui de root : se connecter comme « test » donne un shell root.",
          "concept": "Conditions de course · pratique",
          "source": "Quiz 6, chapitre 7"
        },
        {
          "id": "ceg4799_quiz6_q20",
          "question": "Que garantit la protection des liens symboliques (fs.protected_symlinks) dans un répertoire collant et accessible en écriture à tous comme /tmp ?",
          "options": [
            {
              "text": "tous les liens symboliques y sont interdits à l'échelle du système, quel que soit celui qui les a créés"
            },
            {
              "text": "les liens symboliques y sont chiffrés avant d'être suivis, afin que leur cible reste confidentielle"
            },
            {
              "text": "un lien n'y est suivi que si son propriétaire est le suiveur (EUID) ou le propriétaire du répertoire",
              "explanation": "Cette protection empêche de suivre un lien créé par un tiers dans un répertoire collant partagé : l'attaque par lien symbolique échoue."
            },
            {
              "text": "le répertoire perd automatiquement son bit collant dès qu'un lien symbolique y est créé"
            }
          ],
          "answer": 2,
          "explanation": "Cette protection empêche de suivre un lien créé par un tiers dans un répertoire collant partagé : l'attaque par lien symbolique échoue.",
          "concept": "Conditions de course · concept",
          "source": "Quiz 6, chapitre 7"
        },
        {
          "id": "ceg4799_quiz6_q21",
          "question": "Le fichier est ouvert en lecture seule et mappé avec MAP_PRIVATE. Où va une écriture réussie dans map ?",
          "code": "f   = open(\"/zzz\", O_RDONLY);\nmap = mmap(NULL, sz, PROT_READ, MAP_PRIVATE, f, 0);",
          "options": [
            {
              "text": "dans une copie privée créée par copie sur écriture, sans toucher au fichier /zzz",
              "explanation": "MAP_PRIVATE isole l'écriture : la copie sur écriture crée une copie privée, et le fichier d'origine reste inchangé."
            },
            {
              "text": "directement dans le fichier /zzz enregistré sur le disque"
            },
            {
              "text": "nulle part : l'écriture échoue toujours sur une page en lecture seule du fichier mappé"
            },
            {
              "text": "dans une mémoire partagée visible par tous les autres processus"
            }
          ],
          "answer": 0,
          "explanation": "MAP_PRIVATE isole l'écriture : la copie sur écriture crée une copie privée, et le fichier d'origine reste inchangé.",
          "concept": "Dirty COW · pratique",
          "source": "Quiz 6, chapitre 8"
        },
        {
          "id": "ceg4799_quiz6_q22",
          "question": "Qu'est-ce que la copie sur écriture (copy-on-write) ?",
          "options": [
            {
              "text": "une méthode pour copier un fichier d'un disque à un autre en l'écrivant deux fois afin d'en vérifier l'intégrité"
            },
            {
              "text": "un mécanisme de verrouillage qui sérialise les écritures concurrentes de plusieurs processus en mémoire partagée"
            },
            {
              "text": "une sauvegarde automatique du contenu d'un fichier, réalisée par le noyau avant chaque écriture sur ce fichier"
            },
            {
              "text": "plusieurs pages virtuelles partagent une page physique en lecture ; au premier écrit, le",
              "explanation": "La COW retarde la copie : tant qu'on ne fait que lire, la page physique est partagée ; la copie n'a lieu qu'au premier écrit."
            }
          ],
          "answer": 3,
          "explanation": "La COW retarde la copie : tant qu'on ne fait que lire, la page physique est partagée ; la copie n'a lieu qu'au premier écrit.",
          "concept": "Dirty COW · concept",
          "source": "Quiz 6, chapitre 8"
        },
        {
          "id": "ceg4799_quiz6_q23",
          "question": "Pourquoi écrire via /proc/self/mem plutôt que par un simple memcpy(map+5, ...) sur la mémoire mappée ?",
          "code": "int fm = open(\"/proc/self/mem\", O_RDWR);\nlseek(fm, (off_t)map + 5, SEEK_SET);\nwrite(fm, contenu, strlen(contenu));",
          "options": [
            {
              "text": "la page est en lecture seule ; /proc/self/mem est la route autorisée qui déclenche la COW",
              "explanation": "La mémoire est en lecture seule : memcpy échouerait. Le pseudo-fichier /proc/self/mem permet au noyau d'écrire sur la copie privée."
            },
            {
              "text": "parce que memcpy() ne sait pas écrire à un décalage donné dans la mémoire mappée en lecture seule"
            },
            {
              "text": "parce que /proc/self/mem est simplement plus rapide à l'exécution que memcpy()"
            },
            {
              "text": "parce que /proc/self/mem chiffre les données juste avant de les écrire"
            }
          ],
          "answer": 0,
          "explanation": "La mémoire est en lecture seule : memcpy échouerait. Le pseudo-fichier /proc/self/mem permet au noyau d'écrire sur la copie privée.",
          "concept": "Dirty COW · pratique",
          "source": "Quiz 6, chapitre 8"
        },
        {
          "id": "ceg4799_quiz6_q24",
          "question": "Que fait mmap() par défaut (mappage adossé à un fichier) ?",
          "options": [
            {
              "text": "il crée un nouveau processus enfant qui partage la pile et les registres du processus parent appelant"
            },
            {
              "text": "il mappe une zone de mémoire virtuelle sur un fichier : lire la zone mappée revient à lire le fichier",
              "explanation": "Le mappage par défaut relie une région de mémoire virtuelle au contenu d'un fichier ; les accès à la mémoire correspondent à des accès au fichier."
            },
            {
              "text": "il chiffre le contenu d'un fichier sur place, en mémoire, puis réécrit le résultat chiffré sur le disque"
            },
            {
              "text": "il alloue une zone de mémoire sur le tas et la remplit de zéros avant de la rendre au"
            }
          ],
          "answer": 1,
          "explanation": "Le mappage par défaut relie une région de mémoire virtuelle au contenu d'un fichier ; les accès à la mémoire correspondent à des accès au fichier.",
          "concept": "Dirty COW · concept",
          "source": "Quiz 6, chapitre 8"
        },
        {
          "id": "ceg4799_quiz6_q25",
          "question": "Après cet appel madvise(), vers quoi pointe la table des pages pour la zone mappée ?",
          "code": "madvise(map, sz, MADV_DONTNEED);",
          "options": [
            {
              "text": "vers le sommet de la pile du processus appelant la fonction"
            },
            {
              "text": "vers une nouvelle copie privée, vierge et entièrement remise à zéro par le noyau du système"
            },
            {
              "text": "vers une page de mémoire entièrement remplie de caractères nuls"
            },
            {
              "text": "de nouveau vers la page d'origine adossée au fichier ; la copie privée est abandonnée",
              "explanation": "MADV_DONTNEED fait abandonner la copie privée : la table des pages revient à la page d'origine du fichier."
            }
          ],
          "answer": 3,
          "explanation": "MADV_DONTNEED fait abandonner la copie privée : la table des pages revient à la page d'origine du fichier.",
          "concept": "Dirty COW · pratique",
          "source": "Quiz 6, chapitre 8"
        },
        {
          "id": "ceg4799_quiz6_q26",
          "question": "Parmi les trois étapes de la copie sur écriture — copier, mettre à jour la table des pages, écrire — qu'exploite Dirty COW ?",
          "options": [
            {
              "text": "le fait qu'elles retirent définitivement la permission de lecture seule du fichier dès la première écriture"
            },
            {
              "text": "le fait qu'elles ne sont pas atomiques : un madvise() glissé entre elles fait écrire sur la page d'origine",
              "explanation": "Les étapes ne sont pas atomiques : intercaler madvise() fait pointer la table des pages vers l'original juste avant l'écriture, qui se reporte dans le fichier."
            },
            {
              "text": "le fait qu'elles allouent beaucoup trop de mémoire physique et finissent par épuiser la RAM du système"
            },
            {
              "text": "le fait qu'elles s'exécutent toutes les trois avec le privilège root par conception du noyau"
            }
          ],
          "answer": 1,
          "explanation": "Les étapes ne sont pas atomiques : intercaler madvise() fait pointer la table des pages vers l'original juste avant l'écriture, qui se reporte dans le fichier.",
          "concept": "Dirty COW · concept",
          "source": "Quiz 6, chapitre 8"
        },
        {
          "id": "ceg4799_quiz6_q27",
          "question": "Dans cette ligne de /etc/passwd, quel changement effectué par Dirty COW donne les droits root à testcow ?",
          "code": "testcow:x:1001:1003:,,,:/home/testcow:/bin/bash",
          "options": [
            {
              "text": "ajouter une seconde fois /bin/bash tout à la fin de la ligne"
            },
            {
              "text": "remplacer le GID « 1003 » par la valeur « 0 »"
            },
            {
              "text": "remplacer le champ UID « 1001 » par « 0000 »",
              "explanation": "Le troisième champ (1001) est l'UID ; le passer à 0000 fait de testcow un compte à UID 0, c'est-à-dire root."
            },
            {
              "text": "remplacer le « x » du mot de passe par un hachage de mot de passe vide"
            }
          ],
          "answer": 2,
          "explanation": "Le troisième champ (1001) est l'UID ; le passer à 0000 fait de testcow un compte à UID 0, c'est-à-dire root.",
          "concept": "Dirty COW · pratique",
          "source": "Quiz 6, chapitre 8"
        },
        {
          "id": "ceg4799_quiz6_q28",
          "question": "Pourquoi /etc/passwd est-il un fichier cible de choix pour l'attaque Dirty COW ?",
          "options": [
            {
              "text": "il est mappé en mémoire avec l'option MAP_SHARED par défaut par le noyau Linux"
            },
            {
              "text": "il est exécuté automatiquement au démarrage du système, ce qui lance le code de l'attaquant"
            },
            {
              "text": "il contient le mot de passe de l'administrateur en clair, que l'attaque imprime ensuite à l'écran"
            },
            {
              "text": "il est protégé en écriture mais lisible par tous, et changer un champ UID suffit à",
              "explanation": "Lisible par tous (donc mappable) mais protégé en écriture, il accorde root dès qu'on met un champ UID à 0."
            }
          ],
          "answer": 3,
          "explanation": "Lisible par tous (donc mappable) mais protégé en écriture, il accorde root dès qu'on met un champ UID à 0.",
          "concept": "Dirty COW · concept",
          "source": "Quiz 6, chapitre 8"
        },
        {
          "id": "ceg4799_quiz6_q29",
          "question": "Avec MAP_SHARED sur un fichier ouvert en écriture, que produit l'affectation map[0] = 'X' ?",
          "code": "map = mmap(NULL, sz, PROT_READ|PROT_WRITE, MAP_SHARED, f, 0);\nmap[0] = 'X';",
          "options": [
            {
              "text": "l'écriture échoue, car la page mémoire mappée est protégée en lecture seule"
            },
            {
              "text": "une copie privée est créée et le fichier d'origine reste parfaitement intact"
            },
            {
              "text": "l'octet 0 du fichier est modifié, car MAP_SHARED reporte l'écriture dans le fichier",
              "explanation": "MAP_SHARED relie la mémoire au fichier : écrire dans la page mappée se répercute directement dans le fichier."
            },
            {
              "text": "seule la mémoire vive change ; le contenu du disque n'est jamais mis à jour ni"
            }
          ],
          "answer": 2,
          "explanation": "MAP_SHARED relie la mémoire au fichier : écrire dans la page mappée se répercute directement dans le fichier.",
          "concept": "Dirty COW · pratique",
          "source": "Quiz 6, chapitre 8"
        },
        {
          "id": "ceg4799_quiz6_q30",
          "question": "Quel est l'état actuel de la vulnérabilité Dirty COW ?",
          "options": [
            {
              "text": "elle n'est toujours pas corrigée et touche l'ensemble des noyaux Linux actuellement en service"
            },
            {
              "text": "elle n'a jamais concerné que les systèmes Windows et reste sans effet sur les systèmes Linux"
            },
            {
              "text": "il s'agissait d'un défaut matériel des processeurs x86, corrigé par une mise à jour du microcode"
            },
            {
              "text": "présente dans le noyau Linux depuis 2007 et exploitée en 2016, elle a été corrigée par",
              "explanation": "Présente dès 2007 et exploitée en 2016, Dirty COW affectait les systèmes Linux (y compris Android) ; elle a été corrigée par un correctif du noyau."
            }
          ],
          "answer": 3,
          "explanation": "Présente dès 2007 et exploitée en 2016, Dirty COW affectait les systèmes Linux (y compris Android) ; elle a été corrigée par un correctif du noyau.",
          "concept": "Dirty COW · concept",
          "source": "Quiz 6, chapitre 8"
        }
      ]
    },
    "examen": {
      "title": "Examen de préparation — Partie I (QCM)",
      "label": "Examen de préparation",
      "questions": [
        {
          "id": "ceg4799_examen_q01",
          "question": "Quel est le corollaire de la défense en profondeur énoncé dans le cours ?",
          "options": [
            {
              "text": "La couche extérieure suffit lorsqu'elle est correctement configurée"
            },
            {
              "text": "Aucune couche n'a le droit de faire confiance à la couche extérieure"
            },
            {
              "text": "Les couches internes deviennent inutiles si le périmètre tient"
            },
            {
              "text": "Une seule couche doit concentrer l'ensemble des contrôles"
            }
          ],
          "answer": 1,
          "explanation": "Corollaire de la défense en profondeur : aucune couche ne doit faire confiance à la couche extérieure.",
          "concept": "Politiques, mécanismes et posture de sécurité",
          "source": "Examen de préparation, question 1"
        },
        {
          "id": "ceg4799_examen_q02",
          "question": "Comment le cours qualifie-t-il une politique sans mécanisme ?",
          "options": [
            {
              "text": "Une norme"
            },
            {
              "text": "Une dépense"
            },
            {
              "text": "Une ligne directrice"
            },
            {
              "text": "Un vœu"
            }
          ],
          "answer": 3,
          "explanation": "Une politique sans mécanisme pour l'appliquer n'est qu'un simple vœu.",
          "concept": "Politiques, mécanismes et posture de sécurité",
          "source": "Examen de préparation, question 2"
        },
        {
          "id": "ceg4799_examen_q03",
          "question": "Comment le risque est-il défini dans le cours ?",
          "options": [
            {
              "text": "Menace × Vulnérabilité"
            },
            {
              "text": "Probabilité × Impact"
            },
            {
              "text": "Actif × Surface d'attaque"
            },
            {
              "text": "Coût × Exposition"
            }
          ],
          "answer": 1,
          "explanation": "Le cours définit le risque comme le produit Probabilité × Impact.",
          "concept": "Politiques, mécanismes et posture de sécurité",
          "source": "Examen de préparation, question 3"
        },
        {
          "id": "ceg4799_examen_q04",
          "question": "Quel principe de Saltzer et Schroeder énonce : « En l'absence de règle explicite, on refuse » ?",
          "options": [
            {
              "text": "Médiation complète"
            },
            {
              "text": "Défauts sûrs"
            },
            {
              "text": "Économie de mécanisme"
            },
            {
              "text": "Conception ouverte"
            }
          ],
          "answer": 1,
          "explanation": "En l'absence de règle explicite, le système refuse l'accès : c'est le principe des « défauts sûrs ».",
          "concept": "Politiques, mécanismes et posture de sécurité",
          "source": "Examen de préparation, question 4"
        },
        {
          "id": "ceg4799_examen_q05",
          "question": "Dans une attaque de la chaîne d'approvisionnement, comment le code malveillant parvient-il aux clients ?",
          "options": [
            {
              "text": "Signé, par le canal officiel de mise à jour"
            },
            {
              "text": "Par une clé USB laissée dans le stationnement"
            },
            {
              "text": "Par un message d'hameçonnage bien ciblé"
            },
            {
              "text": "Par un port de débogage laissé accessible"
            }
          ],
          "answer": 0,
          "explanation": "Dans une attaque de la chaîne d'approvisionnement, le code malveillant arrive signé, par le canal officiel de mise à jour.",
          "concept": "Politiques, mécanismes et posture de sécurité",
          "source": "Examen de préparation, question 5"
        },
        {
          "id": "ceg4799_examen_q06",
          "question": "Quelle propriété manque le plus souvent, notamment à cause d'un compte partagé « admin » ?",
          "options": [
            {
              "text": "Imputabilité"
            },
            {
              "text": "Authenticité"
            },
            {
              "text": "Non-répudiation"
            },
            {
              "text": "Disponibilité"
            }
          ],
          "answer": 0,
          "explanation": "Un compte « admin » partagé fait perdre d'abord l'imputabilité (savoir qui a agi).",
          "concept": "Politiques, mécanismes et posture de sécurité",
          "source": "Examen de préparation, question 6"
        },
        {
          "id": "ceg4799_examen_q07",
          "question": "Par quels trois éléments une menace se décrit-elle ?",
          "options": [
            {
              "text": "Un actif, une probabilité et un coût"
            },
            {
              "text": "Un canal, un outil et une cible"
            },
            {
              "text": "Un acteur, une vulnérabilité et un impact"
            },
            {
              "text": "Un acteur, une capacité et une motivation"
            }
          ],
          "answer": 3,
          "explanation": "Une menace se décrit par un acteur, une capacité et une motivation.",
          "concept": "Politiques, mécanismes et posture de sécurité",
          "source": "Examen de préparation, question 7"
        },
        {
          "id": "ceg4799_examen_q08",
          "question": "Sur quel principe repose techniquement le verrouillage d'un compte par une valeur comme « ! » ?",
          "options": [
            {
              "text": "Aucune sortie de la fonction de hachage ne peut jamais valoir ce texte"
            },
            {
              "text": "Le programme de connexion reconnaît ce texte et ferme la session ouverte"
            },
            {
              "text": "Le noyau retire le compte de la table des identités au prochain démarrage"
            },
            {
              "text": "Le champ devient trop court pour contenir un condensé complet et valide"
            }
          ],
          "answer": 0,
          "explanation": "Le verrouillage par « ! » tient à ce qu'aucune sortie de hachage ne peut valoir ce texte : la comparaison échoue toujours.",
          "concept": "Authentification et contrôle d'accès",
          "source": "Examen de préparation, question 8"
        },
        {
          "id": "ceg4799_examen_q09",
          "question": "Qu'exige précisément une authentification à plusieurs facteurs digne de ce nom ?",
          "options": [
            {
              "text": "Deux facteurs pris dans la même catégorie, pour en doubler la force"
            },
            {
              "text": "Deux facteurs pris dans deux catégories différentes parmi les trois"
            },
            {
              "text": "Trois facteurs pris chacun dans une catégorie, sans exception admise"
            },
            {
              "text": "Deux facteurs dont l'un relève obligatoirement de la biométrie seule"
            }
          ],
          "answer": 1,
          "explanation": "Une authentification multifacteur exige deux facteurs pris dans deux catégories différentes parmi les trois.",
          "concept": "Authentification et contrôle d'accès",
          "source": "Examen de préparation, question 9"
        },
        {
          "id": "ceg4799_examen_q10",
          "question": "Dans /etc/shadow, on observe « root:! », « daemon:* » et « seed:$6$… ». Que signalent les deux premières valeurs ?",
          "options": [
            {
              "text": "« ! » marque un compte de service, « * » un verrouillage par passwd -l"
            },
            {
              "text": "« ! » marque un verrouillage par passwd -l, « * » un compte de service"
            },
            {
              "text": "« ! » marque un condensé expiré, « * » un compte jamais initialisé ici"
            },
            {
              "text": "« ! » marque un compte sans sel, « * » un condensé volontairement vidé"
            }
          ],
          "answer": 1,
          "explanation": "« ! » marque un verrouillage (passwd -l) ; « * » marque un compte de service.",
          "concept": "Authentification et contrôle d'accès",
          "source": "Examen de préparation, question 10"
        },
        {
          "id": "ceg4799_examen_q11",
          "question": "Pourquoi les listes de contrôle d'accès ont-elles été ajoutées au modèle traditionnel d'UNIX ?",
          "options": [
            {
              "text": "Le modèle rwx n'offre que deux classes et ignore totalement les groupes"
            },
            {
              "text": "Le modèle rwx interdit de retirer un droit déjà accordé au propriétaire"
            },
            {
              "text": "Le modèle rwx n'offre qu'un seul groupe et ne nomme aucun utilisateur"
            },
            {
              "text": "Le modèle rwx ne s'applique pas aux fichiers appartenant à root seul"
            }
          ],
          "answer": 2,
          "explanation": "Les ACL ont été ajoutées car le modèle rwx n'offre qu'un seul groupe et ne nomme aucun utilisateur.",
          "concept": "Authentification et contrôle d'accès",
          "source": "Examen de préparation, question 11"
        },
        {
          "id": "ceg4799_examen_q12",
          "question": "Qu'est-ce qui distingue le groupe principal d'un utilisateur de ses groupes secondaires ?",
          "options": [
            {
              "text": "Le principal figure dans /etc/passwd et possède les fichiers créés"
            },
            {
              "text": "Le principal figure dans /etc/group et possède les fichiers créés"
            },
            {
              "text": "Le principal peut être multiple, à la différence des groupes secondaires"
            },
            {
              "text": "Le principal ne sert qu'à l'affichage et n'accorde aucun droit réel"
            }
          ],
          "answer": 0,
          "explanation": "Le groupe principal figure dans /etc/passwd et possède les fichiers créés.",
          "concept": "Authentification et contrôle d'accès",
          "source": "Examen de préparation, question 12"
        },
        {
          "id": "ceg4799_examen_q13",
          "question": "Un répertoire porte le droit x mais pas le droit r pour un utilisateur donné. Que peut faire cet utilisateur ?",
          "options": [
            {
              "text": "Lister le contenu du répertoire, sans pouvoir ouvrir aucun des fichiers"
            },
            {
              "text": "Créer et supprimer des entrées, sans pouvoir traverser ce répertoire là"
            },
            {
              "text": "Ouvrir tous les fichiers du répertoire, y compris ceux du groupe seul"
            },
            {
              "text": "Ouvrir un fichier dont on connaît le nom, sans pouvoir lister le contenu"
            }
          ],
          "answer": 3,
          "explanation": "Avec x sans r sur un répertoire, on peut ouvrir un fichier dont on connaît le nom, mais pas lister le contenu.",
          "concept": "Authentification et contrôle d'accès",
          "source": "Examen de préparation, question 13"
        },
        {
          "id": "ceg4799_examen_q14",
          "question": "Quelle affirmation décrit correctement la nature du umask en tant que mécanisme ?",
          "options": [
            {
              "text": "Il retire des bits par défaut, avant tout chmod explicite ultérieur"
            },
            {
              "text": "Il ajoute des bits par défaut, après tout chmod explicite ultérieur"
            },
            {
              "text": "Il remplace les bits du fichier au moment de chaque ouverture faite"
            },
            {
              "text": "Il impose des bits au groupe, sans jamais toucher aux autres classes"
            }
          ],
          "answer": 0,
          "explanation": "Le umask retire des bits de permission par défaut, avant tout chmod explicite.",
          "concept": "Authentification et contrôle d'accès",
          "source": "Examen de préparation, question 14"
        },
        {
          "id": "ceg4799_examen_q15",
          "question": "Le fichier /etc/sudoers contient la ligne « %admin ALL=(ALL) NOPASSWD: /usr/bin/systemctl ». Que peut faire exactement un membre du groupe admin ?",
          "options": [
            {
              "text": "Lancer n'importe quelle commande en tant que root sans mot de passe"
            },
            {
              "text": "Lancer systemctl en tant que root sans saisir aucun mot de passe"
            },
            {
              "text": "Lancer systemctl en tant que root après saisie du mot de passe root"
            },
            {
              "text": "Ouvrir un shell root permanent sans saisir aucun mot de passe"
            }
          ],
          "answer": 1,
          "explanation": "Avec NOPASSWD limité à systemctl, le membre peut lancer systemctl en root sans aucun mot de passe.",
          "concept": "Programmes Set-UID, environnement et moindre privilège",
          "source": "Examen de préparation, question 15"
        },
        {
          "id": "ceg4799_examen_q16",
          "question": "Débordement de tampon, injection SQL, XSS et injection par system() : quelle cause unique le cours attribue-t-il à ces quatre attaques ?",
          "options": [
            {
              "text": "L'attaquant contrôle une variable d'environnement LD_*"
            },
            {
              "text": "La frontière entre données et code n'a pas été tenue"
            },
            {
              "text": "Le programme vulnérable s'exécute avec l'EUID de root"
            },
            {
              "text": "Un descripteur de fichier privilégié n'a pas été fermé"
            }
          ],
          "answer": 1,
          "explanation": "Ces quatre attaques ont pour cause commune une frontière données/code non tenue.",
          "concept": "Programmes Set-UID, environnement et moindre privilège",
          "source": "Examen de préparation, question 16"
        },
        {
          "id": "ceg4799_examen_q17",
          "question": "Pourquoi l'approche service (démon privilégié qui reçoit des requêtes) réduit-elle la surface d'attaque par rapport à l'approche Set-UID ?",
          "options": [
            {
              "text": "Le service s'exécute sans aucun privilège sur tout le système"
            },
            {
              "text": "Le service est lancé par l'utilisateur avec son propre EUID"
            },
            {
              "text": "Le service n'hérite pas de l'environnement de l'utilisateur"
            },
            {
              "text": "Le service filtre les variables LD_* de l'utilisateur appelant"
            }
          ],
          "answer": 2,
          "explanation": "L'approche service réduit la surface d'attaque car le démon n'hérite pas de l'environnement de l'appelant.",
          "concept": "Programmes Set-UID, environnement et moindre privilège",
          "source": "Examen de préparation, question 17"
        },
        {
          "id": "ceg4799_examen_q18",
          "question": "« ls -l prog » affiche « -rwsr-xr-x 1 bob staff … prog ». L'utilisateur alice lance prog, qui ouvre un fichier. Avec quels droits le noyau contrôle-t-il cet accès ?",
          "options": [
            {
              "text": "Ceux d'alice, qui a lancé le programme"
            },
            {
              "text": "Ceux du groupe staff, groupe du fichier"
            },
            {
              "text": "Ceux de bob, propriétaire du programme"
            },
            {
              "text": "Ceux de root, car le bit « s » est actif"
            }
          ],
          "answer": 2,
          "explanation": "Un programme Set-UID s'exécute avec les droits de son propriétaire : ici ceux de bob.",
          "concept": "Programmes Set-UID, environnement et moindre privilège",
          "source": "Examen de préparation, question 18"
        },
        {
          "id": "ceg4799_examen_q19",
          "question": "chsh, programme Set-UID, écrit dans /etc/passwd le shell choisi par l'utilisateur. Un attaquant fournit une valeur qui ajoute une ligne entière avec l'UID 0. Quel défaut est exploité ?",
          "options": [
            {
              "text": "Condition de course : le fichier change entre deux accès"
            },
            {
              "text": "Débordement de tampon : l'adresse de retour est écrasée"
            },
            {
              "text": "Chaîne de format : printf lit puis écrit dans la mémoire"
            },
            {
              "text": "Entrée non assainie : aucune validation du contenu fourni"
            }
          ],
          "answer": 3,
          "explanation": "L'injection d'une ligne d'UID 0 exploite une entrée non assainie (contenu non validé).",
          "concept": "Programmes Set-UID, environnement et moindre privilège",
          "source": "Examen de préparation, question 19"
        },
        {
          "id": "ceg4799_examen_q20",
          "question": "Un Set-UID root vérifie que /tmp/rapport appartient bien à l'utilisateur, puis l'ouvre en écriture. Entre les deux, l'attaquant le remplace par un lien vers /etc/shadow. Quel est ce type d'attaque ?",
          "options": [
            {
              "text": "Une injection par PATH qui fait exécuter un faux programme root"
            },
            {
              "text": "Un débordement de tampon provoqué par un nom de fichier trop long"
            },
            {
              "text": "Une fuite de capacités par un descripteur resté ouvert au shell"
            },
            {
              "text": "Une condition de course TOCTTOU entre vérification et usage"
            }
          ],
          "answer": 3,
          "explanation": "Remplacer la cible entre la vérification et l'ouverture est une condition de course TOCTTOU.",
          "concept": "Programmes Set-UID, environnement et moindre privilège",
          "source": "Examen de préparation, question 20"
        },
        {
          "id": "ceg4799_examen_q21",
          "question": "Un programme privilégié doit lancer un utilitaire en ne lui transmettant que des variables d'environnement sûres. Quel appel lui permet ce choix ?",
          "options": [
            {
              "text": "fork(), qui crée l'enfant avec un environnement entièrement vide"
            },
            {
              "text": "execvp(), qui cherche le programme dans un PATH jugé sûr"
            },
            {
              "text": "execve(), qui reçoit l'environnement en troisième argument"
            },
            {
              "text": "system(), qui transmet au shell un environnement déjà assaini"
            }
          ],
          "answer": 2,
          "explanation": "execve() reçoit l'environnement à transmettre en troisième argument : il permet de le maîtriser.",
          "concept": "Programmes Set-UID, environnement et moindre privilège",
          "source": "Examen de préparation, question 21"
        },
        {
          "id": "ceg4799_examen_q22",
          "question": "« ls -l /etc/shadow » affiche « -rw-r----- 1 root shadow ». L'utilisateur seed, qui n'appartient pas au groupe shadow, tape « cat /etc/shadow ». Que se passe-t-il ?",
          "options": [
            {
              "text": "Refusé : la classe « autres » n'a aucun droit sur ce fichier"
            },
            {
              "text": "Permis : le groupe shadow accorde la lecture à tout le monde"
            },
            {
              "text": "Refusé : seul le propriétaire root peut accéder à ce fichier"
            },
            {
              "text": "Permis en lecture seule, mais toute écriture lui est refusée"
            }
          ],
          "answer": 0,
          "explanation": "L'utilisateur tombe dans la classe « autres » (---), donc la lecture de /etc/shadow est refusée.",
          "concept": "Programmes Set-UID, environnement et moindre privilège",
          "source": "Examen de préparation, question 22"
        },
        {
          "id": "ceg4799_examen_q23",
          "question": "Après « sudo setcap cap_net_raw+ep ./mon_ping », la commande getcap affiche « ./mon_ping cap_net_raw=ep ». Que signifient les lettres « e » et « p » ?",
          "options": [
            {
              "text": "La capacité est effective et permise pour ce programme"
            },
            {
              "text": "La capacité est exportée et propagée aux processus enfants"
            },
            {
              "text": "La capacité est effacée puis purgée à la fin du programme"
            },
            {
              "text": "La capacité est exécutable et publique pour tout le monde"
            }
          ],
          "answer": 0,
          "explanation": "« e » = effective, « p » = permise : la capacité est permise et active pour ce programme.",
          "concept": "Programmes Set-UID, environnement et moindre privilège",
          "source": "Examen de préparation, question 23"
        },
        {
          "id": "ceg4799_examen_q24",
          "question": "Dans une attaque avec injection de shellcode sur la pile, vers quoi l'adresse de saut écrite dans l'entrée doit-elle pointer ?",
          "options": [
            {
              "text": "l'adresse exacte du premier octet du shellcode, sans marge"
            },
            {
              "text": "l'adresse de main, pour relancer le programme depuis le début"
            },
            {
              "text": "un point de la glissière de NOP, au-dessus de la base du tampon"
            },
            {
              "text": "la valeur de %esp au moment précis où l'instruction ret agit"
            }
          ],
          "answer": 2,
          "explanation": "L'adresse de saut doit pointer dans la glissière de NOP, au-dessus de la base du tampon.",
          "concept": "Débordement de tampon et contre-mesures",
          "source": "Examen de préparation, question 24"
        },
        {
          "id": "ceg4799_examen_q25",
          "question": "Le binaire vulnérable donne des adresses de pile stables sous gdb, mais décalées à l'exécution directe. Quel mécanisme cause cet écart, et comment le neutraliser pour le laboratoire ?",
          "options": [
            {
              "text": "gdb ajoute ses variables au cadre de la fonction ; compiler en -static"
            },
            {
              "text": "le canari change à chaque exécution ; compiler en -fno-stack-protector"
            },
            {
              "text": "la pile devient non exécutable ; compiler avec -z execstack"
            },
            {
              "text": "l'ASLR randomise la base de la pile ; le désactiver fige les adresses"
            }
          ],
          "answer": 3,
          "explanation": "C'est l'ASLR qui fait varier les adresses à l'exécution directe ; on le désactive pour les figer.",
          "concept": "Débordement de tampon et contre-mesures",
          "source": "Examen de préparation, question 25"
        },
        {
          "id": "ceg4799_examen_q26",
          "question": "Le tampon vulnérable est déclaré char buffer[100]. Pourquoi mesurer au débogueur le décalage jusqu'à l'adresse de retour, plutôt que le déduire de cette taille de 100 ?",
          "options": [
            {
              "text": "parce que le décalage change à chaque exécution du même binaire"
            },
            {
              "text": "parce que l'alignement et le padding du compilateur décalent l'offset"
            },
            {
              "text": "parce que gdb modifie lui-même la disposition de la pile observée"
            },
            {
              "text": "parce que deviner l'adresse déclenche toujours le canari de pile"
            }
          ],
          "answer": 1,
          "explanation": "On mesure le décalage car l'alignement et le bourrage le rendent supérieur à la taille déclarée.",
          "concept": "Débordement de tampon et contre-mesures",
          "source": "Examen de préparation, question 26"
        },
        {
          "id": "ceg4799_examen_q27",
          "question": "Tu places le shellcode au tout début de l'entrée et l'adresse de saut à la toute fin, et l'attaque échoue. Quel agencement des trois morceaux fonctionne ?",
          "options": [
            {
              "text": "le shellcode, puis l'adresse de saut, puis la glissière de NOP"
            },
            {
              "text": "la glissière, puis l'adresse de saut, puis le shellcode à la fin"
            },
            {
              "text": "l'adresse de saut, puis la glissière de NOP, puis le shellcode"
            },
            {
              "text": "le shellcode encadré par deux glissières, l'adresse au milieu"
            }
          ],
          "answer": 1,
          "explanation": "Montage correct : glissière de NOP, puis adresse de saut à l'offset du retour, puis shellcode à la fin.",
          "concept": "Débordement de tampon et contre-mesures",
          "source": "Examen de préparation, question 27"
        },
        {
          "id": "ceg4799_examen_q28",
          "question": "Le binaire vulnérable est Set-UID root. En quoi cela change-t-il l'enjeu d'une attaque par injection de shellcode réussie ?",
          "options": [
            {
              "text": "cela empêche l'attaque, car Set-UID ignore le contenu du fichier"
            },
            {
              "text": "le code injecté s'exécute avec les privilèges root du propriétaire"
            },
            {
              "text": "cela active automatiquement le canari de pile à la compilation"
            },
            {
              "text": "cela déplace le tampon vers un segment mémoire en lecture seule"
            }
          ],
          "answer": 1,
          "explanation": "Sur un binaire Set-UID root, le shellcode injecté s'exécute avec les droits root du propriétaire.",
          "concept": "Débordement de tampon et contre-mesures",
          "source": "Examen de préparation, question 28"
        },
        {
          "id": "ceg4799_examen_q29",
          "question": "Ton adresse de saut atterrit dans la glissière et le shellcode est intact, mais tu obtiens « Segmentation fault » dès l'exécution des octets 0x90. Cause la plus probable ?",
          "options": [
            {
              "text": "l'adresse de saut contenait malgré tout un octet nul (0x00)"
            },
            {
              "text": "le décalage utilisé était trop court de quatre octets"
            },
            {
              "text": "l'ASLR était resté actif pendant cette exécution du binaire"
            },
            {
              "text": "la pile n'est pas exécutable (bit NX) : rien ne s'y exécute"
            }
          ],
          "answer": 3,
          "explanation": "Un segfault dès l'exécution des 0x90 vient d'une pile non exécutable (bit NX).",
          "concept": "Débordement de tampon et contre-mesures",
          "source": "Examen de préparation, question 29"
        },
        {
          "id": "ceg4799_examen_q30",
          "question": "La même attaque, sur le même binaire, réussissait hier et échoue aujourd'hui ; les adresses de pile relevées diffèrent à chaque exécution. Qu'est-ce qui a changé sur le système ?",
          "options": [
            {
              "text": "le binaire a été recompilé récemment avec un canari de pile"
            },
            {
              "text": "l'ASLR réactivé : la base de la pile change à chaque exécution"
            },
            {
              "text": "la pile a été rendue non exécutable par le système d'exploitation"
            },
            {
              "text": "le fichier d'entrée a été passé en lecture seule sur le disque"
            }
          ],
          "answer": 1,
          "explanation": "Des adresses de pile différentes à chaque exécution signalent la réactivation de l'ASLR.",
          "concept": "Débordement de tampon et contre-mesures",
          "source": "Examen de préparation, question 30"
        },
        {
          "id": "ceg4799_examen_q31",
          "question": "Programme vulnérable stack.c : la fonction foo copie une entrée contrôlée par l'attaquant dans char buffer[100] via strcpy. Pour mener l'attaque, quelle est la toute première mesure à obtenir au débogueur avant de fabriquer le fichier ?",
          "options": [
            {
              "text": "l'adresse de la fonction system() dans la libc chargée en mémoire"
            },
            {
              "text": "le nombre total d'octets que le programme lit dans le fichier"
            },
            {
              "text": "l'adresse de base du tampon et celle du %ebp sauvegardé"
            },
            {
              "text": "la valeur du canari que le compilateur insère dans le cadre"
            }
          ],
          "answer": 2,
          "explanation": "La toute première mesure à relever est la base du tampon et le %ebp sauvegardé.",
          "concept": "Débordement de tampon et contre-mesures",
          "source": "Examen de préparation, question 31"
        },
        {
          "id": "ceg4799_examen_q32",
          "question": "Sous gdb, pour le cadre de la fonction vulnérable, info frame affiche « saved eip = 0x0804851a ». Que désigne cette valeur pour l'attaque ?",
          "options": [
            {
              "text": "le sommet courant de la pile, celui que pointe %esp"
            },
            {
              "text": "la base du tampon local de la fonction vulnérable"
            },
            {
              "text": "l'adresse de retour : l'endroit où l'exécution reprend"
            },
            {
              "text": "l'adresse de l'instruction en cours dans la fonction"
            }
          ],
          "answer": 2,
          "explanation": "« saved eip » est l'adresse de retour, où l'exécution reprend après la fonction.",
          "concept": "Débordement de tampon et contre-mesures",
          "source": "Examen de préparation, question 32"
        },
        {
          "id": "ceg4799_examen_q33",
          "question": "Dans exploit.py, à quel décalage (mesuré depuis le %ebp de bof()) place-t-on l'adresse de system() ?",
          "options": [
            {
              "text": "ebp + 4, à l'adresse de retour de bof()"
            },
            {
              "text": "ebp + 8, juste après l'adresse de retour"
            },
            {
              "text": "ebp + 12, à la place de l'argument"
            },
            {
              "text": "ebp − 4, dans les variables locales"
            }
          ],
          "answer": 0,
          "explanation": "L'adresse de system() se place à l'adresse de retour de bof(), soit ebp + 4.",
          "concept": "Retour à la libc",
          "source": "Examen de préparation, question 33"
        },
        {
          "id": "ceg4799_examen_q34",
          "question": "Comment obtient-on le décalage jusqu'au %ebp de bof(), que retlib aide à mesurer ?",
          "options": [
            {
              "text": "à partir des deux adresses affichées par retlib : ebp − adresse du tampon"
            },
            {
              "text": "il vaut toujours BUF_SIZE, soit la taille déclarée du tampon"
            },
            {
              "text": "en soustrayant $eip de $esp sous gdb"
            },
            {
              "text": "en retranchant la taille du shellcode des 300 octets"
            }
          ],
          "answer": 0,
          "explanation": "Le décalage se calcule par ebp − adresse du tampon (les deux valeurs affichées par retlib).",
          "concept": "Retour à la libc",
          "source": "Examen de préparation, question 34"
        },
        {
          "id": "ceg4799_examen_q35",
          "question": "Pour charger la libc puis relever l'adresse de system() et de exit(), quelles commandes gdb utilise-t-on sur retlib ?",
          "options": [
            {
              "text": "break bof, puis print &buffer"
            },
            {
              "text": "run, puis p system et p exit"
            },
            {
              "text": "info registers, puis x/i $eip"
            },
            {
              "text": "disassemble main, puis stepi"
            }
          ],
          "answer": 1,
          "explanation": "run charge la libc, puis p system et p exit affichent les deux adresses recherchées.",
          "concept": "Retour à la libc",
          "source": "Examen de préparation, question 35"
        },
        {
          "id": "ceg4799_examen_q36",
          "question": "Quelle commande désactive l'ASLR dans la VM SEED pour rendre l'attaque reproductible ?",
          "options": [
            {
              "text": "gcc -z execstack retlib.c"
            },
            {
              "text": "echo 2 > /proc/sys/kernel/randomize_va_space"
            },
            {
              "text": "sudo sysctl -w kernel.randomize_va_space=0"
            },
            {
              "text": "sudo setcap cap_net_raw+ep ./retlib"
            }
          ],
          "answer": 2,
          "explanation": "sudo sysctl -w kernel.randomize_va_space=0 désactive l'ASLR et fige les adresses.",
          "concept": "Retour à la libc",
          "source": "Examen de préparation, question 36"
        },
        {
          "id": "ceg4799_examen_q37",
          "question": "L'adresse de exit() est placée au décalage ebp + 8, juste après celle de system(). À quoi sert-elle ?",
          "options": [
            {
              "text": "à relancer bof() pour rejouer l'attaque en boucle"
            },
            {
              "text": "à servir d'adresse de retour à system(), pour terminer proprement au lieu de planter"
            },
            {
              "text": "à faire pointer l'exécution vers une glissière de NOP"
            },
            {
              "text": "à libérer la mémoire que system() a allouée"
            }
          ],
          "answer": 1,
          "explanation": "exit() sert d'adresse de retour à system() : le programme se termine proprement à la fin du shell.",
          "concept": "Retour à la libc",
          "source": "Examen de préparation, question 37"
        },
        {
          "id": "ceg4799_examen_q38",
          "question": "Toujours dans exploit.py, où place-t-on l'adresse de la chaîne « /bin/sh », argument de system() ?",
          "options": [
            {
              "text": "au décalage ebp + 4"
            },
            {
              "text": "au décalage ebp + 8"
            },
            {
              "text": "au décalage ebp + 12"
            },
            {
              "text": "à la base du tampon, décalage 0"
            }
          ],
          "answer": 2,
          "explanation": "L'adresse de « /bin/sh », argument de system(), se place au décalage ebp + 12.",
          "concept": "Retour à la libc",
          "source": "Examen de préparation, question 38"
        },
        {
          "id": "ceg4799_examen_q39",
          "question": "Quel est l'état actuel de la vulnérabilité Dirty COW ?",
          "options": [
            {
              "text": "elle n'est toujours pas corrigée et touche l'ensemble des noyaux Linux actuellement en service"
            },
            {
              "text": "elle n'a jamais concerné que les systèmes Windows et reste sans effet sur les systèmes Linux"
            },
            {
              "text": "il s'agissait d'un défaut matériel des processeurs x86, corrigé par une mise à jour du microcode"
            },
            {
              "text": "présente dans le noyau Linux depuis 2007 et exploitée en 2016, elle a été corrigée par un correctif"
            }
          ],
          "answer": 3,
          "explanation": "Dirty COW : apparue de longue date, largement exploitée en 2016, puis corrigée par un correctif du noyau.",
          "concept": "Chaîne de format, condition de course et Dirty COW",
          "source": "Examen de préparation, question 39"
        },
        {
          "id": "ceg4799_examen_q40",
          "question": "Pourquoi le spécificateur %s provoque-t-il souvent un plantage lorsqu'il est injecté dans une chaîne de format ?",
          "options": [
            {
              "text": "%s déréférence la valeur prise sur la pile comme une adresse ; si elle est invalide, le programme s'arrête"
            },
            {
              "text": "%s déclenche volontairement le canari de pile, dont la vérification interrompt aussitôt l'exécution"
            },
            {
              "text": "%s écrit toujours dans une page mémoire marquée en lecture seule, ce qui déclenche une faute de protection"
            },
            {
              "text": "%s consomme la totalité de l'espace de pile restant, provoquant un dépassement vers le bas de la pile"
            }
          ],
          "answer": 0,
          "explanation": "%s déréférence une valeur de la pile comme une adresse ; si elle est invalide, le programme plante.",
          "concept": "Chaîne de format, condition de course et Dirty COW",
          "source": "Examen de préparation, question 40"
        },
        {
          "id": "ceg4799_examen_q41",
          "question": "Que fait mmap() par défaut (mappage adossé à un fichier) ?",
          "options": [
            {
              "text": "il crée un nouveau processus enfant qui partage la pile et les registres du processus parent appelant"
            },
            {
              "text": "il mappe une zone de mémoire virtuelle sur un fichier : lire la zone mappée revient à lire le fichier"
            },
            {
              "text": "il chiffre le contenu d'un fichier sur place, en mémoire, puis réécrit le résultat chiffré sur le disque"
            },
            {
              "text": "il alloue une zone de mémoire sur le tas et la remplit de zéros avant de la rendre au programme appelant"
            }
          ],
          "answer": 1,
          "explanation": "mmap (adossé à un fichier) relie une zone mémoire au contenu d'un fichier.",
          "concept": "Chaîne de format, condition de course et Dirty COW",
          "source": "Examen de préparation, question 41"
        },
        {
          "id": "ceg4799_examen_q42",
          "question": "Qu'est-ce qu'une vulnérabilité de type TOCTTOU ?",
          "options": [
            {
              "text": "un intervalle entre la vérification et l'utilisation d'une ressource, durant lequel celle-ci peut changer"
            },
            {
              "text": "un interblocage entre deux fils d'exécution qui détiennent chacun un verrou attendu par l'autre"
            },
            {
              "text": "un débordement de tampon qui ne se manifeste qu'à une heure précise de la journée, selon l'horloge système"
            },
            {
              "text": "une attaque temporelle qui mesure la durée d'une comparaison cryptographique pour deviner un secret"
            }
          ],
          "answer": 0,
          "explanation": "Une TOCTTOU est un intervalle entre la vérification et l'utilisation d'une ressource, durant lequel elle peut changer.",
          "concept": "Chaîne de format, condition de course et Dirty COW",
          "source": "Examen de préparation, question 42"
        },
        {
          "id": "ceg4799_examen_q43",
          "question": "La chaîne de format vient de l'utilisateur. Que fait gcc compilé avec l'option -Wformat=2 ?",
          "code": "char *fmt = lire_entree();\nprintf(fmt, 5, 4);",
          "options": [
            {
              "text": "il ne signale rien, car des arguments sont bien fournis à l'appel de printf"
            },
            {
              "text": "il remplace automatiquement la variable fmt par la chaîne littérale \"%s\""
            },
            {
              "text": "il refuse de compiler et signale une erreur fatale bloquant la génération de l'exécutable"
            },
            {
              "text": "il émet un avertissement (format non littéral) mais compile tout de même le programme"
            }
          ],
          "answer": 3,
          "explanation": "Avec -Wformat=2, gcc émet un avertissement (format non littéral) mais compile tout de même.",
          "concept": "Chaîne de format, condition de course et Dirty COW",
          "source": "Examen de préparation, question 43"
        },
        {
          "id": "ceg4799_examen_q44",
          "question": "Dans ce fragment d'un programme Set-UID root, où se situe la fenêtre TOCTTOU exploitable ?",
          "code": "if (access(\"/tmp/X\", W_OK) == 0) {   /* (1) contrôle */\n    f = open(\"/tmp/X\", O_WRONLY); /* (2) usage */\n    write_to_file(f);\n}",
          "options": [
            {
              "text": "entre (1) et (2) : la cible de « /tmp/X » peut changer après access() et avant open()"
            },
            {
              "text": "après open(), une fois le descripteur de fichier obtenu par le programme"
            },
            {
              "text": "à l'intérieur de write_to_file(), pendant l'écriture des données dans le fichier cible visé"
            },
            {
              "text": "dans access() lui-même, qui lit deux fois de suite les permissions du fichier"
            }
          ],
          "answer": 0,
          "explanation": "La fenêtre TOCTTOU se situe entre access() et open() : la cible du nom peut changer.",
          "concept": "Chaîne de format, condition de course et Dirty COW",
          "source": "Examen de préparation, question 44"
        },
        {
          "id": "ceg4799_examen_q45",
          "question": "Le paramètre s provient du réseau. Quelle est la faille, et quel est le correctif minimal ?",
          "code": "void log_msg(char *s) {\n    printf(s);        /* s vient du réseau */\n}",
          "options": [
            {
              "text": "débordement de tampon : borner la longueur de s avant l'appel"
            },
            {
              "text": "déréférencement nul : tester if (s != NULL) avant l'appel"
            },
            {
              "text": "s sert de chaîne de format : la corriger en printf(\"%s\", s)"
            },
            {
              "text": "fuite de mémoire : libérer s avec free(s) après l'appel"
            }
          ],
          "answer": 2,
          "explanation": "Le paramètre est utilisé comme chaîne de format ; le correctif minimal est printf(\"%s\", …).",
          "concept": "Chaîne de format, condition de course et Dirty COW",
          "source": "Examen de préparation, question 45"
        },
        {
          "id": "ceg4799_examen_q46",
          "question": "Avec MAP_SHARED sur un fichier ouvert en écriture, que produit l'affectation map[0] = 'X' ?",
          "code": "map = mmap(NULL, sz, PROT_READ|PROT_WRITE, MAP_SHARED, f, 0);\nmap[0] = 'X';",
          "options": [
            {
              "text": "l'écriture échoue, car la page mémoire mappée est protégée en lecture seule"
            },
            {
              "text": "une copie privée est créée et le fichier d'origine reste parfaitement intact"
            },
            {
              "text": "l'octet 0 du fichier est modifié, car MAP_SHARED reporte l'écriture dans le fichier"
            },
            {
              "text": "seule la mémoire vive change ; le contenu du disque n'est jamais mis à jour ni synchronisé"
            }
          ],
          "answer": 2,
          "explanation": "Avec MAP_SHARED, map[0] = 'X' modifie l'octet 0 du fichier sur le disque.",
          "concept": "Chaîne de format, condition de course et Dirty COW",
          "source": "Examen de préparation, question 46"
        },
        {
          "id": "ceg4799_examen_q47",
          "question": "Comment la contre-mesure « vérification et utilisation répétées » réduit-elle le risque ?",
          "options": [
            {
              "text": "en retirant le bit collant du répertoire /tmp, ce qui empêche la création de nouveaux liens symboliques"
            },
            {
              "text": "en répétant contrôle et usage et en comparant les inodes : la course doit alors être gagnée plusieurs fois"
            },
            {
              "text": "en rendant le fichier cible accessible en lecture seule, ce qui bloque toute écriture concurrente"
            },
            {
              "text": "en imprimant un avertissement à chaque ouverture, afin que l'administrateur repère l'attaque en cours"
            }
          ],
          "answer": 1,
          "explanation": "En répétant contrôle et usage (inodes comparés), l'attaquant doit gagner la course plusieurs fois de suite.",
          "concept": "Chaîne de format, condition de course et Dirty COW",
          "source": "Examen de préparation, question 47"
        },
        {
          "id": "ceg4799_examen_q48",
          "question": "Le prototype est int printf(const char *format, ...). Pourquoi le compilateur ne proteste-t-il pas si l'on passe moins d'arguments que de spécificateurs ?",
          "options": [
            {
              "text": "parce que la chaîne de format n'est lue qu'à l'édition de liens, une fois le nombre d'arguments connu"
            },
            {
              "text": "parce que printf() est variadique : le nombre d'arguments n'est pas confronté à la chaîne de format"
            },
            {
              "text": "parce que les arguments facultatifs manquants sont automatiquement remplacés par la valeur 0 à l'appel"
            },
            {
              "text": "parce que les spécificateurs en trop sont retirés par le préprocesseur au moment de la compilation du code"
            }
          ],
          "answer": 1,
          "explanation": "printf est variadique : ses arguments ne sont pas confrontés à la chaîne de format, d'où l'absence d'avertissement.",
          "concept": "Chaîne de format, condition de course et Dirty COW",
          "source": "Examen de préparation, question 48"
        },
        {
          "id": "ceg4799_examen_q49",
          "question": "Pourquoi le canari de pile (StackGuard) ne contre-t-il pas de façon fiable les attaques par chaîne de format ?",
          "options": [
            {
              "text": "parce que StackGuard ne protège que les tampons situés sur le tas et jamais ceux de la pile d'exécution"
            },
            {
              "text": "une écriture par %n n'altère qu'un emplacement, sans toucher au canari, contrairement à un débordement"
            },
            {
              "text": "parce que la valeur du canari est d'abord imprimée par un %x, puis réutilisée telle quelle par l'attaquant"
            },
            {
              "text": "parce que StackGuard est automatiquement désactivé dès qu'une fonction de la famille printf est appelée"
            }
          ],
          "answer": 1,
          "explanation": "Une écriture %n ne modifie qu'un emplacement ciblé, sans toucher au canari : StackGuard ne la bloque pas.",
          "concept": "Chaîne de format, condition de course et Dirty COW",
          "source": "Examen de préparation, question 49"
        },
        {
          "id": "ceg4799_examen_q50",
          "question": "Qu'est-ce que la copie sur écriture (copy-on-write) ?",
          "options": [
            {
              "text": "une méthode pour copier un fichier d'un disque à un autre en l'écrivant deux fois afin d'en vérifier l'intégrité"
            },
            {
              "text": "un mécanisme de verrouillage qui sérialise les écritures concurrentes de plusieurs processus en mémoire partagée"
            },
            {
              "text": "une sauvegarde automatique du contenu d'un fichier, réalisée par le noyau avant chaque écriture sur ce fichier"
            },
            {
              "text": "plusieurs pages virtuelles partagent une page physique en lecture ; au premier écrit, le contenu est copié ailleurs"
            }
          ],
          "answer": 3,
          "explanation": "La copie sur écriture : une page partagée en lecture est copiée au premier accès en écriture.",
          "concept": "Chaîne de format, condition de course et Dirty COW",
          "source": "Examen de préparation, question 50"
        }
      ]
    }
  }
};
