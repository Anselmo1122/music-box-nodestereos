import { questions1, questions2, questions3 } from "../../data/questions";

import { useState, useEffect } from "react";

function Quiz({ state }) {
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [tiempoRestante, setTiempoRestante] = useState(15);
  const [areDisabled, setAreDisabled] = useState(false);

  const isQuestions = (level) => {
    switch (level) {
      case 1:
        return questions1;
      case 2:
        return questions2;
      case 3:
        return questions3;
    }
  }

  const questions = isQuestions(state.isLevel);

  function handleAnswerSubmit(isCorrect, e) {

    if (isCorrect) {
      state.setLevelPoints(state.levelPoints + 1)
    };
    e.target.classList.add(isCorrect ? "correct" : "incorrect");

    setTimeout(() => {
      if (preguntaActual === questions.length - 1) {
        setIsFinished(true);
      } else {
        setPreguntaActual(preguntaActual + 1);
        setTiempoRestante(15);
      }
    }, 1500);
  }

  useEffect(() => {
    const intervalo = setInterval(() => {
      if (tiempoRestante > 0) setTiempoRestante((prev) => prev - 1);
      if (tiempoRestante === 0) setAreDisabled(true);
    }, 1000);

    return () => clearInterval(intervalo);
  }, [tiempoRestante]);

  if (isFinished)
    return (
      <main className="quiz">
        <div className="juego-terminado">
          <span>
            {" "}
            Obtuviste {state.levelPoints} de {questions.length}{" "}
          </span>
          <button onClick={() => {
            setIsFinished(false)
            setPreguntaActual(0)
            state.setLevelPoints(0)
          }}>
            {" "}
            Volver a jugar
          </button>
          <button onClick={() => {
            state.setEnterLevel(false);
            state.exitLevel(false);
          }}>
            Salir de la caja
          </button>
        </div>
      </main>
    );

  return (
    <main className="quiz">
      <div className="lado-izquierdo">
        <div className="numero-pregunta">
          <span> Pregunta {preguntaActual + 1} de</span> {questions.length}
        </div>
        <div className="titulo-pregunta">
          {questions[preguntaActual].titulo}
        </div>
        <div>
          {!areDisabled ? (
            <span className="tiempo-restante">
              Tiempo restante: {tiempoRestante}{" "}
            </span>
          ) : (
            <div className="tiempo-botones">
              <button
                onClick={() => {
                  setTiempoRestante(10);
                  setAreDisabled(false);
                  if (preguntaActual === questions.length - 1) {
                    setIsFinished(true);
                  } else {
                    setPreguntaActual(preguntaActual + 1);
                  }
                }}
              >
                Continuar
              </button>
              <button onClick={() => {
                state.setEnterLevel(false);
                state.exitLevel(false)
              }}>
                Salir de la caja
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="lado-derecho">
        {questions[preguntaActual].opciones.map((respuesta) => (
          <button
            disabled={areDisabled}
            key={respuesta.textoRespuesta}
            onClick={(e) => handleAnswerSubmit(respuesta.isCorrect, e)}
          >
            {respuesta.textoRespuesta}
          </button>
        ))}
      </div>
    </main>
  );
}

export default Quiz;