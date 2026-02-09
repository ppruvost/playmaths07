/* ============================================================
   ====================  LISTE DES QUESTIONS  ==================
   ============================================================ */

const questions = [
  {
    question: "Le coût total d’une entreprise est modélisé par C(x) = 2x² + 4x. Quelle est la dérivée C'(x) ?",
    options: ["4x + 4", "2x + 4", "4x", "2x² + 4"],
    graphique: "courbe_cout.png",
    bonne_reponse: "4x + 4",
    explication: "La dérivée de 2x² est 4x et celle de 4x est 4."
  },
  {
    question: "Le chiffre d’affaires est donné par f(x) = x². Quelle est sa dérivée ?",
    options: ["x", "2x", "x²", "2"],
    graphique: "courbe_chiffre_affaires.png",
    bonne_reponse: "2x",
    explication: "La dérivée de x² est 2x."
  },
  {
    question: "Une fonction modélise le temps de traitement d’un dossier : T(x) = 5x + 3. Quelle est T'(x) ?",
    options: ["5", "3", "5x", "8"],
    graphique: "temps_traitement.png",
    bonne_reponse: "5",
    explication: "La dérivée d’une fonction affine ax + b est a. Ici, a = 5."
  },
  {
    question: "Le bénéfice d’une entreprise est modélisé par B(x) = -x² + 6x. Quelle est la dérivée B'(x) ?",
    options: ["-2x + 6", "2x + 6", "-x + 6", "-2x"],
    graphique: "courbe_benefice.png",
    bonne_reponse: "-2x + 6",
    explication: "La dérivée de -x² est -2x et celle de 6x est 6."
  },
  {
    question: "La quantité produite est donnée par P(x) = 3x². Quelle est la dérivée P'(x) ?",
    options: ["6x", "3x", "x²", "6"],
    graphique: "production.png",
    bonne_reponse: "6x",
    explication: "La dérivée de 3x² est 6x."
  },
  {
    question: "Un stock est modélisé par S(x) = x² + 10. Quelle est la dérivée S'(x) ?",
    options: ["2x", "x", "2x + 10", "x²"],
    graphique: "stock.png",
    bonne_reponse: "2x",
    explication: "La dérivée de x² est 2x et celle d’une constante est 0."
  },
  {
    question: "Une charge de travail est modélisée par f(x) = x² + 4x. Quelle est la dérivée f'(x) ?",
    options: ["2x + 4", "x + 4", "2x", "x² + 4"],
    graphique: "charge_travail.png",
    bonne_reponse: "2x + 4",
    explication: "On dérive terme à terme : x² → 2x et 4x → 4."
  },
  {
    question: "Une perte financière est modélisée par f(x) = -2x² + 5. Quelle est sa dérivée ?",
    options: ["-4x", "4x", "-2x", "5"],
    graphique: "perte.png",
    bonne_reponse: "-4x",
    explication: "La dérivée de -2x² est -4x et celle de 5 est 0."
  },
  {
    question: "Quelle est la dérivée d’une fonction de la forme ax² ?",
    options: ["2ax", "ax", "a²x", "2a"],
    graphique: "formule_derivation.png",
    bonne_reponse: "2ax",
    explication: "La dérivée de ax² est 2ax."
  },
  {
    question: "À quoi sert la dérivée d’une fonction dans un contexte professionnel ?",
    options: [
      "À mesurer la variation d’un coût ou d’un bénéfice",
      "À calculer un total",
      "À tracer une courbe",
      "À trouver une constante"
    ],
    graphique: "interpretation_derivation.png",
    bonne_reponse: "À mesurer la variation d’un coût ou d’un bénéfice",
    explication: "La dérivée permet d’étudier l’évolution d’une grandeur : augmentation, diminution ou stabilité."
  }
];


/* ============================================================
   ====================  FIN DES QUESTIONS  ==================
   ============================================================ */
