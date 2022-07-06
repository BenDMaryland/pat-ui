
import React, { Children } from 'react'
import Button from '../Button'
import Input from '../Input'


export enum DialogType {
    Simple = 'simple',
    Alert = 'alert',
    Form = 'form'

}


interface IDialogProps {
    dialogType?: DialogType
    dialogTitle?: string
    dialogParagraph?: string
    buttonOneText?: string
    buttonTwoText?: string
}




const Dialog: React.FC<IDialogProps> = (props) => {
    const { children, dialogType, dialogTitle, dialogParagraph, buttonOneText, buttonTwoText } = props

    //default classname  
    let classNameList: string[] = ['dlg']

    const classNames = classNameList.join(" ")

    if (dialogType === DialogType.Simple) {
        console.log("i ran ");

        classNameList.push('dlg-simple')
    }
    if (dialogType === DialogType.Alert) {
        classNameList.push('dlg-alert')
    }
    if (dialogType === DialogType.Form) {
        classNameList.push('dlg-form')
    }

    return (

        <div className={classNameList.join(" ")} >
            <h3 className='dialogTitle'>{dialogTitle}</h3>
            {children}
            <p className='dialogParagraph'>{dialogParagraph}</p>

            <div>
                {dialogType === DialogType.Form ? <input
                    placeholder="Email Address"
                /> : null}
            </div>
            <div className='dlg-btns'>
                {dialogType === DialogType.Form ? <Button btnType="link"
                    disabled={false}>{buttonOneText}</Button> : null}
                {dialogType === DialogType.Form ? <Button btnType="link"
                    disabled={false}>{buttonTwoText}</Button> : null}

            </div>
        </div>
    )
}

export default Dialog