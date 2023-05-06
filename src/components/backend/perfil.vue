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
        <div class="main" @mouseenter="añadir=true">
            <Dialog v-model:visible="añadir" modal>
                <h1>Añadir Imagen</h1>
                <img :src="proveedor">
                <div class="">
                    <div class="card" style="margin:none; padding: none; display: flex; flex-direction: row;">
                        <Button icon="pi pi-times" class="boton" style="margin-top:10%" label="Cancelar" @click="cancelar()"/>
                        <Button icon="pi pi-check" class="boton" style="margin-top:10%" label="Confirmar" @click="cancelar()"/>
                    </div>
                </div> 
            </Dialog>
        </div>
        <div class="main" @mouseenter="editar=true">
            <Dialog v-model:visible="editar" modal>
                <h1>Editar Perfil</h1>
                <label>Nombre de Negocio</label><br>
                <div class="box2">MediProvider</div><br>
                <label>Número de Contacto</label><br>
                <div class="box2">954632586</div><br>
                <label>Correo de Contacto</label><br>
                <div class="box2">MediProviderneg@gmail.com</div><br>
                <label>Fecha de Inscripción</label><br>
                <div class="box2">12/12/12</div><br>
                <label>Ubicación</label><br>
                <div class="box2">Lambayeque</div><br>
                <label>Número de Contacto Secundario</label><br>
                <div class="box2">955869586</div><br>
                <label>Tipo de Cuenta</label><br>
                <div class="box2">Proveedor</div><br>
                <label>RUC</label><br>
                <div class="box2">21954632586</div><br>
                <label>Dirección</label><br>
                <div class="box2">Los magdalenas 123</div><br>
                <div class="card" style="margin:none; padding: none; display: flex; flex-direction: row;">
                    <Button icon="pi pi-times" class="boton" style="margin:10% 1% 0 1%" label="Cancelar" @click="cancelar()"/>
                    <Button icon="pi pi-check" class="boton" style="margin:10% 1% 0 1%" label="Confirmar" @click="cancelar()"/>
                </div>
            </Dialog>
        </div>
        <div class="card flex flex-wrap gap-2 justify-content-center">
            
            <button @click="editar=true"  class="button" style="cursor: pointer;">Editar Perfil</button>
            <button @click="añadir=true"  class="button" style="cursor: pointer;">Subir Foto de Perfil</button>
        </div>
        <div>
            <h1>Mi Perfil</h1>
            <div class="card1 flex flex-wrap gap-2 justify-content-center">
                <div>
                    <label>Nombre de Negocio</label><br>
                    <div class="standard-box">MediProvider</div><br>
                    <label>Número de Contacto</label><br>
                    <div class="standard-box">954632586</div><br>
                    <label>Correo de Contacto</label><br>
                    <div class="standard-box">MediProviderneg@gmail.com</div><br>
                    <label>Fecha de Inscripción</label><br>
                    <div class="standard-box">12/12/12</div><br>
                    <label>Ubicación</label><br>
                    <div class="standard-box">Lambayeque</div><br>
                    <label>Número de Contacto Secundario</label><br>
                    <div class="standard-box">955869586</div><br>
                    <label>Tipo de Cuenta</label><br>
                    <div class="standard-box">Proveedor</div><br>
                    <label>RUC</label><br>
                    <div class="standard-box">21954632586</div><br>
                    <label>Dirección</label><br>
                    <div class="standard-box">Los magdalenas 123</div><br>
                </div>
                <img :src="proveedor" style="width: 50%; margin: 0 0 0 25%">
            </div>
        </div>
    </div> 
    </div>
</template>

<script>
import { ref } from "vue";
import Sidebar from 'primevue/sidebar';
import Button from "primevue/components/button/Button";
import Dialog from "primevue/components/dialog/Dialog";
import soporte from '@/assets/soporte.png';
import proveedor from '@/assets/pproveedor.png';


export default {
    name: 'perfilForm',
    components: {
        Sidebar,
        Button,
        Dialog,
    },
    setup(){
        const visible = ref(false);
        const añadir = ref(false);
        const editar = ref(false);

        return { visible, añadir, editar };
    },
    methods: {
        cancelar() {
            this.añadir= false;
            this.editar = false;
        }
    },
    data() {
        return {
            soporte: soporte,
            proveedor: proveedor,
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
    margin: 1% 2% 0 2%;
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
    margin: 0 3% 3% 0;
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

.card1
{
    display: flex;
    align-items: center;
    margin: 0 10% 0 10%;
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
.container {
  justify-content: left;
  margin: 2%;
  font-size: 50%;
}

label {
  margin: 0 2% 0 2%;
  text-align: left;
  align-items: left;
  font-size: 130%;
}
.standard-box {
  background-color: white;
  border-radius: 10px;
  text-align: center;
  align-items:self-end;
  width: 120%;
  margin: 2%;
  padding: 1% 0 0 0;
  font-size: 150%;
}

p{
    text-align: left;
    margin: 2% 0 5% 0;
    font-size: 50%;
}

.main{
    background-color: #DADADA;
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