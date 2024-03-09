<template>
    <div v-if="guncellencekTodo" class="submit-form">
        <div class="form-group">
            <label for="userId" >UserId : </label>
            <input type="text" 
            class="form-control"
            id="userId" required 
            v-model="guncellencekTodo.userId"
            name="userId" />
        </div>
        <div class="form-group">
            <label for="title" >Title : </label>
            <input type="text" 
            class="form-control"
            id="title" 
            v-model="guncellencekTodo.title"
            required name="title" />
        </div>
        <br />
        <button class="btn btn-success" @click="tutorialGuncelle">Güncelle </button>
        <button class="btn btn-danger" @click="tutorialSil" >Sil </button>
    </div>
</template>
<script>
import DataServices from '../services/DataServices';
export default {
    name : "todo-detail",
    data(){
        return{
            guncellencekTodo : null,
        }
    },
    methods: {
      todoDetayGetir(id){
        DataServices.getTodoDetail(id).then(gelenTodo => {
            this.guncellencekTodo = gelenTodo.data;
        })
      },
      tutorialGuncelle()
      {
        console.log("guncellenecek tutorial id: "+this.guncellencekTodo.id);
        console.log("guncellenecek tutorial data: "+this.guncellencekTodo);
        DataServices.updateTutorial(this.guncellencekTodo.id,this.guncellencekTodo)
        .then(guncellenmisTutorial => {
            console.log(guncellenmisTutorial.data);
              this.$router.push({ name: "home" });
        }).catch(hata => {
            console.log("hata oluştu : " +hata);
        });
      },

      tutorialSil()
      {
        {
        if(confirm("Silmek istediğinizden emin misiniz?") == true){
            DataServices.deleteTutorial(this.guncellencekTodo.id)
            .then(response => {
            console.log(response);
            this.$router.push({ name: "home" });
        });
        }else{
            console.log("Silme gerçekleşmedi")
        }

    }
      }

    },
    mounted() {
        this.todoDetayGetir(this.$route.params.id);
    }
    
}
</script>