class Team {
    id: number
    city: string
    teamName: string
    conf: string

    constructor(id: number, city: string, teamName: string, conf: string){
        this.id = id,
        this.city = city,
        this.teamName = teamName, 
        this.conf = conf
    }
}

export default Team;
