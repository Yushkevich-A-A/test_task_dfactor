function translateKelvinToCelsius(value) {
    const celsius = value - 272.15;
    return Math.round(celsius);
}

export default translateKelvinToCelsius;