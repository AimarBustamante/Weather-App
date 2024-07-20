// La API entrega la temperatura en grados kelvin. Este util convierte los grados kelvin a celcius

export const formatTemperature = (temperature: number): number => {
	const kelvin = 273.15;
	return parseInt((temperature - kelvin).toString());
};
