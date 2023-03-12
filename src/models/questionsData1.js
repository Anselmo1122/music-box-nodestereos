
import img1 from "../assets/question1.jpg";
import img2 from "../assets/question2.jpg";
import img3 from "../assets/question3.jpg";
import img4 from "../assets/question4.jpg";
import img5 from "../assets/question5.jpeg";
import img6 from "../assets/question6.jpeg";

export const questionsData1 = [
  {
    question: "¿Recuerdas quién interpreta la famosa canción 'Take on me'?",
    image: img1,
    options: [
      { res: "Baltimora", val: false },
      { res: "La Policía", val: false },
      { res: "A-ha", val: true },
    ],
    completed: false,
  },
  {
    question: "¿Cuál de estas no es una canción de Madonna?",
    image: img2,
    options: [
      { res: "Lo siento", val: false },
      { res: "Dulces sueños", val: true },
      { res: "Secreto", val: false },
    ],
    completed: false,
  },
  {
    question: "La canción que marcó la historia de Bonnie Tyler se llama...",
    image:  img3,
    options: [
      { res: "Eclipse total del mundo", val: false },
      { res: "Eclipse total del alma", val: false },
      { res: "Eclips total del corazón", val: true },
    ],
    completed: false,
  },
  {
    question: "El lanzamiento de 'Beat It' de Michael Jackson fue en el año...",
    image:  img4,
    options: [
      { res: "1995", val: false },
      { res: "1990", val: false },
      { res: "1982", val: true },
    ],
    completed: false,
  },
  {
    question: "¿Cuál de los siguientes artistas tiene el disco más vendido de toda la historia?",
    image: img5,
    options: [
      { res: "John Lennon", val: false },
      { res: "Michael Jackson", val: true },
      { res: "Madonna", val: false },
    ],
    completed: false,
  },
  {
    question: "¿De qué solista o grupo musical pertenece la canción Jump?",
    image: img6,
    options: [
      { res: "Van Halen", val: true },
      { res: "Queen", val: false },
      { res: "Steve Wonder", val: false },
    ],
    completed: false,
  },
]