function userdata(){
    const userdata = document.querySelector('.table-title');

    userdata.addEventListener('click', () => {   
        userdata.classList.toggle("main-table")  
        });
}

export {userdata};