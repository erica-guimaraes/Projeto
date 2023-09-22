// abstração: é a capacidade de representar algo do mundo real 
//  como uma entidade (classe)

// encapçulamento: Pode ser pública, privado e protected

export default abstract class Race {
  // atributos
  private _name: string;
  private _dexterity: number;

  // construtor
  constructor(name: string, dexterity: number) {
    this._name = name;
    this._dexterity = dexterity;
  }

  // métodos
  get name(): string { return this._name; }

  get dexterity(): number { return this._dexterity; }

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints(): number;
}