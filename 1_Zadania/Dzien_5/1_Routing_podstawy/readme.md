# Podstawowy routing

## Przygotowanie
> Zmodyfikujcie plik `webpack.config.js`, tak aby:
> - zmienna `entryPath` wskazywała na `1_Zadania/Dzien_5/1_Routing_podstawy`
> - zmienna `entryFile` wskazywała na plik, nad którym aktualnie pracujecie, np. `task01/App.js`
>
> **Pamiętajcie, aby po każdej zmianie w pliku `webpack.config.js` przerwać działanie Webpacka (`CTRL+C`) a następnie włączyć go z powrotem (`npm start`).**


## Zadanie rozwiązywane z wykładowcą

### Zadanie 0a 

> Pliki do pracy  
> `js/task0a/App.js`  
> `js/task0a/Main.js`
> `js/task0a/AboutUs.js`
> `js/task0a/AboutCompany.js`

Stwórz aplikację React, w której znajduje się następujący routing:
- `/` - ścieżka renderuje komponent `Main`, w którym jest `h1` z napisem "Witaj na stronie";
- `/about/us` - ścieżka renderuje komponent `AboutUs`, w którym jest `p` z napisem "Trochę więcej o nas...";
- `/about/company` - ścieżka renderuje komponent `AboutCompany`, w którym jest `p` z napisem "Trochę więcej na temat firmy...".

Wszystkie ścieżki korzystają z szablonu głównego, który zawiera w `div` element `h1` z napisem "Aplikacja React z React Router" i treść renderowaną przez dzieci.
 
Dodatkowo, ścieżki zaczynające się od `/about` mają dodatkowy, własny szablon, który zawiera w `div` element `h2` z napisem "O nas" i treść renderowaną przez dzieci.

Wyrenderuj i przetestuj swoją aplikację, sprawdź ścieżki.


## Zadania do samodzielnego wykonania

### Zadanie 1

> Pliki do pracy  
> `js/task01/App.js`  
> `js/task01/Home.js`
> `js/task01/Blog.js`
> `js/task01/Pricing.js`

Stwórz aplikację React, w której znajduje się następujący routing:
- `/` - ścieżka renderuje komponent `Home`, w którym jest `h1` z napisem "Witaj na stronie";
- `/blog` - ścieżka renderuje komponent `Blog`, w którym jest `h1` z napisem "Blog";
- `/pricing` - ścieżka renderuje komponent `Pricing`, w którym jest `h1` z napisem "Cennik".

Wszystkie ścieżki korzystają z szablonu głównego, który zawiera w `div` element `h1` z napisem "Aplikacja React z React Router" i element `ul` z linkami do każdej z podstron oraz treść renderowaną przez dzieci.

Wyrenderuj i przetestuj swoją aplikację, sprawdź ścieżki.
