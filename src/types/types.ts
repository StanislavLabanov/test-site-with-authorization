interface TypeElementNews {
   id: number
   img: string,
   name: string,
   dataImg: string,
   data: string,
   title: string,
}

export interface registyNewsMassType {
   objectsData: TypeElementNews[]
}

interface documents {
   category: string
   title: string
   data: string
   page: number
   img: string
   size: string
}

export interface DocumentsPropsType {
   documentsMass: documents[]
}

interface questyonsMassType {
   id: number,
   heading: string,
   title: string
}

export interface QuestyosPropsType {
   questyonsMass: questyonsMassType[]
}

interface registriesMassType {
   id: number
   name: string
   cod: string
   class: string
   data: string
   from: string
}

export interface RegistriesPropsType {
   registriesMass: registriesMassType[]
}

export interface newObjType {
   [key: string]: null | string
}

interface ObjmassPagesRedistriesType {
   id: number
   page: number
}

export type massPagesRedistriesType = ObjmassPagesRedistriesType[]


export interface PersAccountDopBlockPropType {
   city: string
   countryes: string
   middleName: string
   name: string
   password: string
   passwordTwo: string
   surname: string
   tel: string
}