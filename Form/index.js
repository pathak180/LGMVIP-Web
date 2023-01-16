let submit=document.querySelector(".submit");
submit.addEventListener('click',()=>{
    var output=document.querySelector(".output");
   //storing the data in objects getting from form
    const data={
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        web: document.getElementById("url").value,
        img: document.getElementById("image").value,
        gender: document.getElementById("gender").value,
        skill: document.getElementById("skills").value
    };
    //Card Template
    if(data.name=="" &&
        data.email=="" &&
        data.web=="" &&
        data.img=="" &&
        data.gender=="Select" &&
        data.skill==""   
        ){
        alert("all fields are required....");
    }
    else{
        let newlist=document.createElement('tr');
        newlist.innerHTML=`
        <td class="desc-area">
            <ul type="none">
                <li>${data.name}</li>
                <li>${data.gender}</li>
                <li>${data.email}</li>
                <li>${data.web}</li>
                <li>${data.skill}</li>
            </ul>
        </td>
        <td class="image-area">
            <img class="image-size" src="${data.img}" alt="Image not found.">
        </td>
        `
        output.appendChild(newlist);
    }
});


