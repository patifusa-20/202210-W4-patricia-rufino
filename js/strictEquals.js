const strictEquals = (a, b) => {
    let valueA = a;
    const valueB = b;
    // Por defecto, la función Object.is() devuelve TRUE cuando se trata de NaN
    if (Number.isNaN(a)) {
        // Para lograr que NaN devuelva FALSE usando la función Object.is(), isNaN devuelve TRUE, lo convierto en string.
        valueA = a.toString();

        // Por defecto, la función Object.is() devuelve FALSE cuando se trata de comparar 0 positivo y negativo
    } else if (Number.isInteger(a) && a < 1) {
        // Para solventarlo, si 'a' es un número y es menor que 1, le doi valor negativo para que siempre sea un negativo con negativo que resulte positivo o que dé a ambos el negativo
        valueA = -a;
    }

    const result = Object.is(valueA, valueB);
    console.log(result);
};

export default strictEquals;
