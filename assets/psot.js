new Vue({
    el: '#container',

    data() {
        return {
            shiaki: '/img/pngeggcutie.png',
            edad: 17,
            song: '/assets/dokidoki.mp3',
            actividades: ['1. Deportes', '2. *.*', '3. Programar', '4. Retos', '5. Videojuegos', '6. Deberes', '7. Cuentas', '8.Leer',
                '9. Música', '10. Trato Especial ^.^', '11. Salir'
            ],

            showActividades: false

        }
    },
    methods: {
        toggleShowActividades() {
            this.showActividades = !this.showActividades
        }
    }
})