<template>
    <div class="list row">
        <div class="col-md-6">
            <h4>Tutorial Listesi </h4>
            <ul>
            <li class="list-group-item" 
            v-for="(tutorial,index) in datas" :key="index"
            :class="{ active: index == guncelIndex }"
            @click="aktifTutorial(tutorial,index)"
            >
            {{tutorial.title}}
            </li>
            </ul>
        </div>
        <div class="col-md-6">
            <div v-if="guncelTutorial">
                <h4>Tutorial</h4>
                <div>
                    <label><strong>Title:</strong></label> {{ guncelTutorial.title }}
                </div>
                <div>
                    <label><strong>id:</strong></label> {{ guncelTutorial.id }}
                </div>
                <div>
                    <label><strong>Completed:</strong></label> {{ guncelTutorial.completed }}
                </div>

                <router-link :to="'/page-2/' + guncelTutorial.id" class="badge badge-warning">Düzenle</router-link>
            </div>
            <div v-else>
                <br />
                <p></p>
            </div>
        </div>
    </div>
</template>

<script>
import DataServices from "../services/DataServices";

export default {
    name : "home-page",
    data(){
        return {
            datas : [],
            guncelTutorial : null,
            guncelIndex : -1
        };
    },
    methods: {
        datalar() {
            DataServices.getAllData().then(response => {
                this.datas = response.data
                console.log(response.data)
            })
            .catch(hata => {
                console.log(hata)
            })
        },
        aktifTutorial(tutorial,index)
        {
        this.guncelTutorial = tutorial;
        this.guncelIndex = index;
        }
    },
    mounted(){
        this.datalar();
    }
};
</script>