import white from "../Assets/white.jpg";

function Story() {
  return (
    <div
      className="story"
      style={{
        backgroundColor: "black",
        color: "white",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div style={{ width: "75%", paddingLeft: "25%", paddingTop: "5%" }}>
        <h1>Storys, Styles und Sportbekleidung von adidas seit 1949 </h1>
        <br />
        <br />

        <h3>
          Sport hält uns körperlich fit. Körperlich und geistig. Sport bringt
          uns zusammen. Sport hat die Kraft, Leben zu verändern. Wir liefern dir
          inspirierende Storys von unseren Athleten, jede Menge Motivation, in
          Bewegung zu kommen, und natürlich immer die neueste Sportbekleidung
          mit den innovativsten Technologien, die dich zu Höchstleistungen und
          Bestzeiten antreibt. adidas ist die Anlaufstelle für Läufer,
          Basketballspieler, Fußballer und Fitness-Freaks. Für Wanderer, die am
          Wochenende raus aus der Stadt wollen und das Outdoor-Abenteuer suchen.
          Für Yoga-Lehrer, die auf der Matte alles in Einklang bringen. Die
          3-Streifen sieht man aber auch in der Musik-Szene. Auf der Bühne, auf
          Festivals. Mit unseren Sportartikeln bist du bereit, alles zu geben,
          wenn der Anpfiff ertönt, der Startschuss fällt. Wir bringen dich ins
          Rennen und über die Ziellinie. Wir unterstützen Kreativität und
          Sportsgeist. Wir bringen dich in deinem Sport weiter. Und im Leben.
          Gemeinsam können wir die Welt verändern. adidas bietet mehr als Sport-
          und Workoutkleidung. Zusammen mit den Besten der internationalen
          „sports clothing“-Szene schaffen wir Innovationen, um dir genau die
          Sportkleidung und genau den Style zu liefern, der deinen sportlichen
          Anforderungen entspricht. Nachhaltigkeit steht dabei im Mittelpunkt.
          Wir unterstützen Macher und verschieben tagtäglich die
          Innovationsgrenzen. Uns ist dabei bewusst, welche Auswirkungen wir auf
          die Welt haben.
        </h3>

        <img
          src={white}
          alt="..."
          style={{
            width: "20%",
            height: "auto",
            marginTop: "10%",
            marginLeft: "40%",
          }}
        />
      </div>
    </div>
  );
}

export default Story;
