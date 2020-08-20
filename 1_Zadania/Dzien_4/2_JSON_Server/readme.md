# Fetch

## Przygotowanie
> Zmodyfikuj plik `webpack.config.js` tak aby:
> - zmienna `entryPath` wskazywała na `1_Zadania/Dzien_4/2_JSON_Server`
> - zmienna `entryFile` wskazywała na plik, nad którym aktualnie pracujesz, np. `task01/App.js`
>
> **Pamiętaj aby po każdej zmianie w pliku `webpack.config.js` przerwać działanie Webpacka (`CTRL+C`) a następnie włączyć go z powrotem (`npm start`).**


### Zadanie 0a - rozwiązywane z wykładowcą

Zainstaluj bibliotekę `json-server`:

```bash
npm install -g json-server
```

https://www.npmjs.com/package/json-server



### Zadanie 1

> Pliki do pracy  
> `js/task01/App.js`  
> `js/task01/CarsManager.js`
> `js/task01/AddCar.js`
> `js/task01/Car.js`

> Aby poprawnie wykonać to zadanie musisz mieć zainstalowany `json-server`.
> W folderze `database` znajduje się  plik `cars.json` z gotową bazą lokalną samochodów.
>
> Uruchomienie json-server:
> ```bash
> json-server database/cars.json --watch
> ```

#### Część 1 - rozwiązywana z wykładowcą

Stwórz komponent `CarsManager`.

Za pomocą `fetch()` wykonaj zapytanie do swojego lokalnego serwera tak, aby pobrać listę wszystkich aut.

Następnie zbuduj listę (pamiętaj o odpowiednich kluczach), w której będziesz wyświetlał dla każdego auta wszystkie dostępne informacje oraz przycisk "Sprzedany".

Po kliknięciu na ten przycisk powinieneś wykonać odpowiednie zapytanie, które usunie daną pozycję z bazy lokalnej. Następnie zmodyfikuj state tak, żeby odzwierciedlić zmiany. **Nie odświeżaj strony!**.

Niech komponent wyrenderuje w `div` element `ul` z elementami listy samochodów.

Pamiętaj o zablokowaniu wyświetlania komponentu dopóki nie otrzymasz odpowiedzi z serwera.

#### Część 2

Stwórz komponent `AddCar`, który będzie zawierał formularz służący do dodania samochodu do bazy danych. Musi zawierać pola:

- Nazwa [name]
- Marka [brand]
- Silnik
    - Typ [type]
    - Moc [hp]

 Po dodaniu auta do bazy ma ono również pojawić się na liście samochodów. **Nie należy wysyłać ponownego zapytania do bazy ani odświeżać strony!**.

#### Część 3

Stwórz komponent `Car`, który będzie miał za zadanie wyświetlać tylko jeden samochód z bazy danych. Należy tak zmodyfikować zadanie aby po pobraniu danych z bazy generować komponenty `Car` i przekazywać do nich przez `props` wszystkie niezbędne dane, a także callback funkcji, która usunie auto z bazy i odświeży widok.

Komponent ten należy rozbudować o **Edycję** samochodu. Dodaj przycisk **Edytuj**, po którego kliknięciu ma pojawić się formularz do edycji tego konkretnego auta. Po kliknięciu **Zapisz** dane mają zapisać się w bazie danych, a także zaktualizować na stronie.

Formularz należy walidować: pola nie mogą być puste a konie mechaniczne muszą być tylko cyframi.
