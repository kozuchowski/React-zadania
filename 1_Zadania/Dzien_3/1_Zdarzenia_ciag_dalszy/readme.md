# Zdarzenia - ciąg dalszy

## Przygotowanie
> Zmodyfikuj plik `webpack.config.js` tak aby:
> - zmienna `entryPath` wskazywała na `1_Zadania/Dzien_3/1_Zdarzenia_ciag_dalszy`
> - zmienna `entryFile` wskazywała na plik, nad którym aktualnie pracujesz, np. `task01/App.js`
>
> **Pamiętaj aby po każdej zmianie w pliku `webpack.config.js` przerwać działanie Webpacka (`CTRL+C`) a następnie włączyć go z powrotem (`npm start`).**


## Zadanie rozwiązywane z wykładowcą

### Zadanie 0a - `js/task0a.js`

> Pliki do pracy  
> `js/task0a/App.js`  
> `js/task0a/Bulb.js`

Stwórz komponent `Bulb` z elementem `div` z kolorem tła ustawionym na biały, szerokością i wysokością 100px. W elemencie `div` umieść przycisk `button` z napisem "On".

Kliknięcie na przycisk zmienia stan żarówki: jeżeli tło `div` było białe, to zmienia je na żółte, a napis na przycisku na "Off". W przeciwnym wypadku zmienia tło na białe, a napis na "On".

---

### Zadanie 0b - `js/task0b.js`

> Pliki do pracy  
> `js/task0b/App.js`  
> `js/task0b/MobileMenu.js`

Stwórz komponent `MobileMenu`.

Komponent ma mieć następującą strukturę (stwórz dokładnie taką strukturę w React pamiętając o klasach CSS):

```html
<section class="mobile">
  <header class="mobile-menu">
    <a href="#" class="open-menu"></a>
    <nav>
      <ul>
        <li><a href="#">O nas</a></li>
        <li><a href="#">Zespół</a></li>
        <li><a href="#">Produkty</a></li>
        <li><a href="#">Kontakt</a></li>
      </ul>
      <a href="#" class="close-menu">Zamknij menu</a>
    </nav>
  </header>
</section>
```

Na początku powinna być widoczna tylko klasa `.open-menu`. Po kliknięciu na ikonę menu (`.open-menu`), powinien się pojawić element `nav`.

Po kliknięciu na "Schowaj menu" (`.close-menu`) wracamy do stanu początkowego - `nav` znika.

Możesz skorzystać z klasy `.hide`, która jest przygotowana w pliku `CSS`.


## Zadania do samodzielnego wykonania

### Zadanie 1

> Pliki do pracy  
> `js/task01/App.js`  
> `js/task01/PassParameter.js`

Stwórz komponent `PassParameter` z elementem `a`. Po kliknięciu na przycisk wywołaj metodę `handleClickButton()`, do której jako parametr przekaż dowolny string. Zadaniem metody `handleClickButton()` ma być wypisanie przekazanego tekstu w konsoli.

Dodatkowo zatrzymaj domyślną akcję przycisku. Musisz do metody `handleClickButton()` przekazać dwa parametry:

- dowolny string
- event

Zatrzymanie domyślnej akcji to `event.preventDefault()`.

---

### Zadanie 2

> Pliki do pracy  
> `js/task02/App.js`  
> `js/task02/Box.js`

Stwórz komponent `Box` z elementem `div` z kolorem tła ustawionym na zielony, szerokością `500px` i wysokością `200px`.

Dodatkowo stwórz 3 przyciski które będą zmieniać wymiary i kolor `diva`:

1. `200x300px`, kolor pomarańczowy
2. `100x700px`, kolor niebieski
3. `500x200px`, kolor zielony

Do wszystkich przycisków ma być użyta **ta sama metoda**. Należy przesłać do niej odpowiednie parametry tak by zostały zapisane w stanie komponentu.

---

### Zadanie 3

> Pliki do pracy  
> `js/task03/App.js`  
> `js/task03/CrazyDiv.js`

Stwórz komponent `CrazyDiv`. Ma on mieć czerwone tło, wysokość i szerokość `100px` oraz `position` ustawione na `absolute`.

Po każdym najechaniu na `div` ma się zmieniać jego styl `left` i `top` na dwie losowe wartości z przedziału który został zdeklarowany jako parametry funkcji. Np.:

```js
() => handleHover(0, 1000); // przedział 0 - 1000
() => handleHover(300, 600) // przedział 300 - 600
```