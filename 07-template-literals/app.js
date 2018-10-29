const name = 'sani';
const age = '24';
const job = 'web developer';
const city = 'tegal';

let html;

// without template stirng (es5)
html = '<ul><li>Name : ' + name + ' </li> <li>Age: '+ age +
'</li><li>Job: '+ job + '</li><li>City : '+ city +
'</></ul>';

html = '<ul>' +
                '<li>Name : ' + name + '</li>' +
                '<li>Age : ' + age + '</li>' +
                '<li>Job : ' + job + '</li>' +
                '<li>Name : ' + city + '</li>' +
        '</ul>';
    function hello(){
        return 'hello';
    }


    // with template strings (es6)
    html = `
            <ul>
                <li>Name : ${name}</li>
                <li>Age : ${age}</li>
                <li>Job : ${job}</li>
                <li>City : ${city}</li>
                <li>${5+6}</li>
                <li>${hello()}</li>
                <li> ${age > 20 ? 'over 20': 'under 20'}</li>
            </ul>
    `;


document.body.innerHTML = html;