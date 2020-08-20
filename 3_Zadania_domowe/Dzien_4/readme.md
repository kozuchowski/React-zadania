# Dzień 4 - zadania domowe

## Przygotowanie
> Zmodyfikuj plik `webpack.config.js` tak aby:
> - zmienna `entryPath` wskazywała na `3_Zadania_domowe/Dzien_4`
> - zmienna `entryFile` wskazywała na plik, nad którym aktualnie pracujesz, np. `task01.js`
>
> **Pamiętaj aby po każdej zmianie w pliku `webpack.config.js` przerwać działanie Webpacka (`CTRL+C`) a następnie włączyć go z powrotem (`npm start`).**

---

### Zadanie 1 - `js/task01.js`

> Aby poprawnie wykonać to zadanie musisz mieć zainstalowany `json-server`.
> W folderze `database` znajduje się  plik `users.json` z listą użytkowników.
>
> Uruchomienie json-server:
> ```bash
> json-server database/users.json --watch
> ```

#### Część 1

Stwórz komponent `Users` który będzie pobierał listę użytkowników z JSON Server.

Ma on ich wyświetlać w dowolny dla Ciebie sposób. **Spróbuj lekko ostylować swoją aplikację!**. Należy wyświetlić **wszystkie informacje** o użytkowniku.

#### Część 2

Na górze strony ma się wyświetlać komponent `AddUser`. Ma to być formularz przyjmujący takie wartości:

- imię (`name`) - Walidacja: min. 2 znaki, max. 60 znaków, nie liczba [`input`]
- nazwisko (`surname`) - Walidacja: min. 2 znaki, max. 60 znaków, nie liczba [`input`]
- wiek (`age`) - Walidacja: wartość min. 18, musi być liczbą [`input`]
- miasto (`city`) - Walidacja: musi być jakieś wybrane: Do wyboru 4 dowolne miasta [`select`]
- płeć (`gender`) - Walidacja: musi być coś zaznaczone: Male, Female, I don't wanna say [`input type="radio"`]

Po kliknięciu `Zapisz` ma nastąpić walidacja, zgodnie z zasadami wymienionymi wyżej. Jeżeli jakieś pole nie spełnia wymogów, należy taką informację wyświetlić użytkownikowi jako komunikat o błędzie.

Jeżeli wszystko jest ok, należy wysłać dane do `json-server` i sprawić, żeby ten element pokazał się na liście użytkowników (`Users`). Oczywiście **bez odświeżania strony**! 
