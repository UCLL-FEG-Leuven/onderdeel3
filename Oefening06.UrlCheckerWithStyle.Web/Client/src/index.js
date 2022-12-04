// Deze index.js is het toegangspunt voor Webpack.
// Al de 'imports' die Webpack tegenkomt zullen mee gebundeld worden.

// Eerst de Bootstrap CSS/Javascript + alle afhankelijkheden.
import '@popperjs/core';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// De 'eigen' CSS toevoegen. 
// (!) Normaal zou dat in de map /src moeten opgenomen worden maar aangezien deze oefening ook 
// de niet-webpack variant demonstreert werd het site.css bestand opgenomen in wwwroot.
import '../public/site.css';

// En de UrlChecker JavaScript implementatie uiteraard...
// (!) Normaal zou dat in de map /src moeten opgenomen worden maar aangezien deze oefening ook 
// de niet-webpack variant demonstreert werd het url-checker.js bestand opgenomen in wwwroot.
import '../public/url-checker';