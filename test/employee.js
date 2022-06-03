var expect = require('chai').expect
var assert = require('assert')

firstName = 'Ouacila';
lastName = 'BACHIR';

function verifId(id){
    return id>0
}
function nameLong(nom, prenom) {
    if(nom.length>3 && prenom.length>3)
    return true
}
function age (age) {
    return age>20
}
function grade(grade) {
    if(grade=="admin"||grade=="ADMIN")
    return true
    else if(grade=="ingenieur"||grade=="INGENIEUR")
    return true
    else if(grade=="technicien"||grade=="TECHNICIEN")
    return true
    else if(grade=="ouvrier"||grade=="OUVRIER")
    return true
    else
    return false
}
function verifAdress (adress) {
    if (adress.length>20 && adress.includes(" "))
    return true
}



describe('Employés', () => {
    it('le prénom est une chaîne de K',()=>{expect(firstName).to.be.a('string');}) 
    it('le nom de famille est une chaîne de K', ()=> {expect(lastName).to.be.a('string')} )
    it ("L'id est un entier positif", () => {
        assert.ok(verifId(5))
    })
    it("Les nom et prénom sont min de 3 K" , () => {
        assert.ok(nameLong("Ouacila", "BACHIR"))
    })
    it("L'age est superieur a 20", () => {
        assert.ok(age(25))
    })
    it("Le grade est ok", () => {
        assert.ok(grade("ouvrier"))
    })
    it("L'adresse est ok", () => {
        assert.ok(verifAdress("16 rueLenineIVRY-SUR-SEINE"))
    })
})
