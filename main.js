const form = document.querySelector(".form");
const email = document.querySelector(".username");
const password = document.querySelector(".password");
const btn = document.querySelector(".btn");

const login = (data) => {
    btn.addEventListener("click", (event) => {
        event.preventDefault();

        const arr = [];

        arr.push({...data});
        
        const newArr = {
            email: email.value,
            password: password.value
        }

        if(arr[0].email == newArr.email && arr[0].password == newArr.password) {
            window.location.assign('./home.html')
        }

        
    });
    
}
const getData = () => {

    fetch('https://api.escuelajs.co/api/v1/users/1')
        .then(res => res.json())
        .then(data => login(data)) 
}
getData();



