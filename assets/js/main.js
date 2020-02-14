var langToggle={created:function(){this.toggleLanguage()},methods:{toggleLanguage:function(){return headerInstance.currentLocale}}},headerInstance=new Vue({el:"#header",data:{headerSiteName:{en:"Hrvoje Dumancic",de:"Hrvoje Dumancic"},headerBaseText:{en:"My personal site/CV where you can learn more about me and what I do",de:"Meine persönliche Seite/Lebenslauf, auf der Sie mehr über mich und meine Tätigkeiten erfahren können"},currentLocale:"en"}}),firstWrapperInstance=new Vue({el:"#wrapper",mixins:[langToggle],data:{wrapperHeader:{en:"Basic Stuff",de:"Grundlegendes"},wrapperParagraphText:{en:"My name is Hrvoje Dumancic, might be easier to call me Harvey<br /> I am from Croatia, but I've been living in Ireland for the past 5 years<br /> I have 7 years of Software Engineering Experience in fields ranging from automation and OPS to Machine Learning.<br /> I have been described as: <br />Lead programmer with a track record of incorporating user and business requirements into cost-effective, secure and user-friendly solutions known for scalability and durability. <br /> Innovator of next-generation solutions, systems and applications giving companies a competitive edge and producing outstanding results for customers.",de:"Mein Name ist Hrvoje Dumancic. Vielleicht ist es einfacher, mich Harvey zu nennen. <br /> Ich komme aus Kroatien, aber ich lebe seit 5 Jahren in Irland. <br /> Ich habe 7 Jahre Erfahrung in der Softwareentwicklung in Fachgebieten von Automatisierung und OPS bis hin zu maschinellem Lernen. <br /> Ich wurde beschrieben als: <br /> Führender Programmierer mit einer Erfolgsbilanz bei der Einbeziehung von Benutzer- und Geschäftsanforderungen in kostengünstige, sichere und benutzerfreundliche Lösungen, die für Skalierbarkeit und Langlebigkeit bekannt sind. <br /> Innovator von Lösungen, Systemen und Anwendungen der nächsten Generation, die Unternehmen einen Wettbewerbsvorteil verschaffen und herausragende Ergebnisse für Kunden erzielen."},workHistory:{en:"Work History",de:"Arbeitsgeschichte"},sectionOneButtonOpen:{en:"Learn More",de:"Erfahren Sie mehr"},sectionOneButtonClose:{en:"Close",de:"Schließen"},workExperience:{verizonConnect:{en:"Verizon Connect: 2018 - Present",de:"Verizon Connect: 2018 - Bis Heute"},fleet:"Fleetmatics: 2016 - 2018",idg:"IDG Direct: 2015 - 2016"},machineLearningSection:{mlTitle:{en:"Machine Learning",de:"Maschinelles Lernen"},shortMLDescription:{en:"Through my career I've worked in many varied and different Machine learning, data science and analysis, AI and similar algorithm based projects. I have worked on various implementations and projects, ranging from Natural language processing (NLP) to image processing and classification. Some examples are below.",de:"Während meiner Karriere habe ich in vielen verschiedenen und unterschiedlichen Projekten auf der Basis von maschinellem Lernen, Datenwissenschaft und -analyse, KI und ähnlichen Algorithmen gearbeitet. Ich habe an verschiedenen Implementierungen und Projekten gearbeitet, von der Verarbeitung natürlicher Sprache (NLP) bis zur Bildverarbeitung und Klassifizierung. Einige Beispiele sind unten."},mlNotableProjectsTitle:{en:"Notable Projects",de:"Bemerkenswerte Projekte"},mlProjectList:{projectOne:{en:"<details><summary><b>ClapTrap</b></summary><p>Developed and deployed machine learning based bot, separated in 2 different modules; autonomous and interactive. Autonomous module is maintaining server stats, capable of low level maintenance tasks such as service restarts and remediation, IIS pool recycles, event log monitoring, alert verification, product verification, SSL certificate checks and validation, redis cache maintenance and restarts and similar, while interactive module is conversation level Q&A bot trained on internal data set of all software cases from customers and engineers, capable of answering questions regarding product issues, bugs and known problems.</p></details>",de:"<details><summary><b>ClapTrap</b></summary><p>Entwickelter und eingesetzter Bot auf Basis von maschinellem Lernen, aufgeteilt in 2 verschiedene Module; autonom und interaktiv. Das autonome Modul verwaltet Serverstatistiken und ist in der Lage, Wartungsaufgaben auf niedriger Ebene wie Neustart und Behebung von Diensten, IIS-Poolrecycling, Ereignisprotokollüberwachung, Warnungsüberprüfung, Produktüberprüfung, SSL-Zertifikatsüberprüfung und -validierung, Redis-Cache-Wartung und -Starts und ähnliches während der Interaktion durchzuführen Das Modul ist ein Q & A-Bot auf Konversationsniveau, der auf die internen Daten aller Softwarefälle von Kunden und Ingenieuren geschult ist und in der Lage ist, Fragen zu Produktproblemen, Fehlern und bekannten Problemen zu beantworten.</p></details>"},projectTwo:{en:"<details><summary><b>Feedback Classification</b></summary><p>Developed and deployed a full end-to-end pipeline collecting customer feedback, analysing the content, generating 6 separate categories based on the feedback received, analysing and reporting on sentiment and topic of feedback and translating feedback from any language to English. Entire process is performed on live data and piped through to different teams owning the platform areas feedback is addressed to. Entire process is fully automated with no human input needed and running off of a model that uptrains itself once a month. Each feedback item is coming to Slack with good/bad button that automatically stores good data for further training, and bad data for further processing.</p></details>",de:"<details><summary><b>Feedback-Klassifizierung</b></summary><p>Entwicklung und Bereitstellung einer vollständigen End-to-End-Pipeline zur Erfassung von Kundenfeedbacks, Analyse des Inhalts, Generierung von 6 separaten Kategorien auf der Grundlage des erhaltenen Feedbacks, Analyse und Berichterstellung zu Stimmung und Thema des Feedbacks sowie Übersetzung des Feedbacks aus einer beliebigen Sprache in die englische Sprache. Der gesamte Prozess wird mit Live-Daten durchgeführt und an verschiedene Teams weitergeleitet, denen die Plattformbereiche gehören, an die das Feedback gerichtet ist. Der gesamte Prozess ist vollständig automatisiert, ohne dass Eingaben von Personen erforderlich sind, und es läuft ein Modell ab, das sich einmal im Monat selbst aktualisiert. Jedes Feedback-Element wird mit einem Gut / Schlecht-Knopf an Slack gesendet, der automatisch gute Daten für das weitere Training und schlechte Daten für die weitere Verarbeitung speichert.</p></details>"},projectThree:{en:"<details><summary><b>AutoCase Assigner</b></summary><p>Developed automatic case assignment system for application support, working on 3 feature controlledsettings; Round robin, percentage of backlog based and case per engineer (number defined case onpersonal engineer backlog).</p></details>",de:"<details><summary><b>AutoCase Assigner</b></summary><p>Entwickeltes automatisches Fallzuweisungssystem für die Anwendungsunterstützung, das mit 3 Funktionen gesteuert wirddie Einstellungen; Round Robin, Prozentsatz des Rückstands basierend und Fall pro Ingenieur (Anzahl definierter Fall amPersonal Engineer Backlog).</p></details>"},projectFour:{en:"<details><summary><b>Halite Competition</b></summary><p>Participated in 2017 Halite competition in building an AI bot in a planet conquering battle. I ended up in top 20% of contestants but I didn't pursue higher spots because of time constraints.'</p></details>",de:"<details><summary><b>Halite-Wettbewerb</b></summary><p>Teilnahme am Halite-Wettbewerb 2017 beim Bau eines AI-Bots in einem Planeten, der die Schlacht erobert. Ich landete in den Top 20% der Teilnehmer, verfolgte aber aus Zeitgründen keine höheren Plätze.</p></details>"},projectFive:{en:"<details><summary><b>MNIST Kaggle handwritten digit recognizer</b></summary><p>Developed a Kaggle model using transfer learning, that identified MNIST handwritten digits with 99.56% accuracy. That model firmly places in top 20% of MNIST dataset digit recognition model challenge.'</p></details>",de:"<details><summary><b>MNIST Kaggle handgeschriebener Ziffernerkenner</b></summary><p>Entwickelte ein Kaggle-Modell mit Transfer-Learning, das handgeschriebene MNIST-Ziffern mit einer Genauigkeit von 99,56% identifizierte. Dieses Modell liegt fest in den Top 20% der MNIST-Datenmengen-Ziffernerkennungsmodellherausforderung.</p></details>"},projectSix:{en:"<details><summary><b>Rapid Image Classifier</b></summary><p>This project came as a simple exercise to develop fast, reliable and accurate system that automatically builds classifier models ready for testing or production from just keywords.'</p></details>",de:"<details><summary><b>Rapid Image Classifier</b></summary><p>Dieses Projekt war eine einfache Übung, um ein schnelles, zuverlässiges und genaues System zu entwickeln, das automatisch Klassifikatormodelle erstellt, die zum Testen oder zur Produktion nur mit Schlüsselwörtern bereit sind.</p></details>"},projectSeven:{en:"<details><summary><b>Diabetic Retinopathy Deep Learning Prediction</b></summary><p>This is replication of results from <a href='https://www.nature.com/articles/s41746-019-0172-3'>this paper</a>, achieving 75.92% accuracy on resized and augmented data. With a bit of feature engineering and data review (imbalanced classes) I believe this model can achieve over 80% accuracy. I used transfer learning in this experiment, using Resnet152, with several epochs on top of it with augmented data from <a href='https://www.kaggle.com/tanlikesmath/diabetic-retinopathy-resized'>this</a> dataset.</p></details>",de:'<details><summary><b>Diabetische Retinopathie Deep Learning Vorhersage</b></summary><p>Dies ist eine Replikation der Ergebnisse aus <a href="https://www.nature.com/articles/s41746-019-0172-3"> diesem Artikel </a>, mit der eine Genauigkeit von 75,92% bei der Größenänderung und Erweiterung von Daten erzielt wird. Mit ein wenig Feature-Engineering und Datenüberprüfung (unausgeglichene Klassen) kann dieses Modell meiner Meinung nach eine Genauigkeit von über 80% erreichen. In diesem Experiment mit Resnet152 verwendete ich Transfer-Learning mit mehreren darauf folgenden Epochen mit erweiterten Daten aus <a href="https://www.kaggle.com/tanlikesmath/diabetic-retinopathy-resized"> diesem </ a > Datensatz.</p></details>'},projectEight:{en:"<details><summary><b>Topical, domain specific Q&A model</b></summary><p>Scraped and sanitized large quantity of data to create a topical, state of the art Q&A model. Model was trained on <a href='https://nlp.stanford.edu/projects/glove/' target='_blank'>GloVe</a> data set, and then, using transfer learning, uptrained with custom prepared data to specifically answer questions about selected domain. Model is capable of understanding plain English, no need for specialized commands, and answer coherently and contextually.</p></details>",de:'<details><summary><b>Aktuelles, domänenspezifisches Q&A-Modell</b></summary><p>Kratzte und bereinigte große Datenmengen, um ein aktuelles, hochmodernes Q & A-Modell zu erstellen. Das Modell wurde anhand des <a href="https://nlp.stanford.edu/projects/glove/" target="_blank"> GloVe </a> -Datensatzes geschult und anschließend mithilfe von Transfer Learning mit benutzerdefinierten vorbereiteten Daten trainiert um gezielt Fragen zur ausgewählten Domain zu beantworten. Model ist in der Lage, einfaches Englisch zu verstehen, keine speziellen Befehle zu benötigen und kohärent und kontextbezogen zu antworten.</p></details>'}}},webDevSection:{webTitle:{en:"Web Development",de:"Web Entwicklung"},shortWebDevDescription:{en:"I have done extensive work in building different web applications both for internal and external customer use. I am familiar with multiple front-end JavaScript based technologies as well as back end Python based technologies (Django, Flask, Dash etc.). Some examples and notale full-stack projects:",de:"Ich habe umfangreiche Arbeit in der Erstellung verschiedener Webanwendungen sowohl für den internen als auch den externen Kundenbereich geleistet. Ich bin mit mehreren Front-End-JavaScript-basierten Technologien sowie Back-End-Python-basierten Technologien (Django, Flask, Dash usw.) vertraut. Einige Beispiele und notale Full-Stack-Projekte:"},webNotableProjectsTitle:{en:"Notable Projects",de:"Bemerkenswerte Projekte"},webProjectList:{webProjectOne:{en:"<details><summary><b>The Foundry</b></summary><p>Developed as stand alone dashboard and analytics tool, I applied what I call at-a-glance principle, allowing managers, and those reporting to managers to see all relevant statistics about day-to-day business running and customers.</p></details>",de:'<details><summary><b>Die Gießerei</b></summary><p>Als eigenständiges Dashboard- und Analysetool entwickelt, habe ich das so genannte "auf einen Blick" -Prinzip angewendet und es den Managern und Berichterstattern ermöglicht, alle relevanten Statistiken zum laufenden Geschäft und zu den Kunden anzuzeigen.</p></details>'},webProjectTwo:{en:"<details><summary><b>Real Time Data Funnels</b></summary><p>Various real time funnels for live data passing through our pipelines, allowing easy manipulation, collection and reporting.</p></details>",de:"<details><summary><b>Echtzeit-Datentrichter</b></summary><p>Verschiedene Echtzeit-Trichter für Live-Daten, die durch unsere Pipelines geleitet werden und eine einfache Bearbeitung, Erfassung und Berichterstellung ermöglichen.</p></details>"},webProjectThree:{en:"<details><summary><b>Machine Learning model Front-End Inference</b></summary><p>Front-End Inference webapp with drag-and-drop functionality to infer class and category of presented image.</p></details>",de:"<details><summary><b>Maschinelles Lernen Modell Front-End-Inferenz</b></summary><p>Front-End-Inferenz-Webanwendung mit Drag-and-Drop-Funktion zum Ableiten von Klasse und Kategorie des präsentierten Bildes.</p></details>"},webprojectFour:{en:"<details><summary><b>This Website</b></summary><p>This Website you are browsing through is built using <a href='https://vuejs.org/' target='_blank'>Vue.js</a>, a open source JavaScript framework, approachable and versatile framework that is scalable and quick to get into.'</p></details>",de:'<details><summary><b>Diese Internetseite</b></summary><p>Diese Website, die Sie durchsuchen, wurde mit <a href="https://vuejs.org/"" target="_blank"> Vue.js </a> erstellt, einem Open-Source-JavaScript-Framework, das ansprechbar und vielseitig ist und skalierbar ist und schnell einsteigen.</p></details>'}}},automationSection:{automationTitle:{en:"Automation",de:"Automatisierung"},shortAutomationDescription:{en:"My Software Engineering career started off with automation. I always had passion for making things happen on their own, and automating manual processes. Some notable projects are:",de:"Meine Karriere als Software-Ingenieur begann mit der Automatisierung. Ich hatte schon immer die Leidenschaft, Dinge von alleine geschehen zu lassen und manuelle Prozesse zu automatisieren. Einige bemerkenswerte Projekte sind:"},automationNotableProjectsTitle:{en:"Notable Projects",de:"Bemerkenswerte Projekte"},automationProjectList:{automationProjectOne:{en:"<details><summary><b>Incident Automation</b></summary><p>Automated workflow during incidents and system wide issues, fully automated loop process of diagnosing and rectifying system wide issues across multiple environments and servers (over 255 servers).</p></details>",de:"<details><summary><b>Automatisierung von Vorfällen</b></summary><p>Automatisierter Workflow bei Vorfällen und systemweiten Problemen, vollständig automatisierter Diagnoseschleifenprozess und Beheben systemweiter Probleme in mehreren Umgebungen und Servern (über 255 Server).</p></details>"},automationProjectTwo:{en:"<details><summary><b>Status Page</b></summary><p>Designed and developed customer and Customer support facing Status page, based on Statuspage.io but fully automated end to end. Each component is automatically verified and communicated, as well as incidents fully integrated with our incident management system, notifying customers and customer support of any platform disruptions and maintenance instantly.</p></details>",de:"<details><summary><b>Statusseite</b></summary><p>Entwarf und entwickelte Kunden- und Kundensupportfunktionen auf der Statusseite, die auf Statusseite.io basiert, jedoch vollständig automatisiert ist. Jede Komponente wird automatisch verifiziert und kommuniziert, und Incidents werden vollständig in unser Incident-Management-System integriert. So werden Kunden und der Kundensupport sofort über Plattformstörungen und Wartungsarbeiten informiert.</p></details>"},automationProjectThree:{en:"<details><summary><b>Jira to Salesforce Synchronization</b></summary><p>Developed sync system between Jira and Salesforce, connecting support and developers. Each bug ticket and case in Salesforce is connected and weighted on agreed parameters, notifying developers and engineers in application support when certain tickets break KPIs and compile daily report distributed to all key stakeholders on daily statistics and bug resolution progress.</p></details>",de:"<details><summary><b>Jira zu Salesforce Synchronization</b></summary><p>Entwickeltes Synchronisationssystem zwischen Jira und Salesforce, das Support und Entwickler verbindet. Jedes Fehlerticket und jeder Fehlerfall in Salesforce wird mit vereinbarten Parametern verknüpft und gewichtet. Dadurch werden Entwickler und Techniker im Anwendungssupport benachrichtigt, wenn bestimmte Tickets gegen die KPIs verstoßen, und es wird ein täglicher Bericht erstellt, der über die täglichen Statistiken und den Fortschritt der Fehlerbehebung an alle wichtigen Beteiligten verteilt wird.</p></details>"},automationprojectFour:{en:"<details><summary><b>User Simulation Checks</b></summary><p>Developed QA system across all platforms in portfolio to perform morning and evening checks, written in <a href='https://selenium.dev/' target='_blank'>Selenium</a> module, verifying product health, availability and simulating customer interaction to confirm everything is running as it should and performing up to spec.</p></details>",de:'<details><summary><b>Überprüfung der Benutzersimulation</b></summary><p>Entwickeltes QS-System für alle Plattformen im Portfolio zur Durchführung von morgendlichen und abendlichen Überprüfungen, geschrieben im <a href="https://selenium.dev/" target="_blank">Selenium-Modul</a>, zur Überprüfung des Produktzustands, der Verfügbarkeit und zur Simulation der Kundeninteraktion, um sicherzustellen, dass alles ordnungsgemäß funktioniert und den Spezifikationen entspricht.</p></details>'},automationprojectFive:{en:"<details><summary><b>Specialised Web-Crawler</b></summary><p>Created a web-crawler to scrape large quantity of data from multiple sources and parse it out and sanitize for further processing in topical, domain specific Q&A system.</p></details>",de:"<details><summary><b>Spezialisierter Web-Crawler</b></summary><p>Erstellt einen Web-Crawler, um große Datenmengen aus mehreren Quellen zu kratzen und sie zu analysieren und für die weitere Verarbeitung in einem aktuellen, domänenspezifischen Q&A-System zu bereinigen.</p></details>"},automationprojectSix:{en:"<details><summary><b>Slack Automation</b></summary><p>Numerous integrations with Slack, ranging from production server restarts, getting current status of incidents or problems happening, to AWS command CLI execution directly from Slack. I streamlined many processes and combined them into single source using Slack.</p></details>",de:"<details><summary><b>Slack Automation</b></summary><p>Zahlreiche Integrationen mit Slack, angefangen vom Neustart des Produktionsservers über das Abrufen des aktuellen Status von Vorfällen oder Problemen bis hin zur Ausführung der AWS-Befehls-CLI direkt von Slack. Ich habe viele Prozesse rationalisiert und mit Slack zu einer einzigen Quelle zusammengefasst.</p></details>"}}},opsSection:{opsTitle:{en:"DevOps - SRE",de:"DevOps - SRE"},shortOpsDescription:{en:"Throughout my professional career I have worked in multiple operational roles, and through them learned a lot about lifecycle of any application as well as importance of Operational strategy and Operational frameworks. Some notable advancements and examples include:",de:"Während meiner beruflichen Laufbahn habe ich in verschiedenen operativen Funktionen gearbeitet und dabei viel über den Lebenszyklus jeder Anwendung sowie die Bedeutung der operativen Strategie und der operativen Rahmenbedingungen gelernt. Einige bemerkenswerte Fortschritte und Beispiele sind:"},opsNotableProjectsTitle:{en:"Notable Examples",de:"Bemerkenswerte Beispiele"},opsProjectList:{en:[{name:"* Well versed in multiple Cloud technologies.",id:1},{name:"* Maintained, deployed and monitored products in: Microsoft Azure, Google Cloud, AWS and On premise datacentres.",id:2},{name:"* Authored a SRE (Site Reliability Engineering) manual, based on Google SRE workbook adapting the process to our own platforms.",id:3},{name:"* Designed and developed multiple monitoring and alerting strategies to increase visibility and decrease MTTR of issues.",id:4},{name:"* Implemented multiple custom made alerts to keep track and granular view of platforms.",id:5},{name:"* Maintained NewRelic for all our platforms. Designed, developed and implemented standards for monitoring and Synthetics scripting",id:6},{name:"* Automated resolution and logging of many production minor issues like service restarts and similar",id:7},{name:"* Automated and help develop incident and problem management system, working hand in hand with Service Delivery and Incident and Problem managers.",id:8}],de:[{name:"* Erfahren in verschiedenen Cloud-Technologien",id:1},{name:"* Verwaltete, implementierte und überwachte Produkte in: Microsoft Azure, Google Cloud, AWS und On-Premise-Rechenzentren.",id:2},{name:"* Verfasste ein SRE-Handbuch (Site Reliability Engineering), das auf der Google SRE-Arbeitsmappe basiert und den Prozess an unsere eigenen Plattformen anpasst.",id:3},{name:"* Konzipiert und entwickelt mehrere Überwachungs- und Alarmierungsstrategien, um die Sichtbarkeit zu erhöhen und die MTTR von Problemen zu verringern.",id:4},{name:"* Mehrere benutzerdefinierte Warnmeldungen wurden implementiert, um die Übersicht und Granularität der Plattformen zu behalten.",id:5},{name:"* Betreute NewRelic für alle unsere Plattformen. Design, Entwicklung und Implementierung von Standards für Monitoring und Synthetics Scripting",id:6},{name:"* Automatisierte Auflösung und Protokollierung vieler kleinerer Produktionsprobleme wie Neustarts von Diensten und Ähnlichem",id:7},{name:"* Automatisierung und Unterstützung bei der Entwicklung von Incident- und Problem-Management-Systemen, die Hand in Hand mit Service Delivery- und Incident- und Problem-Managern arbeiten.",id:8}]}},finalSection:{finalTitle:{en:"Skills and Details",de:"Fähigkeiten und Wissen"},shortfinalDescription:{en:"Technical and soft skills breakdown",de:"Aufschlüsselung der technischen und Soft Skills"},finalSkills:{en:[{name:"<details><summary><b>Tech Skills: </b></summary><li>Python (multiple frameworks, including all major data science and machine learning frameworks)</li><li>JavaScript</li><li>VueJs</li><li>Angular</li><li>React</li><li>Node.js</li><li>SQL</li><li>MongoDB</li><li>PowerShell</li><li>Linux</li><li>AWS</li><li>Google Cloud</li><li>Microsoft Azure</li><li>MongoDB</li><li>Jira</li><li>Git</li><li>SalesForce</li><li>Slack (integrations, RTM etc.)</li></details><br />",id:1},{name:"<details><summary><b>Soft Skills: </b></summary><li>SCRUM Certified</li><li>Kanban</li><li>ITIL V3 certified</li><li>Excelent communication skills</li><li>Innovator of next gen solutions</li><li>Excelent in explaining technical content to non technical personnel</li><li>Perfectionist</li><li>Fast Learner</li></li></details><br />",id:2}],de:[{name:"<details><summary><b>Technische Fähigkeiten: </b></summary><li>Python (multiple frameworks, including all major data science and machine learning frameworks)</li><li>JavaScript</li><li>VueJs</li><li>Angular</li><li>React</li><li>Node.js</li><li>SQL</li><li>MongoDB</li><li>PowerShell</li><li>Linux</li><li>AWS</li><li>Google Cloud</li><li>Microsoft Azure</li><li>MongoDB</li><li>Jira</li><li>Git</li><li>SalesForce</li><li>Slack (integrations, RTM etc.)</li></details><br />",id:1},{name:"<details><summary><b>Soft Skills: </b></summary><li> SCRUM-zertifiziert </ li> <li> Kanban </ li> <li> ITIL V3-zertifiziert </ li> <li> Hervorragende Kommunikationsfähigkeiten </ li> <li> Innovator für Lösungen der nächsten Generation </ li> < li> Hervorragende Erklärung technischer Inhalte für nicht technisches Personal </ li> <li> Perfektionist </ li> <li> Schneller Lerner </ li></details><br />",id:2}]}},isOpen:{isOpenSectionOne:!1,isOpenSectionTwo:!1,isOpenSectionThree:!1,isOpenSectionFour:!1,isOpenSectionFive:!1,isOpenSectionSix:!1},buttonLang:"DE"},methods:{toggleSectionOne:function(){return this.isOpen.isOpenSectionOne?this.sectionOneButtonClose[headerInstance.currentLocale]:this.sectionOneButtonOpen[headerInstance.currentLocale]},toggleSectionTwo:function(){return this.isOpen.isOpenSectionTwo?this.sectionOneButtonClose[headerInstance.currentLocale]:this.sectionOneButtonOpen[headerInstance.currentLocale]},toggleSectionThree:function(){return this.isOpen.isOpenSectionThree?this.sectionOneButtonClose[headerInstance.currentLocale]:this.sectionOneButtonOpen[headerInstance.currentLocale]},toggleSectionFour:function(){return this.isOpen.isOpenSectionFour?this.sectionOneButtonClose[headerInstance.currentLocale]:this.sectionOneButtonOpen[headerInstance.currentLocale]},toggleSectionFive:function(){return this.isOpen.isOpenSectionFive?this.sectionOneButtonClose[headerInstance.currentLocale]:this.sectionOneButtonOpen[headerInstance.currentLocale]},toggleSectionSix:function(){return this.isOpen.isOpenSectionSix?this.sectionOneButtonClose[headerInstance.currentLocale]:this.sectionOneButtonOpen[headerInstance.currentLocale]},toggleLang:function(){return headerInstance.currentLocale},changeLanguage:function(){"en"==headerInstance.currentLocale?(headerInstance.currentLocale="de",this.buttonLang="EN"):(headerInstance.currentLocale="en",this.buttonLang="DE")}}});