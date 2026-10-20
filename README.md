# Révision interactive — plusieurs cours

Ouvrir `index.html` dans un navigateur récent. Le site fonctionne localement, sans installation ni dépendance externe. L'accueil liste les cours; chaque cours a ses chapitres (ou quiz), ses réglages de séance et son historique.

## Cours

| Dossier | Cours | Contenu | Langues |
| --- | --- | --- | --- |
| `courses/csi4506/` | CSI 4506 — Introduction à l'intelligence artificielle | Huit chapitres reliés à `Slides_PDF/01.pdf` à `08.pdf`; 15 V/F et 10 QCM par banque. Questions d'entraînement générées à partir des supports, pas des questions officielles. | Français, anglais |
| `courses/ceg4799/` | CEG 4799 / CSI 4539 — Conception de systèmes informatiques sécuritaires | Quiz 1, 2, 3, 4 et 6 (130 QCM), extraits des corrigés `Quiz1-Sol.pdf` à `Quiz6-Sol.pdf`. | Français |

### CSI 4506

- Une séance standard tire 15 V/F et 10 QCM et dure au maximum 60 minutes, conformément aux indications du Quiz 1 dans `Slides_PDF/FAQ.pdf`.
- Les questions françaises vivent dans `courses/csi4506/question-bank.js`; leurs traductions anglaises sont alignées par identifiant dans `courses/csi4506/question-bank-en.js`.
- V/F : `[énoncé, réponseBooléenne, indice, explication, concept, difficulté, pagePDF]`.
- QCM : `[question, indexCorrect0à3, choixABCD, indice, explicationsParChoix, concept, difficulté, pagePDF]`.
- Conserve au moins 15 questions V/F et 10 QCM dans chaque banque pour remplir une session standard. Dès qu'une catégorie dépasse le quota, l'application tire aléatoirement les questions de cette catégorie.

### CEG 4799 / CSI 4539

- Une séance reprend toutes les questions du quiz choisi (60 minutes au maximum).
- Les questions, les choix et les explications reprennent le texte des corrigés. Les corrigés ne donnent ni indice ni niveau de difficulté; le concept correspond au sujet ou à la section du quiz et la source renvoie au quiz et à la diapositive ou au chapitre.
- Quiz 1 : l'explication combine la « solution détaillée » et le paragraphe sur les autres options. Quiz 6 : seule la bonne réponse a une justification.
- Quiz 4 : le corrigé n'imprime que la bonne réponse. Les énoncés reprennent les titres des questions sous forme de question et le texte des distracteurs est reformulé à partir de leurs explications.
- Pas encore de traduction anglaise : en mode anglais, l'interface est traduite et les questions restent en français.

## Ajouter un cours

1. Créer `courses/<code>/question-bank.js` qui enregistre le cours dans `window.COURSES["<code>"]` :

   ```js
   window.COURSES = window.COURSES || {};
   window.COURSES.moncours = {
     code: "ABC 1234",
     title: {fr: "Titre du cours", en: "Course title"},   // en facultatif
     term: {fr: "Automne 2026"},
     unit: {fr: ["chapitre", "chapitres"], en: ["chapter", "chapters"]},
     intro: {fr: "Description affichée sur la page du cours."},
     timerNote: {fr: "Simulation chronométrée : 60 minutes."},
     session: {tf: 15, mc: 10, minutes: 60},              // null = toutes les questions de ce type
     chapters: {
       chapitre1: {title: "Titre", label: "Chapitre 1", questions: [
         {id: "abc_ch1_q01", question: "…", code: "extrait facultatif",
          options: [{text: "…", explanation: "facultatif"}, …], answer: 0,
          explanation: "…", concept: "…", source: "…"},
         {id: "abc_ch1_tf01", type: "true_false", question: "…", answer: true, explanation: "…", concept: "…", source: "…"}
       ]}
     }
   };
   ```

   `hint` et `difficulty` sont facultatifs; sans eux, le bouton d'indice et l'étiquette de niveau sont masqués.
2. Ajouter la balise `<script defer src="courses/<code>/question-bank.js">` dans `index.html`, avant `app.js`.
3. Pour une traduction anglaise, définir `window.COURSES.<code>.translations` (indexé par identifiant de question) et `titleEn` sur chaque chapitre, comme dans `courses/csi4506/question-bank-en.js`.

L'interface est dans `app.js` et l'apparence dans `styles.css`.

## Données et export

Les tentatives terminées sont gardées dans le `localStorage` de ce navigateur, avec le cours concerné; l'historique enregistré avant l'ajout des cours est rattaché à CSI 4506. Les exports incluent les choix, la réponse, l'indice, la difficulté, le concept, le corrigé et la source; l'export des erreurs inclut aussi les questions passées. Aucune donnée n'est envoyée à un service externe.
