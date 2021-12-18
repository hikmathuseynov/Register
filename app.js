let btn = document.querySelector('.btn');
let input = document.querySelectorAll('input');
let data;
let input1 = document.querySelector('input-1')
let input2 = document.querySelector('input-2')
btn.addEventListener('click', () => {
    [...input].map(e => {
        data = {
            ...data,
            [e.name]: e.value
        }
    })
    
    
    var url = 'https://sheet2api.com/v1/JDgMkk5EQtaC/instahack/Sayfa1';
    
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });

    
    
})