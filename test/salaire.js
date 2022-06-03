var expect = require('chai').expect
var assert = require('assert')

function verifId (id_emp){
    if(id_emp)
    return true
}

function salBrut(salaireNet, brut){
    let net10 = salaireNet*0.1
    if (brut>net10+salaireNet )
    return true
}

function taxes(salaireBrut, taxes) {
    let brut20 = salaireBrut*0.2
    if(taxes<=brut20)
    return true
}

function avance (salaireBrut, adv ) {
    let brut35 = salaireBrut*0.35
    if(adv<brut35)
    return true
}

describe('Salaires', () => {
    it("L'id employé existe", () => {
        assert.ok(verifId(5))
    })
    it("Salaire brut supérieur au net d'au moins 10%", () => {
        assert.ok(salBrut(1600, 1800))
    })
    it("Taxes inférieures à 20% du salaireBrut", () => {
        assert.ok(taxes(2300, 225))
    })
    it("Avance inf à 35% du brut", () => {
        assert.ok(avance(1200, 400))
    })
})