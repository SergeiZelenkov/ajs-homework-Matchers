export default function healthLevel() {
   let array = [
     { name: 'мечник', health: 10 },
     { name: 'маг', health: 100 },
     { name: 'лучник', health: 80 }
   ];
 
   return array.sort((a, b) => b.health - a.health);
 }
 