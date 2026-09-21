// Spanish story text, indexed by the stable node order in each story.
// Each choice contains its prompt, three answers and a learning note.
export const spanishStoryLocales = {
  'return-hoodie': {
    story: {
      title: 'Cierra la cremallera',
      subtitle: 'Él quiere recuperarlo todo. Ella solo quiere recuperar una cosa.',
      place: 'Mensajes, 01:48',
      topic: 'Exparejas y límites: volver, venir a casa, cerrar una etapa, pasar página',
      ending: 'La sudadera volvió. La relación, no. Por fin las dos mangas estaban en la persona adecuada.'
    },
    nodes: [
      'Krinzhina, 26, recibe de madrugada un mensaje de su ex, 30. Zoya, 31, la ayuda a centrarse en recuperar una sudadera cara.',
      'Dice: «Echo de menos lo nuestro».',
      '¿Y tú qué echas de menos?',
      'Mi sudadera. Tenía bolsillos y estabilidad emocional.',
      {prompt:'Deja claro que quieres recuperar la sudadera, no la relación.', options:['Yo también quiero que volvamos.','Quiero que me devuelvas la sudadera. No quiero volver contigo.','Vuelve conmigo llevando mi sudadera.'], note:'Recuperar algo es volver a tenerlo. Volver con alguien significa retomar la relación.'},
      'Ahora dice: «¿Puedo pasar por tu casa?».',
      'A las dos de la mañana. Qué servicio de entrega tan eficiente.',
      {prompt:'Explica la invitación sin dar por hecho lo que insinúa.', options:['Está claro que ya ha pasado página.','Promete mandar un mensajero.','Quiere venir a verte. A estas horas, puede que haya una insinuación.'], note:'Pasar por tu casa significa visitarte. La hora puede sugerir otras intenciones, pero no las demuestra.'},
      'Le diré: «Déjasela mañana al conserje».',
      'Bien. Un lugar, un día y ningún sofá.',
      'Dice que necesita cerrar esta etapa.',
      '¿Se cree que tu sudadera es una consulta de terapia?',
      {prompt:'Reconoce lo que siente sin ceder en tu límite.', options:['Lo entiendo, pero esta noche no voy a quedar contigo. Devuélveme la sudadera mañana, por favor.','Vale, ven. Pero no traigas sentimientos.','Cerrar una etapa significa que tienes que cerrar la puerta de mi casa.'], note:'Reconocer sus sentimientos no obliga a aceptar una visita. La primera respuesta mantiene un límite claro.'},
      'También quiero escribirle: «Mi sudadera tiene cremallera. Empieza por cerrarla».',
      'Buenísimo el chiste. Pésima la logística. Mándale la dirección.',
      'A la tarde siguiente, el conserje le entrega una bolsa. Hay una nota: «Quizá podamos empezar de nuevo».',
      'Está pidiendo otra temporada.',
      {prompt:'Rechaza volver a intentarlo y di que estás lista para pasar página.', options:['Mañana me voy a vivir contigo.','Gracias por devolverla. Estoy lista para pasar página.','Empecemos de nuevo esta noche en mi casa.'], note:'Pasar página es dejar atrás una relación o una situación y seguir adelante.'},
      '¿Qué se siente?',
      'Calentita. Huele un poco a gilipolleces.',
      'Eso se quita con un lavado.',
      'Por fin. Un problema con instrucciones claras en la etiqueta.'
    ]
  },
  dad: {
    story: {
      title: 'El diccionario familiar', subtitle: 'Un hijo. Un padre. Demasiados sinónimos.',
      place: 'Cocina, 11:43', topic: 'Anatomía, jerga y sentido literal',
      ending: 'Papá quería detalles. Recibió un análisis lingüístico.'
    },
    nodes: [
      'Sábado por la mañana. Lyosha, 23, acaba de volver de casa de su novia Anna, 24. Papá, 52, ya ha puesto la tetera y preparado una pregunta indiscreta.',
      'A ver. ¿Te acostaste con Anna?',
      'Sí. Ocho horas. Tiene un colchón fantástico.',
      'No te hagas el listo. ¿Follasteis?',
      {prompt:'Lyosha sigue fingiendo que hablan de dormir. Elige su respuesta.',options:['Sí, papá. En horizontal. Sobre el colchón.','Sí, papá. Coloqué las baldosas de la cocina.','No, papá. Preparó un té buenísimo.'],note:'Acostarse con alguien puede referirse a dormir juntos o a tener relaciones sexuales; Lyosha se aferra al sentido literal.'},
      'Tu polla. Su coño. ¿Así queda suficientemente claro?',
      'Anna no tiene gato.',
      '¡No hablo de un gato! Coño. Chocho. Chirri. ¡Los bajos, joder!',
      {prompt:'El hijo toma la última metáfora como si hablaran de un edificio.',options:['Voy a comprar comida para gatos.','Papá, vive en la planta baja.','Gracias por la clase de anatomía.'],note:'«Los bajos» alude coloquialmente a los genitales, pero Lyosha finge entender «planta baja».'},
      'Vale. Su vagina. Ya está. Una palabra correcta.',
      'Si te refieres a la parte externa, es la vulva.',
      'Intento tener una charla de padre a hijo, no aprobar un puto examen de medicina.',
      {prompt:'Lyosha termina su explicación. ¿Qué frase es anatómicamente correcta?',options:['La vulva está fuera; la vagina, dentro. Te toca, profesor.','La vagina está fuera; la vulva, dentro. Te toca, profesor.','Vulva y vagina significan exactamente lo mismo.'],note:'La vulva designa los genitales externos; la vagina es el conducto interno.'},
      'A tu edad lo llamábamos «fanny».',
      'En Gran Bretaña, quizá. En Estados Unidos significa culo.',
      '¿La misma palabra cambia de parte del cuerpo al pasar el control de pasaportes?',
      {prompt:'Lyosha deja claro que esto es una clase de idiomas, no un informe sobre su cita.',options:['En fin, aquí tienes el teléfono de Anna.','En fin, mi vida sexual no es asunto tuyo.','En fin, deberías llamar a su madre.'],note:'«No es asunto tuyo» establece un límite. El chiste de «fanny» depende de la diferencia entre el inglés británico y el estadounidense.'},
      'Vale. ¿Qué tal el té?',
      'Caliente. Pero no te emociones.',
      'La tetera silba. Por primera vez en toda la mañana, alguien tiene algo útil que decir.'
    ]
  },
  'change-mind': {
    story: {
      title: 'La cláusula de salida', subtitle: 'Una cita no es un contrato hipotecario.',
      place: 'Bar, 22:16', topic: 'Rechazo, intenciones y derecho a cambiar de opinión',
      ending: 'Roxy no se quedó por compromiso. Zoya sí se quedó por las patatas fritas.'
    },
    nodes: [
      'Roxy, 29, llega a un bar después de una cita con Max, 28. Zoya, 31, ya ha pedido patatas fritas y está lista para escucharla.',
      'Fue amable. Fui a su casa. Después cambié de opinión.',
      '¿Y?',
      '¿Puedo irme sin más? ¿Incluso entonces?',
      {prompt:'Zoya responde sin rodeos. Completa su idea.',options:['No. Una cita es un contrato vinculante.','Sí. Puedes cambiar de opinión en cualquier momento.','Solo si él acepta tus razones.'],note:'El consentimiento puede retirarse en cualquier momento, también después de llegar a casa de alguien.'},
      'Si tiene la polla torcida y no te apetece follar con él, no lo hagas.',
      '¿Y si la tiene perfectamente recta?',
      'Tampoco es una puta obligación. No eres inspectora de edificios.',
      {prompt:'Roxy comprueba si lo ha entendido: ¿necesita siquiera un motivo?',options:['¿Entonces necesito un justificante médico?','¿Entonces no necesito ninguna excusa?','¿Entonces tengo que inspeccionarlo primero?'],note:'No necesitar una excusa significa que no tienes que justificar tu decisión.'},
      'Exacto. Quizá estás cansada. Quizá se te han quitado las ganas. Quizá su almohada pone «ALFA».',
      '¡Su almohada PONÍA ALFA!',
      'Joder. Hasta la ropa de cama es una señal de alarma.',
      {prompt:'Elige una frase breve con la que Roxy pueda terminar la cita.',options:['Ya no me apetece. Me voy a casa.','Supongo que ahora te debo algo.','Tú pagaste, así que decides tú.'],note:'«Ya no me apetece» expresa la decisión con claridad. Pagar la cena no da derecho a sexo.'},
      'Me dijo: «Pero yo pagué la cena».',
      'Enhorabuena. Sabe cómo funcionan los restaurantes.',
      {prompt:'Zoya desmonta el argumento de la cena. ¿Qué frase encaja?',options:['La cena es una señal.','Le debes otra oportunidad.','Pagar la cena no es dar una entrada para el sexo.'],note:'Invitar a cenar no crea ninguna deuda sexual.'},
      'Me fui. Me llamó zorra.',
      'Y tú llamaste a un taxi. Excelente reparto de tareas.',
      'Zoya le acerca las patatas fritas. Vienen sin letra pequeña.'
    ]
  },
  compliment: {
    story: {
      title: 'Una palabrita', subtitle: 'Chad se ahorra los artículos. Mala idea.',
      place: 'Piso de Roxy, 19:05', topic: '«Shit» y «the shit»: insulto o halago',
      ending: 'Chad por fin acertó con el artículo. Roxy conservó la dignidad y la contraseña del wifi.'
    },
    nodes: [
      'Chad, 27, visita a Roxy, 29. Ella pone su nueva sesión de DJ. Él ha decidido hablar como un nativo.',
      'Tu lista de canciones es una mierda.',
      'Perdona. ¿Mi lista es QUÉ?',
      '¡Una mierda! O sea, ¡una mierda buenísima!',
      {prompt:'Chad quería decir que era cojonuda. Salva el halago con un solo artículo.',options:['¡Tu lista es la hostia!','¡Tu lista es una mierda!','¡Tu lista es más mierda!'],note:'En inglés, «the shit» puede ser un elogio; «shit» sin artículo es un insulto. En español, «la hostia» puede ser un elogio coloquial.'},
      'Una palabrita. Una diferencia de la hostia.',
      'Vale. Eres una zorra.',
      '¿Quieres morir o tienes el diccionario roto?',
      {prompt:'Él intenta disculparse, no decirle a Roxy que se equivocó al ofenderse.',options:['Eres demasiado sensible.','Quería halagarte. Me ha salido fatal. Perdona.','Es culpa tuya por escucharme.'],note:'Una disculpa reconoce el error sin culpar a quien recibió el insulto.'},
      'Una rapera se llamó a sí misma «bad bitch». Parecía contenta.',
      'Se llamó así A SÍ MISMA. Tú has llamado zorra a tu anfitriona.',
      'El contexto. Mi enemigo natural.',
      {prompt:'Roxy propone un halago sin autodestrucción lingüística.',options:['Prueba con: «Eres una imbécil».','Prueba con: «Tienes un gusto horrible».','Prueba con: «Tienes un gusto musical increíble».'],note:'Un halago directo evita la ambigüedad y respeta a la persona a la que va dirigido.'},
      'Tienes un gusto musical increíble.',
      'Gracias. ¿Ves? Ninguna víctima.',
      {prompt:'Chad pregunta por otro halago en jerga.',options:['Entonces, ¿«you killed it» puede significar «lo hiciste genial»?','Entonces, ¿«you killed it» siempre significa asesinato?','Entonces, ¿«you killed it» significa «eres una zorra»?'],note:'«You killed it» puede significar que alguien hizo algo de forma brillante, según el contexto.'},
      'Sí. Y «por favor, vete» significa por favor, vete.',
      'Por fin. Una expresión que no puedo cagar.',
      'Empuja una puerta que pone «TIRAR».'
    ]
  },
  netflix: {
    story: {
      title: 'Cero relax', subtitle: 'Él trajo una indirecta. Ella trajo un cuaderno.',
      place: 'Sofá, 21:00', topic: 'Indirectas, sentido literal y aficiones',
      ending: 'El romance se fue por el desagüe. El documental resultó buenísimo.'
    },
    nodes: [
      'Max, 28, ha invitado a Krinzhina, 26, a casa para ver Netflix y relajarse. Ella trae un cuaderno que pone «INFRAESTRUCTURA URBANA».',
      'Entonces... ¿Netflix y relax?',
      'Por supuesto. He encontrado un documental sobre alcantarillas.',
      'No era exactamente lo que tenía en mente.',
      {prompt:'Krinzh todavía no ha captado la indirecta y pregunta qué película propone.',options:['¿Te refieres a... un documental sobre fosas sépticas?','Sí, olvidemos lo que yo quiero.','Ya sé perfectamente a qué te refieres.'],note:'«Netflix and chill» puede insinuar sexo, aunque literalmente parezca una invitación a ver algo y relajarse.'},
      'Intentaba ligar contigo.',
      'Hay sitio al otro lado del sofá.',
      'No hablaba de mover muebles. Era un acercamiento romántico.',
      {prompt:'Por fin capta la indirecta, pero dice lo que ella quiere.',options:['Ah. Entonces no tengo elección.','Ah. Yo solo he venido a ver la película.','Ah. Mi cuaderno significa que sí.'],note:'Entender una insinuación no implica aceptarla. Ella expresa su preferencia directamente.'},
      'Vale, lo entiendo. Sin presión.',
      'Bien. Las alcantarillas ya tienen bastante presión.',
      '¿En serio te interesa esta mierda?',
      {prompt:'El documental trata de aguas residuales. Sigue la broma literal.',options:['No, «mierda» siempre es un halago.','Sí. Literalmente. De eso trata la película.','No, «interesar» significa que vivo dentro de una alcantarilla.'],note:'Aquí «mierda» funciona a la vez como exclamación coloquial y como referencia literal al contenido del documental.'},
      'Hasta cambié las sábanas.',
      'Muy bien. La higiene no son preliminares.',
      {prompt:'Max acepta su respuesta y vuelve a la película.',options:['Vale. Pásame las palomitas. ¿Qué es un fatberg?','Las sábanas limpias significan que me debes algo.','Seguiré preguntando hasta que digas que sí.'],note:'Aceptar un no significa dejar de insistir. «Fatberg» es una masa de grasa y residuos en una alcantarilla.'},
      'Por fin, un hombre que hace las preguntas adecuadas.',
      'Esta cita se fue por el desagüe.',
      'Aparece una tubería en pantalla. Krinzhina pide volver a ver esa parte. Por primera vez en toda la noche, Max siente verdadera curiosidad.'
    ]
  },
  translator: {
    story: {
      title: 'Enviar todo', subtitle: 'Cinco borradores. Un botón. Un desastre total.',
      place: 'Mensajes, 00:14', topic: 'Borradores, mandar a paseo, enviar o borrar',
      ending: 'El mensaje quedó clarísimo. Sobre todo el último.'
    },
    nodes: [
      'Krinzhina, 26, quiere rechazar a un conocido insistente, 30. Zoya, 31, la ayuda a suavizar el mensaje en inglés.',
      'Primer borrador: «Vete a la mierda, capullo egocéntrico».',
      'Claro y conciso. Quizá no es el tono que buscabas.',
      'Le pedí al traductor que sonara más amable.',
      {prompt:'Zoya sospecha que el traductor solo añadió una capa de cortesía.',options:['¿Puso «vete a la mierda, por favor»?','¿Borró tu teléfono?','¿Pidió un radiador?'],note:'Añadir «por favor» no vuelve amable un insulto.'},
      '«Estimado capullo egocéntrico: tenga la bondad de irse a la mierda».',
      'Ah. Hostilidad corporativa.',
      {prompt:'Krinzh intenta poner un límite sin insultar.',options:['No me interesas. Por favor, deja de escribirme.','Por favor, sigue escribiéndome, capullo.','Es usted, con todos mis respetos, un puto idiota.'],note:'La primera opción expresa un límite claro sin ambigüedad ni insultos.'},
      'Esa. Envía esa. Borra las demás.',
      'Hay un botón que dice «Enviar todo».',
      {prompt:'Zoya intenta hablar antes de que Krinzh toque la pantalla.',options:['Sí. «Todo» significa solo el último.','¡No! ¡Envía solo el último borrador!','Genial. Necesita la colección completa.'],note:'«Enviar todo» incluye todos los borradores, no solo el último.'},
      'Krinzhina mira fijamente las cinco marcas azules de lectura.',
      'Demasiado tarde. Está leyendo toda la evolución de mi personaje.',
      'De «capullo» a «por favor». Un viaje conmovedor.',
      'Respondió: «Entonces... ¿eso es un quizá?».',
      {prompt:'Elimina la última ambigüedad. Elige la respuesta.',options:['Quizá deberías volver a adivinar.','Quizá significa que sí, por supuesto.','No. Es un no. No vuelvas a escribirme.'],note:'Una negativa directa elimina cualquier posible interpretación de «quizá».'},
      'No hace falta traducirlo.',
      'Por una vez, mi inglés no es el puto problema.',
      'Bloquea el contacto. El traductor sugiere: «¿Hacer el texto más amable?».'
    ]
  }
};
