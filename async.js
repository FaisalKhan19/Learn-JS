function getData(callback) {
    setTimeout(() => {
      const data = { name: 'John', age: 30 };
      callback(data);
    }, 2000);
  }
  
  console.log('Fetching data...');
  
  getData((data) => {
    console.log('Data received:', data);
  });
  