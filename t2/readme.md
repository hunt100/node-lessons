## kazakhstan-random-street

Generate random street with house number, based on real Kazakhstan streets.

To install: 
```
npm install kz-random-street
```

To use:
```js
let random_kz_street = require('kz-random-street');
console.log(random_kz_street());                    //Маскеу ул. д. 97
console.log(random_kz_street({'city': 'Almaty'}));  //10 мкр. д. 3
```

Street names are taken from different websites with street lists.

### Limitation:
Now only supported two KZ cities: Almaty, Astana. Other inputs will return ***Empty String***.
The list of streets is not full, and will be expanded later.

This package built as a part of learning course from *Geek brains*.
