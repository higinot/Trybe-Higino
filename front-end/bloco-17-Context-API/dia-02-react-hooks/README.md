### React Hooks

#### Reack Hooks useState

O useState é o hook mais comum e ele permite que você utilize o state e outros recursos do React sem escrever uma classe. Para entender melhor do que estamos falando, veja este componente com Estado feito com uma classe e em seguida o mesmo componente feito com hooks:

```
import React, { useState } from "react";

const [counter, setCounter] = useState(0);

```

Neste caso o *counter* é o getter da função useState, ele é a chave no contexto de this.state;

`this.state = { counter: 0, }`

O *setCounter* é o método setter da função useState, ele se asemelha ao metodo this.setState.

`this.setState({ setCounter: 1, })`

O valor de 0 no *useState(0)* é o valor inicial no state.

`this.state = { counter: useState(0) }`

#### Reack Hooks useContext