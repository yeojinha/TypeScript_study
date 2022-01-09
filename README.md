* TypeScript에서 프로그램 작성을 위해 기본 제공하는 데이터타입
* 사용자가 만든 타입은 결국 이 기본 자료형으로 나뉘어진다.
* JavaScript 기본 자료형을 포함(superset)
  * ECMAScript 표준에 따른 기본 자료형은 6가지
    * Boolean
    * Number
    * String
    * Null
    * Undefined
    * Symbol(ECMAScript6에 추가)
    * Array : obeject형
* 프로그래밍을 도울 몇가지 타입이 더 제공된다.
  * Any, Void, Never, Unknown
  * Enum
  * Tuple: object형

### JavaScript의 타입 체크
```javascript
fucntion add(n1, n2){
  if( typeof n1 !== 'number' || typeof n2 !== 'number'){//타입을 if문으로 체크 해야함
    throw new Error('Incorret input!');
  }
  return (n1+n2)
}

const result = add(10,15)

```

### TypeScript의 타입 체크
```typescript
function add(n1: number, n2: number)
{//type을 미리 설정하는 체크방식, 빠른 체크가능
  return n1+n2;
}
const result = add(10,15)
```