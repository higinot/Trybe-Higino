const serviceAPI = require("./serviceAPI");

describe("Exercicio testando uma API", () => {
  //Após realizar os testes, as funções são limpadas
  serviceAPI.fetchDog = jest.fn();
  afterEach(() => jest.clearAllMocks());

  it("Testando a função newRandomNumber", async () => {
    //moka o resultado a aplicação fetchDog para "request sucess"
    serviceAPI.fetchDog.mockResolvedValue("request sucess");
    
    serviceAPI.fetchDog();
    expect(serviceAPI.fetchDog).toHaveBeenCalled();
    expect(serviceAPI.fetchDog).toHaveBeenCalledTimes(1);
    

    await expect(serviceAPI.fetchDog()).resolves.toBe("request sucess");
    expect(serviceAPI.fetchDog).toHaveBeenCalledTimes(2);

  });


  it("Testando a função newRandomNumber", async () => {
    //moka o resultado a aplicação fetchDog para "request sucess"
    serviceAPI.fetchDog.mockResolvedValue("request failed");
    
    expect(serviceAPI.fetchDog).toHaveBeenCalledTimes(0);
    await expect(serviceAPI.fetchDog()).resolves.toBe("request failed");
    expect(serviceAPI.fetchDog).toHaveBeenCalledTimes(1);

  });
});
