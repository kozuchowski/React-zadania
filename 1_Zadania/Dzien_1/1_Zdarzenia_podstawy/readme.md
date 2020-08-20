# Zdarzenia - podstawy

## Przygotowanie
> Zmodyfikuj plik `webpack.config.js` tak aby:
> - zmienna `entryPath` wskazywała na `1_Zadania/Dzien_1/1_Zdarzenia_podstawy`
> - zmienna `entryFile` wskazywała na plik, nad którym aktualnie pracujesz, np. `task01/App.js`
>
> **Pamiętaj aby po każdej zmianie w pliku `webpack.config.js` przerwać działanie Webpacka (`CTRL+C`) a następnie włączyć go z powrotem (`npm start`).**

## Zadanie rozwiązywane z wykładowcą

### Zadanie 0a 

> Pliki do pracy  
> `js/task0a/App.js`  
> `js/task0a/Buttons.js`

Stwórz komponent funkcyjny o nazwie `Buttons` z 3 przyciskami z napisem "Klik!".

- Po kliknięciu na pierwszy przycisk wyświetl w konsoli "Pierwszy przycisk kliknięty".

- Po kliknięciu na drugi przycisk wywołaj dwukrotnie funkcję `prompt()`, służącą do pobrania od użytkownika liczby A i B. W konsoli wyświetlcie wynik potęgowania tych dwóch liczb.

- Po kliknięciu na trzeci przycisk wyświetl w konsoli szerokość i wysokość ekranu (z obiektu `window`).


--- 

### Zadanie 0b 

> Pliki do pracy  
> `js/task0b/App.js`  
> `js/task0b/ShowUserFunc.js`
> `js/task0b/ShowUserClass.js`

Stwórz komponent `ShowUserFunc` i `ShowUserClass`. Mają one przyjmować w `props` imię (`name`) i nazwisko (`surname`). Komponenty mają renderować przycisk "Dane użytkownika". Po jego kliknięciu **w konsoli** wyświetl zawartość propsów `name` i `surname`.

Komponent `ShowUserFunc` ma być funkcyjny a `ShowUserClass` klasowy.

Stwórz też komponent `App` który będzie renderował oba komponenty i przesyłał do nich odpowiednie propsy.


## Zadania do samodzielnego wykonania

### Zadanie 1

> Pliki do pracy  
> `js/task01/App.js`  
> `js/task01/HoverEvent.js`

Stwórz komponent `HoverEvent` renderujący przycisk. Po **najechaniu** na przycisk wypisz w konsoli: "Najechano na przycisk!".

Zadanie spróbuj rozwiązać za pomocą komponentu klasowego i funkcyjnego.

---

### Zadanie 2 

> Pliki do pracy  
> `js/task02/App.js`  
> `js/task02/EventsTest.js`

Stwórz komponent **funkcyjny** `EventsTest` z elementem `div` o wymiarach 100 na 100 pikseli i czerwonym tle.

Zareaguj na zdarzenia: kliknięcia, najechania, opuszczenia kursorem tego elementu - wypisując odpowiednią informację w konsoli.


