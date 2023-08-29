import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

function keyupCheck() {
  var keyupValue = document.getElementById( "keyupForm" ).value;
  document.getElementById( "onkeyup" ).innerHTML = keyupValue;
}

// function ShowLength( str ) {
//   document.getElementById("inputlength").innerHTML = str.length + "文字";
// }