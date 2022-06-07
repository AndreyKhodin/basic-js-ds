let styles = ["Джаз", "Блюз"];

//alert( styles[0] ); // Джаз
//alert( styles[1] ); // Блюз
styles.push("Рок-н-ролл");
styles.pop()
stles.pop()
styles.push("Классика");
styles.push("Рок-н-ролл");
styles.shift()
styles.unshift("Регги")
styles.unshift("Рэп")
for (let i = 0; i < styles.length; i++) {
    alert( styles[i] );
}