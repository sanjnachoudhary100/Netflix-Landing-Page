const users=['sanjna','yuvraj','gyughiu'];

const memberdiv=document.querySelector('.member-div');
const addIcon=document.querySelector('.addIcon');

const userIcons = () => {
    users.map((curElem)=>{
    memberdiv.insertAdjacentHTML('afterbegin',
    `<button class="btn"><span>${curElem}</span>
    </button>`
    );
    }) 
}

userIcons();
addIcon.addEventListener('click',() =>
{
    let userName=prompt('Enter your name here: ');
    if(userName!==null && !users.includes(userName))
    {
       users.push(userName);
       console.log(users);
       memberdiv.insertAdjacentHTML('afterbegin',
    `<button class="btn"><span>${userName}</span>
    </button>`
    );
    }
    else{
        alert('User already exists !!');
    }
}
)