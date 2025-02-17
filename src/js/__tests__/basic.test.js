import healthLevel from '../level';

test('healthLevel should sort characters by health in descending order', () => {
  const result = healthLevel();
  expect(result).toEqual([
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ]);
});