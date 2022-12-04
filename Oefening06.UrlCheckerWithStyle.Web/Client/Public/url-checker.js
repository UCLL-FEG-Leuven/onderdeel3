// Deze functie al zal aangeroepen worden waneer er op de <button> geklikt wordt.
// Dat komt omdat volgende attribuut op de button werd gezet: onclick="checkUrl()".
// Er is ook een beter alternatief dat we zullen zien in onderdeel 4 (*).
function checkUrl() {
    // Ophalen van de 'value' van een <input> html element.
    // document: geeft toegang tot het docuument (= ingangspunt voor de DOM).
    // getElementById: haalt een html DOM element op door middel van het ingesteld 'id' attribuut.
    // value: uitlezen van de waarde die de gebruiker heeft ingevuld.
    let urlString = document.getElementById("url").value;

    try {
        // urlString is mogelijks een geldige URL.
        // Als dat niet het geval is, dan zal de JavaScript omgeving een 'exception' gooien.
        // Een excepton is een 'programmafout': 
        // het gevolg is dat de uitvoering hier stop en doorgaat bij een eventuele catch() { ...
        // Zoals je merkt hebben we onderaan een 'catch' blok voorzien: als de string dus geen 
        // geldige url is zal de 'catch' onderaan er dus voor zorgen dat we aan de gebruiker duidelijk
        // maken dat het geen geldige url is.
        let url = new URL(urlString);

        // Als de uitvoering van je JavaScript programme tot hier geraakt is, dan ben je zeker
        // dat urlString een geldige url is. In de variabele 'url' zal dan een URL object zitten.
        // Dat URL object bevat een heel aantal handige eigenschappen om de url te ontleden.

        // Eerst controleren we of de url start met http(s).
        // Bemerk dat de if-test true zal zijn voor zowel http als voor https.
        if (url.protocol.toLowerCase().startsWith("http")) {           
            document.getElementById("feedback").className = "badge bg-success"; // Dit zijn een Boostrap 4 classes. Meer info over 'badge': https://getbootstrap.com/docs/4.0/components/badge/
            document.getElementById("feedback").innerText = "Geldig";

            // Aangezien het een geldige url is die met http(s) start gaan we nu ook de url
            // ontleden en het resultaat tonen in de urlParts <section>.
            // Met unset wordt de 'display' property naar de default waarde gereset (zichtbaar dus).
            // Meer info over unset: https://developer.mozilla.org/en-US/docs/Web/CSS/unset
            document.getElementById("urlParts").style.display = "unset"; 
            document.getElementById("schema").value = url.protocol;
            document.getElementById("host").value = url.hostname;
            document.getElementById("port").value = url.port;
            document.getElementById("path").value = url.pathname;
            document.getElementById("query").value = url.search;
            document.getElementById("fragment").value = url.hash;
        } else {
            document.getElementById("feedback").className = "badge bg-warning"; // Dit zijn een Boostrap 4 classes.
            document.getElementById("feedback").innerText = "Geldig (!)";
            document.getElementById("feedback").title = "De URL is geldig maar heeft geen http(s) schema/protocol."; // Met het attribuut 'title' kan je exta informatie tonen als tooltip: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/title

            // De urlParts <section> wordt verborgen. We zouden deze ook kunnen laten zien (omdat het een geldige url is).
            // Maar aangezien we alleen http(s) url's willen ontleden verbergen we urlParts.
            document.getElementById("urlParts").style.display = "none";   
        }
    } catch (ex) {
        // ongeldige URL.
        // De uitvoering 'springt' dus naar hier bij het optreden van een exception (= programmafout).
        document.getElementById("feedback").className = "badge bg-danger"; // Dit zijn een Boostrap 4 classes.
        document.getElementById("feedback").innerText = "Ongeldig";
        document.getElementById("urlParts").style.display = "none";         
    }
}

// (*) Alternatief: je registreert een 'click' handler bij de 'Controleer' knop.
// Je moet dan wel 'onclick="checkUrl()"' weghalen en een id="buttonCheck" toevoegen bij de 'Controleer' button in index.nowebpack.html en index.webpack.html.
// Vervolgens moet je deze code uit commentaar halen:
//document.getElementById("buttonCheck").addEventListener("click", function () {
//    checkUrl();
//});
// In onderdeel 4 gaan we daar dieper op in.

// [Extra]
// Onderstaande regel is enkel nodig indien je gebruik maakt van webpack.
// de functie checkUrl() is dan namelijk niet bereikbaar vanuit het onclick attribuut.
// webpack heeft die functie afgeschermd
// Je kan die 'globaal' beschikbaar maken via onderstaande werkwijze
// (Opgelet: functies, variabelen, ... globaal definiëren kan 'gevaarlijk' zijn en wordt soms afgeraden.)
window.checkUrl = checkUrl;

