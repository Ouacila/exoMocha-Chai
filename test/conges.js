var expect = require('chai').expect
var assert = require('assert')

reste = 8;

function typeConge(type) {
    if (type == "repos" || type == "maladie" || type == "urgent" || type == "longue durée")
    return true
}
function causeVide(type, cause) {
    if(type=="repos" && cause==null|| cause)
    return true
}
function causeOblig(type,cause){
    if(type!="repos" && cause!=null)
    return true
}
// function temps(type,reste){
//     if()
// }

// function conge(type,cause)
// if(type=="maladie"|| type=="urgent"||type=="longue durée")

describe('Jours de congés', () => {
    it('Le nombre de jours est sup ou égal à 1',()=>{expect(reste).to.be.greaterThan(1);}) 
    it("Type de congés ok" , () => {
        assert.ok(typeConge("maladie"))
    })
    it("Si le type est repos, cause p.ê vide", () => {
        assert.ok(causeVide("repos"))
    })
    it("Si le type n'est pas repos, la cause ne peut pas être vide", () => {
        assert.ok(causeOblig("urgence","décès"))
    })
})