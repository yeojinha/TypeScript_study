1. TypeScript Types vs JavaScript Types

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

------------------------------------------------------

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

------------------------------------------------------

2. Primitive Types

  * 오브젝트와 레퍼런스 형태가 아닌 실제 값을 저장하는 자료형
  * 프리미티브 형의 내장 함수를 사용 가능한 것은 자바스크립트 처리 방식 덕분
  *(ES2015 기준) 6가지
    * boolean
    * number
    * string
    * symbol(ES2015)
    * null
    * undefined

```javascript
let nmae = 'mark';

name.toString();
```

  * literal 값으로 Primitive 타입의 서브 타입을 나타낼 수 있다.

```
true;
'hello';
3.14;
null;
undefined;
```

  * 또는 래퍼 객체로 만들 수 있다.

```
new Boolean (false); // typeof new Boolean(false) : 'object'
new String ('world'); // typeof new String('world') : 'object'
new Number(42); // typeof new Number(42): 'object'
```
  Type Casing
    * TypeScript의 핵심 primitive types은 모두 소문자다.
    * Number, String, Boolean, Symbol 또는 Object 유형이 위에서 권장한 소문자 버전과 동일하다고 생각할 수 있지만, 이러한 유형은 언어 primitives를 나타내지 않으며, 타입으로는 사용해선 안된다.

    ``` javascript
    function reverse(s: String): String{
      return s.split("").reverse().join("");
    }

    reverse("hello world");
    ```
    * 대신 number, string, boolean, object, symbol 타입을 사용해야한다.

    ``` javascript
    function reverse(s: string): string{
      return s.split("").reverse().join("");
    }

    revser("hello world");
    ```