export interface Photo {
    id: number;
    url: string;
    isMain: boolean;
}

export interface Profile {
    id: number;
    firstName: string;
    lasttName: string;
    gender: string;
    address: string;
    age: number;
    nic: string;
    photoUrl: string;
    about: string;
    email: string;
    phone: string;
    status: boolean;
    education: string;
    skills: string;
    workSummery: string;
    salaryHourly: number;
    workAs: string;
    created: Date;
    city: string;
    district: string;
    category: string;
    subCategory: string;
    photos: Photo[];
}
