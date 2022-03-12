const profile = new Profile();
const ui = new UI();
const searchProfile= document.querySelector('#searchProfile');
searchProfile.addEventListener('keyup',function(event){
    ui.clear();
 let text =event.target.value;
 if(text!==''){
    
    profile.getProfile(text).then(res=>{
        if(res.profile.length===0){
          ui.Showalert(text)
        }else{
            
           ui.ShowProfile(res.profile[0]);
           ui.ShowTodo(res.todo);

        }

        });
 }
})