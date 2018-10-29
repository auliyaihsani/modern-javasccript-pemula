const color = 'yellow';

switch (color) {
    case 'red':
        console.log('color is red');
        break;
    case 'yellow':
        console.log('color is yellow');
        break;
    default:
        console.log('color is not red or yellow');
        break;
}

let day;

switch (new Date().getDay()) {
    case 0:
        day = 'sunday';
        break;
    case 1:
        day = 'monday';
        break;
    case 2:
        day = 'tuesday';
        break;
    case 3:
        day = 'wednesday';
        break;
    case 4:
        day = 'thursday';
        break;
    case 5:
        day = 'friday';
        break;
    case 6:
        day = 'saturday';
        break;
}

console.log(day);
