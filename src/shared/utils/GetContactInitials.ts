/*  Función que elimina emojis y símbolos especiales del nombre. 
    Extrae las iniciales de las palabras. 
    Devuelve solo los primeros 2 caracteres en mayúsculas.
*/
export function GetContactInitials(name: string): string {
    return name
        .replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|[\uD83C-\uDBFF\uDC00-\uDFFF])+/g,
        ''
    )
    .split(' ')
    .map(word => word[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}