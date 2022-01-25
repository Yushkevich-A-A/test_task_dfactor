function translateKelvinToCelsius(value) {
    const celsius = value - 272.15;
    return celsius.toFixed(2);
}

export default translateKelvinToCelsius;