export default function Home() {
  return (
    <main>
      <h1>Astrology Bitches and Shit</h1>
      <p>Type in your house, degrees, and minutes to determine your color.</p>
      <div className="py-4 px-0 mb-4 border-solid">
        <label>House</label>
        <input type="number" id="house" name="house" min="1" max="12" />
        <label>Degree</label>
        <input type="number" id="degree" name="degree" min="0" max="29" />
        <label>Minutes</label>
        <input type="number" id="minutes" name="minutes" min="0" max="59" />
        <input type="button" id="calculate" value="Re-get Color" />
      </div>
      <div className="big-color-square h-50 w-50 mb-4 bg-white inline-block"></div>
    </main>
  );
}
