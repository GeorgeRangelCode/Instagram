const getData = () => {
  console.log('funciona')
}


let app = new Vue({
el: "#app",
data: {
cursos: [
{
  nombre: "Curso de Vue.js",
  value: "vue"
},
{
  nombre: "Curso de SEO",
  value: "seo"
},
{
  nombre: "Curso de React.js",
  value: "react"
},
{
  nombre: "Curso de Growth Marketing",
  value: "growth"
}
],
cursosSeleccionados: []
},
methods: {
enviar: function() {
console.log("Se ejecuta el metodo enviar");
console.log(this.cursosSeleccionados);
}
}
});
