function inicio() {


    let nombre = prompt('Hola! BIENVENIDO!! me llamo Chiaki, soy una IA algo humilde xD tengo 17, ¿Cómo te llamas?');
    let edad = Number(prompt(`Hola! así que te llamas ${nombre}, bienvenido! dime mas de ti ^^ ¿que edad tienes?`));
    if (edad < 13) {
        alert(`Wow ${nombre}! eres un niño!! ^^ encantada de conocerte! `)
    } else if (edad >= 13 && edad < 18) {
        alert(`Wow!! ${nombre}! somos adolecentes los dos jejej. ^.^`)
    } else {
        alert(`Increible ${nombre}! Eres un adulto ya!! estaré enantada de ayudarte +.+`)
    }

    alert(`Hay varias actividades desde el 1 al 10 para divertirnos :3 Elige`)


    function Doit() {
        let toDo = Number(prompt(`¿que hacemos? ^.^`));
        return toDo;
    }

    function whattoDo() {

        switch (Doit()) {
            case 1:
                alert(`Elegiste 1!, =.= significa que vamos a ir a Ejercitarnos ${nombre}, lests GO!`);
                let ejercicioToDo = prompt(`¿Que ejercicio quieres hacer? elige entre: brazos, piernas y abdomen ^^`)
                if (ejercicioToDo === "piernas") {
                    alert(`Entiendo!! vamos a mover esas piernas ${nombre}!! te espero en la cancha`);
                    setTimeout(function() { window.location.href = '/option1/cancha.html'; }, 2000);
                } else if (ejercicioToDo === "brazos") {
                    alert(`Ok! es hora de tomar esas pesas que acumulan polvo! ¬¬ vamos a trabajar esos brazos!! GAMBARU`)
                    setTimeout(function() { window.location.href = '/option1/pesas.html'; }, 2000);
                } else if (ejercicioToDo === "abdomen") {
                    alert(`Ok! estás muy AGUADO! XD vamos a marcar esos abdominales *.*`)
                    setTimeout(function() { window.location.href = '/option1/abdomen.html'; }, 2000);
                } else {
                    alert('Oh... u.U parece que no quieres hacer ejercicio... bueno.. que hacemos entonces?')
                    whattoDo();
                }

                break;

            case 2:
                alert("Elegiste 2!, ¬¬ Ba-Baka! no quiero hacer cosas desvergonzadas >.<");
                let ero = prompt(`Emmm ¬¬, puedes ir a ese tipo de paginas si quieres... aunque debo decir... eres asqueroso >-<`)
                if (ero == 'ok' || ero == "si") {
                    edad < 18 ? (alert(`¿A dónde crees que vas? xD lo siento pero eres menor de edad ^.^ veamos que mas hacer ¬¬`),
                        whattoDo()) : (alert(`Lo sabia ${nombre}, eres igual a todos ¬¬ ...`),
                        setTimeout(function() { window.location.href = 'https://nhentai.net/search/?q=chiaki+nanami'; }, 2000))


                } else {
                    alert(`me alegra saber que on eres asi ${nombre} ^.^,  ok entoces hagamos otra cosa o.o`)
                    whattoDo();
                }
                break;

            case 3:
                alert("Elegiste 3!, *_* es hora de ir a Programar! ultimamente no practicas mucho *.*")
                let whatToDo3 = prompt(`Muy bien ${nombre}, por ahora no se muchas cosas, solo se: (HTML, CSS y JS y algo de VUE.js) ¿que quieres saber?`)
                switch (whatToDo3) {
                    case 'html':
                        alert(`Ok ${nombre.toUpperCase()}!! vamos a ver lo básico de HTML, abriremos otra pagina ^.^`)
                        window.open('/option3/chiakihtml.html', 'html chiaki');
                        alert(`Ok, por mientras podemos hacer otra cosa`);
                        whattoDo();
                        break;

                    case 'css':
                        alert(`Ok ${nombre.toUpperCase()}!! vamos a ver lo básico de CSS ^.^`)
                        setTimeout(function() { window.location.href = '/option3/chiakicss.html'; }, 2000);
                        break;

                    case 'js':
                        alert(`Ok ${nombre.toUpperCase()}!! vamos a ver lo básico de JavaScript ^.^`)
                        setTimeout(function() { window.location.href = '/option3/variables.html'; }, 2000);
                        break;

                    case 'vuejs':
                        alert(`Ok ${nombre.toUpperCase()}!! vamos a ver lo básico de vue.js ^.^`);
                        alert(`${nombre}, veamos lo básico ^.^`)
                        let vueIntroduccion = Number(prompt('Elige entre el 1 al 2 *.*'))
                        switch (vueIntroduccion) {
                            case 1:
                                alert('Elegiste 1 vamos a hablar sobre Rendering declarativo');
                                alert('En una app con Vue tenemos el ESTADO y la VISTA');
                                alert('El estado es donde se encuentra nuestro codigo javascript, y se encarga de decirle a la vista como y cuando compilar');
                                alert('esto lo hace por medio del RENDER');
                                alert('a la vez que el usuario introduce datos en la vista, esta le avisa al estado que cambios hay que hacer');
                                let finCaso1 = prompt(`${nombre} te resulto util esta info?`)
                                finCaso1 === "si" ? (alert(`excelente!! me encanta haber podido ayudarte ${nombre}`), whattoDo()) :
                                    (alert(`Oh... lo siento ${nombre}, intentaré mejorar para la proxima vez ^.^`), whattoDo())
                                break;

                            case 2:
                                alert(`Elegiste 2 ${nombre}, veamos algo sobre expresiones! ^.^`);
                                alert(`Las expresiones van entre llaves : {{''expresion}}`);
                                alert(`la vinculas a un elemento de la vista y puedes escribir casi cualquier codigo JS`)
                                alert(`un ejemplo: <h1> {{ 1 + 1 + 1 }}</h1>`);
                                alert(`al utilizar vue el resultado en pantalla seria 3 ^.^`);
                                alert(`pero OJO ${nombre} O.O las declaraciones no pueden utilizar algunos ciclos de control`);
                                alert(`If, For, While, Do While, Switch. No puedes poner esto en declaraciones u.u`)
                                let finCaso2 = prompt(`${nombre} te resulto util esta info?`)
                                finCaso2 === "si" ? (alert(`excelente!! me encanta haber podido ayudarte ${nombre}`), whattoDo()) :
                                    (alert(`Oh... lo siento ${nombre}, intentaré mejorar para la proxima vez ^.^`), whattoDo())
                                break;

                        }

                        break;


                    default:
                        alert(`Deberias practica!!! >.< ok, entonces hagamos otra cosa`)
                        whattoDo();
                }
                break;

            case 4:
                alert("Elegiste 4... Estás seguro? recuerda que tienes un reto de 30 dias!! >_<")


                whattoDo();


                break;

            case 5:
                alert("Elegiste 5!, siiiii!!!! me encantas  los video juegos, quiero jugar contigo PS4 :3 ")
                break;

            case 6:
                alert("Elegiste 6..., es hora de ir a ver a tu abuelo, cumple tu deber!! te esperare o.O")
                let resp = Number(prompt(`${nombre}, ¿cuanto te demoraras?, mas o menos en horas ;.;`))
                if (resp <= 3) {
                    alert(`Entiendo ${nombre} No te preocupes ^.^ por mientras dormire xD`);
                } else if (resp > 3 && resp <= 5) {
                    alert(`Oh.. entiendo... u.u es mucho tiempo pero no te preocupes ^.^ estaré esperando para que juguemos video juegos `)
                } else if (resp === null || resp === "" || resp > 5) {
                    alert(`¿No irás? bueno entonces hagamos otra cosa ^.^`)
                    whattoDo();
                }
                break;

            case 7:
                alert("Elegiste 7! ¿Necesitas Hacer algún calculo? yo te ayudo!! ^^")
                let calculoToDo = Number(prompt(`¿Qué necesitas hacer? tengo dos opciones, 1.sacar el Iva y 2. Calcular suma y resta`));
                switch (calculoToDo) {
                    case 1:
                        alert(`Ok ${nombre}, saquemos el IVA`);
                        const presupuesto = Number(prompt(`Muy bien ${nombre} ¿Cual es tu presupuesto?`))
                        const valorInsumo = Number(prompt(`Ahora, cunato vale lo que quieres comprar? O.O`))
                        const iva = 0.19;
                        let montoIva = valorInsumo * iva
                        let preciofinal = valorInsumo + montoIva
                        if (preciofinal >= presupuesto) {
                            alert(`Veo que es muy caro este producto ${nombre} u.u, cuesta $${preciofinal}. El valor del iva es de $${montoIva}. Deberías esperar a tener mas dinero. veamos que mas hacer ^.^`)
                            whattoDo();
                        } else {
                            alert(`Veo que te alcanza! este producto cuesta $${preciofinal}. El valor del iva es de $${montoIva}. Aún asi deberias tener tus cuentas claras >-< y tener prioridades )>.<(`)
                            whattoDo();
                        }
                        break;

                    case 2:
                        alert(`Ok ${nombre} te redirigiré a una pagina para esto ^-^`);
                        window.location.href = './option7/calculos.html';
                        whattoDo();
                        break;
                }





                break;

            case 8:
                alert("Elegiste 8!, Es hora de leer ¿Qe te gusta? prefiero el terror o.0*")
                let queLeer = Number(prompt(`${nombre}!, tengo solo dos libros >.< ¿cual quieres leer?`))
                queLeer != null ? alert('ok') : alert('¿no quieres leer? hagamos otra cosa')
                whattoDo()
                break;

            case 9:
                alert("Elegiste 9!, es hora de escuchar musica Me encanta los soundtrack de viejuegos, pon Spotify ^.^")
                break;

            case 10:
                alert("Elegiste 10!, $.$ cielos...  No estoy segura de esto, estas seguro?")
                let confirm = prompt("estas seguro???")
                if (confirm === "si") {
                    alert("entonces... Hagamoslo!! será dificil pero estaré contigo")
                } else {
                    alert("Ok, no hay prisa, estaré esperandoté ^*^")
                }

                break;

            case 11:
                function irADormir() {
                    var irADormir = prompt(`Entiendo ${nombre.toUpperCase()} es muy tarde u.u ¿Quieres ir a dormir?`)
                    if (irADormir === 'si') {
                        var horaActual = new Date()
                        alert(`Ok ${nombre.toUpperCase()}! que descanses! son las ${horaActual.getHours()}, es tarde! Estaré esperandote ^.^`);
                        window.close();
                    } else {
                        alert('Que bueno!! te extrañaría si te vas jajaja dime en que puedo ayudarte')
                        whattoDo();
                    }
                }
                irADormir();
                break;

            case 12:
                alert(`Elegiste 12!, entiendo, te sientes un poco solo verdad u.u pues mira! te dire lo siguiente!`);
                alert(`De acuerdo a los registros de www.quora.com Debes evitar tres cosas O.O: La mastrubación el cafe y el comportamiento evasivo Jum!`);
                whattoDo();

            default:

                alert("lo siento, no está esa opción... ¬¬ dije del 1 al 10, ¿No eres muy listo verdad? LoL ...")
                whattoDo();


        }
    }

    whattoDo();

}