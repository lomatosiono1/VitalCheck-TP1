<template>
    <div class="card flex flex-wrap gap-2 justify-content-center">
       <div class="box1">
        <div class="card flex1">
            <div @mouseenter="visible = true">
                <Sidebar v-model:visible="visible" style="background-color: #D7D7D7; justify-content: left;" >
                    <div class="icon1">
                        <Button @click="$router.push('/inventory'), visible=false" icon="pi pi-box" label="Inventory" style="background-color: #E5E5E5; color: black; margin:5%;" />
                        <Button icon="pi pi-users" label="Providers" @click="visible = true" style="background-color: #E5E5E5;color: black;margin:5%;"/>
                        <Button icon="pi pi-book" label="Catering" @click="visible = true" style="background-color: #E5E5E5;color: black;margin:5%;"/>
                        <Button icon="pi pi-chart-bar" label="Reports" @click="visible = true" style="background-color: #E5E5E5;color: black;margin:5%;"/>
                        <Button icon="pi pi-shopping-cart" label="Sales" @click="visible = true" style="background-color: #E5E5E5;color: black;margin:5%;"/>
                        <Button @click="$router.push('/notification'), visible=false" icon="pi pi-bell" label="Notifications" style="background-color: #E5E5E5;color: black;margin:5%;"/>
                        <Button @click="$router.push('/settings'), visible=false" icon="pi pi-cog" label="Setting" style="background-color: #E5E5E5;color: black; margin:5%;"/>
                    </div>
                    <div class="icon1-1" style="align-items: flex-end;">
                        <Button @click="$router.push('/'), visible=false" icon="pi pi-sign-out" label="Sign off" style="color: white; " />
                    </div>
                </Sidebar>
            </div>
            <div class="icon1">
                <i class="pi pi-box" @click="visible = true" style="background-color: #E5E5E5;"/>
                <i class="pi pi-users" @click="visible = true" style="background-color: #E5E5E5;"/>
                <i class="pi pi-book" @click="visible = true" style="background-color: #E5E5E5;"/>
                <i class="pi pi-chart-bar" @click="visible = true" style="background-color: #E5E5E5;"/>
                <i class="pi pi-shopping-cart" @click="visible = true" style="background-color: #E5E5E5;"/>
                <i class="pi pi-bell" @click="visible = true" style="background-color: #E5E5E5;"/>
                <i class="pi pi-cog" @click="visible = true" style="background-color: #E5E5E5;"/>
            </div>
            <div class="icon1-1">
                <i class="pi pi-sign-out" @click="visible = true"/>
            </div>
        </div>
    </div>
    <div class="box2">
        <h1>Servicio de Soporte</h1>
        <img :src="soporte">
        <button class="button" style="cursor: pointer;">Solicitar Llamada</button>
    </div> 
    </div>
</template>

<script>
import { ref } from "vue";
import Sidebar from 'primevue/sidebar';
import Button from "primevue/components/button/Button";
import soporte from '@/assets/soporte.png';

export default {
    name: 'soporteForm',
    components: {
        Sidebar,
        Button,
    },
    setup(){
        const visible = ref(false);
        const admin = ref(false);
        const inicio = ref(false);

        return { visible, admin, inicio };
    },
    methods: {
        cancelar() {
            this.admin= false;
            this.inicio = false;
        }
    },
    data() {
        return {
            soporte: soporte,
        }
    }  
}

</script>

<style scoped>
body {
  width: 100%;
}
.flex{
  color: black;
  display: flex;
}

.flex1{
  height: 100vh;
  flex-direction: column;
  
}
.box-container{
  display: flex;
}
.box1{
    background-color: #DADADA;
    flex: 0 0 5%;
    margin: 0 2% 0 0;
}

.box2{
    width: 100%;
    display:inline-table;
    background-color: #DADADA;
    margin: 0 2% 0 2%;
    text-align: center;    
}
.box2-2
{
    display: flex;
    align-items: center;
}

.box{
    background-color: #B7334D;    
    box-sizing: border-box;
    color: white;
    font-size: 200%;
    margin: 0 2% 0 2%;
    width: 410px;
    border-radius: 10%;
    text-align: center;
}

img{
    width: 70%;
}
.icon1
{
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 10%;

}
.icon1-1{
    display: flex;
    justify-content: end;
    align-items: flex-end;
    background-color: #B7334D;
    color: white;
}

i{
    cursor: pointer;
    margin: 10% 0 10%;
    font-size: 400%;
    text-align: center;
    width: 95%;
    border-radius: 10%;
}

Button{
    background:#B7334D;
    border: none;
    cursor: pointer;
    font-size: 100%;
    margin: 3% 3% 3% 0;
    font-size: 200%;
    border-radius: 10px;
    color: white;
    width: 100%;
}

.button
{
    width: 80%;;
    background: #B7334D;
    border: none;
    cursor: pointer;
    font-size: 160%;
    border-radius: 10px;
    text-align: center;
    margin: 1%;
}
.iboton
{
    background: none;
    border: none;
    cursor: pointer;
    margin: 5%;
    font-size: 250%;
    border-radius: 10%;
    text-align: center;
}
.boton{
    background-color: #B7334D;
    color: white;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    font-size: 100%;
    font-size: 120%;
    text-align: center;
}

.card1{
    display: flex;
    align-items: center;

}
.table
{
    background-color: #DADADA;
}

.admin
{
    font-size: 200%;
    text-align: center;
    color:#B7334D;
}

.dates
{
    width: 100%;
}

h1
{
    font-size: 200%;
    text-align: center;
    color:#B7334D;
}

@media screen and (max-width: 768px) {
  .box-container {
    flex-direction: column;
  }
  .box1 {
    flex: 1;
  }
  .box2 {
    flex: 2;
  }
  .icon1 {
    padding: 5%;
  }
  i {
    font-size: 200%;
  }
  .icon1-1 {
    margin: 5% 0;
    font-size: 150%;
  }
  Button {
    font-size: 150%;
  }
}
</style>