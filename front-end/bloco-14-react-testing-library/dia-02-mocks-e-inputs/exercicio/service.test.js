const service = require("./service");

describe("Exercicio 1", () => {
  it("Testando a função newRandomNumber", () => {
    service.newRandomNumber = jest.fn().mockReturnValue(10);
    service.newRandomNumber();

    expect(service.newRandomNumber).toHaveBeenCalled();
    expect(service.newRandomNumber()).toBe(10);
  });
});

describe("Exercicio 2", () => {
  it("Utilizando a função newRandomNumber e mudando a aplicação", () => {
    //Utilizar a mesma função e mudar sua aplicação
    service.newRandonNumber = jest.fn().mockImplementation((a, b) => a / b);

    expect(service.newRandonNumber(4, 2)).toBe(2);
    expect(service.newRandonNumber).toHaveBeenCalled();
    expect(service.newRandonNumber).toHaveBeenCalledTimes(1);
  });
});

describe("Exercicio 3", () => {
  it("Mudando a implementação da aplicação e testando as funcionalidades", () => {
    //Utilizar a mesma função e mudar sua aplicação
    service.newRandonNumber = jest.fn().mockImplementation((a, b, c) => a * c * b);

    expect(service.newRandonNumber(2, 2, 2)).toBe(8);
    expect(service.newRandonNumber).toHaveBeenCalled();
    expect(service.newRandonNumber).toHaveBeenCalledTimes(1);
    expect(service.newRandonNumber).toHaveBeenCalledWith(2,2,2);
  });

  it("Resetando a aplicação, mudando sua implementação e testando as funcionalidades", () => {
    //Resetando a aplicação com a função mockReset()
    service.newRandonNumber.mockReset();

    service.newRandonNumber = jest.fn().mockImplementation((a) => a * 2);

    expect(service.newRandonNumber(2)).toBe(4);
    expect(service.newRandonNumber).toHaveBeenCalled();
    expect(service.newRandonNumber).toHaveBeenCalledTimes(1);
    expect(service.newRandonNumber).toHaveBeenCalledWith(2);
  });
});

describe("Exercicio 4", () => {
  it("Modifique a implementação para a primeira função: agora ela deve retornar a string em caixa baixa.", () => {
    //Utilizar a função spyOn que substitui a aplicação original
    //Para spyOn(Objeto, "nome do método")
    service.capsLockString = jest.spyOn(service, "capsLockString").mockImplementation((string) => string.toLowerCase());

    expect(service.capsLockString("JEAN")).toBe("jean");
    expect(service.capsLockString).toHaveBeenCalled();
    expect(service.capsLockString).toHaveBeenCalledTimes(1);
    expect(service.capsLockString).toHaveBeenCalledWith("JEAN");
  });

  it("Modifique a implementação para a segunda função: agora ela deve retornar a ultima letra.", () => {
    //Resetando a aplicação com a função mockReset()
    service.firstLetter = jest.spyOn(service, "firstLetter").mockImplementation((string) => string[string.length-1]);

    expect(service.firstLetter("jean")).toBe("n");
    expect(service.firstLetter).toHaveBeenCalled();
    expect(service.firstLetter).toHaveBeenCalledTimes(1);
    expect(service.firstLetter).toHaveBeenCalledWith("jean");
  });

  it("Modifique a implementação para a terceira função: agora ela deve concatenar tres strings.", () => {
    //Resetando a aplicação com a função mockReset()
    service.concatStrings = jest.spyOn(service, "concatStrings").mockImplementation((a,b,c) => a + b + c);

    expect(service.concatStrings("a","b","c")).toBe("abc");
    expect(service.concatStrings).toHaveBeenCalled();
    expect(service.concatStrings).toHaveBeenCalledTimes(1);
    expect(service.concatStrings).toHaveBeenCalledWith("a","b","c");
  });

  it("Restaure as funções e teste sua implementação.", () => {
    //Restaurando a aplicação com a função mockRestore(), para poder restaurante
    //Tem que utilizar  a função spyOn na aplicação
    service.capsLockString.mockRestore();
    service.firstLetter.mockRestore();
    service.concatStrings.mockRestore();
    
    expect(service.concatStrings("a","b")).toBe("ab")
    expect(service.firstLetter("higino")).toBe("h")
    expect(service.capsLockString("a")).toBe("A");
  });
});

