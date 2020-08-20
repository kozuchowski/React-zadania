# Dzień 2 - zadania domowe

## Przygotowanie
> Zmodyfikuj plik `webpack.config.js` tak aby:
> - zmienna `entryPath` wskazywała na `3_Zadania_domowe/Dzien_2`
> - zmienna `entryFile` wskazywała na plik, nad którym aktualnie pracujesz, np. `task01.js`
>
> **Pamiętaj aby po każdej zmianie w pliku `webpack.config.js` przerwać działanie Webpacka (`CTRL+C`) a następnie włączyć go z powrotem (`npm start`).**

---

### Zadanie 1 - `js/task01.js`

Stwórz dwa komponenty.

Pierwszy z nich `PropsToState` ma przyjmować w `props` wartość `text` i przechowywać ją w stanie lokalnym.

Drugi komponent `ShowInfo` przyjmuje po prostu w `props` wartość `info` i renderuje ją w elemencie `h1`.

`PropsToState` renderuje w swoim środku komponent `ShowInfo`, przekazując mu ze stanu lokalnego wartość `text`.

Dodaj do swojego komponentu `PropsToState` odpowiedni interval, który co 1 sekundę dodaje do stanu lokalnego `text` jedną kropkę ".".

---

### Zadanie 2 - `js/task02.js`

> Poniższe zadanie pozwoli Ci stworzyć mini grę, w której gracz ma określony czas by jak najszybciej klikać na przycisk. Czas biegnie coraz szybciej i należy kliknąć tyle razy, ile się uda, zanim czasu między kolejnymi kliknięciami będzie go za mało.

Stwórz komponent `SpeedClickGame`. Ma on przyjmować czas do odliczania w ms przez props `time` i przechowywać go w stanie lokalnym.

Komponent składa się z przycisku z napisem "Click me!", elementu `h1` i elementu `h2` w elemencie `div`. W elemencie `h1` wyświetlaj aktualny czas, w `h2` będzie przechowywana liczba punktów (póki co 0).

Uruchom interval wykonywany co 50ms. W funkcji intervala zmniejszaj aktualny czas o `50ms` i sprawdzaj czy czas się nie skończył. Jeżeli czas się skończył, zablokuj przycisk (`disabled={true}`).

Po kliknięciu na przycisk dodawany jest punkt a czas zostaje zresetowany, ale jest o `50ms` krótszy niż poprzedni.

Np. jeżeli atrybut `time` tego komponentu był ustawiony na **1000** to:
- Brak kliknięć, czas początkowy: 1000ms,
- Pierwsze kliknięcie, czas początkowy: **950ms**,
- Drugie kliknięcie, czas początkowy: **900ms**,
- Trzecie kliknięcie, czas początkowy: **850ms**...

Wyrenderuj komponent dla props `time` ustawionego na 2000.
