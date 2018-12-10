const time = (fnc, fncName) => {
  console.time(fncName);
  fnc();
  console.timeEnd(fncName);
}
const iterations = 100000000;

function initBlock() {
  let ageSum = 0;
  for(let i=0;i<iterations;i++) {
      ageSum += 1;
  }
}

function block1() {
  const actionHero1 = { name: 'The Terminator', weapon: 'Guns and fists', age: 40 }
  const actionHero2 = { name: 'James Bond', weapon: 'Guns and being sexy', age: 42 }
  const actionHero3 = { name: 'Sara Conner', weapon: 'Guns and explosives', age: 30 }
  const actionHero4 = { name: 'Ripley', weapon: 'Guns, robot suit', age: 32 }
  
  const arr = [actionHero1, actionHero2, actionHero3, actionHero4];
  
  let ageSum = 0;
  for(let i=0;i<iterations;i++) {
      ageSum += arr[i % 4].age
  }
}

function block2() {
  const actionHero1 = { name: 'The Terminator', weapon: 'Guns and fists', age: 40 }
  const actionHero2 = { weapon: 'Guns and being sexy', name: 'James Bond', age: 42 }
  const actionHero3 = { age: 30, name: 'Sara Conner', weapon: 'Guns and explosives', }
  const actionHero4 = { name: 'Ripley', weapon: 'Guns, robot suit', age: 32 }
  
  const arr = [actionHero1, actionHero2, actionHero3, actionHero4];
  
  let ageSum = 0;
  for(let i=0;i<iterations;i++) {
      ageSum += arr[i % 4].age
  }
}

function block3() {
  const actionHero1 = { name: 'The Terminator', weapon: 'Guns and fists', age: 40, material: 'Metal' }
  const actionHero2 = { name: 'James Bond', weapon: 'Guns and being sexy', age: 42, favouriteDrink: 'Martini' }
  const actionHero3 = { name: 'Sara Conner', weapon: 'Guns and explosives', age: 30, son: 'John Conner;' }
  const actionHero4 = { name: 'Ripley', weapon: 'Guns, robot suit', age: 32, job: 'technician' }
  
  const arr = [actionHero1, actionHero2, actionHero3, actionHero4];
  
  let ageSum = 0;
  for(let i=0;i<iterations;i++) {
      ageSum += arr[i % 4].age
  }
}

function block4() {
  const actionHero1 = { name: 'The Terminator', weapon: 'Guns and fists', age: 40, material: 'Metal' }
  const actionHero2 = { name: 'James Bond', weapon: 'Guns and being sexy', age: 42, favouriteDrink: 'Martini' }
  const actionHero3 = { name: 'Sara Conner', weapon: 'Guns and explosives', age: 30, son: 'John Conner;' }
  const actionHero4 = { name: 'Ripley', weapon: 'Guns, robot suit', age: 32, job: 'technician' }
  
  const arr = [actionHero1, actionHero2, actionHero3, actionHero4];
  
  let ageSum = 0;
  for(let i=0;i<iterations;i++) {
      if(i === iterations/2) {
        actionHero1['special'] = 'timetravel';
      }
      ageSum += arr[i % 4].age
  }
}
block1();
block2();
block3();
block4();

time(block1, 'Static types');
time(block2, 'Re-ordered types');
time(block3, 'Different types');
time(block4, 'Dynamic types');