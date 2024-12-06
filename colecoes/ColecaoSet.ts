
const frutas: Set<string> = new Set<string>();

frutas.add("Banana");
frutas.add("Maçã");
frutas.add("Caqui");
frutas.add("Banana");
frutas.add("Manga");
frutas.add("banana");

console.table(frutas);

console.log("A fruta Morango existe? ", frutas.has("Morango"));

frutas.delete("Caqui");

console.table(frutas);

let setOrdenado: Array<string> = Array.from(frutas).sort();

console.table(setOrdenado);

