function showTime() {
  const date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let month = date.toLocaleString("en-US", { month: "long" });
  let year = date.getFullYear();
  let day = date.toLocaleString("en-US", { weekday: "long" });
  let d = date.getDate();
  let sm = h < 12 ? "PM" : "AM";
  h = h % 12 || 12;
  document.getElementById(
    "tarikh"
  ).innerHTML = `${day}, ${month} ${d}, ${year}`;
  document.getElementById("temh").innerHTML = `${h
    .toString()
    .padStart(2, "0")}:${m.toPrecision(2)}:${s.toString().padStart(2, "0")}`;
  document.getElementById("spm").innerHTML = `${sm}`;
}
showTime();
setInterval(showTime, 1000);
