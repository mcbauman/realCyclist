import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUSerStore = defineStore('user', () => {
  const defaultUser =localStorage.getItem("user")||null
  const user = ref(defaultUser)

  function login(name, password){
    fetch(`http://localhost:9002/user/login`,{
      method: "POST",
      headers:{"content-Type": "application/json"},
      body: JSON.stringify({name, password})
    })
    .then((response)=>response.json())
    .then((data)=>{
        console.log("UserData",data);
        user.value=data
        localStorage.setItem("user",JSON.stringify(data))
    })
  }

  function logout(){
    localStorage.removeItem("user")
    user.value=null
  }

  return { user, login, logout }
})
