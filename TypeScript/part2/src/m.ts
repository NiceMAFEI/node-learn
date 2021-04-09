{
  let b: number = 20;
  console.log(b);
  function fn(a: number, b: number): number {
    return a + b
  };

  function fn2(this: unknown) {
      console.log(this);
      
  };

  let box1 = document.getElementById('box1');
  box1?.addEventListener('click', function() {
      console.log('hello');
      
  });
}

