Jug1_puntos = 121 #creamos la variable de los puntos de el jugador1
Jug2_puntos = 121 #creamos la variable de los puntos de el jugador2

while Jug1_puntos > 0 and Jug2_puntos > 0: #creamos el while para hacer el bucle hasta que cualquiera de los dos jugadores llegue a 0 o menos puntos
    print("LAS PUNTUACIONES NO PUEDEN SUPERAR LOS 30 PUNTOS")#print aclarando en todas las rondas que ninguno de los puntos puede superar los 30
    Jug1_PResta = int(input("Cuantos puntos ha hecho el Jugador1?"))#primer input donde el jugador psara por terminal cuantos puntos ha hecho

    while Jug1_PResta > 30: #bucle para comprobar si el numero anterior són mas de 30, si no, seguigra para delante
        print("INCORRECTO") #mensaje de error
        Jug1_PResta = int(input("Cuantos puntos ha hecho el Jugador1?")) #le vuelves a preguntar al jugador por su puntuación

    Jug1_puntos -= Jug1_PResta #resta la puntuación que tenga actualmente el jugador y la resta a los puntos de esa tirada
    print("Puntos actuales del Jugador 1:", Jug1_puntos) #muestra los puntos del jugador una vez restados

    if Jug1_puntos <= 0: #if que se ejecutara una vez llegado a 0 o menos donde saldra que jugador1 ha ganado
        print("\n¡Jugador 1 ha ganado!") #mensaje de victoria
        break #break que hace salir del while, por lo tanto la partida se acaba

    Jug2_PResta= int(input("Cuantos puntos ha hecho el Jugador2?")) #esta parte es exactamente igual a la anterior solo que con el segundo jugador, esto es el input donde el jugador psara por terminal cuantos puntos ha hecho

    while Jug2_PResta > 30: #bucle para comprobar si el numero anterior són mas de 30, si no, seguigra para delante
        print("INCORRECTO") #mensaje de error
        Jug2_PResta = int(input("Cuantos puntos ha hecho el Jugador2?"))#le vuelves a preguntar al jugador por su puntuación

    Jug2_puntos -= Jug2_PResta #resta la puntuación que tenga actualmente el jugador y la resta a los puntos de esa tirada
    print("Puntos actuales del Jugador 2:", Jug2_puntos) #muestra los puntos del jugador una vez restados

    if Jug2_puntos <= 0: #if que se ejecutara una vez llegado a 0 o menos donde saldra que jugador2 ha ganado
        print("\n¡Jugador 2 ha ganado!") #mensaje de victoria
        break #break que hace salir del while, por lo tanto la partida se acaba
    
