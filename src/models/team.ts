class Team {
    id: number
    city: string
    teamName: string
    conf: string
    logo: string

    constructor(id: number, city: string, teamName: string, conf: string, logo: string){
        this.id = id,
        this.city = city,
        this.teamName = teamName, 
        this.conf = conf,
        this.logo = logo
    }
}

export default Team;
