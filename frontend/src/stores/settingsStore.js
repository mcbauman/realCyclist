import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSettingsStore = defineStore('settings', () => {
  const modalContent=ref(false)

  function setModalContent(content){
    
    modalContent.value=content
    console.log("setModatlContent Exec", modalContent.value);
  }

  return { modalContent, setModalContent}
})
