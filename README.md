# BrowserTechnologies-NotAScam

<h2>Bronnenlijst:</h2>
Form makeup
https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form

Svg encoder to be able to put it in a content tag
https://yoksel.github.io/url-encoder/

headache:
https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData

assume i used mdn for literally everyting


<h1>Toelichting</h1>
progressive disclosure
ik heb ervoor gezorgd dat de logica van de css statement zo gedraait is dat hij hidden word gezet met :has en :not zodat browsers die daar geen support voor hebben wel het formulier kunnen invullen

required while hidden
De inputs die worden verstopt zijn niet required, maar worden door js required gemaakt door een eventlistener. Dit is zodat je deze informatie niet hoeft in te vullen als het niet nodig is. De requirement word ook weggehaald op het moment dat de fieldsets weer gesloten worden. Ik heb ervoor gekozen om de event listner hiervoor op de fieldset gezet, zodat er gegarandeert een update komt als je ermee interacteerd maar niet het hele document overbelast.

popover (nieuw element, werkt met pure html) 
uitproberen waar de button moet want de button in een form is automatisch een submit button, maar dat kan je overschrijven. In de DOM structuur staat de popup onder de vraag waar de toelichting voor nodig is, om dit zo toegankelijk mogelijk te maken voor browsers waarin dit popover element niet werks

Validatie
Beide user validation en form validation. Met heb outlines gebruikt in plaats van borders, zodat het de spacing van het document niet verstoort. Heb naast kleuren ook een icoon toegevoegd in een ::after element(die ik door deze opdrachten ook heb leren kennen) in de vorm van een vink en een kruis om het ook duidelijk te maken voor mensen die het verschil tussen rood en groen niet kunnen zien. 
Ik heb ook een speciale focus state

Form- requirements
voor de verschillende inputvelden heb ik ook bepaalde eisen gezet, bijvoorbeeld nummers voor het BSN nummer en een data niet later dan vandaag voor de data. De data kon ik helaas niet zonder js doen, dus die is momenteel niet dynamsish maar de datum wanneer ik het gesprek heb voor het inleveren van de opdracht.

localstorage
Ik heb ook localstorage toegevoegd zodat als je de pagina herlaad eerder ingevulde gegevens terugkomen op de pagina. Dit werkt voor alle soorten inputs behalve de radio input. Als ik een waarde in de radio input probeerde te laden ging altijd het laatste knopje aan doordat radio buttons altijd dezelfde naam hebben. Ik heb daarom besloten om het weg te halen, het is namelijk vervelender als iets verkeerd ingevuld is dan als het helemaal niet gedaan is. Ik heb ook opgemerkt dat dit met de validatie van het document knoeit na het laden van de content als er eerst wel content in stond. Ik heb dit niet weten op te lossen. 

Informatie-flexibel
Toen ik bezig was met de popup heb ik er ook over nagedacht hoe ik de inhoud dynamish zou kunnen maken zodat elke keer als je op het i-tje klikt andere informatie(bijpassend bij de vraag) tevoorschijn zou komen. Ik heb hierbij geexperimenteerd met json en javascript, maar ik ben tot de conclusie gekomen dat het veel toegankelijker is om de tekst in de html te zetten, en dat elke i een andere sectie oproept.

Hoe nu verder? plan voor de rest van het formulier
Als ik de rest van het formulier zou maken zou ik dat zo doen:
- per vraag 1 html blad. Dit is voor overzichtelijkheid en begrijpbaarheid belangrijk. Zo word ook de data tussendoors naar de server gestuurd zodat die het ook kan bijhouden. Voor dit blad zou het betekenen dat vraag 1c en 1d nog toegevoegd worden, met hun eigen toelichting en syntax.
- progressie systeem/ balk. Het was wel al in mijn gedachten maar ik had er geen tijd meer voor.
