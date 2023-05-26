// classes
class Character {
    name?: string;
    stregth: number;
    skill: number;

    constructor(stregth: number, skill: number) {
        this.stregth = stregth;
        this.skill = skill;
    }

    attack(): void {
        console.log(`Attack with ${this.stregth} points`);
    }
}

const p1 = new Character(10, 98);
p1.attack()


/* Data Modifiers
    public --> é acesavel de qualquer lugar
    private --> é acessavel apenas dentro da propria classe pai
    protected --> é acessavel dentro da classe pai e das classe filhas
*/