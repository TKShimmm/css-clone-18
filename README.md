```
refer to https://www.youtube.com/watch?v=5LTD_480gNU&ab_channel=OnlineTutorials
```

### what I learn
---
`forEach` : `for`문과 같이 반복적인 기능을 수행할 때 사용한다. 
하지만 `for`문처럼 `index`와 `조건식`, `increase`를 정의하지 않아도 `callback` 함수를 통해 기능을 수행할 수 있음.

`ex)`
```javascript
const arr = [A, B, C, D];

arr.forEach(function(element){
  console.log(elemnt);
}); // A B C D
```
화살표 함수도 가능하다
```javascript
 arr.forEach(element => console.log(element));
```

`for`문에 비해 깔끔하고, 직관적이다.

___

### 홀수 배열 만들기
```javascript
const arr = [0,1,2,3,4,5,6,7,8,9,10];
const oddArray = [];

arr.forEach(function(element){
  if(element%2==1) {
    oddArray.push(element);
  }
});

console.log(oddArray); // [1, 3, 5, 7, 9]
```

---
### callback 함수인자
`forEach` 의 `callback` 함수에는 배열의 요소 뿐만 아니라 `index` 전체 배열을 인자로 사용할 수 있음
```javascript
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr.forEach(function(element, index, array){
  console.log(`${array}의 ${index}번째 요소 : ${element}`);
});

/*
0,1,2,3,4,5,6,7,8,9,10의 0번째 요소 : 0
0,1,2,3,4,5,6,7,8,9,10의 1번째 요소 : 1
0,1,2,3,4,5,6,7,8,9,10의 2번째 요소 : 2
0,1,2,3,4,5,6,7,8,9,10의 3번째 요소 : 3
0,1,2,3,4,5,6,7,8,9,10의 4번째 요소 : 4
0,1,2,3,4,5,6,7,8,9,10의 5번째 요소 : 5
0,1,2,3,4,5,6,7,8,9,10의 6번째 요소 : 6
0,1,2,3,4,5,6,7,8,9,10의 7번째 요소 : 7
0,1,2,3,4,5,6,7,8,9,10의 8번째 요소 : 8
0,1,2,3,4,5,6,7,8,9,10의 9번째 요소 : 9
0,1,2,3,4,5,6,7,8,9,10의 10번째 요소 : 10
*/
```
`DOM` 객체에 `onclick` 을 지정할 때 `index` 를 사용하여 `arr` 의 값을 참조하는 방식으로도 사용할 수 잇음. 
