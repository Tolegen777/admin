export interface IStaffResponse {
    id: number,
    firstName: string,
    secondName: string,
    iin: string,
    user: {
        phone: string,
        roles: [
            {
                id: number,
                value: string,
                description: string
            }
        ]
    }
}


export interface IOneStaffResponse {

    createdAt: string,
    updateAt: string,
    id: number,
    description: string,
    age: number,
    firstName: string,
    secondName: string,
    middleName?: string
    block: { id: number, text: string, block: boolean, workerProfile: any },
    kids: number,
    date: string,
    iin: string,
    user: {
        id: number,
        phone: string
    },
    place: {
        id: number,
        street: string,
        floor: number,
        building: string,
        apartment: string,
        index: string,
        city?: {
            id: number,
            value: string
        }
    }
}


export interface ICreateWorker {
    phone: string,
    password: string,
    firstName: string,
    secondName: string,
    middleName: string,
    iin: string,
    date: string,
    cityId: number,
    street: string,
    floor: number,
    building: string,
    apartment: string,
    index: string

}


