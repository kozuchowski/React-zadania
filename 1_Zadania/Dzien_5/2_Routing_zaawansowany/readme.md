# Zaawansowany routing &ndash; zadania

## Przygotowanie
> Zmodyfikujcie plik `webpack.config.js`, tak aby:
> - zmienna `entryPath` wskazywała na `1_Zadania/Dzien_5/2_Routing_zaawansowany`
> - zmienna `entryFile` wskazywała na plik, nad którym aktualnie pracujecie, np. `task01/App.js`
>
> **Pamiętajcie, aby po każdej zmianie w pliku `webpack.config.js` przerwać działanie Webpacka (`CTRL+C`) a następnie włączyć go z powrotem (`npm start`).**


## Zadanie rozwiązywane z wykładowcą

### Zadanie 0a 

> Pliki do pracy  
> `js/task0a/App.js`  
> `js/task0a/HelloYou.js`
> `js/task0a/CheckAge.js`

Stwórz aplikację React, w której znajduje się następujący routing:
- `/` - ścieżka główna, z powitaniem;
- `/hello/:name` - ścieżka renderuje komponent `HelloYou`, w którym jest `h1` z napisem "Witaj, {name}", gdzie `{name}` to imię wpisane w ścieżkę;
- `/checkage/:age` - ścieżka renderuje komponent `CheckAge`, w którym jest `h1` z napisem "Pełnoletni", jeżeli w `age` podano wiek min. 18, w przeciwnym wypadku renderuje napis "Niepełnoletni".

Na każdej podstronie wyświetl menu, do 3 przykładowych ścieżek (`/`, `/hello/Jan`, `/checkage/50`). Zaznaczone linki mają być pogrubione.


## Zadania do samodzielnego wykonania

### Zadanie 1 

> Pliki do pracy  
> `js/task01/App.js`  
> `js/task01/Home.js`
> `js/task01/Blog.js`
> `js/task01/Pricing.js`

Przerób zadanie 1 z poprzedniego działu tak, aby każdy zaznaczony link miał zieloną ramkę.

Stosuj `NavLink`, zamiast `Link`, żeby ominąć możliwe kłopoty z kolorowaniem linków, które nie są dokładnie takie jakie powinny być.

Wyrenderuj i przetestuj swoją aplikację, sprawdź ścieżki i ich wygląd.

---

### Zadanie 2

> Pliki do pracy  
> `js/task02/App.js`  
> `js/task02/Services.js`
> `js/task02/ServiceInfo.js`
> `js/task02/NotFound.js`

Stwórz aplikację React, w której znajduje się następujący routing:
- `/` - ścieżka główna, ma wyświetlać listę wszystkich linków services, dokładnie: `/services/www`, `/services/shop`, `/services/seo` - w komponencie `Services`
- `/services/:service` - ścieżka renderuje komponent `ServiceInfo`, w którym jest `h1` z napisem "Proponujemy usługę: {service}", gdzie `{service}` to nazwa tego co poda się w parametrze URL. Poprawne parametry `service` to: `www`, `shop` lub `seo`. Sprawdź to, jeżeli wpisano co innego - wyświetl tylko link do strony głównej;
- Jeżeli ktoś poda nieprawidłową ścieżkę, to również wyświetla się link do strony głównej.

Wyrenderuj i przetestuj swoją aplikację, sprawdź ścieżki. Sprawdź również co się stanie gdy podasz nieprawidłowy odnośnik (wpisanie `/brak` lub `/services/niepoprawny` powinno skutkować wyświetleniem linku do strony głównej) - komponent `NotFound`.
