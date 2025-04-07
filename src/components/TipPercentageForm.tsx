import { Dispatch,SetStateAction } from "react"


const tipOptions = [
    {
      id: 'tip-10',
      value: .10,
      label: '10%'
    },
    {
      id: 'tip-20',
      value: .20,
      label: '20%'
    },
    {
      id: 'tip-50',
      value: .50,
      label: '50%'
    },
  ]


type TipPercentageFormProps = {
 setTip: Dispatch<SetStateAction<number>>,
 tip:number

}



export default function TipPercentageForm({setTip,tip}: TipPercentageFormProps) {
  return (
    <div>
    <h3 className="text-lg font-bold text-center">Porcentaje de propina

    </h3>

    <form >
        {tipOptions.map(tipOption => (

        <div className="flex gap-2 items-center" key={tipOption.id}>
                <label
                htmlFor="{tipOption.id}"
                >{tipOption.label}</label>

                <input 
                    id={tipOption.id}
                    type="radio"
                    name="tip"
                    value={tipOption.value}
                    onChange={e => setTip(+e.target.value)}
                    checked={tipOption.value === tip}
                
                />
        </div>

        ))}
       
    </form>
        </div>
  )
}
