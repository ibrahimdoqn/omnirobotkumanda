let C = 0
let F = 0
let E = 0
let D = 0
radio.setGroup(1)
basic.forever(function () {
    D = pins.digitalReadPin(DigitalPin.P14)
    E = pins.digitalReadPin(DigitalPin.P13)
    F = pins.digitalReadPin(DigitalPin.P12)
    C = pins.digitalReadPin(DigitalPin.P15)
    if (E == 0 && D == 0) {
        radio.sendValue("SolOn", 1)
        radio.sendValue("SagArka", -1)
        radio.sendValue("SagOn", 0)
        radio.sendValue("SolArka", 0)
    } else if (E == 0 && F == 0) {
        radio.sendValue("SolOn", 0)
        radio.sendValue("SagArka", 0)
        radio.sendValue("SagOn", -1)
        radio.sendValue("SolArka", 1)
    } else if (C == 0 && F == 0) {
        radio.sendValue("SolOn", -1)
        radio.sendValue("SagArka", 1)
        radio.sendValue("SagOn", 0)
        radio.sendValue("SolArka", 0)
    } else if (C == 0 && D == 0) {
        radio.sendValue("SolOn", 0)
        radio.sendValue("SagArka", 0)
        radio.sendValue("SagOn", 1)
        radio.sendValue("SolArka", -1)
    } else if (E == 0) {
        radio.sendValue("SagOn", -1)
        radio.sendValue("SolArka", 1)
        radio.sendValue("SolOn", 1)
        radio.sendValue("SagArka", -1)
    } else if (C == 0) {
        radio.sendValue("SagOn", 1)
        radio.sendValue("SolArka", -1)
        radio.sendValue("SolOn", -1)
        radio.sendValue("SagArka", 1)
    } else if (D == 0) {
        radio.sendValue("SagOn", 1)
        radio.sendValue("SolArka", 1)
        radio.sendValue("SolOn", 1)
        radio.sendValue("SagArka", 1)
    } else if (F == 0) {
        radio.sendValue("SagOn", -1)
        radio.sendValue("SolArka", -1)
        radio.sendValue("SolOn", -1)
        radio.sendValue("SagArka", -1)
    } else {
        radio.sendValue("Dur", 0)
    }
})
