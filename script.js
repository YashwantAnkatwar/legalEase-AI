/* ═══════════════════════════════════════════════════════════════════
   LEGALEASE AI — script.js
   Scalable Indian Constitution + Law Platform
   Data-driven · AI-assisted · Production-grade
═══════════════════════════════════════════════════════════════════ */

const API_ENDPOINT = "/ai";

/* ─────────────────────────────────────────────────────────────────
   SECTION 1: CONSTITUTION ARTICLE SUMMARIES
   Covers Articles 12–395 + inserted articles (21A, 31A, etc.)
───────────────────────────────────────────────────────────────── */
const constitutionArticleSummaries = {
  // PART I — THE UNION AND ITS TERRITORY
  1:  "Name and territory of the Union.",
  2:  "Admission or establishment of new States.",
  3:  "Formation of new States and alteration of areas, boundaries or names of existing States.",
  4:  "Laws made under Articles 2 and 3 to provide for the amendment of the First and Fourth Schedules.",

  // PART II — CITIZENSHIP
  5:  "Citizenship at the commencement of the Constitution.",
  6:  "Rights of citizenship of certain persons who migrated to India from Pakistan.",
  7:  "Rights of citizenship of certain migrants to Pakistan.",
  8:  "Rights of citizenship of certain persons of Indian origin residing outside India.",
  9:  "Persons voluntarily acquiring citizenship of a foreign State not to be citizens.",
  10: "Continuance of the rights of citizenship.",
  11: "Parliament to regulate the right of citizenship by law.",

  // PART III — FUNDAMENTAL RIGHTS
  12: "Definition of 'the State' for Fundamental Rights purposes.",
  13: "Laws inconsistent with or in derogation of Fundamental Rights are void.",
  14: "Equality before law and equal protection of laws.",
  15: "Prohibition of discrimination on grounds of religion, race, caste, sex, or place of birth.",
  16: "Equality of opportunity in matters of public employment.",
  17: "Abolition of untouchability and prohibition of its practice.",
  18: "Abolition of titles; no citizen shall accept any title from a foreign State.",
  19: "Protection of six fundamental freedoms — speech, assembly, movement, profession, etc.",
  20: "Protection in respect of conviction for offences — no ex post facto law or double jeopardy.",
  21: "Protection of life and personal liberty; no person deprived except by procedure established by law.",
  "21A": "Right to free and compulsory elementary education for children aged 6–14.",
  22: "Protection against arbitrary arrest and detention in certain cases.",
  23: "Prohibition of traffic in human beings and forced labour.",
  24: "Prohibition of employment of children below 14 in factories, mines, or hazardous occupations.",
  25: "Freedom of conscience and free profession, practice, and propagation of religion.",
  26: "Freedom to manage religious affairs and establish/maintain religious institutions.",
  27: "Freedom from payment of taxes for promotion of any particular religion.",
  28: "Freedom as to attendance at religious instruction or worship in certain educational institutions.",
  29: "Protection of interests of minorities — right to conserve distinct language, script, or culture.",
  30: "Right of minorities to establish and administer educational institutions.",
  "31A": "Saving of laws providing for acquisition of estates.",
  "31B": "Validation of certain Acts and Regulations (Ninth Schedule laws).",
  "31C": "Saving of laws giving effect to certain Directive Principles.",
  32: "Right to constitutional remedies — right to move the Supreme Court for enforcement of Fundamental Rights.",
  33: "Power of Parliament to modify rights conferred under Part III in their application to armed forces.",
  34: "Restriction on rights conferred under Part III while martial law is in force.",
  35: "Legislation to give effect to provisions of Part III — Parliament's exclusive power.",

  // PART IV — DIRECTIVE PRINCIPLES OF STATE POLICY
  36: "Definition of 'the State' for DPSP purposes.",
  37: "Application of Directive Principles — not enforceable in courts but fundamental to governance.",
  38: "State shall strive to promote welfare, minimise inequalities in status, facilities and opportunities.",
  39: "Certain policy principles: right to adequate means of livelihood, equal pay, non-abuse of resources.",
  "39A": "Equal justice and free legal aid to ensure justice not denied by economic or other disabilities.",
  40: "State shall take steps to organise village panchayats as units of self-government.",
  41: "Right to work, education, and public assistance in case of unemployment, old age, sickness, etc.",
  42: "Provision for just and humane conditions of work and maternity relief.",
  43: "Living wage, decent standard of life, and full enjoyment of leisure for workers.",
  "43A": "Participation of workers in management of industries.",
  "43B": "Promotion and voluntary formation of cooperative societies.",
  44: "Uniform civil code for citizens throughout the territory of India.",
  45: "Early childhood care and education for children below six years.",
  46: "Promotion of educational and economic interests of Scheduled Castes, Tribes, and weaker sections.",
  47: "Duty to raise level of nutrition, standard of living, and improve public health.",
  48: "Organisation of agriculture and animal husbandry on modern and scientific lines.",
  "48A": "Protection and improvement of environment and safeguarding forests and wildlife.",
  49: "Protection of monuments, places, and objects of national importance.",
  50: "Separation of judiciary from executive in the public services of the State.",
  51: "Promotion of international peace and security and respect for international law.",

  // PART IVA — FUNDAMENTAL DUTIES
  "51A": "Eleven Fundamental Duties of every citizen of India.",

  // PART V — THE UNION: THE EXECUTIVE
  52: "There shall be a President of India.",
  53: "Executive power of the Union vested in the President.",
  54: "Election of President by Electoral College of elected members of both Houses and State Assemblies.",
  55: "Manner of election of President — uniform scale of representation.",
  56: "Term of office of President — five years from date of entering office.",
  57: "Eligibility of President for re-election.",
  58: "Qualifications for election as President.",
  59: "Conditions of President's office — no profit-making position during term.",
  60: "Oath or affirmation by President before entering office.",
  61: "Procedure for impeachment of President by Parliament.",
  62: "Time of holding election to fill vacancy in President's office.",
  63: "There shall be a Vice-President of India.",
  64: "Vice-President as ex officio Chairman of the Council of States (Rajya Sabha).",
  65: "Vice-President acting as President or discharging President's functions.",
  66: "Election of Vice-President by Electoral College of members of both Houses.",
  67: "Term of office of Vice-President — five years.",
  68: "Time of holding election to fill vacancy in Vice-President's office.",
  69: "Oath or affirmation by Vice-President.",
  70: "Discharge of President's functions in other contingencies.",
  71: "Matters relating to or connected with election of President or Vice-President.",
  72: "Power of President to grant pardons, reprieves, respites, or remissions of punishment.",
  73: "Extent of executive power of the Union.",
  74: "Council of Ministers to aid and advise President; President bound by advice.",
  75: "Appointment, tenure, salaries and responsibilities of Ministers.",
  76: "Attorney-General for India — chief law officer of the Government of India.",
  77: "Conduct of business of Government of India.",
  78: "Duties of Prime Minister to communicate decisions to the President.",

  // PART V — THE UNION: PARLIAMENT
  79: "Constitution of Parliament — President, Rajya Sabha, and Lok Sabha.",
  80: "Composition of Rajya Sabha — 250 members including 12 nominated by President.",
  81: "Composition of Lok Sabha — not more than 550 elected members.",
  82: "Readjustment after each census (delimitation).",
  83: "Duration of Houses of Parliament — Rajya Sabha permanent, Lok Sabha 5 years.",
  84: "Qualification for membership of Parliament.",
  85: "Sessions of Parliament, prorogation and dissolution.",
  86: "Right of President to address and send messages to Houses.",
  87: "Special address by President to Parliament.",
  88: "Rights of Ministers and Attorney-General in Parliament.",
  89: "Officers of Rajya Sabha — Vice-President as Chairman.",
  90: "Vacation and resignation of office of Deputy Chairman of Rajya Sabha.",
  91: "Power of Deputy Chairman to perform Chairman's duties.",
  92: "Chairman/Deputy Chairman not to preside while resolution for their removal is under consideration.",
  93: "Officers of Lok Sabha — Speaker and Deputy Speaker.",
  94: "Vacation and resignation of office of Speaker and Deputy Speaker.",
  95: "Power of Deputy Speaker to perform Speaker's duties.",
  96: "Speaker/Deputy Speaker not to preside while resolution for removal is under consideration.",
  97: "Salaries and allowances of Chairman, Deputy Chairman, Speaker, and Deputy Speaker.",
  98: "Secretariat of Parliament.",
  99: "Oath or affirmation by Members of Parliament.",
  100: "Voting in Houses, quorum, etc.",
  101: "Vacation of seats of members.",
  102: "Disqualifications for membership of Parliament.",
  103: "Decision on questions as to disqualifications of Members of Parliament.",
  104: "Penalty for sitting and voting before making oath or affirmation.",
  105: "Powers, privileges, and immunities of Parliament and its Members.",
  106: "Salaries and allowances of Members of Parliament.",

  // LEGISLATIVE PROCEDURE
  107: "Provisions as to introduction and passing of Bills.",
  108: "Joint sitting of both Houses in certain cases.",
  109: "Special procedure in respect of Money Bills.",
  110: "Definition of 'Money Bills'.",
  111: "Assent to Bills by President.",
  112: "Annual financial statement (Union Budget).",
  113: "Procedure in Parliament with respect to estimates.",
  114: "Appropriation Bills.",
  115: "Supplementary, additional or excess grants.",
  116: "Votes on account, votes of credit and exceptional grants.",
  117: "Special provisions as to financial Bills.",
  118: "Rules of procedure in Parliament.",
  119: "Regulation by law of procedure in Parliament in relation to financial business.",
  120: "Language to be used in Parliament (Hindi or English).",
  121: "Restriction on discussion in Parliament.",
  122: "Courts not to inquire into proceedings of Parliament.",

  // PART V: THE UNION JUDICIARY
  124: "Establishment and constitution of the Supreme Court of India.",
  125: "Salaries of Judges of the Supreme Court.",
  126: "Appointment of acting Chief Justice of India.",
  127: "Appointment of ad hoc judges of Supreme Court.",
  128: "Attendance of retired judges at sittings of Supreme Court.",
  129: "Supreme Court to be a court of record.",
  130: "Seat of Supreme Court.",
  131: "Original jurisdiction of the Supreme Court (disputes between States/Centre).",
  132: "Appellate jurisdiction of Supreme Court in constitutional cases.",
  133: "Appellate jurisdiction in civil matters.",
  134: "Appellate jurisdiction in criminal matters.",
  135: "Jurisdiction and powers of Federal Court under existing law.",
  136: "Special leave to appeal by the Supreme Court (SLP).",
  137: "Review of judgments or orders by the Supreme Court.",
  138: "Enlargement of Supreme Court's jurisdiction.",
  139: "Conferment on Supreme Court of powers to issue certain writs.",
  "139A": "Transfer of certain cases from High Courts to Supreme Court.",
  140: "Ancillary powers of Supreme Court.",
  141: "Law declared by Supreme Court to be binding on all courts.",
  142: "Enforcement of decrees and orders of Supreme Court.",
  143: "Power of President to consult Supreme Court (Advisory Jurisdiction).",
  144: "Civil and judicial authorities to act in aid of Supreme Court.",
  145: "Rules of court, etc.",
  146: "Officers and servants and expenses of Supreme Court.",
  147: "Interpretation of Constitution in judgments.",

  // PART VI — THE STATES
  152: "Definition of 'State' in Part VI.",
  153: "Governors of States.",
  154: "Executive power of State vested in Governor.",
  155: "Appointment of Governor by President.",
  156: "Term of office of Governor — 5 years.",
  157: "Qualifications for appointment as Governor.",
  158: "Conditions of Governor's office.",
  159: "Oath or affirmation by Governor.",
  160: "Discharge of functions of Governor in certain contingencies.",
  161: "Power of Governor to grant pardons within State.",
  162: "Extent of executive power of State.",
  163: "Council of Ministers to aid and advise Governor.",
  164: "Appointment and tenure of State Ministers.",
  165: "Advocate-General for the State.",
  166: "Conduct of business of State Government.",
  167: "Duties of Chief Minister toward the Governor.",
  168: "Constitution of State Legislatures.",
  169: "Abolition or creation of Legislative Councils in States.",
  170: "Composition of Legislative Assemblies.",
  171: "Composition of Legislative Councils.",
  172: "Duration of State Legislatures.",
  173: "Qualification for membership of State Legislature.",
  174: "Sessions of State Legislature, prorogation and dissolution.",
  175: "Right of Governor to address and send messages to the Legislature.",
  176: "Special address by Governor.",
  177: "Rights of Ministers and Advocate-General in State Legislature.",

  // STATE FINANCE AND JUDICATURE
  202: "Annual financial statement (State Budget).",
  203: "Procedure in Legislature with respect to estimates.",
  204: "Appropriation Bills (State).",
  205: "Supplementary, additional or excess grants (State).",
  213: "Power of Governor to promulgate Ordinances.",
  214: "High Courts for States.",
  215: "High Courts to be courts of record.",
  216: "Constitution of High Courts.",
  217: "Appointment and conditions of office of a Judge of a High Court.",
  218: "Application of certain provisions relating to Supreme Court to High Courts.",
  219: "Oath or affirmation by Judges of High Courts.",
  220: "Restriction on practice in courts after being permanent Judge.",
  221: "Salaries of Judges.",
  222: "Transfer of a Judge from one High Court to another.",
  223: "Appointment of acting Chief Justice.",
  224: "Appointment of additional and acting Judges.",
  "224A": "Appointment of retired Judges at sittings of High Courts.",
  225: "Jurisdiction of existing High Courts.",
  226: "Power of High Courts to issue certain writs (including habeas corpus).",
  227: "Power of superintendence over all courts by the High Court.",
  228: "Transfer of certain cases to High Court.",
  229: "Officers and servants and expenses of High Courts.",
  230: "Extension of jurisdiction of High Courts to Union Territories.",
  231: "Establishment of common High Court for two or more States.",

  // PART IX — PANCHAYATS
  243: "Definitions for Panchayati Raj institutions.",
  "243A": "Gram Sabha (village assembly).",
  "243B": "Constitution of Panchayats at village, intermediate, and district levels.",
  "243C": "Composition of Panchayats.",
  "243D": "Reservation of seats for Scheduled Castes and Tribes in Panchayats.",
  "243E": "Duration of Panchayats — five years.",
  "243F": "Disqualifications for membership in Panchayats.",
  "243G": "Powers, authority, and responsibilities of Panchayats.",
  "243H": "Powers to impose taxes by and funds of Panchayats.",
  "243I": "Constitution of Finance Commission to review financial position of Panchayats.",
  "243J": "Audit of accounts of Panchayats.",
  "243K": "Elections to Panchayats by State Election Commission.",
  "243L": "Application of provisions to Union Territories.",
  "243M": "Provisions not to apply to certain areas (scheduled areas, etc.).",
  "243N": "Continuance of existing laws and Panchayats.",
  "243O": "Bar to interference by courts in electoral matters of Panchayats.",

  // PART IX-A — MUNICIPALITIES
  "243P": "Definitions for urban local bodies.",
  "243Q": "Constitution of Municipalities.",
  "243R": "Composition of Municipalities.",
  "243S": "Constitution and composition of Wards Committees.",
  "243T": "Reservation of seats in Municipalities.",
  "243U": "Duration of Municipalities.",
  "243V": "Disqualifications for membership in Municipalities.",
  "243W": "Powers, authority, and responsibilities of Municipalities.",
  "243X": "Power to impose taxes by, and funds of, Municipalities.",
  "243Y": "Finance Commission for Municipalities.",
  "243Z": "Audit of accounts of Municipalities.",
  "243ZA": "Elections to Municipalities by State Election Commission.",

  // PART X — SCHEDULED AND TRIBAL AREAS
  244: "Administration of Scheduled Areas and Tribal Areas.",
  "244A": "Formation of autonomous State within Assam.",

  // PART XI — RELATIONS BETWEEN THE UNION AND STATES
  245: "Extent of laws made by Parliament and State Legislatures.",
  246: "Subject matter of laws — Union List, State List, Concurrent List.",
  247: "Power of Parliament to provide for establishment of certain additional courts.",
  248: "Residuary powers of legislation vest in Parliament.",
  249: "Power of Parliament to legislate with respect to State List matter of national importance.",
  250: "Power of Parliament to legislate under State List during national emergency.",
  251: "Inconsistency between Union and State laws — Union law prevails.",
  252: "Power of Parliament to legislate for two or more States by consent.",
  253: "Legislation for giving effect to international agreements.",
  254: "Inconsistency between laws made by Parliament and laws made by State Legislatures.",
  255: "Requirements as to recommendations and previous sanctions.",

  // PART XII — FINANCE, PROPERTY, ETC.
  264: "Interpretation of finance provisions.",
  265: "Taxes not to be imposed save by authority of law.",
  266: "Consolidated Funds and public accounts of India and of the States.",
  267: "Contingency Fund of India.",
  268: "Duties levied by Union but collected and kept by States.",
  269: "Taxes levied and collected by Union but assigned to States.",
  270: "Taxes levied and distributed between Union and the States.",
  271: "Surcharge on certain duties and taxes for purposes of the Union.",
  272: "Taxes which are levied and collected by the Union and may be distributed between Union and States.",
  273: "Grants in lieu of export duty on jute and jute products.",
  274: "Prior recommendation of President required to Bills affecting taxation.",
  275: "Grants from the Union to certain States.",
  276: "Taxes on professions, trades, callings, and employments.",
  277: "Savings for existing taxes levied by States.",
  279: "Calculation of 'net proceeds'.",
  "279A": "Goods and Services Tax Council.",
  280: "Finance Commission — appointed every 5 years.",
  281: "Recommendations of the Finance Commission.",
  282: "Expenditure defrayable by the Union or a State out of revenues.",
  283: "Custody of Consolidated Funds, Contingency Funds, and moneys credited.",
  284: "Custody of suitors' deposits and other moneys received by public servants.",
  285: "Exemption of property of Union from State taxation.",
  286: "Restrictions as to imposition of tax on sale or purchase of goods.",
  287: "Exemption from taxes on electricity.",
  288: "Exemption from taxation by States in respect of water or electricity in certain cases.",
  289: "Exemption of property and income of State from Union taxation.",
  290: "Adjustment in respect of certain expenses and pensions charged to Consolidated Funds.",
  "290A": "Annual payment to certain Devaswom Funds.",
  292: "Borrowing by Government of India.",
  293: "Borrowing by States.",

  // PART XIII — TRADE, COMMERCE, INTERCOURSE
  301: "Freedom of trade, commerce, and intercourse.",
  302: "Power of Parliament to impose restrictions on trade.",
  303: "Restrictions on legislative powers of Union and States with regard to trade and commerce.",
  304: "Restrictions on trade, commerce, and intercourse among States.",
  305: "Saving of existing laws and laws providing for State monopolies.",
  306: "Power of certain States to impose restrictions on trade.",
  307: "Appointment of authority for carrying out certain purposes.",

  // PART XIV — SERVICES
  308: "Interpretation of services provisions.",
  309: "Recruitment and conditions of service of persons serving the Union or a State.",
  310: "Tenure of office of persons serving the Union or a State.",
  311: "Dismissal, removal, or reduction in rank of persons employed in civil capacities under Union or State.",
  312: "All-India Services.",
  "312A": "Power of Parliament to vary or revoke conditions of service of officers of certain services.",
  313: "Transitional provisions for services.",
  314: "Provision for protection of existing officers of certain services.",

  // PART XV — ELECTIONS
  324: "Superintendence, direction, and control of elections vested in Election Commission of India.",
  325: "No person to be ineligible for inclusion in electoral rolls on grounds of religion, race, caste or sex.",
  326: "Elections to Lok Sabha and Legislative Assemblies on basis of adult suffrage.",
  327: "Power of Parliament to make provision with respect to elections.",
  328: "Power of State Legislature to make provision with respect to elections.",
  329: "Bar to interference by courts in electoral matters.",

  // PART XVI — SPECIAL PROVISIONS
  330: "Reservation of seats for Scheduled Castes and Tribes in Lok Sabha.",
  331: "Representation of Anglo-Indian Community in Lok Sabha.",
  332: "Reservation of seats for Scheduled Castes and Tribes in State Legislative Assemblies.",
  333: "Representation of Anglo-Indian Community in Legislative Assemblies.",
  334: "Reservation of seats and special representation to cease after certain period.",
  335: "Claims of Scheduled Castes and Tribes to services and posts.",
  336: "Special provision for Anglo-Indian Community in certain services.",
  337: "Special provision with respect to educational grants for Anglo-Indian Community.",
  338: "National Commission for Scheduled Castes.",
  "338A": "National Commission for Scheduled Tribes.",
  "338B": "National Commission for Backward Classes.",
  339: "Control of the Union over the administration of Scheduled Areas.",
  340: "Appointment of Commission to investigate the conditions of backward classes.",
  341: "Scheduled Castes — Presidential notification.",
  342: "Scheduled Tribes — Presidential notification.",
  "342A": "Socially and educationally backward classes — Presidential notification.",
  343: "Official language of the Union — Hindi in Devanagari script.",
  344: "Commission and Committee of Parliament on official language.",
  345: "Official language or languages of a State.",
  346: "Official language for communication between one State and another.",
  347: "Special provision relating to language spoken by a section of population of a State.",
  348: "Language to be used in Supreme Court and High Courts.",
  349: "Special procedure for enactment of certain laws relating to language.",
  350: "Language to be used in representations for redress of grievances.",
  "350A": "Facilities for instruction in mother tongue at primary stage.",
  "350B": "Special Officer for linguistic minorities.",
  351: "Directive for development of the Hindi language.",

  // PART XVIII — EMERGENCY PROVISIONS
  352: "Proclamation of National Emergency by President.",
  353: "Effect of Proclamation of National Emergency.",
  354: "Application of provisions relating to distribution of revenues during emergency.",
  355: "Duty of Union to protect States against external aggression and internal disturbance.",
  356: "Provisions in case of failure of constitutional machinery in States (President's Rule).",
  357: "Exercise of legislative powers under proclamation under Article 356.",
  358: "Suspension of provisions of Article 19 during National Emergency.",
  359: "Suspension of enforcement of rights conferred by Part III during National Emergency.",
  "359A": "Application of this Part to State of Punjab (now expired).",
  360: "Provisions as to Financial Emergency.",

  // PART XIX — MISCELLANEOUS
  361: "Protection of President and Governors and Raj Pramukhs from legal proceedings.",
  "361A": "Protection of publication of proceedings of Parliament and State Legislatures.",
  "361B": "Disqualification for appointment on remunerative political post.",
  362: "Rights and privileges of Rulers of Indian States (repealed).",
  363: "Bar to interference by courts in disputes arising out of certain treaties, agreements, etc.",
  "363A": "Recognition granted to Rulers of Indian States to cease and privy purses to be abolished.",
  364: "Special provisions as to major ports and aerodromes.",
  365: "Effect of failure to comply with directions given by Union.",
  366: "Definitions of various terms used in the Constitution.",
  367: "Interpretation of the Constitution.",

  // PART XX — AMENDMENT
  368: "Power of Parliament to amend the Constitution and procedure thereof.",

  // PART XXI — TEMPORARY, TRANSITIONAL & SPECIAL PROVISIONS
  369: "Temporary power to Parliament to make laws with respect to certain matters in the State List.",
  370: "Special provisions with respect to the State of Jammu and Kashmir (now modified).",
  371: "Special provision with respect to Maharashtra and Gujarat.",
  "371A": "Special provision with respect to Nagaland.",
  "371B": "Special provision with respect to Assam.",
  "371C": "Special provision with respect to Manipur.",
  "371D": "Special provisions with respect to Andhra Pradesh and Telangana.",
  "371E": "Establishment of central university in Andhra Pradesh.",
  "371F": "Special provisions with respect to Sikkim.",
  "371G": "Special provision with respect to Mizoram.",
  "371H": "Special provision with respect to Arunachal Pradesh.",
  "371I": "Special provision with respect to Goa.",
  "371J": "Special provision with respect to Karnataka.",
  372: "Continuance in force of existing laws and their adaptation.",
  "372A": "Power of President to adapt laws.",
  373: "Power of President to make order in respect of persons under preventive detention.",
  374: "Provisions as to Judges of the Federal Court and proceedings pending in the Federal Court.",
  375: "Courts, authorities and officers to continue to function subject to the provisions of the Constitution.",
  376: "Provisions as to Judges of High Courts.",
  377: "Provisions as to Comptroller and Auditor-General of India.",
  378: "Provisions as to Public Service Commissions.",
  "378A": "Special provision as to duration of Andhra Pradesh Legislative Assembly.",
  379: "Provisions as to provisional Parliament and the Speaker and Deputy Speaker thereof.",
  380: "Provisions as to provisional President.",
  381: "Provisions as to Council of Ministers of the provisional Government.",
  382: "Provisions as to the Comptroller and Auditor-General of India.",
  383: "Provisions as to the Attorney-General.",
  384: "Provisions as to Secretariat of Parliament.",
  385: "Provisions as to the Speaker of the House of the People.",
  386: "Provisions as to the Secretary of State for India.",
  387: "Provision as to the members of the Council of States.",
  388: "Provisions as to members of the House of the People from States.",
  389: "Provisions as to members of State Legislatures.",
  390: "Provision as to persons serving under the Crown.",
  391: "Provision for the removal of difficulties.",
  392: "Power of President to remove difficulties.",
  393: "Short title — 'The Constitution of India'.",
  394: "Commencement of the Constitution.",
  "394A": "Authoritative text in Hindi language.",
  395: "Repeals of the Indian Independence Act and the Government of India Act, 1935.",

  // PART XXII — SHORT TITLE, COMMENCEMENT, ETC.
  // (covered above in 393–395)

  // ─── INSERTED ARTICLES ────────────────────────────────────────────
  "300A": "Persons not to be deprived of property save by authority of law.",
};

/* ─────────────────────────────────────────────────────────────────
   SECTION 2: MAJOR INDIAN ACTS DATABASE
   Comprehensive, categorised, keyword-rich — All 7 law domains
───────────────────────────────────────────────────────────────── */
const majorLawSummaries = [

  // ══════════════════════════════════════════════════════════════
  //  🔴 CRIMINAL LAW — IPC (Indian Penal Code, 1860)
  //  Source: https://devgan.in/all_sections_ipc.php (575 sections)
  // ══════════════════════════════════════════════════════════════
  { id:"ipc_1", title:"IPC Section 1", category:"criminal", short:"Title and extent of operation of the Code.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_2", title:"IPC Section 2", category:"criminal", short:"Punishment of offences committed within India.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_3", title:"IPC Section 3", category:"criminal", short:"Punishment of offences committed beyond, but which by law may be tried within, India.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_4", title:"IPC Section 4", category:"criminal", short:"Extension of Code to extra-territorial offences.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_5", title:"IPC Section 5", category:"criminal", short:"Certain laws not to be affected by this Act.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_6", title:"IPC Section 6", category:"criminal", short:"Definitions in the Code to be understood subject to exceptions.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_7", title:"IPC Section 7", category:"criminal", short:"Sense of expression once explained.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_8", title:"IPC Section 8", category:"criminal", short:"Gender.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_9", title:"IPC Section 9", category:"criminal", short:"Number.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_10", title:"IPC Section 10", category:"criminal", short:"\"Man\" \"Woman\".", type:"ipc", keywords:["ipc"] },
  { id:"ipc_11", title:"IPC Section 11", category:"criminal", short:"\"Person\".", type:"ipc", keywords:["ipc"] },
  { id:"ipc_12", title:"IPC Section 12", category:"criminal", short:"\"Public\".", type:"ipc", keywords:["ipc"] },
  { id:"ipc_13", title:"IPC Section 13", category:"criminal", short:"\"Queen\".", type:"ipc", keywords:["ipc"] },
  { id:"ipc_14", title:"IPC Section 14", category:"criminal", short:"\"Servant of Government\".", type:"ipc", keywords:["ipc"] },
  { id:"ipc_15", title:"IPC Section 15", category:"criminal", short:"\"British India\".", type:"ipc", keywords:["ipc"] },
  { id:"ipc_16", title:"IPC Section 16", category:"criminal", short:"\"Government of India\".", type:"ipc", keywords:["ipc"] },
  { id:"ipc_17", title:"IPC Section 17", category:"criminal", short:"\"Government\".", type:"ipc", keywords:["ipc"] },
  { id:"ipc_18", title:"IPC Section 18", category:"criminal", short:"\"India\".", type:"ipc", keywords:["ipc"] },
  { id:"ipc_19", title:"IPC Section 19", category:"criminal", short:"\"Judge\".", type:"ipc", keywords:["ipc"] },
  { id:"ipc_20", title:"IPC Section 20", category:"criminal", short:"\"Court of Justice\".", type:"ipc", keywords:["ipc"] },
  { id:"ipc_21", title:"IPC Section 21", category:"criminal", short:"\"Public servant\".", type:"ipc", keywords:["ipc","public servant","government"] },
  { id:"ipc_22", title:"IPC Section 22", category:"criminal", short:"\"Movable property\".", type:"ipc", keywords:["ipc"] },
  { id:"ipc_23", title:"IPC Section 23", category:"criminal", short:"\"Wrongful gain\".", type:"ipc", keywords:["ipc"] },
  { id:"ipc_24", title:"IPC Section 24", category:"criminal", short:"\"Dishonestly\".", type:"ipc", keywords:["ipc"] },
  { id:"ipc_25", title:"IPC Section 25", category:"criminal", short:"\"Fraudulently\".", type:"ipc", keywords:["ipc"] },
  { id:"ipc_26", title:"IPC Section 26", category:"criminal", short:"\"Reason to believe\".", type:"ipc", keywords:["ipc"] },
  { id:"ipc_27", title:"IPC Section 27", category:"family", short:"Property in possession of wife, clerk or servant.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_28", title:"IPC Section 28", category:"criminal", short:"\"Counterfeit\".", type:"ipc", keywords:["ipc","counterfeit","currency"] },
  { id:"ipc_29", title:"IPC Section 29", category:"criminal", short:"\"Document\".", type:"ipc", keywords:["ipc"] },
  { id:"ipc_29a", title:"IPC Section 29A", category:"criminal", short:"\"Electronic record\".", type:"ipc", keywords:["ipc"] },
  { id:"ipc_30", title:"IPC Section 30", category:"criminal", short:"\"Valuable security\".", type:"ipc", keywords:["ipc"] },
  { id:"ipc_31", title:"IPC Section 31", category:"criminal", short:"\"A will\".", type:"ipc", keywords:["ipc"] },
  { id:"ipc_32", title:"IPC Section 32", category:"criminal", short:"Words referring to acts include illegal omissions.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_33", title:"IPC Section 33", category:"criminal", short:"\"Act\". \"Omission\".", type:"ipc", keywords:["ipc"] },
  { id:"ipc_34", title:"IPC Section 34", category:"criminal", short:"Acts done by several persons in furtherance of common intention.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_35", title:"IPC Section 35", category:"criminal", short:"When such an act is criminal by reason of its being done with a criminal knowledge or intention.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_36", title:"IPC Section 36", category:"criminal", short:"Effect caused partly by act and partly by omission.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_37", title:"IPC Section 37", category:"criminal", short:"Co-operation by doing one of several acts constituting an offence.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_38", title:"IPC Section 38", category:"criminal", short:"Persons concerned in criminal act may be guilty of different offences.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_39", title:"IPC Section 39", category:"criminal", short:"\"Voluntarily\".", type:"ipc", keywords:["ipc"] },
  { id:"ipc_40", title:"IPC Section 40", category:"criminal", short:"\"Offence\".", type:"ipc", keywords:["ipc"] },
  { id:"ipc_41", title:"IPC Section 41", category:"criminal", short:"\"Special law\".", type:"ipc", keywords:["ipc"] },
  { id:"ipc_42", title:"IPC Section 42", category:"criminal", short:"\"Local law\".", type:"ipc", keywords:["ipc"] },
  { id:"ipc_43", title:"IPC Section 43", category:"criminal", short:"\"Illegal\". \"Legally bound to do\".", type:"ipc", keywords:["ipc"] },
  { id:"ipc_44", title:"IPC Section 44", category:"criminal", short:"\"Injury\".", type:"ipc", keywords:["ipc"] },
  { id:"ipc_45", title:"IPC Section 45", category:"criminal", short:"\"Life\".", type:"ipc", keywords:["ipc"] },
  { id:"ipc_46", title:"IPC Section 46", category:"criminal", short:"\"Death\".", type:"ipc", keywords:["ipc"] },
  { id:"ipc_47", title:"IPC Section 47", category:"criminal", short:"\"Animal\".", type:"ipc", keywords:["ipc"] },
  { id:"ipc_48", title:"IPC Section 48", category:"criminal", short:"\"Vessel\".", type:"ipc", keywords:["ipc"] },
  { id:"ipc_49", title:"IPC Section 49", category:"criminal", short:"\"Year\". \"Month\".", type:"ipc", keywords:["ipc"] },
  { id:"ipc_50", title:"IPC Section 50", category:"criminal", short:"\"Section\".", type:"ipc", keywords:["ipc"] },
  { id:"ipc_51", title:"IPC Section 51", category:"criminal", short:"\"Oath\".", type:"ipc", keywords:["ipc"] },
  { id:"ipc_52", title:"IPC Section 52", category:"criminal", short:"\"Good faith\".", type:"ipc", keywords:["ipc"] },
  { id:"ipc_52a", title:"IPC Section 52A", category:"criminal", short:"\"Harbour\".", type:"ipc", keywords:["ipc"] },
  { id:"ipc_53", title:"IPC Section 53", category:"criminal", short:"Punishments.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_53a", title:"IPC Section 53A", category:"criminal", short:"Construction of reference to transportation.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_54", title:"IPC Section 54", category:"criminal", short:"Commutation of sentence of death.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_55", title:"IPC Section 55", category:"criminal", short:"Commutation of sentence of imprisonment for life.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_55a", title:"IPC Section 55A", category:"criminal", short:"Definition of \"appropriate Government\".", type:"ipc", keywords:["ipc"] },
  { id:"ipc_56", title:"IPC Section 56", category:"criminal", short:"Sentence of Europeans and Americans to penal servitude.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_57", title:"IPC Section 57", category:"criminal", short:"Fractions of terms of punishment.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_58", title:"IPC Section 58", category:"criminal", short:"Offenders sentenced to transportation — how dealt with until transported.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_59", title:"IPC Section 59", category:"criminal", short:"Transportation instead of imprisonment.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_60", title:"IPC Section 60", category:"criminal", short:"Sentence may be (in certain cases of imprisonment) wholly or partly rigorous or simple.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_61", title:"IPC Section 61", category:"criminal", short:"Sentence of forfeiture of property.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_62", title:"IPC Section 62", category:"criminal", short:"Forfeiture of property, in respect of offenders punishable with death, transportation or imprisonment.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_63", title:"IPC Section 63", category:"criminal", short:"Amount of fine.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_64", title:"IPC Section 64", category:"criminal", short:"Sentence of imprisonment for non-payment of fine.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_65", title:"IPC Section 65", category:"criminal", short:"Limit to imprisonment for non-payment of fine, when imprisonment and fine awardable.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_66", title:"IPC Section 66", category:"criminal", short:"Description of imprisonment for non-payment of fine.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_67", title:"IPC Section 67", category:"criminal", short:"Imprisonment for non-payment of fine, when offence punishable with fine only.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_68", title:"IPC Section 68", category:"criminal", short:"Imprisonment to terminate on payment of fine.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_69", title:"IPC Section 69", category:"criminal", short:"Termination of imprisonment on payment of proportional part of fine.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_70", title:"IPC Section 70", category:"criminal", short:"Fine leviable within six years, or during imprisonment. Death not to discharge property from liability.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_71", title:"IPC Section 71", category:"criminal", short:"Limit of punishment of offence made up of several offences.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_72", title:"IPC Section 72", category:"criminal", short:"Punishment of person guilty of one of several offences, the judgment stating that it is doubtful of which.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_73", title:"IPC Section 73", category:"criminal", short:"Solitary confinement.", type:"ipc", keywords:["ipc","wrongful confinement","detention"] },
  { id:"ipc_74", title:"IPC Section 74", category:"criminal", short:"Limit of solitary confinement.", type:"ipc", keywords:["ipc","wrongful confinement","detention"] },
  { id:"ipc_75", title:"IPC Section 75", category:"criminal", short:"Enhanced punishment for certain offences under Chapter XII or Chapter XVII after previous conviction.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_76", title:"IPC Section 76", category:"criminal", short:"Act done by a person bound, or by mistake of fact believing himself bound, by law.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_77", title:"IPC Section 77", category:"criminal", short:"Act of Judge when acting judicially.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_78", title:"IPC Section 78", category:"criminal", short:"Act done pursuant to the judgment or order of Court.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_79", title:"IPC Section 79", category:"criminal", short:"Act done by a person justified, or by mistake of fact believing himself, justified, by law.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_80", title:"IPC Section 80", category:"criminal", short:"Accident in doing a lawful act.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_81", title:"IPC Section 81", category:"criminal", short:"Act likely to cause harm, but done without criminal intent, and to prevent other harm.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_82", title:"IPC Section 82", category:"criminal", short:"Act of a child under seven years of age.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_83", title:"IPC Section 83", category:"criminal", short:"Act of a child above seven and under twelve of immature understanding.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_84", title:"IPC Section 84", category:"criminal", short:"Act of a person of unsound mind.", type:"ipc", keywords:["ipc","insanity","mental health"] },
  { id:"ipc_85", title:"IPC Section 85", category:"criminal", short:"Act of a person incapable of judgment by reason of intoxication caused against his will.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_86", title:"IPC Section 86", category:"criminal", short:"Offence requiring a particular intent or knowledge committed by one who is intoxicated.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_87", title:"IPC Section 87", category:"criminal", short:"Act not intended and not known to be likely to cause death or grievous hurt, done by consent.", type:"ipc", keywords:["ipc","hurt","injury","grievous hurt","serious injury"] },
  { id:"ipc_88", title:"IPC Section 88", category:"criminal", short:"Act not intended to cause death, done by consent in good faith for person's benefit.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_89", title:"IPC Section 89", category:"criminal", short:"Act done in good faith for benefit of child or insane person, by or by consent of guardian.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_90", title:"IPC Section 90", category:"criminal", short:"Consent known to be given under fear or misconception.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_91", title:"IPC Section 91", category:"criminal", short:"Exclusion of acts which are offences independently of harm caused.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_92", title:"IPC Section 92", category:"criminal", short:"Act done in good faith for benefit of a person without consent.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_93", title:"IPC Section 93", category:"criminal", short:"Communication made in good faith.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_94", title:"IPC Section 94", category:"criminal", short:"Act to which a person is compelled by threats.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_95", title:"IPC Section 95", category:"criminal", short:"Act causing slight harm.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_96", title:"IPC Section 96", category:"criminal", short:"Things done in private defence.", type:"ipc", keywords:["ipc","self defence","private defence"] },
  { id:"ipc_97", title:"IPC Section 97", category:"criminal", short:"Right of private defence of the body and of property.", type:"ipc", keywords:["ipc","self defence","private defence"] },
  { id:"ipc_98", title:"IPC Section 98", category:"criminal", short:"Right of private defence against the act of a person of unsound mind, etc.", type:"ipc", keywords:["ipc","self defence","private defence","insanity","mental health"] },
  { id:"ipc_99", title:"IPC Section 99", category:"criminal", short:"Acts against which there is no right of private defence.", type:"ipc", keywords:["ipc","self defence","private defence"] },
  { id:"ipc_100", title:"IPC Section 100", category:"criminal", short:"When the right of private defence of the body extends to causing death.", type:"ipc", keywords:["ipc","self defence","private defence"] },
  { id:"ipc_101", title:"IPC Section 101", category:"criminal", short:"When such right extends to causing any harm other than death.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_102", title:"IPC Section 102", category:"criminal", short:"Commencement and continuance of the right of private defence of the body.", type:"ipc", keywords:["ipc","self defence","private defence"] },
  { id:"ipc_103", title:"IPC Section 103", category:"criminal", short:"When the right of private defence of property extends to causing death.", type:"ipc", keywords:["ipc","self defence","private defence"] },
  { id:"ipc_104", title:"IPC Section 104", category:"criminal", short:"When such right to causing any harm other than death.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_105", title:"IPC Section 105", category:"criminal", short:"Commencement and continuance of the right of private defence of property.", type:"ipc", keywords:["ipc","self defence","private defence"] },
  { id:"ipc_106", title:"IPC Section 106", category:"criminal", short:"Right of private defence against deadly assault when there is risk of harm to innocent person.", type:"ipc", keywords:["ipc","assault","hurt","self defence","private defence"] },
  { id:"ipc_107", title:"IPC Section 107", category:"criminal", short:"Abetment of a thing.", type:"ipc", keywords:["ipc","abetment","instigation"] },
  { id:"ipc_108", title:"IPC Section 108", category:"criminal", short:"Abettor.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_108a", title:"IPC Section 108A", category:"criminal", short:"Abetment in India of offences outside India.", type:"ipc", keywords:["ipc","abetment","instigation"] },
  { id:"ipc_109", title:"IPC Section 109", category:"criminal", short:"Punishment of abetment if the act abetted is committed in consequence and where no express provision is made for its punishment.", type:"ipc", keywords:["ipc","abetment","instigation"] },
  { id:"ipc_110", title:"IPC Section 110", category:"criminal", short:"Punishment of abetment if person abetted does act with different intention from that of abettor.", type:"ipc", keywords:["ipc","abetment","instigation"] },
  { id:"ipc_111", title:"IPC Section 111", category:"criminal", short:"Liability of abettor when one act abetted and different act done.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_112", title:"IPC Section 112", category:"criminal", short:"Abettor when liable to cumulative punishment for act abetted and for act done.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_113", title:"IPC Section 113", category:"criminal", short:"Liability of abettor for an effect caused by the act abetted different from that intended by the abettor.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_114", title:"IPC Section 114", category:"criminal", short:"Abettor present when offence is committed.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_115", title:"IPC Section 115", category:"criminal", short:"Abetment of offence punishable with death or imprisonment for life if offence not committed.", type:"ipc", keywords:["ipc","abetment","instigation"] },
  { id:"ipc_116", title:"IPC Section 116", category:"criminal", short:"Abetment of offence punishable with imprisonment — if offence be not committed.", type:"ipc", keywords:["ipc","abetment","instigation"] },
  { id:"ipc_117", title:"IPC Section 117", category:"criminal", short:"Abetting commission of offence by the public or by more than ten persons.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_118", title:"IPC Section 118", category:"criminal", short:"Concealing design to commit offence punishable with death or imprisonment for life.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_119", title:"IPC Section 119", category:"criminal", short:"Public servant concealing design to commit offence which it is his duty to prevent.", type:"ipc", keywords:["ipc","public servant","government"] },
  { id:"ipc_120", title:"IPC Section 120", category:"criminal", short:"Concealing design to commit offence punishable with imprisonment.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_120a", title:"IPC Section 120A", category:"criminal", short:"Definition of criminal conspiracy.", type:"ipc", keywords:["ipc","conspiracy","agreement"] },
  { id:"ipc_120b", title:"IPC Section 120B", category:"criminal", short:"Punishment of criminal conspiracy.", type:"ipc", keywords:["ipc","conspiracy","agreement"] },
  { id:"ipc_121", title:"IPC Section 121", category:"criminal", short:"Waging, or attempting to wage war, or abetting waging of war, against the Government of India.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_121a", title:"IPC Section 121A", category:"criminal", short:"Conspiracy to commit offences punishable by section 121.", type:"ipc", keywords:["ipc","conspiracy","agreement"] },
  { id:"ipc_122", title:"IPC Section 122", category:"criminal", short:"Collecting arms, etc., with intention of waging war against the Government of India.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_123", title:"IPC Section 123", category:"criminal", short:"Concealing with intent to facilitate design to wage war.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_124", title:"IPC Section 124", category:"criminal", short:"Assaulting President, Governor, etc., with intent to compel or restrain the exercise of any lawful power.", type:"ipc", keywords:["ipc","assault","hurt"] },
  { id:"ipc_124a", title:"IPC Section 124A", category:"criminal", short:"Sedition.", type:"ipc", keywords:["ipc","sedition"] },
  { id:"ipc_125", title:"IPC Section 125", category:"criminal", short:"Waging war against any Asiatic Power in alliance with the Government of India.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_126", title:"IPC Section 126", category:"criminal", short:"Committing depredation on territories of Power at peace with the Government of India.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_127", title:"IPC Section 127", category:"criminal", short:"Receiving property taken by war or depredation mentioned in sections 125 and 126.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_128", title:"IPC Section 128", category:"criminal", short:"Public servant voluntarily allowing prisoner of state or war to escape.", type:"ipc", keywords:["ipc","public servant","government"] },
  { id:"ipc_129", title:"IPC Section 129", category:"criminal", short:"Public servant negligently suffering such prisoner to escape.", type:"ipc", keywords:["ipc","public servant","government"] },
  { id:"ipc_130", title:"IPC Section 130", category:"criminal", short:"Aiding escape of, rescuing or harbouring such prisoner.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_131", title:"IPC Section 131", category:"criminal", short:"Abetting mutiny, or attempting to seduce a soldier, sailor or airman from his duty.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_132", title:"IPC Section 132", category:"criminal", short:"Abetment of mutiny, if mutiny is committed in consequence thereof.", type:"ipc", keywords:["ipc","abetment","instigation"] },
  { id:"ipc_133", title:"IPC Section 133", category:"criminal", short:"Abetment of assault by soldier, sailor or airman on his superior officer, when in execution of his office.", type:"ipc", keywords:["ipc","assault","hurt","abetment","instigation"] },
  { id:"ipc_134", title:"IPC Section 134", category:"criminal", short:"Abetment of such assault, if the assault committed.", type:"ipc", keywords:["ipc","assault","hurt","abetment","instigation"] },
  { id:"ipc_135", title:"IPC Section 135", category:"criminal", short:"Abetment of desertion of soldier, sailor or airman.", type:"ipc", keywords:["ipc","abetment","instigation"] },
  { id:"ipc_136", title:"IPC Section 136", category:"criminal", short:"Harbouring deserter.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_137", title:"IPC Section 137", category:"criminal", short:"Deserter concealed on board merchant vessel through negligence of master.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_138", title:"IPC Section 138", category:"criminal", short:"Abetment of act of insubordination by soldier, sailor or airman.", type:"ipc", keywords:["ipc","abetment","instigation"] },
  { id:"ipc_138a", title:"IPC Section 138A", category:"criminal", short:"Application of foregoing sections to the Indian Marine Service.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_139", title:"IPC Section 139", category:"criminal", short:"Persons subject to certain Acts.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_140", title:"IPC Section 140", category:"criminal", short:"Wearing garb or carrying token used by soldier, sailor or airman.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_141", title:"IPC Section 141", category:"criminal", short:"Unlawful assembly.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_142", title:"IPC Section 142", category:"criminal", short:"Being member of unlawful assembly.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_143", title:"IPC Section 143", category:"criminal", short:"Punishment.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_144", title:"IPC Section 144", category:"criminal", short:"Joining unlawful assembly armed with deadly weapon.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_145", title:"IPC Section 145", category:"criminal", short:"Joining or continuing in unlawful assembly, knowing it has been commanded to disperse.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_146", title:"IPC Section 146", category:"criminal", short:"Rioting.", type:"ipc", keywords:["ipc","riot","unlawful assembly"] },
  { id:"ipc_147", title:"IPC Section 147", category:"criminal", short:"Punishment for rioting.", type:"ipc", keywords:["ipc","riot","unlawful assembly"] },
  { id:"ipc_148", title:"IPC Section 148", category:"criminal", short:"Rioting, armed with deadly weapon.", type:"ipc", keywords:["ipc","riot","unlawful assembly"] },
  { id:"ipc_149", title:"IPC Section 149", category:"criminal", short:"Every member of unlawful assembly guilty of offence committed in prosecution of common object.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_150", title:"IPC Section 150", category:"criminal", short:"Hiring, or conniving at hiring, of persons to join unlawful assembly.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_151", title:"IPC Section 151", category:"criminal", short:"Knowingly joining or continuing in assembly of five or more persons after it has been commanded to disperse.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_152", title:"IPC Section 152", category:"criminal", short:"Assaulting or obstructing public servant when suppressing riot, etc.", type:"ipc", keywords:["ipc","assault","hurt","public servant","government"] },
  { id:"ipc_153", title:"IPC Section 153", category:"criminal", short:"Wantonly giving provocation with intent to cause riot.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_153a", title:"IPC Section 153A", category:"criminal", short:"Promoting enmity between different groups on ground of religion, race, place of birth, residence, language, etc., and doing acts prejudicial to maintenance of harmony.", type:"ipc", keywords:["ipc","religion","worship"] },
  { id:"ipc_153aa", title:"IPC Section 153AA", category:"criminal", short:"Punishment for knowingly carrying arms in any procession or organising or holding or taking part in any mass drill or mass training with arms.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_153b", title:"IPC Section 153B", category:"criminal", short:"Imputations, assertions prejudicial to national integration.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_154", title:"IPC Section 154", category:"criminal", short:"Owner or occupier of land on which an unlawful assembly is held.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_155", title:"IPC Section 155", category:"criminal", short:"Liability of person for whose benefit riot is committed.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_156", title:"IPC Section 156", category:"criminal", short:"Liability of agent of owner or occupier for whose benefit riot is committed.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_157", title:"IPC Section 157", category:"criminal", short:"Harbouring persons hired for an unlawful assembly.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_158", title:"IPC Section 158", category:"criminal", short:"Being hired to take part in an unlawful assembly or riot.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_159", title:"IPC Section 159", category:"criminal", short:"Affray.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_160", title:"IPC Section 160", category:"criminal", short:"Punishment for committing affray.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_161", title:"IPC Section 161", category:"criminal", short:"Rep. by the Prevention of Corruption Act, 1988.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_162", title:"IPC Section 162", category:"criminal", short:"Rep. by the Prevention of Corruption Act, 1988.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_163", title:"IPC Section 163", category:"criminal", short:"Rep. by the Prevention of Corruption Act, 1988.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_164", title:"IPC Section 164", category:"criminal", short:"Rep. by the Prevention of Corruption Act, 1988.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_165", title:"IPC Section 165", category:"criminal", short:"Rep. by the Prevention of Corruption Act, 1988.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_165a", title:"IPC Section 165A", category:"criminal", short:"Rep. by the Prevention of Corruption Act, 1988.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_166", title:"IPC Section 166", category:"criminal", short:"Public servant disobeying law, with intent to cause injury to any person.", type:"ipc", keywords:["ipc","public servant","government"] },
  { id:"ipc_166a", title:"IPC Section 166A", category:"criminal", short:"Public Servant disobeying direction under Law.", type:"ipc", keywords:["ipc","public servant","government"] },
  { id:"ipc_166b", title:"IPC Section 166B", category:"criminal", short:"Punishment for non-treatment of victim.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_167", title:"IPC Section 167", category:"criminal", short:"Public servant framing an incorrect document with intent to cause injury.", type:"ipc", keywords:["ipc","public servant","government"] },
  { id:"ipc_168", title:"IPC Section 168", category:"criminal", short:"Public servant unlawfully engaging in trade.", type:"ipc", keywords:["ipc","public servant","government"] },
  { id:"ipc_169", title:"IPC Section 169", category:"criminal", short:"Public servant unlawfully buying or bidding for property.", type:"ipc", keywords:["ipc","public servant","government"] },
  { id:"ipc_170", title:"IPC Section 170", category:"criminal", short:"Personating a public servant.", type:"ipc", keywords:["ipc","public servant","government"] },
  { id:"ipc_171", title:"IPC Section 171", category:"criminal", short:"Wearing garb or carrying token used by public servant with fraudulent intent.", type:"ipc", keywords:["ipc","public servant","government"] },
  { id:"ipc_171a", title:"IPC Section 171A", category:"criminal", short:"\"Candidate\", \"Electoral right\" defined.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_171b", title:"IPC Section 171B", category:"criminal", short:"Bribery.", type:"ipc", keywords:["ipc","bribery","corruption"] },
  { id:"ipc_171c", title:"IPC Section 171C", category:"criminal", short:"Undue influence at elections.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_171d", title:"IPC Section 171D", category:"criminal", short:"Personation at elections.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_171e", title:"IPC Section 171E", category:"criminal", short:"Punishment for bribery.", type:"ipc", keywords:["ipc","bribery","corruption"] },
  { id:"ipc_171f", title:"IPC Section 171F", category:"criminal", short:"Punishment for undue influence or personation at an election.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_171g", title:"IPC Section 171G", category:"criminal", short:"False statement in connection with an election.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_171h", title:"IPC Section 171H", category:"criminal", short:"Illegal payments in connection with an election.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_171i", title:"IPC Section 171I", category:"criminal", short:"Failure to keep election accounts.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_172", title:"IPC Section 172", category:"criminal", short:"Absconding to avoid service of summons or other proceeding.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_173", title:"IPC Section 173", category:"criminal", short:"Preventing service of summons or other proceeding, or preventing publication thereof.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_174", title:"IPC Section 174", category:"criminal", short:"Non-attendance in obedience to an order from public servant.", type:"ipc", keywords:["ipc","public servant","government"] },
  { id:"ipc_174a", title:"IPC Section 174A", category:"criminal", short:"Non-appearance in response to a proclamation under section 82 of Act 2 of 1974.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_175", title:"IPC Section 175", category:"criminal", short:"Omission to produce document to public servant by person legally bound to produce it.", type:"ipc", keywords:["ipc","public servant","government"] },
  { id:"ipc_176", title:"IPC Section 176", category:"criminal", short:"Omission to give notice or information to public servant by person legally bound to give it.", type:"ipc", keywords:["ipc","public servant","government"] },
  { id:"ipc_177", title:"IPC Section 177", category:"criminal", short:"Furnishing false information.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_178", title:"IPC Section 178", category:"criminal", short:"Refusing oath or affirmation when duly required by public servant to make it.", type:"ipc", keywords:["ipc","public servant","government"] },
  { id:"ipc_179", title:"IPC Section 179", category:"criminal", short:"Refusing to answer public servant authorized to question.", type:"ipc", keywords:["ipc","public servant","government"] },
  { id:"ipc_180", title:"IPC Section 180", category:"criminal", short:"Refusing to sign statement.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_181", title:"IPC Section 181", category:"criminal", short:"False statement on oath or affirmation to public servant or person authorized to administer an oath or affirmation.", type:"ipc", keywords:["ipc","public servant","government"] },
  { id:"ipc_182", title:"IPC Section 182", category:"criminal", short:"False information, with intent to cause public servant to use his lawful power to the injury of another person.", type:"ipc", keywords:["ipc","public servant","government"] },
  { id:"ipc_183", title:"IPC Section 183", category:"criminal", short:"Resistance to the taking of property by the lawful authority of a public servant.", type:"ipc", keywords:["ipc","public servant","government"] },
  { id:"ipc_184", title:"IPC Section 184", category:"criminal", short:"Obstructing sale of property offered for sale by authority of public servant.", type:"ipc", keywords:["ipc","public servant","government"] },
  { id:"ipc_185", title:"IPC Section 185", category:"criminal", short:"Illegal purchase or bid for property offered for sale by authority of public servant.", type:"ipc", keywords:["ipc","public servant","government"] },
  { id:"ipc_186", title:"IPC Section 186", category:"criminal", short:"Obstructing public servant in discharge of public functions.", type:"ipc", keywords:["ipc","public servant","government"] },
  { id:"ipc_187", title:"IPC Section 187", category:"criminal", short:"Omission to assist public servant when bound by law to give assistance.", type:"ipc", keywords:["ipc","public servant","government"] },
  { id:"ipc_188", title:"IPC Section 188", category:"criminal", short:"Disobedience to order duly promulgated by public servant.", type:"ipc", keywords:["ipc","public servant","government"] },
  { id:"ipc_189", title:"IPC Section 189", category:"criminal", short:"Threat of injury to public servant.", type:"ipc", keywords:["ipc","public servant","government"] },
  { id:"ipc_190", title:"IPC Section 190", category:"criminal", short:"Threat of injury to induce person to refrain from applying for protection to public servant.", type:"ipc", keywords:["ipc","public servant","government"] },
  { id:"ipc_191", title:"IPC Section 191", category:"criminal", short:"Giving false evidence.", type:"ipc", keywords:["ipc","perjury","false evidence"] },
  { id:"ipc_192", title:"IPC Section 192", category:"criminal", short:"Fabricating false evidence.", type:"ipc", keywords:["ipc","perjury","false evidence"] },
  { id:"ipc_193", title:"IPC Section 193", category:"criminal", short:"Punishment for false evidence.", type:"ipc", keywords:["ipc","perjury","false evidence"] },
  { id:"ipc_194", title:"IPC Section 194", category:"criminal", short:"Giving or fabricating false evidence with intent to procure conviction of capital offence.", type:"ipc", keywords:["ipc","perjury","false evidence"] },
  { id:"ipc_195", title:"IPC Section 195", category:"criminal", short:"Giving or fabricating false evidence with intent to procure conviction of an offence punishable with imprisonment for life or with imprisonment for 7 years or upwards.", type:"ipc", keywords:["ipc","perjury","false evidence"] },
  { id:"ipc_195a", title:"IPC Section 195A", category:"criminal", short:"Threatening any person to give false evidence.", type:"ipc", keywords:["ipc","perjury","false evidence"] },
  { id:"ipc_196", title:"IPC Section 196", category:"criminal", short:"Using evidence known to be false.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_197", title:"IPC Section 197", category:"criminal", short:"Issuing or signing false certificate.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_198", title:"IPC Section 198", category:"criminal", short:"Using as true a certificate known to be false.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_199", title:"IPC Section 199", category:"criminal", short:"False statement made in declaration which is by law receivable as evidence.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_200", title:"IPC Section 200", category:"criminal", short:"Using as true such declaration knowing it to be false.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_201", title:"IPC Section 201", category:"criminal", short:"Causing disappearance of evidence of offence, or giving false information to screen offender.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_202", title:"IPC Section 202", category:"criminal", short:"Intentional omission to give information of offence by person bound to inform.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_203", title:"IPC Section 203", category:"criminal", short:"Giving false information respecting an offence committed.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_204", title:"IPC Section 204", category:"criminal", short:"Destruction of document to prevent its production as evidence.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_205", title:"IPC Section 205", category:"criminal", short:"False personation for purpose of act or proceeding in suit or prosecution.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_206", title:"IPC Section 206", category:"criminal", short:"Fraudulent removal or concealment of property to prevent its seizure as forfeited or in execution.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_207", title:"IPC Section 207", category:"criminal", short:"Fraudulent claim to property to prevent its seizure as forfeited or in execution.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_208", title:"IPC Section 208", category:"criminal", short:"Fraudulently suffering decree for sum not due.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_209", title:"IPC Section 209", category:"criminal", short:"Dishonestly making false claim in Court.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_210", title:"IPC Section 210", category:"criminal", short:"Fraudulently obtaining decree for sum not due.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_211", title:"IPC Section 211", category:"criminal", short:"False charge of offence made with intent to injure.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_212", title:"IPC Section 212", category:"criminal", short:"Harbouring offender.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_213", title:"IPC Section 213", category:"criminal", short:"Taking gift, etc., to screen an offender from punishment.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_214", title:"IPC Section 214", category:"criminal", short:"Offering gift or restoration of property in consideration of screening offender.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_215", title:"IPC Section 215", category:"criminal", short:"Taking gift to help to recover stolen property, etc.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_216", title:"IPC Section 216", category:"criminal", short:"Harbouring offender who has escaped from custody or whose apprehension has been ordered.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_216a", title:"IPC Section 216A", category:"criminal", short:"Penalty for harbouring robbers or dacoits.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_216b", title:"IPC Section 216B", category:"criminal", short:"Definition of \"harbour\" in sections 212, 216 and 216A.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_217", title:"IPC Section 217", category:"criminal", short:"Public servant disobeying direction of law with intent to save person from punishment or property from forfeiture.", type:"ipc", keywords:["ipc","public servant","government"] },
  { id:"ipc_218", title:"IPC Section 218", category:"criminal", short:"Public servant framing incorrect record or writing with intent to save person from punishment or property from forfeiture.", type:"ipc", keywords:["ipc","public servant","government"] },
  { id:"ipc_219", title:"IPC Section 219", category:"criminal", short:"Public servant in judicial proceeding corruptly making report, etc., contrary to law.", type:"ipc", keywords:["ipc","public servant","government"] },
  { id:"ipc_220", title:"IPC Section 220", category:"criminal", short:"Commitment for trial or confinement by person having authority who knows that he is acting contrary to law.", type:"ipc", keywords:["ipc","wrongful confinement","detention"] },
  { id:"ipc_221", title:"IPC Section 221", category:"criminal", short:"Intentional omission to apprehend on the part of public servant bound to apprehend.", type:"ipc", keywords:["ipc","public servant","government"] },
  { id:"ipc_222", title:"IPC Section 222", category:"criminal", short:"Intentional omission to apprehend on the part of public servant bound to apprehend person under sentence or lawfully committed.", type:"ipc", keywords:["ipc","public servant","government"] },
  { id:"ipc_223", title:"IPC Section 223", category:"criminal", short:"Escape from confinement or custody negligently suffered by public servant.", type:"ipc", keywords:["ipc","wrongful confinement","detention","public servant","government"] },
  { id:"ipc_224", title:"IPC Section 224", category:"criminal", short:"Resistance or obstruction by a person to his lawful apprehension.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_225", title:"IPC Section 225", category:"criminal", short:"Resistance or obstruction to lawful apprehension of another person.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_225a", title:"IPC Section 225A", category:"criminal", short:"Omission to apprehend, or sufferance of escape, on part of public servant, in cases not otherwise provided for.", type:"ipc", keywords:["ipc","public servant","government"] },
  { id:"ipc_225b", title:"IPC Section 225B", category:"criminal", short:"Resistance or obstruction to lawful apprehension, or escape or rescue in cases not otherwise provided for.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_226", title:"IPC Section 226", category:"criminal", short:"Unlawful return from transportation.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_227", title:"IPC Section 227", category:"criminal", short:"Violation of condition of remission of punishment.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_228", title:"IPC Section 228", category:"criminal", short:"Intentional insult or interruption to public servant sitting in judicial proceeding.", type:"ipc", keywords:["ipc","public servant","government"] },
  { id:"ipc_228a", title:"IPC Section 228A", category:"criminal", short:"Disclosure of identity of the victim of certain offences, etc.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_229", title:"IPC Section 229", category:"criminal", short:"Personation of a juror or assessor.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_229a", title:"IPC Section 229A", category:"criminal", short:"Failure by person released on bail or bond to appear in Court.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_230", title:"IPC Section 230", category:"criminal", short:"\"Coin\" defined.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_231", title:"IPC Section 231", category:"criminal", short:"Counterfeiting coin.", type:"ipc", keywords:["ipc","counterfeit","currency"] },
  { id:"ipc_232", title:"IPC Section 232", category:"criminal", short:"Counterfeiting Indian coin.", type:"ipc", keywords:["ipc","counterfeit","currency"] },
  { id:"ipc_233", title:"IPC Section 233", category:"criminal", short:"Making or selling instrument for counterfeiting coin.", type:"ipc", keywords:["ipc","counterfeit","currency"] },
  { id:"ipc_234", title:"IPC Section 234", category:"criminal", short:"Making or selling instrument for counterfeiting Indian coin.", type:"ipc", keywords:["ipc","counterfeit","currency"] },
  { id:"ipc_235", title:"IPC Section 235", category:"criminal", short:"Possession of instrument or material for the purpose of using the same for counterfeiting coin.", type:"ipc", keywords:["ipc","counterfeit","currency"] },
  { id:"ipc_236", title:"IPC Section 236", category:"criminal", short:"Abetting in India the counterfeiting out of India of coin.", type:"ipc", keywords:["ipc","counterfeit","currency"] },
  { id:"ipc_237", title:"IPC Section 237", category:"criminal", short:"Import or export of counterfeit coin.", type:"ipc", keywords:["ipc","counterfeit","currency"] },
  { id:"ipc_238", title:"IPC Section 238", category:"criminal", short:"Import or export of counterfeits of the Indian coin.", type:"ipc", keywords:["ipc","counterfeit","currency"] },
  { id:"ipc_239", title:"IPC Section 239", category:"criminal", short:"Delivery of coin possessed with knowledge that it is counterfeit.", type:"ipc", keywords:["ipc","counterfeit","currency"] },
  { id:"ipc_240", title:"IPC Section 240", category:"criminal", short:"Delivery of Indian coin, possessed with knowledge that it is counterfeit.", type:"ipc", keywords:["ipc","counterfeit","currency"] },
  { id:"ipc_241", title:"IPC Section 241", category:"criminal", short:"Delivery of coin as genuine, which, when first possessed, the deliverer did not know to be counterfeit.", type:"ipc", keywords:["ipc","counterfeit","currency"] },
  { id:"ipc_242", title:"IPC Section 242", category:"criminal", short:"Possession of counterfeit coin by person who knew it to be counterfeit when he became possessed thereof.", type:"ipc", keywords:["ipc","counterfeit","currency"] },
  { id:"ipc_243", title:"IPC Section 243", category:"criminal", short:"Possession of Indian coin by person who knew it to be counterfeit when he became possessed thereof.", type:"ipc", keywords:["ipc","counterfeit","currency"] },
  { id:"ipc_244", title:"IPC Section 244", category:"criminal", short:"Person employed in mint causing coin to be of different weight or composition from that fixed by law.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_245", title:"IPC Section 245", category:"criminal", short:"Unlawfully taking coining instrument from mint.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_246", title:"IPC Section 246", category:"criminal", short:"Fraudulently or dishonestly diminishing weight or altering composition of coin.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_247", title:"IPC Section 247", category:"criminal", short:"Fraudulently or dishonestly diminishing weight or altering composition of Indian coin.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_248", title:"IPC Section 248", category:"criminal", short:"Altering appearance of coin with intent that it shall pass as coin of different description.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_249", title:"IPC Section 249", category:"criminal", short:"Altering appearance of Indian coin with intent that it shall pass as coin of different description.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_250", title:"IPC Section 250", category:"criminal", short:"Delivery of coin possessed with knowledge that it is altered.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_251", title:"IPC Section 251", category:"criminal", short:"Delivery of Indian coin, possessed with knowledge that it is altered.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_252", title:"IPC Section 252", category:"criminal", short:"Possession of coin by person who knew it to be altered when he became possessed thereof.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_253", title:"IPC Section 253", category:"criminal", short:"Possession of Indian coin by person who knew it to be altered when he became possessed thereof.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_254", title:"IPC Section 254", category:"criminal", short:"Delivery of coin as genuine which, when first possessed, the deliverer did not know to be altered.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_255", title:"IPC Section 255", category:"criminal", short:"Counterfeiting Government stamp.", type:"ipc", keywords:["ipc","counterfeit","currency"] },
  { id:"ipc_256", title:"IPC Section 256", category:"criminal", short:"Having possession of instrument or material for counterfeiting Government stamp.", type:"ipc", keywords:["ipc","counterfeit","currency"] },
  { id:"ipc_257", title:"IPC Section 257", category:"criminal", short:"Making or selling instrument for counterfeiting Government stamp.", type:"ipc", keywords:["ipc","counterfeit","currency"] },
  { id:"ipc_258", title:"IPC Section 258", category:"criminal", short:"Sale of counterfeit Government stamp.", type:"ipc", keywords:["ipc","counterfeit","currency"] },
  { id:"ipc_259", title:"IPC Section 259", category:"criminal", short:"Having possession of counterfeit Government stamp.", type:"ipc", keywords:["ipc","counterfeit","currency"] },
  { id:"ipc_260", title:"IPC Section 260", category:"criminal", short:"Using as genuine a Government stamp known to be counterfeit.", type:"ipc", keywords:["ipc","counterfeit","currency"] },
  { id:"ipc_261", title:"IPC Section 261", category:"criminal", short:"Effacing writing from substance bearing Government stamp, or removing from document a stamp used for it, with intent to cause loss to Government.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_262", title:"IPC Section 262", category:"criminal", short:"Using Government stamp known to have been before used.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_263", title:"IPC Section 263", category:"criminal", short:"Erasure of mark denoting that stamp has been used.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_263a", title:"IPC Section 263A", category:"criminal", short:"Prohibition of fictitious stamps.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_264", title:"IPC Section 264", category:"criminal", short:"Fraudulent use of false instrument for weighing.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_265", title:"IPC Section 265", category:"criminal", short:"Fraudulent use of false weight or measure.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_266", title:"IPC Section 266", category:"criminal", short:"Being in possession of false weight or measure.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_267", title:"IPC Section 267", category:"criminal", short:"Making or selling false weight or measure.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_268", title:"IPC Section 268", category:"criminal", short:"Public nuisance.", type:"ipc", keywords:["ipc","nuisance","public safety"] },
  { id:"ipc_269", title:"IPC Section 269", category:"criminal", short:"Negligent act likely to spread infection of disease dangerous to life.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_270", title:"IPC Section 270", category:"criminal", short:"Malignant act likely to spread infection of disease dangerous to life.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_271", title:"IPC Section 271", category:"criminal", short:"Disobedience to quarantine rule.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_272", title:"IPC Section 272", category:"criminal", short:"Adulteration of food or drink intended for sale.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_273", title:"IPC Section 273", category:"criminal", short:"Sale of noxious food or drink.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_274", title:"IPC Section 274", category:"criminal", short:"Adulteration of drugs.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_275", title:"IPC Section 275", category:"criminal", short:"Sale of adulterated drugs.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_276", title:"IPC Section 276", category:"criminal", short:"Sale of drug as a different drug or preparation.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_277", title:"IPC Section 277", category:"criminal", short:"Fouling water of public spring or reservoir.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_278", title:"IPC Section 278", category:"criminal", short:"Making atmosphere noxious to health.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_279", title:"IPC Section 279", category:"criminal", short:"Rash driving or riding on a public way.", type:"ipc", keywords:["ipc","rash driving","road"] },
  { id:"ipc_280", title:"IPC Section 280", category:"criminal", short:"Rash navigation of vessel.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_281", title:"IPC Section 281", category:"criminal", short:"Exhibition of false light, mark or buoy.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_282", title:"IPC Section 282", category:"criminal", short:"Conveying person by water for hire in unsafe or overloaded vessel.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_283", title:"IPC Section 283", category:"criminal", short:"Danger or obstruction in public way or line of navigation.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_284", title:"IPC Section 284", category:"criminal", short:"Negligent conduct with respect to poisonous substance.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_285", title:"IPC Section 285", category:"criminal", short:"Negligent conduct with respect to fire or combustible matter.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_286", title:"IPC Section 286", category:"criminal", short:"Negligent conduct with respect to explosive substance.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_287", title:"IPC Section 287", category:"criminal", short:"Negligent conduct with respect to machinery.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_288", title:"IPC Section 288", category:"criminal", short:"Negligent conduct with respect to pulling down or repairing buildings.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_289", title:"IPC Section 289", category:"criminal", short:"Negligent conduct with respect to animal.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_290", title:"IPC Section 290", category:"criminal", short:"Punishment for public nuisance in cases not otherwise provided for.", type:"ipc", keywords:["ipc","nuisance","public safety"] },
  { id:"ipc_291", title:"IPC Section 291", category:"criminal", short:"Continuance of nuisance after injunction to discontinue.", type:"ipc", keywords:["ipc","nuisance","public safety"] },
  { id:"ipc_292", title:"IPC Section 292", category:"criminal", short:"Sale, etc., of obscene books, etc.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_293", title:"IPC Section 293", category:"criminal", short:"Sale, etc., of obscene objects to young person.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_294", title:"IPC Section 294", category:"criminal", short:"Obscene acts and songs.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_294a", title:"IPC Section 294A", category:"criminal", short:"Keeping lottery office.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_295", title:"IPC Section 295", category:"criminal", short:"Injuring or defiling place of worship, with intent to insult the religion of any class.", type:"ipc", keywords:["ipc","religion","worship"] },
  { id:"ipc_295a", title:"IPC Section 295A", category:"criminal", short:"Deliberate and malicious acts intended to outrage religious feelings of any class by insulting its religion or religious beliefs.", type:"ipc", keywords:["ipc","religion","worship"] },
  { id:"ipc_296", title:"IPC Section 296", category:"criminal", short:"Disturbing religious assembly.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_297", title:"IPC Section 297", category:"criminal", short:"Trespassing on burial places, etc.", type:"ipc", keywords:["ipc","trespass","entry"] },
  { id:"ipc_298", title:"IPC Section 298", category:"criminal", short:"Uttering words, etc., with deliberate intent to wound religious feelings.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_299", title:"IPC Section 299", category:"criminal", short:"Culpable homicide.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_300", title:"IPC Section 300", category:"criminal", short:"Murder.", type:"ipc", keywords:["ipc","murder","homicide","killing","death penalty"] },
  { id:"ipc_301", title:"IPC Section 301", category:"criminal", short:"Culpable homicide by causing death of person other than person whose death was intended.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_302", title:"IPC Section 302", category:"criminal", short:"Punishment for murder.", type:"ipc", keywords:["ipc","murder","homicide","killing","death penalty"] },
  { id:"ipc_303", title:"IPC Section 303", category:"criminal", short:"Punishment for murder by life-convict.", type:"ipc", keywords:["ipc","murder","homicide","killing","death penalty"] },
  { id:"ipc_304", title:"IPC Section 304", category:"criminal", short:"Punishment for culpable homicide not amounting to murder.", type:"ipc", keywords:["ipc","murder","homicide","killing","death penalty"] },
  { id:"ipc_304a", title:"IPC Section 304A", category:"criminal", short:"Causing death by negligence.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_304b", title:"IPC Section 304B", category:"family", short:"Dowry death.", type:"ipc", keywords:["ipc","dowry","cruelty","marriage"] },
  { id:"ipc_305", title:"IPC Section 305", category:"criminal", short:"Abetment of suicide of child or insane person.", type:"ipc", keywords:["ipc","abetment","instigation","suicide"] },
  { id:"ipc_306", title:"IPC Section 306", category:"criminal", short:"Abetment of suicide.", type:"ipc", keywords:["ipc","abetment","instigation","suicide"] },
  { id:"ipc_307", title:"IPC Section 307", category:"criminal", short:"Attempt to murder.", type:"ipc", keywords:["ipc","murder","homicide","killing","death penalty"] },
  { id:"ipc_308", title:"IPC Section 308", category:"criminal", short:"Attempt to commit culpable homicide.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_309", title:"IPC Section 309", category:"criminal", short:"Attempt to commit suicide.", type:"ipc", keywords:["ipc","suicide"] },
  { id:"ipc_310", title:"IPC Section 310", category:"criminal", short:"Thug.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_311", title:"IPC Section 311", category:"criminal", short:"Punishment.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_312", title:"IPC Section 312", category:"criminal", short:"Causing miscarriage.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_313", title:"IPC Section 313", category:"criminal", short:"Causing miscarriage without woman's consent.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_314", title:"IPC Section 314", category:"criminal", short:"Death caused by act done with intent to cause miscarriage.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_315", title:"IPC Section 315", category:"criminal", short:"Act done with intent to prevent child being born alive or to cause it to die after birth.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_316", title:"IPC Section 316", category:"criminal", short:"Causing death of quick unborn child by act amounting to culpable homicide.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_317", title:"IPC Section 317", category:"criminal", short:"Exposure and abandonment of child under twelve years, by parent or person having care of it.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_318", title:"IPC Section 318", category:"criminal", short:"Concealment of birth by secret disposal of dead body.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_319", title:"IPC Section 319", category:"criminal", short:"Hurt.", type:"ipc", keywords:["ipc","hurt","injury"] },
  { id:"ipc_320", title:"IPC Section 320", category:"criminal", short:"Grievous hurt.", type:"ipc", keywords:["ipc","hurt","injury","grievous hurt","serious injury"] },
  { id:"ipc_321", title:"IPC Section 321", category:"criminal", short:"Voluntarily causing hurt.", type:"ipc", keywords:["ipc","hurt","injury"] },
  { id:"ipc_322", title:"IPC Section 322", category:"criminal", short:"Voluntarily causing grievous hurt.", type:"ipc", keywords:["ipc","hurt","injury","grievous hurt","serious injury"] },
  { id:"ipc_323", title:"IPC Section 323", category:"criminal", short:"Punishment for voluntarily causing hurt.", type:"ipc", keywords:["ipc","hurt","injury"] },
  { id:"ipc_324", title:"IPC Section 324", category:"criminal", short:"Voluntarily causing hurt by dangerous weapons or means.", type:"ipc", keywords:["ipc","hurt","injury"] },
  { id:"ipc_325", title:"IPC Section 325", category:"criminal", short:"Punishment for voluntarily causing grievous hurt.", type:"ipc", keywords:["ipc","hurt","injury","grievous hurt","serious injury"] },
  { id:"ipc_326", title:"IPC Section 326", category:"criminal", short:"Voluntarily causing grievous hurt by dangerous weapons or means.", type:"ipc", keywords:["ipc","hurt","injury","grievous hurt","serious injury"] },
  { id:"ipc_326a", title:"IPC Section 326A", category:"criminal", short:"Voluntarily causing grievous hurt by use of acid, etc.", type:"ipc", keywords:["ipc","acid attack","grievous hurt","hurt","injury"] },
  { id:"ipc_326b", title:"IPC Section 326B", category:"criminal", short:"Voluntarily throwing or attempting to throw acid.", type:"ipc", keywords:["ipc","acid attack","grievous hurt"] },
  { id:"ipc_327", title:"IPC Section 327", category:"criminal", short:"Voluntarily causing hurt to extort property, or to constrain to an illegal act.", type:"ipc", keywords:["ipc","hurt","injury"] },
  { id:"ipc_328", title:"IPC Section 328", category:"criminal", short:"Causing hurt by means of poison, etc., with intent to commit an offence.", type:"ipc", keywords:["ipc","hurt","injury"] },
  { id:"ipc_329", title:"IPC Section 329", category:"criminal", short:"Voluntarily causing grievous hurt to extort property, or to constrain to an illegal act.", type:"ipc", keywords:["ipc","hurt","injury","grievous hurt","serious injury"] },
  { id:"ipc_330", title:"IPC Section 330", category:"criminal", short:"Voluntarily causing hurt to extort confession, or to compel restoration of property.", type:"ipc", keywords:["ipc","hurt","injury"] },
  { id:"ipc_331", title:"IPC Section 331", category:"criminal", short:"Voluntarily causing grievous hurt to extort confession, or to compel restoration of property.", type:"ipc", keywords:["ipc","hurt","injury","grievous hurt","serious injury"] },
  { id:"ipc_332", title:"IPC Section 332", category:"criminal", short:"Voluntarily causing hurt to deter public servant from his duty.", type:"ipc", keywords:["ipc","hurt","injury","public servant","government"] },
  { id:"ipc_333", title:"IPC Section 333", category:"criminal", short:"Voluntarily causing grievous hurt to deter public servant from his duty.", type:"ipc", keywords:["ipc","hurt","injury","grievous hurt","serious injury"] },
  { id:"ipc_334", title:"IPC Section 334", category:"criminal", short:"Voluntarily causing hurt on provocation.", type:"ipc", keywords:["ipc","hurt","injury"] },
  { id:"ipc_335", title:"IPC Section 335", category:"criminal", short:"Voluntarily causing grievous hurt on provocation.", type:"ipc", keywords:["ipc","hurt","injury","grievous hurt","serious injury"] },
  { id:"ipc_336", title:"IPC Section 336", category:"criminal", short:"Act endangering life or personal safety of others.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_337", title:"IPC Section 337", category:"criminal", short:"Causing hurt by act endangering life or personal safety of others.", type:"ipc", keywords:["ipc","hurt","injury"] },
  { id:"ipc_338", title:"IPC Section 338", category:"criminal", short:"Causing grievous hurt by act endangering life or personal safety of others.", type:"ipc", keywords:["ipc","hurt","injury","grievous hurt","serious injury"] },
  { id:"ipc_339", title:"IPC Section 339", category:"criminal", short:"Wrongful restraint.", type:"ipc", keywords:["ipc","wrongful restraint","obstruct"] },
  { id:"ipc_340", title:"IPC Section 340", category:"criminal", short:"Wrongful confinement.", type:"ipc", keywords:["ipc","wrongful confinement","detention"] },
  { id:"ipc_341", title:"IPC Section 341", category:"criminal", short:"Punishment for wrongful restraint.", type:"ipc", keywords:["ipc","wrongful restraint","obstruct"] },
  { id:"ipc_342", title:"IPC Section 342", category:"criminal", short:"Punishment for wrongful confinement.", type:"ipc", keywords:["ipc","wrongful confinement","detention"] },
  { id:"ipc_343", title:"IPC Section 343", category:"criminal", short:"Wrongful confinement for three or more days.", type:"ipc", keywords:["ipc","wrongful confinement","detention"] },
  { id:"ipc_344", title:"IPC Section 344", category:"criminal", short:"Wrongful confinement for ten or more days.", type:"ipc", keywords:["ipc","wrongful confinement","detention"] },
  { id:"ipc_345", title:"IPC Section 345", category:"criminal", short:"Wrongful confinement of person for whose liberation writ has been issued.", type:"ipc", keywords:["ipc","wrongful confinement","detention"] },
  { id:"ipc_346", title:"IPC Section 346", category:"criminal", short:"Wrongful confinement in secret.", type:"ipc", keywords:["ipc","wrongful confinement","detention"] },
  { id:"ipc_347", title:"IPC Section 347", category:"criminal", short:"Wrongful confinement to extort property, or constrain to illegal act.", type:"ipc", keywords:["ipc","wrongful confinement","detention"] },
  { id:"ipc_348", title:"IPC Section 348", category:"criminal", short:"Wrongful confinement to extort confession, or compel restoration of property.", type:"ipc", keywords:["ipc","wrongful confinement","detention"] },
  { id:"ipc_349", title:"IPC Section 349", category:"criminal", short:"Force.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_350", title:"IPC Section 350", category:"criminal", short:"Criminal force.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_351", title:"IPC Section 351", category:"criminal", short:"Assault.", type:"ipc", keywords:["ipc","assault","hurt"] },
  { id:"ipc_352", title:"IPC Section 352", category:"criminal", short:"Punishment for assault or criminal force otherwise than on grave provocation.", type:"ipc", keywords:["ipc","assault","hurt"] },
  { id:"ipc_353", title:"IPC Section 353", category:"criminal", short:"Assault or criminal force to deter public servant from discharge of his duty.", type:"ipc", keywords:["ipc","assault","hurt","public servant","government"] },
  { id:"ipc_354", title:"IPC Section 354", category:"criminal", short:"Assault or criminal force to woman with intent to outrage her modesty.", type:"ipc", keywords:["ipc","assault","hurt"] },
  { id:"ipc_354a", title:"IPC Section 354A", category:"criminal", short:"Sexual harassment and punishment for sexual harassment.", type:"ipc", keywords:["ipc","sexual harassment","women","workplace"] },
  { id:"ipc_354b", title:"IPC Section 354B", category:"criminal", short:"Assault or use of criminal force to woman with intent to disrobe.", type:"ipc", keywords:["ipc","assault","hurt"] },
  { id:"ipc_354c", title:"IPC Section 354C", category:"criminal", short:"Voyeurism.", type:"ipc", keywords:["ipc","voyeurism","privacy"] },
  { id:"ipc_354d", title:"IPC Section 354D", category:"criminal", short:"Stalking.", type:"ipc", keywords:["ipc","stalking","harassment"] },
  { id:"ipc_355", title:"IPC Section 355", category:"criminal", short:"Assault or criminal force with intent to dishonour person, otherwise than on grave provocation.", type:"ipc", keywords:["ipc","assault","hurt"] },
  { id:"ipc_356", title:"IPC Section 356", category:"criminal", short:"Assault or criminal force in attempt to commit theft of property carried by a person.", type:"ipc", keywords:["ipc","theft","stolen","property","assault"] },
  { id:"ipc_357", title:"IPC Section 357", category:"criminal", short:"Assault or criminal force in attempt wrongfully to confine a person.", type:"ipc", keywords:["ipc","assault","hurt"] },
  { id:"ipc_358", title:"IPC Section 358", category:"criminal", short:"Assault or criminal force on grave provocation.", type:"ipc", keywords:["ipc","assault","hurt"] },
  { id:"ipc_359", title:"IPC Section 359", category:"criminal", short:"Kidnapping.", type:"ipc", keywords:["ipc","kidnapping","abduction"] },
  { id:"ipc_360", title:"IPC Section 360", category:"criminal", short:"Kidnapping from India.", type:"ipc", keywords:["ipc","kidnapping","abduction"] },
  { id:"ipc_361", title:"IPC Section 361", category:"criminal", short:"Kidnapping from lawful guardianship.", type:"ipc", keywords:["ipc","kidnapping","abduction"] },
  { id:"ipc_362", title:"IPC Section 362", category:"criminal", short:"Abduction.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_363", title:"IPC Section 363", category:"criminal", short:"Punishment for kidnapping.", type:"ipc", keywords:["ipc","kidnapping","abduction"] },
  { id:"ipc_363a", title:"IPC Section 363A", category:"criminal", short:"Kidnapping or maiming a minor for purposes of begging.", type:"ipc", keywords:["ipc","kidnapping","abduction"] },
  { id:"ipc_364", title:"IPC Section 364", category:"criminal", short:"Kidnapping or abducting in order to murder.", type:"ipc", keywords:["ipc","murder","homicide","killing","death penalty"] },
  { id:"ipc_364a", title:"IPC Section 364A", category:"criminal", short:"Kidnapping for ransom, etc.", type:"ipc", keywords:["ipc","kidnapping","abduction"] },
  { id:"ipc_365", title:"IPC Section 365", category:"criminal", short:"Kidnapping or abducting with intent secretly and wrongfully to confine person.", type:"ipc", keywords:["ipc","kidnapping","abduction"] },
  { id:"ipc_366", title:"IPC Section 366", category:"family", short:"Kidnapping, abducting or inducing woman to compel her marriage, etc.", type:"ipc", keywords:["ipc","kidnapping","abduction"] },
  { id:"ipc_366a", title:"IPC Section 366A", category:"criminal", short:"Procuration of minor girl.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_366b", title:"IPC Section 366B", category:"criminal", short:"Importation of girl from foreign country.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_367", title:"IPC Section 367", category:"criminal", short:"Kidnapping or abducting in order to subject person to grievous hurt, slavery, etc.", type:"ipc", keywords:["ipc","kidnapping","abduction","hurt","injury"] },
  { id:"ipc_368", title:"IPC Section 368", category:"criminal", short:"Wrongfully concealing or keeping in confinement, kidnapped or abducted person.", type:"ipc", keywords:["ipc","wrongful confinement","detention"] },
  { id:"ipc_369", title:"IPC Section 369", category:"criminal", short:"Kidnapping or abducting child under ten years with intent to steal from its person.", type:"ipc", keywords:["ipc","kidnapping","abduction"] },
  { id:"ipc_370", title:"IPC Section 370", category:"criminal", short:"Trafficking of person.", type:"ipc", keywords:["ipc","trafficking","exploitation"] },
  { id:"ipc_370a", title:"IPC Section 370A", category:"criminal", short:"Exploitation of a trafficked person.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_371", title:"IPC Section 371", category:"criminal", short:"Habitual dealing in slaves.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_372", title:"IPC Section 372", category:"criminal", short:"Selling minor for purposes of prostitution, etc.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_373", title:"IPC Section 373", category:"criminal", short:"Buying minor for purposes of prostitution, etc.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_374", title:"IPC Section 374", category:"criminal", short:"Unlawful compulsory labour.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_375", title:"IPC Section 375", category:"criminal", short:"Rape.", type:"ipc", keywords:["ipc","rape","sexual assault","consent"] },
  { id:"ipc_376", title:"IPC Section 376", category:"criminal", short:"Punishment for rape.", type:"ipc", keywords:["ipc","rape","sexual assault","consent"] },
  { id:"ipc_376a", title:"IPC Section 376A", category:"criminal", short:"Punishment for causing death or resulting in persistent vegetative state of victim.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_376ab", title:"IPC Section 376AB", category:"criminal", short:"Punishment for rape on woman under twelve years of age.", type:"ipc", keywords:["ipc","rape","sexual assault","consent"] },
  { id:"ipc_376b", title:"IPC Section 376B", category:"family", short:"Sexual intercourse by husband upon his wife during separation.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_376c", title:"IPC Section 376C", category:"criminal", short:"Sexual intercourse by a person in authority.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_376d", title:"IPC Section 376D", category:"criminal", short:"Gang rape.", type:"ipc", keywords:["ipc","rape","sexual assault","consent"] },
  { id:"ipc_376da", title:"IPC Section 376DA", category:"criminal", short:"Punishment for gang rape on woman under sixteen years of age.", type:"ipc", keywords:["ipc","rape","sexual assault","consent"] },
  { id:"ipc_376db", title:"IPC Section 376DB", category:"criminal", short:"Punishment for gang rape on woman under twelve years of age.", type:"ipc", keywords:["ipc","rape","sexual assault","consent"] },
  { id:"ipc_376e", title:"IPC Section 376E", category:"criminal", short:"Punishment for repeat offenders.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_377", title:"IPC Section 377", category:"criminal", short:"Unnatural offences.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_378", title:"IPC Section 378", category:"criminal", short:"Theft.", type:"ipc", keywords:["ipc","theft","stolen","property"] },
  { id:"ipc_379", title:"IPC Section 379", category:"criminal", short:"Punishment for theft.", type:"ipc", keywords:["ipc","theft","stolen","property"] },
  { id:"ipc_380", title:"IPC Section 380", category:"criminal", short:"Theft in dwelling house, etc.", type:"ipc", keywords:["ipc","theft","stolen","property"] },
  { id:"ipc_381", title:"IPC Section 381", category:"criminal", short:"Theft by clerk or servant of property in possession of master.", type:"ipc", keywords:["ipc","theft","stolen","property"] },
  { id:"ipc_382", title:"IPC Section 382", category:"criminal", short:"Theft after preparation made for causing death, hurt or restraint in order to the committing of the theft.", type:"ipc", keywords:["ipc","theft","stolen","property","hurt"] },
  { id:"ipc_383", title:"IPC Section 383", category:"criminal", short:"Extortion.", type:"ipc", keywords:["ipc","extortion","blackmail"] },
  { id:"ipc_384", title:"IPC Section 384", category:"criminal", short:"Punishment for extortion.", type:"ipc", keywords:["ipc","extortion","blackmail"] },
  { id:"ipc_385", title:"IPC Section 385", category:"criminal", short:"Putting person in fear of injury in order to commit extortion.", type:"ipc", keywords:["ipc","extortion","blackmail"] },
  { id:"ipc_386", title:"IPC Section 386", category:"criminal", short:"Extortion by putting a person in fear of death or grievous hurt.", type:"ipc", keywords:["ipc","extortion","blackmail","hurt","injury"] },
  { id:"ipc_387", title:"IPC Section 387", category:"criminal", short:"Putting person in fear of death or of grievous hurt, in order to commit extortion.", type:"ipc", keywords:["ipc","extortion","blackmail","hurt","injury"] },
  { id:"ipc_388", title:"IPC Section 388", category:"criminal", short:"Extortion by threat of accusation of an offence punishable with death or imprisonment for life, etc.", type:"ipc", keywords:["ipc","extortion","blackmail"] },
  { id:"ipc_389", title:"IPC Section 389", category:"criminal", short:"Putting person in fear of accusation of offence, in order to commit extortion.", type:"ipc", keywords:["ipc","extortion","blackmail"] },
  { id:"ipc_390", title:"IPC Section 390", category:"criminal", short:"Robbery.", type:"ipc", keywords:["ipc","robbery","snatching","force"] },
  { id:"ipc_391", title:"IPC Section 391", category:"criminal", short:"Dacoity.", type:"ipc", keywords:["ipc","dacoity","gang","robbery"] },
  { id:"ipc_392", title:"IPC Section 392", category:"criminal", short:"Punishment for robbery.", type:"ipc", keywords:["ipc","robbery","snatching","force"] },
  { id:"ipc_393", title:"IPC Section 393", category:"criminal", short:"Attempt to commit robbery.", type:"ipc", keywords:["ipc","robbery","snatching","force"] },
  { id:"ipc_394", title:"IPC Section 394", category:"criminal", short:"Voluntarily causing hurt in committing robbery.", type:"ipc", keywords:["ipc","robbery","snatching","force","hurt"] },
  { id:"ipc_395", title:"IPC Section 395", category:"criminal", short:"Punishment for dacoity.", type:"ipc", keywords:["ipc","dacoity","gang","robbery"] },
  { id:"ipc_396", title:"IPC Section 396", category:"criminal", short:"Dacoity with murder.", type:"ipc", keywords:["ipc","murder","homicide","killing","death penalty"] },
  { id:"ipc_397", title:"IPC Section 397", category:"criminal", short:"Robbery, or dacoity, with attempt to cause death or grievous hurt.", type:"ipc", keywords:["ipc","robbery","snatching","force","dacoity"] },
  { id:"ipc_398", title:"IPC Section 398", category:"criminal", short:"Attempt to commit robbery or dacoity when armed with deadly weapon.", type:"ipc", keywords:["ipc","robbery","snatching","force","dacoity"] },
  { id:"ipc_399", title:"IPC Section 399", category:"criminal", short:"Making preparation to commit dacoity.", type:"ipc", keywords:["ipc","dacoity","gang","robbery"] },
  { id:"ipc_400", title:"IPC Section 400", category:"criminal", short:"Punishment for belonging to gang of dacoits.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_401", title:"IPC Section 401", category:"criminal", short:"Punishment for belonging to gang of thieves.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_402", title:"IPC Section 402", category:"criminal", short:"Assembling for purpose of committing dacoity.", type:"ipc", keywords:["ipc","dacoity","gang","robbery"] },
  { id:"ipc_403", title:"IPC Section 403", category:"criminal", short:"Dishonest misappropriation of property.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_404", title:"IPC Section 404", category:"criminal", short:"Dishonest misappropriation of property possessed by deceased person at the time of his death.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_405", title:"IPC Section 405", category:"criminal", short:"Criminal breach of trust.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_406", title:"IPC Section 406", category:"criminal", short:"Punishment for criminal breach of trust.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_407", title:"IPC Section 407", category:"criminal", short:"Criminal breach of trust by carrier, etc.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_408", title:"IPC Section 408", category:"criminal", short:"Criminal breach of trust by clerk or servant.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_409", title:"IPC Section 409", category:"criminal", short:"Criminal breach of trust by public servant, or by banker, merchant or agent.", type:"ipc", keywords:["ipc","public servant","government"] },
  { id:"ipc_410", title:"IPC Section 410", category:"criminal", short:"Stolen property.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_411", title:"IPC Section 411", category:"criminal", short:"Dishonestly receiving stolen property.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_412", title:"IPC Section 412", category:"criminal", short:"Dishonestly receiving property stolen in the commission of a dacoity.", type:"ipc", keywords:["ipc","dacoity","gang","robbery"] },
  { id:"ipc_413", title:"IPC Section 413", category:"criminal", short:"Habitually dealing in stolen property.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_414", title:"IPC Section 414", category:"criminal", short:"Assisting in concealment of stolen property.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_415", title:"IPC Section 415", category:"criminal", short:"Cheating.", type:"ipc", keywords:["ipc","cheating","fraud","deception"] },
  { id:"ipc_416", title:"IPC Section 416", category:"criminal", short:"Cheating by personation.", type:"ipc", keywords:["ipc","cheating","fraud","deception"] },
  { id:"ipc_417", title:"IPC Section 417", category:"criminal", short:"Punishment for cheating.", type:"ipc", keywords:["ipc","cheating","fraud","deception"] },
  { id:"ipc_418", title:"IPC Section 418", category:"criminal", short:"Cheating with knowledge that wrongful loss may ensue to person whose interest offender is bound to protect.", type:"ipc", keywords:["ipc","cheating","fraud","deception"] },
  { id:"ipc_419", title:"IPC Section 419", category:"criminal", short:"Punishment for cheating by personation.", type:"ipc", keywords:["ipc","cheating","fraud","deception"] },
  { id:"ipc_420", title:"IPC Section 420", category:"criminal", short:"Cheating and dishonestly inducing delivery of property.", type:"ipc", keywords:["ipc","cheating","fraud","deception"] },
  { id:"ipc_421", title:"IPC Section 421", category:"criminal", short:"Dishonest or fraudulent removal or concealment of property to prevent distribution among creditors.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_422", title:"IPC Section 422", category:"criminal", short:"Dishonestly or fraudulently preventing debt being available for creditors.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_423", title:"IPC Section 423", category:"criminal", short:"Dishonest or fraudulent execution of deed of transfer containing false statement of consideration.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_424", title:"IPC Section 424", category:"criminal", short:"Dishonest or fraudulent removal or concealment of property.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_425", title:"IPC Section 425", category:"criminal", short:"Mischief.", type:"ipc", keywords:["ipc","mischief","property damage"] },
  { id:"ipc_426", title:"IPC Section 426", category:"criminal", short:"Punishment for mischief.", type:"ipc", keywords:["ipc","mischief","property damage"] },
  { id:"ipc_427", title:"IPC Section 427", category:"criminal", short:"Mischief causing damage to the amount of fifty rupees.", type:"ipc", keywords:["ipc","mischief","property damage"] },
  { id:"ipc_428", title:"IPC Section 428", category:"criminal", short:"Mischief by killing or maiming animal of the value of ten rupees.", type:"ipc", keywords:["ipc","mischief","property damage"] },
  { id:"ipc_429", title:"IPC Section 429", category:"criminal", short:"Mischief by killing or maiming cattle, etc., of any value or any animal of the value of fifty rupees.", type:"ipc", keywords:["ipc","mischief","property damage"] },
  { id:"ipc_430", title:"IPC Section 430", category:"criminal", short:"Mischief by injury to works of irrigation or by wrongfully diverting water.", type:"ipc", keywords:["ipc","mischief","property damage"] },
  { id:"ipc_431", title:"IPC Section 431", category:"criminal", short:"Mischief by injury to public road, bridge, river or channel.", type:"ipc", keywords:["ipc","mischief","property damage"] },
  { id:"ipc_432", title:"IPC Section 432", category:"criminal", short:"Mischief by causing inundation or obstruction to public drainage attended with damage.", type:"ipc", keywords:["ipc","mischief","property damage"] },
  { id:"ipc_433", title:"IPC Section 433", category:"criminal", short:"Mischief by destroying, moving or rendering less useful a light-house or sea-mark.", type:"ipc", keywords:["ipc","mischief","property damage"] },
  { id:"ipc_434", title:"IPC Section 434", category:"criminal", short:"Mischief by destroying or moving, etc., a land-mark fixed by public authority.", type:"ipc", keywords:["ipc","mischief","property damage"] },
  { id:"ipc_435", title:"IPC Section 435", category:"criminal", short:"Mischief by fire or explosive substance with intent to cause damage to amount of one hundred or (in case of agricultural produce) ten rupees.", type:"ipc", keywords:["ipc","mischief","property damage"] },
  { id:"ipc_436", title:"IPC Section 436", category:"criminal", short:"Mischief by fire or explosive substance with intent to destroy house, etc.", type:"ipc", keywords:["ipc","mischief","property damage"] },
  { id:"ipc_437", title:"IPC Section 437", category:"criminal", short:"Mischief with intent to destroy or make unsafe a decked vessel or one of twenty tons burden.", type:"ipc", keywords:["ipc","mischief","property damage"] },
  { id:"ipc_438", title:"IPC Section 438", category:"criminal", short:"Punishment for the mischief described in section 437 committed by fire or explosive substance.", type:"ipc", keywords:["ipc","mischief","property damage"] },
  { id:"ipc_439", title:"IPC Section 439", category:"criminal", short:"Punishment for intentionally running vessel aground or ashore with intent to commit theft, etc.", type:"ipc", keywords:["ipc","theft","stolen","property"] },
  { id:"ipc_440", title:"IPC Section 440", category:"criminal", short:"Mischief committed after preparation made for causing death or hurt.", type:"ipc", keywords:["ipc","hurt","injury","mischief","property damage"] },
  { id:"ipc_441", title:"IPC Section 441", category:"criminal", short:"Criminal trespass.", type:"ipc", keywords:["ipc","trespass","entry"] },
  { id:"ipc_442", title:"IPC Section 442", category:"criminal", short:"House-trespass.", type:"ipc", keywords:["ipc","trespass","entry"] },
  { id:"ipc_443", title:"IPC Section 443", category:"criminal", short:"Lurking house-trespass.", type:"ipc", keywords:["ipc","trespass","entry"] },
  { id:"ipc_444", title:"IPC Section 444", category:"criminal", short:"Lurking house-trespass by night.", type:"ipc", keywords:["ipc","trespass","entry"] },
  { id:"ipc_445", title:"IPC Section 445", category:"criminal", short:"House-breaking.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_446", title:"IPC Section 446", category:"criminal", short:"House-breaking by night.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_447", title:"IPC Section 447", category:"criminal", short:"Punishment for criminal trespass.", type:"ipc", keywords:["ipc","trespass","entry"] },
  { id:"ipc_448", title:"IPC Section 448", category:"criminal", short:"Punishment for house-trespass.", type:"ipc", keywords:["ipc","trespass","entry"] },
  { id:"ipc_449", title:"IPC Section 449", category:"criminal", short:"House-trespass in order to commit offence punishable with death.", type:"ipc", keywords:["ipc","trespass","entry"] },
  { id:"ipc_450", title:"IPC Section 450", category:"criminal", short:"House-trespass in order to commit offence punishable with imprisonment for life.", type:"ipc", keywords:["ipc","trespass","entry"] },
  { id:"ipc_451", title:"IPC Section 451", category:"criminal", short:"House-trespass in order to commit offence punishable with imprisonment.", type:"ipc", keywords:["ipc","trespass","entry"] },
  { id:"ipc_452", title:"IPC Section 452", category:"criminal", short:"House-trespass after preparation for hurt, assault or wrongful restraint.", type:"ipc", keywords:["ipc","assault","hurt","trespass","entry"] },
  { id:"ipc_453", title:"IPC Section 453", category:"criminal", short:"Punishment for lurking house-trespass or house-breaking.", type:"ipc", keywords:["ipc","trespass","entry"] },
  { id:"ipc_454", title:"IPC Section 454", category:"criminal", short:"Lurking house-trespass or house-breaking in order to commit offence punishable with imprisonment.", type:"ipc", keywords:["ipc","trespass","entry"] },
  { id:"ipc_455", title:"IPC Section 455", category:"criminal", short:"Lurking house-trespass or house-breaking after preparation for hurt, assault or wrongful restraint.", type:"ipc", keywords:["ipc","assault","hurt","trespass","entry"] },
  { id:"ipc_456", title:"IPC Section 456", category:"criminal", short:"Punishment for lurking house-trespass or house-breaking by night.", type:"ipc", keywords:["ipc","trespass","entry"] },
  { id:"ipc_457", title:"IPC Section 457", category:"criminal", short:"Lurking house-trespass or house-breaking by night in order to commit offence punishable with imprisonment.", type:"ipc", keywords:["ipc","trespass","entry"] },
  { id:"ipc_458", title:"IPC Section 458", category:"criminal", short:"Lurking house-trespass or house-breaking by night after preparation for hurt, assault, or wrongful restraint.", type:"ipc", keywords:["ipc","assault","hurt","trespass","entry"] },
  { id:"ipc_459", title:"IPC Section 459", category:"criminal", short:"Grievous hurt caused whilst committing lurking house-trespass or house-breaking.", type:"ipc", keywords:["ipc","trespass","entry","hurt","injury"] },
  { id:"ipc_460", title:"IPC Section 460", category:"criminal", short:"All persons jointly concerned in lurking house-trespass or house-breaking by night punishable where death or grievous hurt caused by one of them.", type:"ipc", keywords:["ipc","trespass","entry","hurt","injury"] },
  { id:"ipc_461", title:"IPC Section 461", category:"criminal", short:"Dishonestly breaking open receptacle containing property.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_462", title:"IPC Section 462", category:"criminal", short:"Punishment for same offence when committed by person entrusted with custody.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_463", title:"IPC Section 463", category:"criminal", short:"Forgery.", type:"ipc", keywords:["ipc","forgery","false document"] },
  { id:"ipc_464", title:"IPC Section 464", category:"criminal", short:"Making a false document.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_465", title:"IPC Section 465", category:"criminal", short:"Punishment for forgery.", type:"ipc", keywords:["ipc","forgery","false document"] },
  { id:"ipc_466", title:"IPC Section 466", category:"criminal", short:"Forgery of record of Court or of public register, etc.", type:"ipc", keywords:["ipc","forgery","false document"] },
  { id:"ipc_467", title:"IPC Section 467", category:"criminal", short:"Forgery of valuable security, will, etc.", type:"ipc", keywords:["ipc","forgery","false document"] },
  { id:"ipc_468", title:"IPC Section 468", category:"criminal", short:"Forgery for purpose of cheating.", type:"ipc", keywords:["ipc","cheating","fraud","deception","forgery"] },
  { id:"ipc_469", title:"IPC Section 469", category:"criminal", short:"Forgery for purpose of harming reputation.", type:"ipc", keywords:["ipc","forgery","false document"] },
  { id:"ipc_470", title:"IPC Section 470", category:"criminal", short:"Forged document.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_471", title:"IPC Section 471", category:"criminal", short:"Using as genuine a forged document or electronic record.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_472", title:"IPC Section 472", category:"criminal", short:"Making or possessing counterfeit seal, etc., with intent to commit forgery punishable under section 467.", type:"ipc", keywords:["ipc","forgery","false document","counterfeit","currency"] },
  { id:"ipc_473", title:"IPC Section 473", category:"criminal", short:"Making or possessing counterfeit seal, etc., with intent to commit forgery punishable otherwise.", type:"ipc", keywords:["ipc","forgery","false document","counterfeit","currency"] },
  { id:"ipc_474", title:"IPC Section 474", category:"criminal", short:"Having possession of document described in section 466 or 467, knowing it to be forged and intending to use it as genuine.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_475", title:"IPC Section 475", category:"criminal", short:"Counterfeiting device or mark used for authenticating documents described in section 467, or possessing counterfeit marked material.", type:"ipc", keywords:["ipc","counterfeit","currency"] },
  { id:"ipc_476", title:"IPC Section 476", category:"criminal", short:"Counterfeiting device or mark used for authenticating documents other than those described in section 467, or possessing counterfeit marked material.", type:"ipc", keywords:["ipc","counterfeit","currency"] },
  { id:"ipc_477", title:"IPC Section 477", category:"criminal", short:"Fraudulent cancellation, destruction, etc., of will, authority to adopt, or valuable security.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_477a", title:"IPC Section 477A", category:"criminal", short:"Falsification of accounts.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_478", title:"IPC Section 478", category:"criminal", short:"Trade mark.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_479", title:"IPC Section 479", category:"criminal", short:"Property mark.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_480", title:"IPC Section 480", category:"criminal", short:"Using a false trade mark.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_481", title:"IPC Section 481", category:"criminal", short:"Using a false property mark.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_482", title:"IPC Section 482", category:"criminal", short:"Punishment for using a false trade mark or property mark.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_483", title:"IPC Section 483", category:"criminal", short:"Counterfeiting a trade mark or property mark used by another.", type:"ipc", keywords:["ipc","counterfeit","currency"] },
  { id:"ipc_484", title:"IPC Section 484", category:"criminal", short:"Counterfeiting a mark used by a public servant.", type:"ipc", keywords:["ipc","counterfeit","currency","public servant","government"] },
  { id:"ipc_485", title:"IPC Section 485", category:"criminal", short:"Making or possessing any instrument for counterfeiting a trade mark or property mark.", type:"ipc", keywords:["ipc","counterfeit","currency"] },
  { id:"ipc_486", title:"IPC Section 486", category:"criminal", short:"Selling goods marked with a counterfeit trade mark or property mark.", type:"ipc", keywords:["ipc","counterfeit","currency"] },
  { id:"ipc_487", title:"IPC Section 487", category:"criminal", short:"Making a false mark upon any receptacle containing goods.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_488", title:"IPC Section 488", category:"criminal", short:"Punishment for making use of any such false mark.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_489", title:"IPC Section 489", category:"criminal", short:"Tampering with property mark with intent to cause injury.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_489a", title:"IPC Section 489A", category:"criminal", short:"Counterfeiting currency-notes or bank-notes.", type:"ipc", keywords:["ipc","counterfeit","currency"] },
  { id:"ipc_489b", title:"IPC Section 489B", category:"criminal", short:"Using as genuine, forged or counterfeit currency-notes or bank-notes.", type:"ipc", keywords:["ipc","counterfeit","currency"] },
  { id:"ipc_489c", title:"IPC Section 489C", category:"criminal", short:"Possession of forged or counterfeit currency-notes or bank-notes.", type:"ipc", keywords:["ipc","counterfeit","currency"] },
  { id:"ipc_489d", title:"IPC Section 489D", category:"criminal", short:"Making or possessing instruments or materials for forging or counterfeiting currency-notes or bank-notes.", type:"ipc", keywords:["ipc","counterfeit","currency"] },
  { id:"ipc_489e", title:"IPC Section 489E", category:"criminal", short:"Making or using documents resembling currency-notes or bank-notes.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_490", title:"IPC Section 490", category:"criminal", short:"Breach of contract to attend on and supply wants of helpless person.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_491", title:"IPC Section 491", category:"criminal", short:"Breach of contract to attend on and supply wants of helpless person.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_492", title:"IPC Section 492", category:"criminal", short:"Breach of contract to serve at distant place to which servant is conveyed at masters expense.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_493", title:"IPC Section 493", category:"family", short:"Cohabitation caused by a man deceitfully inducing a belief of lawful marriage.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_494", title:"IPC Section 494", category:"family", short:"Marrying again during lifetime of husband or wife.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_495", title:"IPC Section 495", category:"family", short:"Same offence with concealment of former marriage from person with whom subsequent marriage is contracted.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_496", title:"IPC Section 496", category:"family", short:"Marriage ceremony fraudulently gone through without lawful marriage.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_497", title:"IPC Section 497", category:"criminal", short:"Adultery.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_498", title:"IPC Section 498", category:"criminal", short:"Enticing or taking away or detaining with criminal intent a married woman.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_498a", title:"IPC Section 498A", category:"family", short:"Husband or relative of husband of a woman subjecting her to cruelty.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_499", title:"IPC Section 499", category:"criminal", short:"Defamation.", type:"ipc", keywords:["ipc","defamation","reputation"] },
  { id:"ipc_500", title:"IPC Section 500", category:"criminal", short:"Punishment for defamation.", type:"ipc", keywords:["ipc","defamation","reputation"] },
  { id:"ipc_501", title:"IPC Section 501", category:"criminal", short:"Printing or engraving matter known to be defamatory.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_502", title:"IPC Section 502", category:"criminal", short:"Sale of printed or engraved substance containing defamatory matter.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_503", title:"IPC Section 503", category:"criminal", short:"Criminal intimidation.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_504", title:"IPC Section 504", category:"criminal", short:"Intentional insult with intent to provoke breach of the peace.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_505", title:"IPC Section 505", category:"criminal", short:"Statements conducing to public mischief.", type:"ipc", keywords:["ipc","mischief","property damage"] },
  { id:"ipc_506", title:"IPC Section 506", category:"criminal", short:"Punishment for criminal intimidation.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_507", title:"IPC Section 507", category:"criminal", short:"Criminal intimidation by an anonymous communication.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_508", title:"IPC Section 508", category:"criminal", short:"Act caused by inducing person to believe that he will be rendered an object of the Divine displeasure.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_509", title:"IPC Section 509", category:"criminal", short:"Word, gesture or act intended to insult the modesty of a woman.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_510", title:"IPC Section 510", category:"criminal", short:"Misconduct in public by a drunken person.", type:"ipc", keywords:["ipc"] },
  { id:"ipc_511", title:"IPC Section 511", category:"criminal", short:"Punishment for attempting to commit offences punishable with imprisonment for life or other imprisonment.", type:"ipc", keywords:["ipc"] },


  // ══════════════════════════════════════════════════════════════
  //  🔴 CRIMINAL LAW — CrPC (Code of Criminal Procedure, 1973)
  // ══════════════════════════════════════════════════════════════
  { id:"crpc_1", title:"CrPC Section 1", category:"criminal", short:"Short title, extent and commencement.", type:"crpc", keywords:["crpc"] },
  { id:"crpc_2", title:"CrPC Section 2", category:"criminal", short:"Definitions — bailable/non-bailable offences, cognizable/non-cognizable offences, complaint, FIR.", type:"crpc", keywords:["crpc","definitions","bailable","cognizable","fir"] },
  { id:"crpc_3", title:"CrPC Section 3", category:"criminal", short:"Construction of references.", type:"crpc", keywords:["crpc"] },
  { id:"crpc_4", title:"CrPC Section 4", category:"criminal", short:"Trial of offences under the Indian Penal Code and other laws.", type:"crpc", keywords:["crpc","trial"] },
  { id:"crpc_5", title:"CrPC Section 5", category:"criminal", short:"Saving.", type:"crpc", keywords:["crpc"] },
  { id:"crpc_6", title:"CrPC Section 6", category:"criminal", short:"Classes of Criminal Courts.", type:"crpc", keywords:["crpc","courts"] },
  { id:"crpc_7", title:"CrPC Section 7", category:"criminal", short:"Territorial divisions.", type:"crpc", keywords:["crpc","jurisdiction"] },
  { id:"crpc_8", title:"CrPC Section 8", category:"criminal", short:"Metropolitan areas.", type:"crpc", keywords:["crpc","metropolitan"] },
  { id:"crpc_9", title:"CrPC Section 9", category:"criminal", short:"Court of Session.", type:"crpc", keywords:["crpc","sessions court"] },
  { id:"crpc_10", title:"CrPC Section 10", category:"criminal", short:"Subordination of Assistant Sessions Judges.", type:"crpc", keywords:["crpc","sessions"] },
  { id:"crpc_11", title:"CrPC Section 11", category:"criminal", short:"Courts of Judicial Magistrates.", type:"crpc", keywords:["crpc","magistrate"] },
  { id:"crpc_12", title:"CrPC Section 12", category:"criminal", short:"Chief Judicial Magistrate and Additional Chief Judicial Magistrate.", type:"crpc", keywords:["crpc","magistrate"] },
  { id:"crpc_13", title:"CrPC Section 13", category:"criminal", short:"Special Judicial Magistrates.", type:"crpc", keywords:["crpc","magistrate"] },
  { id:"crpc_14", title:"CrPC Section 14", category:"criminal", short:"Local Jurisdiction of Judicial Magistrates.", type:"crpc", keywords:["crpc","jurisdiction","magistrate"] },
  { id:"crpc_15", title:"CrPC Section 15", category:"criminal", short:"Subordination of Judicial Magistrates.", type:"crpc", keywords:["crpc","magistrate"] },
  { id:"crpc_16", title:"CrPC Section 16", category:"criminal", short:"Courts of Metropolitan Magistrates.", type:"crpc", keywords:["crpc","metropolitan","magistrate"] },
  { id:"crpc_17", title:"CrPC Section 17", category:"criminal", short:"Chief Metropolitan Magistrate and Additional Chief Metropolitan Magistrate.", type:"crpc", keywords:["crpc","metropolitan"] },
  { id:"crpc_18", title:"CrPC Section 18", category:"criminal", short:"Special Metropolitan Magistrates.", type:"crpc", keywords:["crpc","metropolitan","magistrate"] },
  { id:"crpc_19", title:"CrPC Section 19", category:"criminal", short:"Subordination of Metropolitan Magistrates.", type:"crpc", keywords:["crpc","metropolitan"] },
  { id:"crpc_20", title:"CrPC Section 20", category:"criminal", short:"Executive Magistrates.", type:"crpc", keywords:["crpc","magistrate"] },
  { id:"crpc_21", title:"CrPC Section 21", category:"criminal", short:"Special Executive Magistrates.", type:"crpc", keywords:["crpc","magistrate"] },
  { id:"crpc_22", title:"CrPC Section 22", category:"criminal", short:"Local Jurisdiction of Executive Magistrates.", type:"crpc", keywords:["crpc","jurisdiction","magistrate"] },
  { id:"crpc_23", title:"CrPC Section 23", category:"criminal", short:"Subordination of Executive Magistrates.", type:"crpc", keywords:["crpc","magistrate"] },
  { id:"crpc_24", title:"CrPC Section 24", category:"criminal", short:"Public Prosecutors.", type:"crpc", keywords:["crpc","prosecutor","public prosecutor"] },
  { id:"crpc_25", title:"CrPC Section 25", category:"criminal", short:"Assistant Public Prosecutors.", type:"crpc", keywords:["crpc","prosecutor"] },
  { id:"crpc_25a", title:"CrPC Section 25A", category:"criminal", short:"Directorate of Prosecution.", type:"crpc", keywords:["crpc","prosecution"] },
  { id:"crpc_26", title:"CrPC Section 26", category:"criminal", short:"Courts by which offences are triable.", type:"crpc", keywords:["crpc","triable","courts"] },
  { id:"crpc_27", title:"CrPC Section 27", category:"criminal", short:"Jurisdiction in the case of juveniles.", type:"crpc", keywords:["crpc","juvenile","jurisdiction"] },
  { id:"crpc_28", title:"CrPC Section 28", category:"criminal", short:"Sentences which High Courts and Sessions Judges may pass.", type:"crpc", keywords:["crpc","sentence","high court","sessions"] },
  { id:"crpc_29", title:"CrPC Section 29", category:"criminal", short:"Sentences which Magistrates may pass.", type:"crpc", keywords:["crpc","sentence","magistrate"] },
  { id:"crpc_30", title:"CrPC Section 30", category:"criminal", short:"Sentence of imprisonment in default of fine.", type:"crpc", keywords:["crpc","sentence","fine","imprisonment"] },
  { id:"crpc_31", title:"CrPC Section 31", category:"criminal", short:"Sentence in cases of conviction of several offences at one trial.", type:"crpc", keywords:["crpc","sentence","conviction"] },
  { id:"crpc_32", title:"CrPC Section 32", category:"criminal", short:"Mode of conferring powers.", type:"crpc", keywords:["crpc"] },
  { id:"crpc_33", title:"CrPC Section 33", category:"criminal", short:"Powers of officers appointed.", type:"crpc", keywords:["crpc"] },
  { id:"crpc_34", title:"CrPC Section 34", category:"criminal", short:"Withdrawal of powers.", type:"crpc", keywords:["crpc"] },
  { id:"crpc_35", title:"CrPC Section 35", category:"criminal", short:"Powers of Judges and Magistrates exercisable by their successors-in-office.", type:"crpc", keywords:["crpc"] },
  { id:"crpc_36", title:"CrPC Section 36", category:"criminal", short:"Powers of superior officers of police.", type:"crpc", keywords:["crpc","police"] },
  { id:"crpc_37", title:"CrPC Section 37", category:"criminal", short:"Public when to assist Magistrates and police.", type:"crpc", keywords:["crpc","police","magistrate"] },
  { id:"crpc_38", title:"CrPC Section 38", category:"criminal", short:"Aid to person other than police officer, executing warrant.", type:"crpc", keywords:["crpc","warrant"] },
  { id:"crpc_39", title:"CrPC Section 39", category:"criminal", short:"Public to give information of certain offences.", type:"crpc", keywords:["crpc","information","offence"] },
  { id:"crpc_40", title:"CrPC Section 40", category:"criminal", short:"Duty of officers employed in connection with the affairs of a village to make certain report.", type:"crpc", keywords:["crpc","village","report"] },
  { id:"crpc_41", title:"CrPC Section 41", category:"criminal", short:"When police may arrest without warrant — cognizable offence, credible information.", type:"crpc", keywords:["arrest","warrant","police","cognizable","crpc"] },
  { id:"crpc_42", title:"CrPC Section 42", category:"criminal", short:"Arrest on refusal to give name and residence.", type:"crpc", keywords:["crpc","arrest","name","residence"] },
  { id:"crpc_43", title:"CrPC Section 43", category:"criminal", short:"Arrest by private person and procedure on such arrest.", type:"crpc", keywords:["crpc","arrest","private person"] },
  { id:"crpc_44", title:"CrPC Section 44", category:"criminal", short:"Arrest by Magistrate.", type:"crpc", keywords:["crpc","arrest","magistrate"] },
  { id:"crpc_45", title:"CrPC Section 45", category:"criminal", short:"Protection of members of the Armed Forces from arrest.", type:"crpc", keywords:["crpc","arrest","armed forces"] },
  { id:"crpc_46", title:"CrPC Section 46", category:"criminal", short:"Mode of arrest — touching or confining the body; no unnecessary restraint.", type:"crpc", keywords:["crpc","arrest","mode","procedure"] },
  { id:"crpc_47", title:"CrPC Section 47", category:"criminal", short:"Search of place entered by person sought to be arrested.", type:"crpc", keywords:["crpc","search","arrest"] },
  { id:"crpc_48", title:"CrPC Section 48", category:"criminal", short:"Pursuit of offenders into other jurisdictions.", type:"crpc", keywords:["crpc","arrest","jurisdiction"] },
  { id:"crpc_49", title:"CrPC Section 49", category:"criminal", short:"No unnecessary restraint.", type:"crpc", keywords:["crpc","arrest","restraint"] },
  { id:"crpc_50", title:"CrPC Section 50", category:"criminal", short:"Person arrested to be informed of grounds of arrest and of right to bail.", type:"crpc", keywords:["crpc","arrest","inform","grounds","rights","bail"] },
  { id:"crpc_50a", title:"CrPC Section 50A", category:"criminal", short:"Obligation of person making arrest to inform about the arrest to a nominated person.", type:"crpc", keywords:["crpc","arrest","inform","nominee"] },
  { id:"crpc_51", title:"CrPC Section 51", category:"criminal", short:"Search of arrested persons.", type:"crpc", keywords:["crpc","search","arrested"] },
  { id:"crpc_52", title:"CrPC Section 52", category:"criminal", short:"Power to seize offensive weapons.", type:"crpc", keywords:["crpc","seizure","weapons"] },
  { id:"crpc_53", title:"CrPC Section 53", category:"criminal", short:"Examination of accused by medical practitioner at the request of police officer.", type:"crpc", keywords:["crpc","medical","examination","accused","police"] },
  { id:"crpc_53a", title:"CrPC Section 53A", category:"criminal", short:"Examination of person accused of rape by medical practitioner.", type:"crpc", keywords:["crpc","rape","medical","examination"] },
  { id:"crpc_54", title:"CrPC Section 54", category:"criminal", short:"Examination of arrested person by medical practitioner at the request of the arrested person.", type:"crpc", keywords:["crpc","medical","examination","arrested"] },
  { id:"crpc_54a", title:"CrPC Section 54A", category:"criminal", short:"Identification of person arrested.", type:"crpc", keywords:["crpc","identification","arrested"] },
  { id:"crpc_55", title:"CrPC Section 55", category:"criminal", short:"Procedure when police officer deputes subordinate to arrest without warrant.", type:"crpc", keywords:["crpc","arrest","warrant","police"] },
  { id:"crpc_56", title:"CrPC Section 56", category:"criminal", short:"Person arrested to be taken before Magistrate or officer in charge of police station.", type:"crpc", keywords:["crpc","arrested","magistrate","police station"] },
  { id:"crpc_57", title:"CrPC Section 57", category:"criminal", short:"Person arrested not to be detained more than twenty-four hours without magistrate order.", type:"crpc", keywords:["crpc","24 hours","detention","magistrate","arrest"] },
  { id:"crpc_58", title:"CrPC Section 58", category:"criminal", short:"Police to report apprehensions.", type:"crpc", keywords:["crpc","police","report"] },
  { id:"crpc_59", title:"CrPC Section 59", category:"criminal", short:"Discharge of person apprehended.", type:"crpc", keywords:["crpc","discharge","apprehended"] },
  { id:"crpc_60", title:"CrPC Section 60", category:"criminal", short:"Powers, on escape, to pursue and re-take.", type:"crpc", keywords:["crpc","escape","pursuit"] },
  { id:"crpc_61", title:"CrPC Section 61", category:"criminal", short:"Form of summons.", type:"crpc", keywords:["crpc","summons"] },
  { id:"crpc_62", title:"CrPC Section 62", category:"criminal", short:"Summons how served.", type:"crpc", keywords:["crpc","summons","service"] },
  { id:"crpc_63", title:"CrPC Section 63", category:"criminal", short:"Service of summons on corporate bodies and societies.", type:"crpc", keywords:["crpc","summons","corporate"] },
  { id:"crpc_64", title:"CrPC Section 64", category:"criminal", short:"Service when persons summoned cannot be found.", type:"crpc", keywords:["crpc","summons","service"] },
  { id:"crpc_65", title:"CrPC Section 65", category:"criminal", short:"Procedure when service cannot be effected as before provided.", type:"crpc", keywords:["crpc","summons","service"] },
  { id:"crpc_66", title:"CrPC Section 66", category:"criminal", short:"Service on Government servant.", type:"crpc", keywords:["crpc","summons","government servant"] },
  { id:"crpc_67", title:"CrPC Section 67", category:"criminal", short:"Service of summons outside local limits.", type:"crpc", keywords:["crpc","summons","jurisdiction"] },
  { id:"crpc_68", title:"CrPC Section 68", category:"criminal", short:"Proof of service in such cases and when serving officer not present.", type:"crpc", keywords:["crpc","summons","proof"] },
  { id:"crpc_69", title:"CrPC Section 69", category:"criminal", short:"Service of summons on witness by post.", type:"crpc", keywords:["crpc","summons","witness"] },
  { id:"crpc_70", title:"CrPC Section 70", category:"criminal", short:"Form of warrant of arrest and duration.", type:"crpc", keywords:["crpc","warrant","arrest"] },
  { id:"crpc_71", title:"CrPC Section 71", category:"criminal", short:"Power to direct security to be taken.", type:"crpc", keywords:["crpc","warrant","security"] },
  { id:"crpc_72", title:"CrPC Section 72", category:"criminal", short:"Warrants to whom directed.", type:"crpc", keywords:["crpc","warrant"] },
  { id:"crpc_73", title:"CrPC Section 73", category:"criminal", short:"Warrant may be directed to any person.", type:"crpc", keywords:["crpc","warrant"] },
  { id:"crpc_74", title:"CrPC Section 74", category:"criminal", short:"Warrant directed to police officer.", type:"crpc", keywords:["crpc","warrant","police"] },
  { id:"crpc_75", title:"CrPC Section 75", category:"criminal", short:"Notification of substance of warrant.", type:"crpc", keywords:["crpc","warrant","notification"] },
  { id:"crpc_76", title:"CrPC Section 76", category:"criminal", short:"Person arrested to be brought before Court without delay.", type:"crpc", keywords:["crpc","arrest","court"] },
  { id:"crpc_77", title:"CrPC Section 77", category:"criminal", short:"Where warrant may be executed.", type:"crpc", keywords:["crpc","warrant","execution"] },
  { id:"crpc_78", title:"CrPC Section 78", category:"criminal", short:"Warrant forwarded for execution outside jurisdiction.", type:"crpc", keywords:["crpc","warrant","jurisdiction"] },
  { id:"crpc_79", title:"CrPC Section 79", category:"criminal", short:"Warrant directed to police officer for execution outside jurisdiction.", type:"crpc", keywords:["crpc","warrant","police","jurisdiction"] },
  { id:"crpc_80", title:"CrPC Section 80", category:"criminal", short:"Procedure of arrest of person against whom warrant issued.", type:"crpc", keywords:["crpc","arrest","warrant"] },
  { id:"crpc_81", title:"CrPC Section 81", category:"criminal", short:"Procedure by Magistrate before whom such person arrested is brought.", type:"crpc", keywords:["crpc","magistrate","arrest"] },
  { id:"crpc_82", title:"CrPC Section 82", category:"criminal", short:"Proclamation for person absconding.", type:"crpc", keywords:["crpc","absconder","proclamation"] },
  { id:"crpc_83", title:"CrPC Section 83", category:"criminal", short:"Attachment of property of person absconding.", type:"crpc", keywords:["crpc","attachment","property","absconder"] },
  { id:"crpc_84", title:"CrPC Section 84", category:"criminal", short:"Claims and objections to attachment.", type:"crpc", keywords:["crpc","attachment","property"] },
  { id:"crpc_85", title:"CrPC Section 85", category:"criminal", short:"Release, sale and restoration of attached property.", type:"crpc", keywords:["crpc","attachment","property"] },
  { id:"crpc_86", title:"CrPC Section 86", category:"criminal", short:"Appeal from order rejecting application for restoration of attached property.", type:"crpc", keywords:["crpc","appeal","attachment","property"] },
  { id:"crpc_87", title:"CrPC Section 87", category:"criminal", short:"Issue of warrant in lieu of, or in addition to, summons.", type:"crpc", keywords:["crpc","warrant","summons"] },
  { id:"crpc_88", title:"CrPC Section 88", category:"criminal", short:"Power to take bond for appearance.", type:"crpc", keywords:["crpc","bond","appearance"] },
  { id:"crpc_89", title:"CrPC Section 89", category:"criminal", short:"Arrest on breach of bond for appearance.", type:"crpc", keywords:["crpc","arrest","bond"] },
  { id:"crpc_90", title:"CrPC Section 90", category:"criminal", short:"Provisions of this Chapter generally applicable to summons and warrants of arrest.", type:"crpc", keywords:["crpc","summons","warrant"] },
  { id:"crpc_91", title:"CrPC Section 91", category:"criminal", short:"Summons to produce document or other thing.", type:"crpc", keywords:["crpc","summons","document","production"] },
  { id:"crpc_92", title:"CrPC Section 92", category:"criminal", short:"Procedure as to letters and telegrams.", type:"crpc", keywords:["crpc","letters","documents"] },
  { id:"crpc_93", title:"CrPC Section 93", category:"criminal", short:"When search-warrant may be issued.", type:"crpc", keywords:["crpc","search warrant"] },
  { id:"crpc_94", title:"CrPC Section 94", category:"criminal", short:"Search of place suspected to contain stolen property, forged documents, etc.", type:"crpc", keywords:["crpc","search","stolen property","forged documents"] },
  { id:"crpc_95", title:"CrPC Section 95", category:"criminal", short:"Power to declare certain publications forfeited and to issue search-warrants for the same.", type:"crpc", keywords:["crpc","search warrant","publication","forfeiture"] },
  { id:"crpc_96", title:"CrPC Section 96", category:"criminal", short:"Application to High Court to set aside declaration of forfeiture.", type:"crpc", keywords:["crpc","high court","forfeiture"] },
  { id:"crpc_97", title:"CrPC Section 97", category:"criminal", short:"Search for persons wrongfully confined.", type:"crpc", keywords:["crpc","search","wrongful confinement"] },
  { id:"crpc_98", title:"CrPC Section 98", category:"criminal", short:"Power to compel restoration of abducted females.", type:"crpc", keywords:["crpc","abduction","restoration"] },
  { id:"crpc_99", title:"CrPC Section 99", category:"criminal", short:"Direction, etc., of search-warrants.", type:"crpc", keywords:["crpc","search warrant"] },
  { id:"crpc_100", title:"CrPC Section 100", category:"criminal", short:"Persons in charge of closed place to allow search — search procedure.", type:"crpc", keywords:["crpc","search","closed place","procedure"] },
  { id:"crpc_101", title:"CrPC Section 101", category:"criminal", short:"Disposal of things found in search beyond jurisdiction.", type:"crpc", keywords:["crpc","search","jurisdiction"] },
  { id:"crpc_102", title:"CrPC Section 102", category:"criminal", short:"Power of police officer to seize certain property.", type:"crpc", keywords:["crpc","seizure","police","property"] },
  { id:"crpc_103", title:"CrPC Section 103", category:"criminal", short:"Magistrate may direct search in his presence.", type:"crpc", keywords:["crpc","search","magistrate"] },
  { id:"crpc_104", title:"CrPC Section 104", category:"criminal", short:"Power to impound document, etc., produced.", type:"crpc", keywords:["crpc","document","impound"] },
  { id:"crpc_105", title:"CrPC Section 105", category:"criminal", short:"Reciprocal arrangements regarding processes.", type:"crpc", keywords:["crpc"] },
  { id:"crpc_105a", title:"CrPC Section 105A", category:"criminal", short:"Definitions.", type:"crpc", keywords:["crpc","definitions"] },
  { id:"crpc_105b", title:"CrPC Section 105B", category:"criminal", short:"Assistance in securing transfer of persons.", type:"crpc", keywords:["crpc","transfer"] },
  { id:"crpc_105c", title:"CrPC Section 105C", category:"criminal", short:"Assistance in relation to orders of attachment or forfeiture of property.", type:"crpc", keywords:["crpc","attachment","forfeiture"] },
  { id:"crpc_105d", title:"CrPC Section 105D", category:"criminal", short:"Identifying unlawfully acquired property.", type:"crpc", keywords:["crpc","property","unlawful"] },
  { id:"crpc_105e", title:"CrPC Section 105E", category:"criminal", short:"Seizure or attachment of property.", type:"crpc", keywords:["crpc","seizure","attachment"] },
  { id:"crpc_105f", title:"CrPC Section 105F", category:"criminal", short:"Management of properties seized or forfeited under this Chapter.", type:"crpc", keywords:["crpc","seizure","forfeiture","property"] },
  { id:"crpc_105g", title:"CrPC Section 105G", category:"criminal", short:"Notice of forfeiture of property.", type:"crpc", keywords:["crpc","forfeiture","notice"] },
  { id:"crpc_105h", title:"CrPC Section 105H", category:"criminal", short:"Forfeiture of property in certain cases.", type:"crpc", keywords:["crpc","forfeiture","property"] },
  { id:"crpc_105i", title:"CrPC Section 105I", category:"criminal", short:"Fine in lieu of forfeiture.", type:"crpc", keywords:["crpc","fine","forfeiture"] },
  { id:"crpc_105j", title:"CrPC Section 105J", category:"criminal", short:"Certain transfers to be null and void.", type:"crpc", keywords:["crpc","transfer","void"] },
  { id:"crpc_105k", title:"CrPC Section 105K", category:"criminal", short:"Procedure in respect of letter of request.", type:"crpc", keywords:["crpc","letter of request"] },
  { id:"crpc_105l", title:"CrPC Section 105L", category:"criminal", short:"Application of this Chapter.", type:"crpc", keywords:["crpc"] },
  { id:"crpc_106", title:"CrPC Section 106", category:"criminal", short:"Security for keeping the peace on conviction.", type:"crpc", keywords:["crpc","security","peace","conviction"] },
  { id:"crpc_107", title:"CrPC Section 107", category:"criminal", short:"Security for keeping the peace in other cases.", type:"crpc", keywords:["crpc","security","peace"] },
  { id:"crpc_108", title:"CrPC Section 108", category:"criminal", short:"Security for good behaviour from persons disseminating seditious matters.", type:"crpc", keywords:["crpc","security","sedition"] },
  { id:"crpc_109", title:"CrPC Section 109", category:"criminal", short:"Security for good behaviour from suspected persons.", type:"crpc", keywords:["crpc","security","suspicious persons"] },
  { id:"crpc_110", title:"CrPC Section 110", category:"criminal", short:"Security for good behaviour from habitual offenders.", type:"crpc", keywords:["crpc","security","habitual offender"] },
  { id:"crpc_111", title:"CrPC Section 111", category:"criminal", short:"Order to be made.", type:"crpc", keywords:["crpc","security"] },
  { id:"crpc_112", title:"CrPC Section 112", category:"criminal", short:"Procedure in respect of person present in Court.", type:"crpc", keywords:["crpc","security"] },
  { id:"crpc_113", title:"CrPC Section 113", category:"criminal", short:"Summons or warrant in case of person not so present.", type:"crpc", keywords:["crpc","summons","warrant"] },
  { id:"crpc_114", title:"CrPC Section 114", category:"criminal", short:"Copy of order to accompany summons or warrant.", type:"crpc", keywords:["crpc","order","summons"] },
  { id:"crpc_115", title:"CrPC Section 115", category:"criminal", short:"Power to dispense with personal attendance.", type:"crpc", keywords:["crpc","attendance"] },
  { id:"crpc_116", title:"CrPC Section 116", category:"criminal", short:"Inquiry as to truth of information.", type:"crpc", keywords:["crpc","inquiry"] },
  { id:"crpc_117", title:"CrPC Section 117", category:"criminal", short:"Order to give security.", type:"crpc", keywords:["crpc","security","order"] },
  { id:"crpc_118", title:"CrPC Section 118", category:"criminal", short:"Discharge of person informed against.", type:"crpc", keywords:["crpc","discharge"] },
  { id:"crpc_119", title:"CrPC Section 119", category:"criminal", short:"Commencement of period for which security is required.", type:"crpc", keywords:["crpc","security"] },
  { id:"crpc_120", title:"CrPC Section 120", category:"criminal", short:"Contents of bond.", type:"crpc", keywords:["crpc","bond"] },
  { id:"crpc_121", title:"CrPC Section 121", category:"criminal", short:"Power to reject sureties.", type:"crpc", keywords:["crpc","surety","bail"] },
  { id:"crpc_122", title:"CrPC Section 122", category:"criminal", short:"Imprisonment in default of security.", type:"crpc", keywords:["crpc","imprisonment","security"] },
  { id:"crpc_123", title:"CrPC Section 123", category:"criminal", short:"Power to release persons imprisoned for failing to give security.", type:"crpc", keywords:["crpc","release","security","imprisonment"] },
  { id:"crpc_124", title:"CrPC Section 124", category:"criminal", short:"Security for unexpired period of bond.", type:"crpc", keywords:["crpc","security","bond"] },
  { id:"crpc_125", title:"CrPC Section 125", category:"criminal", short:"Order for maintenance of wives, children and parents.", type:"crpc", keywords:["crpc","maintenance","wife","children","parents"] },
  { id:"crpc_126", title:"CrPC Section 126", category:"criminal", short:"Procedure for maintenance.", type:"crpc", keywords:["crpc","maintenance","procedure"] },
  { id:"crpc_127", title:"CrPC Section 127", category:"criminal", short:"Alteration in allowance.", type:"crpc", keywords:["crpc","maintenance","allowance"] },
  { id:"crpc_128", title:"CrPC Section 128", category:"criminal", short:"Enforcement of order of maintenance.", type:"crpc", keywords:["crpc","maintenance","enforcement"] },
  { id:"crpc_129", title:"CrPC Section 129", category:"criminal", short:"Dispersal of assembly by use of civil force.", type:"crpc", keywords:["crpc","assembly","civil force","unlawful assembly"] },
  { id:"crpc_130", title:"CrPC Section 130", category:"criminal", short:"Use of armed forces to disperse assembly.", type:"crpc", keywords:["crpc","armed forces","assembly"] },
  { id:"crpc_131", title:"CrPC Section 131", category:"criminal", short:"Power of certain armed force officers to disperse assembly.", type:"crpc", keywords:["crpc","armed forces","assembly"] },
  { id:"crpc_132", title:"CrPC Section 132", category:"criminal", short:"Protection against prosecution for acts done under preceding sections.", type:"crpc", keywords:["crpc","protection","prosecution"] },
  { id:"crpc_133", title:"CrPC Section 133", category:"criminal", short:"Conditional order for removal of nuisance.", type:"crpc", keywords:["crpc","nuisance","order"] },
  { id:"crpc_134", title:"CrPC Section 134", category:"criminal", short:"Service or notification of order.", type:"crpc", keywords:["crpc","nuisance","service"] },
  { id:"crpc_135", title:"CrPC Section 135", category:"criminal", short:"Person to whom order is addressed to obey or show cause.", type:"crpc", keywords:["crpc","nuisance","show cause"] },
  { id:"crpc_136", title:"CrPC Section 136", category:"criminal", short:"Consequences of failing to obey order.", type:"crpc", keywords:["crpc","nuisance","disobedience"] },
  { id:"crpc_137", title:"CrPC Section 137", category:"criminal", short:"Procedure where existence of public right is denied.", type:"crpc", keywords:["crpc","public right"] },
  { id:"crpc_138", title:"CrPC Section 138", category:"criminal", short:"Procedure where he appears to show cause.", type:"crpc", keywords:["crpc","nuisance","show cause"] },
  { id:"crpc_139", title:"CrPC Section 139", category:"criminal", short:"Power of Magistrate to direct local investigation and examination of an expert.", type:"crpc", keywords:["crpc","investigation","expert","magistrate"] },
  { id:"crpc_140", title:"CrPC Section 140", category:"criminal", short:"Power of Magistrate to furnish written instructions, etc.", type:"crpc", keywords:["crpc","magistrate","instructions"] },
  { id:"crpc_141", title:"CrPC Section 141", category:"criminal", short:"Procedure on order being made absolute and consequences of disobedience.", type:"crpc", keywords:["crpc","nuisance","disobedience"] },
  { id:"crpc_142", title:"CrPC Section 142", category:"criminal", short:"Injunction pending inquiry.", type:"crpc", keywords:["crpc","injunction","inquiry"] },
  { id:"crpc_143", title:"CrPC Section 143", category:"criminal", short:"Magistrate may prohibit repetition or continuance of public nuisance.", type:"crpc", keywords:["crpc","nuisance","prohibition"] },
  { id:"crpc_144", title:"CrPC Section 144", category:"criminal", short:"Power to issue order in urgent cases of nuisance or apprehended danger.", type:"crpc", keywords:["crpc","Section 144","curfew","nuisance","emergency","public order"] },
  { id:"crpc_144a", title:"CrPC Section 144A", category:"criminal", short:"Power to prohibit carrying arms in procession or mass drill or mass training with arms.", type:"crpc", keywords:["crpc","arms","procession","prohibition"] },
  { id:"crpc_145", title:"CrPC Section 145", category:"criminal", short:"Procedure where dispute concerning land or water is likely to cause breach of peace.", type:"crpc", keywords:["crpc","land dispute","peace","breach"] },
  { id:"crpc_146", title:"CrPC Section 146", category:"criminal", short:"Power to attach subject of dispute and to appoint receiver.", type:"crpc", keywords:["crpc","attachment","dispute","receiver"] },
  { id:"crpc_147", title:"CrPC Section 147", category:"criminal", short:"Dispute concerning right of use of land or water.", type:"crpc", keywords:["crpc","land","water","dispute"] },
  { id:"crpc_148", title:"CrPC Section 148", category:"criminal", short:"Local inquiry.", type:"crpc", keywords:["crpc","local inquiry"] },
  { id:"crpc_149", title:"CrPC Section 149", category:"criminal", short:"Police to prevent cognizable offences.", type:"crpc", keywords:["crpc","police","cognizable","prevention"] },
  { id:"crpc_150", title:"CrPC Section 150", category:"criminal", short:"Information of design to commit cognizable offences.", type:"crpc", keywords:["crpc","information","cognizable"] },
  { id:"crpc_151", title:"CrPC Section 151", category:"criminal", short:"Arrest to prevent the commission of cognizable offences.", type:"crpc", keywords:["crpc","arrest","prevention","cognizable"] },
  { id:"crpc_152", title:"CrPC Section 152", category:"criminal", short:"Prevention of injury to public property.", type:"crpc", keywords:["crpc","public property","prevention"] },
  { id:"crpc_153", title:"CrPC Section 153", category:"criminal", short:"Inspection of weights and measures.", type:"crpc", keywords:["crpc","inspection","weights"] },
  { id:"crpc_154", title:"CrPC Section 154", category:"criminal", short:"Information in cognizable cases — FIR (First Information Report), mandatory duty to register.", type:"crpc", keywords:["fir","police","complaint","first information report","crpc","cognizable"] },
  { id:"crpc_155", title:"CrPC Section 155", category:"criminal", short:"Information as to non-cognizable cases — can only investigate with magistrate order.", type:"crpc", keywords:["crpc","non-cognizable","information","magistrate"] },
  { id:"crpc_156", title:"CrPC Section 156", category:"criminal", short:"Police officer's power to investigate cognizable case without magistrate order.", type:"crpc", keywords:["crpc","investigation","police","cognizable"] },
  { id:"crpc_157", title:"CrPC Section 157", category:"criminal", short:"Procedure for investigation — report to magistrate, preliminary enquiry.", type:"crpc", keywords:["crpc","investigation","report","magistrate"] },
  { id:"crpc_158", title:"CrPC Section 158", category:"criminal", short:"Report how submitted.", type:"crpc", keywords:["crpc","report","investigation"] },
  { id:"crpc_159", title:"CrPC Section 159", category:"criminal", short:"Power to hold investigation or preliminary inquiry.", type:"crpc", keywords:["crpc","investigation","inquiry"] },
  { id:"crpc_160", title:"CrPC Section 160", category:"criminal", short:"Police Officer's power to require attendance of witnesses.", type:"crpc", keywords:["crpc","witness","attendance","police"] },
  { id:"crpc_161", title:"CrPC Section 161", category:"criminal", short:"Examination of witnesses by police — voluntary statements, not under oath.", type:"crpc", keywords:["witness","police","investigation","crpc"] },
  { id:"crpc_162", title:"CrPC Section 162", category:"criminal", short:"Statements to police not to be signed — cannot be used to contradict witness except for specific purpose.", type:"crpc", keywords:["crpc","statement","police","signed","admissibility"] },
  { id:"crpc_163", title:"CrPC Section 163", category:"criminal", short:"No inducement to be offered.", type:"crpc", keywords:["crpc","inducement","statement"] },
  { id:"crpc_164", title:"CrPC Section 164", category:"criminal", short:"Recording of confessions and statements by Judicial Magistrate.", type:"crpc", keywords:["confession","statement","magistrate","crpc"] },
  { id:"crpc_164a", title:"CrPC Section 164A", category:"criminal", short:"Medical examination of the victim of rape.", type:"crpc", keywords:["crpc","rape","medical","examination","victim"] },
  { id:"crpc_165", title:"CrPC Section 165", category:"criminal", short:"Search by police officer.", type:"crpc", keywords:["crpc","search","police"] },
  { id:"crpc_166", title:"CrPC Section 166", category:"criminal", short:"When officer in charge of police station may require another to issue search-warrant.", type:"crpc", keywords:["crpc","search warrant","police station"] },
  { id:"crpc_166a", title:"CrPC Section 166A", category:"criminal", short:"Letter of request to competent authority for investigation in a country or place outside India.", type:"crpc", keywords:["crpc","investigation","foreign","letter of request"] },
  { id:"crpc_166b", title:"CrPC Section 166B", category:"criminal", short:"Letter of request from a country or place outside India to a Court or an authority for investigation in India.", type:"crpc", keywords:["crpc","investigation","foreign","letter of request"] },
  { id:"crpc_167", title:"CrPC Section 167", category:"criminal", short:"Procedure when investigation cannot be completed in twenty-four hours — default bail.", type:"crpc", keywords:["remand","custody","24 hours","bail","default bail","crpc"] },
  { id:"crpc_168", title:"CrPC Section 168", category:"criminal", short:"Report of investigation by subordinate police officer.", type:"crpc", keywords:["crpc","report","investigation","police"] },
  { id:"crpc_169", title:"CrPC Section 169", category:"criminal", short:"Release of accused when evidence deficient.", type:"crpc", keywords:["crpc","release","evidence","accused"] },
  { id:"crpc_170", title:"CrPC Section 170", category:"criminal", short:"Cases to be sent to Magistrate when evidence is sufficient.", type:"crpc", keywords:["crpc","magistrate","evidence","charge sheet"] },
  { id:"crpc_171", title:"CrPC Section 171", category:"criminal", short:"Complainant and witnesses not to be required to accompany police officer and not to be subject to restraint.", type:"crpc", keywords:["crpc","witness","complainant","restraint"] },
  { id:"crpc_172", title:"CrPC Section 172", category:"criminal", short:"Diary of proceeding in investigation.", type:"crpc", keywords:["crpc","investigation","diary","case diary"] },
  { id:"crpc_173", title:"CrPC Section 173", category:"criminal", short:"Report of police officer on completion of investigation — charge sheet or closure report.", type:"crpc", keywords:["crpc","charge sheet","police report","closure","173"] },
  { id:"crpc_174", title:"CrPC Section 174", category:"criminal", short:"Police to inquire and report on suicide, etc.", type:"crpc", keywords:["crpc","police","suicide","inquest","report"] },
  { id:"crpc_175", title:"CrPC Section 175", category:"criminal", short:"Power to summon persons.", type:"crpc", keywords:["crpc","summons"] },
  { id:"crpc_176", title:"CrPC Section 176", category:"criminal", short:"Inquiry by Magistrate into cause of death.", type:"crpc", keywords:["crpc","magistrate","death","inquest"] },
  { id:"crpc_177", title:"CrPC Section 177", category:"criminal", short:"Ordinary place of inquiry and trial.", type:"crpc", keywords:["crpc","jurisdiction","trial","territory"] },
  { id:"crpc_178", title:"CrPC Section 178", category:"criminal", short:"Place of inquiry or trial.", type:"crpc", keywords:["crpc","trial","place","jurisdiction"] },
  { id:"crpc_179", title:"CrPC Section 179", category:"criminal", short:"Offence triable where act is done or consequence ensues.", type:"crpc", keywords:["crpc","trial","jurisdiction","offence"] },
  { id:"crpc_180", title:"CrPC Section 180", category:"criminal", short:"Place of trial where act is offence by reason of relation to other offence.", type:"crpc", keywords:["crpc","trial","jurisdiction"] },
  { id:"crpc_181", title:"CrPC Section 181", category:"criminal", short:"Place of trial in case of certain offences.", type:"crpc", keywords:["crpc","trial","jurisdiction"] },
  { id:"crpc_182", title:"CrPC Section 182", category:"criminal", short:"Offences committed by letters, etc.", type:"crpc", keywords:["crpc","jurisdiction","letters"] },
  { id:"crpc_183", title:"CrPC Section 183", category:"criminal", short:"Offence committed on journey or voyage.", type:"crpc", keywords:["crpc","jurisdiction","journey"] },
  { id:"crpc_184", title:"CrPC Section 184", category:"criminal", short:"Place of trial for offences triable together.", type:"crpc", keywords:["crpc","trial","jurisdiction"] },
  { id:"crpc_185", title:"CrPC Section 185", category:"criminal", short:"Power to order cases to be tried in different sessions divisions.", type:"crpc", keywords:["crpc","trial","sessions"] },
  { id:"crpc_186", title:"CrPC Section 186", category:"criminal", short:"High Court to decide, in case of doubt, district where inquiry or trial shall take place.", type:"crpc", keywords:["crpc","high court","jurisdiction","trial"] },
  { id:"crpc_187", title:"CrPC Section 187", category:"criminal", short:"Power to issue summons or warrant for offence committed beyond local jurisdiction.", type:"crpc", keywords:["crpc","summons","warrant","jurisdiction"] },
  { id:"crpc_188", title:"CrPC Section 188", category:"criminal", short:"Offence committed outside India.", type:"crpc", keywords:["crpc","jurisdiction","foreign","outside India"] },
  { id:"crpc_189", title:"CrPC Section 189", category:"criminal", short:"Receipt of evidence relating to offences committed outside India.", type:"crpc", keywords:["crpc","evidence","foreign"] },
  { id:"crpc_190", title:"CrPC Section 190", category:"criminal", short:"Cognizance of offences by Magistrates.", type:"crpc", keywords:["crpc","cognizance","magistrate"] },
  { id:"crpc_191", title:"CrPC Section 191", category:"criminal", short:"Transfer on application of the accused.", type:"crpc", keywords:["crpc","transfer","accused"] },
  { id:"crpc_192", title:"CrPC Section 192", category:"criminal", short:"Making over of cases to Magistrates.", type:"crpc", keywords:["crpc","magistrate","transfer"] },
  { id:"crpc_193", title:"CrPC Section 193", category:"criminal", short:"Cognizance of offences by Courts of Session.", type:"crpc", keywords:["crpc","cognizance","sessions court"] },
  { id:"crpc_194", title:"CrPC Section 194", category:"criminal", short:"Additional and Assistant Sessions Judges to try cases made over to them.", type:"crpc", keywords:["crpc","sessions","trial"] },
  { id:"crpc_195", title:"CrPC Section 195", category:"criminal", short:"Prosecution for contempt of lawful authority of public servants, for offences against public justice and for offences relating to documents given in evidence.", type:"crpc", keywords:["crpc","prosecution","contempt","public servant","documents"] },
  { id:"crpc_196", title:"CrPC Section 196", category:"criminal", short:"Prosecution for offences against the State and for criminal conspiracy to commit such offence.", type:"crpc", keywords:["crpc","prosecution","state","conspiracy"] },
  { id:"crpc_197", title:"CrPC Section 197", category:"criminal", short:"Prosecution of Judges and public servants — prior sanction required.", type:"crpc", keywords:["public servant","sanction","prosecution","crpc","judge"] },
  { id:"crpc_198", title:"CrPC Section 198", category:"criminal", short:"Prosecution for offences against marriage.", type:"crpc", keywords:["crpc","prosecution","marriage"] },
  { id:"crpc_198a", title:"CrPC Section 198A", category:"criminal", short:"Prosecution of offences under section 498A of the Indian Penal Code.", type:"crpc", keywords:["crpc","498a","domestic violence","prosecution"] },
  { id:"crpc_198b", title:"CrPC Section 198B", category:"criminal", short:"Cognizance of offence.", type:"crpc", keywords:["crpc","cognizance"] },
  { id:"crpc_199", title:"CrPC Section 199", category:"criminal", short:"Prosecution for defamation.", type:"crpc", keywords:["crpc","prosecution","defamation"] },
  { id:"crpc_200", title:"CrPC Section 200", category:"criminal", short:"Examination of complainant in complaint cases before magistrate.", type:"crpc", keywords:["crpc","complaint","magistrate","examination"] },
  { id:"crpc_201", title:"CrPC Section 201", category:"criminal", short:"Procedure by Magistrate not competent to take cognizance of the case.", type:"crpc", keywords:["crpc","magistrate","cognizance"] },
  { id:"crpc_202", title:"CrPC Section 202", category:"criminal", short:"Postponement of issue of process.", type:"crpc", keywords:["crpc","process","postponement"] },
  { id:"crpc_203", title:"CrPC Section 203", category:"criminal", short:"Dismissal of complaint.", type:"crpc", keywords:["crpc","dismissal","complaint"] },
  { id:"crpc_204", title:"CrPC Section 204", category:"criminal", short:"Issue of process — magistrate may issue summons or warrant on a complaint.", type:"crpc", keywords:["crpc","process","summons","warrant"] },
  { id:"crpc_205", title:"CrPC Section 205", category:"criminal", short:"Magistrate may dispense with personal attendance of accused.", type:"crpc", keywords:["crpc","magistrate","attendance","accused"] },
  { id:"crpc_206", title:"CrPC Section 206", category:"criminal", short:"Special summons in cases of petty offence.", type:"crpc", keywords:["crpc","summons","petty offence"] },
  { id:"crpc_207", title:"CrPC Section 207", category:"criminal", short:"Supply to the accused of copy of police report and other documents.", type:"crpc", keywords:["crpc","accused","police report","documents","copy"] },
  { id:"crpc_208", title:"CrPC Section 208", category:"criminal", short:"Supply of copies of statements and documents to accused in other cases triable by Court of Session.", type:"crpc", keywords:["crpc","accused","documents","sessions"] },
  { id:"crpc_209", title:"CrPC Section 209", category:"criminal", short:"Commitment of case to Court of Session when offence is triable exclusively by it.", type:"crpc", keywords:["crpc","sessions court","commitment","trial"] },
  { id:"crpc_210", title:"CrPC Section 210", category:"criminal", short:"Procedure to be followed when there is a complaint case and police investigation in respect of the same offence.", type:"crpc", keywords:["crpc","complaint","police","investigation"] },
  { id:"crpc_211", title:"CrPC Section 211", category:"criminal", short:"Contents of charge.", type:"crpc", keywords:["crpc","charge","contents"] },
  { id:"crpc_212", title:"CrPC Section 212", category:"criminal", short:"Particulars as to time, place and person.", type:"crpc", keywords:["crpc","charge","particulars"] },
  { id:"crpc_213", title:"CrPC Section 213", category:"criminal", short:"When manner of committing offence must be stated.", type:"crpc", keywords:["crpc","charge","offence"] },
  { id:"crpc_214", title:"CrPC Section 214", category:"criminal", short:"Words in charge taken in sense of law under which offence is punishable.", type:"crpc", keywords:["crpc","charge"] },
  { id:"crpc_215", title:"CrPC Section 215", category:"criminal", short:"Effect of errors.", type:"crpc", keywords:["crpc","charge","error"] },
  { id:"crpc_216", title:"CrPC Section 216", category:"criminal", short:"Court may alter charge.", type:"crpc", keywords:["crpc","charge","alteration"] },
  { id:"crpc_217", title:"CrPC Section 217", category:"criminal", short:"Recall of witnesses when charge altered.", type:"crpc", keywords:["crpc","charge","witness"] },
  { id:"crpc_218", title:"CrPC Section 218", category:"criminal", short:"Separate charges for distinct offences.", type:"crpc", keywords:["crpc","charge","offence"] },
  { id:"crpc_219", title:"CrPC Section 219", category:"criminal", short:"Three offences of same kind within year may be charged together.", type:"crpc", keywords:["crpc","charge","offence"] },
  { id:"crpc_220", title:"CrPC Section 220", category:"criminal", short:"Trial for more than one offence.", type:"crpc", keywords:["crpc","trial","offence"] },
  { id:"crpc_221", title:"CrPC Section 221", category:"criminal", short:"Where it is doubtful what offence has been committed.", type:"crpc", keywords:["crpc","charge","offence"] },
  { id:"crpc_222", title:"CrPC Section 222", category:"criminal", short:"When offence proved included in offence charged.", type:"crpc", keywords:["crpc","charge","offence","included offence"] },
  { id:"crpc_223", title:"CrPC Section 223", category:"criminal", short:"What persons may be charged jointly.", type:"crpc", keywords:["crpc","charge","joint trial"] },
  { id:"crpc_224", title:"CrPC Section 224", category:"criminal", short:"Withdrawal of remaining charges on conviction on one of several charges.", type:"crpc", keywords:["crpc","charge","withdrawal","conviction"] },
  { id:"crpc_225", title:"CrPC Section 225", category:"criminal", short:"Trial to be conducted by Public Prosecutor.", type:"crpc", keywords:["crpc","trial","public prosecutor"] },
  { id:"crpc_226", title:"CrPC Section 226", category:"criminal", short:"Opening case for prosecution.", type:"crpc", keywords:["crpc","prosecution","trial"] },
  { id:"crpc_227", title:"CrPC Section 227", category:"criminal", short:"Discharge.", type:"crpc", keywords:["crpc","discharge"] },
  { id:"crpc_228", title:"CrPC Section 228", category:"criminal", short:"Framing of charge.", type:"crpc", keywords:["crpc","charge","framing"] },
  { id:"crpc_229", title:"CrPC Section 229", category:"criminal", short:"Conviction on plea of guilty.", type:"crpc", keywords:["crpc","conviction","plea","guilty"] },
  { id:"crpc_230", title:"CrPC Section 230", category:"criminal", short:"Date for prosecution evidence.", type:"crpc", keywords:["crpc","prosecution","evidence"] },
  { id:"crpc_231", title:"CrPC Section 231", category:"criminal", short:"Evidence for prosecution.", type:"crpc", keywords:["crpc","evidence","prosecution"] },
  { id:"crpc_232", title:"CrPC Section 232", category:"criminal", short:"Acquittal.", type:"crpc", keywords:["crpc","acquittal"] },
  { id:"crpc_233", title:"CrPC Section 233", category:"criminal", short:"Entering upon defence.", type:"crpc", keywords:["crpc","defence"] },
  { id:"crpc_234", title:"CrPC Section 234", category:"criminal", short:"Arguments.", type:"crpc", keywords:["crpc","arguments","trial"] },
  { id:"crpc_235", title:"CrPC Section 235", category:"criminal", short:"Judgment of acquittal or conviction.", type:"crpc", keywords:["crpc","judgment","acquittal","conviction"] },
  { id:"crpc_236", title:"CrPC Section 236", category:"criminal", short:"Previous conviction.", type:"crpc", keywords:["crpc","conviction","previous"] },
  { id:"crpc_237", title:"CrPC Section 237", category:"criminal", short:"Procedure in cases instituted under section 199(2).", type:"crpc", keywords:["crpc","defamation","procedure"] },
  { id:"crpc_238", title:"CrPC Section 238", category:"criminal", short:"Compliance with section 207.", type:"crpc", keywords:["crpc","documents","accused"] },
  { id:"crpc_239", title:"CrPC Section 239", category:"criminal", short:"When accused shall be discharged.", type:"crpc", keywords:["crpc","discharge","accused","groundless","charge"] },
  { id:"crpc_240", title:"CrPC Section 240", category:"criminal", short:"Framing of charge.", type:"crpc", keywords:["crpc","charge","framing","warrant case"] },
  { id:"crpc_241", title:"CrPC Section 241", category:"criminal", short:"Conviction on plea of guilty.", type:"crpc", keywords:["crpc","conviction","plea","guilty"] },
  { id:"crpc_242", title:"CrPC Section 242", category:"criminal", short:"Evidence for prosecution.", type:"crpc", keywords:["crpc","evidence","prosecution"] },
  { id:"crpc_243", title:"CrPC Section 243", category:"criminal", short:"Evidence for defence.", type:"crpc", keywords:["crpc","evidence","defence"] },
  { id:"crpc_244", title:"CrPC Section 244", category:"criminal", short:"Evidence for prosecution.", type:"crpc", keywords:["crpc","evidence","prosecution","summons case"] },
  { id:"crpc_245", title:"CrPC Section 245", category:"criminal", short:"When accused shall be discharged.", type:"crpc", keywords:["crpc","discharge","accused","summons case"] },
  { id:"crpc_246", title:"CrPC Section 246", category:"criminal", short:"Procedure where accused is not discharged.", type:"crpc", keywords:["crpc","procedure","accused"] },
  { id:"crpc_247", title:"CrPC Section 247", category:"criminal", short:"Evidence for defence.", type:"crpc", keywords:["crpc","evidence","defence"] },
  { id:"crpc_248", title:"CrPC Section 248", category:"criminal", short:"Acquittal or conviction.", type:"crpc", keywords:["crpc","acquittal","conviction"] },
  { id:"crpc_249", title:"CrPC Section 249", category:"criminal", short:"Absence of complainant.", type:"crpc", keywords:["crpc","complainant","absence"] },
  { id:"crpc_250", title:"CrPC Section 250", category:"criminal", short:"Compensation for accusation without reasonable cause.", type:"crpc", keywords:["crpc","compensation","false accusation"] },
  { id:"crpc_251", title:"CrPC Section 251", category:"criminal", short:"Substance of accusation to be stated.", type:"crpc", keywords:["crpc","accusation","summons case"] },
  { id:"crpc_252", title:"CrPC Section 252", category:"criminal", short:"Conviction on plea of guilty.", type:"crpc", keywords:["crpc","conviction","plea","guilty"] },
  { id:"crpc_253", title:"CrPC Section 253", category:"criminal", short:"Conviction on plea of guilty in absence of accused in petty cases.", type:"crpc", keywords:["crpc","conviction","petty","guilty"] },
  { id:"crpc_254", title:"CrPC Section 254", category:"criminal", short:"Procedure when not convicted.", type:"crpc", keywords:["crpc","procedure","acquittal"] },
  { id:"crpc_255", title:"CrPC Section 255", category:"criminal", short:"Acquittal or conviction.", type:"crpc", keywords:["crpc","acquittal","conviction"] },
  { id:"crpc_256", title:"CrPC Section 256", category:"criminal", short:"Non-appearance or death of complainant.", type:"crpc", keywords:["crpc","complainant","non-appearance"] },
  { id:"crpc_257", title:"CrPC Section 257", category:"criminal", short:"Withdrawal of complaint.", type:"crpc", keywords:["crpc","complaint","withdrawal"] },
  { id:"crpc_258", title:"CrPC Section 258", category:"criminal", short:"Power to stop proceedings in certain cases.", type:"crpc", keywords:["crpc","proceedings","stop"] },
  { id:"crpc_259", title:"CrPC Section 259", category:"criminal", short:"Power of Court to convert summons-cases into warrant cases.", type:"crpc", keywords:["crpc","summons case","warrant case"] },
  { id:"crpc_260", title:"CrPC Section 260", category:"criminal", short:"Power to try summarily.", type:"crpc", keywords:["crpc","summary trial"] },
  { id:"crpc_261", title:"CrPC Section 261", category:"criminal", short:"Summary trial by Magistrate of the second class.", type:"crpc", keywords:["crpc","summary trial","magistrate"] },
  { id:"crpc_262", title:"CrPC Section 262", category:"criminal", short:"Procedure for summary trials.", type:"crpc", keywords:["crpc","summary trial","procedure"] },
  { id:"crpc_263", title:"CrPC Section 263", category:"criminal", short:"Record in summary trials.", type:"crpc", keywords:["crpc","summary trial","record"] },
  { id:"crpc_264", title:"CrPC Section 264", category:"criminal", short:"Judgment in cases tried summarily.", type:"crpc", keywords:["crpc","summary trial","judgment"] },
  { id:"crpc_265", title:"CrPC Section 265", category:"criminal", short:"Language of record and judgment.", type:"crpc", keywords:["crpc","language","judgment"] },
  { id:"crpc_265a", title:"CrPC Section 265A", category:"criminal", short:"Application of the Chapter on Plea Bargaining.", type:"crpc", keywords:["crpc","plea bargaining"] },
  { id:"crpc_265b", title:"CrPC Section 265B", category:"criminal", short:"Application for plea bargaining.", type:"crpc", keywords:["crpc","plea bargaining","application"] },
  { id:"crpc_265c", title:"CrPC Section 265C", category:"criminal", short:"Guidelines for mutually satisfactory disposition.", type:"crpc", keywords:["crpc","plea bargaining","disposition"] },
  { id:"crpc_265d", title:"CrPC Section 265D", category:"criminal", short:"Report of the mutually satisfactory disposition to be submitted before the Court.", type:"crpc", keywords:["crpc","plea bargaining","report"] },
  { id:"crpc_265e", title:"CrPC Section 265E", category:"criminal", short:"Disposal of the case.", type:"crpc", keywords:["crpc","plea bargaining","disposal"] },
  { id:"crpc_265f", title:"CrPC Section 265F", category:"criminal", short:"Judgment of the Court.", type:"crpc", keywords:["crpc","plea bargaining","judgment"] },
  { id:"crpc_265g", title:"CrPC Section 265G", category:"criminal", short:"Finality of the judgment.", type:"crpc", keywords:["crpc","plea bargaining","finality"] },
  { id:"crpc_265h", title:"CrPC Section 265H", category:"criminal", short:"Power of the Court in plea bargaining.", type:"crpc", keywords:["crpc","plea bargaining","court"] },
  { id:"crpc_265i", title:"CrPC Section 265I", category:"criminal", short:"Period of detention undergone by the accused to be set off against the sentence of imprisonment.", type:"crpc", keywords:["crpc","plea bargaining","detention","sentence"] },
  { id:"crpc_265j", title:"CrPC Section 265J", category:"criminal", short:"Savings.", type:"crpc", keywords:["crpc","plea bargaining"] },
  { id:"crpc_265k", title:"CrPC Section 265K", category:"criminal", short:"Statements of accused not to be used.", type:"crpc", keywords:["crpc","plea bargaining","statement","accused"] },
  { id:"crpc_265l", title:"CrPC Section 265L", category:"criminal", short:"Non-application of the Chapter.", type:"crpc", keywords:["crpc","plea bargaining"] },
  { id:"crpc_266", title:"CrPC Section 266", category:"criminal", short:"Definitions.", type:"crpc", keywords:["crpc","definitions"] },
  { id:"crpc_267", title:"CrPC Section 267", category:"criminal", short:"Power to require attendance of prisoners.", type:"crpc", keywords:["crpc","prisoner","attendance"] },
  { id:"crpc_268", title:"CrPC Section 268", category:"criminal", short:"Power of State Government to exclude certain persons from operation of section 267.", type:"crpc", keywords:["crpc","state government","prisoner"] },
  { id:"crpc_269", title:"CrPC Section 269", category:"criminal", short:"Officer in charge of prison to abstain from carrying out order in certain contingencies.", type:"crpc", keywords:["crpc","prison"] },
  { id:"crpc_270", title:"CrPC Section 270", category:"criminal", short:"Prisoner to be brought to Court in custody.", type:"crpc", keywords:["crpc","prisoner","custody","court"] },
  { id:"crpc_271", title:"CrPC Section 271", category:"criminal", short:"Power to issue commission for examination of witness in prison.", type:"crpc", keywords:["crpc","commission","witness","prison"] },
  { id:"crpc_272", title:"CrPC Section 272", category:"criminal", short:"Language of Courts.", type:"crpc", keywords:["crpc","language","courts"] },
  { id:"crpc_273", title:"CrPC Section 273", category:"criminal", short:"Evidence to be taken in presence of accused.", type:"crpc", keywords:["crpc","evidence","accused","presence"] },
  { id:"crpc_274", title:"CrPC Section 274", category:"criminal", short:"Record in summons-cases and inquiries.", type:"crpc", keywords:["crpc","record","summons case"] },
  { id:"crpc_275", title:"CrPC Section 275", category:"criminal", short:"Record in warrant-cases.", type:"crpc", keywords:["crpc","record","warrant case"] },
  { id:"crpc_276", title:"CrPC Section 276", category:"criminal", short:"Record in trial before Court of Session.", type:"crpc", keywords:["crpc","record","sessions court","trial"] },
  { id:"crpc_277", title:"CrPC Section 277", category:"criminal", short:"Language of record of evidence.", type:"crpc", keywords:["crpc","language","record","evidence"] },
  { id:"crpc_278", title:"CrPC Section 278", category:"criminal", short:"Procedure in regard to such evidence when completed.", type:"crpc", keywords:["crpc","evidence","procedure"] },
  { id:"crpc_279", title:"CrPC Section 279", category:"criminal", short:"Interpretation of evidence to accused or his pleader.", type:"crpc", keywords:["crpc","evidence","interpretation","accused"] },
  { id:"crpc_280", title:"CrPC Section 280", category:"criminal", short:"Remarks respecting demeanour of witness.", type:"crpc", keywords:["crpc","witness","demeanour"] },
  { id:"crpc_281", title:"CrPC Section 281", category:"criminal", short:"Record of examination of accused.", type:"crpc", keywords:["crpc","examination","accused","record"] },
  { id:"crpc_282", title:"CrPC Section 282", category:"criminal", short:"Interpreter to be bound to interpret truthfully.", type:"crpc", keywords:["crpc","interpreter"] },
  { id:"crpc_283", title:"CrPC Section 283", category:"criminal", short:"Record in High Court.", type:"crpc", keywords:["crpc","high court","record"] },
  { id:"crpc_284", title:"CrPC Section 284", category:"criminal", short:"When attendance of witness may be dispensed with and commission issued.", type:"crpc", keywords:["crpc","witness","commission"] },
  { id:"crpc_285", title:"CrPC Section 285", category:"criminal", short:"Commission to whom to be issued.", type:"crpc", keywords:["crpc","commission","witness"] },
  { id:"crpc_286", title:"CrPC Section 286", category:"criminal", short:"Execution of commissions.", type:"crpc", keywords:["crpc","commission","execution"] },
  { id:"crpc_287", title:"CrPC Section 287", category:"criminal", short:"Parties may examine witnesses.", type:"crpc", keywords:["crpc","witness","examination"] },
  { id:"crpc_288", title:"CrPC Section 288", category:"criminal", short:"Return of commission.", type:"crpc", keywords:["crpc","commission"] },
  { id:"crpc_289", title:"CrPC Section 289", category:"criminal", short:"Adjournment of proceeding.", type:"crpc", keywords:["crpc","adjournment"] },
  { id:"crpc_290", title:"CrPC Section 290", category:"criminal", short:"Execution of foreign commissions.", type:"crpc", keywords:["crpc","commission","foreign"] },
  { id:"crpc_291", title:"CrPC Section 291", category:"criminal", short:"Deposition of medical witness.", type:"crpc", keywords:["crpc","medical","witness","deposition"] },
  { id:"crpc_291a", title:"CrPC Section 291A", category:"criminal", short:"Identification report of Magistrate.", type:"crpc", keywords:["crpc","identification","magistrate"] },
  { id:"crpc_292", title:"CrPC Section 292", category:"criminal", short:"Evidence of officers of the Mint.", type:"crpc", keywords:["crpc","mint","evidence"] },
  { id:"crpc_293", title:"CrPC Section 293", category:"criminal", short:"Reports of certain Government scientific experts.", type:"crpc", keywords:["crpc","expert","government","report"] },
  { id:"crpc_294", title:"CrPC Section 294", category:"criminal", short:"No formal proof of certain documents.", type:"crpc", keywords:["crpc","documents","proof"] },
  { id:"crpc_295", title:"CrPC Section 295", category:"criminal", short:"Affidavit in proof of conduct of public servants.", type:"crpc", keywords:["crpc","affidavit","public servant"] },
  { id:"crpc_296", title:"CrPC Section 296", category:"criminal", short:"Evidence of formal character on affidavit.", type:"crpc", keywords:["crpc","evidence","affidavit"] },
  { id:"crpc_297", title:"CrPC Section 297", category:"criminal", short:"Authorities before whom affidavits may be sworn.", type:"crpc", keywords:["crpc","affidavit"] },
  { id:"crpc_298", title:"CrPC Section 298", category:"criminal", short:"Previous conviction or acquittal how proved.", type:"crpc", keywords:["crpc","conviction","acquittal","proof"] },
  { id:"crpc_299", title:"CrPC Section 299", category:"criminal", short:"Record of evidence in absence of accused.", type:"crpc", keywords:["crpc","evidence","accused","absence"] },
  { id:"crpc_300", title:"CrPC Section 300", category:"criminal", short:"Person once convicted or acquitted not to be tried for same offence — double jeopardy.", type:"crpc", keywords:["crpc","double jeopardy","acquitted","convicted","same offence"] },
  { id:"crpc_301", title:"CrPC Section 301", category:"criminal", short:"Appearance by public prosecutors.", type:"crpc", keywords:["crpc","public prosecutor","appearance"] },
  { id:"crpc_302", title:"CrPC Section 302", category:"criminal", short:"Permission to conduct prosecution.", type:"crpc", keywords:["crpc","prosecution","permission"] },
  { id:"crpc_303", title:"CrPC Section 303", category:"criminal", short:"Right of person against whom proceedings are instituted to be defended.", type:"crpc", keywords:["crpc","defence","right","accused"] },
  { id:"crpc_304", title:"CrPC Section 304", category:"criminal", short:"Legal aid to accused at State expense in certain cases.", type:"crpc", keywords:["crpc","legal aid","accused","state"] },
  { id:"crpc_305", title:"CrPC Section 305", category:"criminal", short:"Procedure when corporation or registered society is an accused.", type:"crpc", keywords:["crpc","corporation","accused"] },
  { id:"crpc_306", title:"CrPC Section 306", category:"criminal", short:"Tender of pardon to accomplice.", type:"crpc", keywords:["crpc","pardon","accomplice","approver"] },
  { id:"crpc_307", title:"CrPC Section 307", category:"criminal", short:"Power to direct tender of pardon.", type:"crpc", keywords:["crpc","pardon","accomplice"] },
  { id:"crpc_308", title:"CrPC Section 308", category:"criminal", short:"Trial of person not complying with conditions of pardon.", type:"crpc", keywords:["crpc","pardon","trial"] },
  { id:"crpc_309", title:"CrPC Section 309", category:"criminal", short:"Power to postpone or adjourn proceedings.", type:"crpc", keywords:["crpc","adjournment","postpone","proceedings"] },
  { id:"crpc_310", title:"CrPC Section 310", category:"criminal", short:"Local inspection.", type:"crpc", keywords:["crpc","local inspection","court"] },
  { id:"crpc_311", title:"CrPC Section 311", category:"criminal", short:"Power to summon material witness, or examine person present.", type:"crpc", keywords:["crpc","witness","summons","examination"] },
  { id:"crpc_311a", title:"CrPC Section 311A", category:"criminal", short:"Power of Magistrate to order person to give specimen signature or handwriting.", type:"crpc", keywords:["crpc","magistrate","handwriting","signature","specimen"] },
  { id:"crpc_312", title:"CrPC Section 312", category:"criminal", short:"Expenses of Complainants and Witnesses.", type:"crpc", keywords:["crpc","expenses","witness","complainant"] },
  { id:"crpc_313", title:"CrPC Section 313", category:"criminal", short:"Power to examine the accused — statement of accused (not on oath).", type:"crpc", keywords:["crpc","accused","statement","examination"] },
  { id:"crpc_314", title:"CrPC Section 314", category:"criminal", short:"Oral arguments and memorandum of arguments.", type:"crpc", keywords:["crpc","arguments","oral"] },
  { id:"crpc_315", title:"CrPC Section 315", category:"criminal", short:"Accused person to be competent witness.", type:"crpc", keywords:["crpc","accused","witness","competent"] },
  { id:"crpc_316", title:"CrPC Section 316", category:"criminal", short:"No influence to be used to induce disclosure.", type:"crpc", keywords:["crpc","influence","disclosure"] },
  { id:"crpc_317", title:"CrPC Section 317", category:"criminal", short:"Provision for inquiries and trial being held in the absence of accused in certain cases.", type:"crpc", keywords:["crpc","trial","accused","absence"] },
  { id:"crpc_318", title:"CrPC Section 318", category:"criminal", short:"Procedure where accused does not understand proceedings.", type:"crpc", keywords:["crpc","accused","procedure","language"] },
  { id:"crpc_319", title:"CrPC Section 319", category:"criminal", short:"Power to proceed against other persons appearing to be guilty of offence.", type:"crpc", keywords:["crpc","accused","guilty","trial"] },
  { id:"crpc_320", title:"CrPC Section 320", category:"criminal", short:"Compounding of offences — list of offences settleable between parties.", type:"crpc", keywords:["compounding","settlement","offence","crpc"] },
  { id:"crpc_321", title:"CrPC Section 321", category:"criminal", short:"Withdrawal from prosecution.", type:"crpc", keywords:["crpc","withdrawal","prosecution"] },
  { id:"crpc_322", title:"CrPC Section 322", category:"criminal", short:"Procedure in cases which Magistrate cannot dispose of.", type:"crpc", keywords:["crpc","magistrate","disposal"] },
  { id:"crpc_323", title:"CrPC Section 323", category:"criminal", short:"Procedure when, after commencement of inquiry or trial, Magistrate finds case should be committed.", type:"crpc", keywords:["crpc","magistrate","commitment","sessions"] },
  { id:"crpc_324", title:"CrPC Section 324", category:"criminal", short:"Trial of persons previously convicted of offences against coinage, stamp law or property.", type:"crpc", keywords:["crpc","trial","previous conviction"] },
  { id:"crpc_325", title:"CrPC Section 325", category:"criminal", short:"Procedure when Magistrate cannot pass sentence sufficiently severe.", type:"crpc", keywords:["crpc","magistrate","sentence","severe"] },
  { id:"crpc_326", title:"CrPC Section 326", category:"criminal", short:"Conviction or commitment on evidence partly recorded by one Magistrate and partly by another.", type:"crpc", keywords:["crpc","conviction","evidence","magistrate"] },
  { id:"crpc_327", title:"CrPC Section 327", category:"criminal", short:"Court to be open.", type:"crpc", keywords:["crpc","open court","public"] },
  { id:"crpc_328", title:"CrPC Section 328", category:"criminal", short:"Procedure in case of accused being lunatic.", type:"crpc", keywords:["crpc","lunatic","unsound mind","accused"] },
  { id:"crpc_329", title:"CrPC Section 329", category:"criminal", short:"Procedure in case of person of unsound mind tried before Court.", type:"crpc", keywords:["crpc","unsound mind","trial"] },
  { id:"crpc_330", title:"CrPC Section 330", category:"criminal", short:"Release of lunatic pending investigation or trial.", type:"crpc", keywords:["crpc","lunatic","release"] },
  { id:"crpc_331", title:"CrPC Section 331", category:"criminal", short:"Resumption of inquiry or trial.", type:"crpc", keywords:["crpc","inquiry","trial","resumption"] },
  { id:"crpc_332", title:"CrPC Section 332", category:"criminal", short:"Procedure on accused appearing before Magistrate or Court.", type:"crpc", keywords:["crpc","accused","magistrate"] },
  { id:"crpc_333", title:"CrPC Section 333", category:"criminal", short:"When accused appears to have been of sound mind.", type:"crpc", keywords:["crpc","accused","sound mind"] },
  { id:"crpc_334", title:"CrPC Section 334", category:"criminal", short:"Judgment of acquittal on ground of unsoundness of mind.", type:"crpc", keywords:["crpc","acquittal","unsound mind"] },
  { id:"crpc_335", title:"CrPC Section 335", category:"criminal", short:"Person acquitted on such ground to be detained in safe custody.", type:"crpc", keywords:["crpc","acquittal","custody","unsound mind"] },
  { id:"crpc_336", title:"CrPC Section 336", category:"criminal", short:"Power of State Government to empower officer in charge to discharge.", type:"crpc", keywords:["crpc","discharge","state government"] },
  { id:"crpc_337", title:"CrPC Section 337", category:"criminal", short:"Procedure where lunatic prisoner is reported capable of making his defence.", type:"crpc", keywords:["crpc","lunatic","prisoner","defence"] },
  { id:"crpc_338", title:"CrPC Section 338", category:"criminal", short:"Procedure where lunatic detained is declared fit to be released.", type:"crpc", keywords:["crpc","lunatic","release"] },
  { id:"crpc_339", title:"CrPC Section 339", category:"criminal", short:"Delivery of lunatic to care of relative or friend.", type:"crpc", keywords:["crpc","lunatic","release","care"] },
  { id:"crpc_340", title:"CrPC Section 340", category:"criminal", short:"Procedure in cases mentioned in section 195.", type:"crpc", keywords:["crpc","contempt","public servant","procedure"] },
  { id:"crpc_341", title:"CrPC Section 341", category:"criminal", short:"Appeal.", type:"crpc", keywords:["crpc","appeal"] },
  { id:"crpc_342", title:"CrPC Section 342", category:"criminal", short:"Power to order costs.", type:"crpc", keywords:["crpc","costs"] },
  { id:"crpc_343", title:"CrPC Section 343", category:"criminal", short:"Procedure of Magistrate taking cognizance.", type:"crpc", keywords:["crpc","magistrate","cognizance"] },
  { id:"crpc_344", title:"CrPC Section 344", category:"criminal", short:"Summary procedure for trial for giving false evidence.", type:"crpc", keywords:["crpc","false evidence","perjury","summary trial"] },
  { id:"crpc_345", title:"CrPC Section 345", category:"criminal", short:"Procedure in certain cases of contempt.", type:"crpc", keywords:["crpc","contempt","procedure"] },
  { id:"crpc_346", title:"CrPC Section 346", category:"criminal", short:"Procedure where Court considers that case should not be dealt with under section 345.", type:"crpc", keywords:["crpc","contempt","procedure"] },
  { id:"crpc_347", title:"CrPC Section 347", category:"criminal", short:"When Registrar or Sub-Registrar to be deemed a Civil Court.", type:"crpc", keywords:["crpc","registrar","civil court"] },
  { id:"crpc_348", title:"CrPC Section 348", category:"criminal", short:"Discharge of offender on submission of apology.", type:"crpc", keywords:["crpc","discharge","apology"] },
  { id:"crpc_349", title:"CrPC Section 349", category:"criminal", short:"Imprisonment or committal of person refusing to answer or produce document.", type:"crpc", keywords:["crpc","imprisonment","contempt","document"] },
  { id:"crpc_350", title:"CrPC Section 350", category:"criminal", short:"Summary procedure for punishment for non-attendance by a witness in obedience to summons.", type:"crpc", keywords:["crpc","witness","non-attendance","summons"] },
  { id:"crpc_351", title:"CrPC Section 351", category:"criminal", short:"Appeals from convictions under sections 344, 345, 349 and 350.", type:"crpc", keywords:["crpc","appeal","conviction"] },
  { id:"crpc_352", title:"CrPC Section 352", category:"criminal", short:"Certain Judges and Magistrates not to try certain offences when committed before themselves.", type:"crpc", keywords:["crpc","judge","magistrate","conflict"] },
  { id:"crpc_353", title:"CrPC Section 353", category:"criminal", short:"Judgment.", type:"crpc", keywords:["crpc","judgment"] },
  { id:"crpc_354", title:"CrPC Section 354", category:"criminal", short:"Language and contents of judgment.", type:"crpc", keywords:["crpc","judgment","language","contents"] },
  { id:"crpc_355", title:"CrPC Section 355", category:"criminal", short:"Metropolitan Magistrate.", type:"crpc", keywords:["crpc","metropolitan magistrate","judgment"] },
  { id:"crpc_356", title:"CrPC Section 356", category:"criminal", short:"Order for notifying address of previously convicted offender.", type:"crpc", keywords:["crpc","convicted","address","notification"] },
  { id:"crpc_357", title:"CrPC Section 357", category:"criminal", short:"Order to pay compensation to victims of crime from fine amount.", type:"crpc", keywords:["crpc","compensation","victim","fine"] },
  { id:"crpc_357a", title:"CrPC Section 357A", category:"criminal", short:"Victim compensation scheme.", type:"crpc", keywords:["crpc","victim","compensation","scheme"] },
  { id:"crpc_357b", title:"CrPC Section 357B", category:"criminal", short:"Compensation to be in addition to fine under Section 326A or Section 376D of Indian Penal Code.", type:"crpc", keywords:["crpc","compensation","rape","acid attack"] },
  { id:"crpc_357c", title:"CrPC Section 357C", category:"criminal", short:"Treatment of victims.", type:"crpc", keywords:["crpc","victim","treatment","hospital"] },
  { id:"crpc_358", title:"CrPC Section 358", category:"criminal", short:"Compensation to persons groundlessly arrested.", type:"crpc", keywords:["crpc","compensation","false arrest","groundless"] },
  { id:"crpc_359", title:"CrPC Section 359", category:"criminal", short:"Order to pay costs in non-cognizable cases.", type:"crpc", keywords:["crpc","costs","non-cognizable"] },
  { id:"crpc_360", title:"CrPC Section 360", category:"criminal", short:"Order to release on probation of good conduct or after admonition.", type:"crpc", keywords:["crpc","probation","release","good conduct"] },
  { id:"crpc_361", title:"CrPC Section 361", category:"criminal", short:"Special reasons to be recorded in certain cases.", type:"crpc", keywords:["crpc","probation","reasons","record"] },
  { id:"crpc_362", title:"CrPC Section 362", category:"criminal", short:"Court not to alter judgment.", type:"crpc", keywords:["crpc","judgment","alter"] },
  { id:"crpc_363", title:"CrPC Section 363", category:"criminal", short:"Copy of judgment to be given to the accused and other persons.", type:"crpc", keywords:["crpc","judgment","copy","accused"] },
  { id:"crpc_364", title:"CrPC Section 364", category:"criminal", short:"Judgment when to be translated.", type:"crpc", keywords:["crpc","judgment","translation"] },
  { id:"crpc_365", title:"CrPC Section 365", category:"criminal", short:"Court of Session to send copy of finding and sentence to District Magistrate.", type:"crpc", keywords:["crpc","sessions","sentence","district magistrate"] },
  { id:"crpc_366", title:"CrPC Section 366", category:"criminal", short:"Sentence of death to be submitted by Court of Session for confirmation.", type:"crpc", keywords:["crpc","death sentence","confirmation","sessions"] },
  { id:"crpc_367", title:"CrPC Section 367", category:"criminal", short:"Power to direct further inquiry to be made or additional evidence to be taken.", type:"crpc", keywords:["crpc","inquiry","evidence","high court"] },
  { id:"crpc_368", title:"CrPC Section 368", category:"criminal", short:"Power of High Court to confirm sentence or annul conviction.", type:"crpc", keywords:["crpc","high court","sentence","confirmation","conviction"] },
  { id:"crpc_369", title:"CrPC Section 369", category:"criminal", short:"Confirmation or new sentence to be signed by two Judges.", type:"crpc", keywords:["crpc","sentence","confirmation","judges"] },
  { id:"crpc_370", title:"CrPC Section 370", category:"criminal", short:"Procedure in case of difference of opinion.", type:"crpc", keywords:["crpc","opinion","judges"] },
  { id:"crpc_371", title:"CrPC Section 371", category:"criminal", short:"Procedure in cases submitted to High Court for confirmation.", type:"crpc", keywords:["crpc","high court","confirmation"] },
  { id:"crpc_372", title:"CrPC Section 372", category:"criminal", short:"No appeal to lie unless otherwise provided.", type:"crpc", keywords:["crpc","appeal"] },
  { id:"crpc_373", title:"CrPC Section 373", category:"criminal", short:"Appeal from orders requiring security or refusal to accept or rejecting surety for keeping peace or good behaviour.", type:"crpc", keywords:["crpc","appeal","security","surety"] },
  { id:"crpc_374", title:"CrPC Section 374", category:"criminal", short:"Appeals from convictions.", type:"crpc", keywords:["appeal","conviction","sentence","crpc"] },
  { id:"crpc_375", title:"CrPC Section 375", category:"criminal", short:"No appeal in certain cases when accused pleads guilty.", type:"crpc", keywords:["crpc","appeal","guilty","plea"] },
  { id:"crpc_376", title:"CrPC Section 376", category:"criminal", short:"No appeal in petty cases.", type:"crpc", keywords:["crpc","appeal","petty offence"] },
  { id:"crpc_377", title:"CrPC Section 377", category:"criminal", short:"Appeal by the State Government against sentence.", type:"crpc", keywords:["crpc","appeal","state government","sentence"] },
  { id:"crpc_378", title:"CrPC Section 378", category:"criminal", short:"Appeal in case of acquittal.", type:"crpc", keywords:["crpc","appeal","acquittal"] },
  { id:"crpc_379", title:"CrPC Section 379", category:"criminal", short:"Appeal against conviction by High Court in certain cases.", type:"crpc", keywords:["crpc","appeal","high court","conviction"] },
  { id:"crpc_380", title:"CrPC Section 380", category:"criminal", short:"Special right of appeal in certain cases.", type:"crpc", keywords:["crpc","appeal","special"] },
  { id:"crpc_381", title:"CrPC Section 381", category:"criminal", short:"Appeal to Court of Session how heard.", type:"crpc", keywords:["crpc","appeal","sessions court"] },
  { id:"crpc_382", title:"CrPC Section 382", category:"criminal", short:"Petition of appeal.", type:"crpc", keywords:["crpc","appeal","petition"] },
  { id:"crpc_383", title:"CrPC Section 383", category:"criminal", short:"Procedure when appellant in jail.", type:"crpc", keywords:["crpc","appeal","jail","prisoner"] },
  { id:"crpc_384", title:"CrPC Section 384", category:"criminal", short:"Summary dismissal of appeal.", type:"crpc", keywords:["crpc","appeal","dismissal"] },
  { id:"crpc_385", title:"CrPC Section 385", category:"criminal", short:"Procedure for hearing appeals not dismissed summarily.", type:"crpc", keywords:["crpc","appeal","procedure"] },
  { id:"crpc_386", title:"CrPC Section 386", category:"criminal", short:"Powers of the Appellate Court.", type:"crpc", keywords:["crpc","appellate court","powers"] },
  { id:"crpc_387", title:"CrPC Section 387", category:"criminal", short:"Judgments of subordinate Appellate Court.", type:"crpc", keywords:["crpc","appellate court","judgment"] },
  { id:"crpc_388", title:"CrPC Section 388", category:"criminal", short:"Order of High Court on appeal to be certified to lower Court.", type:"crpc", keywords:["crpc","high court","appeal","certification"] },
  { id:"crpc_389", title:"CrPC Section 389", category:"criminal", short:"Suspension of sentence pending the appeal; release of appellant on bail.", type:"crpc", keywords:["crpc","sentence","suspension","bail","appeal"] },
  { id:"crpc_390", title:"CrPC Section 390", category:"criminal", short:"Arrest of accused in appeal from acquittal.", type:"crpc", keywords:["crpc","arrest","acquittal","appeal"] },
  { id:"crpc_391", title:"CrPC Section 391", category:"criminal", short:"Appellate Court may take further evidence or direct it to be taken.", type:"crpc", keywords:["crpc","appellate court","evidence"] },
  { id:"crpc_392", title:"CrPC Section 392", category:"criminal", short:"Procedure where Judges of Court of appeal are equally divided.", type:"crpc", keywords:["crpc","judges","division","appeal"] },
  { id:"crpc_393", title:"CrPC Section 393", category:"criminal", short:"Finality of judgments and orders on appeal.", type:"crpc", keywords:["crpc","judgment","finality","appeal"] },
  { id:"crpc_394", title:"CrPC Section 394", category:"criminal", short:"Abatement of appeals.", type:"crpc", keywords:["crpc","appeal","abatement","death"] },
  { id:"crpc_395", title:"CrPC Section 395", category:"criminal", short:"Reference to High Court.", type:"crpc", keywords:["crpc","high court","reference"] },
  { id:"crpc_396", title:"CrPC Section 396", category:"criminal", short:"Disposal of case according to decision of High Court.", type:"crpc", keywords:["crpc","high court","disposal"] },
  { id:"crpc_397", title:"CrPC Section 397", category:"criminal", short:"Calling for records to exercise powers of revision.", type:"crpc", keywords:["crpc","revision","records"] },
  { id:"crpc_398", title:"CrPC Section 398", category:"criminal", short:"Power to order inquiry.", type:"crpc", keywords:["crpc","revision","inquiry"] },
  { id:"crpc_399", title:"CrPC Section 399", category:"criminal", short:"Sessions Judge's powers of revision.", type:"crpc", keywords:["crpc","revision","sessions judge"] },
  { id:"crpc_400", title:"CrPC Section 400", category:"criminal", short:"Power of Additional Sessions Judge.", type:"crpc", keywords:["crpc","revision","additional sessions judge"] },
  { id:"crpc_401", title:"CrPC Section 401", category:"criminal", short:"High Court's power of revision.", type:"crpc", keywords:["crpc","revision","high court"] },
  { id:"crpc_402", title:"CrPC Section 402", category:"criminal", short:"Power of High Court to withdraw or transfer revision cases.", type:"crpc", keywords:["crpc","revision","transfer","high court"] },
  { id:"crpc_403", title:"CrPC Section 403", category:"criminal", short:"Option of Court to hear parties.", type:"crpc", keywords:["crpc","revision","parties","hearing"] },
  { id:"crpc_404", title:"CrPC Section 404", category:"criminal", short:"Statement by Metropolitan Magistrate of grounds of his decision to be considered by High Court.", type:"crpc", keywords:["crpc","metropolitan magistrate","high court","revision"] },
  { id:"crpc_405", title:"CrPC Section 405", category:"criminal", short:"High Court's order to be certified to lower Court.", type:"crpc", keywords:["crpc","high court","order","certification"] },
  { id:"crpc_406", title:"CrPC Section 406", category:"criminal", short:"Power of Supreme Court to transfer cases and appeals.", type:"crpc", keywords:["crpc","supreme court","transfer"] },
  { id:"crpc_407", title:"CrPC Section 407", category:"criminal", short:"Power of High Court to transfer cases and appeals.", type:"crpc", keywords:["crpc","high court","transfer"] },
  { id:"crpc_408", title:"CrPC Section 408", category:"criminal", short:"Power of Sessions Judge to transfer cases and appeals.", type:"crpc", keywords:["crpc","sessions judge","transfer"] },
  { id:"crpc_409", title:"CrPC Section 409", category:"criminal", short:"Withdrawal of cases and appeals by Sessions Judges.", type:"crpc", keywords:["crpc","sessions judge","withdrawal"] },
  { id:"crpc_410", title:"CrPC Section 410", category:"criminal", short:"Withdrawal of cases by Judicial Magistrates.", type:"crpc", keywords:["crpc","magistrate","withdrawal"] },
  { id:"crpc_411", title:"CrPC Section 411", category:"criminal", short:"Making over or withdrawal of cases by Executive Magistrates.", type:"crpc", keywords:["crpc","executive magistrate","withdrawal"] },
  { id:"crpc_412", title:"CrPC Section 412", category:"criminal", short:"Reasons to be recorded.", type:"crpc", keywords:["crpc","reasons","transfer"] },
  { id:"crpc_413", title:"CrPC Section 413", category:"criminal", short:"Execution of order passed under section 368.", type:"crpc", keywords:["crpc","execution","sentence","death"] },
  { id:"crpc_414", title:"CrPC Section 414", category:"criminal", short:"Execution of sentence of death passed by High Court.", type:"crpc", keywords:["crpc","death sentence","execution","high court"] },
  { id:"crpc_415", title:"CrPC Section 415", category:"criminal", short:"Postponement of execution of sentence of death in case of appeal to Supreme Court.", type:"crpc", keywords:["crpc","death sentence","postponement","supreme court"] },
  { id:"crpc_416", title:"CrPC Section 416", category:"criminal", short:"Postponement of capital sentence on pregnant woman.", type:"crpc", keywords:["crpc","death sentence","pregnant woman","postponement"] },
  { id:"crpc_417", title:"CrPC Section 417", category:"criminal", short:"Power to appoint place of imprisonment.", type:"crpc", keywords:["crpc","imprisonment","place"] },
  { id:"crpc_418", title:"CrPC Section 418", category:"criminal", short:"Execution of sentence of imprisonment.", type:"crpc", keywords:["crpc","imprisonment","execution","sentence"] },
  { id:"crpc_419", title:"CrPC Section 419", category:"criminal", short:"Direction of warrant for execution.", type:"crpc", keywords:["crpc","warrant","execution"] },
  { id:"crpc_420", title:"CrPC Section 420", category:"criminal", short:"Warrant with whom to be lodged.", type:"crpc", keywords:["crpc","warrant","lodging"] },
  { id:"crpc_421", title:"CrPC Section 421", category:"criminal", short:"Warrant for levy of fine.", type:"crpc", keywords:["crpc","warrant","fine","levy"] },
  { id:"crpc_422", title:"CrPC Section 422", category:"criminal", short:"Effect of such warrant.", type:"crpc", keywords:["crpc","warrant","fine"] },
  { id:"crpc_423", title:"CrPC Section 423", category:"criminal", short:"Warrant for levy of fine issued by a Court in any territory to which this Code does not extend.", type:"crpc", keywords:["crpc","warrant","fine","territory"] },
  { id:"crpc_424", title:"CrPC Section 424", category:"criminal", short:"Suspension of execution of sentence of imprisonment.", type:"crpc", keywords:["crpc","sentence","suspension","imprisonment"] },
  { id:"crpc_425", title:"CrPC Section 425", category:"criminal", short:"Who may issue warrant.", type:"crpc", keywords:["crpc","warrant"] },
  { id:"crpc_426", title:"CrPC Section 426", category:"criminal", short:"Sentence on escaped convict when to take effect.", type:"crpc", keywords:["crpc","sentence","escape","convict"] },
  { id:"crpc_427", title:"CrPC Section 427", category:"criminal", short:"Sentence on offender already sentenced for another offence — concurrent or consecutive.", type:"crpc", keywords:["crpc","consecutive","concurrent","sentence"] },
  { id:"crpc_428", title:"CrPC Section 428", category:"criminal", short:"Period of detention undergone by the accused to be set off against the sentence of imprisonment.", type:"crpc", keywords:["crpc","detention","sentence","set off"] },
  { id:"crpc_429", title:"CrPC Section 429", category:"criminal", short:"Saving.", type:"crpc", keywords:["crpc"] },
  { id:"crpc_430", title:"CrPC Section 430", category:"criminal", short:"Return of warrant on execution of sentence.", type:"crpc", keywords:["crpc","warrant","execution","sentence"] },
  { id:"crpc_431", title:"CrPC Section 431", category:"criminal", short:"Money ordered to be paid recoverable as a fine.", type:"crpc", keywords:["crpc","fine","recovery"] },
  { id:"crpc_432", title:"CrPC Section 432", category:"criminal", short:"Power to suspend or remit sentences.", type:"crpc", keywords:["crpc","remission","suspension","sentence"] },
  { id:"crpc_433", title:"CrPC Section 433", category:"criminal", short:"Power to commute sentence.", type:"crpc", keywords:["crpc","commutation","sentence"] },
  { id:"crpc_433a", title:"CrPC Section 433A", category:"criminal", short:"Restriction on powers of remission or commutation in certain cases.", type:"crpc", keywords:["crpc","remission","commutation","restriction","14 years"] },
  { id:"crpc_434", title:"CrPC Section 434", category:"criminal", short:"Concurrent power of Central Government in case of death sentences.", type:"crpc", keywords:["crpc","death sentence","central government","concurrent"] },
  { id:"crpc_435", title:"CrPC Section 435", category:"criminal", short:"State Government to act after consultation with Central Government in certain cases.", type:"crpc", keywords:["crpc","state government","central government","consultation"] },
  { id:"crpc_436", title:"CrPC Section 436", category:"criminal", short:"In what cases bail to be taken — bailable offences, right to bail.", type:"crpc", keywords:["crpc","bail","bailable","right to bail"] },
  { id:"crpc_436a", title:"CrPC Section 436A", category:"criminal", short:"Maximum period for which an under trial prisoner can be detained.", type:"crpc", keywords:["crpc","undertrial","bail","maximum detention","half period"] },
  { id:"crpc_437", title:"CrPC Section 437", category:"criminal", short:"When bail may be taken in case of non-bailable offence.", type:"crpc", keywords:["bail","bailable","offence","crpc","non-bailable"] },
  { id:"crpc_438", title:"CrPC Section 438", category:"criminal", short:"Direction for grant of bail to person apprehending arrest — anticipatory bail.", type:"crpc", keywords:["anticipatory bail","arrest","sessions court","crpc","high court"] },
  { id:"crpc_439", title:"CrPC Section 439", category:"criminal", short:"Special powers of High Court or Court of Session regarding bail.", type:"crpc", keywords:["crpc","bail","high court","sessions court"] },
  { id:"crpc_440", title:"CrPC Section 440", category:"criminal", short:"Amount of bond and reduction thereof.", type:"crpc", keywords:["crpc","bail","bond","amount"] },
  { id:"crpc_441", title:"CrPC Section 441", category:"criminal", short:"Bond of accused and sureties.", type:"crpc", keywords:["crpc","bail","bond","surety","accused"] },
  { id:"crpc_441a", title:"CrPC Section 441A", category:"criminal", short:"Declaration by sureties.", type:"crpc", keywords:["crpc","surety","declaration"] },
  { id:"crpc_442", title:"CrPC Section 442", category:"criminal", short:"Discharge from custody.", type:"crpc", keywords:["crpc","bail","discharge","custody"] },
  { id:"crpc_443", title:"CrPC Section 443", category:"criminal", short:"Power to order sufficient bail when that first taken is insufficient.", type:"crpc", keywords:["crpc","bail","sufficient"] },
  { id:"crpc_444", title:"CrPC Section 444", category:"criminal", short:"Discharge of sureties.", type:"crpc", keywords:["crpc","surety","discharge"] },
  { id:"crpc_445", title:"CrPC Section 445", category:"criminal", short:"Deposit instead of recognizance.", type:"crpc", keywords:["crpc","bail","deposit","recognizance"] },
  { id:"crpc_446", title:"CrPC Section 446", category:"criminal", short:"Procedure when bond has been forfeited.", type:"crpc", keywords:["crpc","bail","bond","forfeited"] },
  { id:"crpc_446a", title:"CrPC Section 446A", category:"criminal", short:"Cancellation of bond and bail bond.", type:"crpc", keywords:["crpc","bail","bond","cancellation"] },
  { id:"crpc_447", title:"CrPC Section 447", category:"criminal", short:"Procedure in case of insolvency or death of surety or when a bond is forfeited.", type:"crpc", keywords:["crpc","surety","insolvency","bond"] },
  { id:"crpc_448", title:"CrPC Section 448", category:"criminal", short:"Bond required from minor.", type:"crpc", keywords:["crpc","bail","minor"] },
  { id:"crpc_449", title:"CrPC Section 449", category:"criminal", short:"Appeal from orders under section 446.", type:"crpc", keywords:["crpc","bail","appeal"] },
  { id:"crpc_450", title:"CrPC Section 450", category:"criminal", short:"Power to direct levy of amount due on certain recognizances.", type:"crpc", keywords:["crpc","levy","recognizance"] },
  { id:"crpc_451", title:"CrPC Section 451", category:"criminal", short:"Order for custody and disposal of property pending trial in certain cases.", type:"crpc", keywords:["crpc","property","custody","disposal","trial"] },
  { id:"crpc_452", title:"CrPC Section 452", category:"criminal", short:"Order for disposal of property at conclusion of trial.", type:"crpc", keywords:["crpc","property","disposal","trial"] },
  { id:"crpc_453", title:"CrPC Section 453", category:"criminal", short:"Payment to innocent purchaser of money found on accused.", type:"crpc", keywords:["crpc","property","innocent purchaser","accused"] },
  { id:"crpc_454", title:"CrPC Section 454", category:"criminal", short:"Appeal against orders under section 452 or section 453.", type:"crpc", keywords:["crpc","appeal","property","disposal"] },
  { id:"crpc_455", title:"CrPC Section 455", category:"criminal", short:"Destruction of libellous and other matter.", type:"crpc", keywords:["crpc","property","destruction","libel"] },
  { id:"crpc_456", title:"CrPC Section 456", category:"criminal", short:"Power to restore possession of immovable property.", type:"crpc", keywords:["crpc","immovable property","possession","restoration"] },
  { id:"crpc_457", title:"CrPC Section 457", category:"criminal", short:"Procedure by police upon seizure of property.", type:"crpc", keywords:["crpc","police","seizure","property"] },
  { id:"crpc_458", title:"CrPC Section 458", category:"criminal", short:"Procedure when no claimant appears within six months.", type:"crpc", keywords:["crpc","property","unclaimed","six months"] },
  { id:"crpc_459", title:"CrPC Section 459", category:"criminal", short:"Power to sell perishable property.", type:"crpc", keywords:["crpc","property","perishable","sale"] },
  { id:"crpc_460", title:"CrPC Section 460", category:"criminal", short:"Irregularities which do not vitiate proceedings.", type:"crpc", keywords:["crpc","irregularity","proceedings"] },
  { id:"crpc_461", title:"CrPC Section 461", category:"criminal", short:"Irregularities which vitiate proceedings.", type:"crpc", keywords:["crpc","irregularity","void","proceedings"] },
  { id:"crpc_462", title:"CrPC Section 462", category:"criminal", short:"Proceedings in wrong place.", type:"crpc", keywords:["crpc","jurisdiction","wrong place"] },
  { id:"crpc_463", title:"CrPC Section 463", category:"criminal", short:"Non-compliance with provisions of section 164 or section 281.", type:"crpc", keywords:["crpc","non-compliance","confession","examination"] },
  { id:"crpc_464", title:"CrPC Section 464", category:"criminal", short:"Effect of omission to frame, or absence of, or error in, charge.", type:"crpc", keywords:["crpc","charge","error","omission"] },
  { id:"crpc_465", title:"CrPC Section 465", category:"criminal", short:"Finding or sentence when reversible by reason of error, omission or irregularity.", type:"crpc", keywords:["crpc","sentence","error","irregularity"] },
  { id:"crpc_466", title:"CrPC Section 466", category:"criminal", short:"Defect or error not to make attachment unlawful.", type:"crpc", keywords:["crpc","attachment","defect","error"] },
  { id:"crpc_467", title:"CrPC Section 467", category:"criminal", short:"Definitions.", type:"crpc", keywords:["crpc","limitation","definitions"] },
  { id:"crpc_468", title:"CrPC Section 468", category:"criminal", short:"Bar to taking cognizance after lapse of the period of limitation.", type:"crpc", keywords:["crpc","limitation","cognizance","bar"] },
  { id:"crpc_469", title:"CrPC Section 469", category:"criminal", short:"Commencement of the period of limitation.", type:"crpc", keywords:["crpc","limitation","commencement"] },
  { id:"crpc_470", title:"CrPC Section 470", category:"criminal", short:"Exclusion of time in certain cases.", type:"crpc", keywords:["crpc","limitation","exclusion","time"] },
  { id:"crpc_471", title:"CrPC Section 471", category:"criminal", short:"Exclusion of date on which Court is closed.", type:"crpc", keywords:["crpc","limitation","court closed"] },
  { id:"crpc_472", title:"CrPC Section 472", category:"criminal", short:"Continuing offence.", type:"crpc", keywords:["crpc","limitation","continuing offence"] },
  { id:"crpc_473", title:"CrPC Section 473", category:"criminal", short:"Extension of period of limitation in certain cases.", type:"crpc", keywords:["crpc","limitation","extension"] },
  { id:"crpc_474", title:"CrPC Section 474", category:"criminal", short:"Trials before High Court.", type:"crpc", keywords:["crpc","high court","trial"] },
  { id:"crpc_475", title:"CrPC Section 475", category:"criminal", short:"Delivery to commanding officers of persons liable to be tried by Court-martial.", type:"crpc", keywords:["crpc","court martial","armed forces","delivery"] },
  { id:"crpc_476", title:"CrPC Section 476", category:"criminal", short:"Forms.", type:"crpc", keywords:["crpc","forms"] },
  { id:"crpc_477", title:"CrPC Section 477", category:"criminal", short:"Power of High Court to make rules.", type:"crpc", keywords:["crpc","high court","rules"] },
  { id:"crpc_478", title:"CrPC Section 478", category:"criminal", short:"Power to alter functions allocated to Executive Magistrates in certain cases.", type:"crpc", keywords:["crpc","executive magistrate","functions"] },
  { id:"crpc_479", title:"CrPC Section 479", category:"criminal", short:"Cases in which Judge or Magistrate is personally interested.", type:"crpc", keywords:["crpc","judge","magistrate","interested","conflict of interest"] },
  { id:"crpc_480", title:"CrPC Section 480", category:"criminal", short:"Practising pleader not to sit as Magistrate in certain Courts.", type:"crpc", keywords:["crpc","pleader","magistrate","disqualification"] },
  { id:"crpc_481", title:"CrPC Section 481", category:"criminal", short:"Public servant concerned in sale not to purchase or bid for property.", type:"crpc", keywords:["crpc","public servant","sale","property","conflict"] },
  { id:"crpc_482", title:"CrPC Section 482", category:"criminal", short:"Saving of inherent powers of High Court — to prevent abuse of process of court.", type:"crpc", keywords:["high court","inherent powers","quash","crpc","abuse of process"] },
  { id:"crpc_483", title:"CrPC Section 483", category:"criminal", short:"Duty of High Court to exercise continuous superintendence over Courts of Judicial Magistrates.", type:"crpc", keywords:["crpc","high court","superintendence","magistrate"] },
  { id:"crpc_484", title:"CrPC Section 484", category:"criminal", short:"Repeal and savings.", type:"crpc", keywords:["crpc","repeal","savings"] },

  // ══════════════════════════════════════════════════════════════
  //  🔴 CRIMINAL LAW — Indian Evidence Act (IEA), 1872  [All 184 Sections — source: devgan.in]
  // ══════════════════════════════════════════════════════════════
  { id:"iea_1",    title:"IEA Section 1",    category:"criminal", short:"Short title, extent and commencement of the Indian Evidence Act, 1872.", type:"iea", keywords:["iea","title","extent","commencement"] },
  { id:"iea_2",    title:"IEA Section 2",    category:"criminal", short:"Repeal of enactments.", type:"iea", keywords:["iea","repeal"] },
  { id:"iea_3",    title:"IEA Section 3",    category:"criminal", short:"Interpretation clause — definitions of 'fact', 'relevant', 'proved', 'disproved', 'not proved'.", type:"iea", keywords:["iea","evidence","fact","proved","relevant","interpretation"] },
  { id:"iea_4",    title:"IEA Section 4",    category:"criminal", short:"Presumption and Proof — may presume, shall presume, conclusive proof.", type:"iea", keywords:["iea","presumption","conclusive proof","shall presume"] },
  { id:"iea_5",    title:"IEA Section 5",    category:"criminal", short:"Evidence may be given of facts in issue and relevant facts only.", type:"iea", keywords:["iea","evidence","facts in issue","relevant facts"] },
  { id:"iea_6",    title:"IEA Section 6",    category:"criminal", short:"Relevancy of facts forming part of same transaction (Res gestae).", type:"iea", keywords:["iea","res gestae","transaction","relevant facts"] },
  { id:"iea_7",    title:"IEA Section 7",    category:"criminal", short:"Facts which are the occasion, cause or effect of facts in issue.", type:"iea", keywords:["iea","cause","effect","motive","relevant"] },
  { id:"iea_8",    title:"IEA Section 8",    category:"criminal", short:"Motive, preparation and previous or subsequent conduct.", type:"iea", keywords:["iea","motive","preparation","conduct","relevant"] },
  { id:"iea_9",    title:"IEA Section 9",    category:"criminal", short:"Facts necessary to explain or introduce relevant facts.", type:"iea", keywords:["iea","explain","introduce","identity","occasion"] },
  { id:"iea_10",   title:"IEA Section 10",   category:"criminal", short:"Things said or done by conspirator in reference to common design.", type:"iea", keywords:["iea","conspiracy","common design","conspirator"] },
  { id:"iea_11",   title:"IEA Section 11",   category:"criminal", short:"When facts not otherwise relevant become relevant.", type:"iea", keywords:["iea","relevant","inconsistent","probable","improbable"] },
  { id:"iea_12",   title:"IEA Section 12",   category:"criminal", short:"In suits for damages, facts tending to enable Court to determine amount are relevant.", type:"iea", keywords:["iea","damages","relevant","suit"] },
  { id:"iea_13",   title:"IEA Section 13",   category:"criminal", short:"Facts relevant when right or custom is in question.", type:"iea", keywords:["iea","right","custom","relevant"] },
  { id:"iea_14",   title:"IEA Section 14",   category:"criminal", short:"Facts showing existence of state of mind, or of body or bodily feeling.", type:"iea", keywords:["iea","state of mind","intention","knowledge","bodily feeling"] },
  { id:"iea_15",   title:"IEA Section 15",   category:"criminal", short:"Facts bearing on question whether act was accidental or intentional.", type:"iea", keywords:["iea","accident","intentional","accidental"] },
  { id:"iea_16",   title:"IEA Section 16",   category:"criminal", short:"Existence of course of business when relevant.", type:"iea", keywords:["iea","course of business","relevant"] },
  { id:"iea_17",   title:"IEA Section 17",   category:"criminal", short:"Admission defined — statement, oral or documentary, suggesting inference as to relevant fact.", type:"iea", keywords:["iea","admission","statement","inference"] },
  { id:"iea_18",   title:"IEA Section 18",   category:"criminal", short:"Admission by party to proceeding or his agent; by suitor in representative character.", type:"iea", keywords:["iea","admission","party","agent","representative"] },
  { id:"iea_19",   title:"IEA Section 19",   category:"criminal", short:"Admissions by persons whose position must be proved as against party to suit.", type:"iea", keywords:["iea","admission","position","party","suit"] },
  { id:"iea_20",   title:"IEA Section 20",   category:"criminal", short:"Admissions by persons expressly referred to by party to suit.", type:"iea", keywords:["iea","admission","referred","party","suit"] },
  { id:"iea_21",   title:"IEA Section 21",   category:"criminal", short:"Proof of admissions against persons making them, and by or on their behalf.", type:"iea", keywords:["iea","admission","proof","against"] },
  { id:"iea_22",   title:"IEA Section 22",   category:"criminal", short:"When oral admissions as to contents of documents are relevant.", type:"iea", keywords:["iea","oral admission","document","relevant"] },
  { id:"iea_22a",  title:"IEA Section 22A",  category:"criminal", short:"When oral admission as to contents of electronic records are relevant.", type:"iea", keywords:["iea","oral admission","electronic records","relevant"] },
  { id:"iea_23",   title:"IEA Section 23",   category:"criminal", short:"Admissions in civil cases, when relevant.", type:"iea", keywords:["iea","admission","civil","relevant"] },
  { id:"iea_24",   title:"IEA Section 24",   category:"criminal", short:"Confession caused by inducement, threat or promise — when irrelevant in criminal proceeding.", type:"iea", keywords:["iea","confession","involuntary","inducement","threat"] },
  { id:"iea_25",   title:"IEA Section 25",   category:"criminal", short:"Confession to police officer not to be proved.", type:"iea", keywords:["iea","confession","police","inadmissible"] },
  { id:"iea_26",   title:"IEA Section 26",   category:"criminal", short:"Confession by accused while in custody of police not to be proved against him.", type:"iea", keywords:["iea","confession","custody","police","magistrate"] },
  { id:"iea_27",   title:"IEA Section 27",   category:"criminal", short:"How much of information received from accused may be proved — discovery of fact.", type:"iea", keywords:["iea","discovery","accused","fact","information"] },
  { id:"iea_28",   title:"IEA Section 28",   category:"criminal", short:"Confession made after removal of impression caused by inducement, threat or promise — relevant.", type:"iea", keywords:["iea","confession","inducement","removed","relevant"] },
  { id:"iea_29",   title:"IEA Section 29",   category:"criminal", short:"Confession otherwise relevant not to become irrelevant because of promise of secrecy, etc.", type:"iea", keywords:["iea","confession","secrecy","relevant"] },
  { id:"iea_30",   title:"IEA Section 30",   category:"criminal", short:"Consideration of proved confession affecting person making it and others jointly under trial for same offence.", type:"iea", keywords:["iea","confession","joint trial","co-accused"] },
  { id:"iea_31",   title:"IEA Section 31",   category:"criminal", short:"Admissions not conclusive proof, but may estop.", type:"iea", keywords:["iea","admission","estoppel","conclusive"] },
  { id:"iea_32",   title:"IEA Section 32",   category:"criminal", short:"Cases in which statement of relevant fact by person who is dead or cannot be found, etc., is relevant.", type:"iea", keywords:["iea","dying declaration","dead person","statement","relevant"] },
  { id:"iea_33",   title:"IEA Section 33",   category:"criminal", short:"Relevancy of certain evidence for proving, in subsequent proceeding, the truth of facts therein stated.", type:"iea", keywords:["iea","evidence","subsequent proceeding","relevant"] },
  { id:"iea_34",   title:"IEA Section 34",   category:"criminal", short:"Entries in books of account including those maintained in electronic form — when relevant.", type:"iea", keywords:["iea","books of account","entries","electronic","relevant"] },
  { id:"iea_35",   title:"IEA Section 35",   category:"criminal", short:"Relevancy of entry in public record or an electronic record made in performance of duty.", type:"iea", keywords:["iea","public record","electronic record","duty","relevant"] },
  { id:"iea_36",   title:"IEA Section 36",   category:"criminal", short:"Relevancy of statements in maps, charts and plans.", type:"iea", keywords:["iea","maps","charts","plans","relevant"] },
  { id:"iea_37",   title:"IEA Section 37",   category:"criminal", short:"Relevancy of statement as to fact of public nature, contained in certain Acts or notifications.", type:"iea", keywords:["iea","public nature","Acts","notification","relevant"] },
  { id:"iea_38",   title:"IEA Section 38",   category:"criminal", short:"Relevancy of statements as to any law contained in law-books.", type:"iea", keywords:["iea","law-books","statement","relevant"] },
  { id:"iea_39",   title:"IEA Section 39",   category:"criminal", short:"What evidence to be given when statement forms part of a conversation, document, electronic record, book or series of letters or papers.", type:"iea", keywords:["iea","conversation","document","electronic record","evidence"] },
  { id:"iea_40",   title:"IEA Section 40",   category:"criminal", short:"Previous judgments relevant to bar a second suit or trial.", type:"iea", keywords:["iea","judgment","previous","bar","res judicata"] },
  { id:"iea_41",   title:"IEA Section 41",   category:"criminal", short:"Relevancy of certain judgments in probate, etc., jurisdiction.", type:"iea", keywords:["iea","judgment","probate","relevant"] },
  { id:"iea_42",   title:"IEA Section 42",   category:"criminal", short:"Relevancy and effect of judgments, orders or decrees, other than those mentioned in section 41.", type:"iea", keywords:["iea","judgment","order","decree","relevant"] },
  { id:"iea_43",   title:"IEA Section 43",   category:"criminal", short:"Judgments, etc., other than those mentioned in sections 40 to 42, when relevant.", type:"iea", keywords:["iea","judgment","relevant","fraud","collusion"] },
  { id:"iea_44",   title:"IEA Section 44",   category:"criminal", short:"Fraud or collusion in obtaining judgment, or incompetency of Court, may be proved.", type:"iea", keywords:["iea","fraud","collusion","judgment","incompetency"] },
  { id:"iea_45",   title:"IEA Section 45",   category:"criminal", short:"Opinions of experts — facts relating to foreign law, science, art, handwriting, finger impressions.", type:"iea", keywords:["iea","expert opinion","science","handwriting","forensic"] },
  { id:"iea_46",   title:"IEA Section 46",   category:"criminal", short:"Facts bearing upon opinions of experts.", type:"iea", keywords:["iea","expert","opinion","facts"] },
  { id:"iea_47",   title:"IEA Section 47",   category:"criminal", short:"Opinion as to handwriting, when relevant.", type:"iea", keywords:["iea","handwriting","opinion","relevant"] },
  { id:"iea_47a",  title:"IEA Section 47A",  category:"criminal", short:"Opinion as to digital signature when relevant.", type:"iea", keywords:["iea","digital signature","opinion","relevant"] },
  { id:"iea_48",   title:"IEA Section 48",   category:"criminal", short:"Opinion as to existence of right or custom, when relevant.", type:"iea", keywords:["iea","right","custom","opinion","relevant"] },
  { id:"iea_49",   title:"IEA Section 49",   category:"criminal", short:"Opinion as to usages, tenets, etc., when relevant.", type:"iea", keywords:["iea","usages","tenets","opinion","relevant"] },
  { id:"iea_50",   title:"IEA Section 50",   category:"criminal", short:"Opinion on relationship, when relevant.", type:"iea", keywords:["iea","relationship","opinion","relevant"] },
  { id:"iea_51",   title:"IEA Section 51",   category:"criminal", short:"Grounds of opinion, when relevant.", type:"iea", keywords:["iea","opinion","grounds","relevant"] },
  { id:"iea_52",   title:"IEA Section 52",   category:"criminal", short:"In civil cases character to prove conduct imputed — irrelevant.", type:"iea", keywords:["iea","character","civil","irrelevant","conduct"] },
  { id:"iea_53",   title:"IEA Section 53",   category:"criminal", short:"In criminal cases, previous good character relevant.", type:"iea", keywords:["iea","character","criminal","good character","relevant"] },
  { id:"iea_53a",  title:"IEA Section 53A",  category:"criminal", short:"Evidence of character or previous sexual experience not relevant in certain cases.", type:"iea", keywords:["iea","character","sexual experience","rape","irrelevant"] },
  { id:"iea_54",   title:"IEA Section 54",   category:"criminal", short:"Previous bad character not relevant, except in reply.", type:"iea", keywords:["iea","bad character","previous","relevant","reply"] },
  { id:"iea_55",   title:"IEA Section 55",   category:"criminal", short:"Character as affecting damages.", type:"iea", keywords:["iea","character","damages"] },
  { id:"iea_56",   title:"IEA Section 56",   category:"criminal", short:"Fact judicially noticeable need not be proved.", type:"iea", keywords:["iea","judicial notice","proof","fact"] },
  { id:"iea_57",   title:"IEA Section 57",   category:"criminal", short:"Facts of which Court must take judicial notice.", type:"iea", keywords:["iea","judicial notice","court","fact"] },
  { id:"iea_58",   title:"IEA Section 58",   category:"criminal", short:"Facts admitted need not be proved.", type:"iea", keywords:["iea","admitted","proof","fact"] },
  { id:"iea_59",   title:"IEA Section 59",   category:"criminal", short:"Proof of facts by oral evidence.", type:"iea", keywords:["iea","oral evidence","proof","facts"] },
  { id:"iea_60",   title:"IEA Section 60",   category:"criminal", short:"Oral evidence must be direct — what witness personally saw, heard, or perceived.", type:"iea", keywords:["iea","oral evidence","direct","witness","personal"] },
  { id:"iea_61",   title:"IEA Section 61",   category:"criminal", short:"Proof of contents of documents.", type:"iea", keywords:["iea","document","contents","proof"] },
  { id:"iea_62",   title:"IEA Section 62",   category:"criminal", short:"Primary evidence — the document itself produced for inspection.", type:"iea", keywords:["iea","primary evidence","document","inspection"] },
  { id:"iea_63",   title:"IEA Section 63",   category:"criminal", short:"Secondary evidence — copies, counterparts, oral accounts of document contents.", type:"iea", keywords:["iea","secondary evidence","copies","document"] },
  { id:"iea_64",   title:"IEA Section 64",   category:"criminal", short:"Proof of documents by primary evidence.", type:"iea", keywords:["iea","primary evidence","document","proof"] },
  { id:"iea_65",   title:"IEA Section 65",   category:"criminal", short:"Cases in which secondary evidence relating to documents may be given.", type:"iea", keywords:["iea","secondary evidence","document","admissibility"] },
  { id:"iea_65a",  title:"IEA Section 65A",  category:"criminal", short:"Special provisions as to evidence relating to electronic record.", type:"iea", keywords:["iea","electronic record","evidence","special provision"] },
  { id:"iea_65b",  title:"IEA Section 65B",  category:"criminal", short:"Admissibility of electronic records — certificate requirement for admissibility.", type:"iea", keywords:["iea","electronic evidence","digital","certificate","admissibility"] },
  { id:"iea_66",   title:"IEA Section 66",   category:"criminal", short:"Rules as to notice to produce.", type:"iea", keywords:["iea","notice","produce","document"] },
  { id:"iea_67",   title:"IEA Section 67",   category:"criminal", short:"Proof of signature and handwriting of person alleged to have signed or written document produced.", type:"iea", keywords:["iea","signature","handwriting","proof","document"] },
  { id:"iea_67a",  title:"IEA Section 67A",  category:"criminal", short:"Proof as to digital signature.", type:"iea", keywords:["iea","digital signature","proof"] },
  { id:"iea_68",   title:"IEA Section 68",   category:"criminal", short:"Proof of execution of document required by law to be attested.", type:"iea", keywords:["iea","execution","attested","document","proof"] },
  { id:"iea_69",   title:"IEA Section 69",   category:"criminal", short:"Proof where no attesting witness found.", type:"iea", keywords:["iea","attesting witness","proof","document"] },
  { id:"iea_70",   title:"IEA Section 70",   category:"criminal", short:"Admission of execution by party to attested document.", type:"iea", keywords:["iea","admission","execution","attested","document"] },
  { id:"iea_71",   title:"IEA Section 71",   category:"criminal", short:"Proof when attesting witness denies the execution.", type:"iea", keywords:["iea","attesting witness","denies","execution","proof"] },
  { id:"iea_72",   title:"IEA Section 72",   category:"criminal", short:"Proof of document not required by law to be attested.", type:"iea", keywords:["iea","document","unattested","proof"] },
  { id:"iea_73",   title:"IEA Section 73",   category:"criminal", short:"Comparison of signature, writing or seal with others admitted or proved.", type:"iea", keywords:["iea","comparison","signature","writing","seal"] },
  { id:"iea_73a",  title:"IEA Section 73A",  category:"criminal", short:"Proof as to verification of digital signature.", type:"iea", keywords:["iea","digital signature","verification","proof"] },
  { id:"iea_74",   title:"IEA Section 74",   category:"criminal", short:"Public documents — documents forming Acts, records of courts, public officers, etc.", type:"iea", keywords:["iea","public document","Acts","records","court"] },
  { id:"iea_75",   title:"IEA Section 75",   category:"criminal", short:"Private documents — all other documents are private.", type:"iea", keywords:["iea","private document"] },
  { id:"iea_76",   title:"IEA Section 76",   category:"criminal", short:"Certified copies of public documents.", type:"iea", keywords:["iea","certified copy","public document"] },
  { id:"iea_77",   title:"IEA Section 77",   category:"criminal", short:"Proof of documents by production of certified copies.", type:"iea", keywords:["iea","certified copy","proof","document"] },
  { id:"iea_78",   title:"IEA Section 78",   category:"criminal", short:"Proof of other official documents.", type:"iea", keywords:["iea","official document","proof"] },
  { id:"iea_79",   title:"IEA Section 79",   category:"criminal", short:"Presumption as to genuineness of certified copies.", type:"iea", keywords:["iea","presumption","certified copy","genuineness"] },
  { id:"iea_80",   title:"IEA Section 80",   category:"criminal", short:"Presumption as to documents produced as record of evidence.", type:"iea", keywords:["iea","presumption","record","evidence"] },
  { id:"iea_81",   title:"IEA Section 81",   category:"criminal", short:"Presumption as to Gazettes, newspapers, private Acts of Parliament and other documents.", type:"iea", keywords:["iea","presumption","gazette","newspaper","Acts"] },
  { id:"iea_81a",  title:"IEA Section 81A",  category:"criminal", short:"Presumption as to Gazettes in electronic forms.", type:"iea", keywords:["iea","presumption","gazette","electronic"] },
  { id:"iea_82",   title:"IEA Section 82",   category:"criminal", short:"Presumption as to document admissible in England without proof of seal or signature.", type:"iea", keywords:["iea","presumption","England","seal","signature"] },
  { id:"iea_83",   title:"IEA Section 83",   category:"criminal", short:"Presumption as to maps or plans made by authority of Government.", type:"iea", keywords:["iea","presumption","maps","plans","government"] },
  { id:"iea_84",   title:"IEA Section 84",   category:"criminal", short:"Presumption as to collections of laws and reports of decisions.", type:"iea", keywords:["iea","presumption","law books","reports"] },
  { id:"iea_85",   title:"IEA Section 85",   category:"criminal", short:"Presumption as to power-of-attorney.", type:"iea", keywords:["iea","presumption","power of attorney"] },
  { id:"iea_85a",  title:"IEA Section 85A",  category:"criminal", short:"Presumption as to electronic agreements.", type:"iea", keywords:["iea","presumption","electronic agreement","contract"] },
  { id:"iea_85b",  title:"IEA Section 85B",  category:"criminal", short:"Presumption as to electronic records and digital signatures.", type:"iea", keywords:["iea","presumption","electronic records","digital signature"] },
  { id:"iea_85c",  title:"IEA Section 85C",  category:"criminal", short:"Presumption as to Digital Signature Certificates.", type:"iea", keywords:["iea","presumption","digital signature certificate"] },
  { id:"iea_86",   title:"IEA Section 86",   category:"criminal", short:"Presumption as to certified copies of foreign judicial records.", type:"iea", keywords:["iea","presumption","foreign","judicial records","certified copy"] },
  { id:"iea_87",   title:"IEA Section 87",   category:"criminal", short:"Presumption as to books, maps and charts.", type:"iea", keywords:["iea","presumption","books","maps","charts"] },
  { id:"iea_88",   title:"IEA Section 88",   category:"criminal", short:"Presumption as to telegraphic messages.", type:"iea", keywords:["iea","presumption","telegram","message"] },
  { id:"iea_88a",  title:"IEA Section 88A",  category:"criminal", short:"Presumption as to electronic messages.", type:"iea", keywords:["iea","presumption","electronic message","email"] },
  { id:"iea_89",   title:"IEA Section 89",   category:"criminal", short:"Presumption as to due execution, etc. of documents not produced.", type:"iea", keywords:["iea","presumption","execution","document not produced"] },
  { id:"iea_90",   title:"IEA Section 90",   category:"criminal", short:"Presumption as to documents thirty years old.", type:"iea", keywords:["iea","presumption","30 years","old document","ancient"] },
  { id:"iea_90a",  title:"IEA Section 90A",  category:"criminal", short:"Presumption as to electronic records five years old.", type:"iea", keywords:["iea","presumption","electronic record","5 years"] },
  { id:"iea_91",   title:"IEA Section 91",   category:"criminal", short:"Evidence of terms of contracts, grants and other dispositions of property reduced to form of document.", type:"iea", keywords:["iea","contract","grant","document","evidence"] },
  { id:"iea_92",   title:"IEA Section 92",   category:"criminal", short:"Exclusion of evidence of oral agreement.", type:"iea", keywords:["iea","oral agreement","exclusion","evidence"] },
  { id:"iea_93",   title:"IEA Section 93",   category:"criminal", short:"Exclusion of evidence to explain or amend ambiguous document.", type:"iea", keywords:["iea","ambiguous document","exclusion","evidence"] },
  { id:"iea_94",   title:"IEA Section 94",   category:"criminal", short:"Exclusion of evidence against application of document to existing facts.", type:"iea", keywords:["iea","document","existing facts","exclusion"] },
  { id:"iea_95",   title:"IEA Section 95",   category:"criminal", short:"Evidence as to document unmeaning in reference to existing facts.", type:"iea", keywords:["iea","document","unmeaning","existing facts"] },
  { id:"iea_96",   title:"IEA Section 96",   category:"criminal", short:"Evidence as to application of language which can apply to one only of several persons.", type:"iea", keywords:["iea","language","persons","evidence"] },
  { id:"iea_97",   title:"IEA Section 97",   category:"criminal", short:"Evidence as to application of language to one of two sets of facts, to neither of which the whole correctly applies.", type:"iea", keywords:["iea","language","ambiguity","facts","evidence"] },
  { id:"iea_98",   title:"IEA Section 98",   category:"criminal", short:"Evidence as to meaning of illegible characters, etc.", type:"iea", keywords:["iea","illegible","characters","evidence","meaning"] },
  { id:"iea_99",   title:"IEA Section 99",   category:"criminal", short:"Who may give evidence of agreement varying term of document.", type:"iea", keywords:["iea","agreement","document","evidence","third party"] },
  { id:"iea_100",  title:"IEA Section 100",  category:"criminal", short:"Saving of provisions of Indian Succession Act relating to wills.", type:"iea", keywords:["iea","succession","wills","saving"] },
  { id:"iea_101",  title:"IEA Section 101",  category:"criminal", short:"Burden of proof — the party asserting a fact must prove it.", type:"iea", keywords:["iea","burden of proof","asserting","fact"] },
  { id:"iea_102",  title:"IEA Section 102",  category:"criminal", short:"On whom burden of proof lies — whoever desires the court to act must prove the fact.", type:"iea", keywords:["iea","burden","proof","court","party"] },
  { id:"iea_103",  title:"IEA Section 103",  category:"criminal", short:"Burden of proof as to particular fact — on the party asserting that fact.", type:"iea", keywords:["iea","burden","particular fact","asserting"] },
  { id:"iea_104",  title:"IEA Section 104",  category:"criminal", short:"Burden of proving fact to be proved to make evidence admissible.", type:"iea", keywords:["iea","burden","admissibility","evidence","proof"] },
  { id:"iea_105",  title:"IEA Section 105",  category:"criminal", short:"Burden of proving that case of accused comes within exceptions — private defence, etc.", type:"iea", keywords:["iea","burden","exception","accused","private defence"] },
  { id:"iea_106",  title:"IEA Section 106",  category:"criminal", short:"Burden of proving fact especially within knowledge of accused.", type:"iea", keywords:["iea","burden","knowledge","accused"] },
  { id:"iea_107",  title:"IEA Section 107",  category:"criminal", short:"Burden of proving death of person known to have been alive within thirty years.", type:"iea", keywords:["iea","burden","death","30 years","alive"] },
  { id:"iea_108",  title:"IEA Section 108",  category:"criminal", short:"Burden of proving that person is alive who has not been heard of for seven years.", type:"iea", keywords:["iea","burden","alive","7 years","missing"] },
  { id:"iea_109",  title:"IEA Section 109",  category:"criminal", short:"Burden of proof as to relationship in cases of partners, landlord and tenant, principal and agent.", type:"iea", keywords:["iea","burden","relationship","partner","landlord","agent"] },
  { id:"iea_110",  title:"IEA Section 110",  category:"criminal", short:"Burden of proof as to ownership.", type:"iea", keywords:["iea","burden","ownership","possession","proof"] },
  { id:"iea_111",  title:"IEA Section 111",  category:"criminal", short:"Proof of good faith in transactions where one party is in relation of active confidence.", type:"iea", keywords:["iea","good faith","active confidence","proof","transaction"] },
  { id:"iea_111a", title:"IEA Section 111A", category:"criminal", short:"Presumption as to certain offences — terrorist acts, armed rebellion, etc.", type:"iea", keywords:["iea","presumption","terrorist","armed rebellion","offences"] },
  { id:"iea_112",  title:"IEA Section 112",  category:"criminal", short:"Birth during marriage — conclusive proof of legitimacy.", type:"iea", keywords:["iea","legitimacy","birth","marriage","conclusive"] },
  { id:"iea_113",  title:"IEA Section 113",  category:"criminal", short:"Proof of cession of territory.", type:"iea", keywords:["iea","cession","territory","proof"] },
  { id:"iea_113a", title:"IEA Section 113A", category:"criminal", short:"Presumption as to abetment of suicide by a married woman.", type:"iea", keywords:["iea","presumption","suicide","married woman","abetment"] },
  { id:"iea_113b", title:"IEA Section 113B", category:"criminal", short:"Presumption as to dowry death — court shall presume if shown harassment within 7 years of marriage.", type:"iea", keywords:["iea","dowry death","presumption","harassment","marriage"] },
  { id:"iea_114",  title:"IEA Section 114",  category:"criminal", short:"Court may presume existence of certain facts.", type:"iea", keywords:["iea","court","presume","facts","may presume"] },
  { id:"iea_114a", title:"IEA Section 114A", category:"criminal", short:"Presumption as to absence of consent in certain prosecution for rape.", type:"iea", keywords:["iea","presumption","consent","rape","prosecution"] },
  { id:"iea_115",  title:"IEA Section 115",  category:"criminal", short:"Estoppel — when one person has caused another to believe a thing to be true.", type:"iea", keywords:["iea","estoppel","representation","belief","act"] },
  { id:"iea_116",  title:"IEA Section 116",  category:"criminal", short:"Estoppel of tenant; and of licensee of person in possession.", type:"iea", keywords:["iea","estoppel","tenant","licensee","possession"] },
  { id:"iea_117",  title:"IEA Section 117",  category:"criminal", short:"Estoppel of acceptor of bill of exchange, bailee or licensee.", type:"iea", keywords:["iea","estoppel","bill of exchange","bailee","licensee"] },
  { id:"iea_118",  title:"IEA Section 118",  category:"criminal", short:"Who may testify — all persons competent witnesses unless unable to understand questions.", type:"iea", keywords:["iea","witness","competent","testify","child"] },
  { id:"iea_119",  title:"IEA Section 119",  category:"criminal", short:"Witness unable to communicate verbally — allowed to give evidence by other means.", type:"iea", keywords:["iea","witness","verbal","communication","mute"] },
  { id:"iea_120",  title:"IEA Section 120",  category:"criminal", short:"Parties to civil suit, and their wives or husbands; husband or wife of person under criminal trial.", type:"iea", keywords:["iea","party","civil suit","husband","wife","witness"] },
  { id:"iea_121",  title:"IEA Section 121",  category:"criminal", short:"Judges and Magistrates — not compellable to answer questions as to conduct in court.", type:"iea", keywords:["iea","judge","magistrate","compellable","privilege"] },
  { id:"iea_122",  title:"IEA Section 122",  category:"criminal", short:"Communications during marriage — privileged and not disclosable in court.", type:"iea", keywords:["iea","marriage","communication","privilege","confidential"] },
  { id:"iea_123",  title:"IEA Section 123",  category:"criminal", short:"Evidence as to affairs of State — no one permitted to give evidence derived from unpublished official records.", type:"iea", keywords:["iea","state","affairs","official records","privilege"] },
  { id:"iea_124",  title:"IEA Section 124",  category:"criminal", short:"Official communications — public officer not compelled to disclose official communication.", type:"iea", keywords:["iea","official communication","public officer","privilege"] },
  { id:"iea_125",  title:"IEA Section 125",  category:"criminal", short:"Information as to commission of offences — Magistrate or police officer not compelled to disclose source.", type:"iea", keywords:["iea","information","offence","magistrate","police","source"] },
  { id:"iea_126",  title:"IEA Section 126",  category:"criminal", short:"Professional communications — barrister or attorney not permitted to disclose client communications.", type:"iea", keywords:["iea","professional communication","advocate","client","privilege"] },
  { id:"iea_127",  title:"IEA Section 127",  category:"criminal", short:"Section 126 to apply to interpreters and clerks of barristers, etc.", type:"iea", keywords:["iea","interpreter","clerk","privilege","advocate"] },
  { id:"iea_128",  title:"IEA Section 128",  category:"criminal", short:"Privilege not waived by volunteering evidence.", type:"iea", keywords:["iea","privilege","waiver","evidence","voluntarily"] },
  { id:"iea_129",  title:"IEA Section 129",  category:"criminal", short:"Confidential communications with legal advisers — not compelled to disclose.", type:"iea", keywords:["iea","confidential","legal adviser","privilege","communication"] },
  { id:"iea_130",  title:"IEA Section 130",  category:"criminal", short:"Production of title-deeds of witness not a party — not compelled.", type:"iea", keywords:["iea","title deed","witness","production","compelled"] },
  { id:"iea_131",  title:"IEA Section 131",  category:"criminal", short:"Production of documents or electronic records which another person, having possession, could refuse to produce.", type:"iea", keywords:["iea","document","electronic record","production","refuse"] },
  { id:"iea_132",  title:"IEA Section 132",  category:"criminal", short:"Witness not excused from answering on ground that answer will criminate — answers protected.", type:"iea", keywords:["iea","self-incrimination","witness","answer","compulsion"] },
  { id:"iea_133",  title:"IEA Section 133",  category:"criminal", short:"Accomplice — competent witness; conviction not illegal merely for uncorroborated accomplice testimony.", type:"iea", keywords:["iea","accomplice","witness","corroboration","competent"] },
  { id:"iea_134",  title:"IEA Section 134",  category:"criminal", short:"Number of witnesses — no particular number required to prove a fact.", type:"iea", keywords:["iea","witnesses","number","proof","fact"] },
  { id:"iea_135",  title:"IEA Section 135",  category:"criminal", short:"Order of production and examination of witnesses.", type:"iea", keywords:["iea","witness","order","production","examination"] },
  { id:"iea_136",  title:"IEA Section 136",  category:"criminal", short:"Judge to decide as to admissibility of evidence.", type:"iea", keywords:["iea","judge","admissibility","evidence","decide"] },
  { id:"iea_137",  title:"IEA Section 137",  category:"criminal", short:"Examination-in-chief — first examination of witness by party calling them.", type:"iea", keywords:["iea","examination-in-chief","witness","examination"] },
  { id:"iea_138",  title:"IEA Section 138",  category:"criminal", short:"Order of examinations — examination-in-chief, cross-examination, re-examination.", type:"iea", keywords:["iea","examination","cross-examination","re-examination","order"] },
  { id:"iea_139",  title:"IEA Section 139",  category:"criminal", short:"Cross-examination of person called to produce a document.", type:"iea", keywords:["iea","cross-examination","document","produce"] },
  { id:"iea_140",  title:"IEA Section 140",  category:"criminal", short:"Witnesses to character.", type:"iea", keywords:["iea","character","witness"] },
  { id:"iea_141",  title:"IEA Section 141",  category:"criminal", short:"Leading questions — questions that suggest the answer desired.", type:"iea", keywords:["iea","leading question","examination","suggest"] },
  { id:"iea_142",  title:"IEA Section 142",  category:"criminal", short:"When leading questions must not be asked — in examination-in-chief or re-examination.", type:"iea", keywords:["iea","leading question","not allowed","examination-in-chief"] },
  { id:"iea_143",  title:"IEA Section 143",  category:"criminal", short:"When leading questions may be asked — in cross-examination.", type:"iea", keywords:["iea","leading question","allowed","cross-examination"] },
  { id:"iea_144",  title:"IEA Section 144",  category:"criminal", short:"Evidence as to matters in writing.", type:"iea", keywords:["iea","writing","document","evidence"] },
  { id:"iea_145",  title:"IEA Section 145",  category:"criminal", short:"Cross-examination as to previous statements in writing.", type:"iea", keywords:["iea","cross-examination","previous statement","writing"] },
  { id:"iea_146",  title:"IEA Section 146",  category:"criminal", short:"Questions lawful in cross-examination — testing veracity, discovering who the witness is.", type:"iea", keywords:["iea","cross-examination","lawful questions","veracity"] },
  { id:"iea_147",  title:"IEA Section 147",  category:"criminal", short:"When witness to be compelled to answer.", type:"iea", keywords:["iea","witness","compelled","answer"] },
  { id:"iea_148",  title:"IEA Section 148",  category:"criminal", short:"Court to decide when question shall be asked and when witness compelled to answer.", type:"iea", keywords:["iea","court","question","compelled","answer"] },
  { id:"iea_149",  title:"IEA Section 149",  category:"criminal", short:"Question not to be asked without reasonable grounds.", type:"iea", keywords:["iea","question","reasonable grounds","cross-examination"] },
  { id:"iea_150",  title:"IEA Section 150",  category:"criminal", short:"Procedure of Court in case of question being asked without reasonable grounds.", type:"iea", keywords:["iea","court","procedure","reasonable grounds"] },
  { id:"iea_151",  title:"IEA Section 151",  category:"criminal", short:"Indecent and scandalous questions — Court may forbid.", type:"iea", keywords:["iea","indecent","scandalous","question","court"] },
  { id:"iea_152",  title:"IEA Section 152",  category:"criminal", short:"Questions intended to insult or annoy — Court may forbid.", type:"iea", keywords:["iea","insult","annoy","question","court"] },
  { id:"iea_153",  title:"IEA Section 153",  category:"criminal", short:"Exclusion of evidence to contradict answers to questions testing veracity.", type:"iea", keywords:["iea","veracity","contradict","exclusion","evidence"] },
  { id:"iea_154",  title:"IEA Section 154",  category:"criminal", short:"Question by party to his own witness — hostile witness procedure.", type:"iea", keywords:["iea","hostile witness","own party","cross-examination"] },
  { id:"iea_155",  title:"IEA Section 155",  category:"criminal", short:"Impeaching credit of witness.", type:"iea", keywords:["iea","credit","witness","impeach"] },
  { id:"iea_156",  title:"IEA Section 156",  category:"criminal", short:"Question tending to corroborate evidence of relevant fact, admissible.", type:"iea", keywords:["iea","corroboration","evidence","relevant","admissible"] },
  { id:"iea_157",  title:"IEA Section 157",  category:"criminal", short:"Former statements of witness may be proved to corroborate later testimony as to same fact.", type:"iea", keywords:["iea","former statement","corroborate","testimony","witness"] },
  { id:"iea_158",  title:"IEA Section 158",  category:"criminal", short:"What matters may be proved in connection with proved statement relevant under section 32 or 33.", type:"iea", keywords:["iea","proved statement","section 32","section 33"] },
  { id:"iea_159",  title:"IEA Section 159",  category:"criminal", short:"Refreshing memory — witness may refresh memory by referring to any writing made at the time.", type:"iea", keywords:["iea","refresh memory","writing","witness","document"] },
  { id:"iea_160",  title:"IEA Section 160",  category:"criminal", short:"Testimony to facts stated in document mentioned in section 159.", type:"iea", keywords:["iea","testimony","document","section 159","memory"] },
  { id:"iea_161",  title:"IEA Section 161",  category:"criminal", short:"Right of adverse party as to writing used to refresh memory.", type:"iea", keywords:["iea","adverse party","writing","memory","right"] },
  { id:"iea_162",  title:"IEA Section 162",  category:"criminal", short:"Production of documents — witness not obliged to produce if not entitled to refuse.", type:"iea", keywords:["iea","production","document","witness","obliged"] },
  { id:"iea_163",  title:"IEA Section 163",  category:"criminal", short:"Giving, as evidence, of document called for and produced on notice.", type:"iea", keywords:["iea","document","notice","evidence","produced"] },
  { id:"iea_164",  title:"IEA Section 164",  category:"criminal", short:"Using, as evidence, of document production of which was refused on notice.", type:"iea", keywords:["iea","document","refused","evidence","notice"] },
  { id:"iea_165",  title:"IEA Section 165",  category:"criminal", short:"Judge's power to put questions or order production of any document or thing.", type:"iea", keywords:["iea","judge","power","questions","production","document"] },
  { id:"iea_166",  title:"IEA Section 166",  category:"criminal", short:"Power of jury or assessors to put questions.", type:"iea", keywords:["iea","jury","assessor","questions","power"] },
  { id:"iea_167",  title:"IEA Section 167",  category:"criminal", short:"No new trial for improper admission or rejection of evidence.", type:"iea", keywords:["iea","new trial","improper admission","rejection","evidence"] },

  // ══════════════════════════════════════════════════════════════
  //  🔴 CRIMINAL LAW — NIA Act (National Investigation Agency Act, 2008)
  //  All 26 sections + Schedule — Source: MHA / AdvocateKhoj / IndianKanoon
  // ══════════════════════════════════════════════════════════════
  // CHAPTER I — PRELIMINARY
  { id:"nia_1",  title:"NIA Act Section 1",  category:"criminal", short:"Short title, extent and application — Act called the National Investigation Agency Act, 2008; extends to whole of India and applies to persons committing scheduled offences abroad against Indian citizens or interests.", type:"nia", keywords:["nia","national investigation agency","title","extent","application","commencement"] },
  { id:"nia_2",  title:"NIA Act Section 2",  category:"criminal", short:"Definitions — 'Agency' means NIA constituted under Section 3; 'Code' means CrPC 1973; 'High Court' means HC within whose jurisdiction Special Court is situated; 'Public Prosecutor' means PP/APP/Special PP; 'Scheduled Offence' means offence specified in the Schedule.", type:"nia", keywords:["nia","definitions","agency","scheduled offences","public prosecutor","high court","code"] },
  // CHAPTER II — NATIONAL INVESTIGATION AGENCY
  { id:"nia_3",  title:"NIA Act Section 3",  category:"criminal", short:"Constitution of National Investigation Agency — Central Government may constitute a special agency called the NIA for investigation and prosecution of offences under Acts in the Schedule; NIA officers have police powers throughout India and (post-2019 amendment) outside India subject to international treaty.", type:"nia", keywords:["nia","constitution","central government","police powers","scheduled offences","investigation"] },
  { id:"nia_4",  title:"NIA Act Section 4",  category:"criminal", short:"Superintendence of National Investigation Agency — superintendence of NIA vests in Central Government; administration vests in a Director-General appointed by Central Government who exercises powers equivalent to a Director-General of Police.", type:"nia", keywords:["nia","superintendence","administration","director general","central government"] },
  // CHAPTER III — INVESTIGATION BY THE NIA
  { id:"nia_5",  title:"NIA Act Section 5",  category:"criminal", short:"Manner of constitution of Agency and conditions of service of members — Agency shall be constituted as prescribed; conditions of service of officers and members governed by rules made by Central Government.", type:"nia", keywords:["nia","constitution","conditions of service","members","officers","rules"] },
  { id:"nia_6",  title:"NIA Act Section 6",  category:"criminal", short:"Investigation of Scheduled Offences — on receipt of information about a scheduled offence, officer-in-charge of police station must forward report to State Government, which forwards to Central Government; Central Government may direct NIA to investigate; NIA may also suo motu take up investigation on Central Government direction.", type:"nia", keywords:["nia","investigation","scheduled offences","state government","central government","suo motu","police station"] },
  { id:"nia_7",  title:"NIA Act Section 7",  category:"criminal", short:"Power to transfer investigation to State Government — Central Government may, at any stage, direct that a case being investigated by NIA be transferred to the State Government for investigation and trial.", type:"nia", keywords:["nia","transfer","state government","investigation","central government"] },
  { id:"nia_8",  title:"NIA Act Section 8",  category:"criminal", short:"Power to investigate connected offences — NIA officer investigating a scheduled offence may also investigate any other offence which the accused is alleged to have committed, if the offence is connected with the scheduled offence.", type:"nia", keywords:["nia","connected offences","investigation","scheduled offences","accused"] },
  { id:"nia_9",  title:"NIA Act Section 9",  category:"criminal", short:"State Government to extend assistance to National Investigation Agency — State Government and all its officers, including police, shall extend all assistance and cooperation to NIA officers in the investigation of scheduled offences.", type:"nia", keywords:["nia","state government","assistance","cooperation","police","investigation"] },
  { id:"nia_10", title:"NIA Act Section 10", category:"criminal", short:"Power of State Government to investigate Scheduled Offences — until NIA takes up a case, the State police officer-in-charge must continue investigation; NIA officers have all powers of a police officer in connection with scheduled offences and may exercise powers of officer-in-charge of a police station.", type:"nia", keywords:["nia","state government","police powers","scheduled offences","investigation","officer-in-charge"] },
  // CHAPTER IV — SPECIAL COURTS
  { id:"nia_11", title:"NIA Act Section 11", category:"criminal", short:"Power of Central Government to constitute Special Courts — Central Government may, by notification, constitute one or more Special Courts for trial of scheduled offences for any area or areas; Special Court presided over by a Judge appointed by Central Government on recommendation of Chief Justice of the relevant High Court.", type:"nia", keywords:["nia","special court","central government","constitution","judge","appointment","trial"] },
  { id:"nia_12", title:"NIA Act Section 12", category:"criminal", short:"Place of sitting — Special Court may sit for inquiry or trial of any offence at any place other than its ordinary place of sitting if it is in the interest of justice; sittings may be held on day-to-day basis.", type:"nia", keywords:["nia","special court","place of sitting","trial","inquiry","interest of justice"] },
  { id:"nia_13", title:"NIA Act Section 13", category:"criminal", short:"Jurisdiction of Special Courts — every scheduled offence investigated by NIA shall be tried only by the Special Court within whose local jurisdiction it falls; Special Court has all powers of Court of Sessions; cases may be transferred between Special Courts by Supreme Court or High Court in the interest of justice.", type:"nia", keywords:["nia","special court","jurisdiction","scheduled offences","sessions court","transfer","supreme court","high court"] },
  { id:"nia_14", title:"NIA Act Section 14", category:"criminal", short:"Powers of Special Courts with respect to other offences — when trying a scheduled offence, Special Court may also try any other connected offence with which the accused is charged; if accused found to have committed another offence under any law, Special Court may convict and sentence for that offence as well.", type:"nia", keywords:["nia","special court","other offences","connected offences","conviction","sentence"] },
  { id:"nia_15", title:"NIA Act Section 15", category:"criminal", short:"Public Prosecutors — Central Government shall appoint a Public Prosecutor and may appoint one or more Additional Public Prosecutors for every Special Court; a person who has practised as an advocate for not less than seven years is eligible for appointment.", type:"nia", keywords:["nia","public prosecutor","additional public prosecutor","special court","advocate","appointment","central government"] },
  { id:"nia_16", title:"NIA Act Section 16", category:"criminal", short:"Procedure and powers of Special Courts — Special Court shall be deemed to be a Court of Session and shall follow the procedure prescribed for trial of warrant cases by a Magistrate under CrPC; Special Court has all powers of Court of Session including powers relating to bail and remand.", type:"nia", keywords:["nia","special court","procedure","court of session","crpc","warrant case","bail","remand","powers"] },
  { id:"nia_17", title:"NIA Act Section 17", category:"criminal", short:"Protection of witnesses — Special Court may, on application by a witness or Public Prosecutor, take measures to keep the identity and address of a witness secret if it is in the interest of justice; Special Court may also hold proceedings in camera.", type:"nia", keywords:["nia","special court","witness protection","identity","in camera","interest of justice","public prosecutor"] },
  { id:"nia_18", title:"NIA Act Section 18", category:"criminal", short:"Sanction for prosecution — no court shall take cognizance of any offence under this Act without the previous sanction of the Central Government or the State Government, as the case may be.", type:"nia", keywords:["nia","sanction","prosecution","cognizance","central government","state government"] },
  { id:"nia_19", title:"NIA Act Section 19", category:"criminal", short:"Trial by Special Court to have precedence — trial of a scheduled offence by a Special Court shall have precedence over the trial of any other case against the accused in any other court; the other court shall not proceed with such other case until Special Court disposes of the scheduled offence.", type:"nia", keywords:["nia","special court","precedence","trial","accused","scheduled offence"] },
  { id:"nia_20", title:"NIA Act Section 20", category:"criminal", short:"Power to transfer cases to regular courts — if, after taking cognizance, a Special Court finds that the offence is not a scheduled offence, it shall transfer the case to the regular court having jurisdiction and the regular court shall proceed as if the case was originally filed before it.", type:"nia", keywords:["nia","special court","transfer","regular court","jurisdiction","cognizance","scheduled offence"] },
  { id:"nia_21", title:"NIA Act Section 21", category:"criminal", short:"Appeals — an appeal against any judgment, sentence, or order of a Special Court (not being an interlocutory order) shall lie to the High Court; appeal to be heard by a bench of two or more judges and shall be disposed of expeditiously within a period of three months.", type:"nia", keywords:["nia","appeal","high court","special court","judgment","sentence","expeditious","three months"] },
  { id:"nia_22", title:"NIA Act Section 22", category:"criminal", short:"Power of State Government to constitute Special Courts — a State Government may, with the concurrence of the Central Government, constitute a Special Court for the State for trying scheduled offences investigated by the State police; such Special Court shall follow the same procedure and have the same powers as a Central Government Special Court.", type:"nia", keywords:["nia","state government","special court","concurrence","central government","scheduled offences","state police"] },
  // CHAPTER V — MISCELLANEOUS
  { id:"nia_23", title:"NIA Act Section 23", category:"criminal", short:"Power of High Courts to make rules — the High Court may make rules for the purpose of carrying out the provisions of Chapter IV relating to Special Courts within its jurisdiction, in relation to any matter for which no provision or insufficient provision is made in this Act.", type:"nia", keywords:["nia","high court","rules","special court","chapter iv","jurisdiction"] },
  { id:"nia_24", title:"NIA Act Section 24", category:"criminal", short:"Power of Central Government to make rules — Central Government may, by notification in the Official Gazette, make rules for carrying out the provisions of this Act including rules relating to the constitution of NIA, conditions of service of members, and other procedural matters.", type:"nia", keywords:["nia","central government","rules","official gazette","notification","constitution","conditions of service"] },
  { id:"nia_25", title:"NIA Act Section 25", category:"criminal", short:"Power to remove difficulties — if any difficulty arises in giving effect to the provisions of this Act, the Central Government may, by order, make provisions not inconsistent with the Act as it deems necessary; no such order shall be made after expiry of two years from the commencement of the Act.", type:"nia", keywords:["nia","central government","remove difficulties","order","commencement","two years"] },
  { id:"nia_26", title:"NIA Act Section 26", category:"criminal", short:"Laying of rules — every rule made under this Act shall be laid before each House of Parliament while Parliament is in session; if both Houses agree to modification or annulment, the rule shall stand modified or annulled accordingly.", type:"nia", keywords:["nia","rules","parliament","laying","modification","annulment","houses of parliament"] },
  { id:"nia_sch", title:"NIA Act — The Schedule", category:"criminal", short:"Scheduled Offences — lists Acts whose offences NIA is empowered to investigate: Atomic Energy Act 1962, Unlawful Activities (Prevention) Act 1967, Anti-Hijacking Act 1982, Suppression of Unlawful Acts against Safety of Civil Aviation Act 1982, SAARC Convention (Suppression of Terrorism) Act 1993, Suppression of Unlawful Acts Against Safety of Maritime Navigation Act 2002, WMD Prohibition Act 2005, IPC Sections 121–130 & 489A–489E, and (post-2019) offences related to human trafficking, fake currency, prohibited arms, cyber-terrorism, and explosive substances.", type:"nia", keywords:["nia","schedule","scheduled offences","uapa","atomic energy","anti-hijacking","saarc","wmd","ipc","terrorism","human trafficking","cyber terrorism","fake currency","arms","explosives"] },

  // ══════════════════════════════════════════════════════════════
  //  🔴 BHARATIYA NYAYA SANHITA (BNS) 2023 — New Criminal Code
  // ══════════════════════════════════════════════════════════════
  { id:"bns_101",  title:"BNS Section 101",   category:"criminal", short:"Culpable homicide — BNS 2023 replacement for IPC 299.", type:"bns", keywords:["bns","culpable homicide","new criminal law"] },
  { id:"bns_103",  title:"BNS Section 103",   category:"criminal", short:"Punishment for murder — BNS 2023 replacement for IPC 302.", type:"bns", keywords:["bns","murder","new criminal law"] },
  { id:"bns_111",  title:"BNS Section 111",   category:"criminal", short:"Organised crime — definition and punishment including kidnapping, extortion, land grabbing.", type:"bns", keywords:["bns","organised crime","kidnapping","extortion","gang"] },
  { id:"bns_113",  title:"BNS Section 113",   category:"criminal", short:"Terrorist act — defined under BNS 2023, replaces provisions of UAPA for certain acts.", type:"bns", keywords:["bns","terrorist act","terrorism","2023"] },
  { id:"bns_152",  title:"BNS Section 152",   category:"criminal", short:"Endangering sovereignty, unity and integrity of India — replaces sedition under IPC 124A.", type:"bns", keywords:["bns","sedition","sovereignty","unity","integrity","new law"] },
  { id:"bns_316",  title:"BNS Section 316",   category:"family",   short:"Cruelty by husband or his relatives — BNS 2023 replacement of IPC 498A.", type:"bns", keywords:["bns","dowry","cruelty","husband","domestic violence"] },
  { id:"bnss_173", title:"BNSS Section 173",  category:"criminal", short:"FIR under Bharatiya Nagarik Suraksha Sanhita 2023 — information in cognizable cases.", type:"bnss", keywords:["fir","bnss","new law","cognizable"] },

  // ══════════════════════════════════════════════════════════════
  //  🔵 CIVIL LAW — Code of Civil Procedure (CPC), 1908
  // ══════════════════════════════════════════════════════════════
  { id:"cpc_s1",    title:"CPC Section 1",     category:"civil", short:"Short title, extent and commencement of Code of Civil Procedure, 1908.", type:"cpc", keywords:["cpc","title","extent","commencement"] },
  { id:"cpc_s2",    title:"CPC Section 2",     category:"civil", short:"Definitions — 'decree', 'decree-holder', 'judgment-debtor', 'mesne profits', 'order'.", type:"cpc", keywords:["cpc","definitions","decree","judgment","order"] },
  { id:"cpc_s9",    title:"CPC Section 9",     category:"civil", short:"Courts to try all civil suits — jurisdiction, unless expressly barred.", type:"cpc", keywords:["cpc","jurisdiction","civil suit","courts"] },
  { id:"cpc_s10",   title:"CPC Section 10",    category:"civil", short:"Stay of suit — if same matter pending in another court of competent jurisdiction.", type:"cpc", keywords:["cpc","stay","suit","res sub judice"] },
  { id:"cpc_s11",   title:"CPC Section 11",    category:"civil", short:"Res judicata — bar to re-litigation of issues finally decided in a prior suit.", type:"cpc", keywords:["cpc","res judicata","bar","previous decision"] },
  { id:"cpc_s13",   title:"CPC Section 13",    category:"civil", short:"When foreign judgment not conclusive — fraud, breach of natural justice etc.", type:"cpc", keywords:["cpc","foreign judgment","conclusive","exceptions"] },
  { id:"cpc_s15",   title:"CPC Section 15",    category:"civil", short:"Court in which suits to be instituted — lowest competent court.", type:"cpc", keywords:["cpc","institution","suit","lowest court"] },
  { id:"cpc_s16",   title:"CPC Section 16",    category:"civil", short:"Suits to be instituted where subject matter situate — immovable property.", type:"cpc", keywords:["cpc","immovable property","territorial jurisdiction"] },
  { id:"cpc_s19",   title:"CPC Section 19",    category:"civil", short:"Suits for compensation for wrongs to person or movable property.", type:"cpc", keywords:["cpc","compensation","wrong","movable property"] },
  { id:"cpc_s20",   title:"CPC Section 20",    category:"civil", short:"Other suits to be instituted where defendant resides or cause of action arose.", type:"cpc", keywords:["cpc","jurisdiction","defendant","cause of action"] },
  { id:"cpc_s26",   title:"CPC Section 26",    category:"civil", short:"Institution of suits — every suit commenced by filing a plaint.", type:"cpc", keywords:["cpc","plaint","institution","suit"] },
  { id:"cpc_s35",   title:"CPC Section 35",    category:"civil", short:"Costs — court's discretion to award costs; costs follow the event.", type:"cpc", keywords:["cpc","costs","award","discretion"] },
  { id:"cpc_s80",   title:"CPC Section 80",    category:"civil", short:"Notice required before suits against government or public officers — 2 months notice.", type:"cpc", keywords:["cpc","notice","government","public officer","2 months"] },
  { id:"cpc_s89",   title:"CPC Section 89",    category:"civil", short:"Settlement of disputes outside the court — mediation, conciliation, arbitration, Lok Adalat.", type:"cpc", keywords:["cpc","settlement","mediation","arbitration","lok adalat"] },
  { id:"cpc_s96",   title:"CPC Section 96",    category:"civil", short:"Appeal from original decree — right of appeal against decree of lower court.", type:"cpc", keywords:["cpc","appeal","original decree","right"] },
  { id:"cpc_s100",  title:"CPC Section 100",   category:"civil", short:"Second appeal to High Court only on substantial question of law.", type:"cpc", keywords:["cpc","second appeal","high court","law question"] },
  { id:"cpc_s114",  title:"CPC Section 114",   category:"civil", short:"Review — application for review of judgment by same court on specified grounds.", type:"cpc", keywords:["cpc","review","same court","judgment"] },
  { id:"cpc_o1",    title:"CPC Order I",       category:"civil", short:"Parties to suits — who may be joined as plaintiffs and defendants.", type:"cpc", keywords:["cpc","parties","plaintiff","defendant","joinder"] },
  { id:"cpc_o6",    title:"CPC Order VI",      category:"civil", short:"Pleadings — rules for filing plaint and written statement.", type:"cpc", keywords:["cpc","pleadings","plaint","written statement"] },
  { id:"cpc_o7",    title:"CPC Order VII",     category:"civil", short:"Plaint — particulars to be contained, rejection of plaint grounds.", type:"cpc", keywords:["cpc","plaint","particulars","rejection"] },
  { id:"cpc_o8",    title:"CPC Order VIII",    category:"civil", short:"Written statement, set-off and counter-claim — defendant's response.", type:"cpc", keywords:["cpc","written statement","set-off","counter-claim"] },
  { id:"cpc_o9",    title:"CPC Order IX",      category:"civil", short:"Appearance of parties and consequence of non-appearance — ex parte decree.", type:"cpc", keywords:["cpc","appearance","non-appearance","ex parte"] },
  { id:"cpc_o11",   title:"CPC Order XI",      category:"civil", short:"Discovery and inspection — right to inspect and take copies of documents.", type:"cpc", keywords:["cpc","discovery","inspection","documents"] },
  { id:"cpc_o14",   title:"CPC Order XIV",     category:"civil", short:"Settlement of issues — issues of law and fact framed by court.", type:"cpc", keywords:["cpc","issues","law","fact","framing"] },
  { id:"cpc_o21",   title:"CPC Order XXI",     category:"civil", short:"Execution of decrees and orders — attachment and sale of property.", type:"cpc", keywords:["cpc","execution","decree","attachment","sale"] },
  { id:"cpc_o22",   title:"CPC Order XXII",    category:"civil", short:"Death, marriage and insolvency of parties — abatement and continuance.", type:"cpc", keywords:["cpc","death","abatement","continuance","parties"] },
  { id:"cpc_o26",   title:"CPC Order XXVI",    category:"civil", short:"Commissions — to examine witnesses, investigate accounts, make partition.", type:"cpc", keywords:["cpc","commission","witness","accounts"] },
  { id:"cpc_o39",   title:"CPC Order XXXIX",   category:"civil", short:"Temporary injunctions and interlocutory orders — interim relief.", type:"cpc", keywords:["cpc","injunction","interim relief","temporary","interlocutory"] },
  { id:"cpc_o40",   title:"CPC Order XL",      category:"civil", short:"Appointment of receivers — court may appoint receiver for disputed property.", type:"cpc", keywords:["cpc","receiver","property","court appointment"] },
  { id:"cpc_o41",   title:"CPC Order XLI",     category:"civil", short:"Appeals from original decrees — procedure for first appeal.", type:"cpc", keywords:["cpc","appeal","original","first appeal","procedure"] },

  // ══════════════════════════════════════════════════════════════
  //  🔵 CIVIL LAW — Key Acts
  // ══════════════════════════════════════════════════════════════
  { id:"consumer_protection_act",   title:"Consumer Protection Act, 2019",          category:"civil",  short:"Rights and remedies for defective goods, deficient services and unfair trade practices; e-commerce included.", type:"act", keywords:["consumer","refund","defect","complaint","product liability"] },
  { id:"contract_act",              title:"Indian Contract Act, 1872",               category:"civil",  short:"Rules governing contracts, agreements, consideration, capacity, free consent, breach and remedies.", type:"act", keywords:["contract","agreement","breach","consideration","offer"] },
  { id:"limitation_act",            title:"Limitation Act, 1963",                    category:"civil",  short:"Time limits for civil suits — 3 years for most contracts; 12 years for property suits.", type:"act", keywords:["limitation","time limit","suit","legal proceedings"] },
  { id:"transfer_of_property",      title:"Transfer of Property Act, 1882",           category:"civil",  short:"Rules for transfer of immovable property — sale, mortgage, lease, gift, actionable claim.", type:"act", keywords:["property","sale","mortgage","lease","gift","transfer"] },
  { id:"registration_act",          title:"Registration Act, 1908",                  category:"civil",  short:"Compulsory registration of documents — sale deeds, leases over 1 year, gifts of immovable property.", type:"act", keywords:["registration","property","document","stamp duty"] },
  { id:"specific_relief_act",       title:"Specific Relief Act, 1963",               category:"civil",  short:"Court-ordered specific performance of contracts and recovery of possession of immovable property.", type:"act", keywords:["specific performance","contract","recovery","injunction"] },
  { id:"cpc_1908",                  title:"Code of Civil Procedure, 1908",            category:"civil",  short:"Procedure for civil suits, appeals, execution of decrees, interlocutory orders and miscellaneous applications.", type:"act", keywords:["civil suit","decree","execution","appeal","cpc"] },
  { id:"evidence_act",              title:"Indian Evidence Act, 1872",               category:"civil",  short:"Rules of evidence — admissibility, burden of proof, witnesses, documents, electronic evidence.", type:"act", keywords:["evidence","proof","witness","document","admissibility"] },
  { id:"arbitration_act",           title:"Arbitration and Conciliation Act, 1996",   category:"civil",  short:"ADR framework — domestic and international commercial arbitration; enforcement of awards.", type:"act", keywords:["arbitration","adr","dispute","settlement","mediation"] },
  { id:"tort_law",                  title:"Law of Torts (India)",                     category:"civil",  short:"Civil wrong — negligence, nuisance, defamation, trespass, strict liability, occupiers' liability.", type:"act", keywords:["tort","negligence","nuisance","civil wrong","damages"] },
  { id:"rera_act",                  title:"Real Estate Regulation Act (RERA), 2016",  category:"civil",  short:"Regulation of real estate sector; rights of home buyers; mandatory registration of projects.", type:"act", keywords:["rera","real estate","builder","home buyer","property"] },
  { id:"land_acquisition",          title:"Right to Fair Compensation Act, 2013",     category:"civil",  short:"Fair compensation for government land acquisition; consent requirement and rehabilitation provisions.", type:"act", keywords:["land acquisition","compensation","government","rehabilitation"] },
  { id:"labour_code_wages",         title:"Code on Wages, 2019",                     category:"civil",  short:"Minimum wages, equal remuneration, payment of wages on time, and bonus provisions.", type:"act", keywords:["wages","salary","minimum wage","bonus","employer"] },
  { id:"industrial_disputes_act",   title:"Industrial Disputes Act, 1947",           category:"civil",  short:"Settlement of industrial disputes, strikes, lockouts, retrenchment, layoff compensation.", type:"act", keywords:["strike","lockout","retrenchment","industrial dispute","union"] },
  { id:"maternity_benefit_act",     title:"Maternity Benefit Act, 1961",             category:"civil",  short:"26 weeks paid maternity leave, crèche facility, nursing breaks for working women.", type:"act", keywords:["maternity leave","pregnancy","women","employer"] },
  { id:"posh_act",                  title:"Sexual Harassment of Women at Workplace Act, 2013 (POSH)",  category:"civil", short:"Prevention, prohibition and redressal of sexual harassment at the workplace — ICC mandate.", type:"act", keywords:["sexual harassment","workplace","posh","women","icc","employer"] },
  { id:"epf_act",                   title:"Employees' Provident Funds Act, 1952",     category:"civil",  short:"Compulsory PF, pension and deposit-linked insurance for employees earning under Rs.15,000/month.", type:"act", keywords:["pf","epf","provident fund","pension","employee"] },
  { id:"motor_vehicles_act",        title:"Motor Vehicles Act, 1988",                category:"civil",  short:"Road safety, licensing, third-party insurance, traffic violations and accident compensation (MACT).", type:"act", keywords:["traffic","driving","accident","licence","vehicle","road"] },
  { id:"environment_act",           title:"Environment Protection Act, 1986",        category:"civil",  short:"Umbrella act for environment protection — standards, penalties, NGT, polluter pays principle.", type:"act", keywords:["environment","pollution","epa","ngt","green tribunal"] },
  { id:"mha_passport_act",          title:"Passports Act, 1967",                     category:"civil",  short:"Regulation of passports and travel documents — issuance, impoundment, revocation and offences.", type:"act", keywords:["passport","travel","impound","visa"] },
  { id:"forest_rights_act",         title:"Forest Rights Act, 2006",                 category:"civil",  short:"Rights of forest-dwelling communities over forest land, minor forest produce, habitat rights.", type:"act", keywords:["forest rights","tribal","adivasi","land","forest"] },
  { id:"vishaka",                   title:"Vishaka vs State of Rajasthan (1997)",     category:"civil",  short:"Landmark SC guidelines on sexual harassment at workplace — precursor to POSH Act.", type:"case", keywords:["sexual harassment","workplace","vishaka","women","guidelines"] },

  // ══════════════════════════════════════════════════════════════
  //  🟢 CYBER LAW — Information Technology Act, 2000 & DPDP
  // ══════════════════════════════════════════════════════════════
  { id:"it_act_1",   title:"IT Act Section 1",    category:"cyber", short:"Short title, extent, commencement and application of IT Act 2000.", type:"it_act", keywords:["it act","extent","title","commencement"] },
  { id:"it_act_2",   title:"IT Act Section 2",    category:"cyber", short:"Definitions — 'computer', 'computer network', 'data', 'electronic record', 'digital signature'.", type:"it_act", keywords:["it act","definitions","computer","network","electronic"] },
  { id:"it_act_3",   title:"IT Act Section 3",    category:"cyber", short:"Authentication of electronic records using digital signature.", type:"it_act", keywords:["it act","digital signature","authentication","electronic"] },
  { id:"it_act_4",   title:"IT Act Section 4",    category:"cyber", short:"Legal recognition of electronic records — contracts and communications.", type:"it_act", keywords:["it act","electronic record","legal recognition","contract"] },
  { id:"it_act_5",   title:"IT Act Section 5",    category:"cyber", short:"Legal recognition of digital signatures.", type:"it_act", keywords:["it act","digital signature","legal recognition"] },
  { id:"it_act_6",   title:"IT Act Section 6",    category:"cyber", short:"Use of electronic records and digital signatures in government and its agencies.", type:"it_act", keywords:["it act","government","electronic","digital signature"] },
  { id:"it_act_10a", title:"IT Act Section 10A",  category:"cyber", short:"Validity of contracts formed through electronic means.", type:"it_act", keywords:["it act","online contract","electronic","validity"] },
  { id:"it_act_43",  title:"IT Act Section 43",   category:"cyber", short:"Civil penalty for damage to computer/network — unauthorised access, virus, denial of service.", type:"it_act", keywords:["hacking","computer damage","unauthorised access","it act"] },
  { id:"it_act_43a", title:"IT Act Section 43A",  category:"cyber", short:"Body corporate handling sensitive personal data liable for compensation for negligence.", type:"it_act", keywords:["it act","data","sensitive","body corporate","negligence"] },
  { id:"it_act_44",  title:"IT Act Section 44",   category:"cyber", short:"Penalty for failing to furnish returns or maintaining books — up to Rs.5000/day.", type:"it_act", keywords:["it act","penalty","failure","returns","books"] },
  { id:"it_act_65",  title:"IT Act Section 65",   category:"cyber", short:"Tampering with computer source code — up to 3 years or Rs.2 lakh or both.", type:"it_act", keywords:["it act","source code","tampering","software"] },
  { id:"it_act_66",  title:"IT Act Section 66",   category:"cyber", short:"Computer-related offences — hacking, data theft — up to 3 years imprisonment and fine.", type:"it_act", keywords:["hacking","cyber crime","computer offence","it act"] },
  { id:"it_act_66a", title:"IT Act Section 66A",  category:"cyber", short:"Struck down by SC (Shreya Singhal 2015) — was punishing offensive online messages.", type:"it_act", keywords:["it act","66a","struck down","free speech","online"] },
  { id:"it_act_66b", title:"IT Act Section 66B",  category:"cyber", short:"Receiving stolen computer resource or communication device — up to 3 years.", type:"it_act", keywords:["stolen data","computer resources","cyber crime","it act"] },
  { id:"it_act_66c", title:"IT Act Section 66C",  category:"cyber", short:"Identity theft — using electronic signature, password or unique identification fraudulently.", type:"it_act", keywords:["identity theft","password","cyber","impersonation","it act"] },
  { id:"it_act_66d", title:"IT Act Section 66D",  category:"cyber", short:"Cheating by personation using computer resources — online fraud.", type:"it_act", keywords:["online fraud","impersonation","cyber","scam","it act"] },
  { id:"it_act_66e", title:"IT Act Section 66E",  category:"cyber", short:"Violation of privacy — capturing, publishing or transmitting private area images without consent.", type:"it_act", keywords:["privacy","images","cyber","voyeurism","it act"] },
  { id:"it_act_66f", title:"IT Act Section 66F",  category:"cyber", short:"Cyber terrorism — acts threatening unity, sovereignty, security or integrity of India.", type:"it_act", keywords:["cyber terrorism","national security","internet","it act"] },
  { id:"it_act_67",  title:"IT Act Section 67",   category:"cyber", short:"Publishing obscene material in electronic form — up to 5 years and fine.", type:"it_act", keywords:["obscene","online content","pornography","cyber","it act"] },
  { id:"it_act_67a", title:"IT Act Section 67A",  category:"cyber", short:"Publishing sexually explicit material in electronic form — up to 7 years.", type:"it_act", keywords:["it act","sexually explicit","electronic","material"] },
  { id:"it_act_67b", title:"IT Act Section 67B",  category:"cyber", short:"Publishing child pornography or sexually explicit content involving minors — up to 7 years.", type:"it_act", keywords:["child pornography","cyber crime","minors","it act"] },
  { id:"it_act_69",  title:"IT Act Section 69",   category:"cyber", short:"Power to intercept, monitor or decrypt information — sovereignty, security or public order.", type:"it_act", keywords:["surveillance","interception","government","privacy","it act"] },
  { id:"it_act_69a", title:"IT Act Section 69A",  category:"cyber", short:"Power to block public access to information — platform blocking orders.", type:"it_act", keywords:["it act","blocking","website","platform","government"] },
  { id:"it_act_69b", title:"IT Act Section 69B",  category:"cyber", short:"Power to monitor and collect traffic data for cyber security purposes.", type:"it_act", keywords:["it act","traffic data","monitor","cyber security"] },
  { id:"it_act_70",  title:"IT Act Section 70",   category:"cyber", short:"Protected system — government can declare critical infrastructure as 'protected system'.", type:"it_act", keywords:["it act","protected system","critical infrastructure","government"] },
  { id:"it_act_72",  title:"IT Act Section 72",   category:"cyber", short:"Breach of confidentiality and privacy — up to 2 years or Rs.1 lakh.", type:"it_act", keywords:["confidentiality","privacy","data breach","it act"] },
  { id:"it_act_79",  title:"IT Act Section 79",   category:"cyber", short:"Intermediary safe harbour — not liable for third-party content if due diligence followed.", type:"it_act", keywords:["it act","intermediary","safe harbour","social media","liability"] },
  { id:"it_act_84b", title:"IT Act Section 84B",  category:"cyber", short:"Punishment for abetment of offences — same punishment as principal offender.", type:"it_act", keywords:["it act","abetment","cyber","punishment"] },
  { id:"pdp_bill",   title:"Digital Personal Data Protection Act, 2023", category:"cyber", short:"Framework for processing digital personal data; rights of data principals; duties of data fiduciaries.", type:"act", keywords:["data protection","privacy","dpdp","personal data","gdpr india"] },
  { id:"it_rules_2021", title:"IT (Intermediary Guidelines) Rules, 2021", category:"cyber", short:"Due diligence rules for social media platforms, OTT content, significant social media intermediaries.", type:"act", keywords:["social media","rules","intermediary","due diligence","ott","it rules"] },

  // ══════════════════════════════════════════════════════════════
  //  🟣 FAMILY LAW
  // ══════════════════════════════════════════════════════════════
  // Hindu Marriage Act, 1955
  { id:"hma_s2",   title:"Hindu Marriage Act Section 2",   category:"family", short:"Application — applies to Hindus, Buddhists, Jains, and Sikhs.", type:"hma", keywords:["hma","hindu marriage act","application","religion"] },
  { id:"hma_s5",   title:"Hindu Marriage Act Section 5",   category:"family", short:"Conditions for valid Hindu marriage — age, no sapinda relationship, neither spouse already married.", type:"hma", keywords:["hma","conditions","valid marriage","age","sapinda"] },
  { id:"hma_s7",   title:"Hindu Marriage Act Section 7",   category:"family", short:"Ceremonies for Hindu marriage — saptapadi, customary rites.", type:"hma", keywords:["hma","ceremony","saptapadi","rites","custom"] },
  { id:"hma_s11",  title:"Hindu Marriage Act Section 11",  category:"family", short:"Void marriages — bigamy, within prohibited degrees, sapinda relationship.", type:"hma", keywords:["hma","void marriage","bigamy","prohibited degree"] },
  { id:"hma_s12",  title:"Hindu Marriage Act Section 12",  category:"family", short:"Voidable marriages — impotency, insanity, fraud, force or coercion.", type:"hma", keywords:["hma","voidable","impotency","insanity","fraud"] },
  { id:"hma_s13",  title:"Hindu Marriage Act Section 13",  category:"family", short:"Grounds for divorce — adultery, cruelty, desertion, conversion, insanity, leprosy, renunciation, presumed death.", type:"hma", keywords:["hma","divorce","grounds","adultery","cruelty","desertion"] },
  { id:"hma_s13b", title:"Hindu Marriage Act Section 13B", category:"family", short:"Mutual consent divorce — one year separation, joint petition, 6-month cooling period (may be waived).", type:"hma", keywords:["hma","mutual consent","divorce","joint petition","separation"] },
  { id:"hma_s24",  title:"Hindu Marriage Act Section 24",  category:"family", short:"Maintenance pendente lite — interim maintenance and litigation expenses.", type:"hma", keywords:["hma","maintenance","interim","pendente lite","alimony"] },
  { id:"hma_s25",  title:"Hindu Marriage Act Section 25",  category:"family", short:"Permanent alimony and maintenance — court's discretion based on means and conduct.", type:"hma", keywords:["hma","permanent alimony","maintenance","divorce","conduct"] },
  { id:"hma_s26",  title:"Hindu Marriage Act Section 26",  category:"family", short:"Custody of children — welfare of minor is paramount consideration.", type:"hma", keywords:["hma","custody","children","minor","welfare"] },
  { id:"hma_s27",  title:"Hindu Marriage Act Section 27",  category:"family", short:"Disposal of property presented at the time of marriage.", type:"hma", keywords:["hma","property","marriage","streedhan","disposal"] },
  // Special Marriage Act, 1954
  { id:"sma_s4",   title:"Special Marriage Act Section 4",  category:"family", short:"Conditions for special marriage — no existing spouse, no unsoundness of mind, age requirement.", type:"sma", keywords:["sma","special marriage","conditions","inter-religion","civil"] },
  { id:"sma_s5",   title:"Special Marriage Act Section 5",  category:"family", short:"Notice of intended marriage to Marriage Officer — 30-day advance notice.", type:"sma", keywords:["sma","notice","marriage officer","30 days"] },
  { id:"sma_s7",   title:"Special Marriage Act Section 7",  category:"family", short:"Objection to marriage — any person may object within 30 days of notice.", type:"sma", keywords:["sma","objection","marriage","30 days"] },
  { id:"sma_s11",  title:"Special Marriage Act Section 11", category:"family", short:"Registration of marriages — Marriage Officer maintains marriage register.", type:"sma", keywords:["sma","registration","marriage","register","certificate"] },
  { id:"sma_s27",  title:"Special Marriage Act Section 27", category:"family", short:"Divorce — same grounds as Hindu Marriage Act applicable.", type:"sma", keywords:["sma","divorce","grounds","special marriage"] },
  // Indian Divorce Act, 1869
  { id:"ida_s10",  title:"Indian Divorce Act Section 10",   category:"family", short:"Dissolution of marriage — grounds for divorce for Christians: adultery, apostasy, insanity, cruelty.", type:"ida", keywords:["christian divorce","grounds","adultery","cruelty","dissolution"] },
  { id:"ida_s17",  title:"Indian Divorce Act Section 17",   category:"family", short:"Alimony pendente lite — court may order husband to pay expenses of suit.", type:"ida", keywords:["ida","alimony","pendente lite","christian","maintenance"] },
  { id:"ida_s37",  title:"Indian Divorce Act Section 37",   category:"family", short:"Custody and maintenance of children of divorced parents.", type:"ida", keywords:["ida","custody","children","maintenance","christian"] },
  // Muslim Personal Law
  { id:"mpl_talaq", title:"Muslim Personal Law — Talaq",   category:"family", short:"Divorce by talaq — revocable (raj'i), irrevocable (bain), triple talaq (now criminalised under 2019 Act).", type:"mpl", keywords:["talaq","muslim","divorce","triple talaq","revocable"] },
  { id:"mpl_mehr",  title:"Muslim Personal Law — Mehr",    category:"family", short:"Mehr (dower) — obligatory payment by husband to wife at marriage; wife's legal right.", type:"mpl", keywords:["mehr","dower","muslim","marriage","wife","right"] },
  { id:"mpl_maint", title:"Muslim Personal Law — Maintenance", category:"family", short:"Maintenance (nafaqah) — husband's duty to maintain wife during marriage and iddat period.", type:"mpl", keywords:["maintenance","nafaqah","muslim","wife","iddat"] },
  { id:"mpl_nikah", title:"Muslim Personal Law — Nikah",  category:"family", short:"Marriage contract (nikah) — offer and acceptance, witnesses, mehr; conditions for validity.", type:"mpl", keywords:["nikah","muslim","marriage","offer","acceptance","mehr"] },
  { id:"triple_talaq_act", title:"Muslim Women (Protection of Rights on Marriage) Act, 2019", category:"family", short:"Instant triple talaq criminalised — up to 3 years imprisonment; wife may seek maintenance.", type:"act", keywords:["triple talaq","muslim","divorce","women","criminalised"] },
  { id:"muslim_women_act", title:"Muslim Women (Protection of Rights on Divorce) Act, 1986", category:"family", short:"Maintenance rights for Muslim women after divorce during iddat period and beyond.", type:"act", keywords:["muslim","divorce","maintenance","talaq","women"] },
  // Guardians and Wards Act, 1890
  { id:"gwa_s7",  title:"Guardians and Wards Act Section 7",  category:"family", short:"Power of court to make orders as to guardianship — welfare of minor paramount.", type:"gwa", keywords:["guardian","wards act","minor","welfare","court"] },
  { id:"gwa_s17", title:"Guardians and Wards Act Section 17", category:"family", short:"Matters to consider when appointing guardian — age, sex, welfare, wishes of parents.", type:"gwa", keywords:["guardian","appointment","welfare","minor","age","sex"] },
  { id:"gwa_s19", title:"Guardians and Wards Act Section 19", category:"family", short:"Father not to be deprived of guardianship except for specified reasons.", type:"gwa", keywords:["guardian","father","deprived","minor"] },
  // Protection of Women from Domestic Violence Act, 2005
  { id:"domestic_violence_act",    title:"Protection of Women from Domestic Violence Act, 2005",  category:"family", short:"Civil protections for women facing domestic violence — protection orders, residence orders, monetary relief.", type:"act", keywords:["domestic violence","protection order","women","abused","residence"] },
  { id:"dv_s2",   title:"PWDVA Section 2",   category:"family", short:"Definitions — 'aggrieved person', 'domestic relationship', 'domestic violence', 'shared household'.", type:"dv", keywords:["dv","domestic violence","definition","aggrieved","shared household"] },
  { id:"dv_s3",   title:"PWDVA Section 3",   category:"family", short:"Definition of domestic violence — physical, sexual, verbal, emotional, and economic abuse.", type:"dv", keywords:["dv","domestic violence","physical","sexual","emotional","economic"] },
  { id:"dv_s12",  title:"PWDVA Section 12",  category:"family", short:"Application to Magistrate for reliefs — any aggrieved person or protection officer.", type:"dv", keywords:["dv","application","magistrate","relief","protection officer"] },
  { id:"dv_s18",  title:"PWDVA Section 18",  category:"family", short:"Protection orders — prohibiting respondent from committing domestic violence.", type:"dv", keywords:["dv","protection order","prohibit","domestic violence"] },
  { id:"dv_s19",  title:"PWDVA Section 19",  category:"family", short:"Residence orders — right to reside in shared household; cannot be evicted.", type:"dv", keywords:["dv","residence order","shared household","eviction"] },
  { id:"dv_s20",  title:"PWDVA Section 20",  category:"family", short:"Monetary reliefs — loss of earnings, medical expenses, maintenance for aggrieved and children.", type:"dv", keywords:["dv","monetary relief","maintenance","medical","compensation"] },
  { id:"dv_s21",  title:"PWDVA Section 21",  category:"family", short:"Custody orders — temporary custody of children to aggrieved person.", type:"dv", keywords:["dv","custody","children","temporary","aggrieved"] },
  // Hindu Adoption and Maintenance Act, 1956
  { id:"adoption_act",              title:"Hindu Adoption and Maintenance Act, 1956",  category:"family", short:"Rules for adoption and maintenance obligations for Hindus — capacity to adopt and be adopted.", type:"act", keywords:["adoption","maintenance","hindu","children"] },
  { id:"hama_s7",  title:"HAMA Section 7",  category:"family", short:"Capacity of a male Hindu to take in adoption — requires wife's consent.", type:"hama", keywords:["hama","adoption","male","capacity","wife consent"] },
  { id:"hama_s8",  title:"HAMA Section 8",  category:"family", short:"Capacity of a female Hindu to take in adoption — widow, unmarried, divorced.", type:"hama", keywords:["hama","adoption","female","widow","unmarried"] },
  { id:"hama_s10", title:"HAMA Section 10", category:"family", short:"Persons who may be adopted — Hindu, unmarried, not previously adopted.", type:"hama", keywords:["hama","who may be adopted","unmarried","hindu"] },
  { id:"hama_s11", title:"HAMA Section 11", category:"family", short:"Other conditions for valid adoption — not adopted child of different sex unless natural child exists.", type:"hama", keywords:["hama","conditions","valid adoption","sex","existing child"] },
  { id:"hama_s22", title:"HAMA Section 22", category:"family", short:"Maintenance of dependants — obligation of heirs to maintain deceased's dependants.", type:"hama", keywords:["hama","maintenance","dependants","heirs","deceased"] },
  // Other Family Laws
  { id:"maintenance_act",           title:"CrPC Section 125 — Maintenance",            category:"family", short:"Maintenance for wife, children, and parents from persons with sufficient means — up to Rs.15,000/month typical award.", type:"crpc", keywords:["maintenance","alimony","wife","children","support","crpc 125"] },
  { id:"guardianship_act",          title:"Guardians and Wards Act, 1890",              category:"family", short:"Legal framework for appointment, duties and removal of guardians for minors.", type:"act", keywords:["guardian","minor","custody","ward"] },
  { id:"pocso_act",                 title:"POCSO Act, 2012",                            category:"family", short:"Protection of Children from Sexual Offences — stringent punishment, child-friendly procedures.", type:"act", keywords:["child sexual abuse","pocso","minor","children protection"] },
  { id:"child_marriage_act",        title:"Prohibition of Child Marriage Act, 2006",    category:"family", short:"Child marriages prohibited — void on child's petition; punishment for solemnising, abetting.", type:"act", keywords:["child marriage","minor","underage marriage","prohibition"] },

  // ══════════════════════════════════════════════════════════════
  //  🟠 CORPORATE LAW — Companies Act, 2013 & Others
  // ══════════════════════════════════════════════════════════════
  // Companies Act, 2013
  { id:"ca_s2",    title:"Companies Act Section 2",    category:"corporate", short:"Definitions — 'company', 'body corporate', 'board of directors', 'debenture', 'dividend', 'subsidiary'.", type:"ca", keywords:["companies act","definitions","company","director","debenture"] },
  { id:"ca_s3",    title:"Companies Act Section 3",    category:"corporate", short:"Formation of company — minimum 2 members (private), 7 members (public), 1 member (OPC).", type:"ca", keywords:["companies act","formation","private","public","opc","members"] },
  { id:"ca_s7",    title:"Companies Act Section 7",    category:"corporate", short:"Incorporation of company — MOA, AOA, filing with ROC, certificate of incorporation.", type:"ca", keywords:["companies act","incorporation","moa","aoa","roc","certificate"] },
  { id:"ca_s11",   title:"Companies Act Section 11",   category:"corporate", short:"Commencement of business — declaration of compliance filed with ROC within 180 days.", type:"ca", keywords:["companies act","commencement","business","roc","declaration"] },
  { id:"ca_s13",   title:"Companies Act Section 13",   category:"corporate", short:"Alteration of Memorandum — change of name, registered office, objects clause.", type:"ca", keywords:["companies act","alteration","memorandum","name change","objects"] },
  { id:"ca_s25",   title:"Companies Act Section 25",   category:"corporate", short:"Company limited by guarantee — Section 8 companies for charitable purposes.", type:"ca", keywords:["companies act","guarantee","section 8","charitable","non-profit"] },
  { id:"ca_s56",   title:"Companies Act Section 56",   category:"corporate", short:"Transfer and transmission of securities — share transfer procedure and restrictions.", type:"ca", keywords:["companies act","share transfer","securities","transmission"] },
  { id:"ca_s61",   title:"Companies Act Section 61",   category:"corporate", short:"Power to alter share capital — increase, consolidation, sub-division, cancellation.", type:"ca", keywords:["companies act","share capital","alteration","increase","sub-division"] },
  { id:"ca_s73",   title:"Companies Act Section 73",   category:"corporate", short:"Prohibition on acceptance of deposits from public — Companies Act restrictions.", type:"ca", keywords:["companies act","deposits","public","prohibition"] },
  { id:"ca_s96",   title:"Companies Act Section 96",   category:"corporate", short:"Annual General Meeting — mandatory, within 15 months of last AGM, within 6 months of financial year end.", type:"ca", keywords:["companies act","agm","annual general meeting","mandatory"] },
  { id:"ca_s100",  title:"Companies Act Section 100",  category:"corporate", short:"Extraordinary General Meeting — called by board, requisitionists (10%), or Tribunal.", type:"ca", keywords:["companies act","egm","extraordinary","general meeting"] },
  { id:"ca_s128",  title:"Companies Act Section 128",  category:"corporate", short:"Books of account to be maintained — every company must maintain proper books.", type:"ca", keywords:["companies act","books","accounts","maintain","auditor"] },
  { id:"ca_s134",  title:"Companies Act Section 134",  category:"corporate", short:"Financial statement and directors' report — signed by chairperson or 2 directors.", type:"ca", keywords:["companies act","financial statement","directors report","signed"] },
  { id:"ca_s139",  title:"Companies Act Section 139",  category:"corporate", short:"Appointment of auditors — first auditor, rotation after 5/10 years.", type:"ca", keywords:["companies act","auditor","appointment","rotation"] },
  { id:"ca_s149",  title:"Companies Act Section 149",  category:"corporate", short:"Composition of board — minimum directors, independent directors, woman director requirement.", type:"ca", keywords:["companies act","board","directors","independent","woman director"] },
  { id:"ca_s166",  title:"Companies Act Section 166",  category:"corporate", short:"Duties of directors — fiduciary duty, act bona fide, avoid conflict of interest.", type:"ca", keywords:["companies act","director","duties","fiduciary","bona fide"] },
  { id:"ca_s173",  title:"Companies Act Section 173",  category:"corporate", short:"Meetings of board — minimum 4 meetings per year, gap of not more than 120 days.", type:"ca", keywords:["companies act","board meeting","minimum","frequency"] },
  { id:"ca_s177",  title:"Companies Act Section 177",  category:"corporate", short:"Audit Committee — mandatory for listed companies and certain others.", type:"ca", keywords:["companies act","audit committee","listed","mandatory"] },
  { id:"ca_s180",  title:"Companies Act Section 180",  category:"corporate", short:"Restrictions on powers of board — sale of undertaking, borrowing beyond limit, special resolution.", type:"ca", keywords:["companies act","board powers","restriction","special resolution"] },
  { id:"ca_s184",  title:"Companies Act Section 184",  category:"corporate", short:"Disclosure of interest by director — director to declare conflict of interest.", type:"ca", keywords:["companies act","disclosure","director","conflict of interest"] },
  { id:"ca_s188",  title:"Companies Act Section 188",  category:"corporate", short:"Related party transactions — board and shareholder approval required.", type:"ca", keywords:["companies act","related party","transaction","approval","board"] },
  { id:"ca_s206",  title:"Companies Act Section 206",  category:"corporate", short:"Power to call for information — ROC can call for information, inspection.", type:"ca", keywords:["companies act","inspection","roc","information","power"] },
  { id:"ca_s230",  title:"Companies Act Section 230",  category:"corporate", short:"Power to compromise or make arrangements — NCLT sanctioned schemes.", type:"ca", keywords:["companies act","compromise","arrangement","nclt","scheme"] },
  { id:"ca_s241",  title:"Companies Act Section 241",  category:"corporate", short:"Application to NCLT for relief in cases of oppression or mismanagement.", type:"ca", keywords:["companies act","oppression","mismanagement","nclt","minority"] },
  { id:"ca_s271",  title:"Companies Act Section 271",  category:"corporate", short:"Circumstances in which company may be wound up by NCLT.", type:"ca", keywords:["companies act","winding up","nclt","insolvency"] },
  { id:"ca_s447",  title:"Companies Act Section 447",  category:"corporate", short:"Punishment for fraud — minimum 6 months, up to 10 years imprisonment.", type:"ca", keywords:["companies act","fraud","punishment","imprisonment"] },
  // Corporate — Other Acts
  { id:"companies_act",             title:"Companies Act, 2013",                        category:"corporate", short:"Company formation, governance, directors' duties, AGM, audit, winding up.", type:"act", keywords:["company","director","corporate","mca","roc","agm"] },
  { id:"ibc",                       title:"Insolvency and Bankruptcy Code, 2016 (IBC)", category:"corporate", short:"Time-bound resolution of insolvency — CIRP, liquidation, NCLT, IBC tribunal.", type:"act", keywords:["insolvency","bankruptcy","nclt","ibc","liquidation","npa"] },
  { id:"sebi_act",                  title:"SEBI Act, 1992",                              category:"corporate", short:"Regulation of securities market — investor protection, insider trading, takeovers.", type:"act", keywords:["sebi","securities","stock market","investor","ipo"] },
  { id:"competition_act",           title:"Competition Act, 2002",                       category:"corporate", short:"Anti-competitive agreements, abuse of dominant position, mergers — CCI enforcement.", type:"act", keywords:["competition","monopoly","cci","cartel","anti-competitive"] },
  { id:"fema",                      title:"Foreign Exchange Management Act, 1999 (FEMA)", category:"corporate", short:"Regulation of foreign exchange — capital account, current account, FDI, FII.", type:"act", keywords:["fema","foreign exchange","fdi","rbi","forex"] },
  { id:"partnership_act",           title:"Indian Partnership Act, 1932",                category:"corporate", short:"Formation, registration, rights, duties of partners, dissolution of partnership firms.", type:"act", keywords:["partnership","partner","firm","business","dissolution"] },
  { id:"llp_act",                   title:"Limited Liability Partnership Act, 2008",     category:"corporate", short:"LLP — hybrid between partnership and company; limited liability; separate legal entity.", type:"act", keywords:["llp","limited liability","partnership","entity","corporate"] },

  // ══════════════════════════════════════════════════════════════
  //  🟡 TAX LAW — Income Tax Act, 1961 & Others
  // ══════════════════════════════════════════════════════════════
  // Income Tax Act, 1961 — Key Sections
  { id:"it_s1",    title:"Income Tax Act Section 1",   category:"tax", short:"Short title, extent and commencement — Income Tax Act, 1961.", type:"it_section", keywords:["income tax","title","extent","1961"] },
  { id:"it_s2",    title:"Income Tax Act Section 2",   category:"tax", short:"Definitions — 'assessee', 'assessment year', 'previous year', 'total income', 'India'.", type:"it_section", keywords:["income tax","definitions","assessee","assessment year","total income"] },
  { id:"it_s4",    title:"Income Tax Act Section 4",   category:"tax", short:"Charge of income-tax — tax levied on total income of every person.", type:"it_section", keywords:["income tax","charge","levy","total income","person"] },
  { id:"it_s5",    title:"Income Tax Act Section 5",   category:"tax", short:"Scope of total income — resident, non-resident, not ordinarily resident.", type:"it_section", keywords:["income tax","scope","resident","non-resident","total income"] },
  { id:"it_s6",    title:"Income Tax Act Section 6",   category:"tax", short:"Residence in India — rules for determining residential status (182/60 days).", type:"it_section", keywords:["income tax","resident","non-resident","182 days","60 days"] },
  { id:"it_s9",    title:"Income Tax Act Section 9",   category:"tax", short:"Income deemed to accrue in India — for non-residents; royalties, interest, business income.", type:"it_section", keywords:["income tax","deemed income","non-resident","india","royalty"] },
  { id:"it_s10",   title:"Income Tax Act Section 10",  category:"tax", short:"Exemptions from income — gratuity, agricultural income, HRA exemption, dividends (partial).", type:"it_section", keywords:["income tax","exemption","agricultural income","gratuity","hra","section 10"] },
  { id:"it_s14",   title:"Income Tax Act Section 14",  category:"tax", short:"Heads of income — salaries, house property, business/profession, capital gains, other sources.", type:"it_section", keywords:["income tax","heads of income","salary","house property","capital gains","other sources"] },
  { id:"it_s17",   title:"Income Tax Act Section 17",  category:"tax", short:"Definition of salary — includes wages, annuity, gratuity, allowances, perquisites.", type:"it_section", keywords:["income tax","salary","definition","perquisite","allowances"] },
  { id:"it_s22",   title:"Income Tax Act Section 22",  category:"tax", short:"Income from house property — annual value of property is chargeable to tax.", type:"it_section", keywords:["income tax","house property","annual value","rent","property"] },
  { id:"it_s23",   title:"Income Tax Act Section 23",  category:"tax", short:"Annual value — how to determine annual value of house property.", type:"it_section", keywords:["income tax","annual value","house property","let out","self-occupied"] },
  { id:"it_s24",   title:"Income Tax Act Section 24",  category:"tax", short:"Deductions from house property income — standard deduction 30%, interest on home loan Rs.2 lakh.", type:"it_section", keywords:["income tax","deduction","house property","interest","home loan","section 24"] },
  { id:"it_s28",   title:"Income Tax Act Section 28",  category:"tax", short:"Profits and gains from business or profession — what is chargeable.", type:"it_section", keywords:["income tax","business","profession","profits","gains"] },
  { id:"it_s36",   title:"Income Tax Act Section 36",  category:"tax", short:"Other deductions for business — insurance, gratuity fund, bad debts, capital expenditure.", type:"it_section", keywords:["income tax","business deduction","insurance","gratuity","bad debts"] },
  { id:"it_s37",   title:"Income Tax Act Section 37",  category:"tax", short:"General deduction — any expenditure wholly and exclusively for business is deductible.", type:"it_section", keywords:["income tax","general deduction","expenditure","business","exclusively"] },
  { id:"it_s45",   title:"Income Tax Act Section 45",  category:"tax", short:"Capital gains — profits/gains arising from transfer of capital assets are taxable.", type:"it_section", keywords:["income tax","capital gains","transfer","assets","property"] },
  { id:"it_s48",   title:"Income Tax Act Section 48",  category:"tax", short:"Mode of computation of capital gains — cost of acquisition, improvement, indexation.", type:"it_section", keywords:["income tax","capital gains","computation","cost","indexation"] },
  { id:"it_s54",   title:"Income Tax Act Section 54",  category:"tax", short:"Exemption on capital gains from sale of residential property if reinvested in another property.", type:"it_section", keywords:["income tax","capital gains","exemption","residential property","reinvestment"] },
  { id:"it_s57",   title:"Income Tax Act Section 57",  category:"tax", short:"Income from other sources — deductions allowable (interest, commission).", type:"it_section", keywords:["income tax","other sources","deduction","interest","commission"] },
  { id:"it_s80c",  title:"Income Tax Act Section 80C", category:"tax", short:"Deductions — up to Rs.1.5 lakh for LIC, PPF, ELSS, NSC, home loan principal, tuition fees.", type:"it_section", keywords:["income tax","80c","deduction","ppf","lic","elss","nsc","section 80c"] },
  { id:"it_s80d",  title:"Income Tax Act Section 80D", category:"tax", short:"Deduction for health insurance premium — Rs.25,000 self/family; Rs.50,000 for senior citizens.", type:"it_section", keywords:["income tax","80d","health insurance","deduction","mediclaim","section 80d"] },
  { id:"it_s80e",  title:"Income Tax Act Section 80E", category:"tax", short:"Deduction of interest on education loan — no upper limit, for 8 years.", type:"it_section", keywords:["income tax","80e","education loan","interest","deduction","section 80e"] },
  { id:"it_s80g",  title:"Income Tax Act Section 80G", category:"tax", short:"Deduction for donations to approved charitable organisations — 50% or 100% deduction.", type:"it_section", keywords:["income tax","80g","donation","charity","deduction","section 80g"] },
  { id:"it_s80ia", title:"Income Tax Act Section 80IA", category:"tax", short:"Deduction for profits from infrastructure, power, SEZ projects.", type:"it_section", keywords:["income tax","80ia","infrastructure","power","sez","deduction"] },
  { id:"it_s87a",  title:"Income Tax Act Section 87A", category:"tax", short:"Tax rebate — rebate of Rs.12,500 for income up to Rs.5 lakh (old regime).", type:"it_section", keywords:["income tax","87a","rebate","5 lakh","tax","section 87a"] },
  { id:"it_s115bac", title:"Income Tax Act Section 115BAC", category:"tax", short:"New tax regime — lower tax rates without deductions; optional from FY 2020-21, default from FY 2023-24.", type:"it_section", keywords:["income tax","new regime","115bac","lower rates","no deductions"] },
  { id:"it_s132",  title:"Income Tax Act Section 132",  category:"tax", short:"Search and seizure — power to conduct raids on suspected tax evaders.", type:"it_section", keywords:["income tax","search","seizure","raid","tax evasion","it department"] },
  { id:"it_s139",  title:"Income Tax Act Section 139",  category:"tax", short:"Filing of return of income — due dates, belated returns, revised returns.", type:"it_section", keywords:["income tax","return filing","itr","due date","belated","revised"] },
  { id:"it_s143",  title:"Income Tax Act Section 143",  category:"tax", short:"Assessment — intimation under 143(1), scrutiny assessment under 143(3).", type:"it_section", keywords:["income tax","assessment","scrutiny","143","notice","department"] },
  { id:"it_s148",  title:"Income Tax Act Section 148",  category:"tax", short:"Notice for income escaping assessment — reopening of assessment (reassessment).", type:"it_section", keywords:["income tax","reassessment","notice","148","escaped income"] },
  { id:"it_s192",  title:"Income Tax Act Section 192",  category:"tax", short:"TDS on salary — employer to deduct tax at source from employee's salary.", type:"it_section", keywords:["income tax","tds","salary","employer","deduct at source"] },
  { id:"it_s194",  title:"Income Tax Act Section 194",  category:"tax", short:"TDS on dividend — 10% TDS on dividends above Rs.5,000.", type:"it_section", keywords:["income tax","tds","dividend","10%","section 194"] },
  { id:"it_s194a", title:"Income Tax Act Section 194A", category:"tax", short:"TDS on interest — 10% TDS on interest from banks (above Rs.40,000).", type:"it_section", keywords:["income tax","tds","interest","bank","40000","194a"] },
  { id:"it_s194c", title:"Income Tax Act Section 194C", category:"tax", short:"TDS on contractors — 1% (individual) or 2% (company) for payments above threshold.", type:"it_section", keywords:["income tax","tds","contractor","1%","2%","194c"] },
  { id:"it_s194h", title:"Income Tax Act Section 194H", category:"tax", short:"TDS on commission or brokerage — 5% TDS above Rs.15,000.", type:"it_section", keywords:["income tax","tds","commission","brokerage","5%","194h"] },
  { id:"it_s195",  title:"Income Tax Act Section 195",  category:"tax", short:"TDS on payments to non-residents — tax deductible at prescribed rates.", type:"it_section", keywords:["income tax","tds","non-resident","payment","195"] },
  { id:"it_s199",  title:"Income Tax Act Section 199",  category:"tax", short:"Credit for TDS — TDS credit allowed when income is included in return.", type:"it_section", keywords:["income tax","tds credit","form 26as","credit","return"] },
  { id:"it_s200",  title:"Income Tax Act Section 200",  category:"tax", short:"Duty of person deducting TDS — to deposit within prescribed time.", type:"it_section", keywords:["income tax","tds","deposit","time","challan","200"] },
  { id:"it_s206c", title:"Income Tax Act Section 206C", category:"tax", short:"Tax collection at source (TCS) — on sale of certain goods like alcohol, scrap, forest produce.", type:"it_section", keywords:["income tax","tcs","collection at source","goods","206c"] },
  { id:"it_s234a", title:"Income Tax Act Section 234A", category:"tax", short:"Interest for default in filing return of income — 1% per month on tax due.", type:"it_section", keywords:["income tax","interest","default","late filing","234a"] },
  { id:"it_s234b", title:"Income Tax Act Section 234B", category:"tax", short:"Interest for default in payment of advance tax — 1% per month.", type:"it_section", keywords:["income tax","advance tax","default","interest","234b"] },
  { id:"it_s234c", title:"Income Tax Act Section 234C", category:"tax", short:"Interest for deferment of advance tax instalments.", type:"it_section", keywords:["income tax","advance tax","instalments","deferment","234c"] },
  { id:"it_s270a", title:"Income Tax Act Section 270A", category:"tax", short:"Penalty for under-reporting or misreporting of income — 50% or 200% of tax.", type:"it_section", keywords:["income tax","penalty","under-reporting","misreporting","270a"] },
  { id:"it_s271b", title:"Income Tax Act Section 271B", category:"tax", short:"Penalty for failure to get accounts audited — 0.5% of turnover or Rs.1.5 lakh.", type:"it_section", keywords:["income tax","penalty","audit","turnover","271b"] },
  { id:"it_s276c", title:"Income Tax Act Section 276C", category:"tax", short:"Willful attempt to evade tax — up to 7 years imprisonment.", type:"it_section", keywords:["income tax","tax evasion","willful","imprisonment","276c"] },
  // GST and Other Tax Acts
  { id:"income_tax_act",            title:"Income Tax Act, 1961",                        category:"tax", short:"Direct tax — levy, collection and administration of income tax; slabs, TDS, deductions, exemptions.", type:"act", keywords:["income tax","itr","tds","deduction","assessment"] },
  { id:"gst_act",                   title:"Goods and Services Tax Acts, 2017",           category:"tax", short:"Indirect tax — CGST, SGST, IGST; input tax credit, GST returns, e-invoicing, anti-profiteering.", type:"act", keywords:["gst","indirect tax","cgst","sgst","invoice","itc"] },
  { id:"customs_act",               title:"Customs Act, 1962",                            category:"tax", short:"Import/export duties, valuation, confiscation, adjudication, and customs officers' powers.", type:"act", keywords:["customs","import","export","duty","valuation"] },
  { id:"wealth_tax_act",            title:"Wealth Tax Act, 1957 (Abolished 2015)",        category:"tax", short:"Tax on net wealth above threshold — abolished from 1 April 2015.", type:"act", keywords:["wealth tax","abolished","2015","net wealth"] },
  { id:"black_money_act",           title:"Black Money (Undisclosed Foreign Income) Act, 2015", category:"tax", short:"Tax and penalty on undisclosed foreign assets — flat 30% tax, 90% penalty.", type:"act", keywords:["black money","foreign income","undisclosed","penalty","offshore"] },
  { id:"benami_act",                title:"Prohibition of Benami Property Transactions Act, 1988", category:"tax", short:"Prohibition of benami transactions — confiscation of benami property.", type:"act", keywords:["benami","property","black money","tax evasion"] },
  { id:"pmla",                      title:"Prevention of Money Laundering Act, 2002 (PMLA)", category:"criminal", short:"Offence of money laundering — attachment, PMLA proceeds, ED jurisdiction, special court.", type:"act", keywords:["money laundering","pmla","ed","enforcement directorate","hawala"] },

  // ══════════════════════════════════════════════════════════════
  //  ⚪ CONSTITUTIONAL LAW — Landmark Cases, Writs, Special Acts
  // ══════════════════════════════════════════════════════════════
  { id:"rti_act",                   title:"Right to Information Act, 2005",               category:"constitutional", short:"Citizen's right to request information from public authorities; PIO, first appeal, CIC, RTI fee Rs.10.", type:"act", keywords:["rti","public information","transparency","government","pio"] },
  { id:"habeas_corpus",             title:"Writ of Habeas Corpus",                        category:"constitutional", short:"Fundamental writ to produce a person before court and challenge unlawful detention (Art.32/226).", type:"writ", keywords:["writ","habeas corpus","detention","arrest","freedom"] },
  { id:"mandamus_writ",             title:"Writ of Mandamus",                             category:"constitutional", short:"Court order compelling a public authority to perform a mandatory statutory duty.", type:"writ", keywords:["writ","mandamus","public duty","government authority"] },
  { id:"certiorari_writ",           title:"Writ of Certiorari",                           category:"constitutional", short:"Court order quashing a decision by a lower court or tribunal for error of law or jurisdiction.", type:"writ", keywords:["writ","certiorari","quash","lower court"] },
  { id:"prohibition_writ",          title:"Writ of Prohibition",                          category:"constitutional", short:"Court order preventing a lower court/tribunal from exceeding its jurisdiction.", type:"writ", keywords:["writ","prohibition","jurisdiction","court"] },
  { id:"quo_warranto",              title:"Writ of Quo Warranto",                        category:"constitutional", short:"Court order requiring a person to show by what authority they hold a public office.", type:"writ", keywords:["writ","quo warranto","public office","authority"] },
  { id:"pil",                       title:"Public Interest Litigation (PIL)",             category:"constitutional", short:"Legal action in public interest allowing any citizen to petition Supreme/High Court.", type:"act", keywords:["pil","public interest","constitutional rights","supreme court"] },
  { id:"kesavananda",               title:"Kesavananda Bharati Case, 1973",               category:"constitutional", short:"Basic Structure Doctrine — Parliament cannot destroy the basic structure of the Constitution.", type:"case", keywords:["basic structure","constitution amendment","supreme court","landmark"] },
  { id:"maneka_gandhi",             title:"Maneka Gandhi vs Union of India, 1978",        category:"constitutional", short:"Article 21 expanded — procedure must be fair, just and reasonable; golden triangle 14+19+21.", type:"case", keywords:["article 21","personal liberty","passport","landmark case"] },
  { id:"puttaswamy",                title:"K.S. Puttaswamy vs Union of India, 2017",      category:"constitutional", short:"Right to Privacy is a fundamental right under Article 21 of the Constitution.", type:"case", keywords:["privacy","fundamental right","aadhaar","article 21","landmark"] },
  { id:"sc_st_act",                 title:"SC/ST Prevention of Atrocities Act, 1989",     category:"constitutional", short:"Prevention and punishment of crimes against Scheduled Castes/Tribes — special court, no anticipatory bail.", type:"act", keywords:["sc st","atrocities","dalit","scheduled caste","scheduled tribe","discrimination"] },
  { id:"rte_act",                   title:"Right to Education Act, 2009 (RTE)",           category:"constitutional", short:"Free and compulsory education for children 6–14; 25% seats for disadvantaged in private schools.", type:"act", keywords:["education","rte","children","school","free education"] },
  { id:"pwd_act",                   title:"Rights of Persons with Disabilities Act, 2016", category:"constitutional", short:"Rights and empowerment of persons with 21 specified disabilities; reservation in education and jobs.", type:"act", keywords:["disability","rights","pwd","accessibility","differently abled"] },
  // Public Safety & Special Laws
  { id:"ndps_act",                  title:"NDPS Act, 1985",                               category:"criminal", short:"Control of narcotic drugs and psychotropic substances; bail restriction; death penalty for repeat traffickers.", type:"act", keywords:["drugs","narcotics","ndps","ncb","substance abuse"] },
  { id:"arms_act",                  title:"Arms Act, 1959",                               category:"criminal", short:"Regulation of acquisition, possession, carrying of firearms; licence requirement.", type:"act", keywords:["arms","firearm","gun","weapon","licence"] },
  { id:"uapa",                      title:"Unlawful Activities Prevention Act, 1967 (UAPA)", category:"criminal", short:"Prevention of terrorism and unlawful activities — designation of terrorist organisations, 180-day chargesheet.", type:"act", keywords:["terrorism","uapa","nsa","security","banned organisation"] },
  { id:"anti_corruption_act",       title:"Prevention of Corruption Act, 1988",           category:"criminal", short:"Bribery by public servants — up to 7 years; need sanction for prosecution.", type:"act", keywords:["corruption","bribe","public servant","cbi","anti-corruption"] },
];

/* ─────────────────────────────────────────────────────────────────
   SECTION 3: BUILD UNIFIED LAWS DATABASE
───────────────────────────────────────────────────────────────── */
function articleSortValue(article) {
  const match = String(article).match(/^(\d+)([A-Z])?$/i);
  if (!match) return Number.MAX_SAFE_INTEGER;
  const suffixValue = match[2] ? (match[2].toUpperCase().charCodeAt(0) - 64) / 100 : 0;
  return Number(match[1]) + suffixValue;
}

const insertedConstitutionArticles = [
  "21A","31A","31B","31C","39A","43A","43B","48A","51A",
  "139A","224A","243A","243B","243C","243D","243E","243F","243G",
  "243H","243I","243J","243K","243L","243M","243N","243O",
  "243P","243Q","243R","243S","243T","243U","243V","243W","243X",
  "243Y","243Z","243ZA","244A","279A","290A","300A","312A","338A",
  "338B","342A","350A","350B","359A","361A","361B","363A","371A",
  "371B","371C","371D","371E","371F","371G","371H","371I","371J",
  "372A","378A","394A",
];

const constitutionalArticleNumbers = [
  ...Array.from({ length: 395 }, (_, i) => String(i + 1)),
  ...insertedConstitutionArticles,
];

const constitutionalLaws = [...new Set(constitutionalArticleNumbers)]
  .sort((a, b) => articleSortValue(a) - articleSortValue(b))
  .map((article) => {
    const short = constitutionArticleSummaries[article]
      || "Constitution of India article. Click for AI-generated definition, simple meaning, and real-life example.";
    return {
      id: `article_${String(article).toLowerCase()}`,
      title: `Article ${article}`,
      category: "constitutional",
      short,
      type: "article",
      keywords: ["constitution", "article", String(article), short.toLowerCase()],
    };
  });

const lawsDatabase = [...constitutionalLaws, ...majorLawSummaries];

/* ─────────────────────────────────────────────────────────────────
   SECTION 4: STATE + RUNTIME VARIABLES
───────────────────────────────────────────────────────────────── */
const faqs = [
  ["How do I file an FIR?", "Go to the police station with jurisdiction over the area where the offence occurred. Describe the cognizable offence, request a written FIR copy (you are legally entitled to one), and note the FIR number for future reference."],
  ["Can police arrest without warrant?", "For cognizable offences (e.g. murder, theft, robbery), police may arrest without warrant under CrPC Section 41. However, constitutional safeguards under Articles 21 and 22 and BNSS still apply — you have the right to be informed of the grounds, access a lawyer, and appear before a magistrate within 24 hours."],
  ["What is legal aid?", "Free or subsidised legal help available through Legal Services Authorities under the Legal Services Authorities Act, 1987. Eligibility includes income below Rs.1 lakh/year, SC/ST persons, women, children, and accident victims. National helpline: 15100."],
  ["How do I file an RTI?", "Submit an application to the Public Information Officer (PIO) of the relevant public authority with the prescribed fee (Rs.10 for Central govt). If denied or unsatisfied, file a First Appeal within 30 days, and then a Second Appeal/Complaint to the Central/State Information Commission."],
  ["What is the difference between bailable and non-bailable offence?", "Bailable offences (e.g. minor theft) allow bail as a right from the police station. Non-bailable offences (e.g. murder, rape) require you to apply for bail before a Magistrate or Sessions Judge."],
  ["How do I file a consumer complaint?", "File a complaint with the District Consumer Commission (claims up to Rs. 50 lakh), State Commission (up to Rs. 2 crore), or National Commission (above Rs. 2 crore) under the Consumer Protection Act, 2019. No court fee for claims below Rs. 5 lakh."],
  ["What are my rights when arrested?", "Under Articles 21, 22 of the Constitution and CrPC: right to know grounds of arrest, right to legal representation, right to be produced before magistrate within 24 hours, right against self-incrimination. Police cannot torture or coerce confessions."],
  ["What is a legal notice?", "A formal written communication to a person or organisation outlining a legal grievance and demanding specific action within a stipulated time. Often the first step before filing a civil suit; sends a serious signal and creates a legal record."],
];

let simplifierLevel = "student";
let currentDoc = "";
let quizCategory = "general";
let quizQuestions = [];
let quizIndex = 0;
let quizScore = 0;
let xp = Number(localStorage.getItem("legalease_xp") || 0);
let currentLang = "en";

/* ── Learn chatbot conversation history ── */
let learnHistory = [];   // [{ role: "user"|"assistant", content: string }]
const LEARN_HISTORY_LIMIT = 10;  // keep last N turns (each turn = 1 entry)
let currentLawFilter = "all";
let currentLawSearch = "";
let visibleLawCount = 12;
const LAWS_PAGE_SIZE = 12;

const bookmarkedLawIds = new Set(JSON.parse(localStorage.getItem("legalease_bookmarks") || "[]"));
let recentlyViewedLawIds = JSON.parse(localStorage.getItem("legalease_recent_laws") || "[]");
const popularLawIds = [
  "article_14","article_19","article_21","article_32","article_51a",
  "ipc_420","ipc_376","ipc_498a","crpc_154","crpc_438",
  "it_act_66c","it_act_66d","consumer_protection_act","rti_act",
  "domestic_violence_act","posh_act","rera_act","habeas_corpus",
];

/* ─────────────────────────────────────────────────────────────────
   SECTION 5: UTILITY FUNCTIONS
───────────────────────────────────────────────────────────────── */
function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;")
    .replace(/>/g, "&gt;").replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function formatAI(text) {
  return escapeHtml(text || "")
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\n{2,}/g, "<br><br>")
    .replace(/\n/g, "<br>");
}

function loadingMarkup(text = "Thinking...") {
  return `<div class="loading-dots"><span></span><span></span><span></span></div> ${escapeHtml(text)}`;
}

/** Smoothly scroll an element into view, offset by the fixed navbar. */
function scrollToEl(el) {
  if (!el) return;
  const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--nav-h")) || 68;
  const top = el.getBoundingClientRect().top + window.scrollY - navH - 16;
  window.scrollTo({ top, behavior: "smooth" });
}

async function askAI(prompt, mode = "general") {
  const localKey = localStorage.getItem("gemini_api_key");
  
  if (localKey) {
    // Direct frontend call to Gemini if local key exists
    const GEMINI_URL = "https://generativelanguage.googleapis.com/v1/models/gemini-2.0-flash:generateContent?key=";
    const systemPrompt = (mode === "legal-tutor" || mode === "quiz-json" || mode === "law-card")
      ? ""
      : "You are LegalEase AI, an Indian legal information assistant. Give clear, practical, India-focused guidance. Mention relevant laws or authorities when useful. Do not pretend to be a lawyer, do not create certainty where facts are missing, and advise consulting a qualified lawyer or emergency authority for serious matters.\n\n";

    const res = await fetch(`${GEMINI_URL}${localKey}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: systemPrompt + `Mode: ${mode}\n\nUser request:\n${prompt}` }] }],
        generationConfig: { temperature: mode === "quiz-json" ? 0.7 : 0.5, maxOutputTokens: mode === "quiz-json" ? 8192 : 1400 }
      })
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data?.error?.message || "Gemini direct request failed");
    return data.candidates[0].content.parts[0].text;
  }

  // Fallback to server endpoint
  const res = await fetch(API_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt, mode }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data?.error || "AI request failed");
  return data.reply;
}

const callGemini = askAI;

function getLawKey(title) {
  return String(title || "").toLowerCase().replace(/\bsection\b/g, "").replace(/[^a-z0-9]+/g, "").trim();
}

function extractBetween(text, startLabel, endLabel) {
  const source = String(text || "");
  const startIndex = source.toUpperCase().indexOf(startLabel.toUpperCase());
  if (startIndex === -1) return "";
  const contentStart = startIndex + startLabel.length;
  const endIndex = source.toUpperCase().indexOf(endLabel.toUpperCase(), contentStart);
  return source.slice(contentStart, endIndex === -1 ? source.length : endIndex).trim();
}

function extractAfter(text, label) {
  const source = String(text || "");
  const startIndex = source.toUpperCase().indexOf(label.toUpperCase());
  return startIndex === -1 ? "" : source.slice(startIndex + label.length).trim();
}

function parseLawResponse(text) {
  return {
    real: extractBetween(text, "REAL DEFINITION:", "SIMPLE MEANING:"),
    simple: extractBetween(text, "SIMPLE MEANING:", "REAL LIFE EXAMPLE:"),
    example: extractAfter(text, "REAL LIFE EXAMPLE:"),
  };
}

function hasStructuredLawContent(law) {
  return Boolean(law?.real && law?.simple && law?.example);
}

function createLawPrompt(lawOrTitle) {
  const law = typeof lawOrTitle === "string"
    ? { title: lawOrTitle, short: "", category: "general", type: "law", keywords: [] }
    : lawOrTitle;
  return `Explain this Indian law entry:
Title: ${law.title}
Type: ${law.type}
Category: ${law.category}
Short index note: ${law.short}
Keywords: ${(law.keywords || []).join(", ")}

Return only this exact structure:

REAL DEFINITION:
Use formal legal language. Mention the relevant law, article, section, act, core legal test, and scope where known. Do not invent exact statutory wording if uncertain; summarize accurately and say when language is simplified.

SIMPLE MEANING:
Explain it in beginner-friendly language with a simple example. Avoid jargon.

REAL LIFE EXAMPLE:
Give one realistic India-focused scenario or case-style example showing how the law is applied.

Preferred language: ${currentLang}.`;
}

function renderLawSections(law, options = {}) {
  const sourceLabel = options.sourceLabel || "AI structured explanation";
  const statusMarkup = options.status
    ? `<div class="law-source-note ${options.statusType || ""}">${escapeHtml(options.status)}</div>` : "";
  return `
    <div class="law-detail-header">
      <div>
        <div class="section-label">Structured Law View</div>
        <h2>${escapeHtml(law.title)}</h2>
      </div>
      <span class="law-source-pill">${escapeHtml(sourceLabel)}</span>
    </div>
    ${statusMarkup}
    <div class="law-sections-grid">
      <section class="law-detail-section">
        <div class="law-section-title">⚖️ Real Definition</div>
        <div class="law-section-body">${formatAI(law.real)}</div>
      </section>
      <section class="law-detail-section">
        <div class="law-section-title">💡 Simple Meaning</div>
        <div class="law-section-body">${formatAI(law.simple)}</div>
      </section>
      <section class="law-detail-section">
        <div class="law-section-title">📋 Real-life Example / Case</div>
        <div class="law-section-body">${formatAI(law.example)}</div>
      </section>
    </div>
  `;
}

function renderRawLawResponse(title, rawText, message) {
  return `
    <div class="law-detail-header">
      <div>
        <div class="section-label">Structured Law View</div>
        <h2>${escapeHtml(title)}</h2>
      </div>
      <span class="law-source-pill warning">Review response</span>
    </div>
    <div class="law-source-note warning">${escapeHtml(message)}</div>
    <div class="ai-result-box law-raw-response">${formatAI(rawText)}</div>
  `;
}

function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2400);
}

function saveApiKey() {
  const keyInput = document.getElementById("api-key-input");
  const key = keyInput?.value.trim();
  if (key) {
    localStorage.setItem("gemini_api_key", key);
    showToast("Gemini AI is now connected!");
    closeApiModal();
  } else {
    showToast("Please enter a valid API key.");
  }
}

function openApiModal() {
  const modal = document.getElementById("api-modal");
  const input = document.getElementById("api-key-input");
  if (modal) modal.classList.add("open");
  if (input) input.value = localStorage.getItem("gemini_api_key") || "";
}

function closeApiModal() {
  document.getElementById("api-modal")?.classList.remove("open");
}

function setLang(lang) {
  currentLang = lang;
  document.querySelectorAll(".lang-btn").forEach((btn) => btn.classList.remove("active"));
  document.getElementById(`lang-${lang}`)?.classList.add("active");
  showToast(lang === "hi" ? "Hindi response preference enabled." : "English response preference enabled.");
}

function toggleMobileNav() {
  const navLinks = document.getElementById("nav-links");
  const hamburger = document.getElementById("hamburger");
  const isOpen = navLinks?.classList.toggle("open");
  if (hamburger) hamburger.textContent = isOpen ? "✕" : "☰";
}

function showPage(page) {
  document.querySelectorAll(".page").forEach((el) => el.classList.remove("active"));
  document.getElementById(`page-${page}`)?.classList.add("active");
  document.querySelectorAll(".nav-link").forEach((link) => {
    const label = link.querySelector("span:last-child")?.textContent.trim().toLowerCase();
    link.classList.toggle("active", label === page);
  });
  // Manage category bar active state based on current page
  if (page === "education") {
    // Reset to 'all' when entering Education via navbar
    document.querySelectorAll(".cat-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.cat === "all");
    });
    filterEducation("all");
  } else {
    // Clear all category highlights when leaving Education
    document.querySelectorAll(".cat-btn").forEach((btn) => {
      btn.classList.remove("active");
    });
  }
  // Auto-close mobile menu when a link is clicked
  const navLinks = document.getElementById("nav-links");
  const hamburger = document.getElementById("hamburger");
  if (navLinks?.classList.contains("open")) {
    navLinks.classList.remove("open");
    if (hamburger) hamburger.textContent = "☰";
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function setHeroSearch(text) {
  const input = document.getElementById("hero-search-input");
  if (input) input.value = text;
  heroSearch();
}

async function heroSearch() {
  const input = document.getElementById("hero-search-input");
  const panel = document.getElementById("answer-panel");
  const body = document.getElementById("answer-body");
  const query = input?.value.trim();
  if (!query) return showToast("Type a legal question first.");
  panel?.classList.add("visible");
  if (body) body.innerHTML = loadingMarkup("Preparing legal answer...");
  scrollToEl(panel);
  try {
    const reply = await askAI(
      `Answer this Indian legal question in simple language. Include: short answer, relevant law or right, practical next steps, and a caution where needed.\n\nQuestion: ${query}`,
      "hero-search"
    );
    if (body) body.innerHTML = formatAI(reply);
  } catch (error) {
    if (body) body.textContent = error.message;
  }
}

function closeAnswerPanel() { document.getElementById("answer-panel")?.classList.remove("visible"); }

function setSimplifierLevel(level) {
  simplifierLevel = level;
  document.querySelectorAll(".level-pill").forEach((btn) => btn.classList.remove("active"));
  globalThis.event?.target?.classList.add("active");
}

async function simplifyLaw() {
  const input = document.getElementById("simplifier-input");
  const result = document.getElementById("simplifier-result");
  const term = input?.value.trim();
  if (!term) return showToast("Enter a law or legal term.");
  result.style.display = "block";
  result.innerHTML = loadingMarkup("Simplifying...");
  scrollToEl(result);
  try {
    const reply = await askAI(
      `Explain "${term}" under Indian law for a ${simplifierLevel}. Keep it clear and useful. Include meaning, example, rights/duties, and what to do next if it affects the user. Preferred language: ${currentLang}.`,
      "law-simplifier"
    );
    result.innerHTML = formatAI(reply);
    addXP(5);
  } catch (error) {
    result.textContent = error.message;
  }
}

function addMessage(containerId, text, sender = "user", name) {
  const container = document.getElementById(containerId);
  if (!container) return null;
  const isAI = sender === "ai";
  const msg = document.createElement("div");
  msg.className = `chat-msg ${isAI ? "ai-msg" : "user-msg"}`;
  msg.innerHTML = `
    <div class="msg-avatar">${isAI ? "AI" : "You"}</div>
    <div class="msg-content">
      <div class="msg-name">${escapeHtml(name || (isAI ? "LegalEase AI" : "You"))}</div>
      <div class="msg-text">${formatAI(text)}</div>
    </div>
  `;
  container.appendChild(msg);
  container.scrollTop = container.scrollHeight;
  return msg.querySelector(".msg-text");
}

/* ─────────────────────────────────────────────────────────────────
   LEARN CHATBOT — Context-aware tutor helpers
───────────────────────────────────────────────────────────────── */

/** Words/phrases that mean "keep going — don't change topic". */
const CONTINUATION_TRIGGERS = new Set([
  "proceed", "next", "continue", "go on", "go ahead", "ok", "okay",
  "yes", "yeah", "yep", "sure", "more", "explain more", "keep going",
  "tell me more", "and then", "what's next", "what next", "next step",
  "next steps", "got it", "understood", "i see", "i understand",
  "haan", "haan ji", "aage", "aage batao", "theek hai", "samajh gaya",
]);

/**
 * Detect whether the user just wants the AI to continue the current
 * teaching thread without switching topics.
 */
function isContinuationIntent(text) {
  const lower = text.toLowerCase().trim();
  // Exact match against known triggers
  if (CONTINUATION_TRIGGERS.has(lower)) return true;
  // Very short input (≤3 words) that doesn't look like a new topic question
  const wordCount = lower.split(/\s+/).length;
  if (wordCount <= 3 && !lower.includes("?") && !/\b(what|who|why|when|where|how|explain|tell|define|meaning)\b/.test(lower)) {
    return true;
  }
  return false;
}

/**
 * Build the full prompt for Gemini, embedding conversation history so it
 * understands context, plus an explicit instruction based on intent.
 */
function buildLearnPrompt(userText, history, isContinuation) {
  const SYSTEM = `You are LegalEase AI, a friendly step-by-step legal tutor specialising in Indian law.

RULES YOU MUST FOLLOW:
1. You are teaching a student — maintain a clear, logical flow across the conversation.
2. NEVER interpret words like "proceed", "next", "continue", "ok", "yes" as legal terms. They always mean the student wants you to continue your previous explanation.
3. If the student says something like "proceed" or "next step", continue exactly where you left off — do NOT introduce a new topic.
4. Only switch topics if the student explicitly names a new legal concept or asks a new question.
5. Use simple language, Indian examples, and numbered steps where helpful.
6. End each response with a natural invitation to continue (e.g., "Want me to go deeper into the next part?").
7. Preferred response language: ${currentLang === "hi" ? "Hindi" : "English"}.`;

  // Format conversation history as a readable thread
  const historyBlock = history.length > 0
    ? history
        .slice(-LEARN_HISTORY_LIMIT)
        .map(m => `${m.role === "user" ? "Student" : "Tutor"}: ${m.content}`)
        .join("\n")
    : "(This is the start of the conversation.)";

  // Instruction changes based on intent
  const instruction = isContinuation
    ? `The student said: "${userText}"
This clearly means they want you to CONTINUE your previous explanation — do NOT change the topic.
Pick up exactly where you left off and teach the next logical step or point.`
    : `The student has a new request: "${userText}"
Teach this topic step-by-step like a tutor. Use simple language, a real-life Indian example, and end with a summary or a prompt to continue.`;

  return `${SYSTEM}

--- Conversation so far ---
${historyBlock}

--- Current instruction ---
${instruction}`;
}

/**
 * Append a turn to learnHistory, trimming to the last LEARN_HISTORY_LIMIT entries.
 */
function appendToLearnHistory(role, content) {
  learnHistory.push({ role, content });
  if (learnHistory.length > LEARN_HISTORY_LIMIT * 2) {
    learnHistory = learnHistory.slice(-LEARN_HISTORY_LIMIT * 2);
  }
}

/** Reset the learn chatbot to a fresh session. */
function resetLearnChat() {
  learnHistory = [];
  const container = document.getElementById("learn-messages");
  if (container) container.innerHTML = "";
  showToast("Chat reset — starting fresh!");
}

/** Trigger continuation explicitly from the "Continue Learning" button. */
function continueLearnChat() {
  sendLearnMessage("proceed");
}

async function sendLearnMessage(message) {
  const input = document.getElementById("learn-input");
  const text = (message || input?.value || "").trim();
  if (!text) return;
  if (input) input.value = "";

  // Show user message in UI
  addMessage("learn-messages", text, "user");

  // Scroll chat area into view
  scrollToEl(document.getElementById("learn-messages"));

  // Show loading state
  const pending = addMessage("learn-messages", "", "ai", "LegalEase AI");
  pending.innerHTML = loadingMarkup("Teaching...");

  // Determine intent BEFORE appending to history
  const continuation = isContinuationIntent(text);

  // Record user turn in history
  appendToLearnHistory("user", text);

  try {
    const prompt = buildLearnPrompt(text, learnHistory, continuation);
    const reply = await askAI(prompt, "legal-tutor");

    // Record AI response in history
    appendToLearnHistory("assistant", reply);

    pending.innerHTML = formatAI(reply);
    addXP(5);
  } catch (error) {
    pending.textContent = error.message;
  }
}

async function sendEmergencyMessage(message) {
  const input = document.getElementById("emergency-input");
  const text = (message || input?.value || "").trim();
  if (!text) return;
  if (input) input.value = "";
  addMessage("emergency-messages", text, "user");
  scrollToEl(document.getElementById("emergency-messages"));
  const pending = addMessage("emergency-messages", "Checking urgent steps...", "ai", "Emergency Legal AI");
  pending.innerHTML = loadingMarkup("Checking urgent steps...");
  try {
    const reply = await askAI(
      `This may be urgent. Give India-focused immediate legal guidance. Include: first 3 actions, emergency contacts if relevant, evidence to preserve, applicable law, and when to contact police/lawyer. Avoid panic.\n\nSituation: ${text}`,
      "emergency"
    );
    pending.innerHTML = formatAI(reply);
    addXP(5);
  } catch (error) {
    pending.textContent = error.message;
  }
}

/* ─────────────────────────────────────────────────────────────────
   SECTION 6: LAW LIBRARY — FILTER, SEARCH & RENDER
───────────────────────────────────────────────────────────────── */

/** Category metadata: label, emoji, colour class */
const CATEGORY_META = {
  constitutional: { label: "Constitutional", emoji: "⚖️", cls: "cat-constitutional" },
  criminal:       { label: "Criminal",       emoji: "🔒", cls: "cat-criminal" },
  cyber:          { label: "Cyber",          emoji: "💻", cls: "cat-cyber" },
  family:         { label: "Family",         emoji: "👨‍👩‍👧", cls: "cat-family" },
  civil:          { label: "Civil",          emoji: "🏛️", cls: "cat-civil" },
  corporate:      { label: "Corporate",      emoji: "🏢", cls: "cat-corporate" },
  tax:            { label: "Tax",            emoji: "💰", cls: "cat-tax" },
};

function categoryLabel(category) {
  return CATEGORY_META[category]?.label || category;
}

function categoryEmoji(category) {
  return CATEGORY_META[category]?.emoji || "📜";
}

function categoryCls(category) {
  return CATEGORY_META[category]?.cls || "";
}

function typeLabel(type) {
  const map = {
    article: "ART",
    ipc: "IPC",
    crpc: "CrPC",
    bnss: "BNSS",
    bns: "BNS",
    it_act: "IT Act",
    act: "ACT",
    writ: "WRIT",
    case: "CASE",
  };
  return map[type] || type.toUpperCase();
}

function filterLaws(category) {
  // Update category bar active state
  document.querySelectorAll(".cat-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.cat === category);
  });
  // Navigate to education if not already there
  const educationPage = document.getElementById("page-education");
  if (!educationPage?.classList.contains("active")) {
    // Navigate without resetting the category bar
    document.querySelectorAll(".page").forEach((el) => el.classList.remove("active"));
    educationPage?.classList.add("active");
    document.querySelectorAll(".nav-link").forEach((link) => {
      const label = link.querySelector("span:last-child")?.textContent.trim().toLowerCase();
      link.classList.toggle("active", label === "education");
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  filterEducation(category);
}

function filterEducation(dept) {
  currentLawFilter = dept;
  visibleLawCount = LAWS_PAGE_SIZE;
  document.querySelectorAll(".dept-btn[data-dept]").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.dept === dept);
  });
  renderLawCards();
}

function updateLawSearch() {
  const input = document.getElementById("law-search-input");
  currentLawSearch = input?.value.trim().toLowerCase() || "";
  visibleLawCount = LAWS_PAGE_SIZE;
  renderLawCards();
  renderSearchSuggestions();
}

function clearLawSearch() {
  const input = document.getElementById("law-search-input");
  if (input) input.value = "";
  currentLawSearch = "";
  visibleLawCount = LAWS_PAGE_SIZE;
  renderLawCards();
  hideSearchSuggestions();
}

function getLawById(id) {
  return lawsDatabase.find((law) => law.id === id);
}

function normalizeLawText(law) {
  return [law.id, law.title, law.category, law.short, law.type, ...(law.keywords || [])]
    .join(" ")
    .toLowerCase();
}

function getFilteredLaws() {
  const tokens = currentLawSearch.split(/\s+/).filter(Boolean);
  return lawsDatabase.filter((law) => {
    const categoryMatch = currentLawFilter === "all" || law.category === currentLawFilter;
    if (!categoryMatch) return false;
    if (!tokens.length) return true;
    const haystack = normalizeLawText(law);
    return tokens.every((token) => haystack.includes(token));
  });
}

function renderLawCard(law) {
  const isBookmarked = bookmarkedLawIds.has(law.id);
  const catCls = categoryCls(law.category);
  return `
    <article class="law-card ${catCls}" onclick="openLawModalById('${escapeHtml(law.id)}')">
      <button class="bookmark-btn ${isBookmarked ? "active" : ""}"
        onclick="toggleBookmark(event, '${escapeHtml(law.id)}')"
        aria-label="${isBookmarked ? "Remove bookmark" : "Bookmark law"}">
        ${isBookmarked ? "⭐ Saved" : "☆ Save"}
      </button>
      <div class="law-card-icon">${escapeHtml(typeLabel(law.type))}</div>
      <div class="law-card-tag ${catCls}">${escapeHtml(categoryEmoji(law.category))} ${escapeHtml(categoryLabel(law.category))}</div>
      <h3>${escapeHtml(law.title)}</h3>
      <p>${escapeHtml(law.short)}</p>
      <div class="law-meta">
        <span class="law-type-badge">${escapeHtml(typeLabel(law.type))}</span>
        <span class="learn-more-link">⚡ AI Explain →</span>
      </div>
    </article>
  `;
}

function renderLawStrip(containerId, ids, emptyText) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const laws = ids.map(getLawById).filter(Boolean).slice(0, 8);
  container.innerHTML = laws.length
    ? laws.map((law) => `
        <button class="law-chip-card" onclick="openLawModalById('${escapeHtml(law.id)}')">
          <span>${escapeHtml(categoryEmoji(law.category))} ${escapeHtml(law.title)}</span>
          <small>${escapeHtml(categoryLabel(law.category))}</small>
        </button>
      `).join("")
    : `<p class="empty-law-note">${escapeHtml(emptyText)}</p>`;
}

function renderLawStats(totalMatches) {
  const stats = document.getElementById("law-library-stats");
  if (!stats) return;
  const articleCount = constitutionalLaws.length;
  const actCount = majorLawSummaries.length;
  stats.innerHTML = `
    <span>📜 ${lawsDatabase.length} laws indexed</span>
    <span>⚖️ ${articleCount} constitution articles</span>
    <span>🏛️ ${actCount} acts &amp; sections</span>
    <span>🔍 ${totalMatches} results</span>
  `;
}

function loadMoreLaws() {
  visibleLawCount += LAWS_PAGE_SIZE;
  renderLawCards();
}

function toggleBookmark(event, lawId) {
  event?.stopPropagation();
  if (bookmarkedLawIds.has(lawId)) {
    bookmarkedLawIds.delete(lawId);
    showToast("Bookmark removed.");
  } else {
    bookmarkedLawIds.add(lawId);
    showToast("Law bookmarked! View in Dashboard →");
  }
  localStorage.setItem("legalease_bookmarks", JSON.stringify([...bookmarkedLawIds]));
  renderLawCards();
  renderLawStrip("bookmarked-laws", [...bookmarkedLawIds], "Bookmarked laws will appear here.");
  if (typeof updateProfileLists === 'function') updateProfileLists();
}

function rememberViewedLaw(lawId) {
  recentlyViewedLawIds = [lawId, ...recentlyViewedLawIds.filter((id) => id !== lawId)].slice(0, 8);
  localStorage.setItem("legalease_recent_laws", JSON.stringify(recentlyViewedLawIds));
  renderLawStrip("recent-laws", recentlyViewedLawIds, "Open a law to build your recent list.");
  if (typeof updateProfileLists === 'function') updateProfileLists();
}

function renderLawCards() {
  const grid = document.getElementById("law-cards-grid");
  if (!grid) return;
  const filteredLaws = getFilteredLaws();
  const visibleLaws = filteredLaws.slice(0, visibleLawCount);
  const loadMoreBtn = document.getElementById("load-more-laws");
  const resultCount = document.getElementById("law-result-count");

  grid.innerHTML = visibleLaws.length
    ? visibleLaws.map(renderLawCard).join("")
    : `<div class="empty-law-state">
        <div style="font-size:3rem;margin-bottom:12px">🔍</div>
        <p>No laws found. Try searching "Article 21", "IPC 420", "bail", "consumer", or "cyber".</p>
        <button class="btn btn-outline" style="margin-top:14px" onclick="clearLawSearch()">Clear Search</button>
      </div>`;

  if (loadMoreBtn) loadMoreBtn.style.display = visibleLawCount < filteredLaws.length ? "inline-flex" : "none";
  if (resultCount) resultCount.textContent = `${visibleLaws.length} of ${filteredLaws.length} results`;

  renderLawStats(filteredLaws.length);
  renderLawStrip("popular-laws", popularLawIds, "Popular laws will appear here.");
  renderLawStrip("recent-laws", recentlyViewedLawIds, "Open a law to build your recent list.");
  renderLawStrip("bookmarked-laws", [...bookmarkedLawIds], "Bookmarked laws will appear here.");
}

/* ─── Search Suggestions ─────────────────────────────────────────── */
function renderSearchSuggestions() {
  const suggestionsEl = document.getElementById("law-search-suggestions");
  if (!suggestionsEl) return;
  if (!currentLawSearch || currentLawSearch.length < 2) {
    hideSearchSuggestions();
    return;
  }
  const suggestions = lawsDatabase
    .filter((law) => normalizeLawText(law).includes(currentLawSearch))
    .slice(0, 6);

  if (!suggestions.length) { hideSearchSuggestions(); return; }
  suggestionsEl.innerHTML = suggestions.map((law) => `
    <button class="search-suggestion-item" onclick="selectSuggestion('${escapeHtml(law.id)}')">
      <span class="sug-emoji">${escapeHtml(categoryEmoji(law.category))}</span>
      <span class="sug-title">${escapeHtml(law.title)}</span>
      <span class="sug-cat">${escapeHtml(categoryLabel(law.category))}</span>
    </button>
  `).join("");
  suggestionsEl.style.display = "block";
}

function hideSearchSuggestions() {
  const el = document.getElementById("law-search-suggestions");
  if (el) el.style.display = "none";
}

function selectSuggestion(lawId) {
  hideSearchSuggestions();
  openLawModalById(lawId);
}

/* ─────────────────────────────────────────────────────────────────
   SECTION 7: LAW MODAL
───────────────────────────────────────────────────────────────── */
function openLawModalById(lawId) {
  const law = getLawById(lawId);
  if (!law) return showToast("Law not found.");
  rememberViewedLaw(lawId);
  openLawModal(law);
}

async function openLawModal(lawOrTitle) {
  const law = typeof lawOrTitle === "string"
    ? lawsDatabase.find((e) => e.title === lawOrTitle) || { title: lawOrTitle, short: "", category: "general", type: "law" }
    : lawOrTitle;
  const title = law.title;
  const overlay = document.getElementById("law-modal-overlay");
  const content = document.getElementById("law-modal-content");
  overlay?.classList.add("open");

  if (content) {
    content.innerHTML = `
      <div class="law-detail-header">
        <div>
          <div class="section-label">Structured Law View</div>
          <h2>${escapeHtml(title)}</h2>
          <p class="law-modal-summary">${escapeHtml(law.short || "AI-generated legal explanation")}</p>
          <div class="law-modal-meta">
            <span class="law-card-tag ${categoryCls(law.category)}">${categoryEmoji(law.category)} ${escapeHtml(categoryLabel(law.category))}</span>
            <span class="law-type-badge">${escapeHtml(typeLabel(law.type))}</span>
          </div>
        </div>
        <span class="law-source-pill">Gemini AI</span>
      </div>
      <div class="ai-result-box">${loadingMarkup("Generating structured AI explanation...")}</div>
    `;
  }

  try {
    const reply = await callGemini(createLawPrompt(law), "law-card");
    const parsedLaw = { title, ...parseLawResponse(reply) };
    if (!content) return;
    if (hasStructuredLawContent(parsedLaw)) {
      content.innerHTML = renderLawSections(parsedLaw) + renderModalActions(law);
    } else {
      content.innerHTML = renderRawLawResponse(title, reply,
        "Gemini responded, but section headings were not detected. Showing the raw response.") + renderModalActions(law);
    }
  } catch (error) {
    if (!content) return;
    content.innerHTML = `
      <div class="law-detail-header">
        <div><div class="section-label">Structured Law View</div><h2>${escapeHtml(title)}</h2>
          <p class="law-modal-summary">${escapeHtml(law.short || "")}</p></div>
        <span class="law-source-pill warning">Unavailable</span>
      </div>
      <div class="law-source-note warning">Gemini could not generate this explanation. Please try again.</div>
      <div class="ai-result-box">${escapeHtml(error.message)}</div>
    `;
  }
}

function renderModalActions(law) {
  const isBookmarked = bookmarkedLawIds.has(law.id);
  return `
    <div class="modal-actions-bar">
      <button class="btn btn-outline btn-sm" onclick="toggleBookmark(event, '${escapeHtml(law.id)}')">
        ${isBookmarked ? "⭐ Saved" : "☆ Save"}
      </button>
      <button class="btn btn-outline btn-sm" onclick="openLawModal('${escapeHtml(law.title)}')">
        🔄 Regenerate
      </button>
      <button class="btn btn-outline btn-sm" onclick="shareToSearch('${escapeHtml(law.title)}')">
        🔍 Ask AI About This
      </button>
    </div>
  `;
}

function shareToSearch(title) {
  closeLawModal({ target: { id: "law-modal-overlay" } });
  const input = document.getElementById("hero-search-input");
  if (input) input.value = `Explain ${title} with a practical example`;
  showPage("home");
  heroSearch();
}

function closeLawModal(event) {
  if (event && event.target?.id !== "law-modal-overlay") return;
  document.getElementById("law-modal-overlay")?.classList.remove("open");
}

/* ─────────────────────────────────────────────────────────────────
   SECTION 8: DOCUMENT GENERATOR
───────────────────────────────────────────────────────────────── */
function switchDocTab(type) {
  document.querySelectorAll(".doc-tab").forEach((btn) => btn.classList.remove("active"));
  globalThis.event?.target?.classList.add("active");
  document.querySelectorAll(".doc-form").forEach((form) => form.classList.remove("active"));
  document.getElementById(`form-${type}`)?.classList.add("active");
}

function valueOf(id) {
  return document.getElementById(id)?.value.trim() || "Not provided";
}

function getDocumentPrompt(type) {
  const prompts = {
    fir: `Draft an FIR complaint for India using these details:
Name: ${valueOf("fir-name")}
Date of incident: ${valueOf("fir-date")}
Place: ${valueOf("fir-place")}
Incident: ${valueOf("fir-incident")}
Accused: ${valueOf("fir-accused")}
Witnesses: ${valueOf("fir-witness")}`,
    notice: `Draft a formal Indian legal notice using these details:
Sender: ${valueOf("notice-from")}
Recipient: ${valueOf("notice-to")}
Subject: ${valueOf("notice-subject")}
Facts: ${valueOf("notice-facts")}
Demand: ${valueOf("notice-demand")}`,
    rti: `Draft an RTI application under the Right to Information Act, 2005:
Applicant: ${valueOf("rti-name")}
Public authority: ${valueOf("rti-authority")}
Information sought: ${valueOf("rti-info")}
Period: ${valueOf("rti-period")}`,
    complaint: `Draft a formal complaint letter for India:
Complainant: ${valueOf("comp-name")}
Authority: ${valueOf("comp-to")}
Subject: ${valueOf("comp-subject")}
Details: ${valueOf("comp-details")}
Relief sought: ${valueOf("comp-relief")}`,
  };
  return `${prompts[type]}\n\nReturn a clean, editable document draft with placeholders for missing facts. Add a brief note saying it should be reviewed by a qualified lawyer before submission.`;
}

async function generateDocument(type) {
  const preview = document.getElementById("doc-preview");
  const copyBtn = document.getElementById("copy-doc-btn");
  if (!preview) return;
  preview.innerHTML = loadingMarkup("Drafting document...");
  copyBtn.style.display = "none";
  // scrollToEl(preview); // Removed automatic scroll as result is in side panel
  try {
    currentDoc = await askAI(getDocumentPrompt(type), "document-generator");
    preview.innerHTML = formatAI(currentDoc);
    copyBtn.style.display = "inline-flex";
    addXP(5);
  } catch (error) {
    preview.textContent = error.message;
  }
}

async function copyDocument() {
  if (!currentDoc) return;
  await navigator.clipboard.writeText(currentDoc);
  showToast("Document copied.");
}

/* ─────────────────────────────────────────────────────────────────
   SECTION 9: SCENARIO ANALYZER
───────────────────────────────────────────────────────────────── */
function setScenario(text) {
  const area = document.getElementById("scenario-text");
  if (area) area.value = text;
}

async function analyzeScenario() {
  const text = document.getElementById("scenario-text")?.value.trim();
  const category = document.getElementById("scenario-category")?.value || "general";
  const placeholder = document.getElementById("scenario-placeholder");
  const result = document.getElementById("scenario-result");
  if (!text) return showToast("Describe your situation first.");
  if (placeholder) placeholder.style.display = "none";
  result.style.display = "block";
  result.innerHTML = loadingMarkup("Analyzing scenario...");
  // scrollToEl(result); // Removed automatic scroll as result is in side panel
  try {
    const reply = await askAI(
      `Analyze this Indian legal scenario. Category: ${category}. Include issue summary, applicable laws, user's possible rights, risk level, documents/evidence needed, recommended next steps, and where to seek help.\n\nScenario: ${text}`,
      "scenario-analysis"
    );
    result.innerHTML = `<div class="ai-result-box">${formatAI(reply)}</div>`;
    addXP(5);
  } catch (error) {
    result.textContent = error.message;
  }
}

/* ─────────────────────────────────────────────────────────────────
   SECTION 10: QUIZ
───────────────────────────────────────────────────────────────── */
function selectQuizCat(button, category) {
  quizCategory = category;
  document.querySelectorAll("#quiz-start-screen .dept-btn").forEach((btn) => btn.classList.remove("active"));
  button.classList.add("active");
}

function parseQuiz(raw) {
  if (!raw || typeof raw !== "string") return null;

  // Step 1: Strip markdown code fences if present (```json ... ``` or ``` ... ```)
  let cleaned = raw.replace(/```(?:json)?\s*/gi, "").replace(/```\s*/gi, "").trim();

  // Step 2: Extract the JSON array — find the outermost [ ... ]
  const arrayMatch = cleaned.match(/\[[\s\S]*\]/);
  if (!arrayMatch) return null;

  try {
    const parsed = JSON.parse(arrayMatch[0]);
    if (!Array.isArray(parsed) || parsed.length === 0) return null;

    return parsed
      .filter((item) => item && item.question && Array.isArray(item.options) && item.options.length >= 2)
      .map((item) => {
        // Normalise answerIndex: Gemini sometimes returns "answer" (text) instead of "answerIndex" (number)
        let answerIndex = item.answerIndex;
        if (typeof answerIndex !== "number") {
          // Try to match the "answer" text against the options list
          const answerText = String(item.answer || "").trim().toLowerCase();
          answerIndex = item.options.findIndex(
            (opt) => String(opt).trim().toLowerCase() === answerText
          );
          // If still not found, try partial match
          if (answerIndex === -1) {
            answerIndex = item.options.findIndex(
              (opt) => String(opt).trim().toLowerCase().includes(answerText) ||
                        answerText.includes(String(opt).trim().toLowerCase())
            );
          }
          if (answerIndex === -1) answerIndex = 0; // last resort default
        }
        // Clamp to valid range
        answerIndex = Math.max(0, Math.min(answerIndex, item.options.length - 1));

        return {
          question: String(item.question).trim(),
          options: item.options.map((o) => String(o).trim()),
          answerIndex,
          explanation: String(item.explanation || item.reason || "").trim(),
        };
      })
      .filter((item) => item.question.length > 0 && item.options.length >= 2);
  } catch (e) {
    console.warn("Quiz JSON parse error:", e.message, "\nRaw:", arrayMatch[0].slice(0, 200));
    return null;
  }
}

/* ── Quiz attempt counter: tracks how many times each category has been played ── */
const quizAttemptCounters = JSON.parse(localStorage.getItem("legalease_quiz_attempts") || "{}");

function buildQuizPrompt(category, difficulty) {
  const difficultyMap = {
    easy:   "easy (basic definitions, landmark acts, common procedures)",
    medium: "medium (specific sections, procedural rules, case applications)",
    hard:   "hard (obscure sections, nuanced distinctions, specific judgments, amendment numbers)",
  };
  const difficultyLabel = difficultyMap[difficulty] || difficultyMap.medium;

  /* Unique seed so Gemini never serves a cached response */
  const seed = `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;

  return `You are a legal quiz generator for an Indian law learning platform.
[SEED: ${seed}]

Generate exactly 5 unique multiple-choice questions about Indian ${category} law.
Difficulty level: ${difficultyLabel}

STRICT RULES:
1. All 5 questions must be factually accurate under current Indian law (including BNS/BNSS 2023).
2. Every question must cover a DIFFERENT legal concept — no repetition.
3. All 4 answer options per question must be plausible.
4. The explanation must cite the exact law/article/section/case that applies.
5. Return ONLY a raw JSON array — absolutely no markdown fences.

REQUIRED FORMAT:
[
  {
    "question": "Question text here?",
    "options": ["Option A", "Option B", "Option C", "Option D"],
    "answer": "correct option text",
    "explanation": "Explanation citing exact law/section/case."
  }
]`;
}

/* ── Pick 5 random non-repeating questions from a pool ── */
function pickRandom5(pool) {
  if (!pool || pool.length === 0) return [];
  if (pool.length <= 5) return pool.slice();

  const picked = [];
  const usedIndices = new Set();

  while (picked.length < 5 && usedIndices.size < pool.length) {
    /* Your suggested approach: Math.random() * pool.length → random index */
    const idx = Math.floor(Math.random() * pool.length);
    if (!usedIndices.has(idx)) {
      usedIndices.add(idx);
      picked.push(pool[idx]);
    }
  }
  return picked;
}

/* ── Global quiz difficulty & timer state ── */
let quizDifficulty = "medium";  // "easy" | "medium" | "hard"
let quizTimerInterval = null;
let quizTimeLeft = 0;
const QUIZ_TIME_PER_QUESTION = { easy: 30, medium: 25, hard: 20 };

function selectQuizDifficulty(button, level) {
  quizDifficulty = level;
  document.querySelectorAll("#quiz-difficulty-btns .dept-btn").forEach((b) => b.classList.remove("active"));
  button.classList.add("active");
}

async function startQuiz() {
  /* Hide start/result, show question screen */
  document.getElementById("quiz-start-screen").style.display = "none";
  document.getElementById("quiz-result-screen").style.display = "none";
  document.getElementById("quiz-question-screen").style.display = "block";

  /* Reset state */
  quizIndex = 0;
  quizScore = 0;
  clearInterval(quizTimerInterval);

  /* Reset progress bar */
  const progress = document.getElementById("quiz-progress");
  if (progress) progress.style.width = "0%";

  /* Show loading state */
  document.getElementById("quiz-card").innerHTML = `
    <div style="text-align:center;padding:40px 20px">
      <div class="loading-dots"><span></span><span></span><span></span></div>
      <p style="color:var(--text2);margin-top:16px;font-size:.95rem">
        🤖 Generating questions for <strong>${quizCategory}</strong> law…
        <br><span style="font-size:.82rem;opacity:.7">Creating a fresh set of 5 questions in real-time</span>
      </p>
    </div>
  `;

  try {
    /* Step 1 — Ask Gemini to generate exactly 5 questions */
    const raw = await askAI(buildQuizPrompt(quizCategory, quizDifficulty), "quiz-json");
    const pool = parseQuiz(raw);

    if (pool && pool.length > 0) {
      /* Step 2 — Pick up to 5 questions in case it returns more */
      quizQuestions = pickRandom5(pool);
      console.log(`Quiz: generated ${pool.length} questions.`);
    } else {
      console.warn("Quiz: AI response parsed to empty — using fallback.");
      showToast("AI questions unavailable — using built-in questions.");
      quizQuestions = fallbackQuiz(quizCategory);
    }
  } catch (err) {
    console.warn("Quiz: AI fetch failed —", err.message, "— using fallback.");
    showToast("Couldn't reach AI — using built-in questions.");
    quizQuestions = fallbackQuiz(quizCategory);
  }

  renderQuizQuestion();
}

function fallbackQuiz(category) {
  const banks = {
    general: [
      { question: "Which article protects life and personal liberty in India?", options: ["Article 14", "Article 19", "Article 21", "Article 32"], answerIndex: 2, explanation: "Article 21 says no person shall be deprived of life or personal liberty except by procedure established by law." },
      { question: "What right does Article 32 provide?", options: ["Right to property", "Right to vote", "Right to constitutional remedies", "Right to education"], answerIndex: 2, explanation: "Article 32 is the 'heart and soul' of the Constitution — it allows citizens to move the Supreme Court for enforcement of Fundamental Rights." },
      { question: "Under which act can you request information from a government office?", options: ["Companies Act", "RTI Act 2005", "POCSO Act", "RERA Act"], answerIndex: 1, explanation: "The Right to Information Act, 2005 empowers citizens to request information from public authorities within 30 days." },
      { question: "What is the minimum age of marriage for girls under Indian law?", options: ["16 years", "18 years", "21 years", "No restriction"], answerIndex: 1, explanation: "Under the Prohibition of Child Marriage Act, 2006, the minimum age for marriage is 18 years for girls and 21 years for boys." },
      { question: "Which writ is used to challenge unlawful detention?", options: ["Mandamus", "Certiorari", "Habeas Corpus", "Quo Warranto"], answerIndex: 2, explanation: "Habeas Corpus literally means 'produce the body'. It is filed to challenge illegal detention and is available under Article 32 (Supreme Court) and Article 226 (High Courts)." },
      { question: "How many days does a public authority have to provide RTI information?", options: ["15 days", "30 days", "45 days", "60 days"], answerIndex: 1, explanation: "Under Section 7 of the RTI Act, 2005, the Public Information Officer must provide information within 30 days of receiving the request." },
      { question: "What is the National Legal Services Authority (NALSA) helpline number?", options: ["100", "1800", "15100", "112"], answerIndex: 2, explanation: "15100 is the NALSA helpline for free legal aid, available to economically weaker sections, women, children, and SC/ST persons under the Legal Services Authorities Act, 1987." },
    ],
    criminal: [
      { question: "Which IPC section deals with cheating and dishonestly inducing delivery of property?", options: ["IPC 302", "IPC 498A", "IPC 420", "IPC 376"], answerIndex: 2, explanation: "IPC Section 420 deals with cheating and dishonestly inducing delivery of property, punishable with up to 7 years imprisonment." },
      { question: "Under which CrPC section can anticipatory bail be sought?", options: ["CrPC 437", "CrPC 438", "CrPC 482", "CrPC 154"], answerIndex: 1, explanation: "CrPC Section 438 allows the Sessions Court or High Court to grant anticipatory bail — bail before an arrest is made." },
      { question: "IPC Section 304B deals with:", options: ["Attempt to murder", "Dowry death", "Culpable homicide", "Abetment of suicide"], answerIndex: 1, explanation: "IPC 304B covers dowry death — when a woman dies within 7 years of marriage due to burns or injuries linked to dowry demand by her husband or his relatives." },
      { question: "Which act replaced IPC in India from July 2024?", options: ["BNSS 2023", "BNS 2023", "CrPC 2023", "NDPS Amendment"], answerIndex: 1, explanation: "The Bharatiya Nyaya Sanhita (BNS) 2023 replaced the Indian Penal Code (IPC) 1860, coming into force on 1 July 2024." },
      { question: "Under which section must an FIR be mandatorily registered for a cognizable offence?", options: ["CrPC 161", "CrPC 154", "BNSS 173", "CrPC 167"], answerIndex: 1, explanation: "CrPC Section 154 (now BNSS Section 173) makes FIR registration mandatory for cognizable offences. The Supreme Court in Lalita Kumari v. UP held that registration is compulsory." },
      { question: "What is the minimum sentence under POCSO Act for aggravated penetrative sexual assault on a child?", options: ["5 years", "7 years", "10 years", "20 years"], answerIndex: 3, explanation: "Under Section 6 of the POCSO Act 2012 (amended in 2019), aggravated penetrative sexual assault carries a minimum sentence of 20 years, extendable to life or death." },
      { question: "IT Act Section 66C punishes:", options: ["Hacking", "Identity theft", "Cyber terrorism", "Obscene content"], answerIndex: 1, explanation: "Section 66C of the IT Act 2000 punishes identity theft — using someone else's electronic signature, password, or unique identification feature — with up to 3 years imprisonment." },
    ],
    constitutional: [
      { question: "Which Constitutional Amendment introduced the Right to Education (Article 21A)?", options: ["42nd Amendment", "44th Amendment", "86th Amendment", "97th Amendment"], answerIndex: 2, explanation: "The 86th Constitutional Amendment Act, 2002 inserted Article 21A, making free and compulsory education a Fundamental Right for children aged 6–14 years." },
      { question: "The Basic Structure Doctrine was established in which landmark case?", options: ["Maneka Gandhi v. Union of India", "Kesavananda Bharati v. State of Kerala", "Golaknath v. State of Punjab", "Minerva Mills v. Union of India"], answerIndex: 1, explanation: "Kesavananda Bharati v. State of Kerala (1973) established the Basic Structure Doctrine — Parliament cannot amend the Constitution to destroy its basic structure." },
      { question: "Article 356 of the Constitution provides for:", options: ["National Emergency", "Financial Emergency", "President's Rule in States", "Armed Forces deployment"], answerIndex: 2, explanation: "Article 356 (President's Rule) allows the President to take over governance of a State if constitutional machinery has failed. It was significantly limited by the S.R. Bommai case (1994)." },
      { question: "The Right to Privacy was declared a Fundamental Right by the Supreme Court in:", options: ["Puttaswamy v. Union of India (2017)", "Maneka Gandhi v. UOI (1978)", "Vishaka v. State of Rajasthan (1997)", "ADM Jabalpur v. Shivakant Shukla (1976)"], answerIndex: 0, explanation: "In K.S. Puttaswamy v. Union of India (2017), a 9-judge bench unanimously held that the Right to Privacy is a Fundamental Right under Article 21 of the Constitution." },
      { question: "How many Fundamental Duties are listed in Article 51A of the Constitution?", options: ["9", "10", "11", "12"], answerIndex: 2, explanation: "Article 51A (added by the 42nd Amendment, 1976, and expanded by the 86th Amendment, 2002) currently lists 11 Fundamental Duties for every citizen of India." },
      { question: "Which Article empowers the Supreme Court to issue writs for enforcement of Fundamental Rights?", options: ["Article 21", "Article 226", "Article 32", "Article 13"], answerIndex: 2, explanation: "Article 32 gives the Supreme Court the power to issue writs (habeas corpus, mandamus, prohibition, quo warranto, certiorari) for enforcement of Fundamental Rights. Dr. Ambedkar called it the 'heart and soul' of the Constitution." },
      { question: "The Goods and Services Tax Council is established under which Article?", options: ["Article 265", "Article 270", "Article 279A", "Article 280"], answerIndex: 2, explanation: "Article 279A (inserted by the 101st Constitutional Amendment, 2016) constitutes the GST Council, a joint body of the Union and States to recommend rates and policies for GST." },
    ],
    consumer: [
      { question: "Up to what value of claim can you file a complaint with the District Consumer Commission under the Consumer Protection Act 2019?", options: ["₹20 lakh", "₹50 lakh", "₹1 crore", "₹2 crore"], answerIndex: 1, explanation: "Under the Consumer Protection Act 2019, the District Consumer Disputes Redressal Commission has pecuniary jurisdiction over complaints not exceeding ₹50 lakh." },
      { question: "Under RERA 2016, a builder must deliver possession within the promised time or:", options: ["Pay 6% interest for delay", "Refund with 10% interest", "Refund with SBI MCLR+1% interest", "Face criminal prosecution only"], answerIndex: 2, explanation: "Under Section 18 of RERA 2016, if the promoter fails to deliver possession, the buyer is entitled to a refund with interest at the prescribed rate (SBI MCLR+1%) or can claim compensation." },
      { question: "Who can file a complaint under the Consumer Protection Act 2019?", options: ["Only the purchaser", "Purchaser, legal heirs, registered consumer organisations, or Central/State Government", "Only consumer courts", "Only lawyers"], answerIndex: 1, explanation: "Section 35 of the Consumer Protection Act 2019 allows a complaint to be filed by the consumer, legal heir, recognised consumer organisation, or the Central/State Government." },
      { question: "What is the time limit for filing a consumer complaint from the date the cause of action arises?", options: ["6 months", "1 year", "2 years", "3 years"], answerIndex: 2, explanation: "Under Section 69 of the Consumer Protection Act 2019, a consumer complaint must be filed within 2 years from the date on which the cause of action arose." },
      { question: "E-commerce companies under Consumer Protection (E-Commerce) Rules 2020 must resolve consumer grievances within:", options: ["24 hours", "48 hours", "15 days", "30 days"], answerIndex: 2, explanation: "Under the Consumer Protection (E-Commerce) Rules 2020, e-commerce entities must acknowledge grievances within 48 hours and redress them within 1 month (approximately 30 days)." },
      { question: "Product liability under the Consumer Protection Act 2019 can be claimed against:", options: ["Manufacturer only", "Seller only", "Product service provider only", "Manufacturer, seller, and product service provider"], answerIndex: 3, explanation: "Chapter VI (Sections 82–87) of the Consumer Protection Act 2019 introduces product liability and allows claims against the manufacturer, seller, and product service provider for harm caused by a defective product." },
      { question: "Under which forum is a consumer complaint involving ₹1.5 crore filed?", options: ["District Commission", "State Commission", "National Commission", "Supreme Court directly"], answerIndex: 1, explanation: "The State Consumer Disputes Redressal Commission handles complaints between ₹50 lakh and ₹2 crore under the Consumer Protection Act 2019." },
    ],
  };

  /* Pick the right bank (fallback to general if category not found) */
  const pool = banks[category] || banks.general;

  /* Shuffle and return 5 questions for variety even in offline/error mode */
  const shuffled = pool.slice().sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 5);
}

function renderQuizQuestion() {
  const question = quizQuestions[quizIndex];
  const progress = document.getElementById("quiz-progress");
  if (progress) progress.style.width = `${(quizIndex / quizQuestions.length) * 100}%`;

  /* Stop any existing timer */
  clearInterval(quizTimerInterval);

  /* Start per-question countdown timer */
  quizTimeLeft = (QUIZ_TIME_PER_QUESTION[quizDifficulty] || 25);

  const diffBadgeColor = { easy: "#2ecc71", medium: "var(--gold)", hard: "#e74c3c" };
  const diffColor = diffBadgeColor[quizDifficulty] || "var(--gold)";

  document.getElementById("quiz-card").innerHTML = `
    <div class="quiz-meta" style="display:flex;justify-content:space-between;align-items:center">
      <span>Question ${quizIndex + 1} / ${quizQuestions.length}
        <span style="margin-left:8px;padding:2px 8px;border-radius:999px;background:${diffColor}20;color:${diffColor};font-size:.75rem;font-weight:700;text-transform:uppercase">${escapeHtml(quizDifficulty)}</span>
      </span>
      <span id="quiz-timer" style="font-variant-numeric:tabular-nums;font-weight:700;color:${diffColor}">${quizTimeLeft}s</span>
    </div>
    <div class="quiz-question">${escapeHtml(question.question)}</div>
    <div class="quiz-options">
      ${question.options.map((option, index) =>
        `<button class="quiz-option" onclick="answerQuiz(${index})">${escapeHtml(option)}</button>`
      ).join("")}
    </div>
  `;

  /* Run the countdown */
  quizTimerInterval = setInterval(() => {
    quizTimeLeft -= 1;
    const timerEl = document.getElementById("quiz-timer");
    if (timerEl) {
      timerEl.textContent = `${quizTimeLeft}s`;
      if (quizTimeLeft <= 5) timerEl.style.color = "#e74c3c";
    }
    if (quizTimeLeft <= 0) {
      clearInterval(quizTimerInterval);
      /* Time up — auto-submit as wrong */
      const btns = document.querySelectorAll(".quiz-option");
      btns.forEach((b) => { b.disabled = true; });
      if (btns[question.answerIndex]) btns[question.answerIndex].classList.add("correct");
      document.getElementById("quiz-card").insertAdjacentHTML("beforeend",
        `<div class="quiz-explanation" style="border-color:#e74c3c">⏱️ Time's up! ${escapeHtml(question.explanation || "")}</div>
         <button class="btn btn-gold" style="margin-top:18px" onclick="nextQuiz()">Next →</button>`
      );
    }
  }, 1000);
}

function answerQuiz(index) {
  /* Stop timer immediately on answer */
  clearInterval(quizTimerInterval);

  const question = quizQuestions[quizIndex];
  const buttons = document.querySelectorAll(".quiz-option");
  buttons.forEach((btn, btnIndex) => {
    btn.disabled = true;
    if (btnIndex === question.answerIndex) btn.classList.add("correct");
    if (btnIndex === index && index !== question.answerIndex) btn.classList.add("wrong");
  });
  if (index === question.answerIndex) quizScore += 1;

  const resultIcon = index === question.answerIndex ? "✅" : "❌";
  document.getElementById("quiz-card").insertAdjacentHTML("beforeend",
    `<div class="quiz-explanation">${resultIcon} ${escapeHtml(question.explanation || "")}</div>
     <button class="btn btn-gold" style="margin-top:18px" onclick="nextQuiz()">Next →</button>`
  );
}

function nextQuiz() {
  clearInterval(quizTimerInterval);
  quizIndex += 1;
  if (quizIndex >= quizQuestions.length) return finishQuiz();
  renderQuizQuestion();
}

function finishQuiz() {
  clearInterval(quizTimerInterval);
  document.getElementById("quiz-question-screen").style.display = "none";
  document.getElementById("quiz-result-screen").style.display = "block";
  const earned = quizScore * 10;
  addXP(earned);
  const pct = Math.round((quizScore / quizQuestions.length) * 100);
  const msg = pct === 100 ? "🏆 Perfect Score!" : pct >= 80 ? "🎉 Excellent!" : pct >= 60 ? "👍 Well done!" : "📚 Keep studying!";
  const catLabel = { general: "General Law", criminal: "Criminal Law", constitutional: "Constitutional Law", consumer: "Consumer Law" }[quizCategory] || quizCategory;
  document.getElementById("quiz-result-card").innerHTML = `
    <div style="font-size:3rem;margin-bottom:12px">${pct === 100 ? "🏆" : pct >= 60 ? "🎉" : "📚"}</div>
    <h3>${msg}</h3>
    <p style="color:var(--text2);font-size:.85rem;margin:6px 0">${escapeHtml(catLabel)} · ${escapeHtml(quizDifficulty)} difficulty</p>
    <p style="color:var(--text2);margin:12px 0 8px">Score: ${quizScore}/${quizQuestions.length} (${pct}%)</p>
    <p class="gold">+${earned} XP earned</p>
    <button class="btn btn-gold" style="margin-top:20px"
      onclick="showPage('quiz');document.getElementById('quiz-start-screen').style.display='block';document.getElementById('quiz-result-screen').style.display='none'">
      Play Again →
    </button>
  `;
}

/* ─────────────────────────────────────────────────────────────────
   SECTION 11: FAQ / HELP
───────────────────────────────────────────────────────────────── */
function renderFaqs() {
  const grid = document.getElementById("faq-grid");
  if (!grid) return;
  grid.innerHTML = faqs
    .map(([q, a]) => `
      <div class="card faq-card" onclick="this.classList.toggle('open')">
        <h3>${escapeHtml(q)} <span class="faq-toggle">▾</span></h3>
        <p style="color:var(--text2);margin-top:10px;display:none">${escapeHtml(a)}</p>
      </div>
    `).join("");
  // Simple accordion via CSS toggle
  document.querySelectorAll(".faq-card").forEach(card => {
    card.addEventListener("click", () => {
      const p = card.querySelector("p");
      if (p) p.style.display = p.style.display === "none" ? "block" : "none";
    });
  });
}

async function askHelpAI() {
  const input = document.getElementById("help-input");
  const result = document.getElementById("help-ai-result");
  const question = input?.value.trim();
  if (!question) return showToast("Ask a question first.");
  result.style.display = "block";
  result.innerHTML = loadingMarkup("Finding answer...");
  scrollToEl(result);
  try {
    const reply = await askAI(
      `Answer this Indian legal help question clearly with practical steps and a legal caution.\n\nQuestion: ${question}`,
      "help"
    );
    result.innerHTML = formatAI(reply);
  } catch (error) {
    result.textContent = error.message;
  }
}

/* ─────────────────────────────────────────────────────────────────
   SECTION 12: DASHBOARD & XP
───────────────────────────────────────────────────────────────── */
function toggleProfilePanel() {
  document.getElementById("profile-panel")?.classList.toggle("open");
}

/* ─────────────────────────────────────────────────────────────────
   NEWS PANEL — State
───────────────────────────────────────────────────────────────── */
let newsLoaded = false;
let newsActiveCat = "";       // active category filter for latest news
let newsActiveCourt = "";     // active court filter for case law

/* Saved articles stored in localStorage: [{ title, url }] */
let savedNewsArticles = JSON.parse(localStorage.getItem("legalease_saved_news") || "[]");

/* ── Open / close ── */
function toggleNewsPanel() {
  const panel = document.getElementById("news-panel");
  if (!panel) return;
  panel.classList.toggle("open");
  if (panel.classList.contains("open") && !newsLoaded) {
    loadLegalNews();
  }
}

/* ── Filter setters ── */
function setNewsCategory(btn, cat) {
  newsActiveCat = cat;
  document.querySelectorAll("#news-cat-filters .news-filter-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  loadLatestNews();
}

function setCourtFilter(btn, court) {
  newsActiveCourt = court;
  document.querySelectorAll("#news-court-filters .news-filter-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  loadCaseLaw();
}

/* ── Section-level refresh ── */
function refreshNewsSection(section) {
  if (section === "latest") loadLatestNews();
  else if (section === "updates") loadCaseLaw();
  else if (section === "tips") loadDailyTip();
}

/* ── Master loader — runs all 3 concurrently on first open ── */
async function loadLegalNews() {
  newsLoaded = true;
  loadLatestNews();
  loadCaseLaw();
  loadDailyTip();
}

/* ─────────────────────────────────────────────────────────────────
   SECTION A — Latest Legal News (fetch + AI fallback)
───────────────────────────────────────────────────────────────── */
async function loadLatestNews() {
  const el = document.getElementById("news-latest-content");
  if (!el) return;
  el.innerHTML = `<div class="loading-dots"><span></span><span></span><span></span></div>`;

  // Build AI prompt using category filter
  const catLabel = newsActiveCat
    ? `in the category "${newsActiveCat.replace(/-/g, " ")}"`
    : "across all categories";

  const prompt = `You are a legal news provider. Give exactly 3 recent important legal news items from India ${catLabel}.
For each item return ONLY this format, no intro text:

TITLE: [news headline, max 12 words]
COURT/SOURCE: [court name or ministry or news source]
CATEGORY: [supreme-court | high-court | legislation | corporate | criminal | general]
SUMMARY: [1–2 sentence plain English summary]
---`;

  try {
    const raw = await askAI(prompt, "news-latest");
    const items = parseNewsItems(raw);
    if (items.length === 0) throw new Error("No items parsed");
    el.innerHTML = items.map(item => renderNewsCard(item, "news")).join("");
  } catch {
    // Hard-coded fallback — always shows something
    const fallbacks = [
      { title: "Supreme Court on Digital Privacy", source: "Supreme Court of India", category: "supreme-court", summary: "SC reaffirms that right to privacy under Article 21 extends to digital communications and personal data held by private entities." },
      { title: "New Criminal Laws Come Into Force", source: "Ministry of Law", category: "legislation", summary: "BNS, BNSS and BSA replace IPC, CrPC and Evidence Act. Zero FIR provisions and 90-day trial timelines are key additions." },
      { title: "SEBI Tightens F&O Margin Rules", source: "SEBI", category: "corporate", summary: "SEBI mandates higher upfront margins for F&O traders and bans same-day trade reversals for retail investors." },
    ].filter(i => !newsActiveCat || i.category === newsActiveCat || !i.category);
    el.innerHTML = (fallbacks.length ? fallbacks : fallbacks.slice(0,3)).map(item => renderNewsCard(item, "news")).join("")
      || `<p style="color:var(--text3);font-size:.83rem">No news found for this filter. Try "All".</p>`;
  }
}

/* ─────────────────────────────────────────────────────────────────
   SECTION B — Recent Case Law (AI with court grouping)
───────────────────────────────────────────────────────────────── */
async function loadCaseLaw() {
  const el = document.getElementById("news-updates-content");
  if (!el) return;
  el.innerHTML = `<div class="loading-dots"><span></span><span></span><span></span></div>`;

  const courtLabel = newsActiveCourt
    ? `from ${newsActiveCourt.replace(/-/g, " ")} only`
    : "grouped by court (Supreme Court, High Courts, Tribunals)";

  const prompt = `You are an Indian legal case law reporter. List 4 recent important case law judgments ${courtLabel}.
For each, return ONLY this format:

COURT: [Supreme Court | High Court — Delhi | High Court — Bombay | High Court — Madras | NCLT | NCLAT | CAT | NGT]
CASE: [Case name, short]
HELD: [1-sentence ruling or holding]
---`;

  try {
    const raw = await askAI(prompt, "news-updates");
    const cases = parseCaseLaw(raw);
    if (cases.length === 0) throw new Error("No cases");
    el.innerHTML = renderGroupedCases(cases);
  } catch {
    const fallbackCases = [
      { court: "Supreme Court", case: "XYZ vs Union of India", held: "PIL on right to clean air upheld; govt directed to submit action plan within 30 days." },
      { court: "High Court — Delhi", case: "ABC Ltd. vs Income Tax Dept.", held: "Reassessment notice beyond 4 years quashed for lack of tangible material." },
      { court: "NCLT", case: "IRP vs Alpha Corp", held: "Moratorium under Section 14 IBC applies to guarantors; personal guarantees stayed." },
      { court: "High Court — Bombay", case: "M vs N (Custody)", held: "Child's best interest is paramount; visitation rights granted to non-custodial parent." },
    ].filter(c => !newsActiveCourt || c.court.toLowerCase().includes(newsActiveCourt.replace(/-/g," ")));
    el.innerHTML = renderGroupedCases(fallbackCases.length ? fallbackCases : fallbackCases);
  }
}

/* ─────────────────────────────────────────────────────────────────
   SECTION C — Daily Legal Tip (Gemini, refreshes each time)
───────────────────────────────────────────────────────────────── */
async function loadDailyTip() {
  const el = document.getElementById("news-tips-content");
  if (!el) return;
  el.innerHTML = `<div class="loading-dots"><span></span><span></span><span></span></div>`;
  try {
    const tip = await askAI(
      `Give exactly 1 practical daily legal tip for an Indian citizen today (${new Date().toDateString()}).
Topics can include: consumer rights, tenant rights, police interaction, RTI, labour rights, cyber safety, property.
Format: Start with a bold topic emoji and title on line 1, then 2–3 sentences of actionable advice.
No intro. No list. Be direct.`,
      "news-tips"
    );
    el.innerHTML = formatAI(tip);
  } catch {
    el.innerHTML = `<strong>💡 Know Your RTI Rights</strong><br><br>Under the Right to Information Act 2005, you can request information from any public authority within 30 days. Pay just ₹10 and submit to the Public Information Officer. First appeal is free if denied.`;
  }
}

/* ─────────────────────────────────────────────────────────────────
   PARSERS
───────────────────────────────────────────────────────────────── */
function parseNewsItems(raw) {
  const blocks = raw.split(/---+/).map(b => b.trim()).filter(Boolean);
  return blocks.map(block => {
    const get = (key) => {
      const m = block.match(new RegExp(`${key}:\\s*(.+)`, "i"));
      return m ? m[1].trim() : "";
    };
    const title = get("TITLE");
    if (!title) return null;
    return { title, source: get("COURT/SOURCE") || get("SOURCE"), category: get("CATEGORY") || "general", summary: get("SUMMARY") };
  }).filter(Boolean);
}

function parseCaseLaw(raw) {
  const blocks = raw.split(/---+/).map(b => b.trim()).filter(Boolean);
  return blocks.map(block => {
    const get = (key) => {
      const m = block.match(new RegExp(`${key}:\\s*(.+)`, "i"));
      return m ? m[1].trim() : "";
    };
    const caseName = get("CASE");
    if (!caseName) return null;
    return { court: get("COURT") || "Supreme Court", case: caseName, held: get("HELD") };
  }).filter(Boolean);
}

/* ─────────────────────────────────────────────────────────────────
   RENDERERS
───────────────────────────────────────────────────────────────── */
const CAT_COLOR = {
  "supreme-court": "#e67e22",
  "high-court":    "#3498db",
  "legislation":   "#9b59b6",
  "corporate":     "#1abc9c",
  "criminal":      "#e74c3c",
  "general":       "#95a5a6",
};

function renderNewsCard(item, type) {
  const color = CAT_COLOR[item.category] || CAT_COLOR.general;
  const isAlreadySaved = savedNewsArticles.some(s => s.title === item.title);
  const savedClass = isAlreadySaved ? "saved" : "";
  const savedLabel = isAlreadySaved ? "⭐ Saved" : "☆ Save";
  const safeTitle = escapeHtml(item.title);
  const safeSource = escapeHtml(item.source || "");
  const safeSummary = escapeHtml(item.summary || "");
  const catLabel = (item.category || "general").replace(/-/g," ");

  return `<div class="news-item">
    <div class="news-item-title">${safeTitle}</div>
    <div class="news-item-meta">
      <span class="news-item-tag" style="background:${color}20;color:${color}">${escapeHtml(catLabel)}</span>
      ${safeSource ? `<span>${safeSource}</span>` : ""}
    </div>
    ${safeSummary ? `<div style="font-size:.8rem;color:var(--text2);line-height:1.45">${safeSummary}</div>` : ""}
    <div class="news-item-actions">
      <button class="news-save-btn ${savedClass}" onclick="toggleSaveNews(this,'${safeTitle.replace(/'/g,"&#39;")}','')">
        ${savedLabel}
      </button>
    </div>
  </div>`;
}

function renderGroupedCases(cases) {
  // Group by court
  const groups = {};
  for (const c of cases) {
    const key = c.court || "Other";
    if (!groups[key]) groups[key] = [];
    groups[key].push(c);
  }
  let html = "";
  for (const [court, items] of Object.entries(groups)) {
    html += `<div class="news-court-group">${escapeHtml(court)}</div>`;
    for (const item of items) {
      html += `<div class="news-item">
        <div class="news-item-title">${escapeHtml(item.case)}</div>
        <div style="font-size:.8rem;color:var(--text2);line-height:1.45">${escapeHtml(item.held || "")}</div>
        <div class="news-item-actions">
          <button class="news-save-btn" onclick="toggleSaveNews(this,'${escapeHtml(item.case).replace(/'/g,"&#39;")}','')">☆ Save</button>
        </div>
      </div>`;
    }
  }
  return html || `<p style="color:var(--text3);font-size:.83rem">No results for this filter.</p>`;
}

/* ─────────────────────────────────────────────────────────────────
   SAVE / UNSAVE NEWS
───────────────────────────────────────────────────────────────── */
function toggleSaveNews(btn, title, url) {
  const idx = savedNewsArticles.findIndex(s => s.title === title);
  if (idx === -1) {
    savedNewsArticles.push({ title, url });
    btn.classList.add("saved");
    btn.textContent = "⭐ Saved";
    showToast("Article saved! View in Profile → Saved News.");
  } else {
    savedNewsArticles.splice(idx, 1);
    btn.classList.remove("saved");
    btn.textContent = "☆ Save";
    showToast("Article removed from saved.");
  }
  localStorage.setItem("legalease_saved_news", JSON.stringify(savedNewsArticles));
  renderSavedNewsList();
}

function renderSavedNewsList() {
  // Render in news panel column 3
  const panelEl = document.getElementById("saved-news-list");
  // Render in profile panel
  const profileEl = document.getElementById("profile-saved-news");

  const html = savedNewsArticles.length === 0
    ? `<p style="color:var(--text3);font-size:.8rem">No saved articles yet.</p>`
    : savedNewsArticles.map((s, i) => `
        <div class="saved-news-item">
          <a href="${escapeHtml(s.url || "#")}" target="_blank" title="${escapeHtml(s.title)}">${escapeHtml(s.title)}</a>
          <button class="saved-news-remove" onclick="removeSavedNews(${i})" title="Remove">✕</button>
        </div>`).join("");

  if (panelEl) panelEl.innerHTML = html;
  if (profileEl) profileEl.innerHTML = html;
}

function removeSavedNews(index) {
  savedNewsArticles.splice(index, 1);
  localStorage.setItem("legalease_saved_news", JSON.stringify(savedNewsArticles));
  renderSavedNewsList();
  showToast("Article removed.");
}

function saveProfileName() {
  const nameInput = document.getElementById("profile-name-input");
  if (nameInput) {
    localStorage.setItem("legalease_user_name", nameInput.value);
    showToast("Profile name saved!");
  }
}

function toggleTheme() {
  document.body.classList.toggle("light-theme");
  const isLight = document.body.classList.contains("light-theme");
  localStorage.setItem("legalease_theme", isLight ? "light" : "dark");
}

function updateProfileLists() {
  const bmList = document.getElementById("bookmarks-list");
  if (bmList) {
    if (bookmarkedLawIds.size === 0) {
      bmList.innerHTML = "No bookmarks yet.";
    } else {
      bmList.innerHTML = [...bookmarkedLawIds].map(id => {
        const law = getLawById(id);
        return law ? `<a href="#" onclick="openLawModalById('${escapeHtml(law.id)}')" style="display:flex;align-items:center;gap:8px;text-decoration:none;color:var(--text);padding:8px 12px;border-radius:8px;background:var(--surface);border:1px solid var(--border);transition:border-color 0.2s" onmouseover="this.style.borderColor='var(--gold)'" onmouseout="this.style.borderColor='var(--border)'"><span>${escapeHtml(categoryEmoji(law.category))}</span> <span style="flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${escapeHtml(law.title)}</span></a>` : '';
      }).join('');
    }
  }

  const recList = document.getElementById("recent-list");
  if (recList) {
    if (recentlyViewedLawIds.length === 0) {
      recList.innerHTML = "No recently viewed laws.";
    } else {
      recList.innerHTML = recentlyViewedLawIds.map(id => {
        const law = getLawById(id);
        return law ? `<a href="#" onclick="openLawModalById('${escapeHtml(law.id)}')" style="display:flex;align-items:center;gap:8px;text-decoration:none;color:var(--text);padding:8px 12px;border-radius:8px;background:var(--surface);border:1px solid var(--border);transition:border-color 0.2s" onmouseover="this.style.borderColor='var(--gold)'" onmouseout="this.style.borderColor='var(--border)'"><span>${escapeHtml(categoryEmoji(law.category))}</span> <span style="flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${escapeHtml(law.title)}</span></a>` : '';
      }).join('');
    }
  }
}

function addXP(points) {
  xp += Number(points) || 0;
  localStorage.setItem("legalease_xp", String(xp));
  updateXP();
}

function updateXP() {
  const next = Math.ceil((xp + 1) / 100) * 100;
  const xpCountEl = document.getElementById("xp-count");
  if (xpCountEl) xpCountEl.textContent = xp;
  const dashXpEl = document.getElementById("dash-xp");
  if (dashXpEl) dashXpEl.textContent = xp;
  const dashXpBar = document.getElementById("dash-xp-bar");
  if (dashXpBar) dashXpBar.style.width = `${Math.min(100, xp % 100)}%`;
  const dashNextEl = document.getElementById("dash-next-level");
  if (dashNextEl) dashNextEl.textContent = `${next} XP`;
}

/* ─────────────────────────────────────────────────────────────────
   SECTION 13: INIT
───────────────────────────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  renderLawCards();
  renderFaqs();
  updateXP();

  // Restrict FIR date to past or present dates
  const firDateInput = document.getElementById("fir-date");
  if (firDateInput) {
    const today = new Date().toISOString().split("T")[0];
    firDateInput.setAttribute("max", today);
  }

  // Load profile preferences
  const savedName = localStorage.getItem("legalease_user_name");
  if (savedName) {
    const nameInput = document.getElementById("profile-name-input");
    if (nameInput) nameInput.value = savedName;
  }
  const savedTheme = localStorage.getItem("legalease_theme");
  if (savedTheme === "light") {
    document.body.classList.add("light-theme");
  }
  if (typeof updateProfileLists === 'function') updateProfileLists();
  renderSavedNewsList();

  // Close suggestions when clicking outside
  document.addEventListener("click", (e) => {
    const suggestions = document.getElementById("law-search-suggestions");
    const searchBox = document.getElementById("law-search-input");
    if (suggestions && !suggestions.contains(e.target) && e.target !== searchBox) {
      hideSearchSuggestions();
    }

    // Close side panels when clicking outside
    const newsPanel = document.getElementById("news-panel");
    const newsFab = document.getElementById("news-fab");
    if (newsPanel && newsPanel.classList.contains("open")) {
      if (!newsPanel.contains(e.target) && (!newsFab || !newsFab.contains(e.target))) {
        newsPanel.classList.remove("open");
      }
    }
    
    const profilePanel = document.getElementById("profile-panel");
    const profileBtn = document.getElementById("profile-btn");
    if (profilePanel && profilePanel.classList.contains("open")) {
      if (!profilePanel.contains(e.target) && (!profileBtn || !profileBtn.contains(e.target))) {
        profilePanel.classList.remove("open");
      }
    }
  });

  // Keyboard: Escape to close modal
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.getElementById("law-modal-overlay")?.classList.remove("open");
      document.getElementById("api-modal")?.classList.remove("open");
      hideSearchSuggestions();
    }
  });

  // Update law stats counter on home page if element exists
  const statsEl = document.getElementById("hero-law-count");
  if (statsEl) statsEl.textContent = `${lawsDatabase.length}+`;
});

/* ═══════════════════════════════════════════════════════════════════
   LAW DETAIL PAGES ENGINE
   Tab switching · Accordion render · Search filter · AI explain
═══════════════════════════════════════════════════════════════════ */

/* ── Tab-to-type mapping ── */
const LAW_PAGE_TABS = {
  criminal: {
    ipc:  { label:"Indian Penal Code, 1860", types:["ipc"], acts:[] },
    crpc: { label:"Code of Criminal Procedure, 1973", types:["crpc"], acts:[] },
    iea:  { label:"Indian Evidence Act, 1872", types:["iea"], acts:[] },
    nia:  { label:"National Investigation Agency Act, 2008", types:["nia"], acts:[] },
    bns:  { label:"Bharatiya Nyaya Sanhita / BNSS 2023", types:["bns","bnss"], acts:[] },
  },
  civil: {
    cpc:        { label:"Code of Civil Procedure, 1908", types:["cpc"], acts:["cpc_1908"] },
    consumer:   { label:"Consumer & Employment Laws", types:[], acts:["consumer_protection_act","posh_act","maternity_benefit_act","industrial_disputes_act","labour_code_wages","epf_act"] },
    property:   { label:"Property & Real Estate Laws", types:[], acts:["transfer_of_property","registration_act","rera_act","land_acquisition","forest_rights_act","specific_relief_act"] },
    labour:     { label:"Labour & Employment Laws", types:[], acts:["labour_code_wages","industrial_disputes_act","maternity_benefit_act","posh_act","epf_act","motor_vehicles_act"] },
    other_civil:{ label:"Other Civil Acts", types:["act","case","writ"], acts:["contract_act","limitation_act","evidence_act","arbitration_act","tort_law","environment_act","mha_passport_act","vishaka"] },
  },
  cyber: {
    it_general:  { label:"IT Act — General Provisions (Sections 1–44)", types:["it_act"], idPrefix:["it_act_1","it_act_2","it_act_3","it_act_4","it_act_5","it_act_6","it_act_10a","it_act_43","it_act_43a","it_act_44"] },
    it_offences: { label:"Cyber Offences (Sections 65–67B)", types:[], ids:["it_act_65","it_act_66","it_act_66a","it_act_66b","it_act_66c","it_act_66d","it_act_66e","it_act_66f","it_act_67","it_act_67a","it_act_67b","it_act_84b"] },
    it_govt:     { label:"Government Powers & Intermediaries (Sections 69–79)", types:[], ids:["it_act_69","it_act_69a","it_act_69b","it_act_70","it_act_72","it_act_79","it_rules_2021"] },
    dpdp:        { label:"Data Protection & Privacy", types:[], ids:["pdp_bill","it_act_43a","it_rules_2021"] },
  },
  family: {
    hma:      { label:"Hindu Marriage Act, 1955", types:["hma"], acts:["hindu_marriage_act"] },
    sma:      { label:"Special Marriage Act, 1954", types:["sma"], acts:["special_marriage_act"] },
    mpl:      { label:"Muslim Personal Law & Triple Talaq Act", types:["mpl"], acts:["triple_talaq_act","muslim_women_act","maintenance_act"] },
    dv:       { label:"Protection of Women from Domestic Violence Act, 2005", types:["dv"], acts:["domestic_violence_act"] },
    adoption: { label:"Adoption, Guardianship & Child Laws", types:["hama","gwa","ida"], acts:["adoption_act","guardianship_act","pocso_act","child_marriage_act","maintenance_act"] },
  },
  corporate: {
    ca_formation:  { label:"Company Formation & Structure", types:[], ids:["ca_s2","ca_s3","ca_s7","ca_s11","ca_s13","ca_s25","ca_s56","ca_s61","ca_s73","llp_act","partnership_act"] },
    ca_governance: { label:"Corporate Governance & Directors", types:[], ids:["ca_s96","ca_s100","ca_s149","ca_s166","ca_s173","ca_s177","ca_s180","ca_s184","ca_s188","ca_s230","ca_s241"] },
    ca_finance:    { label:"Finance, Audit & Accounts", types:[], ids:["ca_s128","ca_s134","ca_s139","ca_s206","ca_s447","sebi_act","fema"] },
    ca_winding:    { label:"Insolvency, Winding Up & IBC", types:[], ids:["ca_s271","ibc","competition_act"] },
    other_corp:    { label:"Other Corporate Acts", types:[], acts:["companies_act","sebi_act","ibc","competition_act","fema","partnership_act","llp_act"] },
  },
  tax: {
    it_charge:     { label:"Charge of Tax, Residential Status & Heads of Income", types:[], ids:["it_s1","it_s2","it_s4","it_s5","it_s6","it_s9","it_s10","it_s14","it_s17","it_s22","it_s23","it_s24","it_s28","it_s36","it_s37","it_s45","it_s48","it_s54","it_s57"] },
    it_deductions: { label:"Deductions & Exemptions", types:[], ids:["it_s80c","it_s80d","it_s80e","it_s80g","it_s80ia","it_s87a","it_s115bac"] },
    it_tds:        { label:"TDS / TCS Provisions", types:[], ids:["it_s192","it_s194","it_s194a","it_s194c","it_s194h","it_s195","it_s199","it_s200","it_s206c"] },
    it_assessment: { label:"Assessment, Penalties & Prosecution", types:[], ids:["it_s132","it_s139","it_s143","it_s148","it_s234a","it_s234b","it_s234c","it_s270a","it_s271b","it_s276c"] },
    other_tax:     { label:"GST, Customs & Other Tax Acts", types:[], acts:["income_tax_act","gst_act","customs_act","wealth_tax_act","black_money_act","benami_act","pmla"] },
  },
  constitutional: {
    part1_4:   { label:"Parts I–IV: Territory, Citizenship, Fundamental Rights, Directive Principles", artRange:[1,51] },
    part5_6:   { label:"Parts V–VI: Union Executive, Parliament, Supreme Court, States", artRange:[52,167] },
    part7_12:  { label:"Parts VII–XII: Union Territories, Panchayats, Finance, Trade, Services", artRange:[168,312] },
    part13_22: { label:"Parts XIII–XXII: Trade, Emergency, Amendments, Transitional Provisions", artRange:[313,395] },
    writs_cases:{ label:"Writs, Landmark Cases & Special Acts", types:["writ","case"], acts:["rti_act","sc_st_act","rte_act","pwd_act","pil","kesavananda","maneka_gandhi","puttaswamy"] },
  },
};

/* State tracking per page */
const lawPageState = {};

function getLawPageState(domain) {
  if (!lawPageState[domain]) {
    const firstTab = Object.keys(LAW_PAGE_TABS[domain])[0];
    lawPageState[domain] = { activeTab: firstTab, search: "" };
  }
  return lawPageState[domain];
}

/* ── Get laws for a specific tab ── */
function getLawsForTab(domain, tabKey) {
  const tabCfg = LAW_PAGE_TABS[domain]?.[tabKey];
  if (!tabCfg) return [];

  let results = [];

  // By explicit IDs
  if (tabCfg.ids) {
    tabCfg.ids.forEach(id => {
      const law = lawsDatabase.find(l => l.id === id);
      if (law) results.push(law);
    });
  }

  // By type filter
  if (tabCfg.types && tabCfg.types.length) {
    const typeLaws = lawsDatabase.filter(l =>
      tabCfg.types.includes(l.type) &&
      (domain === 'constitutional' ? l.category === 'constitutional' : true) &&
      !results.find(r => r.id === l.id)
    );
    results = [...results, ...typeLaws];
  }

  // By act IDs
  if (tabCfg.acts) {
    tabCfg.acts.forEach(id => {
      const law = lawsDatabase.find(l => l.id === id);
      if (law && !results.find(r => r.id === law.id)) results.push(law);
    });
  }

  // Constitution article range
  if (tabCfg.artRange) {
    const [from, to] = tabCfg.artRange;
    const artLaws = constitutionalLaws.filter(l => {
      const num = articleSortValue(l.title.replace('Article ',''));
      return num >= from && num <= to;
    });
    results = [...results, ...artLaws.filter(l => !results.find(r => r.id === l.id))];
  }

  // id prefix (legacy)
  if (tabCfg.idPrefix) {
    tabCfg.idPrefix.forEach(id => {
      const law = lawsDatabase.find(l => l.id === id);
      if (law && !results.find(r => r.id === law.id)) results.push(law);
    });
  }

  return results;
}

/* ── Render accordion for a list of laws ── */
function renderLawAccordion(laws, domain) {
  if (!laws.length) {
    return `<div class="law-page-empty">🔍 No sections found. Try a different search term.</div>`;
  }
  return laws.map((law, i) => {
    const badge = typeLabel(law.type);
    return `
      <div class="law-accordion-item" id="acc-${escapeHtml(law.id)}">
        <div class="law-accordion-header" onclick="toggleAccordion('${escapeHtml(law.id)}')">
          <div class="law-accordion-header-left">
            <span class="law-accordion-badge">${escapeHtml(badge)}</span>
            <div>
              <div class="law-accordion-title">${escapeHtml(law.title)}</div>
              <div class="law-accordion-short">${escapeHtml(law.short)}</div>
            </div>
          </div>
          <span class="law-accordion-toggle">▾</span>
        </div>
        <div class="law-accordion-body">
          <div class="law-accordion-body-inner">
            <div style="font-size:.85rem;color:var(--text2);line-height:1.65;margin-bottom:8px">
              <strong>Category:</strong> ${escapeHtml(categoryEmoji(law.category))} ${escapeHtml(categoryLabel(law.category))}
              &nbsp;·&nbsp; <strong>Type:</strong> ${escapeHtml(typeLabel(law.type))}
            </div>
            <p style="font-size:.88rem;color:var(--text);line-height:1.7">${escapeHtml(law.short)}</p>
            <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:10px">
              <button class="law-accordion-ai-btn" onclick="accordionAIExplain('${escapeHtml(law.id)}')">
                ⚡ AI Explain
              </button>
              <button class="law-accordion-ai-btn" onclick="openLawModalById('${escapeHtml(law.id)}')">
                📖 Full Detail
              </button>
            </div>
            <div class="law-accordion-ai-result" id="ai-result-${escapeHtml(law.id)}"></div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function toggleAccordion(lawId) {
  const item = document.getElementById(`acc-${lawId}`);
  if (!item) return;
  item.classList.toggle('open');
}

async function accordionAIExplain(lawId) {
  const resultEl = document.getElementById(`ai-result-${lawId}`);
  if (!resultEl) return;
  const law = getLawById(lawId);
  if (!law) return;

  if (resultEl.style.display === 'block' && resultEl.dataset.loaded === '1') {
    resultEl.style.display = resultEl.style.display === 'block' ? 'none' : 'block';
    return;
  }

  resultEl.style.display = 'block';
  resultEl.dataset.loaded = '0';
  resultEl.innerHTML = loadingMarkup('Generating AI explanation…');

  try {
    const reply = await callGemini(createLawPrompt(law), 'law-card');
    const parsed = parseLawResponse(reply);
    if (hasStructuredLawContent({ ...parsed })) {
      resultEl.innerHTML = `
        <div style="margin-bottom:10px"><strong style="color:var(--gold)">⚖️ Real Definition</strong><br><span style="font-size:.84rem">${formatAI(parsed.real)}</span></div>
        <div style="margin-bottom:10px"><strong style="color:#3498db">💡 Simple Meaning</strong><br><span style="font-size:.84rem">${formatAI(parsed.simple)}</span></div>
        <div><strong style="color:#2ecc71">📋 Real-Life Example</strong><br><span style="font-size:.84rem">${formatAI(parsed.example)}</span></div>
      `;
    } else {
      resultEl.innerHTML = formatAI(reply);
    }
    resultEl.dataset.loaded = '1';
    addXP(3);
  } catch (err) {
    resultEl.innerHTML = `<span style="color:#e74c3c">${escapeHtml(err.message)}</span>`;
  }
}

/* ── Tab switch ── */
function switchLawTab(domain, tabKey, btnEl) {
  const state = getLawPageState(domain);
  state.activeTab = tabKey;

  // Update tab buttons
  const tabsContainer = document.getElementById(`${domain}-tabs`);
  if (tabsContainer) {
    tabsContainer.querySelectorAll('.law-page-tab').forEach(b => b.classList.remove('active'));
    if (btnEl) btnEl.classList.add('active');
  }

  renderLawPageContent(domain);
}

/* ── Filter / search ── */
function filterLawPage(domain) {
  const input = document.getElementById(`${domain}-search`);
  const state = getLawPageState(domain);
  state.search = input?.value.trim().toLowerCase() || '';
  renderLawPageContent(domain);
}

/* ── Main render ── */
function renderLawPageContent(domain) {
  const state = getLawPageState(domain);
  const contentEl = document.getElementById(`${domain}-content`);
  const countEl = document.getElementById(`${domain}-count`);
  if (!contentEl) return;

  let laws = getLawsForTab(domain, state.activeTab);

  // Apply search filter
  if (state.search) {
    const tokens = state.search.split(/\s+/).filter(Boolean);
    laws = laws.filter(l => {
      const hay = normalizeLawText(l);
      return tokens.every(t => hay.includes(t));
    });
  }

  if (countEl) countEl.textContent = `${laws.length} section${laws.length !== 1 ? 's' : ''}`;
  contentEl.innerHTML = renderLawAccordion(laws, domain);
}

/* ── Navigate to a law domain page ── */
function showLawPage(domain) {
  // Show the page
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const pg = document.getElementById(`page-${domain}`);
  if (!pg) { showPage('education'); return; }
  pg.classList.add('active');

  // Update nav
  document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));

  // Update category bar
  document.querySelectorAll('.cat-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.cat === domain);
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Init render on first visit
  const state = getLawPageState(domain);
  renderLawPageContent(domain);
}

/* ── Hook category bar buttons to law domain pages ── */
(function patchCategoryBar() {
  const catPageMap = {
    criminal: 'criminal',
    civil: 'civil',
    cyber: 'cyber',
    family: 'family',
    corporate: 'corporate',
    tax: 'tax',
    constitutional: 'constitutional',
  };
  document.querySelectorAll('.cat-btn[data-cat]').forEach(btn => {
    const cat = btn.dataset.cat;
    if (cat && cat !== 'all' && catPageMap[cat]) {
      btn.onclick = () => showLawPage(catPageMap[cat]);
    }
  });
})();

/* ── Dept filter buttons on education page also navigate ── */
(function patchDeptFilter() {
  const catPageMap = {
    criminal: 'criminal',
    civil: 'civil',
    cyber: 'cyber',
    family: 'family',
    corporate: 'corporate',
    tax: 'tax',
    constitutional: 'constitutional',
  };
  document.querySelectorAll('.dept-btn[data-dept]').forEach(btn => {
    const dept = btn.dataset.dept;
    if (dept && dept !== 'all' && catPageMap[dept]) {
      btn.addEventListener('click', function() {
        showLawPage(catPageMap[dept]);
      });
    }
  });
})();
