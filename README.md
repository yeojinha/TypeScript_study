### JavaScript의 타입 체크
```javascript
fucntion add(n1, n2){
  if( typeof n1 !== 'number' || typeof n2 !== 'number'){
    throw new Error('Incorret input!');
  }
  return (n1+n2)
}

const result = add(10,15)
```

### TypeScript의 타입 체크
```typescript
function add(n1: number, n2: number){
  return n1+n2;
}
const result = add(10,15)
```