import {Address} from './address'
export interface Customer {
    id : number | null,
    customerName : string,
    fatherName: string,
    motherName: string,
    countryId: number | string,
    maritalStatus: number,
    customerPhoto: string | null,
    address : Address[] | null
}
