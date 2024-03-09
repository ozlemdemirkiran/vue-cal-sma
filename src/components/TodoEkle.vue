<!-- <template>
    <div>
      Burası todo ekle sayfasıdır...
      </div>
    </template>
    
    <script>
    export default {
      name: 'TodoEkle',
     
    }
    </script> -->

<template>
  <div class="submit-form">
      <div class="form-group">
          <label for="userId" >userId : </label>
          <input type="text" 
          class="form-control"
          id="userId" required 
          v-model="kaydedilecekTutorial.userId"
          name="userId" />
      </div>
      <div class="form-group">
          <label for="title" >Title : </label>
          <input type="text" 
          class="form-control"
          id="title" 
          v-model="kaydedilecekTutorial.title"
          required name="title" />
      </div>
      <br />
      <button class="btn btn-success" @click="tutorialKaydet">Kaydet </button>
      <button class="btn btn-info" @click="tutorialVazgeç">Vazgeç </button>
  </div>
</template>
<script>
import DataServices from '../services/DataServices';
export default {
  name : "add-tutorial",
  data() {
      return{
          kaydedilecekTutorial : {
              userId : "",
              title : ""
          }
      }
  },
  methods : {
      tutorialKaydet() {
      var yeniTutorial = {
          userId : this.kaydedilecekTutorial.userId,
          title : this.kaydedilecekTutorial.title
      }
      DataServices.createTutorial(yeniTutorial).then(kaydedilmisTutorial => {
          console.log(kaydedilmisTutorial.data);
          this.$router.push({ name: "home"});
      }).catch(hata => {
          console.log("oluşan hata : " +hata);
      })
      console.log("butona tıklandı");
      },
      tutorialVazgeç(){
          this.$router.push({ name: "home"});
      }
  }
}
</script>
    