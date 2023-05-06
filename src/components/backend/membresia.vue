<template>
    <div class="card flex flex-wrap gap-2 justify-content-center" style="display: flex;">
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
       <div class="card flex flex-wrap gap-2 justify-content-center">  
           <div @mouseenter="renovacion=true">
                <Dialog v-model:visible="renovacion" modal>
                    <h1>Renovación Membresía</h1>
                    <p>¿Estás seguro que deseas renovar tu membresía?</p>
                    <div class="card1 flex flex-wrap gap-2 justify-content-center">
                        <Button icon="pi pi-times" class="boton"  label="Cancelar" @click="cancelar()"/>
                        <Button icon="pi pi-check" class="boton"  label="Confirmar" @click="cancelar()"/>
                    </div>
                </Dialog>
            </div>
            
            <div @mouseenter="cancelacion=true">
                <Dialog v-model:visible="cancelacion" modal>
                    <h1>Cancelación Membresía</h1>
                    <p>¿Estás seguro que deseas cancelar tu membresía?</p>
                    <div class="card1 flex flex-wrap gap-2 justify-content-center">
                        <Button icon="pi pi-times" class="boton"  label="Cancelar" @click="cancelar()"/>
                        <Button icon="pi pi-check" class="boton"  label="Confirmar" @click="cancelar()"/>
                    </div>
                </Dialog>
            </div>

            <div class="box2-2">
                <h1>Membresía</h1>
                <div class="container">
                    <label>Plan</label><br>
                    <div class="standard-box">Estándar</div>
                </div>
                <div class="container">
                    <label>Estado</label><br>
                    <div class="standard-box">Activo</div>
                </div>
                <div class="container">
                    <label>Caducidad</label><br>
                    <div class="standard-box">11/04/2024</div>
                </div>
                <div class="container">
                    <label>Número de Tarjeta</label><br>
                    <div class="standard-box">4474 2326 2589 4587</div>
                </div>
                <div class="container">
                    <label>CSV</label><br>
                    <div class="standard-box">952</div>
                </div>
                <div class="container">
                    <label>Caducidad</label><br>
                    <div class="standard-box">09/32</div>
                </div>
                <div class="botones">
                    <button class="button" @click="cancelacion=true" style="cursor: pointer;">Cancelar Membresía</button>
                    <button class="button" @click="renovacion=true" style="cursor: pointer;">Adquirir o Renovar Membresía</button>
                </div>
            </div>
       </div>
  
    </div>

</template>

<script>
import { ref } from "vue";
import Sidebar from 'primevue/sidebar';
import button from "primevue/components/button/Button";
import Button from "primevue/components/button/Button";
import Dialog from 'primevue/dialog';



export default {
    name: 'membresiaForm',
    components: {
        Sidebar,
        Button,
        button,
        Dialog,

    },
    setup(){
        const visible = ref(false);
        const renovacion = ref(false);
        const cancelacion = ref(false);
        return { visible, renovacion, cancelacion}
    },
    methods: {
        cancelar() {
            this.renovacion = false;
            this.cancelacion = false;
        },
    }
};

</script>

<style scoped>
body {
  width: 100%;
}


.flex1{
  height: 100vh;
  flex-direction: column;
}


.box2{
    background-color: #DADADA;
}
.box1{
    background-color: #DADADA;
    flex: 0 0 5%;
    margin: 0 14% 0 0;
}

.box2-2
{
    background-color: #DADADA;
    width: 140%;
    font-size: 160%;
    text-align: justify;

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
    justify-content: center;
    align-items: flex-end;
    margin-top: auto;
    margin: 0 0 2% 0;
    background-color: #B7334D;
    padding: 2%;
    color: white;
}

i{
    cursor: pointer;
    margin: 10%;
    font-size: 400%;
    text-align: center;
    width: 95%;
    border-radius: 10%;
}

.botones
{
    align-items: center;
    display: flex;

}
Button{
    background:#B7334D;
    margin: 2%;
    border: none;
    cursor: pointer;
    border-radius: 10px;
    width: 80%;
    font-size: 150%;
    text-align: center;
    align-items: center;
    color: white;
}


img{
    width: 100%;
    height: 50%;
    text-align: right;
    background-color: #DADADA;
    display: block;
} 

h1
{
    font-size: 200%;
    text-align: center;
    color:#B7334D;
}
.card1
{
    display: flex;
    align-items: center;
}

.container {
  display: flex;
  align-items: center;
}

label {
  width: 60%;
  margin: 1%;
  text-align: center;
}

.standard-box {
  width: 100%; /* Ancho del div que contiene "estándar" */
  margin-left: 10%;
  background-color: white;
  border-radius: 10px;
  margin: 2%;
  text-align: center;
   /* Espacio entre el label y el div */
}

p{
    font-size: 200%;
}
</style>