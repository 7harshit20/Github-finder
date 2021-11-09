class Github{
    constructor(){
        this.clientId='521e4fbade528ba2355d';
        this.clientSecret='dfd3ebb3466fe8f594e6772c9e02fd831ba5cbd8'
        this.repo_count=5;
        this.repo_sort='created: asc';
    }

    async fetchData(name){
        // return new Promise((resolve,reject)=>{
        //     fetch(`https://api.github.com/users/${name}?client_id=${this.clientId}&client_secret=${this.clientSecret}`)
        //     .then(res=> res.json())
        //     .then(data => resolve(data))
        //     .catch(err=> reject(err))  
        // });

        const res=await fetch(`https://api.github.com/users/${name}?client_id=${this.clientId}&client_secret=${this.clientSecret}`);

        const res2=await fetch(`https://api.github.com/users/${name}/repos?per_page=${this.repo_count}&sort=${this.repo_sort}&client_id=${this.clientId}&client_secret=${this.clientSecret}`);
        const resData=await res.json();
        const resData2=await res2.json();
        return {
            data: resData,
            repos: resData2
        };
    }        
}