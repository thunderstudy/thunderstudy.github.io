/**
 * ThunderStudy Search Data
 * ─────────────────────────────────────────────────────
 * Central JS file for all searchable content.
 * Add new subjects, chapters, topics, or exams here.
 * The search engine in index.html auto-loads this.
 *
 * Format:
 *   { name, stream, url, badge, tags? }
 *
 * tags  → extra keywords that boost matching (optional, comma-separated words)
 * badge → shown as pill in result (Class 12 | CUET | SSC | JEE | etc.)
 * ─────────────────────────────────────────────────────
 * Last updated: 2026-06-15
 */

var THUNDER_SEARCH_DATA = [

  /* ══════════════════════════════════════════════════
     CLASS 12 — COMMERCE
  ══════════════════════════════════════════════════ */
  {name:'Accountancy',                  stream:'Commerce · Class 12',       url:'https://commercesehoga.github.io/commerce/acc',         badge:'Class 12', tags:'accounts acc class12 boards cbse'},
  {name:'Accountancy — Chapter 1: Accounting for NPO', stream:'Commerce · Class 12', url:'https://commercesehoga.github.io/commerce/acc', badge:'Class 12', tags:'not for profit organisation npo receipt payment'},
  {name:'Accountancy — Chapter 2: Partnership', stream:'Commerce · Class 12', url:'https://commercesehoga.github.io/commerce/acc',       badge:'Class 12', tags:'partnership firm goodwill admission retirement death'},
  {name:'Accountancy — Chapter 3: Reconstitution', stream:'Commerce · Class 12', url:'https://commercesehoga.github.io/commerce/acc',    badge:'Class 12', tags:'admission new partner retirement death'},
  {name:'Accountancy — Chapter 4: Dissolution', stream:'Commerce · Class 12', url:'https://commercesehoga.github.io/commerce/acc',       badge:'Class 12', tags:'dissolution winding up realization account'},
  {name:'Accountancy — Chapter 5: Share Capital', stream:'Commerce · Class 12', url:'https://commercesehoga.github.io/commerce/acc',     badge:'Class 12', tags:'issue shares forfeiture reissue debentures'},
  {name:'Accountancy — Chapter 6: Debentures',   stream:'Commerce · Class 12', url:'https://commercesehoga.github.io/commerce/acc',     badge:'Class 12', tags:'debenture redemption sinking fund'},
  {name:'Accountancy — Chapter 7: Cash Flow',    stream:'Commerce · Class 12', url:'https://commercesehoga.github.io/commerce/acc',     badge:'Class 12', tags:'cash flow statement operating investing financing'},
  {name:'Accountancy — Chapter 8: Financial Statements', stream:'Commerce · Class 12', url:'https://commercesehoga.github.io/commerce/acc', badge:'Class 12', tags:'balance sheet profit loss analysis'},
  {name:'Accountancy — Chapter 9: Ratio Analysis', stream:'Commerce · Class 12', url:'https://commercesehoga.github.io/commerce/acc',   badge:'Class 12', tags:'liquidity profitability solvency ratio'},

  {name:'Business Studies',             stream:'Commerce · Class 12',       url:'https://commercesehoga.github.io/commerce/bst',         badge:'Class 12', tags:'bst business management organisation'},
  {name:'BST — Chapter 1: Nature of Management', stream:'Commerce · Class 12', url:'https://commercesehoga.github.io/commerce/bst',     badge:'Class 12', tags:'management concept levels functions'},
  {name:'BST — Chapter 2: Principles of Management', stream:'Commerce · Class 12', url:'https://commercesehoga.github.io/commerce/bst', badge:'Class 12', tags:'fayol taylor scientific management'},
  {name:'BST — Chapter 3: Business Environment', stream:'Commerce · Class 12', url:'https://commercesehoga.github.io/commerce/bst',     badge:'Class 12', tags:'PESTLE demonetisation liberalisation'},
  {name:'BST — Chapter 4: Planning',    stream:'Commerce · Class 12',       url:'https://commercesehoga.github.io/commerce/bst',         badge:'Class 12', tags:'planning process types objectives'},
  {name:'BST — Chapter 5: Organising',  stream:'Commerce · Class 12',       url:'https://commercesehoga.github.io/commerce/bst',         badge:'Class 12', tags:'organising delegation decentralisation formal informal'},
  {name:'BST — Chapter 6: Staffing',    stream:'Commerce · Class 12',       url:'https://commercesehoga.github.io/commerce/bst',         badge:'Class 12', tags:'staffing recruitment selection training HRM'},
  {name:'BST — Chapter 7: Directing',   stream:'Commerce · Class 12',       url:'https://commercesehoga.github.io/commerce/bst',         badge:'Class 12', tags:'directing motivation leadership communication supervision'},
  {name:'BST — Chapter 8: Controlling', stream:'Commerce · Class 12',       url:'https://commercesehoga.github.io/commerce/bst',         badge:'Class 12', tags:'controlling budgeting ROI'},
  {name:'BST — Chapter 9: Financial Management', stream:'Commerce · Class 12', url:'https://commercesehoga.github.io/commerce/bst',     badge:'Class 12', tags:'capital structure working capital dividend'},
  {name:'BST — Chapter 10: Financial Markets', stream:'Commerce · Class 12', url:'https://commercesehoga.github.io/commerce/bst',       badge:'Class 12', tags:'stock exchange NSE BSE SEBI IPO'},
  {name:'BST — Chapter 11: Marketing',  stream:'Commerce · Class 12',       url:'https://commercesehoga.github.io/commerce/bst',         badge:'Class 12', tags:'marketing mix 4P product price place promotion branding'},
  {name:'BST — Chapter 12: Consumer Protection', stream:'Commerce · Class 12', url:'https://commercesehoga.github.io/commerce/bst',     badge:'Class 12', tags:'consumer rights COPRA redressal'},
  {name:'BST — Chapter 13: Entrepreneurship', stream:'Commerce · Class 12', url:'https://commercesehoga.github.io/commerce/bst',        badge:'Class 12', tags:'startup social entrepreneur'},

  {name:'Economics',                    stream:'Commerce · Class 12',       url:'https://commercesehoga.github.io/commerce/eco',         badge:'Class 12', tags:'eco macro micro cbse class12'},
  {name:'Eco — Microeconomics: Demand', stream:'Commerce · Class 12',       url:'https://commercesehoga.github.io/commerce/eco',         badge:'Class 12', tags:'law of demand elasticity price consumer'},
  {name:'Eco — Microeconomics: Supply', stream:'Commerce · Class 12',       url:'https://commercesehoga.github.io/commerce/eco',         badge:'Class 12', tags:'law of supply elasticity market equilibrium'},
  {name:'Eco — Microeconomics: Production', stream:'Commerce · Class 12',   url:'https://commercesehoga.github.io/commerce/eco',         badge:'Class 12', tags:'production function returns to factor marginal product'},
  {name:'Eco — Microeconomics: Cost Revenue', stream:'Commerce · Class 12', url:'https://commercesehoga.github.io/commerce/eco',         badge:'Class 12', tags:'cost revenue TR TC MC profit maximisation'},
  {name:'Eco — Microeconomics: Market Forms', stream:'Commerce · Class 12', url:'https://commercesehoga.github.io/commerce/eco',         badge:'Class 12', tags:'perfect competition monopoly oligopoly duopoly'},
  {name:'Eco — Macroeconomics: National Income', stream:'Commerce · Class 12', url:'https://commercesehoga.github.io/commerce/eco',      badge:'Class 12', tags:'GDP GNP NNP value added circular flow'},
  {name:'Eco — Macroeconomics: Money Banking', stream:'Commerce · Class 12', url:'https://commercesehoga.github.io/commerce/eco',        badge:'Class 12', tags:'RBI commercial bank credit creation monetary policy'},
  {name:'Eco — Macroeconomics: Determination of Income', stream:'Commerce · Class 12', url:'https://commercesehoga.github.io/commerce/eco', badge:'Class 12', tags:'AD AS multiplier equilibrium output'},
  {name:'Eco — Macroeconomics: Government Budget', stream:'Commerce · Class 12', url:'https://commercesehoga.github.io/commerce/eco',    badge:'Class 12', tags:'fiscal policy revenue capital deficit surplus'},
  {name:'Eco — Macroeconomics: Balance of Payments', stream:'Commerce · Class 12', url:'https://commercesehoga.github.io/commerce/eco', badge:'Class 12', tags:'BOP current capital account exchange rate'},
  {name:'Applied Maths',                stream:'Commerce · Class 12',       url:'https://commercesehoga.github.io/commerce/amath',       badge:'Class 12', tags:'applied maths statistics operations research'},

  /* ══════════════════════════════════════════════════
     CLASS 12 — SCIENCE
  ══════════════════════════════════════════════════ */
  {name:'Physics',                       stream:'Science · Class 12',        url:'https://commercesehoga.github.io/science/phy',          badge:'Class 12', tags:'phy physics cbse class12'},
  {name:'Physics — Ch 1: Electric Charges & Fields', stream:'Science · Class 12', url:'https://commercesehoga.github.io/science/phy',    badge:'Class 12', tags:'coulombs law electric field flux gauss'},
  {name:'Physics — Ch 2: Electrostatic Potential', stream:'Science · Class 12', url:'https://commercesehoga.github.io/science/phy',      badge:'Class 12', tags:'potential capacitance dielectric energy stored'},
  {name:'Physics — Ch 3: Current Electricity', stream:'Science · Class 12', url:'https://commercesehoga.github.io/science/phy',          badge:'Class 12', tags:'ohms law resistance kirchhoff wheatstone meter bridge'},
  {name:'Physics — Ch 4: Moving Charges & Magnetism', stream:'Science · Class 12', url:'https://commercesehoga.github.io/science/phy',  badge:'Class 12', tags:'biot savart ampere galvanometer motor'},
  {name:'Physics — Ch 5: Magnetism & Matter', stream:'Science · Class 12', url:'https://commercesehoga.github.io/science/phy',           badge:'Class 12', tags:'bar magnet earth magnetism dia para ferro'},
  {name:'Physics — Ch 6: Electromagnetic Induction', stream:'Science · Class 12', url:'https://commercesehoga.github.io/science/phy',   badge:'Class 12', tags:'faraday lenz eddy current EMF flux'},
  {name:'Physics — Ch 7: Alternating Current', stream:'Science · Class 12', url:'https://commercesehoga.github.io/science/phy',          badge:'Class 12', tags:'AC LC RLC resonance transformer power factor'},
  {name:'Physics — Ch 8: Electromagnetic Waves', stream:'Science · Class 12', url:'https://commercesehoga.github.io/science/phy',       badge:'Class 12', tags:'EM spectrum radio microwave infrared UV X-ray gamma'},
  {name:'Physics — Ch 9: Ray Optics', stream:'Science · Class 12',           url:'https://commercesehoga.github.io/science/phy',         badge:'Class 12', tags:'mirror lens refraction TIR prism microscope telescope'},
  {name:'Physics — Ch 10: Wave Optics', stream:'Science · Class 12',         url:'https://commercesehoga.github.io/science/phy',         badge:'Class 12', tags:'interference diffraction polarisation YDSE huygens'},
  {name:'Physics — Ch 11: Dual Nature', stream:'Science · Class 12',         url:'https://commercesehoga.github.io/science/phy',         badge:'Class 12', tags:'photoelectric effect de broglie matter waves'},
  {name:'Physics — Ch 12: Atoms', stream:'Science · Class 12',               url:'https://commercesehoga.github.io/science/phy',         badge:'Class 12', tags:'bohr model hydrogen spectrum rutherford'},
  {name:'Physics — Ch 13: Nuclei', stream:'Science · Class 12',              url:'https://commercesehoga.github.io/science/phy',         badge:'Class 12', tags:'nuclear fission fusion radioactivity half life binding energy'},
  {name:'Physics — Ch 14: Semiconductors', stream:'Science · Class 12',      url:'https://commercesehoga.github.io/science/phy',         badge:'Class 12', tags:'p-n junction diode transistor logic gates NAND NOR'},

  {name:'Chemistry',                     stream:'Science · Class 12',        url:'https://commercesehoga.github.io/science/che',          badge:'Class 12', tags:'chem chemistry cbse class12'},
  {name:'Chemistry — Ch 1: Solutions',   stream:'Science · Class 12',        url:'https://commercesehoga.github.io/science/che',          badge:'Class 12', tags:'molarity molality mole fraction colligative vapour pressure'},
  {name:'Chemistry — Ch 2: Electrochemistry', stream:'Science · Class 12',   url:'https://commercesehoga.github.io/science/che',          badge:'Class 12', tags:'cell EMF Nernst Faraday electrolysis corrosion'},
  {name:'Chemistry — Ch 3: Chemical Kinetics', stream:'Science · Class 12',  url:'https://commercesehoga.github.io/science/che',          badge:'Class 12', tags:'rate reaction order molecularity Arrhenius activation energy'},
  {name:'Chemistry — Ch 4: d-f Block Elements', stream:'Science · Class 12', url:'https://commercesehoga.github.io/science/che',          badge:'Class 12', tags:'transition elements lanthanides actinides oxidation state'},
  {name:'Chemistry — Ch 5: Coordination Compounds', stream:'Science · Class 12', url:'https://commercesehoga.github.io/science/che',     badge:'Class 12', tags:'IUPAC ligand Werner VBT CFT isomerism'},
  {name:'Chemistry — Ch 6: Haloalkanes & Haloarenes', stream:'Science · Class 12', url:'https://commercesehoga.github.io/science/che',   badge:'Class 12', tags:'SN1 SN2 elimination optical isomerism DDT'},
  {name:'Chemistry — Ch 7: Alcohols Phenols Ethers', stream:'Science · Class 12', url:'https://commercesehoga.github.io/science/che',    badge:'Class 12', tags:'alcohol phenol ether acidic basic oxidation'},
  {name:'Chemistry — Ch 8: Aldehydes Ketones Acids', stream:'Science · Class 12', url:'https://commercesehoga.github.io/science/che',    badge:'Class 12', tags:'nucleophilic addition Cannizzaro aldol condensation'},
  {name:'Chemistry — Ch 9: Amines',      stream:'Science · Class 12',        url:'https://commercesehoga.github.io/science/che',          badge:'Class 12', tags:'primary secondary tertiary diazonium coupling reaction basicity'},
  {name:'Chemistry — Ch 10: Biomolecules', stream:'Science · Class 12',      url:'https://commercesehoga.github.io/science/che',          badge:'Class 12', tags:'carbohydrates proteins amino acids DNA RNA enzymes vitamins'},

  {name:'Biology',                       stream:'Science · Class 12',        url:'https://commercesehoga.github.io/science/bio',          badge:'Class 12', tags:'bio biology cbse class12 neet'},
  {name:'Biology — Ch 1: Reproduction in Organisms', stream:'Science · Class 12', url:'https://commercesehoga.github.io/science/bio',    badge:'Class 12', tags:'asexual sexual vegetative reproduction'},
  {name:'Biology — Ch 2: Sexual Reproduction in Plants', stream:'Science · Class 12', url:'https://commercesehoga.github.io/science/bio', badge:'Class 12', tags:'flower pollination fertilisation embryo seed fruit'},
  {name:'Biology — Ch 3: Human Reproduction', stream:'Science · Class 12',   url:'https://commercesehoga.github.io/science/bio',          badge:'Class 12', tags:'male female reproductive system gametogenesis fertilisation'},
  {name:'Biology — Ch 4: Reproductive Health', stream:'Science · Class 12',  url:'https://commercesehoga.github.io/science/bio',          badge:'Class 12', tags:'STD contraception MTP ART IVF'},
  {name:'Biology — Ch 5: Principles of Inheritance', stream:'Science · Class 12', url:'https://commercesehoga.github.io/science/bio',    badge:'Class 12', tags:'Mendel law segregation independent assortment pea plant'},
  {name:'Biology — Ch 6: Molecular Basis of Inheritance', stream:'Science · Class 12', url:'https://commercesehoga.github.io/science/bio', badge:'Class 12', tags:'DNA RNA replication transcription translation genetic code'},
  {name:'Biology — Ch 7: Evolution',     stream:'Science · Class 12',        url:'https://commercesehoga.github.io/science/bio',          badge:'Class 12', tags:'Darwin natural selection Hardy-Weinberg speciation fossil'},
  {name:'Biology — Ch 8: Human Health & Disease', stream:'Science · Class 12', url:'https://commercesehoga.github.io/science/bio',       badge:'Class 12', tags:'immunity vaccine cancer AIDS drugs alcohol'},
  {name:'Biology — Ch 9: Food Production', stream:'Science · Class 12',      url:'https://commercesehoga.github.io/science/bio',          badge:'Class 12', tags:'plant breeding biofortification animal husbandry apiculture'},
  {name:'Biology — Ch 10: Microbes in Human Welfare', stream:'Science · Class 12', url:'https://commercesehoga.github.io/science/bio',   badge:'Class 12', tags:'biogas sewage fermentation antibiotics'},
  {name:'Biology — Ch 11: Biotechnology Principles', stream:'Science · Class 12', url:'https://commercesehoga.github.io/science/bio',    badge:'Class 12', tags:'recombinant DNA cloning restriction enzyme gel electrophoresis'},
  {name:'Biology — Ch 12: Biotechnology Applications', stream:'Science · Class 12', url:'https://commercesehoga.github.io/science/bio',  badge:'Class 12', tags:'insulin Bt cotton golden rice gene therapy GMO'},
  {name:'Biology — Ch 13: Organisms & Populations', stream:'Science · Class 12', url:'https://commercesehoga.github.io/science/bio',     badge:'Class 12', tags:'ecology population growth logistic exponential'},
  {name:'Biology — Ch 14: Ecosystem',    stream:'Science · Class 12',        url:'https://commercesehoga.github.io/science/bio',          badge:'Class 12', tags:'food chain web energy flow nutrient cycle pyramid'},
  {name:'Biology — Ch 15: Biodiversity', stream:'Science · Class 12',        url:'https://commercesehoga.github.io/science/bio',          badge:'Class 12', tags:'biodiversity hotspot conservation in-situ ex-situ extinction'},
  {name:'Biology — Ch 16: Environmental Issues', stream:'Science · Class 12', url:'https://commercesehoga.github.io/science/bio',        badge:'Class 12', tags:'pollution global warming ozone depletion biomagnification'},

  {name:'Mathematics',                   stream:'Science · Class 12',        url:'https://commercesehoga.github.io/science/mat',          badge:'Class 12', tags:'maths math cbse class12 jee'},
  {name:'Maths — Relations & Functions', stream:'Science · Class 12',        url:'https://commercesehoga.github.io/science/mat',          badge:'Class 12', tags:'bijective injective surjective composition inverse'},
  {name:'Maths — Inverse Trigonometry',  stream:'Science · Class 12',        url:'https://commercesehoga.github.io/science/mat',          badge:'Class 12', tags:'arcsin arccos arctan domain range formula'},
  {name:'Maths — Matrices',              stream:'Science · Class 12',        url:'https://commercesehoga.github.io/science/mat',          badge:'Class 12', tags:'matrix addition multiplication transpose symmetric skew'},
  {name:'Maths — Determinants',          stream:'Science · Class 12',        url:'https://commercesehoga.github.io/science/mat',          badge:'Class 12', tags:'determinant cofactor adjoint inverse Cramers rule'},
  {name:'Maths — Continuity & Differentiability', stream:'Science · Class 12', url:'https://commercesehoga.github.io/science/mat',       badge:'Class 12', tags:'limits continuity differentiability chain rule logarithmic'},
  {name:'Maths — Applications of Derivatives', stream:'Science · Class 12',  url:'https://commercesehoga.github.io/science/mat',          badge:'Class 12', tags:'tangent normal maxima minima rate of change increasing decreasing'},
  {name:'Maths — Integrals',             stream:'Science · Class 12',        url:'https://commercesehoga.github.io/science/mat',          badge:'Class 12', tags:'integration by parts substitution partial fractions definite'},
  {name:'Maths — Applications of Integrals', stream:'Science · Class 12',    url:'https://commercesehoga.github.io/science/mat',          badge:'Class 12', tags:'area under curve between curves'},
  {name:'Maths — Differential Equations', stream:'Science · Class 12',       url:'https://commercesehoga.github.io/science/mat',          badge:'Class 12', tags:'order degree variable separable homogeneous linear'},
  {name:'Maths — Vector Algebra',        stream:'Science · Class 12',        url:'https://commercesehoga.github.io/science/mat',          badge:'Class 12', tags:'vector dot cross product magnitude direction cosine'},
  {name:'Maths — 3D Geometry',           stream:'Science · Class 12',        url:'https://commercesehoga.github.io/science/mat',          badge:'Class 12', tags:'line plane angle skew distance cartesian vector form'},
  {name:'Maths — Linear Programming',   stream:'Science · Class 12',         url:'https://commercesehoga.github.io/science/mat',          badge:'Class 12', tags:'LPP constraints objective function feasible region corner point'},
  {name:'Maths — Probability',           stream:'Science · Class 12',        url:'https://commercesehoga.github.io/science/mat',          badge:'Class 12', tags:'conditional Bayes theorem binomial distribution random variable'},

  /* ══════════════════════════════════════════════════
     CLASS 12 — HUMANITIES
  ══════════════════════════════════════════════════ */
  {name:'History',                       stream:'Humanities · Class 12',     url:'https://commercesehoga.github.io/humanities/his',       badge:'Class 12', tags:'history cbse class12 cuet'},
  {name:'History — Ch 1: Bricks Beads & Bones (Harappa)', stream:'Humanities · Class 12', url:'https://commercesehoga.github.io/humanities/his', badge:'Class 12', tags:'indus valley civilization Harappan archaeological'},
  {name:'History — Ch 2: Kings Farmers & Towns', stream:'Humanities · Class 12', url:'https://commercesehoga.github.io/humanities/his',   badge:'Class 12', tags:'Mauryan Gupta empire coins urbanization agrarian'},
  {name:'History — Ch 3: Kinship, Caste & Class', stream:'Humanities · Class 12', url:'https://commercesehoga.github.io/humanities/his',  badge:'Class 12', tags:'Mahabharata social structure varna jati'},
  {name:'History — Ch 4: Thinkers, Beliefs & Buildings', stream:'Humanities · Class 12', url:'https://commercesehoga.github.io/humanities/his', badge:'Class 12', tags:'Buddhism Jainism Sanchi stupa cave paintings'},
  {name:'History — Ch 5: Medieval India (Agrarian Society)', stream:'Humanities · Class 12', url:'https://commercesehoga.github.io/humanities/his', badge:'Class 12', tags:'ain-i-akbari ain akbari Mughal zamindars'},
  {name:'History — Ch 6: Bhakti Sufi Traditions', stream:'Humanities · Class 12', url:'https://commercesehoga.github.io/humanities/his',  badge:'Class 12', tags:'bhakti sufi Kabir Mirabai saint'},
  {name:'History — Ch 7: Mughal Empire', stream:'Humanities · Class 12',     url:'https://commercesehoga.github.io/humanities/his',       badge:'Class 12', tags:'Akbar Aurangzeb Humayun Babur Mughal court'},
  {name:'History — Ch 8: Colonialism & Countryside', stream:'Humanities · Class 12', url:'https://commercesehoga.github.io/humanities/his', badge:'Class 12', tags:'indigo Deccan riots Ryotwari Mahalwari settlements'},
  {name:'History — Ch 9: Rulers & Records (Colonial)', stream:'Humanities · Class 12', url:'https://commercesehoga.github.io/humanities/his', badge:'Class 12', tags:'census survey imperial gazetteer'},
  {name:'History — Ch 10: Colonialism & Tribes', stream:'Humanities · Class 12', url:'https://commercesehoga.github.io/humanities/his',   badge:'Class 12', tags:'Birsa Munda Santhal forest laws adivasi'},
  {name:'History — Ch 11: Rebels & the Raj (1857)', stream:'Humanities · Class 12', url:'https://commercesehoga.github.io/humanities/his', badge:'Class 12', tags:'1857 revolt sepoy mutiny causes consequences'},
  {name:'History — Ch 12: Colonial Cities', stream:'Humanities · Class 12',   url:'https://commercesehoga.github.io/humanities/his',       badge:'Class 12', tags:'Bombay Calcutta Madras colonial urban planning'},
  {name:'History — Ch 13: Mahatma Gandhi', stream:'Humanities · Class 12',    url:'https://commercesehoga.github.io/humanities/his',       badge:'Class 12', tags:'Gandhi non-cooperation civil disobedience Quit India Harijan'},
  {name:'History — Ch 14: Understanding Partition', stream:'Humanities · Class 12', url:'https://commercesehoga.github.io/humanities/his', badge:'Class 12', tags:'partition 1947 communalism violence displacement'},
  {name:'History — Ch 15: Framing the Constitution', stream:'Humanities · Class 12', url:'https://commercesehoga.github.io/humanities/his', badge:'Class 12', tags:'constituent assembly Ambedkar Nehru Preamble Directive'},

  {name:'Geography',                     stream:'Humanities · Class 12',     url:'https://commercesehoga.github.io/humanities/geo',       badge:'Class 12', tags:'geo geography cbse class12'},
  {name:'Political Science',             stream:'Humanities · Class 12',     url:'https://commercesehoga.github.io/humanities/pol',       badge:'Class 12', tags:'pol sci civics political science class12'},
  {name:'Psychology',                    stream:'Humanities · Class 12',     url:'https://commercesehoga.github.io/humanities/psy',       badge:'Class 12', tags:'psychology cbse class12'},

  /* ══════════════════════════════════════════════════
     CLASS 12 — COMMON SUBJECTS
  ══════════════════════════════════════════════════ */
  {name:'English',                        stream:'All Streams · Class 12',   url:'https://commercesehoga.github.io/english/12',           badge:'Class 12', tags:'english flamingo vistas hornbill cbse class12'},
  {name:'English — Flamingo: The Last Lesson', stream:'Class 12 English',    url:'https://commercesehoga.github.io/english/12',           badge:'Class 12', tags:'flemish alphonse daudet'},
  {name:'English — Flamingo: Lost Spring', stream:'Class 12 English',        url:'https://commercesehoga.github.io/english/12',           badge:'Class 12', tags:'saheb mukesh bangle makers'},
  {name:'English — Flamingo: Deep Water',  stream:'Class 12 English',        url:'https://commercesehoga.github.io/english/12',           badge:'Class 12', tags:'douglas fear swimming douglass'},
  {name:'English — Flamingo: The Rattrap', stream:'Class 12 English',        url:'https://commercesehoga.github.io/english/12',           badge:'Class 12', tags:'peddler iron master'},
  {name:'English — Flamingo: Indigo',      stream:'Class 12 English',        url:'https://commercesehoga.github.io/english/12',           badge:'Class 12', tags:'Gandhi champaran peasant louis fisher'},
  {name:'English — Flamingo: Poets & Pancakes', stream:'Class 12 English',   url:'https://commercesehoga.github.io/english/12',           badge:'Class 12', tags:'asokamitran gemini studios'},
  {name:'English — Poetry: My Mother at Sixty-six', stream:'Class 12 English', url:'https://commercesehoga.github.io/english/12',         badge:'Class 12', tags:'kamala das poetry cbse'},
  {name:'English — Poetry: Keeping Quiet', stream:'Class 12 English',        url:'https://commercesehoga.github.io/english/12',           badge:'Class 12', tags:'Pablo Neruda silence introspection'},
  {name:'Physical Education',            stream:'All Streams · Class 12',    url:'https://commercesehoga.github.io/physcial/12',          badge:'Class 12', tags:'PE physical education sports cbse'},
  {name:'Computer Science (CS)',         stream:'All Streams · Class 12',    url:'https://commercesehoga.github.io/computer/cs',          badge:'Class 12', tags:'CS python programming data structure network'},
  {name:'Informatics Practices (IP)',    stream:'All Streams · Class 12',    url:'https://commercesehoga.github.io/computer/ip',          badge:'Class 12', tags:'IP python pandas NumPy matplotlib MySQL database'},

  /* ══════════════════════════════════════════════════
     CLASS 10
  ══════════════════════════════════════════════════ */
  {name:'History (SST)',                  stream:'SST · Class 10',           url:'https://commercesehoga.github.io/boards/sst/his',       badge:'Class 10', tags:'history class10 nationalism Europe India print'},
  {name:'Geography',                      stream:'SST · Class 10',           url:'https://commercesehoga.github.io/boards/sst/geo',       badge:'Class 10', tags:'geography class10 resources agriculture water'},
  {name:'Political Science (Civics)',     stream:'SST · Class 10',           url:'https://commercesehoga.github.io/boards/sst/pol',       badge:'Class 10', tags:'civics federalism democracy class10'},
  {name:'Economics',                      stream:'SST · Class 10',           url:'https://commercesehoga.github.io/boards/sst/eco',       badge:'Class 10', tags:'economics development class10 money credit sector'},
  {name:'Science',                        stream:'Science · Class 10',       url:'https://commercesehoga.github.io/boards/science/phy',   badge:'Class 10', tags:'science class10 cbse'},
  {name:'Physics (Class 10)',             stream:'Science · Class 10',       url:'https://commercesehoga.github.io/boards/science/phy',   badge:'Class 10', tags:'light electricity current magnetic effects class10'},
  {name:'Chemistry (Class 10)',           stream:'Science · Class 10',       url:'https://commercesehoga.github.io/boards/science/che',   badge:'Class 10', tags:'acids bases salts metals non-metals carbon class10'},
  {name:'Biology (Class 10)',             stream:'Science · Class 10',       url:'https://commercesehoga.github.io/boards/science/bio',   badge:'Class 10', tags:'life processes control heredity environment class10'},
  {name:'Mathematics (Class 10)',         stream:'Class 10',                  url:'https://commercesehoga.github.io/boards/maths',        badge:'Class 10', tags:'real numbers polynomial quadratic arithmetic trigonometry class10'},
  {name:'English (Class 10)',             stream:'Class 10',                  url:'https://commercesehoga.github.io/boards/eng',          badge:'Class 10', tags:'English literature firstflight footprints class10'},

  /* ══════════════════════════════════════════════════
     CUET
  ══════════════════════════════════════════════════ */
  {name:'CUET Mock Test',                 stream:'Entrance Exam',            url:'https://commercesehoga.github.io/cuet',                 badge:'CUET', tags:'cuet 2026 mock test entrance university'},
  {name:'GAT General Test',               stream:'CUET · All Exams',         url:'https://commercesehoga.github.io/gat',                  badge:'CUET', tags:'GAT general aptitude test reasoning current affairs'},
  {name:'CUET Accountancy',               stream:'CUET Commerce',            url:'https://commercesehoga.github.io/commerce/acc',         badge:'CUET', tags:'cuet accountancy commerce'},
  {name:'CUET Business Studies',          stream:'CUET Commerce',            url:'https://commercesehoga.github.io/commerce/bst',         badge:'CUET', tags:'cuet BST business studies'},
  {name:'CUET Economics',                 stream:'CUET Commerce',            url:'https://commercesehoga.github.io/commerce/eco',         badge:'CUET', tags:'cuet economics micro macro'},
  {name:'CUET Physics',                   stream:'CUET Science',             url:'https://commercesehoga.github.io/science/phy',          badge:'CUET', tags:'cuet physics science'},
  {name:'CUET Chemistry',                 stream:'CUET Science',             url:'https://commercesehoga.github.io/science/che',          badge:'CUET', tags:'cuet chemistry science'},
  {name:'CUET Biology',                   stream:'CUET Science',             url:'https://commercesehoga.github.io/science/bio',          badge:'CUET', tags:'cuet biology science'},
  {name:'CUET History',                   stream:'CUET Humanities',          url:'https://commercesehoga.github.io/humanities/his',       badge:'CUET', tags:'cuet history humanities'},
  {name:'CUET Geography',                 stream:'CUET Humanities',          url:'https://commercesehoga.github.io/humanities/geo',       badge:'CUET', tags:'cuet geography humanities'},
  {name:'CUET Political Science',         stream:'CUET Humanities',          url:'https://commercesehoga.github.io/humanities/pol',       badge:'CUET', tags:'cuet political science civics'},
  {name:'CUET CS / IP',                   stream:'CUET · All Streams',       url:'https://commercesehoga.github.io/computer/cs',          badge:'CUET', tags:'cuet computer science informatics practices'},
  {name:'One Book For CUET',              stream:'CUET · Free Book',         url:'https://commercesehoga.github.io/books',                badge:'CUET', tags:'cuet book free download economics english gat'},

  /* ══════════════════════════════════════════════════
     SSC
  ══════════════════════════════════════════════════ */
  {name:'SSC CGL Mock Test',              stream:'SSC Exam',                 url:'https://commercesehoga.github.io/ssc',                  badge:'SSC', tags:'SSC CGL tier 1 tier 2 quantitative reasoning English'},
  {name:'SSC CHSL Mock Test',             stream:'SSC Exam',                 url:'https://commercesehoga.github.io/ssc',                  badge:'SSC', tags:'SSC CHSL 10+2 LDC DEO postal assistant'},
  {name:'SSC MTS Mock Test',              stream:'SSC Exam',                 url:'https://commercesehoga.github.io/ssc',                  badge:'SSC', tags:'SSC MTS multi-tasking staff'},
  {name:'SSC GD Constable',               stream:'SSC Exam',                 url:'https://commercesehoga.github.io/ssc',                  badge:'SSC', tags:'SSC GD constable BSF CRPF CISF'},
  {name:'SSC CPO SI Mock Test',            stream:'SSC Exam',                 url:'https://commercesehoga.github.io/ssc',                  badge:'SSC', tags:'SSC CPO sub inspector police'},
  {name:'SSC JE Mock Test',               stream:'SSC Exam',                 url:'https://commercesehoga.github.io/ssc',                  badge:'SSC', tags:'SSC JE junior engineer civil electrical'},
  {name:'SSC Stenographer Prep',          stream:'SSC Exam',                 url:'https://thunderstudy.indevs.in/steno',                  badge:'SSC', tags:'SSC steno stenographer grade C D shorthand'},
  {name:'SSC Steno Grade C',              stream:'SSC Exam',                 url:'https://thunderstudy.indevs.in/steno',                  badge:'SSC', tags:'stenographer grade C ministry secretariat typing'},
  {name:'SSC Steno Grade D',              stream:'SSC Exam',                 url:'https://thunderstudy.indevs.in/steno',                  badge:'SSC', tags:'stenographer grade D department assistant'},
  {name:'SSC General Awareness',          stream:'SSC Exam',                 url:'https://commercesehoga.github.io/ssc',                  badge:'SSC', tags:'GK general awareness SSC static current affairs'},
  {name:'SSC Quantitative Aptitude',      stream:'SSC Exam',                 url:'https://commercesehoga.github.io/ssc',                  badge:'SSC', tags:'quant maths SSC arithmetic algebra geometry'},
  {name:'SSC English',                    stream:'SSC Exam',                 url:'https://commercesehoga.github.io/ssc',                  badge:'SSC', tags:'SSC english vocabulary grammar cloze passage'},
  {name:'SSC Reasoning',                  stream:'SSC Exam',                 url:'https://commercesehoga.github.io/ssc',                  badge:'SSC', tags:'SSC reasoning logical verbal non-verbal'},

  /* ══════════════════════════════════════════════════
     BANKING
  ══════════════════════════════════════════════════ */
  {name:'Banking IBPS PO Mock',           stream:'Banking Exam',             url:'https://commercesehoga.github.io/banking',              badge:'Bank', tags:'IBPS PO probationary officer bank mock test'},
  {name:'IBPS RRB PO Mock Test',          stream:'Banking Exam',             url:'https://thunderstudy.github.io/banking/exam.html',      badge:'Bank', tags:'RRB rural regional bank PO officer scale 1'},
  {name:'IBPS RRB Clerk Mock Test',       stream:'Banking Exam',             url:'https://thunderstudy.github.io/banking/exam.html',      badge:'Bank', tags:'RRB clerk assistant office'},
  {name:'IBPS PO Mock Test',              stream:'Banking Exam',             url:'https://thunderstudy.github.io/banking/exam.html',      badge:'Bank', tags:'IBPS PO prelims mains online mock'},
  {name:'IBPS Clerk Mock Test',           stream:'Banking Exam',             url:'https://thunderstudy.github.io/banking/exam.html',      badge:'Bank', tags:'IBPS clerk junior associate'},
  {name:'SBI PO Mock Test',               stream:'Banking Exam',             url:'https://thunderstudy.github.io/banking/exam.html',      badge:'Bank', tags:'SBI PO State Bank India probationary officer'},
  {name:'SBI Clerk Mock Test',            stream:'Banking Exam',             url:'https://thunderstudy.github.io/banking/exam.html',      badge:'Bank', tags:'SBI clerk junior associate customer support'},
  {name:'RBI Grade B Mock Test',          stream:'Banking Exam',             url:'https://thunderstudy.github.io/banking/exam.html',      badge:'Bank', tags:'RBI Reserve Bank Grade B officer'},
  {name:'RBI Assistant Mock Test',        stream:'Banking Exam',             url:'https://thunderstudy.github.io/banking/exam.html',      badge:'Bank', tags:'RBI assistant reserve bank'},
  {name:'LIC AAO Mock Test',              stream:'Banking Exam',             url:'https://thunderstudy.github.io/banking/exam.html',      badge:'Bank', tags:'LIC AAO assistant administrative officer insurance'},
  {name:'LIC ADO Mock Test',              stream:'Banking Exam',             url:'https://thunderstudy.github.io/banking/exam.html',      badge:'Bank', tags:'LIC ADO apprentice development officer'},
  {name:'EPFO Mock Test',                 stream:'Banking Exam',             url:'https://thunderstudy.github.io/banking/exam.html',      badge:'Bank', tags:'EPFO provident fund SSA enforcement'},

  /* ══════════════════════════════════════════════════
     JEE
  ══════════════════════════════════════════════════ */
  {name:'JEE Mock Test',                  stream:'JEE Engineering',          url:'https://commercesehoga.github.io/jee-neet',             badge:'JEE', tags:'jee main advanced mock test engineering entrance'},
  {name:'JEE Physics',                    stream:'JEE Engineering',          url:'https://thunderstudy.github.io/jee/physics',            badge:'JEE', tags:'jee physics mechanics thermodynamics waves modern optics'},
  {name:'JEE Chemistry',                  stream:'JEE Engineering',          url:'https://thunderstudy.github.io/jee/chemistry',          badge:'JEE', tags:'jee chemistry organic inorganic physical'},
  {name:'JEE Maths',                      stream:'JEE Engineering',          url:'https://thunderstudy.github.io/jee/maths',             badge:'JEE', tags:'jee maths calculus algebra coordinate geometry'},
  {name:'JEE PYQs',                       stream:'JEE Engineering',          url:'https://thunderstudy.github.io/jee/pyqs',               badge:'JEE', tags:'jee previous year questions paper solution'},
  {name:'JEE Topper Notes',               stream:'JEE Engineering',          url:'https://thunderstudy.github.io/jee/topper-notes',       badge:'JEE', tags:'jee topper handwritten notes rank holder'},
  {name:'JEE Formula Sheet',              stream:'JEE Engineering',          url:'https://thunderstudy.github.io/jee/formula',            badge:'JEE', tags:'jee formula revision quick reference'},

  /* ══════════════════════════════════════════════════
     NEET
  ══════════════════════════════════════════════════ */
  {name:'NEET Mock Test',                 stream:'NEET Medical',             url:'https://commercesehoga.github.io/jee-neet',             badge:'NEET', tags:'neet mock test medical entrance UG biology'},
  {name:'NEET Physics',                   stream:'NEET Medical',             url:'https://thunderstudy.github.io/neet/physics',           badge:'NEET', tags:'neet physics mechanics electricity optics modern'},
  {name:'NEET Chemistry',                 stream:'NEET Medical',             url:'https://thunderstudy.github.io/neet/chemistry',         badge:'NEET', tags:'neet chemistry organic inorganic physical'},
  {name:'NEET Biology',                   stream:'NEET Medical',             url:'https://thunderstudy.github.io/neet/biology',           badge:'NEET', tags:'neet biology botany zoology genetics ecology'},
  {name:'NEET PYQs',                      stream:'NEET Medical',             url:'https://thunderstudy.github.io/neet/pyqs',              badge:'NEET', tags:'neet previous year questions paper solution'},
  {name:'NEET Topper Notes',              stream:'NEET Medical',             url:'https://thunderstudy.github.io/neet/topper-notes',      badge:'NEET', tags:'neet topper handwritten notes rank holder'},
  {name:'NEET Formula Sheet',             stream:'NEET Medical',             url:'https://thunderstudy.github.io/neet/formula',           badge:'NEET', tags:'neet formula revision quick reference'},

  /* ══════════════════════════════════════════════════
     UPSC
  ══════════════════════════════════════════════════ */
  {name:'UPSC Free Notes',                stream:'UPSC Civil Services',      url:'https://thunderstudy.github.io/upsc',                   badge:'UPSC', tags:'IAS IPS UPSC CSE prelims mains general studies'},
  {name:'UPSC GS1 — History & Geography', stream:'UPSC Civil Services',      url:'https://thunderstudy.github.io/upsc',                   badge:'UPSC', tags:'UPSC GS1 modern history world geography society'},
  {name:'UPSC GS2 — Polity & Governance', stream:'UPSC Civil Services',      url:'https://thunderstudy.github.io/upsc',                   badge:'UPSC', tags:'UPSC GS2 polity constitution governance IR'},
  {name:'UPSC GS3 — Economy & Environment', stream:'UPSC Civil Services',    url:'https://thunderstudy.github.io/upsc',                   badge:'UPSC', tags:'UPSC GS3 economy environment science technology security'},
  {name:'UPSC GS4 — Ethics',              stream:'UPSC Civil Services',      url:'https://thunderstudy.github.io/upsc',                   badge:'UPSC', tags:'UPSC GS4 ethics integrity aptitude case study'},
  {name:'UPSC Current Affairs',           stream:'UPSC Civil Services',      url:'https://wondermayank.github.io/Current_Affairs/',       badge:'UPSC', tags:'current affairs monthly UPSC prelims editorial'},
  {name:'GK MindMaster — Free PDF',       stream:'UPSC · All Exams',         url:'https://thunderstudy.indevs.in/GK_Thunderstudy_compressed.pdf', badge:'UPSC', tags:'GK book best free PDF general knowledge mindmaster'},

  /* ══════════════════════════════════════════════════
     FREE BOOKS
  ══════════════════════════════════════════════════ */
  {name:'Boards Dominator — Free Book',   stream:'Class 12 · Free Book',     url:'https://commercesehoga.github.io/books',                badge:'Books', tags:'boards dominator science physics chemistry biology maths best book class 12 boards free download'},
  {name:'Boards Killer — Free Book',      stream:'Class 12 · Free Book',     url:'https://commercesehoga.github.io/books',                badge:'Books', tags:'boards killer humanities history political science geography english best book class 12 free'},
  {name:'GK MindMaster — Free PDF',       stream:'GK · Free Book',           url:'https://thunderstudy.indevs.in/GK_Thunderstudy_compressed.pdf', badge:'Books', tags:'GK mindmaster best free GK book SSC UPSC railways banking competitive exams general knowledge'},
  {name:'One Book For CUET — Free',       stream:'CUET · Free Book',         url:'https://commercesehoga.github.io/books',                badge:'Books', tags:'cuet book free economics English GAT accountancy political science history'},
  {name:'20+ Sample Papers — Class 12',   stream:'Class 12 · Free Book',     url:'https://commercesehoga.github.io/books',                badge:'Books', tags:'sample paper class 12 commerce business studies economics accountancy best'},
  {name:'All Free Books Hub',             stream:'Free Downloads',           url:'https://commercesehoga.github.io/books',                badge:'Books', tags:'free books download PDF class 12 boards competitive exam study material'},

  /* ══════════════════════════════════════════════════
     OTHER EXAMS
  ══════════════════════════════════════════════════ */
  {name:'CAT Mock Test',                  stream:'MBA Entrance',             url:'https://commercesehoga.github.io/cat',                  badge:'CAT', tags:'CAT MBA entrance IIM VARC DILR QA'},
  {name:'CAT PYQs',                       stream:'MBA Entrance',             url:'https://thunderstudy.github.io/cat/pyqs',               badge:'CAT', tags:'CAT previous year paper solution'},
  {name:'XAT Mock Test',                  stream:'MBA Entrance',             url:'https://thunderstudy.github.io/cat/xat-mock',           badge:'CAT', tags:'XAT XLRI decision making essay'},
  {name:'SNAP Mock Test',                 stream:'MBA Entrance',             url:'https://thunderstudy.github.io/cat/snap-mock',          badge:'CAT', tags:'SNAP Symbiosis MBA'},
  {name:'IPMAT Mock Test',                stream:'MBA Entrance',             url:'https://commercesehoga.github.io/cat',                  badge:'CAT', tags:'IPMAT IIM Indore Rohtak integrated BBA'},

  {name:'NDA Mock Test',                  stream:'Defence Exam',             url:'https://commercesehoga.github.io/nda',                  badge:'NDA', tags:'NDA national defence academy army navy air force'},
  {name:'NDA PYQs',                       stream:'Defence Exam',             url:'https://thunderstudy.github.io/nda/pyqs',               badge:'NDA', tags:'NDA previous year questions paper'},
  {name:'NDA Notes',                      stream:'Defence Exam',             url:'https://thunderstudy.github.io/nda/notes',              badge:'NDA', tags:'NDA notes maths general ability test GAT'},

  {name:'CLAT Mock Test',                 stream:'Law Entrance',             url:'https://commercesehoga.github.io/clat',                 badge:'CLAT', tags:'CLAT law entrance NLU legal reasoning'},
  {name:'AILET Mock Test',                stream:'Law Entrance',             url:'https://thunderstudy.github.io/clat/ailet-mock',        badge:'CLAT', tags:'AILET NLU Delhi law entrance'},
  {name:'CLAT PYQs',                      stream:'Law Entrance',             url:'https://thunderstudy.github.io/clat/pyqs',              badge:'CLAT', tags:'CLAT previous year questions paper'},

  {name:'CA Foundation',                  stream:'Chartered Accountancy',    url:'https://thunderstudy.github.io/ca/foundation',          badge:'CA', tags:'CA Foundation ICAI accounting law maths statistics'},
  {name:'CA Inter / Intermediate',        stream:'Chartered Accountancy',    url:'https://thunderstudy.github.io/ca/inter',               badge:'CA', tags:'CA Inter Intermediate ICAI group 1 2'},
  {name:'CA Final',                       stream:'Chartered Accountancy',    url:'https://thunderstudy.github.io/ca/final',               badge:'CA', tags:'CA Final ICAI SFM audit law'},

  {name:'NCERT Books Class 12',           stream:'NCERT',                    url:'https://thunderstudy.github.io/ncert/book/class-12',    badge:'NCERT', tags:'NCERT textbook class 12 free download PDF'},
  {name:'NCERT Solutions',                stream:'NCERT',                    url:'https://thunderstudy.github.io/ncert/solutions',        badge:'NCERT', tags:'NCERT solutions class 6 7 8 9 10 11 12'},
  {name:'NCERT Exemplar',                 stream:'NCERT',                    url:'https://thunderstudy.github.io/ncert/exemplar-book',    badge:'NCERT', tags:'NCERT exemplar problems solutions science maths'},

  {name:'DCA Diploma',                    stream:'Diploma Course',           url:'https://thunderstudy.github.io/diploma/dca',            badge:'Diploma', tags:'DCA diploma computer application notes'},
  {name:'PGDCA Diploma',                  stream:'Diploma Course',           url:'https://thunderstudy.github.io/diploma/pgdca',          badge:'Diploma', tags:'PGDCA post graduate diploma computer application'},
  {name:'B.Ed Diploma',                   stream:'Diploma Course',           url:'https://thunderstudy.github.io/diploma/b-ed',           badge:'Diploma', tags:'B.Ed D.Ed teacher training education course'},

  {name:'CTET Mock Test',                 stream:'Teacher Exam',             url:'https://thunderstudy.github.io/tet/ctet',               badge:'TET', tags:'CTET central teacher eligibility test paper 1 2'},
  {name:'TET All States',                 stream:'Teacher Exam',             url:'https://thunderstudy.github.io/tet/all',                badge:'TET', tags:'TET state teacher eligibility test UPTET MPTET REET'},

  /* ══════════════════════════════════════════════════
     CBSE RESOURCES
  ══════════════════════════════════════════════════ */
  {name:'CBSE Topper Notes',              stream:'CBSE Resources',           url:'https://thunderstudy.github.io/cbse/topper-notes',      badge:'CBSE', tags:'topper notes handwritten class 12 rank holder'},
  {name:'CBSE Formula Sheet',             stream:'CBSE Resources',           url:'https://thunderstudy.github.io/cbse/formula',           badge:'CBSE', tags:'formula revision quick reference class 12'},
  {name:'CBSE KV Sample Paper',           stream:'CBSE Resources',           url:'https://thunderstudy.github.io/cbse/kv-sample-paper',   badge:'CBSE', tags:'Kendriya Vidyalaya KV sample paper class 12'},
  {name:'CBSE Topper Answersheet',        stream:'CBSE Resources',           url:'https://thunderstudy.github.io/cbse/topper-answersheet', badge:'CBSE', tags:'topper answersheet model answer board exam'},

  /* ══════════════════════════════════════════════════
     EXTRA / UTILITY
  ══════════════════════════════════════════════════ */
  {name:'Current Affairs',                stream:'All Exams',                url:'https://wondermayank.github.io/Current_Affairs/',       badge:'Extra', tags:'current affairs monthly 2025 2026 SSC UPSC banking'},
  {name:'Study Guide',                    stream:'ThunderStudy',             url:'https://commercesehoga.github.io/guide/',               badge:'Help', tags:'how to study guide tips strategy boards exam'},
  {name:'Request Notes / File',           stream:'ThunderStudy Support',     url:'https://docs.google.com/forms/d/e/1FAIpQLSePwlvdMzRLYoYuXNbKlamargjazyRiedg0rE0JfAzyKPyHEA/viewform', badge:'Help', tags:'request notes file ask missing material suggest upload'},
  {name:'Ask a Question (FQA)',           stream:'Support',                  url:'https://commercesehoga.github.io/fqa',                  badge:'Help', tags:'ask question support FQA help doubt'},
  {name:'Support / Donate',              stream:'Help',                     url:'https://commercesehoga.github.io/help',                 badge:'Help', tags:'donate support help thunder fund'},
  {name:'Wondermayank Portfolio',         stream:'Creator',                  url:'https://wondermayank.github.io/',                       badge:'Extra', tags:'wondermayank creator developer designer portfolio'},
  {name:'CBT Mock Platform',              stream:'ThunderStudy',             url:'https://commercesehoga.github.io/dashboard',            badge:'Extra', tags:'CBT mock platform dashboard all exams'},
];
