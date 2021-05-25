import React, {ChangeEvent, useState} from "react";
import {useValidation} from "./useValidation";

export const useInput = (initialValue: string, validations: any) => {
    const [value, setValue] = useState<string>(initialValue)
    const [isDirty, setDirty] = useState<boolean>(false)

    const valid = useValidation(value, validations)

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        setDirty(true)
    }

    return {
        value,
        onChange,
        onBlur,
        isDirty,
        ...valid
    }
}