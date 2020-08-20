# Metody cyklu życia komponentu

## Przygotowanie
> Zmodyfikuj plik `webpack.config.js` tak aby:
> - zmienna `entryPath` wskazywała na `1_Zadania/Dzien_1/3_Metody_cyklu_zycia`
> - zmienna `entryFile` wskazywała na plik, nad którym aktualnie pracujesz, np. `task01/App.js`
>
> **Pamiętaj aby po każdej zmianie w pliku `webpack.config.js` przerwać działanie Webpacka (`CTRL+C`) a następnie włączyć go z powrotem (`npm start`).**


## Zadanie rozwiązywane z wykładowcą

### Zadanie 0a

> Pliki do pracy  
> `js/task0a/App.js`  
> `js/task0a/LifeCyclesTester.js`

Stwórz komponent `LifeCyclesTester`.

Komponent ma wypisywać w konsoli : "constructor", "komponent zaktualizowany", "komponent został zamontowany", "komponent odmontowywany", "renderowanie", itp., dla odpowiednich typów metod cyklu życia.

Spójrz do konsoli. Jakie metody cyklu życia zostały uruchomione, a jakie nie? Dlaczego?

---

### Zadanie 0b

> Pliki do pracy  
> `js/task0b/App.js`  
> `js/task0b/HelloWorld.js`

Stwórz komponent `HelloWorld`, który przechowuje tekst do wyświetlenia jako stan lokalny. Niech napis będzie domyślnie nastawiony na "Hello, World!".

Komponent ma wyrenderować ten napis w elemencie `h1`.

Dodaj do swojego komponentu timer, który po **5 sekundach** zmieni ten tekst na "Hi, Everyone!". Pamiętaj aby zrobić to w odpowiedniej metodzie cyklu życia, a także aby zwolnić zasoby.

Dodaj `console.log` do każdej metody cyklu życia.

Zajrzyj do konsoli. Które metody cyklu życia zostały wywołane, dlaczego?

Pamiętaj aby zbudować także główny komponent `App`, a w nim wykorzystywać komponenty budowane w ćwiczeniach. Renderuj na stronie główny komponent `App`.


## Zadania do samodzielnego wykonania

### Zadanie 1 

> Pliki do pracy  
> `js/task01/App.js`  
> `js/task01/Box.js`

Stwórz komponent `Box` i wyrenderuj element ```div``` z tłem ustawionym na zielone.

Uruchom interwał w odpowiedniej metodzie cyklu życia która co 5 sekund będzie zmieniała ten kolor na czerwony i później znów na zielony.

---

### Zadanie 2

> Pliki do pracy  
> `js/task02/App.js`  
> `js/task02/Modal.js`

Stwórz komponent `Modal`. Przyjmuje on przez `props` wartość `heading`, np. "Zapisz się do newslettera". Wyświetla on tego propsa w elemencie `h2`.

Komponent ten ma wyrenderować tekst, który znajduje się w props `heading` dopiero po 10 sekundach. W tym celu w odpowiedniej metodzie cyklu życia stwórz `timer`, który wyczeka 10 sekund, a po tym czasie zaktualizuje **stan wewnętrzny komponentu** (np. wartość `this.state.modalOpen`) z `false` na `true`, a tym samym uruchomi ponownie render i wyświetli informację z propsa.

Ma on być wyrenderowany w komponencie `App`:

```js
const App = () => {
  return (
    <div>
      <h1>Test okna modalnego</h1>
      <Modal heading="Zapisz się do newslettera"/>
    </div>
  );
};
```

Jeżeli stan wewnętrzny komponentu `Modal` nastawiony jest na `false`, komponent ten powinien renderować `null`.

---

### Zadanie 3

> Pliki do pracy  
> `js/task03/App.js`  
> `js/task03/StrobeLight.js`

Stwórz komponent `StrobeLight`. Przyjmuje on przez props dwie wartości: kolor światła (`color`) oraz częstotliwość mrugania w ms (`frequency`).

Komponent ma wyrenderować pusty element `div` z następującymi stylami:

- Szerokość: `500px`,
- Wysokość: `50px`,
- Kolor tła: `white`.

Dodaj do komponentu `interval`, który sprawi, że co określoną ilość ms (`frequency`) będzie się zmieniać kolor tła naprzemiennie:

Jeżeli wcześniej był kolor biały - na kolor z props,
W przeciwnym wypadku na kolor biały.

Wyrenderuj komponent kilka razy z przykładowymi danymi.

Zajrzyj do narzędzi deweloperskich React. Kliknij na swoje komponenty - zobaczysz ich props, aktualne state oraz podświetlenia aktualizacji.

Pamiętaj aby zbudować jeszcze główny komponent `App`, a w nim wykorzystywać komponenty budowane w ćwiczeniach. Renderuj na stronie główny komponent `App`.

---

### Zadanie 4

> Pliki do pracy  
> `js/task04/App.js`  
> `js/task04/Clock.js`  
> `js/task04/ClockTime.js`  
> `js/task04/ClockDate.js`

Stwórz komponent `Clock`, który przechowuje w `state` aktualną datę.

Dodaj do swojego komponentu `interval`, który co 1 sekundę aktualizuje datę w state na aktualną. Pamiętaj aby zrobić to w odpowiedniej metodzie cyklu życia oraz aby zwolnić zasoby.

Stwórz dwa sub komponenty:

1. `ClockTime` - przyjmuje przez props datę (`date`) i wyświetla samą godzinę w elemencie h1 za pomocą `Date.toLocaleTimeString()`.

2. `ClockDate` - przyjmuje przez props datę (`date`) i wyświetla samą datę w elemencie h1 za pomocą `Date.toLocaleDateString()`.

Główny komponent - `Clock` renderuje odpowiednio dwa sub komponenty przekazując im aktualną datę ze swojego state.

Pamiętaj aby zbudować także główny komponent `App`, a w nim wykorzystywać komponenty budowane w ćwiczeniach. Renderuj na stronie główny komponent `App`.
