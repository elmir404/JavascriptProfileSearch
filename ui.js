class UI{
    constructor(){
        this.profileContainer=document.querySelector('#profileContainer');
        this.alert=document.querySelector('#alert');
        
    }
    ShowProfile(profile){
        this.profileContainer.innerHTML=` 
        <div class="card card=body">
        <div class="row">
        <div class="col-md-3">
           <a href="https://placeholder.com"><img src="https://via.placeholder.com/150" class="img-thumbnail"></a>
        </div>
        <div class="col-md-6">
        <h4>Contact</h4>
        <ul class="list-group">
        <li class="list-group-item">
         Name: ${profile.name}
        </li>
        <li class="list-group-item">
         Username: ${profile.username}
        </li>
        <li class="list-group-item">
         E-mail: ${profile.email}
        </li>
        <li class="list-group-item">
         Address: ${profile.address.street}
         ${profile.address.city}
         ${profile.address.zipcode}
         ${profile.address.suite}
        </li>
        <li class="list-group-item">
         Phone: ${profile.phone}
        </li>
        <li class="list-group-item">
         Website: ${profile.website}
        </li>
        <li class="list-group-item">
         Company: ${profile.company.name}
         ${profile.company.catchPhrase}
         ${profile.company.bs}
        </li>
        </ul>
        <h4>ToDo list</h4>
        <ul id="todo" class="list-group">
        </ul>
        </div>
        </div>
        
        </div>
             `;
    };
    Showalert(text){
        this.alert.innerHTML= `${text} is not found`;

    }
    ShowTodo(todo){
        let html="";
        todo.forEach(item => {
            if(item.completed){
                html+=`<li class="list-group-item bg-success">${item.title}</li>`;
            }
            else{
                html+=`<li class="list-group-item bg-secondary">${item.title}</li>`;
            }
        });


        this.profileContainer.querySelector('#todo').innerHTML=html;
    }
    clear(){
        this.profileContainer.innerHTML="";
        this.alert.innerHTML="";
    }
}