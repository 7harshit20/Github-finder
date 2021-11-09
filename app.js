const input=document.querySelector('#searchUser');

const user=new Github();
const profile=new Profile();
loadEventListner();

function loadEventListner(){
    input.addEventListener('keyup',getUser);
}

function getUser(){

    if(input.value!==''){
        // fetchdata
        user.fetchData(input.value)
        .then(userProfile=>{
            if(userProfile.data.message==='Not Found'){
                profile.clear();
                profile.showAlert('User not found','alert alert-danger');

            }else{
                console.log(userProfile.data);
                console.log(userProfile.repos);
                profile.setProfile(userProfile.data);
                profile.setRepos(userProfile.repos);
            }
        });
    }else{
        profile.clear();
    }
}