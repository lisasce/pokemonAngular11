export class Pokemon {

     id: number | null;
     hp: number; // pt vie
     cp: number; // pt degats
     name: string;
     picture: string;
     types: Array<string>;
     created: Date;


    constructor( id: number = null,
                 hp: number = 45,
                 cp: number = 25,
                 name: string = "Random Name",
                 picture: string = "https://cdn.pixabay.com/photo/2016/08/15/00/50/pokeball-1594373_960_720.png",
                 types: Array<string> = ['Normal'],
                 created: Date = new Date()
    ){

            this.id = id;
            this.hp = hp;
            this.cp = cp;
            this.name = name;
            this.picture = picture;
            this.types = types;
            this.created = created;


    }

}
