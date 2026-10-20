(() => {
  "use strict";
  const STORAGE_KEY = "csi4506_revision_history_v1";
  const COURSE_KEY = "revision_course_v1";
  // History saved before courses existed has no course field and belongs to CSI 4506.
  const LEGACY_COURSE = "csi4506";
  const COURSES = window.COURSES || {};
  const app = document.getElementById("app");
  let currentCourse = (() => { try { const v = localStorage.getItem(COURSE_KEY); return COURSES[v] ? v : null; } catch { return null; } })();
  let view = currentCourse ? "home" : "courses";
  let currentChapter = null;
  let selectedMode = "review";
  let mixQuestions = true;
  let session = null;
  let currentIndex = 0;
  let rerunFromErrors = false;
  let timerInterval = null;
  const LANGUAGE_KEY = "csi4506_revision_language_v1";
  let language = (() => { try { return localStorage.getItem(LANGUAGE_KEY) === "en" ? "en" : "fr"; } catch { return "fr"; } })();

  // The question bank remains authored in French; these pairs translate interface copy.
  const uiEnglish = {
    "Révision interactive":"Interactive review", "Accueil CSI 4506":"CSI 4506 home", "Fiches de cours":"Course notes",
    "Automne 2026":"Fall 2026", "Accueil":"Home", "Un outil d'entraînement local, à partir des supports du cours.":"A local practice tool based on the course materials.",
    "Progression enregistrée dans ce navigateur.":"Progress is saved in this browser.", "Étudier en comprenant":"Learn by understanding",
    "Révise les idées.":"Review the ideas.", "Teste ton raisonnement.":"Test your reasoning.",
    "Huit chapitres, deux modes de pratique et des corrections expliquées. Les questions suivent les consignes de la FAQ : appliquer les notions, comparer des concepts proches et interpréter des exemples.":"Eight chapters, two practice modes, and explained answers. The questions follow the FAQ guidance: apply ideas, compare related concepts, and interpret examples.",
    "Format par séance":"Session format", "questions":"questions", "15 vrai/faux et 10 choix multiples · Une séance de pratique inspirée du format du quiz.":"15 true/false and 10 multiple-choice questions · A practice session inspired by the quiz format.",
    "Choisis un chapitre":"Choose a chapter", "Chaque séance tire 15 V/F et 10 QCM de sa banque de questions.":"Each session draws 15 true/false and 10 multiple-choice questions from its question bank.",
    "chapitres":"chapters", "Chapitre":"Chapter", "Dernier":"Latest", "Meilleur":"Best", "questions dans la banque":"questions in the bank",
    "À propos du contenu :":"About the content:", "les banques ciblent les notions et applications des PDF. Certains chapitres contiennent pour l'instant exactement 25 questions; d'autres questions pourront être ajoutées à":"The question banks focus on concepts and applications from the PDFs. Some chapters currently contain exactly 25 questions; more questions can be added to",
    "sans changer l'application.":"without changing the application.", "Sessions récentes":"Recent sessions", "Tous les chapitres":"All chapters",
    "Choisis comment tu veux t'entraîner. Les séances standard comprennent jusqu'à 15 vrai/faux et 10 choix multiples.":"Choose how you want to practice. Standard sessions include up to 15 true/false and 10 multiple-choice questions.",
    "Choisis un mode":"Choose a mode", "Le mode révision affiche une correction après chaque réponse. Le mode examen garde les réponses pour la fin.":"Review mode shows feedback after each answer. Exam mode saves feedback until the end.",
    "Mode révision":"Review mode", "Indice facultatif, correction immédiate et explications des choix.":"Optional hint, immediate feedback, and explanations for each choice.",
    "Mode examen":"Exam mode", "Aucune correction pendant la séance; bilan complet à la fin.":"No feedback during the session; full results at the end.",
    "Mélanger les questions et l'ordre des choix":"Shuffle questions and answer choices", "Simulation chronométrée : 60 minutes, comme le Quiz 1.":"Timed practice: 60 minutes, like Quiz 1.",
    "Commencer la séance":"Start session", "Cette banque":"This question bank", "Vrai / faux":"True / False", "Choix multiples":"Multiple choice",
    "Session standard":"Standard session", "Dernier résultat":"Latest result", "Meilleur résultat":"Best result", "Chaque question indique le concept testé et sa référence dans le PDF.":"Each question shows the concept being tested and its PDF reference.",
    "IA, intelligence et approches":"AI, intelligence, and approaches", "Introduction à l'apprentissage automatique":"Introduction to machine learning",
    "Algorithmes d'apprentissage":"Learning algorithms", "Régression linéaire et descente de gradient":"Linear regression and gradient descent",
    "Régression logistique":"Logistic regression", "Entropie croisée et géométrie logistique":"Cross-entropy and logistic geometry",
    "Évaluation des modèles":"Model evaluation", "Validation croisée et hyperparamètres":"Cross-validation and hyperparameters",
    "Facile":"Easy", "Moyen":"Medium", "Difficile":"Hard", "Non répondu":"Not answered", "Tu as passé cette question.":"You skipped this question.",
    "V/F":"T/F", "QCM":"MCQ", "dans la banque":"in the bank",
    "Ta réponse :":"Your answer:", "Bonne réponse":"Correct", "À revoir":"Review", "Réponse correcte :":"Correct answer:", "Pourquoi :":"Why:",
    "Voir la distinction conceptuelle visée.":"Review the conceptual distinction being tested.", "Choix":"Choice", "Concept :":"Concept:", "Source :":"Source:",
    "À retenir :":"Remember:", "reformule la règle avec tes mots et applique-la à un exemple différent.":"Restate the rule in your own words and apply it to a different example.",
    "Indice :":"Hint:", "Réponse enregistrée":"Answer saved", "indice utilisé":"hint used", "Indice affiché":"Hint shown", "Afficher un indice":"Show a hint",
    "Passer":"Skip", "Valider":"Submit", "Voir mes résultats":"View results", "Question suivante":"Next question", "Session terminée":"Session complete", "Révision terminée":"Review complete",
    "Reprise des erreurs":"Retrying missed questions", "Session standard":"Standard session", "bonnes réponses":"correct answers", "Sans réponse":"Unanswered", "Bonnes réponses":"Correct answers", "Erreurs":"Mistakes", "Indices utilisés":"Hints used",
    "Résultat par difficulté":"Results by difficulty", "Résultat par concept":"Results by concept", "Recommencer":"Try again", "Refaire uniquement mes erreurs":"Retry missed questions only",
    "Exporter mes résultats en CSV":"Export my results as CSV", "Exporter uniquement mes erreurs":"Export missed questions only", "Questions à revoir":"Questions to review",
    "question(s) incorrecte(s) ou passée(s)":"incorrect or skipped question(s)", "Parfait, aucune erreur.":"Perfect, no mistakes.", "Tu peux recommencer avec un autre mélange pour consolider les notions.":"Try another shuffled session to reinforce the concepts.",
    "Revoir toutes les questions et les explications":"Review all questions and explanations", "Choix proposés :":"Answer choices:", "Ton choix :":"Your choice:", "Réponse :":"Answer:",
    "les questions vivent dans":"questions live in", "; d'autres questions pourront y être ajoutées sans changer l'application.":"; more questions can be added there without changing the application.",
    "Ton choix":"Your choice", "Explication :":"Explanation:", "Distracteur":"Distractor", "Niveau :":"Difficulty:", "Retour aux chapitres":"Back to chapters", "Aucune donnée":"No data",
    "Quitter la séance? La tentative incomplète ne sera pas ajoutée à l'historique.":"Leave this session? The incomplete attempt will not be added to your history.",
    "Facile":"Easy", "Vrai":"True", "Faux":"False", "Choix multiple":"Multiple choice", "Non répondu":"Not answered"
  };
  const translated = value => {
    if (language !== "en") return value;
    let result = value;
    for (const [fr, en] of Object.entries(uiEnglish).sort((a,b)=>b[0].length-a[0].length)) result = result.split(fr).join(en);
    return result;
  };
  function localizeRenderedUi() {
    const c = view === "courses" ? null : course();
    const name = c ? c.code : (language === "en" ? "Courses" : "Cours");
    document.documentElement.lang = language;
    document.title = `${name} · ${language === "en" ? "Interactive review" : "Révision interactive"}`;
    document.getElementById("brand-name").textContent = name;
    document.getElementById("course-label").textContent = c ? loc(c.term) : "";
    document.getElementById("footer-description").textContent = translated("Un outil d'entraînement local, à partir des supports du cours.");
    document.getElementById("footer-storage").textContent = translated("Progression enregistrée dans ce navigateur.");
    document.getElementById("home-button").textContent = language === "en" ? "Home" : "Accueil";
    document.querySelector(".brand").setAttribute("aria-label", language === "en" ? "Home" : "Accueil");
    const toggle = document.getElementById("language-toggle");
    toggle.textContent = language === "en" ? "Français" : "English";
    toggle.setAttribute("aria-label", language === "en" ? "Switch to French" : "Passer en anglais");
    // Course content is wrapped in translate="no" so French-only banks are not mangled by UI string replacement.
    const walker = document.createTreeWalker(app, NodeFilter.SHOW_TEXT, {acceptNode: node => node.parentElement?.closest("[translate='no']") ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT});
    const textNodes = [];
    while (walker.nextNode()) textNodes.push(walker.currentNode);
    textNodes.forEach(node => { node.nodeValue = translated(node.nodeValue); });
  }

  const esc = (value = "") => String(value).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c]));
  const shuffle = values => {
    const a = values.slice();
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  };
  const sample = (values, count) => shuffle(values).slice(0, count);
  // Wraps course content so localizeRenderedUi leaves it untouched.
  const txt = (value = "") => `<span translate="no">${esc(value)}</span>`;
  const readHistory = () => { try { const v = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]"); return Array.isArray(v) ? v.map(h => ({...h, course:h.course || LEGACY_COURSE})) : []; } catch { return []; } };
  const writeHistory = history => { try { localStorage.setItem(STORAGE_KEY, JSON.stringify(history.slice(-60))); } catch { /* Keep the current session usable when storage is full or blocked. */ } };
  const loc = value => value && typeof value === "object" && !Array.isArray(value) ? (language === "en" && value.en) || value.fr : value;
  const course = (key = currentCourse) => COURSES[key];
  const chaptersOf = (key = currentCourse) => course(key)?.chapters || {};
  const unitName = (plural = false, key = currentCourse) => (loc(course(key)?.unit) || (language === "en" ? ["chapter","chapters"] : ["chapitre","chapitres"]))[plural ? 1 : 0];
  const hasEnglish = (key = currentCourse) => Boolean(course(key)?.translations);
  const titleFor = (key, courseKey = currentCourse) => { const ch = chaptersOf(courseKey)[key]; return (language === "en" && ch?.titleEn) || ch?.title || key; };
  const labelFor = (key, courseKey = currentCourse) => chaptersOf(courseKey)[key]?.label || key;
  // Labels of untranslated courses stay as written instead of being partly translated.
  const labelHtml = (key, courseKey = currentCourse) => hasEnglish(courseKey) ? esc(labelFor(key, courseKey)) : txt(labelFor(key, courseKey));
  const typeLabel = q => q.type === "true_false" ? (language === "en" ? "True / False" : "Vrai / Faux") : (language === "en" ? "Multiple choice" : "Choix multiple");
  const difficultyLabel = d => (language === "en" ? {easy:"Easy",medium:"Medium",hard:"Hard"} : {easy:"Facile",medium:"Moyen",hard:"Difficile"})[d] || d;
  const sourceLabel = q => language === "en" ? q.source.replace("Chapitre ", "Chapter ") : q.source;
  const sessionCounts = (key = currentCourse) => ({tf:15, mc:10, minutes:60, ...course(key)?.session});
  // A null quota means "every question of that type in the chapter".
  const quota = (limit, available) => limit === null || limit === undefined ? available : Math.min(limit, available);
  // Index every question by id once, tagging it with its course and chapter.
  const questionIndex = {};
  for (const [courseKey, c] of Object.entries(COURSES)) {
    for (const [chapterKey, chapter] of Object.entries(c.chapters || {})) {
      chapter.questions.forEach(q => {
        q.type ??= "multiple_choice";
        q.course = courseKey; q.chapter = chapterKey;
        q.options?.forEach((o, i) => { o.id ??= String.fromCharCode(65 + i); });
        if (q.type === "multiple_choice" && q.options?.length) q.explanation ??= q.options[q.answer]?.explanation;
        questionIndex[`${courseKey}:${q.id}`] = q;
      });
    }
  }
  function setQuestionLanguage(q, locale) {
    const source = questionIndex[`${q.course}:${q.id}`];
    const copy = locale === "en" ? course(q.course)?.translations?.[q.id] : source;
    if (!copy) return q;
    q.question = copy.question;
    q.hint = copy.hint;
    q.explanation = copy.explanation;
    q.concept = copy.concept;
    if (q.options && copy.options) {
      q.options = q.options.map(option => {
        const i = option.id.charCodeAt(0) - 65;
        const original = source.options?.find(item => item.id === option.id);
        return {...option,
          text:locale === "en" ? copy.options[i] : original?.text,
          explanation:locale === "en" ? copy.optionExplanations?.[i] : original?.explanation};
      });
    }
    return q;
  }
  const baseQuestions = key => (chaptersOf()[key]?.questions || []).map(q => {
    const copy = {...q, options:q.options?.map(o=>({...o}))};
    return setQuestionLanguage(copy, language);
  });
  const questionTotal = () => session?.questions?.length || 0;
  const selectedQuestion = () => session?.questions?.[currentIndex];
  const correctText = q => q.type === "true_false" ? (language === "en" ? (q.answer ? "True" : "False") : (q.answer ? "Vrai" : "Faux")) : q.options.find(o => o.isCorrect)?.text || "";
  const weightOf = q => q.type === "multiple_choice" ? 2 : 1;
  const scoreOf = s => (s.questions || []).reduce((sum,q) => sum + (q.selected !== null && q.selected !== undefined && q.isCorrect ? weightOf(q) : 0), 0);
  const pointsPossible = s => (s.questions || []).reduce((sum,q) => sum + weightOf(q), 0);
  const isWrong = q => q.selected === null || q.selected === undefined || !q.isCorrect;
  const answered = q => q.selected !== null && q.selected !== undefined;
  const wrongQuestions = s => (s.questions || []).filter(isWrong);

  function prepareQuestion(q) {
    const copy = {...q, selected:null, hintUsed:false, locked:false, isCorrect:null};
      if (copy.type === "multiple_choice") {
        const options=copy.options.map(o => ({...o, isCorrect:o.id === String.fromCharCode(65 + q.answer)}));
        copy.options = mixQuestions ? shuffle(options) : options;
    }
    return copy;
  }
  function prepareSession(key, mode, qs, source = "full") {
    const ordered = mixQuestions ? shuffle(qs) : qs.slice();
    session = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2,8)}`,
      startedAt: new Date().toISOString(), course:currentCourse, chapter:key, mode, source, deadlineAt:Date.now()+sessionCounts().minutes*60*1000,
      questions:ordered.map(prepareQuestion), completed:false
    };
    currentIndex = 0;
    rerunFromErrors = source === "errors";
    view = "quiz";
    render();
  }
  function startFullQuiz() {
    const all = baseQuestions(currentChapter);
    const tf = all.filter(q => q.type === "true_false");
    const mc = all.filter(q => q.type === "multiple_choice");
    const counts = sessionCounts();
    // Keep the bank order when shuffling is off and every question of a type is used.
    const pick = (qs, n) => !mixQuestions && n >= qs.length ? qs.slice() : sample(qs, n);
    const selected = [...pick(tf, quota(counts.tf, tf.length)), ...pick(mc, quota(counts.mc, mc.length))];
    prepareSession(currentChapter, selectedMode, selected, "full");
  }
  function openCourse(key) {
    currentCourse = key; view = "home";
    try { localStorage.setItem(COURSE_KEY, key); } catch { /* The choice still applies for this visit. */ }
    render();
  }
  function openChapter(key) { currentChapter = key; selectedMode = "review"; view = "setup"; render(); }
  function historyFor(key) { return readHistory().filter(h => h.course === currentCourse && h.chapter === key); }
  function sessionFormat(key = currentCourse) {
    const {tf, mc} = sessionCounts(key), en = language === "en";
    if (!tf && (mc === null || mc === undefined)) return en ? "Every multiple-choice question of the selected quiz." : "Toutes les questions à choix multiples du quiz choisi.";
    return en ? `Up to ${tf} true/false and ${mc ?? "all"} multiple-choice questions per session.` : `Jusqu'à ${tf} vrai/faux et ${mc ?? "toutes les"} questions à choix multiples par séance.`;
  }
  const questionCount = key => Object.values(chaptersOf(key)).reduce((sum, ch) => sum + ch.questions.length, 0);

  function renderCourses() {
    const keys = Object.keys(COURSES), history = readHistory(), en = language === "en";
    app.innerHTML = `
      <section class="hero">
        <div><div class="eyebrow">Étudier en comprenant</div><h1>Révise les idées.<br>Teste ton raisonnement.</h1>
          <p>${en ? "Pick a course, then a chapter or quiz. Every session comes with explained answers." : "Choisis un cours, puis un chapitre ou un quiz. Chaque séance s'accompagne de corrections expliquées."}</p>
        </div>
        <aside class="hero-note"><div class="eyebrow" style="color:#d9bd79">${en ? "Courses" : "Cours"}</div><div class="big">${keys.length}</div><p>${keys.map(k => esc(course(k).code)).join(" · ")}</p></aside>
      </section>
      <div class="section-head"><div><h2>${en ? "Choose a course" : "Choisis un cours"}</h2><p>${en ? "Your progress is kept separately for each course." : "La progression est conservée séparément pour chaque cours."}</p></div></div>
      <section class="chapter-grid">${keys.map(key => {
        const c = course(key), chapterTotal = Object.keys(c.chapters).length, sessions = history.filter(h => h.course === key).length;
        return `<button class="chapter-card" data-course="${esc(key)}"><div class="chapter-top"><span class="chapter-number">${esc(c.code)}</span><span class="count-pill">${questionCount(key)} questions</span></div><h3>${txt(loc(c.title))}</h3><p class="sub">${chapterTotal} ${esc(unitName(chapterTotal > 1, key))} · ${hasEnglish(key) ? "Français / English" : "Français"}</p><span class="card-spacer"></span><div class="card-stats"><span>${en ? "Sessions" : "Séances"} <strong>${sessions}</strong></span></div></button>`;
      }).join("")}</section>`;
    app.querySelectorAll("[data-course]").forEach(button => button.addEventListener("click", () => openCourse(button.dataset.course)));
    localizeRenderedUi();
  }
  // English UI over a French-only bank: say so instead of silently mixing languages.
  const frenchOnlyNotice = () => language === "en" && !hasEnglish() ? `<div class="notice"><strong>French only:</strong> this course's questions have not been translated yet.</div>` : "";
  function percent(correct, total) { return total ? Math.round(correct / total * 100) : 0; }

  function renderHome() {
    const c = course(), keys = Object.keys(c.chapters), en = language === "en";
    const history = readHistory().filter(h => h.course === currentCourse);
    const {tf, mc} = sessionCounts();
    const perSession = tf + (mc ?? 0);
    app.innerHTML = `<button class="back-link" id="back-courses">← ${en ? "All courses" : "Tous les cours"}</button>
      <section class="hero">
        <div><div class="eyebrow">${esc(c.code)}</div><h1>${txt(loc(c.title))}</h1>
          <p translate="no">${esc(loc(c.intro))}</p>
        </div>
        <aside class="hero-note"><div class="eyebrow" style="color:#d9bd79">Format par séance</div>${mc === null || mc === undefined ? `<div class="big">${en ? "Full" : "Quiz"} <span style="font-size:20px">${en ? "quiz" : "complet"}</span></div>` : `<div class="big">${perSession} <span style="font-size:20px">questions</span></div>`}<p>${esc(sessionFormat())}</p></aside>
      </section>
      ${frenchOnlyNotice()}
      <div class="section-head"><div><h2>${en ? "Choose a" : "Choisis un"} ${esc(unitName())}</h2><p>${esc(sessionFormat())}</p></div><span class="tag green">${keys.length} ${esc(unitName(keys.length > 1))}</span></div>
      <section class="chapter-grid">${keys.map(key=>{
        const qs=c.chapters[key].questions, hs=history.filter(h=>h.chapter===key).sort((a,b)=>b.completedAt.localeCompare(a.completedAt));
        const last=hs[0], best=hs.length?Math.max(...hs.map(h=>h.percent)):null;
        return `<button class="chapter-card" data-chapter="${esc(key)}"><div class="chapter-top"><span class="chapter-number">${labelHtml(key)}</span><span class="count-pill">${qs.length} questions</span></div><h3>${txt(titleFor(key))}</h3><p class="sub">${[[qs.filter(q=>q.type==="true_false").length,"V/F"],[qs.filter(q=>q.type==="multiple_choice").length,"QCM"]].filter(([n])=>n).map(([n,t])=>`${n} ${t}`).join(" · ")} dans la banque</p><span class="card-spacer"></span><div class="card-stats"><span>Dernier <strong>${last?`${last.percent}%`:"—"}</strong></span><span>Meilleur <strong>${best===null?"—":`${best}%`}</strong></span></div></button>`;
      }).join("")}</section>
      <div class="notice"><strong>À propos du contenu :</strong> les questions vivent dans <code>courses/${esc(currentCourse)}/</code>; d'autres questions pourront y être ajoutées sans changer l'application.</div>
      ${history.length?`<section class="history-card panel"><h3>Sessions récentes</h3>${history.slice().reverse().slice(0,5).map(h=>`<div class="history-row">${txt(titleFor(h.chapter))}<span>${new Date(h.completedAt).toLocaleString(language==="en"?"en-CA":"fr-CA",{dateStyle:"medium",timeStyle:"short"})}</span><strong>${h.points??h.correct}/${h.maxPoints??h.total} pts · ${h.percent}%</strong></div>`).join("")}</section>`:""}
    `;
    document.getElementById("back-courses").onclick=()=>{view="courses";render();};
    app.querySelectorAll("[data-chapter]").forEach(button=>button.addEventListener("click",()=>openChapter(button.dataset.chapter)));
    localizeRenderedUi();
  }

  function renderSetup() {
    const all=baseQuestions(currentChapter), tf=all.filter(q=>q.type==="true_false").length, mc=all.length-tf;
    const history=historyFor(currentChapter).sort((a,b)=>b.completedAt.localeCompare(a.completedAt));
    const last=history[0], best=history.length?Math.max(...history.map(h=>h.percent)):null;
    const counts=sessionCounts(), en=language==="en";
    app.innerHTML=`<button class="back-link" id="back-home">← ${en?"All":"Tous les"} ${esc(unitName(true))}</button>
      <div class="page-heading"><div class="eyebrow">${esc(course().code)} · ${labelHtml(currentChapter)}</div><h1>${txt(titleFor(currentChapter))}</h1><p>${en?"Choose how you want to practice.":"Choisis comment tu veux t'entraîner."} ${esc(sessionFormat())}</p></div>
      ${frenchOnlyNotice()}
      <div class="setup-layout"><section class="setup-card panel"><h2>Choisis un mode</h2><p>Le mode révision affiche une correction après chaque réponse. Le mode examen garde les réponses pour la fin.</p>
        <div class="mode-grid">
          <button class="mode-option ${selectedMode==="review"?"selected":""}" data-mode="review"><strong>Mode révision</strong><span>Indice facultatif, correction immédiate et explications des choix.</span></button>
          <button class="mode-option ${selectedMode==="exam"?"selected":""}" data-mode="exam"><strong>Mode examen</strong><span>Aucune correction pendant la séance; bilan complet à la fin.</span></button>
        </div>
        <label class="toggle-line"><input id="mix-toggle" type="checkbox" ${mixQuestions?"checked":""}> Mélanger les questions et l'ordre des choix</label>
        <p class="toggle-line">⏱ ${esc(loc(course().timerNote) || (en?`Timed practice: ${counts.minutes} minutes.`:`Simulation chronométrée : ${counts.minutes} minutes.`))}</p>
        <div class="setup-actions"><button class="button button-primary" id="start-quiz">Commencer la séance <span aria-hidden="true">→</span></button></div>
      </section>
      <aside class="setup-stats panel"><h3>Cette banque</h3><div class="stat-line"><span>Vrai / faux</span><strong>${tf}</strong></div><div class="stat-line"><span>Choix multiples</span><strong>${mc}</strong></div><div class="stat-line"><span>Session standard</span><strong>${quota(counts.tf,tf)} + ${quota(counts.mc,mc)}</strong></div><div class="stat-line"><span>Dernier résultat</span><strong>${last?`${last.percent}%`:"—"}</strong></div><div class="stat-line"><span>Meilleur résultat</span><strong>${best===null?"—":`${best}%`}</strong></div><p style="font-size:11px;line-height:1.5;color:#d8e7df;margin:14px 0 0">Chaque question indique le concept testé et sa référence dans le PDF.</p></aside></div>`;
    document.getElementById("back-home").onclick=()=>{view="home";render();};
    app.querySelectorAll("[data-mode]").forEach(b=>b.onclick=()=>{selectedMode=b.dataset.mode;renderSetup();});
    document.getElementById("mix-toggle").onchange=e=>{mixQuestions=e.target.checked;};
    document.getElementById("start-quiz").onclick=startFullQuiz;
    localizeRenderedUi();
  }

  function optionRows(q) {
    if(q.type==="true_false") return [
      {id:"true",text:language==="en"?"True":"Vrai",isCorrect:q.answer===true},
      {id:"false",text:language==="en"?"False":"Faux",isCorrect:q.answer===false}
    ];
    return q.options;
  }
  function selectedLabel(q) {
    if(q.selected===null || q.selected===undefined) return "Non répondu";
    return optionRows(q).find(o=>o.id===q.selected)?.text || "Non répondu";
  }
  function showHint(q) { if(q.locked || q.hintUsed || !q.hint) return; q.hintUsed=true; renderQuiz(); }
  function chooseAnswer(q,id) { if(q.locked) return; q.selected=id; renderQuiz(); }
  function validateAnswer(q) {
    if(q.locked || q.selected===null || q.selected===undefined) return;
    q.locked=true; q.isCorrect=optionRows(q).find(o=>o.id===q.selected)?.isCorrect===true;
    if(session.mode==="exam") advance(); else if(currentIndex===questionTotal()-1) finishSession(); else renderQuiz();
  }
  function skipQuestion(q) { if(q.locked) return; q.selected=null; q.locked=true; q.isCorrect=false; if(currentIndex===questionTotal()-1) finishSession(); else advance(); }
  function advance() { if(currentIndex < questionTotal()-1) { currentIndex++; renderQuiz(); } else finishSession(); }

  // Correction shown directly under one answer: its status, its own explanation and, under the
  // correct answer, the general explanation when it adds something the option's text does not.
  function answerCorrection(q, o, otherLabel) {
    const chosen = answered(q) && q.selected === o.id;
    const labels = [o.isCorrect ? "Bonne réponse" : "", chosen ? "Ton choix" : ""].filter(Boolean);
    const parts = [];
    if (o.explanation) parts.push(`<p>${txt(o.explanation)}</p>`);
    if (o.isCorrect && q.explanation && q.explanation !== o.explanation) parts.push(`<p><strong>Pourquoi :</strong> ${txt(q.explanation)}</p>`);
    if (o.isCorrect && !q.explanation && !o.explanation) parts.push(`<p><strong>Pourquoi :</strong> Voir la distinction conceptuelle visée.</p>`);
    if (!labels.length && !parts.length) return "";
    const status = o.isCorrect ? "is-correct" : chosen ? "is-wrong" : "";
    return `<div class="answer-correction ${status}"><span class="correction-label">${labels.length ? labels.join(" · ") : otherLabel}</span>${parts.join("")}</div>`;
  }
  function renderFeedback(q) {
    const ok=q.isCorrect===true;
    const answer=q.selected===null?"Tu as passé cette question.":`Ta réponse : <strong>${txt(selectedLabel(q))}</strong>.`;
    return `<div class="feedback-box ${ok?"correct":"incorrect"}"><div class="feedback-title">${ok?"Bonne réponse":"À revoir"} · Réponse correcte : ${txt(correctText(q))}</div><p>${answer}</p><p><strong>Concept :</strong> ${txt(q.concept)} · <strong>Source :</strong> ${txt(sourceLabel(q))}</p><p><strong>À retenir :</strong> reformule la règle avec tes mots et applique-la à un exemple différent.</p></div>`;
  }
  const codeBlock = q => q.code ? `<pre class="question-code" translate="no"><code>${esc(q.code)}</code></pre>` : "";
  function renderQuiz() {
    const q=selectedQuestion(); if(!q){finishSession();return;}
    const rows=optionRows(q), type=q.type==="true_false"?"Vrai / Faux":"Choix multiple";
    app.innerHTML=`<div class="quiz-top"><span class="quiz-chapter">${labelHtml(session.chapter, session.course)} · ${txt(titleFor(session.chapter, session.course))} <span class="tag ${session.mode==="exam"?"gold":"green"}">${session.mode==="exam"?"Mode examen":"Mode révision"}</span></span><div style="display:flex;align-items:center;gap:16px"><span class="quiz-counter" id="timer"></span><span class="quiz-counter">${currentIndex+1} <span style="color:#96a09c">/ ${questionTotal()}</span></span></div></div>
      <div class="progress-track"><div class="progress-fill" style="width:${((currentIndex+(q.locked?1:0))/questionTotal())*100}%"></div></div>
      <section class="question-card panel"><div class="question-meta"><span class="tag">${type}</span>${q.difficulty?`<span class="tag gold">${difficultyLabel(q.difficulty)}</span>`:""}<span class="tag green" translate="no">${esc(q.concept)}</span></div>
        <h2 translate="no">${esc(q.question)}</h2>${codeBlock(q)}
        <div class="answers">${rows.map((o,i)=>{
          const corrected=q.locked&&session.mode==="review";
          const state=corrected?(o.isCorrect?"is-correct":q.selected===o.id?"is-wrong":""):(q.selected===o.id?"selected":"");
          return `<div class="answer-item"><label class="answer-option ${state}"><input type="radio" name="answer" value="${esc(o.id)}" ${q.selected===o.id?"checked":""} ${q.locked?"disabled":""}><span class="answer-marker">${q.type==="true_false"?(o.id==="true"?"A":"B"):String.fromCharCode(65+i)}</span><span class="answer-copy" ${q.type==="true_false"?"":`translate="no"`}>${esc(o.text)}</span></label>${corrected?answerCorrection(q,o,"Choix"):""}</div>`;
        }).join("")}</div>
        ${q.hintUsed&&!q.locked?`<div class="hint-box"><strong>Indice :</strong> ${txt(q.hint)}</div>`:""}
        ${q.locked&&session.mode==="review"?renderFeedback(q):""}
        <div class="question-actions">${q.locked?`<span class="locked-note">Réponse enregistrée${q.hintUsed?" · indice utilisé":""}</span>`:q.hint?`<button class="button button-secondary" id="hint-button" ${q.hintUsed?"disabled":""}>${q.hintUsed?"Indice affiché":"Afficher un indice"}</button>`:"<span></span>"}
          <div class="button-row">${!q.locked?`<button class="button button-outline" id="skip-button">Passer</button><button class="button button-primary" id="validate-button" ${q.selected===null?"disabled":""}>Valider</button>`:`<button class="button button-primary" id="continue-button">${currentIndex===questionTotal()-1?"Voir mes résultats":"Question suivante →"}</button>`}</div></div>
      </section>`;
    app.querySelectorAll(".answer-option").forEach((label,i)=>label.addEventListener("click",()=>{if(!q.locked)chooseAnswer(q,rows[i].id);}));
    document.getElementById("hint-button")?.addEventListener("click",()=>showHint(q));
    document.getElementById("skip-button")?.addEventListener("click",()=>skipQuestion(q));
    document.getElementById("validate-button")?.addEventListener("click",()=>validateAnswer(q));
    document.getElementById("continue-button")?.addEventListener("click",advance);
    localizeRenderedUi();
    if(timerInterval) clearInterval(timerInterval);
    const updateTimer=()=>{
      if(!session||view!=="quiz") return;
      const left=Math.max(0,session.deadlineAt-Date.now()), el=document.getElementById("timer");
      if(el) el.textContent=`${String(Math.floor(left/60000)).padStart(2,"0")}:${String(Math.floor((left%60000)/1000)).padStart(2,"0")}`;
      if(left===0){clearInterval(timerInterval);session.questions.slice(currentIndex).filter(item=>!item.locked).forEach(item=>{item.selected=null;item.locked=true;item.isCorrect=false;});finishSession();}
    };
    updateTimer();timerInterval=setInterval(updateTimer,1000);
  }

  function performanceBy(field) {
    const groups={};
    session.questions.forEach(q=>{if(field==="difficulty"&&!q.difficulty)return;const key=q[field]||"Autre";groups[key]??={total:0,correct:0};groups[key].total++;if(q.isCorrect)groups[key].correct++;});
    return groups;
  }
  function metricRows(groups, labels=false) {
    return Object.entries(groups).map(([name,g])=>{
      const pct=percent(g.correct,g.total), label=labels?difficultyLabel(name):name;
      return `<div class="metric-row"><span>${esc(label)}</span><div class="metric-track"><div class="metric-fill" style="width:${pct}%"></div></div><span class="metric-value">${pct}%</span></div>`;
    }).join("")||`<span class="quiet-label">Aucune donnée</span>`;
  }
  function finishSession() {
    if(!session || session.completed) { view="results"; render(); return; }
    if(timerInterval){clearInterval(timerInterval);timerInterval=null;}
    session.completed=true; session.completedAt=new Date().toISOString();
    const total=questionTotal(), correctCount=session.questions.filter(q=>q.isCorrect).length, points=scoreOf(session), possible=pointsPossible(session);
    session.total=total; session.correct=correctCount; session.points=points; session.maxPoints=possible; session.percent=percent(points,possible);
    const history=readHistory(); history.push({...session}); writeHistory(history);
    view="results"; render();
  }
  function renderQuestionReview(q,index) {
    const selected=selectedLabel(q), correct=correctText(q);
    // Multiple choice: every option with its correction underneath. True/false keeps a single explanation.
    const body=q.type==="multiple_choice"
      ?`<div class="review-options">${q.options.map((o,i)=>`<div class="review-option"><div class="review-option-text ${o.isCorrect?"is-correct":answered(q)&&q.selected===o.id?"is-wrong":""}"><span class="answer-marker">${String.fromCharCode(65+i)}</span>${txt(o.text)}</div>${answerCorrection(q,o,"Distracteur")}</div>`).join("")}</div>`
      :`<p><strong>Explication :</strong> ${txt(q.explanation)}</p>`;
    return `<article class="wrong-card"><h4>${index+1}. ${txt(q.question)}</h4>${codeBlock(q)}<p><strong>Ton choix :</strong> ${answered(q)?txt(selected):selected} ${q.hintUsed?"· indice utilisé":""}</p><p><strong>Réponse :</strong> ${txt(correct)}</p>${body}<p><strong>Concept :</strong> ${txt(q.concept)}${q.difficulty?` · <strong>Niveau :</strong> ${difficultyLabel(q.difficulty)}`:""}</p><p><strong>Source :</strong> ${txt(sourceLabel(q))}</p></article>`;
  }
  function renderResults() {
    const total=questionTotal(), correct=scoreOf(session), possible=pointsPossible(session), correctCount=session.questions.filter(q=>q.isCorrect).length, missed=wrongQuestions(session), tf=session.questions.filter(q=>q.type==="true_false"), mc=session.questions.filter(q=>q.type==="multiple_choice");
    const hintCount=session.questions.filter(q=>q.hintUsed).length, skipped=session.questions.filter(q=>!answered(q)).length;
    const diff=performanceBy("difficulty"), concepts=performanceBy("concept");
    const full=total===25&&!rerunFromErrors;
    app.innerHTML=`<div class="results-hero"><div><div class="eyebrow" style="color:#d9bd79">${session.mode==="exam"?"Séance terminée":"Révision terminée"}</div><h1>${txt(titleFor(session.chapter, session.course))}</h1><p>${new Date(session.completedAt).toLocaleString(language==="en"?"en-CA":"fr-CA",{dateStyle:"full",timeStyle:"short"})} · ${session.source==="errors"?"Reprise des erreurs":"Session standard"}</p></div><div class="score-number">${correct}<small> / ${possible} pts</small><div style="font:600 15px Manrope;letter-spacing:0;margin-top:8px">${session.percent}% · ${correctCount}/${total} bonnes réponses</div></div></div>
      <div class="result-grid">${tf.length?`<div class="result-stat panel"><span>Vrai / faux</span><strong>${tf.filter(q=>q.isCorrect).length} / ${tf.length}</strong></div>`:""}<div class="result-stat panel"><span>Choix multiples</span><strong>${mc.filter(q=>q.isCorrect).length} / ${mc.length}</strong></div><div class="result-stat panel"><span>Sans réponse</span><strong>${skipped}</strong></div><div class="result-stat panel"><span>Bonnes réponses</span><strong>${correctCount} / ${total}</strong></div><div class="result-stat panel"><span>Erreurs</span><strong>${missed.length-skipped}</strong></div><div class="result-stat panel"><span>Indices utilisés</span><strong>${hintCount}</strong></div></div>
      <div class="analytics-grid">${Object.keys(diff).length?`<section class="analytics-card panel"><h3>Résultat par difficulté</h3>${metricRows(diff,true)}</section>`:""}<section class="analytics-card panel"><h3>Résultat par concept</h3><div class="concept-list">${Object.entries(concepts).map(([n,g])=>`<span class="concept-chip">${esc(n)} · ${g.correct}/${g.total} (${percent(g.correct,g.total)}%)</span>`).join("")}</div></section></div>
      <div class="results-actions"><div class="button-row"><button class="button button-primary" id="retry-all">Recommencer</button><button class="button button-secondary" id="retry-errors" ${missed.length?"":"disabled"}>Refaire uniquement mes erreurs (${missed.length})</button></div><div class="button-row"><button class="button button-outline" id="export-all">Exporter mes résultats en CSV</button><button class="button button-outline" id="export-wrong" ${missed.length?"":"disabled"}>Exporter uniquement mes erreurs</button></div></div>
      ${missed.length?`<section class="section-spaced"><div class="section-head"><div><h2>Questions à revoir</h2><p>${missed.length} question(s) incorrecte(s) ou passée(s)</p></div></div><div class="wrong-list">${missed.map(q=>renderQuestionReview(q,session.questions.indexOf(q))).join("")}</div></section>`:`<div class="notice"><strong>Parfait, aucune erreur.</strong> Tu peux recommencer avec un autre mélange pour consolider les notions.</div>`}
      <details class="section-spaced"><summary style="cursor:pointer;font:700 15px Manrope;margin-bottom:14px">Revoir toutes les questions et les explications</summary><div class="wrong-list">${session.questions.map((q,i)=>renderQuestionReview(q,i)).join("")}</div></details>
      <div class="setup-actions"><button class="button button-outline" id="results-home">${language==="en"?"Back to":"Retour aux"} ${esc(unitName(true))}</button></div>`;
    document.getElementById("retry-all").onclick=()=>prepareSession(session.chapter,session.mode,session.questions.map(q=>({...q,selected:null,locked:false,hintUsed:false,isCorrect:null})),"full");
    document.getElementById("retry-errors").onclick=()=>{const wrong=wrongQuestions(session);if(wrong.length)prepareSession(session.chapter,session.mode,wrong.map(q=>({...q,selected:null,locked:false,hintUsed:false,isCorrect:null})),"errors");};
    document.getElementById("export-all").onclick=()=>exportCsv(session.questions,false);
    document.getElementById("export-wrong").onclick=()=>exportCsv(session.questions,true);
    document.getElementById("results-home").onclick=()=>{view="home";render();};
    localizeRenderedUi();
  }

  const csvCell = value => `"${String(value??"").replace(/"/g,'""').replace(/\r?\n/g," ")}"`;
  function exportCsv(questions,errorsOnly) {
    const rows=errorsOnly?questions.filter(isWrong):questions;
    const sessionDate=session.completedAt||new Date().toISOString();
    const headers=["session_date","chapter","question_id","type","question","option_A","option_B","option_C","option_D","selected_answer","correct_answer","is_correct","hint_used","difficulty","concept","explanation","option_explanations","source","mode"];
    const lines=[headers.map(csvCell).join(",")];
    rows.forEach(q=>{
      const opts=q.type==="multiple_choice"?q.options.map(o=>o.text):(language==="en"?["True","False"]:["Vrai","Faux"]);
      const explanations=q.type==="multiple_choice"?q.options.map(o=>`${o.text}: ${o.explanation}`).join(" | "):"";
      const values=[sessionDate,`${course(session.course)?.code} · ${titleFor(session.chapter, session.course)}`,q.id,typeLabel(q),q.code?`${q.question}\n${q.code}`:q.question,opts[0],opts[1],opts[2],opts[3],selectedLabel(q),correctText(q),q.isCorrect===true?"true":"false",q.hintUsed?"true":"false",difficultyLabel(q.difficulty),q.concept,q.explanation,explanations,sourceLabel(q),session.mode];
      lines.push(values.map(csvCell).join(","));
    });
    const blob=new Blob(["\uFEFF"+lines.join("\r\n")],{type:"text/csv;charset=utf-8"});
    const a=document.createElement("a"),url=URL.createObjectURL(blob),date=sessionDate.slice(0,10),num=`${session.course}_${session.chapter}`;
    a.href=url;a.download=`${language==="en"?"results":"resultats"}_${num}_${date}${errorsOnly?(language==="en"?"_mistakes":"_erreurs"):""}.csv`;document.body.appendChild(a);a.click();a.remove();URL.revokeObjectURL(url);
  }

  function render() {
    if(view!=="quiz"&&timerInterval){clearInterval(timerInterval);timerInterval=null;}
    if(!course()&&view!=="courses")view="courses";
    if(view==="courses")renderCourses(); else if(view==="home")renderHome(); else if(view==="setup")renderSetup(); else if(view==="quiz")renderQuiz(); else renderResults();
    document.getElementById("home-button").onclick=()=>{if(view==="quiz"&&!session?.completed){const prompt=language==="en"?"Leave this session? The incomplete attempt will not be added to your history.":"Quitter la séance? La tentative incomplète ne sera pas ajoutée à l'historique.";if(!confirm(prompt))return;}view="courses";render();};
  }
  document.getElementById("language-toggle").addEventListener("click",()=>{
    language = language === "fr" ? "en" : "fr";
    try { localStorage.setItem(LANGUAGE_KEY, language); } catch { /* The language still applies for this visit. */ }
    session?.questions?.forEach(q => setQuestionLanguage(q, language));
    render();
  });
  document.addEventListener("keydown",e=>{
    if(view!=="quiz"||!session||selectedQuestion()?.locked)return;
    if(e.key==="Enter" && selectedQuestion()?.selected!==null)validateAnswer(selectedQuestion());
    if(e.key.toLowerCase()==="h")showHint(selectedQuestion());
  });
  render();
})();
