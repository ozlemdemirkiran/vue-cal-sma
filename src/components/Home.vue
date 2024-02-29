<script>
import DataServices from "../services/DataServices";

export default {
    name : "home-page",
    data(){
        return {
            datas : []
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
    },
    mounted(){
        this.datalar();
    }
};
</script>