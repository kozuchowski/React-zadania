# Fetch

## Przygotowanie
> Zmodyfikuj plik `webpack.config.js` tak aby:
> - zmienna `entryPath` wskazywała na `1_Zadania/Dzien_4/1_Fetch`
> - zmienna `entryFile` wskazywała na plik, nad którym aktualnie pracujesz, np. `task01/App.js`
>
> **Pamiętaj aby po każdej zmianie w pliku `webpack.config.js` przerwać działanie Webpacka (`CTRL+C`) a następnie włączyć go z powrotem (`npm start`).**

## Zadanie rozwiązywane z wykładowcą

### Zadanie 0a

> Pliki do pracy  
> `js/task0a/App.js`  
> `js/task0a/BookInfo.js`

Dołącz polyfill `fetch()`.

Stwórz komponent `BookInfo`, który przez props przyjmuje ISBN książki (`isbn`).

Za pomocą `fetch()` wykonaj zapytanie na adres otwartego API:
 > `https://www.googleapis.com/books/v1/volumes?q=isbn:{numerISBN}`

gdzie zamiast `numerISBN` podasz ISBN przekazany w props.

Otrzymasz w odpowiedzi JSON, a z niego obiekt, w którym interesuje Cię tablica pod kluczem `items`, a w niej pierwszy element - obiekt z informacją o książce.

Niech komponent wyrenderuje w `div` element `h1` z tytułem (jest w tym obiekcie pod kluczem `volumeInfo.title`.

Pamiętaj o zablokowaniu wyświetlania komponentu dopóki nie otrzymasz odpowiedzi z serwera.

Przetestuj swój komponent w ten sposób:

```JS
<BookInfo isbn="0747532699" />
```

---

### Zadanie 0b

> Pliki do pracy  
> `js/task0b/App.js`  

Zadanie polega na wczytaniu danych z adresu: `https://swapi.co/api/films/`
Przejdź przez zadanie korzystając z **debuggera**. Zwróć uwagę na to kiedy dane zostają wczytane?

Przydatne informacje:
* użyj odpowiedniej metody HTTP, jeśli jest potrzebna,
* użyj odpowiednich metod informujących użytkownika o statusie żądania (metody ```then()```, ```catch()```),
* sprawdź w konsoli, jak wyglądają wczytywane dane, czy jest to tablica, string, JSON?
* jeśli dane zostaną poprawnie wczytane, to wywołaj odpowiednią funkcję zmieniającą stan komponentu do której jako argument przekaż wczytane dane,
* komponent ma renderować w pętli elementy **li** do którego wstawisz tytuł filmu 
* lista `ul` ma mieć klasę CSS: `.list`


## Zadania do samodzielnego wykonania

# Zadanie 1

> Pliki do pracy  
> `js/task01/App.js`  
> `js/task01/Holidays.js`

Stwórz komponent `Holidays`.

Pod adresem `https://fer-api.coderslab.pl/v1/holidays` jest przechowywana baza świąt państwowych różnych krajów.
Aby z niej skorzystać należy przesłać specjalny klucz (`key`): `e92601251-c0a2-4s63-v73f-54041195480f`. API wymaga również podania kodu kraju (`country`). Do dyspozycji mamy trzy: 

- Polska (`PL`)
- Wielka Brytania (`GB`)
- Stany Zjednoczone (`US`)

| Zasób | Metoda | Dane | Opis |
| ----- | ------ | ---- | ---- |
| `/holidays` | `GET` | `key`, `country` | Pobranie świąt w danym kraju |
                       

Za pomocą funkcji ```fetch()``` wczytaj do elementu **ul** wszystkie daty świąt (jako elementy li).
Aby poprawnie wczytać dane w funkcji ```fetch()``` trzeba w odpowiedni sposób skonstruować adres URL naszego żądania, np,: `https://https://fer-api.coderslab.pl/v1/holidays?key=e92601251-c0a2-4s63-v73f-54041195480f&country=PL`.

Każdą nazwę święta wczytaj do elementu **li** jako element **h3.holiday-name**, a jego datę wczytaj do elementu **li** jako element **date.holiday-date**.

Podpowiedzi:
* Wczytaj dane i zobacz w konsoli jak wyglądają, pozwoli Ci to ustalić czego należy użyć, aby dostać się do nazw i dat świąt. Możesz tutaj wykorzystać też zakładkę Network.


#### Dodatkowo
Niech komponent renderuje element `select` w którym będzie można wybrać z którego kraju mają pojawiać się święta. Wybór jakiegoś elementu `option` ma spowodować ponowne wysłanie zapytania i przerenderowanie komponentu. Domyślnie wybraną opcją ma być `PL`.

---
Dane pochodzą z serwisu: https://holidayapi.com/.
