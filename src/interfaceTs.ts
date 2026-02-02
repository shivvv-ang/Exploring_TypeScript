//interface (Interfaces define minimum requirements, not maximum)

interface Charger {
  plug: string;
  voltage: number;
}

//every object that call itself charger must have these properties in it

//using interface

const myCharger: Charger = {
  plug: "Usb-C",
  voltage: 20,
};

//implements -> class follow the interface rules (Properties & methods declared in the interface must exist in the class with compatible types.)

class SamsungCharger implements Charger {
  plug = "Usb-C";
  voltage = 25;

  charge() {
    console.log("Charging ....");
  }
}

function useCharger(charger: Charger) {
  console.log(charger.voltage);
}

useCharger(myCharger);

const samsung = new SamsungCharger();

useCharger(samsung);
