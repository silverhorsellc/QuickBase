import { LabelValue } from './helperModels'

export enum InputTypes {
  email = 0,
  number = 1,
  text = 2,
  select = 3,
  multiSelect = 4
}

export enum MultiOrder {
  alphabetical = 0,
  reversed = 1,
}

export interface IGenericInput {
  configId: string | null
  label: string
  value?: string
  required: boolean
  type: number
}

export interface ISelect extends IGenericInput {
  multi: boolean
  options: LabelValue[]
  orderBy: number
}

export default class FormSettings {
    public static NewGenericInputSettings = (): IGenericInput => {
      return {
        configId: null,
        label: '',
        required: false,
        type: InputTypes.text,
        value: undefined,
      }
    }
    public static NewSelectInputSettings = (multi: boolean = false): ISelect => {
      return {
        configId: null,
        label: '',
        multi,
        options: [],
        orderBy: MultiOrder.alphabetical,
        required: false,
        type: multi ? InputTypes.multiSelect : InputTypes.select,
        value: undefined
      }
    }
  }