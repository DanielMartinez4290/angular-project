export class InMemoryDataService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Iron Man' },
      { id: 12, name: 'Hulk' },
      { id: 13, name: 'Thor' },
      { id: 14, name: 'Flash' },
      { id: 15, name: 'Batman' },
      { id: 16, name: 'Wonderwoman' },
      { id: 17, name: 'Dr Octopus' },
      { id: 18, name: 'Venom' },
      { id: 19, name: 'Spiderman' },
      { id: 20, name: 'Aquaman' }
    ];
    return { heroes };
  }
}
